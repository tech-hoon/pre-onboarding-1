import { useState, useEffect, useCallback } from "react";

const useIntersection = (onIntersect, newOption) => {
  const [ref, setRef] = useState(null);
  const checkIntersect = useCallback(([entry], observer) => {
    entry.isIntersecting && onIntersect(entry, observer);
  }, []);

  const baseOption = {
    root: null,
    threshold: 0.5,
    rootMargin: "0px",
  };

  useEffect(() => {
    let observer;
    if (ref) {
      observer = new IntersectionObserver(checkIntersect, {
        ...baseOption,
        ...newOption,
      });
      observer.observe(ref);
    }
    return () => observer && observer.disconnect();
  }, [ref, newOption.root, newOption.threshold, newOption.rootMargin, checkIntersect]);
  return [ref, setRef];
};

export default useIntersection;
