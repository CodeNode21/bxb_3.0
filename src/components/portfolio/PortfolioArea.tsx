import Link from "next/link";



export default function PortfolioArea() {
  return (
    <div className="bxb-section-padding6">
      <div className="container">
        <div className="bxb-section-title center max-width-750" data-aos="fade-up" data-aos-delay="500">
          <h2>Solving problems others cannot even see.</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="bxb-portfolio-column">
              <Link href="/single-portfolio" data-aos="fade-up" data-aos-delay="500">
                <div className="bxb-portfolio-box">
                  <div className="bxb-portfolio-thumb">
                    <img src="/assets/images/portfolio/portfolio-img-1.jpg" alt="Portfolio Thumb" />
                  </div>
                  <div className="bxb-portfolio-content">
                    <h3>Compounding improvement beats perfect first attempts.</h3>
                    <div className="bxb-portfolio-icon">
                      <svg width="37" height="31" viewBox="0 0 37 31" fill="none">
                        <path d="M22.25 2.375L35.375 15.5M35.375 15.5L22.25 28.625M35.375 15.5L1.625 15.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/single-portfolio" data-aos="fade-up" data-aos-delay="600">
                <div className="bxb-portfolio-box">
                  <div className="bxb-portfolio-thumb">
                    <img src="/assets/images/portfolio/portfolio-img-2.jpg" alt="Portfolio Thumb" />
                  </div>
                  <div className="bxb-portfolio-content">
                    <h3>Thinking in outcomes for clients</h3>
                    <div className="bxb-portfolio-icon">
                      <svg width="37" height="31" viewBox="0 0 37 31" fill="none">
                        <path d="M22.25 2.375L35.375 15.5M35.375 15.5L22.25 28.625M35.375 15.5L1.625 15.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/single-portfolio" data-aos="fade-up" data-aos-delay="900">
                <div className="bxb-portfolio-box">
                  <div className="bxb-portfolio-thumb">
                    <img src="/assets/images/portfolio/portfolio-img-3.jpg" alt="Portfolio Thumb" />
                  </div>
                  <div className="bxb-portfolio-content">
                    <h3>Build an AI solution for precision agriculture</h3>
                    <div className="bxb-portfolio-icon">
                      <svg width="37" height="31" viewBox="0 0 37 31" fill="none">
                        <path d="M22.25 2.375L35.375 15.5M35.375 15.5L22.25 28.625M35.375 15.5L1.625 15.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bxb-portfolio-column">
              <Link href="/single-portfolio" data-aos="fade-up" data-aos-delay="600">
                <div className="bxb-portfolio-box">
                  <div className="bxb-portfolio-thumb">
                    <img src="/assets/images/portfolio/portfolio-img-4.jpg" alt="Portfolio Thumb" />
                  </div>
                  <div className="bxb-portfolio-content">
                    <h3>Create an modern AI-powered educational platform</h3>
                    <div className="bxb-portfolio-icon">
                      <svg width="37" height="31" viewBox="0 0 37 31" fill="none">
                        <path d="M22.25 2.375L35.375 15.5M35.375 15.5L22.25 28.625M35.375 15.5L1.625 15.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/single-portfolio" data-aos="fade-up" data-aos-delay="800">
                <div className="bxb-portfolio-box">
                  <div className="bxb-portfolio-thumb">
                    <img src="/assets/images/portfolio/portfolio-img-5.jpg" alt="Portfolio Thumb" />
                  </div>
                  <div className="bxb-portfolio-content">
                    <h3>Implement a predictive maintenance system with AI</h3>
                    <div className="bxb-portfolio-icon">
                      <svg width="37" height="31" viewBox="0 0 37 31" fill="none">
                        <path d="M22.25 2.375L35.375 15.5M35.375 15.5L22.25 28.625M35.375 15.5L1.625 15.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/single-portfolio" data-aos="fade-up" data-aos-delay="1000">
                <div className="bxb-portfolio-box">
                  <div className="bxb-portfolio-thumb">
                    <img src="/assets/images/portfolio/portfolio-img-6.jpg" alt="Portfolio Thumb" />
                  </div>
                  <div className="bxb-portfolio-content">
                    <h3>AI for large corporations and businesses across industries</h3>
                    <div className="bxb-portfolio-icon">
                      <svg width="37" height="31" viewBox="0 0 37 31" fill="none">
                        <path d="M22.25 2.375L35.375 15.5M35.375 15.5L22.25 28.625M35.375 15.5L1.625 15.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
