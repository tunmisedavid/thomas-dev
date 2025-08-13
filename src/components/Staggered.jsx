import { motion } from "motion/react";

const staggerVaries = {
  fade: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 5 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  bounceInFromRight: {
    hidden: { opacity: 0, x: 600 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.6,
        ease: 'easeOut',
        stiffness: 300,
        damping: 20,
        mass: 0.8,
      },
    },
  },
};
const Staggered = ({ children, variant = "fade" }) => {
  return (
    <section>

    <motion.div variants={staggerVaries[variant] || staggerVaries.fade}>
      {children}
    </motion.div>
    </section>
  );
};

export default Staggered;
