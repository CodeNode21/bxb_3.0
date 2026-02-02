"use client";
import Link from "next/link";
import { useState } from "react";

export default function MediaPricingArea() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bxb-section-pt">
      <div className="container">
        <div
          className="bxb-section-title center max-width-850"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2>Book a shoot that fits your needs</h2>
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
                type="checkbox"
                checked={isYearly}
                onChange={(e) => setIsYearly(e.target.checked)}
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
                    <h3>Starter Capture</h3>
                    <p>Up to 1 hour</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$20</h2>
                      <span>/Per Year</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$300</h2>
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
                        Photography capture
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Planned shot list
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Editing
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Web-ready assets
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn"
                    href="/contact-us?plan=starter-capture#contact_form"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Beginner */}
          <div className="col-xxl-3 col-md-6">
            <div className="bxb-pricing-column">
              <div
                className="bxb-pricing-wrap wrap2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="bxb-pricing-top">
                  <div className="bxb-pricing-header">
                    <h3>Standard Shoot</h3>
                    <p>2–3 hours</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$950</h2>
                      <span>& up</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$950</h2>
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
                        Video Capture
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Interior and exterior coverage
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                       Short-form video clips
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                       Assets optimized for web and social
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn"
                    href="/contact-us?plan=standard-shoot#contact_form"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Starter */}
          <div className="col-xxl-3 col-md-6">
            <div className="bxb-pricing-column">
              <div
                className="bxb-pricing-wrap wrap2 active"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <div className="bxb-pricing-top">
                  <div className="bxb-pricing-header">
                    <h3>Full Coverage</h3>
                    <p>Half day</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$1100</h2>
                      <span>& up</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$1100</h2>
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
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Photography and video
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Extended shot list
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                       Multiple areas or locations
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Assets for web, social, and marketing
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn btn2"
                    href="/contact-us?plan=full-coverage#contact-form"
                  >
                    Book
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
                    <h3>Aerial Capture</h3>
                    <p>add on</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$250</h2>
                      <span>& up</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$250</h2>
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
                        Licensed drone operation
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Aerial photos and video
                      </li>
                      
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Exterior and location context
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Edited, optimized files
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn"
                    href="/contact-us?plan=aerial-capture#contact-form"
                  >
                    Book
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
