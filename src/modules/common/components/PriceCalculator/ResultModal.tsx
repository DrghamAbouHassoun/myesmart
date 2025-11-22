"use client";
import { useContext } from "react";
import { PriceModalContext } from "../../context/PriceModalProvider";
import { formatNumberWithCommas } from "@/utils/numbers";
const ResultModal = () => {
  const { isOpen, setIsOpen, totalPrice, setTotalPrice } =
    useContext(PriceModalContext);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-black/50 z-50 transition-all duration-700 px-4 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-[500px] mx-auto w-full h-full flex items-center justify-center">
        <div className="bg-white w-full p-4 rounded-lg shadow-2xl flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold text-center">Result</h2>
          <p className="text-lg text-gray-500 text-center">
            estimated cost of installation
          </p>
          <p className="text-xl text-primary text-center">{formatNumberWithCommas(totalPrice)} AED</p>
          <div className="flex justify-center items-center">
            <button
              className="bg-black hover:bg-black/80 transition-all duration-300 cursor-pointer text-white px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
