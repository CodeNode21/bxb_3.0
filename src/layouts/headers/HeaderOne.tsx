"use client";
import Link from "next/link";
import Navmenu from "./Navmenu";
import UseSticky from "@/hooks/UseSticky";
import { useState } from "react";
import MobileMenu from "./MobileMenu"; 
import Image from "next/image";
 

export default function HeaderOne() {
  const { sticky, hidden } = UseSticky();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={`site-header bxb-header-section ${sticky ? "sticky-menu" : ""} ${hidden ? "hide-header" : ""}`} id="sticky-menu">
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-8 col-sm-auto ">
              <div className="header-logo">
                <Link href="/">
                  <Image src="/assets/images/logo_alt1.png" width='150' height="67" alt="logo" />   
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="bxb-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left">
                  <Navmenu />                   
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="bxb-header-button-wraper">
                <div className="bxb-header-login-button">
                  <ul>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                {/* <Link className="bxb-default-btn bxb-header-btn" href="/contact-us" data-text="Sign up free">
                  <span className="button-wraper">bxb</span>
                </Link> */}
              </div>
              <div className="bxb-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  {/* <!-- Brand Logo--> */}
                  {/* <!-- mobile menu trigger --> */}
                  <button onClick={() => setIsOpen(!isOpen)} className="bxb-menu-toggle d-inline-block d-lg-none">
                    <span></span>
                  </button>
                  {/* <!--/.Mobile Menu Hamburger Ends--> */}
                </nav>
              </div>
            </div>
          </div>
        </div>

      </header>
      <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  )
}
