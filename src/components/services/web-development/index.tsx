import Breacrumb from "@/common/Breacrumb";
import AboutCta from "@/components/about-us/AboutCta";
import PricingHomeOne from "@/components/home/PricingHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import WebDevDetailsArea from "./WebDevDetailsArea";
import DividerArea from "@/common/DividerArea";
import WebDevOptions from "./WebDevOptions";
import WebDevFeatures from "./WebDevFeatures";

export default function WebDevelopmentService() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Website Builds" page="Web-Development" />
          <WebDevFeatures />
          <DividerArea />

          <WebDevOptions />
          <PricingHomeOne />
          
          {/* <WebDevDetailsArea /> */}

          <AboutCta />
          <FooterOne />
        </div>
      </div>
      {/* <div id="starter">
        <p>Starter Page</p>
        <p>
          This is smallest build we offer and it's perfect for college
          graduates, artists, first time starters, or anyone who is just
          starting out and needs a destination for their domain. It comes
          with a landing page, socials or services list and a contact form.
          This build is $500 and we can host on our domain i.e.
          brixbiz.com/your-page or we'll attach it to your domain and host
          it for $10/month.
        </p>
      </div>
      <div id="pro">
        <p>Pro build</p>
        <p>
          This is a medium scale build. It's a popular one page layout with
          all the info one one scrollable page. This is perfect for
          businesses who want to replace their outdated site with something
          fresh, fit and new but don't want a full build. This build is
          $2000 and comes with custom one page layout, with icons and edited
          photos etc.
        </p>
      </div>
      <div id="enterprise">
        <p>Enterprise build</p>
        <p>
          This is a page based build. It's for businesses that compete at
          the top level and need their digital space to reflect that. This
          build is $5000 and some photography is included with this package.
        </p>
      </div>

      <div id="ecommerce">
        <p>Ecommerce build</p>
        <p>
          For online stores we set up with shopify to get up and selling as
          quickly as possible. For this we build the site for you and let
          you take over or we can link a shop to your current site. The cost
          to this one varies but it's based on what you need. Send us an
          email and we'll take it from there.{" "}
        </p>
        <p>Send message</p>
      </div>
      <div>
        <p>With each one of our build you get: </p>
        <ul>
          <li>
            A beautiful online home that's fast, looks great and converts
          </li>
          <li>Contact form</li>
          <li>Analytics</li>
          <li>Monitoring</li>
          <li>Management by us</li>
          <li>Maintenance</li>
          <li>Monthly Reports in pdf for record keeping</li>
          <li>Security updates</li>
        </ul>
      </div> */}
    </Wrapper>
  );
}
