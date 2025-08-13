import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

import {
  AboutIconComp,
  Animate,
  LazyLoadAnimation,
  StaggerFather,
  Hovers,
  TextAnimComp,
} from "../components";

import MobileHuman from "../assets/mobile-human.svg";
import TopAt from "../assets/mobile@.svg";
import TopGit from "../assets/mobile-github.svg";
import TopLinkedIn from "../assets/mobile-linkedIn.svg";
import AtBlack from "../assets/at-black.svg";
import GitBlack from "../assets/git-black.svg";
import LinkedBlack from "../assets/linkedblack.svg";
import DesktopDeveloper from "../assets/desktop-developer.png";
import DesktopLazy from "../assets/desktop-placeholder-image.png";

const About = ({ refProp }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div ref={refProp} className="bg-black h-185 sm:h-200  relative">
      <div className="lg:hidden w-75 sm:w-120 md:w-175 m-auto text-white font-montserrat">
        <div className="lg:hidden">
          <LazyLoadAnimation
            src={MobileHuman}
            alt="developer image"
            placeholder={DesktopLazy}
            className=" absolute right-0 bottom-0 "
          />
        </div>
        <div className="lg:hidden [clip-path:polygon(0%_40%,100%_0%,100%_100%,0%_100%)] bg-gray-400/70 flex justify-center items-end gap-7 sm:gap-20 absolute bottom-0 right-0 left-0 h-60 pb-8 ">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold">Hi, I am</p>

            <motion.div className="text-3xl font-bold">
              <TextAnimComp
                triggerOnce={true}
                className="whitespace-break-spaces inline-block"
                text="Thomas Gadja"
              />
            </motion.div>
            <p className="text-xs font-extrabold">
              Front-end Developer / UI Designer
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <img src={TopAt} alt="" />
            <img src={TopGit} alt="" />
            <img src={TopLinkedIn} alt="" />
          </div>
        </div>
      </div>
      <div className="hidden lg:block h-full before:content-[''] before:absolute before:inset-0 before:bg-[#C4C4C4] before:[clip-path:polygon(0%_0%,53%_0%,42%_100%,0%_100%)]  after:content-[''] after:absolute after:inset-0 after:bg-black after:[clip-path:polygon(58%_0%,100%_0%,100%_100%,47%_100%)]  ">
        <div className="w-75 sm:w-120 md:w-175 lg:w-230 xl:w-270 m-auto flex h-full z-10 relative ">
          <div className="font-montserrat flex flex-col gap-10 justify-center ">
            <Animate
              type="slideFromDown"
              distance={180}
              duration={0.8}
              triggerOnce={true}
            >
              <div className="flex flex-col gap-10">
                <p className="font-bold text-black text-4xl">Hi, I am</p>
                <div className="font-bold text-black text-6xl">
                  <TextAnimComp
                    triggerOnce={true}
                    text="Thomas Gadja"
                    className="whitespace-break-spaces inline-block"
                  />
                </div>
                <p className="font-extrabold text-xl text-[#909090] mt-1">
                  Front-end Developer / UI Designer
                </p>
                <StaggerFather className="flex gap-6">
                  <Hovers hover="tilt">
                    <AboutIconComp imagepath={AtBlack} altInfo="@ icon" />
                  </Hovers>
                  <Hovers hover="tilt">
                    <AboutIconComp imagepath={GitBlack} altInfo="git icon" />
                  </Hovers>
                  <Hovers hover="tilt">
                    <AboutIconComp
                      imagepath={LinkedBlack}
                      altInfo="LInkedIn icon"
                    />
                  </Hovers>
                </StaggerFather>
              </div>
            </Animate>
          </div>
          <div className=" h-full ">
            <LazyLoadAnimation
              src={DesktopDeveloper}
              alt="developer image"
              placeholder={DesktopLazy}
              className="absolute right-0 bottom-0 w-145 h-170"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
