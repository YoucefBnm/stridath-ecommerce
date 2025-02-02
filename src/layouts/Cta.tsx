import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { ctaContent } from "@/constants/ctaContent";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { transformVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Cta = () => {
  const { title, description } = ctaContent;
  const { revealRef, isInView } = useRevealAnimation();
  const MotionButton = motion(Button);
  const navigate = useNavigate();
  const navigateToSignup = () => navigate("/auth/signup");
  return (
    <section
      ref={revealRef}
      className="px-default py-12 bg-gray-950 text-white"
    >
      <div className="w-4/5 max-[400px]:w-full mx-auto space-y-4">
        <AnimatedText className="heading-md" direction="bottom" text={title} />
        <motion.p
          className=" text-gray-100/80"
          variants={transformVariants()}
          initial="hidden"
          transition={{ delay: 0.4 }}
          animate={isInView ? "visible" : "hidden"}
        >
          {description}
        </motion.p>

        <MotionButton
          aria-label="navigate to signup page"
          title="navigate to signup page"
          size={"lg"}
          variant={"secondary"}
          variants={transformVariants("bottom")}
          initial="hidden"
          transition={{ delay: 0.6 }}
          animate={isInView ? "visible" : "hidden"}
          onClick={navigateToSignup}
        >
          Sign up for Free
        </MotionButton>
      </div>
    </section>
  );
};

export default Cta;
