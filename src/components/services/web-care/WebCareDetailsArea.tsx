

export default function WebCareDetailsArea() {
  return (
    <>
      <div className="bxb-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 offset-xl-1 offset-lg-0 order-lg-2">
              <div className="bxb-content-thumb" data-aos="fade-left" data-aos-delay="500">
                <img src="/assets/images/home1/thumb2.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 d-flex align-items-center">
              <div className="bxb-default-content" data-aos="fade-up" data-aos-delay="600">
                <h2>Who Web Care is for</h2>
                {/* <p>AI data analysis, also known as artificial intelligence data analysis or AI-driven data analysis, refers to the process of using artificial intelligence and machine learning techniques.</p> */}
                <div className="mt-50">
                  <div className="bxb-service-box-column">
                    <div className="bxb-service-box">
                      
                      {/* <img src="/assets/images/service/data.png" alt="Thumb" /> */}
                      <img src="/assets/images/home1/arrow.svg" alt="Icon" />
                      <h3>Businesses that want reliable support without hiring in house</h3>
                      {/* <p>AI data analysis can begin, and raw data must be collected, cleaned.</p> */}
                    </div>
                    <div className="bxb-service-box">
                      <img src="/assets/images/home1/arrow.svg" alt="Icon" />
                      {/* <img src="/assets/images/service/setting.png" alt="Thumb" /> */}
                      <h3>Teams running marketing and needing performance visibility</h3>
                      {/* <p>Algorithms use historical data to forecast future trends, behaviors.</p> */}
                    </div>
                    <div className="bxb-service-box">
                      <img src="/assets/images/home1/arrow.svg" alt="Icon" />
                      {/* <img src="/assets/images/service/setting.png" alt="Thumb" /> */}
                      <h3>Owners who want one point of contact for site upkeep</h3>
                      {/* <p>Algorithms use historical data to forecast future trends, behaviors.</p> */}
                    </div>
                    <div className="bxb-service-box">
                      <img src="/assets/images/home1/arrow.svg" alt="Icon" />
                      {/* <img src="/assets/images/service/setting.png" alt="Thumb" /> */}
                      <h3>Growing businesses that don’t want technical debt</h3>
                      {/* <p>Algorithms use historical data to forecast future trends, behaviors.</p> */}
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
          <div className="bxb-section-title center max-width-850" data-aos="fade-up" data-aos-delay="500">
            <h2>How it works</h2>
          </div>
          <div className="row">
            <div className=" col-lg-5">
              <div className="bxb-content-thumb" data-aos="fade-right" data-aos-delay="500">
                <img src="/assets/images/service/target.png" alt="Thumb" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 d-flex align-items-center">
              <div className="bxb-target-list-wrap">
                <div className="bxb-target-list" data-aos="fade-up" data-aos-delay="500">
                  <h3>1. We onboard your site:</h3>
                  <p>Access, tracking, monitoring, and a quick baseline check.</p>
                </div>
                <div className="bxb-target-list" data-aos="fade-up" data-aos-delay="600">
                  <h3>2. We keep things running:</h3>
                  <p>Monitoring, alerts, and updates as requested.</p>
                </div>
                <div className="bxb-target-list" data-aos="fade-up" data-aos-delay="900">
                  <h3>3. You get monthly visibility:</h3>
                  <p>A clear PDF report with trends you can actually use.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
