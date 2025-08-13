import { useEffect, useRef, useState } from "react";

const LazyLoadImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect;
        }
      },
      { threshold: 0.3 }
    );
    ref.current
      ? observer.observe(ref.current)
      : () => observer.disconnect(ref.current);
  }, []);
  return [ref, isVisible];
};

export default LazyLoadImage;
