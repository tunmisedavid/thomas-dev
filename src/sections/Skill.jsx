import {  motion } from "motion/react";

import { RollsComp, Animate } from "../components";

import BlackSeparator from "../assets/separatorBlack.svg";
import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Sass from "../assets/sass.svg";
import Js from "../assets/js.svg";
import React from "../assets/react.svg";
import Bootstrap from "../assets/bootstrap.svg";
import Git from "../assets/git.svg";
import Figma from "../assets/figma.svg";

import Node from "../assets/node.svg";
import Sql from "../assets/sql.svg";
import Mongo from "../assets/mongo.svg";
import Ts from "../assets/ts.svg";

import Uk from "../assets/uk.svg";
import Spain from "../assets/spain.svg";
import Cplus from "../assets/c++.svg";
import Clang from "../assets/clang.svg";

const UseLogos = [
  { icon: Html, key: 1, iconName: "html" },
  { icon: Css, key: 2, iconName: "css" },
  { icon: Sass, key: 3, iconName: "sass" },
  { icon: Js, key: 4, iconName: "javascript" },
  { icon: React, key: 5, iconName: "react" },
  { icon: Bootstrap, key: 6, iconName: "bootstrap" },
  { icon: Git, key: 7, iconName: "git" },
  { icon: Figma, key: 8, iconName: "figma" },
];

const LearnLogos = [
  { icon: Node, key: 1, iconName: "Nodejs" },
  { icon: Sql, key: 2, iconName: "SQL" },
  { icon: Mongo, key: 3, iconName: "MongoDb" },
  { icon: Ts, key: 4, iconName: "Typescript" },
];

const OtherLogos = [
  { icon: Uk, key: 1, iconName: "U k" },
  { icon: Spain, key: 2, iconName: "Spain" },
  { icon: Cplus, key: 3, iconName: "c++" },
  { icon: Clang, key: 4, iconName: "C" },
];

const Skill = ({ refProp }) => {


  return (
    <div
      ref={refProp}
      className="bg-[#FAFAFA] h-410 md:h-380 lg:h-520 flex flex-col justify-center"
    >
      <Animate
        type="slideFromDown"
        distance={100}
        threshold={0.1}
        duration={0.6}
        triggerOnce={true}
      >
        <div className="w-75 sm:w-120 md:w-175 lg:w-240 xl:w-270 m-auto font-montserrat">
          <div className="font-montserrat text-black flex flex-col gap-15 lg:gap-20">
            <div className="flex flex-col items-center gap-6 lg:gap-10 ">
              <button className="font-bold text-[15px] lg:text-3xl border-black border-4 m-auto w-40 h-12 lg:w-56 lg:h-14">
                ABOUT ME
              </button>
              <div>
                <p className="font-normal text-[#050505] text-xs lg:text-[15px] w-full lg:w-180 lg:text-center">
                  My name is Tomasz Gajda, I'm a third year Applied Computer
                  Science student at the AGH University of Science and
                  Technology in Krakow. I have been learning Front-End
                  technologies for a year and this time was just enough for me
                  to make sure that this is my place in the industry.
                </p>
                <p className="font-normal text-[#050505] text-xs lg:text-[15px] w-full lg:w-180 lg:text-center mt-2 lg:mt-5">
                  Membership in the science club developed my design skills,
                  which quickly turned into a new hobby. I am fluent in English
                  (spoken and written) and intermediate Spanish. Apart from
                  designing and programming websites, my passion is all kinds of
                  motorsport - from rallies to the very king of motorsport -
                  formula 1.
                </p>
              </div>
              <p className="text-xs lg:text-[15px] font-semibold border-black border-x-3 w-30 h-8 flex justify-center items-center">
                EXPLORE
              </p>
              <img className="mt-6 lg:mt-8" src={BlackSeparator} alt="" />
            </div>
            <div className="flex flex-col gap-6 lg:w-210 lg:m-auto lg:grid grid-cols-2  lg:gap-5 lg:gap-y-20">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-[17px] lg:text-xl">DESIGN</p>
                <p className="text-xs lg:text-sm font-light">
                  I can design the site based on your needs and suggestions. I
                  can also design the site from scratch and consult you during
                  the job.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-[17px] lg:text-xl">DEVELOPMENT</p>
                <p className="text-xs lg:text-sm font-light">
                  Based on a project created by me or another one, sent by you,
                  I can program the website to be fully functional and
                  responsive.
                </p>
              </div>
              <div className="flex flex-col gap-2 lg:col-span-2 lg:w-130 lg:place-self-center ">
                <p className="font-bold text-[17px] lg:text-xl">MAINTENANCE</p>
                <p className="text-xs lg:text-sm font-light">
                  In case of any problems or the need for changes, I can
                  introduce new functionalities and solutions.
                </p>
              </div>
            </div>
          </div>
          <img
            className="mt-8 mb-12 lg:mt-20 lg:mb-22 m-auto"
            src={BlackSeparator}
            alt=""
          />
          <div className="font-montserrat lg:w-210 lg:m-auto flex flex-col items-center lg:items-start gap-6 lg:gap-12">
            <button className="font-bold text-[15px] lg:text-3xl border-black border-4 m-auto w-40 h-12 lg:w-56 lg:h-14">
              SKILLS
            </button>
            <div className="flex flex-col gap-10 ">
              <p className="font-black text-2xl lg:text-3xl">USING NOW:</p>
              <div className="lg:hidden">
                <RollsComp
                  items={UseLogos.map(({ icon, key, iconName }) => (
                    <div>
                      <img key={key} src={icon} alt={iconName} />
                    </div>
                  ))}
                  itemName={UseLogos.map(({ iconName }) => iconName)}
                />
              </div>
              <motion.div
              
                className=" hidden lg:grid grid-cols-4 gap-19 gap-y-12 w-full "
              >
                {UseLogos.map(({ icon, iconName }, index) => (
                  <motion.div
                   
                    key={index}
                    className="flex flex-col items-center w-38 h-30 relative "
                  >
                    <img className="w-15" src={icon} alt={iconName} />
                    <p className="text-2xl font-montserrat absolute bottom-0 font-normal">
                      {iconName.toUpperCase()}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="flex flex-col gap-10">
              <p className="font-black text-2xl lg:text-3xl">LEARNING:</p>
              <div className="lg:hidden">
                <RollsComp
                  items={LearnLogos.map(({ icon, key, iconName }) => (
                    <img key={key} src={icon} alt={iconName} />
                  ))}
                  itemName={LearnLogos.map(({ iconName }) => iconName)}
                />
              </div>
              <motion.div
            
                className=" hidden lg:grid grid-cols-4 gap-19 gap-y-12 w-full "
              >
                {LearnLogos.map(({ icon, iconName }, index) => (
                  <motion.div
                    
                    key={index}
                    className="flex flex-col items-center w-38 h-30 relative "
                  >
                    <img
                      className={` ${index === 2 ? "w-8" : "w-15"} `}
                      src={icon}
                      alt={iconName}
                    />
                    <p className="text-2xl font-montserrat absolute bottom-0 font-normal">
                      {iconName.toUpperCase()}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="flex flex-col gap-10">
              <p className="font-black text-2xl lg:text-3xl">OTHER SKILLS:</p>
              <div className="lg:hidden">
                <RollsComp
                  items={OtherLogos.map(({ icon, key, iconName }) => (
                    <img key={key} src={icon} alt={iconName} />
                  ))}
                  itemName={OtherLogos.map(({ iconName }) => iconName)}
                />
              </div>
              <motion.div
               
                className=" hidden lg:grid grid-cols-4 gap-19 gap-y-12 w-full "
              >
                {OtherLogos.map(({ icon, iconName }, index) => (
                  <motion.div
                    
                    key={index}
                    className="flex flex-col items-center w-38 h-30 relative "
                  >
                    <img className="w-15" src={icon} alt={iconName} />
                    <p className="text-2xl font-montserrat absolute bottom-0 font-normal">
                      {iconName.toUpperCase()}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </Animate>
    </div>
  );
};

export default Skill;
