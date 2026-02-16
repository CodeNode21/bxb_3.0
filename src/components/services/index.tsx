import Breacrumb from "@/common/Breacrumb";
import ServicesArea from "./ServicesArea";
import FaqHomeOne from "../home/FaqHomeOne";
import TestimonialHomeOne from "../home/TestimonialHomeOne";

export default function ServicesPage() {
  return (
    <>
      <Breacrumb title="Our Services" page="Our Services" />
      <ServicesArea />
      <FaqHomeOne />
      <TestimonialHomeOne />
    </>
  );
}
