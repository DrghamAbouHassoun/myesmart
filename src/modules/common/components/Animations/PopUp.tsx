"use client";
import React from "react";
import { useInView } from "../../hooks/useInView";

const PopUp = ({ children }: { children: React.ReactNode }) => {
  const { ref, isInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    delay: 100,
  });
  return (
    <div
      className={`relative ${
        isInView ? "scale-100 opacity-100" : "scale-50 opacity-0"
      } transition-all duration-300`}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {children}
    </div>
  );
};

export default PopUp;
