"use client";
import React from "react";
import { useInView } from "../../hooks/useInView";

const SlideTop = ({ children }: { children: React.ReactNode }) => {
  const { ref, isInView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
    delay: 100,
  });
  return (
    <div className={`relative ${isInView ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"} transition-all duration-700`} ref={ref as React.RefObject<HTMLDivElement>}>
      {children}
    </div>
  );
};

export default SlideTop;
