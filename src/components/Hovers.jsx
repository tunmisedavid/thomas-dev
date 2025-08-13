import { motion } from "motion/react";

const AnimatedVariants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUpBlur: {
    hidden: { opacity: 0, y: 200, filter: "blur(3px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
};

const hoverEffects = {
  grow: { scale: 1.05 },
  shrink: { scale: 0.95 },
  rotate: { rotate: 180 },
  tilt: { rotateZ: 20, scale: 1.2 },
  none: {},
};

export default function Hovers({
  children,
  variant = "fade",
  hover = "none",
  duration = "0.6",
  delay = 0,
  className = "",
  once = true,
}) {
  return (
    <section>
      <motion.div
        className={className}
        variants={AnimatedVariants[variant] || AnimatedVariants.fade}
        whileHover={hoverEffects[hover]}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.3 }}
        transition={{ type: "tween", duration, delay }}
      >
        {children}
      </motion.div>
    </section>
  );
}
