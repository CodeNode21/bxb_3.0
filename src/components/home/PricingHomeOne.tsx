"use client";
import Link from "next/link";
import { useState } from "react";

export default function PricingHomeOne() { 
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <div className="bxb-section-padding2 position-r">
      <div className="bxb-pricing-shape">
        <img src="/assets/images/home1/home-bg3.png" alt="bg" />
      </div>
      <div className="container">
        <div
          className="bxb-section-title center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2>Pick what fits now, scale later.</h2>
          <div className="bxb-title-pricing-btn mt-50">
            <label htmlFor="toggle" className="toggle-switch">
              <input
                className="toggle-button"
                id="toggle"
                type="checkbox"
                checked={isMonthly}
                onChange={(e) => setIsMonthly(e.target.checked)}
              />
              <span>Builds</span>
              <span>Hosting</span>
            </label>
          </div>
        </div>

        <div className="row">
          {/* Beginner */}
          <div className="col-xl-4 col-md-6">
            <div
              className="bxb-pricing-wrap"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="bxb-pricing-header">
                <h3>Starter</h3>
                <p>For new businesses or quick launches</p>
              </div>
              {isMonthly ? (
                <div className="bxb-pricing-price">
                  <h2>$10</h2>
                  <span>/Per Month</span>
                </div>
              ) : (
                <div className="bxb-pricing-price">
                  <h2>$500</h2>
                  <span></span>
                </div>
              )}
              <div className="bxb-pricing-body">
                <p>
                  A clean one-page site with essential info and a contact form to start generating inquiries.
                </p>
              </div>
              <div className="bxb-pricing-footer mt-50">
                <Link
                  className="bxb-default-btn d-block outline-btn"
                  href="/contact-us?plan=starter#contact_form"
                >
                  Choose this plan
                </Link>
              </div>
            </div>
          </div>

          {/* Pro */}
          <div className="col-xl-4 col-md-6">
            <div
              className="bxb-pricing-wrap active"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="bxb-pricing-header">
                <h3>Pro</h3>
                <p>For growing businesses</p>
              </div>
              {isMonthly ? (
                <div className="bxb-pricing-price">
                  <h2>$30</h2>
                  <span>/Per Month</span>
                </div>
              ) : (
                <div className="bxb-pricing-price">
                  <h2>$2,000</h2>
                  <span></span>
                </div>
              )}
              <div className="bxb-pricing-body">
                <p>
                  A detailed, scroll-based layout that tells your story and guides visitors toward action.
                </p>
              </div>
              <div className="bxb-pricing-footer mt-50">
                <Link
                  className="bxb-default-btn d-block outline-btn btn2"
                  href="/contact-us?plan=pro#contact_form"
                >
                  Choose this plan
                </Link>
              </div>
            </div>
          </div>

          {/* Pro */}
          <div className="col-xl-4 col-md-6">
            <div
              className="bxb-pricing-wrap"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="bxb-pricing-header">
                <h3>Enterprise</h3>
                <p>For established businesses</p>
              </div>
              {isMonthly ? (
                <div className="bxb-pricing-price">
                  <h2>$50</h2>
                  <span>/Per Month</span>
                </div>
              ) : (
                <div className="bxb-pricing-price">
                  <h2>$5,000</h2>
                  <span></span>
                </div>
              )}
              <div className="bxb-pricing-body">
                <p>
                  A fully custom, multi-page website built to showcase your business in detail and scale over time.
                </p>
              </div>
              <div className="bxb-pricing-footer mt-50">
                <Link
                  className="bxb-default-btn d-block outline-btn"
                  href="/contact-us?plan=enterprise#contact_form"
                >
                  Choose this plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
