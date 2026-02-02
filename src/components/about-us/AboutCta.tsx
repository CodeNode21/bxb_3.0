export default function AboutCta() {
  return (
    <div className="bxb-content-section overflow-hidden">
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-5">
            <div
              className="bxb-content-thumb"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <img src="/assets/images/about/image-1.png" alt="Thumb" />
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div
              className="bxb-default-content w-100 light-color pl-30"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h2>Built with care and flexibility</h2>
              <p>
                We handle the ongoing digital work so you can stay focused on
                your business without worrying about updates or technical
                maintenance.
              </p>
              <p>
                We move efficiently and take initiative, presenting thoughtful
                solutions early and refining them with your input. With
                full-stack capabilities, we can adapt and build whatever your
                project requires.
              </p>
              <div className="mt-50">
                <div className="bxb-contact-info">
                  <ul>
                    <li>
                      Email:
                      <a href="mailto:info@brixbiz.com">info@brixbiz.com</a>
                    </li>
                    {/* <li>Linkedin:<a href="">www.brixbiz.com</a></li> */}
                    {/* <li>Youtube:<a href="">www.brixbiz.com</a></li> */}
                    {/* <li>Instagram:<a href="">www.brixbiz.com</a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
