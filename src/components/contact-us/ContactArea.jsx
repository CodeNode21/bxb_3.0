"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

const PLAN_TEMPLATES = {
  // web dev
  starter: `Hi Brixbiz, I’m interested in the Starter build.

Business:
Goals:
Timeline:
Anything else you should know:
`,

  pro: `Hi Brixbiz, I’m interested in the Pro build.

Business:
Goals:
Pages or sections needed:
Timeline:
`,

  enterprise: `Hi Brixbiz, I’m interested in the Enterprise build.

Business:
Goals:
Must have features:
Timeline:
`,

  ecommerce: `Hi Brixbiz, I’m interested in the E commerce build.

What are you selling:
How many products:
Preferred platform (Shopify or custom):
Timeline:
`,
  // web care
  "health-checkup": `Hi Brixbiz, I’m interested in the Website Health Checkup.

Website URL:
Type of site (business, blog, e-commerce, other):
Main concerns or issues you’ve noticed:
Are you currently tracking traffic or SEO? (Yes / No / Not sure)

Anything specific you want reviewed or improved:
`,

  "reporting-monitoring": `Hi Brixbiz, I’m interested in the Reporting & Monitoring (Silent Support) plan.

Website URL:
Is Google Analytics already installed? (Yes / No / Not sure):
Are you running ads or campaigns currently? (Yes / No):

What kind of visibility are you hoping to get from reports or alerts:
`,

  "ongoing-web-care": `Hi Brixbiz, I’m interested in the Ongoing Website Care plan.

Website URL:
Type of site (business, blog, e-commerce):
How often does your site need updates?

Common updates you expect (content, images, layout changes, other):
Any current issues that need attention:
`,

  "web-care-seo": `Hi Brixbiz, I’m interested in the Web Care + SEO Support plan.

Website URL:
Primary goal (more traffic, better leads, visibility, performance):
Are you currently doing any SEO work? (Yes / No / Not sure)

Main pages or services you want to rank better:
Anything else we should know about your site or platform:
`,
  // media
  "starter-capture": `Hi Brixbiz, I’m interested in the Starter Capture package.

Project type (business, property, product, event):
Location (city / state):
Indoor, outdoor, or both:

What will these photos be used for (website, social, listings, ads):
Any must-have shots or references:
Preferred timeline or deadline:
`,

  "standard-shoot": `Hi Brixbiz, I’m interested in the Standard Shoot package.

Project type (business, property, brand, other):
Location (city / state):
Interior, exterior, or both:

What type of video content do you need (short clips, walkthroughs, reels):
Primary platforms (website, Instagram, LinkedIn, other):
Preferred timeline or launch date:
`,

  "full-coverage": `Hi Brixbiz, I’m interested in the Full Coverage package.

Project type:
Location(s):
Number of areas or spaces to capture:

How the assets will be used (web, social, marketing, ads):
Any specific shots, angles, or references:
Timeline or deadline:
`,

  "aerial-capture": `Hi Brixbiz, I’m interested in the Aerial Capture add-on.

Project type:
Location (address or general area):
Purpose of aerial content (context, marketing, inspection, other):

Do you already have ground photos or video:
Timeline or deadline:
Anything else we should know about the location or access:
`,

  // --- Graphic design + motion ---
  "visual-assets": `Hi Brixbiz, I’m interested in Visual Assets.

What do you need (infographic, flyer, social graphic, web graphic, other):
Where will it be used (Instagram, LinkedIn, website, print, other):
Final size or format (if known):
Do you have brand colors, logo, or examples to match:
Deadline or publish date:
Any text or content that must be included:
`,

  "brand-foundations": `Hi Brixbiz, I’m interested in Brand Foundations.

Business name:
Industry:
What needs to be created or refreshed (logo, templates, business card, email signature):
Any current logo or brand assets (link if available):
Style direction (clean, bold, luxury, playful, other):
Where the brand will show up most (website, social, print, other):
Timeline or deadline:
`,

  "light-animation": `Hi Brixbiz, I’m interested in a Light Animation project.

What type of animation do you need (logo reveal, icons, hero motion, UI, other):
Where it will be used (website, social, YouTube, other):
Preferred length (seconds) or feel (quick, smooth, dramatic, subtle):
Do you have existing assets (logo, icons, SVGs) or should we design them:
Any reference examples (links):
Deadline:
`,

  "animation-clips": `Hi Brixbiz, I’m interested in Animation Clips.

What are you trying to communicate or promote:
Where it will be used (ads, website, social, presentation, other):
Approx length needed:
Do you have a script or outline:
Do you have brand assets or should we create custom graphics:
Any reference examples (links):
Timeline or deadline:
`,

  // industry Packs
  "website-rescue": `Hi Brixbiz, I’m interested in the Website Rescue Pack.

Website URL:
What’s currently broken or not working:
Is the site live or partially offline:

Main issues you want fixed (speed, mobile, layout, usability, other):
Any deadlines or urgency we should know about:
Anything else that might help us assess the situation:
`,

  "local-visibility": `Hi Brixbiz, I’m interested in the Local Visibility Boost.

Business name:
Location (city / state):
Industry or service type:

Do you already have a Google Business Profile? (Yes / No / Not sure):
What are you hoping to improve locally (calls, map visibility, reviews):
Any competitors you want to outrank:
`,

  audit: `Hi Brixbiz, I’m interested in the Fix My Website Audit.

Website URL:
What feels wrong or underperforming right now:

Are you experiencing slow load times, mobile issues, or layout problems:
Have you made recent changes to the site:
What outcome are you hoping to get from the audit:
`,

  "rapid-media": `Hi Brixbiz, I’m interested in the Rapid Media Drop.

What type of media do you need (photo, video, both):
Location (address or general area):
Indoor, outdoor, or both:

What will the content be used for (social, website, ads, other):
Deadline or turnaround expectation:
Anything we should know to move quickly:
`,
  launcher: `Hi Brixbiz, I’m interested in the Launcher Package.

Business name:
Industry:
Location (city / state):

Do you already have a domain name? (Yes / No):
Do you have a logo or any existing brand visuals? (Yes / No):

What should the landing page accomplish (calls, bookings, leads, sales):
Any reference sites you like:
Timeline or deadline:
`,

  refresh: `Hi Brixbiz, I’m interested in the Content Refresh Kit.

Website URL (if applicable):
Business type:
Location (city / state):

What needs updating most (photos, video clips, social graphics, homepage visuals):
Where will the new visuals be used (website, social, ads, listings):
Any style direction or examples:
Timeline or deadline:
`,

  professional: `Hi Brixbiz, I’m interested in the Professional Services Starter.

Your name and profession:
Location (city / state):
Website URL (if you already have one):

What services do you offer:
Do you have a bio, credentials, or certifications ready to share:
Do you have testimonials already (Yes / No):

Primary goal (credibility, bookings, calls, leads):
Timeline or deadline:
`,

  "product-seller": `Hi Brixbiz, I’m interested in the Product Seller Pack.

What are you selling:
Where do you sell (Amazon, Shopify, Etsy, in-store, other):
Do you have an existing product page or listing link:

How many products need content:
Do you need lifestyle shots, studio shots, or both:
What kind of promo video (demo, unboxing, brand story, other):

Timeline or deadline:
`,

  "event-coverage": `Hi Brixbiz, I’m interested in the Event Coverage Bundle.

Event name:
Event date and time:
Location (venue + city):

What type of event is it (launch, grand opening, conference, other):
What deliverables matter most (photos, recap video, teasers):
Where will the content be used (social, website, press, other):

Do you want an optional event landing page (Yes / No):
Timeline for delivery:
`,

  "social-accelerator": `Hi Brixbiz, I’m interested in the Social Accelerator.

Business name:
Industry:
Primary platforms (Instagram, LinkedIn, TikTok, other):

What do you want to promote in this sprint:
Do you already have brand colors, logo, and style direction:
Do you need a mini shoot on-site (Yes / No):

Any upcoming deadline (launch, event, promo):
`,

  rebrand: `Hi Brixbiz, I’m interested in the Rebrand Makeover.

Business name:
Industry:
Location (city / state):

What’s driving the rebrand right now:
Do you want a full redesign or an update of the existing logo:
Any styles you like (clean, bold, luxury, playful, other):

Where the new brand will be used most (web, social, print):
Do you want the website updated to match (Yes / No):
Timeline or deadline:
`,

  momentum: `Hi Brixbiz, I’m interested in the Monthly Momentum Package.

Website URL:
Business type:
Location (city / state):

What kind of monthly updates do you expect (content, images, layout, new sections):
Do you want monthly graphics for social too (Yes / No):
Any current issues that need monitoring (speed, downtime, forms, other):

Preferred start month:
`,
};

function buildPrefill({ plan, message }) {
  if (message) return message;
  if (!plan) return "";
  return (
    PLAN_TEMPLATES[plan] ||
    `Hi Brixbiz, I’m interested in the ${plan} option.\n\nBusiness:\nGoals:\nTimeline:\n`
  );
}

export default function ContactArea() {
  const searchParams = useSearchParams();
  const didPrefillRef = useRef(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const ReCAPTCHARef = useRef(null);

  useEffect(() => {
    if (didPrefillRef.current) return;

    const plan = (searchParams.get("plan") || "").toLowerCase().trim();
    const messageParam = searchParams.get("message"); // optional
    const prefill = buildPrefill({
      plan,
      message: messageParam ? decodeURIComponent(messageParam) : "",
    });

    if (!prefill) return;

    // Only prefill if the user hasn't typed anything yet
    setFormData((prev) => {
      if (prev.message && prev.message.trim().length > 0) return prev;
      return { ...prev, message: prefill };
    });

    didPrefillRef.current = true;
  }, [searchParams]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSuccessMessage("");
    setErrorMessage(null);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Submitting form...");
    if (!captchaValue) {
      setErrorMessage("Please complete the CAPTCHA.");
    } else {
      setErrorMessage(null);

      try {
        const response = await fetch("/api/submitForm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formData: formData,
            captchaResponse: captchaValue,
          }),
        });
        // console.log("fetch happened...");

        if (response.ok) {
          // Form submitted successfully
          // console.log("Form submitted successfully...");

          // Clear form data
          setFormData({
            name: "",
            email: "",
            number: "",
            company: "",
            message: "",
          });

          ReCAPTCHARef.current?.reset();

          setSuccessMessage(
            "Form submitted successfully. We will get back to you soon.",
          );

          // Clear error message (if any)
          setErrorMessage(null);
        } else {
          setErrorMessage("Form submission failed. Please try again.");
        }
      } catch (error) {
        setErrorMessage("Form submission failed. Please try again  .");
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const isFormValid = () => {
    Boolean(
      formData.name && formData.email && formData.message && captchaValue,
    );
  };
  return (
    <div className="bxb-section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="bxb-default-content pr70"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2>Get in touch with us directly</h2>
              <p className="mb-0">
                Have a project in mind or just a few questions? Reach out and
                let us know what you’re working on. We’ll review your message
                and follow up with clear next steps.
              </p>
              <div className="mt-50">
                <div className="bxb-contact-info-wrap">
                  <div className="bxb-contact-info-item">
                    <h5>Send us an email:</h5>
                    <a href="mailto:info@brixbiz.com">info@brixbiz.com</a>
                  </div>
                  {/* <div className="bxb-contact-info-item">
                    <h5>Give us a call:</h5>
                    <a href="tel:123">(123) 456-7890</a>
                  </div> */}
                  <div className="bxb-contact-info-item">
                    <h5>Follow us:</h5>
                    <div className="bxb-social-wrap2 social-hover-orange">
                      <ul>
                        <li>
                          <a
                            href="https://www.youtube.com/channel/UCpBcnRCNcqyUZ96OlNZ8yOg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="/assets/images/youtube.svg"
                              alt="Icon"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/brixbiz/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="/assets/images/insta.svg"
                              alt="Icon"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/company/brixbiz-llc/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src="/assets/images/in.svg" alt="Icon" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="bxb-contact-box"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <form onSubmit={handleSubmit} id="contact_form">
                <div className="bxb-contact-column">
                  <div className="bxb-contact-field">
                    <label>Enter your name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Adam Smith"
                      pattern=".{3,100}"
                      required
                      aria-required="true"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="bxb-contact-field">
                    <label>Email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@gmail.com"
                      required
                      aria-required="true"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="bxb-contact-column">
                  <div className="bxb-contact-field">
                    <label>Phone number</label>
                    <input
                      name="number"
                      id="number"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="(123) 456 - 7890"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="bxb-contact-field">
                    <label>Company</label>
                    <input
                      name="company"
                      type="text"
                      id="company"
                      placeholder="Company LLC"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="bxb-contact-field">
                  <label>Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write your message here..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <ReCAPTCHA
                  ref={ReCAPTCHARef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                />
                <button
                  id="bxb-main-submit-btn"
                  type="submit"
                  disabled={!isFormValid()}
                  aria-controls="result"
                >
                  Send your message
                </button>
                <div
                  id="result"
                  role="region"
                  aria-live="polite"
                  aria-atomic="true"
                />
              </form>
              {successMessage && <div>{successMessage}</div>}
              {errorMessage && <div>{errorMessage}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
