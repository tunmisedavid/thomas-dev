import { useState } from "react";
import { AnimatePresence , motion } from "motion/react";
import { AllPort, Coded, Design, Tabs } from "../components";


const tabSections = [
  {sectsTabs: "ALL", Tab: <AllPort />},
  {sectsTabs: "CODED", Tab: <Coded /> },
  {sectsTabs: "DESIGN", Tab: <Design />}
]


const Portfolio = ({refProp}) => {

  return (
    <div ref={refProp} className=" ">
      <div className="h-full">
        <div className="bg-[url('../src/assets/portfolio-bg.svg')] bg-cover h-40 lg:h-60 font-montserrat flex items-center justify-center">
          <button className="text-sm lg:text-2xl font-bold border-4 lg:border-6 border-black w-40 lg:w-60 h-11 lg:h-16 ">
            PORTFOLIO
          </button>
        </div>
        <div className="bg-[#1A1A1A] w-full h-full ">
          <Tabs defaultIndex={0} tabs={tabSections} />
        <p className="text-white text-center font-semibold font-montserrat py-2 lg:text-lg">And many more to come!</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio
