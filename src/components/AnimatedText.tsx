import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import {
  easeTransitions,
  TransformDirectionType,
  transformVariants,
} from "@/utils/motion";
import { cn } from "@/utils/shadcn";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  direction?: TransformDirectionType;
  className?: string;
};
const AnimatedText = ({ text, direction, className }: AnimatedTextProps) => {
  const words = text.split(" ");
  const { revealRef, isInView } = useRevealAnimation();
  return (
    <motion.div
      ref={revealRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(
        "overflow-hidden text-nowrap leading-none flex flex-wrap relative",
        className
      )}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={transformVariants(direction)}
            transition={{
              duration: 0.4,
              delay: index * 0.2,
              ease: easeTransitions["default"],
            }}
          >
            {word}
            {index !== words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
