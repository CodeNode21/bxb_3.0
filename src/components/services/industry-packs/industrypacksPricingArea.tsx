"use client";
import PricingGrid from "@/components/reusable/PriceTableRow";
import { useState } from "react";

export default function IndustryPacksPricingArea() {

  return (
    <div className="bxb-section-pt">
      <div className="container">
        <div
          className="bxb-section-title center max-width-850"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2>Find a bundle that fits</h2>
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

        <PricingGrid isYearly="isMonthly" />
        <div className="row">
          {/* The Launcher Package */}
          {/* <div className="col-xxl-3 col-md-6">
            <div className="bxb-pricing-column">
              <div
                className="bxb-pricing-wrap wrap2"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="bxb-pricing-top">
                  <div className="bxb-pricing-header">
                    <h3>The Launcher Package</h3>
                    <p>1 member</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$20</h2>
                      <span>/Per Year</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$0</h2>
                      <span>/Per Month</span>
                    </div>
                  )}

                  <div className="bxb-pricing-body">
                    <p>
                      Ideal for individuals person and small businesses just
                      getting started.
                    </p>
                  </div>
                  <div className="bxb-pricing-feature">
                    <ul>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        AI-Ready Data Prep
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Feature Engineering
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Classification Models
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn"
                    href="/contact-us"
                  >
                    Start for free
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

          {/* Rapid Media Drop */}
          {/* <div className="col-xxl-3 col-md-6">
            <div className="bxb-pricing-column">
              <div
                className="bxb-pricing-wrap wrap2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="bxb-pricing-top">
                  <div className="bxb-pricing-header">
                    <h3>Rapid Media Drop</h3>
                    <p>Up to 50 members</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$39</h2>
                      <span>/Per Year</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$29</h2>
                      <span>/Per Month</span>
                    </div>
                  )}

                  <div className="bxb-pricing-body">
                    <p>
                      This is an excellent option for small businesses who are
                      starting out.
                    </p>
                  </div>
                  <div className="bxb-pricing-feature">
                    <ul>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        AI-Ready Data Prep
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Feature Engineering
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Classification Models
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Regression Models
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn"
                    href="/contact-us"
                  >
                    Start for free
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

          {/* Website Rescue Pack */}
          {/* <div className="col-xxl-3 col-md-6">
            <div className="bxb-pricing-column">
              <div
                className="bxb-pricing-wrap wrap2 active"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <div className="bxb-pricing-top">
                  <div className="bxb-pricing-header">
                    <h3>Website Rescue Pack</h3>
                    <p>Up to 100 members</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$79</h2>
                      <span>/Per Year</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$59</h2>
                      <span>/Per Month</span>
                    </div>
                  )}

                  <div className="bxb-pricing-body">
                    <p>
                      This plan is suitable for e-commerce stores as well as
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
                        AI-Ready Data Prep
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Feature Engineering
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Classification Models
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Regression Models
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check2.png"
                          alt="ratting"
                        />
                        Time Series Models
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn btn2"
                    href="/contact-us"
                  >
                    Start for free
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

          {/* Local Visibility Boost */}
          {/* <div className="col-xxl-3 col-md-6">
            <div className="bxb-pricing-column">
              <div
                className="bxb-pricing-wrap wrap2"
                data-aos="fade-up"
                data-aos-delay="1100"
              >
                <div className="bxb-pricing-top">
                  <div className="bxb-pricing-header">
                    <h3>Local Visibility Boost</h3>
                    <p>Up to 150 members</p>
                  </div>

                  {isYearly ? (
                    <div className="bxb-pricing-price">
                      <h2>$99</h2>
                      <span>/Per Year</span>
                    </div>
                  ) : (
                    <div className="bxb-pricing-price">
                      <h2>$89</h2>
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
                        AI-Ready Data Prep
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Feature Engineering
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Classification Models
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Regression Models
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Time Series Models
                      </li>
                      <li>
                        <img
                          src="/assets/images/home1/check.png"
                          alt="ratting"
                        />
                        Clustering models
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bxb-pricing-footer mt-50">
                  <Link
                    className="bxb-default-btn d-block outline-btn"
                    href="/contact-us"
                  >
                    Start for free
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
