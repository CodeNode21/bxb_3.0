import Link from "next/link";

export default function SolutionsArea() {
  return (
    <div className="bxb-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <div
              className="bxb-content-thumb"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <img src="/assets/images/about/about-image3.png" alt="Thumb" />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div
              className="bxb-default-content pr50"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h2>We’re here to support you</h2>

              <p>
                Smaller businesses are often at a disadvantage online. We help
                level that playing field by building and managing yout digital space.
              </p>

              <p>
                Our work starts with what you already have. From there, we elevate and refine it for you so your online presence reflects the quality of what you do in the real world.
              </p>
              {/* <p>
                We believe running a business should be accessible, but smaller
                businesses are often at a disadvantage online. Our role is to
                help level that playing field by giving you the tools and
                support to show up with confidence.
              </p>

              <p>
                Every project is approached with care and attention to detail.
                We take what you already have and elevate it, so when clients
                find you online, your work feels professional, credible, and
                worth trusting.
              </p>

              <p>
                We handle the digital upkeep so you can stay focused on the work
                you do best, without worrying about constant updates or
                technical maintenance.
              </p>

              <p>
                As Brixbiz grows and evolves, the systems, tools, and experience
                we build along the way benefit our clients as well.
              </p>

              <p>
                We know time is limited. That’s why we often take initiative in
                presenting thoughtful design solutions early, refining them with
                your input until everything feels right. If you’ve seen
                something you like elsewhere, we can build it with the
                flexibility of full-stack development.
              </p> */}
              {/* <p>
                We focus on digital solutions that support how businesses
                actually operate day to day. From websites to media and ongoing
                support, everything is built to be useful, reliable, and easy to
                maintain.
                </p> */}
              {/* <p className="mb-0">
                The goal isn’t complexity or hype. It’s clarity, consistency,
                and tools that help your business show up better online and grow
                at a pace that makes sense.
              </p> */}
              <div className="mt-50">
                <Link
                  className="bxb-default-btn "
                  data-aos="fade-up"
                  data-aos-delay="600"
                  href="/contact-us"
                  data-text="Get in touch"
                >
                  <span className="button-wraper">Get in touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
