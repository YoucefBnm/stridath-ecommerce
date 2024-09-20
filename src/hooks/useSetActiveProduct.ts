import { useState } from "react";

export function useSetActiveProduct() {
  const [activeColor, setActiveColor] = useState<number>(0);
  const [activeImage, setActiveImage] = useState<number>(0);

  const handleColorChange = (index: number) => setActiveColor(index);

  const handleMouse = (event: "enter" | "leave") => {
    if (event === "enter") setActiveImage(1);
    if (event === "leave") setActiveImage(0);
  };

  return {
    activeColor,
    activeImage,
    handleColorChange,
    handleMouse,
  };
}
