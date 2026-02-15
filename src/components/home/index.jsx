import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import HeroHomeOne from "./HeroHomeOne";
import FeaturesHomeOne from "./FeaturesHomeOne";
import VideoHomeOne from "./VideoHomeOne";
import PricingHomeOne from "./PricingHomeOne";
import FaqHomeOne from "./FaqHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import AboutHomeOne from "./AboutHomeOne";

export default function HomeOne() {
	return (
		<>
			<div id="smooth-wrapper">
				<div id="smooth-content">
          <HeroHomeOne />
          <FeaturesHomeOne />
          <AboutHomeOne />
          <VideoHomeOne />
          <PricingHomeOne />
          <FaqHomeOne />
          <TestimonialHomeOne />
        </div>
			</div>
		</>
	);
}
