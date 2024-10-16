import { transformVariants } from "@/utils/motion";
import { cn } from "@/utils/shadcn";
import { motion } from "framer-motion";

type InfoTitleProps = {
  className?: string;
  direction?: "left" | "right" | "bottom" | "top";
  title: string;
};
const InfoTitle = ({ className, direction, title }: InfoTitleProps) => {
  return (
    <div
      className={cn(
        "heading-title block overflow-hidden -rotate-180 size-min",
        className
      )}
    >
      <motion.h4
        variants={transformVariants(direction || "right")}
        transition={{ duration: 0.4 }}
      >
        {title}
      </motion.h4>
    </div>
  );
};

export default InfoTitle;
