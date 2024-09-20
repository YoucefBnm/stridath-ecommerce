import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { transformVariants } from "@/utils/motion";
import { cn } from "@/utils/shadcn";
import { motion } from "framer-motion";
import { createContext, PropsWithChildren, useContext } from "react";
import AnimatedText from "./AnimatedText";

type HeroContentContextValue = {
  heroImageMain: string;
  heroImage480: string;
  heroImage768: string;
  heroImage1920: string;
  title?: string;
  heading: string;
  description?: string;
};
const HeroContext = createContext<HeroContentContextValue | undefined>(
  undefined
);
function useHeroContext() {
  const context = useContext(HeroContext);
  if (context === undefined) {
    throw new Error("useHeroContext must be used within a HeroProvider");
  }
  return context;
}

type HeroProps = PropsWithChildren &
  HeroContentContextValue & {
    className?: string;
  };

const Hero = (props: HeroProps) => {
  const {
    children,
    className,
    heroImageMain,
    heroImage1920,
    heroImage480,
    heroImage768,
    title,
    description,
    heading,
  } = props;

  const { isInView, revealRef } = useRevealAnimation();

  return (
    <HeroContext.Provider
      value={{
        heroImageMain,
        heroImage480,
        heroImage768,
        heroImage1920,
        title,
        description,
        heading,
      }}
    >
      <motion.section
        transition={{ staggerChildren: 0.25, delayChildren: 0.2 }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={revealRef}
        className={cn(
          "relative text-white min-h-screen w-full px-default place-content-center",
          className
        )}
      >
        {children}
      </motion.section>
    </HeroContext.Provider>
  );
};

const HeroBg = () => {
  const { heroImageMain, heroImage480, heroImage768, heroImage1920 } =
    useHeroContext();
  return (
    <motion.div
      className="absolute inset-0 size-full -z-10"
      variants={transformVariants()}
    >
      <img
        fetchPriority="high"
        className="absolute inset-0 size-full"
        src={heroImageMain}
        srcSet={`${heroImage480} 480w, ${heroImage768} 768w, ${heroImage1920} 1920w`}
        loading="eager"
        sizes="(max-width: 480px) 100vw, 
               (max-width: 768px) 100vw, 
               100vw"
        alt="Actifeet Ecommerce"
      />
    </motion.div>
  );
};
type HeroHeadingProps = {
  className?: string;
};

const HeroHeading: React.FC<HeroHeadingProps> = (props) => {
  const { heading } = useHeroContext();

  return (
    <AnimatedText
      tag="heading1"
      text={heading}
      className={cn("heading-xl mt-2 mb-6", props.className)}
    />
  );
};

const HeroTitle = () => {
  const { title } = useHeroContext();
  return (
    <motion.h4 variants={transformVariants("bottom")} className="heading-title">
      {title}
    </motion.h4>
  );
};
const HeroDescription = () => {
  const { description } = useHeroContext();

  return (
    <motion.p
      variants={transformVariants()}
      className="text-base space-y-10 max-w-xl"
    >
      {description}
    </motion.p>
  );
};

export { Hero, HeroTitle, HeroBg, HeroHeading, HeroDescription };
