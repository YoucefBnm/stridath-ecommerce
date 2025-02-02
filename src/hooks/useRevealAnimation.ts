import { useInView } from "framer-motion";
import { useRef } from "react";

export function useRevealAnimation() {
  const revealRef = useRef(null);

  const isInView = useInView(revealRef, {
    once: true,
    amount: 0.3,
  });

  return {
    revealRef,
    isInView,
  };
}
