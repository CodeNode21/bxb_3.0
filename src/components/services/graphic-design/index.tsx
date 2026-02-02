import Breacrumb from "@/common/Breacrumb";
import AboutCta from "@/components/about-us/AboutCta";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import GraphicsPricingArea from "./graphicsPricingArea";
import DividerArea from "@/common/DividerArea";
import GraphicFeatures from "./GraphicFeatures";
import GraphicOptions from "./GraphicOptions";

export default function GraphicDesignService() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Graphic Design" page="Graphic-Design" />
          <GraphicFeatures />
          <DividerArea />
          <GraphicOptions />
          {/* <div>
            <h2>Graphic Design</h2>
            <p></p>
            <ul>
              <li>Visual layouts</li>
              <li>Marketing graphics</li>
              <li>Website graphics</li>
              <li>Print-ready assets (when needed)</li>
              <li>Digital-first visuals</li>
            </ul>
          </div>
          <div>
            <h2>Logos & Visual Identity</h2>
            <p></p>
            <ul>
              <li>Logo design or refinements</li>
              <li>Icon systems</li>
              <li>Visual consistency</li>
              <li>Brand-ready assets</li>
            </ul>
          </div>
          <div>
            <h2>Graphics for Web & Social</h2>
            <p></p>
            <ul>
              <li>Website-specific graphics</li>
              <li>Social graphics</li>
              <li>Campaign visuals</li>
              <li>Digital-only assets</li>
            </ul>
          </div>
          <div>
            <h2>Motion & Animations</h2>
            <p></p>
            <ul>
              <li>UI animations</li>
              <li>Micro-interactions</li>
              <li>Animated icons</li>
              <li>Simple logo animations</li>
              <li>Subtle motion for web</li>
            </ul>
          </div>
          <div>
            <h2>Visual Systems & Assets</h2>
            <p></p>
            <ul>
              <li>Reusable graphic systems</li>
              <li>Icon sets</li>
              <li>Design patterns</li>
              <li>Consistent asset libraries</li>
            </ul>
          </div>
          <div>
            <h2></h2>
            <p></p>
            <ul>
              <li>Presentation Graphics</li>
              <li>Motion Templates</li>
              <li>Animated UI Elements</li>
              <li>Digital Illustration</li>
            </ul>
          </div> */}
          <GraphicsPricingArea />
          <DividerArea />
          <AboutCta />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
