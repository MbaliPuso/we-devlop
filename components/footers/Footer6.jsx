import React from "react";
import Image from "next/image";
// import FooterSocials from "./FooterSocials";
import { footerLinks, navigationLinks } from "@/data/footer";

export default function Footer6() {
  return (
    <div className="container">
      <div className="row pb-120 pb-sm-80 pb-xs-50">
        <div className="col-lg-3 text-gray mb-md-50">
          <div className="mb-30">
            <Image
              src="/assets/images/demo-fancy/logo-white.png"
              alt="Your Company Logo"
              width={154}
              height={35}
            />
          </div>
          <p>
          Dedicated to creating innovative and user-centric digital solutions.
          </p>
          <div className="clearlinks">
            <strong>Cell: </strong>
            <a href="tel:+18376528800">+27 79 899 8619</a>
          </div>
          <div className="clearlinks">
            <strong>Email: </strong>
            <a href="mailto:ibthemes21@gmail.com">mbalipuso@gmail.com</a>
          </div>
        </div>
        <div className="col-lg-7 offset-lg-2">
          <div className="row mt-n30">
            {/* Footer Widget */}
            <div className="col-sm-6 mt-30">
              <h3 className="fw-title">Company</h3>
              <ul className="fw-menu clearlist local-scroll">
                {navigationLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.href}>{elm.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Footer Widget */}
            {/* Footer Widget */}
            {/* <div className="col-sm-4 mt-30">
              <h3 className="fw-title">Social Media</h3>
              <ul className="fw-menu clearlist">
                <FooterSocials />
              </ul>
            </div> */}
            {/* End Footer Widget */}
            {/* Footer Widget */}
            <div className="col-sm-6 mt-30">
              <h3 className="fw-title">Legal &amp; Press</h3>
              <ul className="fw-menu clearlist">
                {footerLinks.map((elm, i) => (
                  <li key={i}>
                    <a href={elm.path}>{elm.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* End Footer Widget */}
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <div className="row text-gray">
        <div className="col-md-4 col-lg-3">
          <b>© WeDevelop {new Date().getFullYear()}.</b>
        </div>
        <div className="col-md-7 offset-md-1 offset-lg-2 clearfix">
          <b>Based in Johannesburg, South Africa.</b>
          {/* Back to Top Link */}
          <div className="local-scroll float-end mt-n20 mt-sm-10">
            <a href="#top" className="link-to-top">
              <i className="mi-arrow-up size-24" />
              <span className="visually-hidden">Scroll to top</span>
            </a>
          </div>
          {/* End Back to Top Link */}
        </div>
      </div>
      {/* End Footer Text */}
    </div>
  );
}
