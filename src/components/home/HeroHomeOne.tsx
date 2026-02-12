"use client";
import Link from "next/link";
import Slider from "react-slick";

const settings = {
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  arrows: false,
  pauseOnHover: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function HeroHomeOne() {
  return (
    <div className="bxb-hero-section">
      <div className="bxb-hero-shape">
        <img src="/assets/images/home1/hero-bg2.png" alt="bg" />
      </div>
      <div className="container">
        <div className="bxb-hero-content1">
          <h1 data-aos="fade-left" data-aos-delay="500">
            Creative Studio
          </h1>
          <p data-aos="zoom-in" data-aos-delay="600">
            We’re a small creative studio ready to help you with your web-side of the business. 
          </p>
          <div className="bxb-hero-button mt-50">
            <Link
              className="bxb-default-btn"
              data-aos="fade-up"
              data-aos-delay="900"
              href="/services"
              data-text="Services"
            >
              <span className="button-wraper">What we do</span>
            </Link>
            <Link
              className="bxb-default-btn outline-btn"
              data-aos="fade-up"
              data-aos-delay="1000"
              href="/about-us"
              data-text="Learn more"
            >
              <span className="button-wraper">Who we are</span>
              {/* <span className="button-wraper">What we've done</span> */}
            </Link>
          </div>
        </div>
        <div
          className="bxb-hero-dashboard"
          data-aos="fade-up"
          data-aos-delay=".7s"
        >
          {/* <img src="/assets/images/home1/Dashboard.png" alt="Dashboard" /> */}
        </div>
        <div className="divider"></div>
        <div className="bxb-brand-slider-wraper">
          <div
            className="bxb-brand-slider-title"
            data-aos="fade-up"
            data-aos-delay=".9s"
          >
            <p>
              Companies of all sizes trust us with websites, design, photo, video, and ongoing website care.
            </p>
          </div>
          <Slider {...settings} className="bxb-brand-slider">
            <div className="bxb-logo-icon-item">
              <img src="assets/icons/seo1.svg" alt="Icon" />
            </div>
            <div className="bxb-logo-icon-item">
              <img src="assets/icons/web-care1.svg" alt="Icon" />
            </div>
            <div className="bxb-logo-icon-item">
              <img src="assets/icons/web-build1.svg" alt="Icon" />
            </div>
            <div className="bxb-logo-icon-item">
              <img src="assets/icons/media1.svg" alt="Icon" />
            </div>
            <div className="bxb-logo-icon-item">
              <img src="assets/icons/hosting1.svg" alt="Icon" />
            </div>
            <div className="bxb-logo-icon-item">
              <img src="assets/icons/design1.svg" alt="Icon" />
            </div>
            <div className="bxb-logo-icon-item">
              <img src="assets/icons/googads1.svg" alt="Icon" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
