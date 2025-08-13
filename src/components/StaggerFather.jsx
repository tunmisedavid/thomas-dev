import { motion } from "motion/react";

const stagger = {
  hidden: {},
  visible: {
    staggerChildren: 0.5,
  }
}

export default function StaggerFather ({children, className = ''}) {
  return (
    <section>

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      className={className}
      >
      {children}
    </motion.div>
      </section>
  );
}

