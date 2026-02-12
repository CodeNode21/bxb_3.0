"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function AnimationProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Delay AOS until after hydration settles
    const id = window.setTimeout(() => {
      AOS.init({
        duration: 500,
        once: true,
        easing: "ease-in-out",
      });
      AOS.refresh(); // ensures it picks up elements rendered after mount
    }, 0);

    return () => window.clearTimeout(id);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    let smoother: ScrollSmoother | undefined;
    let ctx: gsap.Context | undefined;

    const initGSAP = () => {
      ctx = gsap.context(() => {
        ScrollSmoother.get()?.kill();

        smoother = ScrollSmoother.create({
          smooth: 1.2,
          effects: true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });

        ScrollTrigger.refresh();
      });
    };

    // Push GSAP init a bit later too
    const id = window.setTimeout(() => {
      requestAnimationFrame(initGSAP);
    }, 0);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.clearTimeout(id);
      ctx?.revert();
      smoother?.kill();
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [mounted]);

  return null;
}
