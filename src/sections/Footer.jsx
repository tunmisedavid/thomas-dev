import { useState, useEffect } from "react";

import DoubleArrow from "../assets/double-arrow.svg"
import FaceBookIconFooter from "../assets/facebook-footer.svg";
import LinkedInIconFooter from "../assets/linkedIn-footer.svg";
import InstaIconFooter from "../assets/insta-footer.svg";
import MailIconFooter from "../assets/mail-footer.svg";

const Footer = ({ refProp }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ToggleShow = () => {
      setVisible(window.scrollY > 1000);
    };

    window.addEventListener("scroll", ToggleShow);
    return () => window.removeEventListener("scroll", ToggleShow);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div ref={refProp} className="bg-[#1A1A1A] h-45 lg:h-55">
      <div className="text-white font-montserrat h-full flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col justify-center items-center gap-2">
          <img className="cursor-pointer" onClick={handleScrollToTop} src={DoubleArrow} alt="" />
          <p className="font-bold text-sm">BACK TO TOP</p>
        </div>
        <div className=" flex gap-4 lg:gap-6">
          <img className="w-6 lg:w-7" src={FaceBookIconFooter} alt="facebook icon" />
          <img className="w-6 lg:w-7" src={LinkedInIconFooter} alt="linkedIn icon" />
          <img className="w-6 lg:w-7" src={InstaIconFooter} alt="Instagram icon" />
          <img className="w-6 lg:w-7" src={MailIconFooter} alt="Email icon" />
        </div>
        <div>
          <p className=" text-sm lg:text-lg font-semibold">
            @2020 Tomasz Gajda .
            <span className="text-xs lg:text-base">All Rights Reserved</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
