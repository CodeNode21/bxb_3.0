import Breacrumb from "@/common/Breacrumb";
import AboutCta from "@/components/about-us/AboutCta";
import VideoHomeOne from "@/components/home/VideoHomeOne";
import ServiceInfo from "@/components/single-service/ServiceInfo";
import WebCareDetailsArea from "./WebCareDetailsArea";
import WebCarePricingArea from "./webcarePricingArea";
import DividerArea from "@/common/DividerArea";
import WebCareOptions from "./WebCareOptions";
import WebCareFeatures from "./WebCareFeatures";

export default function WebCareService() {
  return (
    <>
      <Breacrumb title="Web Care" page="Web Care" />
      <WebCareFeatures />
      <DividerArea />
      <WebCareOptions />
      {/* <p>
            Web Care is our ongoing support service for businesses that want
            their website monitored, updated, and measured over time. It’s
            designed to give you visibility into how your site is performing
            while we handle the technical details.
          </p>
          <div>
            <h2>Monthly traffic reports</h2>
            <p>
              We set up Google tracking on your website and generate clear
              monthly reports so you can see how your site is being used and how
              traffic changes over time.
            </p>
            <ul>
              <li>Google Analytics and tracking tag setup</li>
              <li>Monthly traffic reports delivered as PDFs</li>
              <li>Visitor trends and usage insights</li>
              <li>Historical reports for record keeping</li>
            </ul>
            <p>
              These reports are especially useful if you’re running ads, social
              campaigns, or other marketing efforts and want to track real
              results.
            </p>
          </div>
          <div>
            <h2>Monitoring and uptime alerts</h2>
            <p>
              We monitor your website and related services so issues are caught
              early and addressed quickly.
            </p>
            <ul>
              <li>Website uptime monitoring</li>
              <li>Alerts for downtime or server issues</li>
              <li>Monitoring for domain and hosting problems</li>
              <li>Fast response when something goes wrong</li>
            </ul>
            <p>
              If a server goes down or a domain expires, we’re the first to know
              and can act before it impacts your business.
            </p>
          </div>
          <div>
            <h2>Content updates and site changes</h2>
            <p>
              We handle content updates directly so your site stays accurate and
              current.
            </p>
            <ul>
              <li>Text edits and content changes</li>
              <li>Image and media updates</li>
              <li>New pages or sections added as needed</li>
              <li>Quick turnaround for small changes</li>
            </ul>
            <p>
              If your website is built and hosted by Brixbiz, updates are faster
              and easier since we already manage the system.
            </p>
          </div>
          <div>
            <h2>SEO support (focused and practical)</h2>
            <p>
              Web Care includes light SEO support focused on keeping your site
              healthy and visible, not aggressive campaigns or shortcuts.
            </p>
            <ul>
              <li>Basic on-page SEO adjustments</li>
              <li>Metadata and page structure updates</li>
              <li>Performance-related improvements</li>
              <li>Search visibility best practices</li>
            </ul>
            <p>
              This service supports long-term visibility and works best
              alongside consistent content and marketing efforts.
            </p>
          </div>
          <div>
            <h2>Who Web Care is for</h2>
            <p>
              Web Care is a good fit for businesses that want ongoing visibility
              and support without managing these tasks themselves.
            </p>
            <ul>
              <li>Businesses running ads or marketing campaigns</li>
              <li>Sites that need regular updates</li>
              <li>Owners who want reporting and oversight</li>
              <li>Teams without in-house web support</li>
            </ul>
          </div>
          <div>
            <h2>How it works</h2>
            <p>Web Care runs month to month and adapts as your needs change.</p>
            <ul>
              <li>Tracking and monitoring set up once</li>
              <li>Reports delivered monthly</li>
              <li>Updates handled as requested</li>
              <li>Ongoing monitoring in the background</li>
            </ul>
          </div>
          <div>
            <p>
              Web Care gives you visibility into how your website is performing
              while we keep it running, updated, and monitored behind the
              scenes.
            </p>
          </div> */}
      <WebCarePricingArea />
      {/* <WebCareDetailsArea /> */}

      <DividerArea />
      <AboutCta />
    </>
  );
}
