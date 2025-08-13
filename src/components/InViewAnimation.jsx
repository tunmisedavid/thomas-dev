import { useEffect, useRef, useState } from "react";

const InViewAnimation = (threshold = 0.2, triggerOnce = true) => {
  const ref = useRef(null);
  const [inView, setInview] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting) {
          setInview(true);
          if(triggerOnce) observer.disconnect();
        } else if (!triggerOnce){
          setInview(false);
        }
      }, {threshold}
    );

    if(ref.current) observer.observe(ref.current);
    return () => observer.disconnect()
  }, [threshold, triggerOnce]);

  return [ref ,inView];
};

export default InViewAnimation;
