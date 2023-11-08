import { useRef, useState } from "react";

export function useHover(inititalState = false) {
  const [isHovered, setIsHovered] = useState(inititalState);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const ref = (node) => {
    if (node?.nodeType === Node.ELEMENT_NODE) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
    }
    ref.current = node;
  };
  return [ref, isHovered];
}
