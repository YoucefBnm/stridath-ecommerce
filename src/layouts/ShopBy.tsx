import { CategoryMenImage, CategoryWomenImage } from "@/assets";
import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { easeTransitions, transformVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface ShopByCardProps {
  route: string;
  title: string;
  imageUrl: string;
}
const ShopByCard: FC<ShopByCardProps> = ({ route, title, imageUrl }) => {
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const handleMouseEnter = () => setIsMouseIn(true);
  const handleMouseLeave = () => setIsMouseIn(false);

  return (
    <Link
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      to={route}
      className=" block rounded-sm relative overflow-hidden"
    >
      <motion.img
        width={960}
        height={1280}
        src={imageUrl}
        alt={title}
        className=""
        initial={{ scale: 1 }}
        animate={isMouseIn ? { scale: 1.15 } : { scale: 1 }}
        transition={{
          ease: easeTransitions["transform"],
        }}
      />
      <motion.div
        className="absolute inset-0 size-full bg-gray-950/20 z-10"
        variants={transformVariants()}
        animate={isMouseIn ? "hidden" : "visible"}
        transition={{
          ease: easeTransitions["opacity"],
        }}
      />
      <Button
        size={"sm"}
        variant={"secondary"}
        className="absolute z-20 left-2 bottom-4"
      >
        Shop
      </Button>
    </Link>
  );
};
const ShopBy = () => {
  return (
    <section className="px-default py-10">
      <div className="w-full md:w-3/5 mx-auto flex max-[480px]:flex-wrap max-[480px]:gap-4 justify-between space-x-4">
        <div className="max-[480px]:hidden">
          <AnimatedText
            className="inline-flex flex-nowrap heading-title"
            text="FIND YOUR FIT"
            direction="right"
          />
        </div>
        <ShopByCard route="/shop/men" title="men" imageUrl={CategoryMenImage} />
        <ShopByCard
          route="/shop/women"
          title="women"
          imageUrl={CategoryWomenImage}
        />
      </div>
    </section>
  );
};

export default ShopBy;
