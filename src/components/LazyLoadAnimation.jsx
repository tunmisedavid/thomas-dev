import { easeInOut, motion } from "motion/react";
import { useState } from "react";
import LazyLoadImage from "./LazyLoadImage";


const LazyLoadAnimation = ({ src, alt, placeholder, className }) => {
  const [ref, isVisible] = LazyLoadImage();
  const [loaded, setLoaded] = useState(false);

  return (
    <div ref={ref} className={`overflow-hidden h-full `}>
      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={loaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: easeInOut }}
        src={isVisible ? src : placeholder}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={` absolute  transition-all duration-500 ${className || ""} ${
          loaded ? "blur-0" : "blur-md scale-105"
        } `}
      />
    </div>
  );
};

export default LazyLoadAnimation;
