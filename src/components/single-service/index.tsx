import Breacrumb from "@/common/Breacrumb";
import ServiceDetailsArea from "./ServiceDetailsArea";
import VideoHomeOne from "../home/VideoHomeOne";
import ServiceInfo from "./ServiceInfo";
import AboutCta from "../about-us/AboutCta";

export default function SingleService() {
  return (
    <>
      <Breacrumb title="Services Details" page="Services Details" />
      <ServiceDetailsArea />
      <VideoHomeOne />
      <ServiceInfo />
      <AboutCta />
    </>
  );
}
