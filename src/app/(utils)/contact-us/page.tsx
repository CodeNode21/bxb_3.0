import Contactus from "@/components/contact-us";

type ContactUsPageProps = {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export default function ContactUsPage({
  searchParams,
}: ContactUsPageProps) {
  return <Contactus searchParams={searchParams} />;
}