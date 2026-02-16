import Contactus from "@/components/contact-us";

export const metadata = {
  title: "Contact",
  description:
    "Contact Brixbiz to start a website build, refresh your visuals, or set up ongoing web care in Queens and NYC.",
  alternates: { canonical: "https://www.brixbiz.com/contact-us" },
  openGraph: {
    title: "Contact | Brixbiz",
    description:
      "Start a website build, refresh your visuals, or set up ongoing web care in Queens and NYC.",
    url: "https://www.brixbiz.com/contact-us",
  },
};
export default function index() {
  return <Contactus />;
}
