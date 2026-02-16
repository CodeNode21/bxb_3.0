import Breacrumb from "@/common/Breacrumb";
import AboutArea from "./AboutArea";
import AboutCounter from "./AboutCounter";
import SolutionsArea from "./SolutionsArea";
import OurWorkArea from "./OurWorkArea";
import AboutCta from "./AboutCta";
import AboutHomeOne from "../home/AboutHomeOne";

export default function Aboutus() {
  return (
    <>
      <Breacrumb title="About Us" page="About Us" />
      <AboutArea />
      <AboutCounter />
      <SolutionsArea />
      <OurWorkArea />
      <AboutHomeOne />
      <AboutCta />
    </>
  );
}
