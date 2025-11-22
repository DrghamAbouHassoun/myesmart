"use client";
import React, { useState } from "react";
import { createContext } from "react";

interface PriceModalContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  totalPrice: number;
  setTotalPrice: (totalPrice: number) => void;
}

export const PriceModalContext = createContext<PriceModalContextType>({
  isOpen: false,
  setIsOpen: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
});

const PriceModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <PriceModalContext.Provider
      value={{ isOpen, setIsOpen, totalPrice, setTotalPrice }}
    >
      {children}
    </PriceModalContext.Provider>
  );
};

export default PriceModalProvider;
