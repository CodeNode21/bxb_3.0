export default function WebDevDetailsArea() {
  return (
    <>
      <div className="bxb-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 offset-xl-1 offset-lg-0 order-lg-2">
              <div
                className="bxb-content-thumb"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                <img src="/assets/images/web-dev/web-dev1.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 d-flex align-items-center">
              <div
                className="bxb-default-content"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h2>Update, Upgrade, Refresh</h2>
                <p>
                  We build the natural way - with code. Your website get's it's
                  own repository for version control and back up. This allows
                  for more efficient maintenance and updates.{" "}
                </p>
                <div className="mt-50">
                  <div className="bxb-service-box-column">
                    <div className="bxb-service-box">
                      <img src="/assets/images/web-dev/github.png" alt="Thumb" />
                      <h3>Version Control</h3>
                      <p>We utilize Github for backup and versions of your site</p>
                    </div>
                    <div className="bxb-service-box">
                      <img
                        src="/assets/images/web-dev/docean.png"
                        alt="Thumb"
                      />
                      <h3>Digital Ocean Servers</h3>
                      <p>Our sites are hosted via Digital Ocean servers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end content --> */}

      <div className="bxb-section-pb">
        <div className="container">
          <div
            className="bxb-section-title center max-width-850"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h2>Your Website Team</h2>
          </div>
          <div className="row">
            <div className=" col-lg-5">
              <div
                className="bxb-content-thumb"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <img src="/assets/images/web-dev/web-dev2.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 d-flex align-items-center">
              <div className="bxb-target-list-wrap">
                <div
                  className="bxb-target-list"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h3>1. Your out of office dev team:</h3>
                  <p>
                    We stay close to you and respond to any needs wherever whenever.
                  </p>
                </div>
                <div
                  className="bxb-target-list"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h3>2. Data Reports and Analysis:</h3>
                  <p>
                    Data scientists and analysts leverage AI tools and
                    algorithms to extract actionable insights from large
                    datasets. They alsouse AI for predictive modeling, anomaly
                    detection, and data visualization.
                  </p>
                </div>
                <div
                  className="bxb-target-list"
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  <h3>3. First Response Team:</h3>
                  <p>
                    We keep a close eye on our servers and are first responders when something is not firing right. We take care of your site even when you don't notice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
