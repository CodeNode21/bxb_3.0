"use client";
import Link from "next/link";
import { useState } from "react";

export default function GraphicsPricingArea() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bxb-section-pt">
      <div className="container">
        <div
          className="bxb-section-title center max-width-850"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2>Find a plan that fits</h2>
        </div>
        {/* <div
          className="bxb-section-title center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="bxb-title-pricing-btn">
            <label htmlFor="toggle" className="toggle-switch">
              <input
                className="toggle-button"
                id="toggle"
                type="checkBulletbox"
                checkBulleted={isYearly}
                onChange={(e) => setIsYearly(e.target.checkBulleted)}
              />
              <span>Monthly</span>
              <span>Yearly</span>
            </label>
          </div>
        </div> */}

        <div className="row">
          {/* Free */}
          <div className="col-xxl-3 col-md-6">
            <div className="bxb-pricing-column">
              <div
                className="bxb-pricing-wrap wrap2"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="bxb-pricing-top">
                  <div className="bxb-pricing-header">
                    <h3>Visual Assets</h3>
                    <p>One-off or small design needs</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$250</h2>
                      <span>/each</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$250</h2>
                      <span>/each</span>
                    </div>
                  )}

                  <div className="bxb-pricing-body">
                    <p>
                      
                    </p>
                  </div>
                  <div className="bxb-pricing-feature">
                    <ul>
                      <li>
                        <img
                          src="/assets/images/home1/checkBullet.png"
                          alt="ratting"
                        />
                        Infographics
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/checkBullet.png"
                          alt="ratting"
                        />
                       Posters and flyers
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/checkBullet.png"
                          alt="ratting"
                        />
                        Digital graphics & edits
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/checkBullet.png"
                          alt="ratting"
                        />
                        Social or web graphics
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn"
                    href="/contact-us?plan=visual-assets#contact_form"
                  >
                    Start
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Beginner */}
          <div className="col-xxl-3 col-md-6">
            <div className="bxb-pricing-column">
              <div
                className="bxb-pricing-wrap wrap2 active"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="bxb-pricing-top">
                  <div className="bxb-pricing-header">
                    <h3>Brand Foundations</h3>
                    <p>Foundational visuals to establish or refresh a brand.</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$750</h2>
                      <span>.00</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$750</h2>
                      <span>.00</span>
                    </div>
                  )}

                  <div className="bxb-pricing-body">
                    <p>
                      
                    </p>
                  </div>
                  <div className="bxb-pricing-feature">
                    <ul>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Logo design or variations
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Core brand visuals for digital use
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Business card design
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Social media template set
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Email Signature
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn btn2"
                    href="/contact-us?plan=brand-foundations#contact_form"
                  >
                    Start
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Starter */}
          <div className="col-xxl-3 col-md-6">
            <div className="bxb-pricing-column">
              <div
                className="bxb-pricing-wrap wrap2"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <div className="bxb-pricing-top">
                  <div className="bxb-pricing-header">
                    <h3>Light Animation</h3>
                    <p>Short-form motion animations</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$450</h2>
                      <span>/each</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$450</h2>
                      <span>/each</span>
                    </div>
                  )}

                  <div className="bxb-pricing-body">
                    <p>
                      
                    </p>
                  </div>
                  <div className="bxb-pricing-feature">
                    <ul>
                      <li>
                        <img
                          src="/assets/images/home1/checkBullet.png"
                          alt="ratting"
                        />
                        Logo Reveal Animation
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/checkBullet.png"
                          alt="ratting"
                        />
                        Service Icon Animation Set (3–5 icons)
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/checkBullet.png"
                          alt="ratting"
                        />
                        Homepage Hero Motion Element
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/checkBullet.png"
                          alt="ratting"
                        />
                        Section Header Animation
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/checkBullet.png"
                          alt="ratting"
                        />
                        Process Step Animation
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/checkBullet.png"
                          alt="ratting"
                        />
                        Feature Highlight Animation
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/checkBullet.png"
                          alt="ratting"
                        />
                        UI Interaction Animation
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/checkBullet.png"
                          alt="ratting"
                        />
                        Illustration Motion Scene
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn"
                    href="/contact-us?plan=light-animation#contact_form"
                  >
                    Start
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Pro */}
          <div className="col-xxl-3 col-md-6">
            <div className="bxb-pricing-column">
              <div
                className="bxb-pricing-wrap wrap2"
                data-aos="fade-up"
                data-aos-delay="1100"
              >
                <div className="bxb-pricing-top">
                  <div className="bxb-pricing-header">
                    <h3>Animation Clips</h3>
                    <p>Longer-form animation projects</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$1200</h2>
                      <span>& up</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$1200</h2>
                      <span>& up</span>
                    </div>
                  )}

                  <div className="bxb-pricing-body">
                    <p>
                      
                    </p>
                  </div>
                  <div className="bxb-pricing-feature">
                    <ul>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Multi-element animation sequences
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Custom graphics and motion assets
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Assembly and animation in After Effects
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Animated explainers (non-character based)
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Brand motion pieces
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Promotional motion content
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn"
                    href="/contact-us?plan=animation-clips#contact_form"
                  >
                    Start
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
