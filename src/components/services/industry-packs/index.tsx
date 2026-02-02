import Breacrumb from "@/common/Breacrumb";
import AboutCta from "@/components/about-us/AboutCta";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import IndustryPacksPricingArea from "./industrypacksPricingArea";
import DividerArea from "@/common/DividerArea";

export default function IndustryPacksService() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Industry Packs" page="Industry-Packs" />
          <IndustryPacksPricingArea />
          {/* <PricingGrid isYearly="isMonthly"/> */}
          {/* <IndustryPacksDetailsArea /> */}
          {/* <VideoHomeOne /> */}
          {/* <ServiceInfo /> */}
          <DividerArea/>
          <AboutCta />
          
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
