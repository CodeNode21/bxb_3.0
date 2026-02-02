"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ✅ CTA slider items (data-driven)
const ctaItems = [
  "Launch",
  "Reports",
  "Updates",
  "Refresh",
  "Local SEO",
  "Reputation Building",
  "Performance Fixes",
  "Visual Refresh",
];

export default function FooterOne() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clone content for infinite scroll effect
    const clone = container.innerHTML;
    container.innerHTML += clone;

    let scrollAmount = 0;
    let frameId: number;

    const marqueeScroll = () => {
      if (!isPaused && container) {
        scrollAmount += 2; // speed
        container.style.transform = `translateX(-${scrollAmount}px)`;

        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      frameId = requestAnimationFrame(marqueeScroll);
    };

    frameId = requestAnimationFrame(marqueeScroll);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused]);

  return (
    <footer className="bxb-footer-section">
      {/* Shape */}
      <div className="bxb-footer-shape">
        <img src="/assets/images/home1/footer-bg1.png" alt="shape" />
      </div>

      {/* CTA Slider */}
      <div
        className="bxb-footer-top inner-mwrquee-wra overflow-hidden"
        // onMouseEnter={() => setIsPaused(true)}
        // onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="bxb-cta-slider-init flex"
          ref={containerRef}
          style={{
            display: "inline-flex",
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {ctaItems.map((title, i) => (
            <div key={i} className="bxb-cta-slider-item flex items-center px-6">
              <img src="/assets/images/home1/star.svg" alt="Icon" />
              <div className="bxb-cta-slider-title">{title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer content */}
      <div className="container">
        <div className="bxb-footer-one">
          <div className="row">
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="bxb-footer-textarea">
                <Link href="/">
                  <Image
                    src="/assets/images/logo_alt1.png"
                    width="250"
                    height="125"
                    alt="logo"
                  />
                </Link>
                <p>
                  Our mission is to help real businesses show up better online
                  through thoughtful websites, media, and ongoing support.
                </p>
                <a href="mailto:example@gmail.com">
                  <span>-</span> info@brixbiz.com
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4">
              <div className="bxb-footer-menu pl-30">
                <h4>Pages</h4>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>

                  <li>
                    {/* <Link href="/portfolio">Portfolio</Link> */}
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="bxb-footer-menu pl-70">
                <h4>Services</h4>
                <ul>
                  <li>
                    <Link href="/web-development">Site Builds</Link>
                  </li>
                  <li>
                    <Link href="/web-care">Site Care</Link>
                  </li>
                  <li>
                    <Link href="/media">Media</Link>
                  </li>
                  <li>
                    <Link href="/graphics">Graphic Design</Link>
                  </li>
                  <li>
                    <Link href="/industry-packs">Industry Packs</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="bxb-footer-menu mb-0">
                <h4>Subscribe to our newsletter</h4>
                <div className="bxb-subscribe-field">
                  <input type="email" placeholder="Enter your email" />
                  <button className="sub-btn" type="submit">
                    <img src="/assets/images/home1/arrow-white.svg" alt="Icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bxb-footer-bottom-text">
          <p>
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            Brixbiz
          </p>
        </div>
      </div>
    </footer>
  );
}
