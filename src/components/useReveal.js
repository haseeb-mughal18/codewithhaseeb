import { useEffect, useRef, useState } from "react";

/**
 * Adds the `visible` class once the element scrolls into view,
 * mirroring the IntersectionObserver fade-up in the reference design.
 * `index` staggers siblings so a grid reveals in sequence.
 */
export function useReveal(index = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setVisible(true), (index % 6) * 60);
          observer.unobserve(entry.target);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return { ref, className: `fade-up${visible ? " visible" : ""}` };
}
