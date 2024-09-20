import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { motion } from "framer-motion";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import {
  easeTransition,
  clipPathVariants,
  transformVariants,
} from "@/utils/motion";
import { Button } from "./ui/button";

interface CategoryWrapProps {
  title: string;
  imageUrl: string;
  heading: string;
  description: string;
  route: string;
}

const CategoryWrap = memo(function CategoryWrap({
  title,
  imageUrl,
  heading,
  description,
  route,
}: CategoryWrapProps) {
  const { revealRef, isInView } = useRevealAnimation();
  const navigate = useNavigate();
  const navigateToPage = () => navigate(route);

  return (
    <section className="px-default py-12 ">
      <motion.div
        ref={revealRef}
        className="section-container"
        transition={{ staggerChildren: 0.25 }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AnimatedText
          tag="heading4"
          text={title}
          className="mb-2 col-start-1 col-span-3 row-start-1 heading-title"
        />
        <motion.div
          transition={{ ease: easeTransition, duration: 0.8 }}
          variants={clipPathVariants}
          className="row-start-2 col-start-1 md:col-start-2 md:col-span-4 col-span-8 md:mb-0 mb-4"
        >
          <picture className="size-full">
            <img
              loading="lazy"
              decoding="async"
              width={800}
              height={1000}
              className="size-full align-middle"
              src={imageUrl}
              alt={title}
            />
          </picture>
        </motion.div>

        <motion.div
          className="col-span-10 md:col-span-6 md:col-start-7 row-start-3 col-start-1 md:row-start-2"
          transition={{ staggerChildren: 0.15 }}
          variants={transformVariants()}
        >
          <AnimatedText
            tag="heading2"
            text={heading}
            className="mb-4 heading-md "
          />
          <motion.p
            className=" max-w-prose md:max-w-sm text-sm  text-gray-600 leading-normal mb-6"
            variants={transformVariants()}
            transition={{ ease: "linear" }}
          >
            {description}
          </motion.p>
          <motion.div
            variants={transformVariants()}
            transition={{ ease: "linear" }}
          >
            <Button
              onClick={navigateToPage}
              className="btn-text rounded-full"
              size={"lg"}
              variant={"default"}
            >
              Shop Now
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
});

export default CategoryWrap;
