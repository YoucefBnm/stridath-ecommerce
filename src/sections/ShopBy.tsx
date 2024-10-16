import { CategoryMenImage, CategoryWomenImage } from "@/assets";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { clipPathVariants, transformVariants } from "@/utils/motion";
import { cn } from "@/utils/shadcn";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type ShopByCardProps = {
  inView: boolean;
  imageUrl: string;
  title: string;
  route: string;
  className?: string;
};
const ShopByCard = (props: ShopByCardProps) => {
  const { inView, imageUrl, title, route, className } = props;
  return (
    <Link className={cn("block ", className)} to={route}>
      <div className="overflow-hidden">
        <motion.picture
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.5 }}
          className="size-full block"
          variants={clipPathVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
      </div>
      <div className="overflow-hidden">
        <motion.h3
          variants={transformVariants("bottom")}
          transition={{ duration: 0.4 }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="heading-base uppercase"
        >
          {title}
        </motion.h3>
      </div>
    </Link>
  );
};

const ShopBy = () => {
  const { revealRef, isInView } = useRevealAnimation();

  return (
    <section className="px-default py-12">
      <div
        ref={revealRef}
        className="section-container items-start md:grid-rows-[30px_1fr_30px]"
      >
        <h4 className="col-span-6 md:col-span-3 uppercase font-heading text-sm font-normal">
          Find your perfect fit
        </h4>

        <ShopByCard
          className="row-start-2 md:col-start-2 md:col-span-5 col-span-8"
          inView={isInView}
          imageUrl={CategoryMenImage}
          title="MEN"
          route="/shop/men"
        />

        <ShopByCard
          className="md:row-start-1 md:col-span-5 md:col-end-13 row-start-3 col-span-8 col-end-13"
          inView={isInView}
          imageUrl={CategoryWomenImage}
          title="WOMEN"
          route="/shop/women"
        />
      </div>
    </section>
  );
};

export default ShopBy;
