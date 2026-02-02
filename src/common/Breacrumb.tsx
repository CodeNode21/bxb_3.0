import Link from "next/link";
interface BreacrumbProps {
  title?: string;
  page?: string;
}

export default function Breacrumb({ title, page }: BreacrumbProps) {
  return (
    <div className="bxb-breadcrumb">
      
      <div className="bxb-hero-shape">
        <img src="/assets/images/header_bg1.png" alt="bg" />
      </div>
      <div className="container">
        <div className="bxb-breadcrumb-content">
          <h1
            className="bxb-breadcrumb-title"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {title}
          </h1>
          <div
            className="bxb-breadcrumb-wrapper"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="bxb-breadcrumb-wrap">
              <div className="bxb-breadcrumb-menu">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <img src="/assets/images/about/arrow-right.png" alt="" />
                  </li>
                  <li aria-current="page">{page}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
