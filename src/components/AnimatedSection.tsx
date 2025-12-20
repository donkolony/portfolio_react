import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const animationClasses: Record<AnimationType, { initial: string; visible: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-in": {
    initial: "opacity-0",
    visible: "opacity-100",
  },
  "slide-left": {
    initial: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "slide-right": {
    initial: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  scale: {
    initial: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
};

export const AnimatedSection = ({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { initial, visible } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? visible : initial
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
