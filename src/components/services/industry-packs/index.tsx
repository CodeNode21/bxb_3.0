import Breacrumb from "@/common/Breacrumb";
import AboutCta from "@/components/about-us/AboutCta";
import IndustryPacksPricingArea from "./industrypacksPricingArea";
import DividerArea from "@/common/DividerArea";

export default function IndustryPacksService() {
  return (
    <>
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
          
        </div>
      </div>
    </>
  );
}
