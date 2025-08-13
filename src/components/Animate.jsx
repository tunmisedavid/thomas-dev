import { motion } from "motion/react";

import InViewAnimation from "./InViewAnimation";

const typeVariants = ({
  type,
  // direction,
  duration = 0.6,
  distance = 50,
  delay = 0,
}) => {
  const base = {
    hidden: {},
    visible: {
      transition: { duration, delay, ease: "easeInOut" },
    },
  };

  switch (type) {
    case "fade":
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, ...base.visible },
      };
    case "slideFromRight":
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0, ...base.visible },
      };
    case "slideFromDown":
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0, ...base.visible },
      };
    case "zoom":
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, ...base.visible },
      };
    case "rotate":
      return {
        hidden: { opacity: 0, rotate: -10 },
        visible: { opacity: 1, rotate: 0, ...base.visible },
      };
    default:
      return base;
  }
};

const Animate = ({
  children,
  type = "fade",
  delay = 0,
  duration = 0.6,
  distance = 50,
  threshold = 0.2,
  triggerOnce = false,
  className = "",
}) => {
  const [ref, inView] = InViewAnimation(threshold, triggerOnce);
  const variant = typeVariants({ type, delay, duration, distance });

  return (
    <section>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variant}
        className={className}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Animate;
