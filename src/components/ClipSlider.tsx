import { easeTransition, clipPathVariants } from "@/utils/motion";
import { cn } from "@/utils/shadcn";
import { motion } from "framer-motion";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Link } from "react-router-dom";
import InfoTitle from "./InfoTitle";

type SlideItem = {
  id: string;
  title: string;
  image: string;
  route: string;
};
type ClipSliderProps = PropsWithChildren & {
  items: SlideItem[];
  className: string;
};
type ClipSliderContextValue = {
  items: SlideItem[];
  activeItem: number;
  handleMouse: (index: number) => void;
};
function useClipSliderContext() {
  const context = useContext(ClipSliderContext);
  if (context === undefined) {
    throw new Error(
      "useClipSliderContext must be used within a ClipSliderContextProvider"
    );
  }
  return context;
}

const ClipSliderContext = createContext<ClipSliderContextValue | undefined>(
  undefined
);

const ClipSlider = (props: ClipSliderProps) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const handleMouse = (index: number) => setActiveItem(index);

  const { items, className, children } = props;
  return (
    <ClipSliderContext.Provider value={{ items, activeItem, handleMouse }}>
      <section className={cn(className)}>
        <div className="section-container">{children}</div>
      </section>
    </ClipSliderContext.Provider>
  );
};

type SliderImagesProps = {
  className?: string;
};
const ClipSliderImages = ({ className }: SliderImagesProps) => {
  const { items, activeItem } = useClipSliderContext();
  return (
    <div
      className={cn(
        "md:col-span-4 col-start-2  col-span-10  md:col-start-9 relative before:content-[''] before:block before:pt-[125%] before:w-full",
        className
      )}
    >
      <ul className="absolute inset-0">
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            className="absolute inset-0 block"
            transition={{ ease: easeTransition, duration: 0.8 }}
            variants={clipPathVariants}
            animate={index === activeItem ? "visible" : "hidden"}
          >
            <Link
              to={item.route}
              aria-label={`navigate to ${item.route} page`}
              className="block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="size-full object-contain"
                width={960}
                height={1280}
                loading="eager"
                decoding="async"
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

const ClipSliderTitle = ({ title }: { title: string }) => {
  return <InfoTitle title={title} className="row-start-1" />;
};

type ClipSliderIndicatorsProps = {
  className?: string;
};
const ClipSliderIndicators = (props: ClipSliderIndicatorsProps) => {
  const { items, activeItem, handleMouse } = useClipSliderContext();
  const { className } = props;
  return (
    <ul
      className={cn(
        "mb-4 md:mb-0 col-start-2 col-span-10 md:col-span-5",
        className
      )}
      id="slider-titles"
    >
      {items.map((item, index) => (
        <motion.li
          key={item.id}
          className="uppercase heading-md mb-2 last:mb-0"
          onMouseEnter={() => handleMouse(index)}
          transition={{
            ease: easeTransition,
            duration: 0.8,
          }}
          animate={activeItem === index ? { opacity: 1 } : { opacity: 0.5 }}
        >
          <Link
            to={item.route}
            className="block"
            aria-label={`navigate to ${item.title} page`}
          >
            {item.title}
          </Link>
          <motion.div
            className=" w-full h-px bg-black origin-left"
            transition={{
              ease: easeTransition,
              duration: 0.8,
            }}
            animate={activeItem === index ? { scaleX: 1 } : { scaleX: 0 }}
          />
        </motion.li>
      ))}
    </ul>
  );
};

export { ClipSlider, ClipSliderImages, ClipSliderTitle, ClipSliderIndicators };
