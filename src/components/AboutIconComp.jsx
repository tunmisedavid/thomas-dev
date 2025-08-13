import { motion,  } from "motion/react";

import {Staggered} from "../components";

const AboutIconComp = ({ imagepath, altInfo }) => {

  return (
    <div className="bg-[#C4C4C4] cursor-pointer flex justify-center items-center w-14 h-12 rounded-sm shadow shadow-gray-500">
    <Staggered variant="bounceInFromRight">
      <motion.img whileHover={{ rotate: -90 }} src={imagepath} alt={altInfo} />
    </Staggered>
    </div>
  );
};

export default AboutIconComp;
