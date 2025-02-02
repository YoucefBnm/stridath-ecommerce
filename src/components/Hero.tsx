import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { cn } from "@/utils/shadcn";
import { motion } from "framer-motion";
import { createContext, PropsWithChildren, useContext } from "react";
import AnimatedText from "./AnimatedText";
import {
  easeTransitions,
  TransformDirectionType,
  transformVariants,
} from "@/utils/motion";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

type HeroContentContextValue = {
  heroBg: string;
  title?: string;
  heading: string;
  description?: string;
};
const HeroContext = createContext<HeroContentContextValue | undefined>(
  undefined
);
function useHeroContext() {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error(
      "useHeroContext must be used within a HeroContentContextProvider"
    );
  }
  return context;
}

type HeroProps = PropsWithChildren & {
  heroBg: string;
  title?: string;
  heading: string;
  description?: string;
  className?: string;
};

const Hero = ({
  children,
  heroBg,
  title,
  heading,
  description,
  className,
}: HeroProps) => {
  const { revealRef, isInView } = useRevealAnimation();
  return (
    <HeroContext.Provider value={{ heroBg, title, heading, description }}>
      <motion.section
        transition={{ staggerChildren: 0.2 }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={revealRef}
        className={cn(
          "min-h-[720px] w-full relative px-default place-content-center text-white",
          className
        )}
      >
        {children}
      </motion.section>
    </HeroContext.Provider>
  );
};

type HeroHeadingProps = {
  className?: string;
  direction?: TransformDirectionType;
};
const HeroHeading = ({ className, direction }: HeroHeadingProps) => {
  const { heading } = useHeroContext();

  return (
    <h1 className={cn("heading-xl", className)}>
      <AnimatedText
        className="leading-tight"
        direction={direction || "bottom"}
        text={heading!}
      />
    </h1>
  );
};

type HeroDescriptionProps = {
  className?: string;
};
const HeroDescription = ({ className }: HeroDescriptionProps) => {
  const { description } = useHeroContext();
  return (
    <motion.p
      className={cn(className)}
      variants={transformVariants()}
      transition={{
        delay: 0.4,
        duration: 0.4,
        ease: easeTransitions["opacity"],
      }}
    >
      {description}
    </motion.p>
  );
};

type HeroCtaProps = PropsWithChildren & {
  link: string;
  label: string;
  className?: string;
};
const HeroCta = ({ link, label, children, className }: HeroCtaProps) => {
  const navigate = useNavigate();
  const navigateToLink = () => navigate(link);
  return (
    <motion.div
      variants={transformVariants()}
      transition={{ delay: 0.6, ease: easeTransitions["opacity"] }}
      className={cn("flex items-center gap-2", className)}
    >
      <Button
        size={"lg"}
        className="capitalize"
        variant="secondary"
        aria-label={`navigate to ${label} page`}
        onClick={navigateToLink}
      >
        {label}
      </Button>
      {children}
    </motion.div>
  );
};

type HeroBgProps = {
  className?: string;
};
const HeroBg = ({ className }: HeroBgProps) => {
  const { heroBg } = useHeroContext();
  return (
    <div className={cn("absolute inset-0 size-full -z-10", className)}>
      <img
        width={1920}
        height={1080}
        decoding="async"
        src={heroBg}
        loading="eager"
        alt="actifeet athletic shoes"
        className="size-full object-cover"
      />
    </div>
  );
};
export { Hero, HeroBg, HeroHeading, HeroDescription, HeroCta };
