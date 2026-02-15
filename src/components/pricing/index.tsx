import Breacrumb from "@/common/Breacrumb";
import FaqHomeOne from "../home/FaqHomeOne";
import PricingArea from "./PricingArea";

 

export default function Pricing() {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Pricing Plan" page="Pricing Plan" />
          <PricingArea />            
          <FaqHomeOne style_2={true} />
        </div>
      </div>
    </>
  )
}
