import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Delay = 2500;
const Transition = 1.5;

const RollsComp = ({ items, itemName }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, Delay);
    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  return (
    <motion.div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className=" relative z-0 h-32 w-32 shrink-0 m-auto "
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{ duration: Transition, ease: "easeInOut" }}
          initial={{ rotateX: "0deg", opacity: 1 }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg", opacity: 0 }}
          className={` absolute top-1/3 left-1/2 `}
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          transition={{ duration: Transition, ease: "easeInOut" }}
          initial={{ rotateX: "180deg ", opacity: 1 }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg", opacity: 0 }}
          className={`absolute top-1/3 left-1/2    `}
        >
          {items[index % items.length]}
        </motion.div>
      <motion.div key={(index + 1) * 3} initial={{opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0}} exit={{ opacity: 0, x: 30}} transition={{duration: 0.5, ease: "easeInOut"}} className="z-100 absolute left-0 right-0 bottom-0 font-montserrat font-normal text-2xl text-center "> {itemName[index % itemName.length]} </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default RollsComp
