import { useEffect, useState } from "react";

// Custom hook to observe element visibility
const useIntersectionObserver = (ref, threshold) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Create a new IntersectionObserver instance
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold,
      }
    );

    // Observe the element referenced by `ref`
    intersectionObserver.observe(ref.current);

    // Cleanup function to unobserve the element when the component unmounts
    return () => {
      if (ref.current) {
        intersectionObserver.unobserve(ref.current);
      }
    };
  }, [ref, threshold]); // Add `threshold` as a dependency

  return isIntersecting;
};

export default useIntersectionObserver;
