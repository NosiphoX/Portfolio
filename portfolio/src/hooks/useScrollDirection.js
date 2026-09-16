import { useState, useEffect, useRef } from "react";

function useScrollDirection() {
  const [direction, setDirection] = useState("up");
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsAtTop(currentY < 40); // still near the very top of the page

      // ignore tiny jitters, only react past a small threshold
      if (Math.abs(currentY - lastScrollY.current) > 8) {
        setDirection(currentY > lastScrollY.current ? "down" : "up");
        lastScrollY.current = currentY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { direction, isAtTop };
}

export default useScrollDirection;