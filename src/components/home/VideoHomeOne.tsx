import ModalVideo from "@/modal/modalVideo";


export default function VideoHomeOne() {
  return (
    <section className="bxb-video-section">
      <div className="row">
        <div className="col-xl-6">
          <div className="bxb-video-thumb">
            <img src="/assets/images/about/photo.jpg" alt="Thumb" />
            <ModalVideo>
              <a className="bxb-popup-video video-init" href="https://www.youtube.com/embed/DgUUuwcLYok?autoplay=1&mute=1">
                <img src="/assets/images/home1/play-btn.png" alt="" />
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
              </a>

            </ModalVideo>
          </div>
        </div>
        <div className="col-xl-6 d-flex align-items-center">
          <div className="bxb-video-wrap" data-aos="fade-up" data-aos-delay="500">
            <div className="bxb-video-content">
              <h2>From Idea to Final Cut</h2>
              <p>This is one of many videos we’ve produced for clients. Every project is tailored to the business, the audience, and where the video will live — website, social, or campaigns.</p>
              <div className="divider2"></div>
              <div className="bxb-counter-wrap">
                <div className="bxb-counter-item">
                  <h2 className="bxb-counter-data" aria-label="72hr">72hr</h2>
                  <p>turnaround option</p>
                </div>
                <div className="bxb-counter-item">
                  <h2 className="bxb-counter-data" aria-label="100%">100%</h2>
                  <p>Original Content</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
