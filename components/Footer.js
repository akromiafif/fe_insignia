import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { IoLogoTwitter } from "react-icons/io";
import { RxSlash } from "react-icons/rx";
import BreadCrumbs from "./BreadCrumbs";

const Footer = () => {
  const category = [
    "About",
    "For Business",
    "Suggestions",
    "Help & FAQs",
    "Contacts",
    "Pricing",
  ];

  return (
    <div className="w-full h-30 border-t-2 border-secondary mt-10 flex flex-col space-y-4 py-4">
      <div className="flex flex-row space-x-2">
        <div className="bg-secondary p-3">
          <FaLinkedinIn color="#953e45" />
        </div>
        <div className="bg-secondary p-3">
          <ImFacebook color="#953e45" />
        </div>
        <div className="bg-secondary p-3">
          <IoLogoTwitter color="#953e45" />
        </div>
      </div>
      <BreadCrumbs data={category} type="footer" />
      <p className="text-secondary text-md">&#169; 2022 Microsoft Inc.</p>
      <div className="flex flex-row space-x-2 items-center">
        <p className={`text-secondary text-md`}>Privacy</p>
        <RxSlash color="#f4e3cf" className={`w-4 h-4`} />
        <p className={`text-secondary text-md`}>Terms</p>
      </div>
    </div>
  );
};

export default Footer;
