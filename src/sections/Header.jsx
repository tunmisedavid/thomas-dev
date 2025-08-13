import { useState, useEffect } from "react";
import { motion, MotionConfig } from "motion/react";

import Logo from "../assets/logo.svg";
import Separator from "../assets/mobile-separator.svg";
import TopAt from "../assets/mobile@.svg";
import TopGit from "../assets/mobile-github.svg";
import TopLinkedIn from "../assets/mobile-linkedIn.svg";

const Header = ({ active, onNavClick }) => {
  const [openNav, setOpenNav] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [PreviousScroll, setPreviousScroll] = useState(0);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  const Sections = [
    { title: "About me", sects: "About" },
    { title: "Skills", sects: "Skill" },
    { title: "Portfolio", sects: "Portfolio" },
    { title: "CONTACT ME", sects: "Contact" },
  ];

  const handleScroll = () => {
    const CurrentScroll = window.scrollY;
    CurrentScroll > PreviousScroll ? setShowNav(false) : setShowNav(true);
    setPreviousScroll(CurrentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [PreviousScroll]);

  return (
    <div className="">
      <div
        className={`bg-black lg:backdrop-blur-xs lg:bg-linear-to-r lg:from-[#C4C4C4] lg:to-black ${
          showNav ? "translate-y-0" : "-translate-y-12.5  lg:translate-0 "
        } transition duration-500 z-50 ease-out  h-12.5 lg:h-16 fixed left-0 top-0 right-0`}
      >
        <div
          className={`w-78 sm:w-120 md:w-175 lg:w-240 xl:w-270 m-auto h-full flex justify-between items-center`}
        >
          <motion.div
            className=""
          >
            <img className=" w-7 lg:w-12" src={Logo} alt="Logo" />
          </motion.div>
          <div className={`hidden lg:flex w-120 h-12 `}>
            <ul className="text-white font-semibold text-base lg:text-xl flex items-center justify-between gap-[2px] rounded-3xl px-2 h-full w-full  ">
              {Sections.map((sect, i) => (
                <li key={i} className={``}>
                  <button
                    className={`${
                      active === sect.sects ? " text-black " : " "
                    } cursor-pointer transition-colors duration-700 ease-in-out px-3 py-1 relative`}
                    onClick={() => onNavClick(`${sect.sects}`)}
                  >
                    <span className="relative z-10">{sect.title}</span>
                    {active === sect.sects && (
                      <motion.span
                        layoutId="pill-tab"
                        transition={{ type: "tween", duration: 0.2 }}
                        className="absolute inset-0 z-0 bg-white rounded-3xl"
                      ></motion.span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
            <motion.div
              initial={false}
              animate={openNav ? "open" : "closed"}
              onClick={handleOpenNav}
              className="text-white flex flex-col items-end relative h-8 w-9 lg:hidden z-10 cursor-pointer"
            >
              <motion.div
                variants={VARIANTS.top}
                className={`bg-white h-[3px] rounded-xl w-8 absolute top-[20%]  `}
              ></motion.div>

              <motion.div
                variants={VARIANTS.middle}
                className={`bg-white h-[3px] rounded-xl w-7 absolute top-[50%] `}
              ></motion.div>
              <motion.div
                variants={VARIANTS.bottom}
                className={`bg-white h-[3px] rounded-xl w-6 absolute top-[80%]`}
              ></motion.div>
            </motion.div>
          </MotionConfig>
        </div>
      </div>
      <div
        onClick={handleOpenNav}
        className={` fixed bg-[url("../src/assets/mobile-Background.svg")] md:bg-cover right-0 left-0 bottom-0 top-0 transition-transform duration-500 transform ${
          !openNav ? "translate-x-3/3" : "translate-x-0"
        } lg:hidden text-white font-montserrat z-20 flex flex-col items-center justify-center gap-2`}
      >
        <p className=" text-2xl font-normal "> my name is Thomas</p>
        <p className="font-semibold text-3xl">I’M A DEVELOPER</p>
        <img className="mt-1" src={Separator} alt="image" />
        <div className="mt-2 flex gap-8">
          <img className="cursor-pointer" src={TopAt} alt="@ tag icon" />
          <img className="cursor-pointer" src={TopGit} alt="github  icon" />
          <img
            className="cursor-pointer"
            src={TopLinkedIn}
            alt="linkedIn icon"
          />
        </div>
      </div>
      <div
        onClick={handleOpenNav}
        className={`h-52 sm:h-64 ${
          openNav ? "translate-y-0" : "-translate-y-52 sm:-translate-y-64"
        } duration-700 bg-black/60 z-40 lg:hidden fixed top-0 pt-12 left-0 right-0  `}
      >
        <ul className="text-white flex flex-col w-full font-semibold text-xs sm:text-sm ">
          {Sections.map((sect, i) => (
            <li
              onClick={() => onNavClick(`${sect.sects}`)}
              key={i}
              className=" h-10 sm:h-13 flex items-center justify-center w-full font-montserrat hover:bg-white hover:text-black cursor-pointer transition-colors duration-500 "
            >
              <button className="cursor-pointer">{sect.title}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["25%", "50%", "47%"],
      left: 2,
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "25%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
      left: 2,
      top: 15,
      width: "32px",
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      opacity: 0,
      rotate: ["0deg", "0deg", "45deg"],
      top: ["75%", "50%", "50%"],
    },
    closed: {
      opacity: 1,
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "75%"],
    },
  },
};

export default Header;
