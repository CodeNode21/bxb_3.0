import Breacrumb from "@/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import ServicesArea from "./ServicesArea";
import FaqHomeOne from "../home/FaqHomeOne";
import TestimonialHomeOne from "../home/TestimonialHomeOne";



export default function ServicesPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Our Services" page="Our Services" />
          <ServicesArea />
          <FaqHomeOne />
          <TestimonialHomeOne />           
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
