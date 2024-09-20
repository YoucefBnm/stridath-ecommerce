export type TransformVariant =
  | "top"
  | "left"
  | "bottom"
  | "right"
  | "z"
  | "zy"
  | "zx";

export const transformVariants = (direction?: TransformVariant) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
    scale: direction === "z" ? 0 : 1,
    scaleY: direction === "zy" ? 0 : 1,
    scaleX: direction === "zx" ? 0 : 1,
    opacity: !direction ? 0 : 1,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
  },
});

export const clipPathVariants = {
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  hidden: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)",
  },
};
export const easeTransition = [0.33, 1, 0.68, 1];
