import React from "react";
import "./Footer.css";
import Group5 from "../Group5.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="anchordiv">
        <a href="#" className="anchors">
          Contact Us
        </a>

        <a href="#" className="anchors">
          Program Rules
        </a>
        <a href="#" className="anchors">
          FAQs
        </a>
        <a href="#" className="anchors">
          Privacy
        </a>
      </div>

      <div className="footer-logo">
        <img src={Group5} />
      </div>
      <div className="footerdesc">&copy; 2019 U.S. Bank</div>
      <hr />
      <div className="footerend">
        The creditor and issuer of your card is U.S. Bank National Association,
        pursuant to a license from Visa U.S.A. Inc.
      </div>
    </footer>
  );
};
