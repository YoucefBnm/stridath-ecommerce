import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

export function useToggleNav() {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const showHeader = () => setIsHidden(false);

  const { scrollY } = useScroll();
  const latestYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - latestYRef.current;

    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      latestYRef.current = y;
    }
  });

  return {
    isHidden,
    showHeader,
  };
}
