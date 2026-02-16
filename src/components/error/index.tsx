import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <div className="bxb-404-section">
        <div className="container">
          <div className="bxb-404-content">
            <img
              data-aos="fade-up"
              data-aos-delay="500"
              src="/assets/images/blog/error404.png"
              alt="404"
            />
            <h2 data-aos="fade-up" data-aos-delay="600">
              The page you are looking for cannot be found
            </h2>
            <div className="mt-50">
              <Link
                className="bxb-default-btn"
                data-aos="fade-up"
                data-aos-delay="900"
                href="/"
                data-text="Go to homepage"
              >
                <span className="button-wraper">Go to homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
