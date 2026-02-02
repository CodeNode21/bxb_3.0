import Breacrumb from "@/common/Breacrumb";
import AboutCta from "@/components/about-us/AboutCta";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import MediaPricingArea from "./mediaPricingArea";
import DividerArea from "@/common/DividerArea";
import MediaFeatures from "./MediaFeatures";
import MediaOptions from "./MediaOptions";

export default function MediaService() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Media & Content" page="Media" />
          <MediaFeatures />
          <DividerArea />
          <MediaOptions />
          {/* <div>
            <h2>Photography</h2>
            <p>
              Still visuals that represent the business accurately and
              professionally.
            </p>
            <ul>
              <li>On-site photography</li>
              <li>Location and exterior shots</li>
              <li>Interior and workspace photos</li>
              <li>Team or process photography</li>
              <li>Website and marketing photography</li>
            </ul>
          </div>
          <div>
            <h2>Videography</h2>
            <p>Planned video capture built for modern platforms.</p>
            <ul>
              <li>Website videos</li>
              <li>Social Video</li>
              <li>Short-form brand videos</li>
              <li>Process or behind-the-scenes footage</li>
              <li>Simple interviews or testimonials</li>
            </ul>
          </div>
          <div>
            <h2>Aerial/Drone</h2>
            <p>Specialized capture for perspective and scale</p>
            <ul>
              <li>Exterior overviews</li>
              <li>Property and site context</li>
              <li>Construction or large-scale businesses</li>
              <li>Establishing shots</li>
            </ul>
          </div>
          <div>
            <h2>Media Planning & Capture Strategy</h2>
            <ul>
              <li>Shot planning</li>
              <li>Asset lists</li>
              <li>Capture aligned to site structure</li>
              <li>Purpose-driven content</li>
            </ul>
          </div>
          <div>
            <h2>Media Optimization</h2>
            <ul>
              <li>Cropping and sizing for web</li>
              <li>Compression and performance</li>
              <li>Platform-specific exports</li>
              <li>Consistent formatting</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Event Coverage</li>
              <li>Time-lapse</li>
              <li>Location Documentation</li>
              <li>Media Refresh Sessions</li>
            </ul>
          </div> */}
          <MediaPricingArea />

          {/* <MediaDetailsArea /> */}
          <DividerArea />
          <AboutCta />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
