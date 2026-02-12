"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function AnimationProvider() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;

    const id = window.setTimeout(() => {
      AOS.init({ duration: 500, once: true, easing: "ease-in-out" });
      AOS.refresh();
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

    const id = window.setTimeout(() => requestAnimationFrame(initGSAP), 0);

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

  useEffect(() => {
    if (!mounted) return;

    // let the new page paint first
    requestAnimationFrame(() => {
      // ScrollSmoother controls scroll, so use it when available
      const smoother = ScrollSmoother.get();

      if (smoother) {
        smoother.scrollTo(0, false); // false = no animation
      } else {
        window.scrollTo(0, 0);
      }

      // keep ScrollTrigger in sync with new DOM
      ScrollTrigger.refresh();

      // optional: undo the manual restoration setting
      if ("scrollRestoration" in history) history.scrollRestoration = "auto";
    });
  }, [pathname, mounted]);

  return null;
}
