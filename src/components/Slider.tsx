import { FC, memo, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { clipPathVariants, easeTransitions } from "@/utils/motion";

type SliderProps = {
  slides: { id: string; image: string; title: string; route: string }[];
  activeImage: number;
  handleMouseEnter: (index: number) => void;
};

type SliderImagesProps = Pick<SliderProps, "slides" | "activeImage">;

const SliderImages: FC<SliderImagesProps> = memo(({ slides, activeImage }) => {
  return (
    <div className="relative before:content-[''] before:block before:pt-[125%] before:w-full">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.li
            key={slide.id}
            className="absolute inset-0 block"
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
            variants={clipPathVariants}
            animate={index === activeImage ? "visible" : "hidden"}
          >
            <picture className="size-full">
              <img
                src={slide.image}
                alt={slide.title}
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
});

const SliderIndicators: FC<SliderProps> = memo(
  ({ slides, activeImage, handleMouseEnter }) => {
    const handleMouseEnterCallback = useCallback(
      (index: number) => handleMouseEnter(index),
      [handleMouseEnter]
    );

    return (
      <ul className="mt-4 space-y-4 lg-mt-24 mb-6 lg:mb-0 " id="slider-indics">
        {slides.map((slide, index) => (
          <motion.li
            key={slide.id}
            className="uppercase font-heading heading-md font-medium text-gray-900"
            onMouseEnter={() => handleMouseEnterCallback(index)}
            transition={{
              ease: easeTransitions["default"],
              duration: 0.8,
            }}
            animate={activeImage === index ? { opacity: 1 } : { opacity: 0.5 }}
          >
            <Link className="block" to={slide.route}>
              {slide.title}
            </Link>
            <motion.div
              className="w-full h-px bg-gray-900 origin-left"
              transition={{
                ease: easeTransitions["default"],
                duration: 0.8,
              }}
              animate={activeImage === index ? { scaleX: 1 } : { scaleX: 0 }}
            />
          </motion.li>
        ))}
      </ul>
    );
  }
);

export { SliderImages, SliderIndicators };
