import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { transformVariants } from "@/utils/motion";
import { cn } from "@/utils/shadcn";
import { motion } from "framer-motion";

const tags = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
} as const;

type TagKeys = keyof typeof tags;
type AnimatedTextProps = {
  text: string;
  className?: string;
  tag: TagKeys;
  direction?: "left" | "right" | "bottom" | "top";
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  tag,
  direction,
}) => {
  const words = text.split(" ");
  const Tag = motion(tags[tag]);

  const { isInView, revealRef } = useRevealAnimation();
  return (
    <motion.div
      className={cn(
        "inline-flex relative whitespace-nowrap flex-wrap overflow-hidden",
        className
      )}
      ref={revealRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.2 }}
    >
      {words.map((word, index) => (
        <Tag
          key={`${word}-${index}`}
          variants={transformVariants(direction || "bottom")}
          transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }}
        >
          {word}&nbsp;
        </Tag>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
