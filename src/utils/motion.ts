export const easeTransitions = {
  default: [0.25, 0.1, 0.25, 1],
  transform: [0.42, 0, 0.58, 1], // Smoother ease transition for transforms
  opacity: [0.25, 0.1, 0.25, 1], // Smoother ease transition for opacity
  clipPath: [0.6, 0.04, 0.98, 0.335], // Smoother ease transition for clip path
};

export type TransformDirectionType = "top" | "bottom" | "left" | "right" | "z";
export const transformVariants = (direction?: TransformDirectionType) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
    scale: direction === "z" ? 0 : 1,
    opacity: !direction ? 0 : 1,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  },
});
