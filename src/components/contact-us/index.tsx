import Breacrumb from "@/common/Breacrumb";
import ContactArea from "./ContactArea";
import GoogleMap from "./GoogleMap";
import { Suspense } from "react";

 

export default function Contactus() {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breacrumb title="Contact Us" page="Contact Us" />
          <Suspense fallback={null}>

          <ContactArea />
          </Suspense>
          <GoogleMap />          
        </div>
      </div>
    </>
  )
}
