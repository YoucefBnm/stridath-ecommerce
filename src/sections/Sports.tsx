import { sports } from "@/constants/constants";
import { easeTransition, clipPathVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SliderProps {
  items: (typeof sports)["items"];
  activeImage: number;
  handleMouseEnter: (index: number) => void;
}

type sliderImagesProps = Pick<SliderProps, "items" | "activeImage">;

const SliderImages = ({ items, activeImage }: sliderImagesProps) => {
  return (
    <div className="relative before:content-[''] before:block before:pt-[125%] before:w-full">
      <div className="absolute inset-0">
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            className="absolute inset-0 block"
            transition={{ ease: easeTransition, duration: 0.8 }}
            variants={clipPathVariants}
            animate={index === activeImage ? "visible" : "hidden"}
          >
            <picture className="size-full">
              <img
                src={item.image}
                alt={item.title}
                className="size-full object-cover"
                width={960}
                height={1280}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </motion.li>
        ))}
      </div>
    </div>
  );
};

const SliderIndicators = ({
  items,
  activeImage,
  handleMouseEnter,
}: SliderProps) => {
  return (
    <ul className="mt-4 lg:mt-24 mb-6 lg:mb-0" id="slider-titles">
      {items.map((item, index) => (
        <motion.li
          key={item.id}
          className="uppercase heading-md mb-2 last:mb-0"
          onMouseEnter={() => handleMouseEnter(index)}
          transition={{
            ease: easeTransition,
            duration: 0.8,
          }}
          animate={activeImage === index ? { opacity: 1 } : { opacity: 0.5 }}
        >
          <Link className="block" to={item.route}>
            {item.title}
          </Link>
          <motion.div
            className=" w-full h-px bg-black origin-left"
            transition={{
              ease: easeTransition,
              duration: 0.8,
            }}
            animate={activeImage === index ? { scaleX: 1 } : { scaleX: 0 }}
          />
        </motion.li>
      ))}
    </ul>
  );
};

const Sports = () => {
  const { title, description, items } = sports;
  const [activeItem, setActiveItem] = useState(0);

  const handleMouseEnter = (index: number) => setActiveItem(index);

  return (
    <section id="sports" className=" py-16 px-12">
      <div className="section-container">
        <div className="col-span-12 md:col-span-5 grid grid-cols-4 lg:grid-cols-5 gap-y-0 ">
          <div className=" col-span-3 relative">
            <p className=" text-xs text-zinc-500 w-full">{description}</p>
          </div>

          <div className="col-start-2 col-span-3 lg:col-span-3 lg:col-start-3 relative z-0 mt-8">
            <div className="block col-span-3">
              <SliderImages items={items} activeImage={activeItem} />
            </div>
          </div>
        </div>

        <div className="ml-0  md:ml-8 col-span-12 md:col-span-7  lg:col-span-6  lg:col-start-7  ">
          <div className="  grid grid-cols-4 lg:grid-cols-6 lg:mt-8">
            <div className=" col-span-4 lg:col-span-6">
              <h4 className=" hidden md:block font-heading text-xs uppercase">
                {title}
              </h4>
              <SliderIndicators
                items={items}
                activeImage={activeItem}
                handleMouseEnter={handleMouseEnter}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
