
import { motion } from "motion/react";
import {InViewAnimation} from "../components";
import DesktopBg from "../assets/it-desktop.svg";

const AboutMe = () => {

  const [ref, inView] = InViewAnimation();

  const fadeOutText = {
    hidden: { opacity: 0, filter: "blur(6px)", y: 5 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  };

  const text =
    "Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quistellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros.";
  const letters = text.split("");

  return (
    <div className='bg-[#1d1d1d] h-140 lg:h-60 bg-[url("../src/assets/mobile-berries-bg.svg")] bg-no-repeat bg-center lg:bg-[url("../src/assets/Background-berries-desktop.svg")]'>
      <div className="w-75 sm:w-120 md:w-175 lg:w-240 xl:w-300 m-auto h-full relative overflow-hidden">
        <div className="hidden lg:block  absolute right-0">
          <img className="w-90" src={DesktopBg} alt="" />
        </div>
        <div className="font-montserrat text-white flex flex-col justify-center items-center lg:items-start gap-5 h-full w-full z-10 relative ">
          <p className="font-bold text-2xl lg:text-[27px] xl:text-3xl ">
            IT BERRIES
          </p>
          <div className="w-70 lg:w-200 xl:w-270 ">
            {letters.map((letter, i) => (
              <motion.p
                ref={ref}
                key={i}
                initial="hidden"
                animate={inView? "visible" : "hidden"}
                variants={fadeOutText}
                transition={{  delay: 0.03 * i }}
                className="font-normal whitespace-break-spaces inline-block h-0.5 mb-3 lg:mb-0 text-sm xl:text-[15px] "
              >
                {letter}
              </motion.p>
            ))}
          </div>
          <button className="text-[15px] font-semibold font-montserrat border-x-2 border-white w-35">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
