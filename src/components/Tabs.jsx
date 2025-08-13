import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Tabs = ({ defaultIndex = 0, tabs }) => {
  const [activeTab, setActivetab] = useState(defaultIndex);

  return (
    <div className="max-w-270 m-auto h-full font-montserrat">
      <div className="h-12 lg:h-18 w-full my-auto flex justify-center items-center ">
        <div className="h-8 lg:h-12 w-60 lg:w-80 grid grid-cols-3 border-b border-[#AAAAAA] ">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={` text-sm lg:text-base w-full font-semibold cursor-pointer relative ${
                index === activeTab ? "text-[#FFFBFB]" : "text-[#7C7C7C]"
              }`}
              onClick={() => setActivetab(index)}
            >
              <span className="relative z-10">{tab.sectsTabs}</span>

              {activeTab === index && (
                <motion.span
                  layoutId="pills-tab"
                  transition={{ type: "spring", duration: 0.5 }}
                  className="absolute bottom-0 left-0  w-full h-[1px]  z-10 bg-white"
                ></motion.span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className=" mt-4 lg:mt-6">
        <motion.div key={activeTab} className="text-white">
          {tabs[activeTab].Tab}
        </motion.div>
      </div>
    </div>
  );
};

export default Tabs;
