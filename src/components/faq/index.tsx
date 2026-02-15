import Breacrumb from "@/common/Breacrumb";
import AboutCta from "../about-us/AboutCta";
import FaqArea from "./FaqArea";

 

export default function Faq() {
  return (
     <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="FAQ s" page="FAQ s" />
          <FaqArea />
           
          <AboutCta />
        </div>
      </div>
    </>
  )
}
