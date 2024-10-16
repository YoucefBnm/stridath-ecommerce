import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import {
  clipPathVariants,
  easeTransition,
  transformVariants,
} from "@/utils/motion";
import { cn } from "@/utils/shadcn";
import { motion } from "framer-motion";
import { createContext, PropsWithChildren, useContext } from "react";
import AnimatedText from "./AnimatedText";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import InfoTitle from "./InfoTitle";

type CategoryWrapProps = PropsWithChildren & {
  title: string;
  imageUrl?: string;
  heading: string;
  description: string;
  route: string;
  className?: string;
};
type CategoryWrapContextValue = {
  title: string;
  imageUrl?: string;
  heading: string;
  description: string;
  route: string;
};

const CategoryWrapContext = createContext<CategoryWrapContextValue | undefined>(
  undefined
);
function useCategoryWrapContext() {
  const context = useContext(CategoryWrapContext);
  if (context === undefined) {
    throw new Error(
      "useCategoryWrapContext must be used within a CategoryWrapContextProvider"
    );
  }
  return context;
}

const CategoryWrap = (props: CategoryWrapProps) => {
  const { title, imageUrl, heading, description, route, className, children } =
    props;
  const { revealRef, isInView } = useRevealAnimation();

  return (
    <CategoryWrapContext.Provider
      value={{ title, imageUrl, heading, description, route }}
    >
      <section className="px-default py-12">
        <motion.div
          ref={revealRef}
          className={cn("section-container relative items-start", className)}
          transition={{ delayChildren: 0.2, staggerChildren: 0.15 }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      </section>
    </CategoryWrapContext.Provider>
  );
};

const CategoryTitle = () => {
  const { title } = useCategoryWrapContext();
  return <InfoTitle title={title} className="row-start-1 col-start-1" />;
};

type CategoryImageProps = {
  className?: string;
};
const CategoryImage = ({ className }: CategoryImageProps) => {
  const { imageUrl, title } = useCategoryWrapContext();
  return (
    <motion.div
      className={cn(
        "md:col-start-8 md:row-start-1 md:col-span-5 col-span-10 col-start-2",
        className
      )}
      transition={{ ease: easeTransition, duration: 2 }}
      variants={clipPathVariants}
    >
      <img
        loading="lazy"
        decoding="async"
        width={800}
        height={1000}
        className="sze-full align-middle"
        src={imageUrl}
        alt={title || "workout"}
      />
    </motion.div>
  );
};

type CategoryTextProps = {
  className?: string;
};
const CategoryText = ({ className }: CategoryTextProps) => {
  const { heading, description, route } = useCategoryWrapContext();
  const navigate = useNavigate();
  const navigateToPage = () => navigate(route);
  return (
    <div
      className={cn(
        "col-span-10 col-start-2 row-start-1 md:col-span-5 mb-6 md:mb-0",
        className
      )}
    >
      <AnimatedText tag="heading2" text={heading} className="mb-4 heading-md" />
      <motion.p
        className="mb-6"
        variants={transformVariants()}
        transition={{ ease: "linear", delay: 0.5 }}
      >
        {description}
      </motion.p>
      <motion.div
        variants={transformVariants()}
        transition={{ ease: "linear", delay: 0.7 }}
      >
        <Button
          onClick={navigateToPage}
          aria-label={`navigate to ${route} page`}
          className="btn-text"
          size={"lg"}
        >
          Shop Collection
        </Button>
      </motion.div>
    </div>
  );
};

export { CategoryWrap, CategoryTitle, CategoryImage, CategoryText };
