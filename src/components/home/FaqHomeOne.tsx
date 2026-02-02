

"use client";
import { useState } from "react";
import Link from "next/link"; 
import faq_data from "@/data/faq-data";
 

// interface FaqItem {
//   id: number;
//   question: string;
//   answer: string;
// }

// const faq_data: FaqItem[] = [
//   {
//     id: 1,
//     question: "What’s included in each website build?",
//     answer:
//       "Each tier includes a defined scope based on layout complexity, customization level, and features.",
//   },
//   {
//     id: 2,
//     question: "How long does it take to build a website?",
//     answer:
//       "Timelines vary by tier, but most projects range from a few days to a few weeks.",
//   },
//   {
//     id: 3,
//     question: "Do you design the website or do I need to provide designs?",
//     answer:
//       "Design is included, using your branding or created from scratch if needed.",
//   },
//   {
//     id: 4,
//     question: "Can I upgrade my plan later?",
//     answer:
//       "Yes. Starter sites can be expanded into Pro or Enterprise builds at any time.",
//   },
//   {
//     id: 5,
//     question: "Is the website mobile-friendly?",
//     answer:
//       "All websites are fully responsive and optimized for mobile devices.",
//   },
//   {
//     id: 6,
//     question: "Will my website be custom or template-based?",
//     answer:
//       "All builds are custom-developed and tailored to your business.",
//   },
// ];

interface StyleProps {
  style_2?: boolean;
}

export default function FaqHomeOne({ style_2 = false }: StyleProps) {
  const [activeId, setActiveId] = useState<number>(1); 

  const toggleFaq = (index: number) => {
      if (activeId === index) {
      setActiveId(-1);
    } else {
      setActiveId(index);
    }
  };

  return (
    <section className={`${style_2 ? 'bxb-section-padding6' : 'bxb-section-padding pt-0'}`}>
      <div className="container">
        <div className="row"> 
          <div className="col-lg-6">
            <div
              className="bxb-default-content"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h2>Freely ask us for more information</h2>
              <div>
                <Link
                  className="bxb-default-btn"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  href="/faq"
                  data-text="Ask you questions"
                >
                  <span className="button-wraper">Start a chat</span>
                </Link>
              </div>
              <p className="mt-50">
                Answers to questions you might already have  -
                <img src="/assets/images/about/arrow-right.png" alt="" />
              </p>
            </div>
          </div>

          {/* FAQ items */}
          <div className="col-lg-5 offset-lg-1">
            <div
              className="bxb-faq-wrap1"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {faq_data.map((faq) => (
                <div
                  key={faq.id}
                  className={`bxb-faq-item ${
                    activeId === faq.id ? "open" : ""
                  }`}
                >
                  <div
                    className="bxb-faq-header"
                    onClick={() => toggleFaq(faq.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>{faq.question}</h3>
                    <div className="bxb-active-icon">
                      <img
                        src="/assets/images/home1/+.svg"
                        alt="toggle"
                        style={{
                          transform:
                            activeId === faq.id ? "rotate(45deg)" : "rotate(0)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </div>
                  </div>
                  {activeId === faq.id && (
                    <div className="bxb-faq-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
