import { motion } from "motion/react";

import { InViewAnimation } from "../components";

const TextAnimComp = ({
  text,
  threshold = 0.2,
  triggerOnce = false,
  className,
}) => {
  const [ref, inView] = InViewAnimation(threshold, triggerOnce);

  const fadeOutText = {
    hidden: { filter: "blur(6px)", y: 5 },
    visible: { filter: "blur(0px)", y: 0 },
  };

  const letters = text.split("");

  return (
      <motion.div>
        {letters.map((letter, i) => (
          <motion.p
            key={i}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeOutText}
            transition={{ delay: 0.1 * i }}
            className={className}
          >
            {letter}
          </motion.p>
        ))}
      </motion.div>
  );
};

export default TextAnimComp;
