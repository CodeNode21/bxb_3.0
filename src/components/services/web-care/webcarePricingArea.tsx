"use client";
import Link from "next/link";
import { useState } from "react";

export default function WebCarePricingArea() {
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
        <div
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
        </div>

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
                    <h3>Website Health Checkup</h3>
                    <p>Basic</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$300</h2>
                      <span>.00</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$300</h2>
                      <span>.00</span>
                    </div>
                  )}

                  <div className="bxb-pricing-body">
                    <p>
                      You get a short written summary with finding and recommendations
                    </p>
                  </div>
                  <div className="bxb-pricing-feature">
                    <ul>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Full site review
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Analytics check
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        SEO basics check
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Domain status review
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Summary with recommendations
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn"
                    href="/contact-us?plan=health-checkup#contact_form"
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
                className="bxb-pricing-wrap wrap2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="bxb-pricing-top">
                  <div className="bxb-pricing-header">
                    <h3>Reporting & Monitoring</h3>
                    <p>Silent Support</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$320</h2>
                      <span>/Per Year</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$30</h2>
                      <span>/Per Month</span>
                    </div>
                  )}

                  <div className="bxb-pricing-body">
                    <p>
                      This is for clients who want visibility but minimal involvement.
                    </p>
                  </div>
                  <div className="bxb-pricing-feature">
                    <ul>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Google Analytics setup
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Monthly traffic report (PDF)
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Uptime monitoring
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Domain + hosting monitoring
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Alerts if something breaks
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn"
                    href="/contact-us?plan=reporting-monitoring#contact_form"
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
                className="bxb-pricing-wrap wrap2 active"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <div className="bxb-pricing-top">
                  <div className="bxb-pricing-header">
                    <h3>Ongoing Website Care</h3>
                    <p>Ongoing Maintenance</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$1600</h2>
                      <span>/Per Year</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$150</h2>
                      <span>/Per Month</span>
                    </div>
                  )}

                  <div className="bxb-pricing-body">
                    <p>
                      This plan is suitable for active websites, e-stores as well as
                      professional blogs.
                    </p>
                  </div>
                  <div className="bxb-pricing-feature">
                    <ul>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Everything in Reporting & Monitoring
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Content updates (reasonable scope)
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Image and media swaps
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Small layout or page changes
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Priority response when issues arise
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn btn2"
                    href="/contact-us?plan=ongoing-web-care#contact_form"
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
                    <h3>Web Care + SEO Support</h3>
                    <p>Up to 150 members</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$3200</h2>
                      <span>/Per Year</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$300</h2>
                      <span>/Per Month</span>
                    </div>
                  )}

                  <div className="bxb-pricing-body">
                    <p>
                      Ideal for complex websites, online platforms,
                      enterprise-level projects.
                    </p>
                  </div>
                  <div className="bxb-pricing-feature">
                    <ul>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Everything in Web Care
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        On-page SEO adjustments
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Metadata updates
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Page structure improvements
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Search performance monitoring
                      </li>
                     
                      <li>
                        <img
                          src="/assets/images/home1/checkX2.png"
                          alt="ratting"
                        />
                        Blogging
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/checkX2.png"
                          alt="ratting"
                        />
                        Backlinks
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/checkX2.png"
                          alt="ratting"
                        />
                        Aggressive campaigns
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn"
                    href="/contact-us?plan=web-care-seo#contact_form"
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
