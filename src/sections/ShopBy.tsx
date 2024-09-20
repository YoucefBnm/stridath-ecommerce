import { CategoryMenImage, CategoryWomenImage } from "@/assets";
import AnimatedText from "@/components/AnimatedText";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { transformVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type ShopByCardProps = {
  inView: boolean;
  imageUrl: string;
  title: string;
  route: string;
};

const ShopByCard = ({ inView, imageUrl, title, route }: ShopByCardProps) => {
  return (
    <motion.div
      transition={{ duration: 0.4, staggerChildren: 0.15 }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div variants={transformVariants()}>
        <Link className="block size-full overflow-hidden" to={route}>
          <motion.picture
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4 }}
            className="size-full block"
          >
            <img
              loading="lazy"
              decoding="async"
              width={900}
              height={1200}
              className="align-middle size-full"
              src={imageUrl}
              alt={title}
            />
          </motion.picture>
        </Link>
      </motion.div>

      <div className="overflow-hidden">
        <h3 className="heading-base mt-4 uppercase">{title}</h3>
      </div>
    </motion.div>
  );
};
const ShopBy = () => {
  const { revealRef, isInView } = useRevealAnimation();

  return (
    <section className="px-default py-16">
      <div
        ref={revealRef}
        className="section-container grid-rows-[min-content_1fr_min-content]"
      >
        <AnimatedText
          tag="heading4"
          text="Find your perfect fit"
          className="heading-title col-span-5 md:col-span-4 col-start-1 row-start-1  mb-8 h-min"
        />

        <div className="col-span-5 md:col-span-4 col-start-1 md:col-start-2 row-start-2 row-span-2">
          <ShopByCard
            inView={isInView}
            imageUrl={CategoryMenImage}
            title="MEN"
            route="/shop/men"
          />
        </div>
        <div className="col-span-5 md:col-span-4 col-start-7 md:col-start-7 row-span-2 row-start-1 ">
          <ShopByCard
            inView={isInView}
            imageUrl={CategoryWomenImage}
            title="women"
            route="/shop/women"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopBy;
