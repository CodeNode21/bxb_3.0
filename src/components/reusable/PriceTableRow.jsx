import { pricingPlans } from "@/data/pricing_plans";
import Link from "next/link";

export default function PricingGrid({isYearly}) {
  return (
    <div className="row">
      {pricingPlans.map((plan)=>(
        <div key={plan.id} className="col-xxl-3 col-md-6">
          <div className="bxb-pricing-column">
            <div
              className={`bxb-pricing-wrap wrap2${plan.isActive?" active":""}`}
              data-aos="fade-up"
              data-aos-delay={plan.aosDelay}
            >
              <div className="bxb-pricing-top">
                <div className="bxb-pricing-header">
                  <h3>{plan.title}</h3>
                  <p>{plan.membersLabel}</p>
                </div>

                <div className="bxb-pricing-price">
                  <h2>${isYearly?plan.price.yearly:plan.price.monthly}</h2>
                  <span>{isYearly?plan.periodText.yearly:plan.periodText.monthly}</span>
                </div>

                <div className="bxb-pricing-body">
                  <p>{plan.description}</p>
                </div>

                <div className="bxb-pricing-feature">
                  <ul>
                    {plan.features.map((feature)=>(
                      <li key={feature}>
                        <img src={plan.checkIcon} alt="ratting" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bxb-pricing-footer mt-50">
                <Link className={plan.button.className} href={`/contact-us?plan=${plan.id}#contact_form`}>
                  {plan.button.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
