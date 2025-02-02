import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { easeTransitions, transformVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface CategoryWrapProps {
  title: string;
  heading: string;
  description: string;
  route: string;
  imageUrl: string;
}
const CategoryWrap: FC<CategoryWrapProps> = ({
  title,
  heading,
  description,
  route,
  imageUrl,
}) => {
  const { revealRef, isInView } = useRevealAnimation();
  const navigate = useNavigate();
  const navigateToPage = () => navigate(route);
  return (
    <section className="px-default py-10">
      <div ref={revealRef} className="section-container gap-8 items-start">
        <div className="col-span-1 text-right">
          <AnimatedText
            className="inline-flex align-top  flex-nowrap heading-title"
            text={title}
            direction="right"
          />
        </div>
        {/* text */}

        <div className="flex gap-6 items-start col-span-10 md:col-span-6">
          <div className="space-y-4">
            <AnimatedText
              direction="bottom"
              text={heading}
              className="heading-md"
            />
            <motion.p
              variants={transformVariants()}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                delay: 0.4,
                duration: 0.4,
                ease: easeTransitions["opacity"],
              }}
            >
              {description}
            </motion.p>

            <div className="overflow-hidden">
              <motion.div
                variants={transformVariants("bottom")}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.6, ease: easeTransitions["transform"] }}
              >
                <Button
                  aria-label="navigate to collection page"
                  title="navigate to collection page"
                  size={"lg"}
                  variant={"default"}
                  onClick={navigateToPage}
                >
                  Shop Collection
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="overflow-hidden rounded-sm col-span-9 col-end-12  md:col-span-5 ">
          <img
            width={960}
            height={1280}
            src={imageUrl}
            alt={title}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoryWrap;
