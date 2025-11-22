import { SITE_NAME } from "@/config/constants";
import Image from "next/image";
import React from "react";
import { getTranslations } from "next-intl/server";
import CircuitBg from "@/modules/common/components/backgrounds/CircuitBg/CircuitBg";
import SlideTop from "@/modules/common/components/Animations/SlideTop";
import SlideBottom from "@/modules/common/components/Animations/SlideBottom";

const Hero = async () => {
  const t = await getTranslations("Home.Hero");
  return (
    <div className="relative w-full h-screen bg-black">
      {/* <div className="absolute top-0 left-0 w-full h-full z-0 flex items-center justify-center brightness-40 grayscale-75">
        <Image
          src="/images/stock/3.webp"
          alt={SITE_NAME}
          width={1200}
          height={1200}
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <CircuitBg />
      </div>
      <div className="h-screen w-full bg-linear-to-br from-black/90 to-primary/50 flex items-center justify-center text-white absolute top-0 left-0 z-10">
        <div className="max-w-[1400px] mx-auto w-full h-full flex justify-center items-center gap-10 px-4">
          <div className="hidden md:flex flex-1 justify-center">
            <SlideTop>
              <div className="relative aspect-3/4 max-w-[250px] rounded-lg overflow-hidden translate-y-[25%]">
                <Image
                  src="/images/stock/1.webp"
                  alt={SITE_NAME}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </SlideTop>
            <SlideBottom>
              <div className="relative aspect-3/4 max-w-[250px] rounded-lg overflow-hidden scale-[1.1]">
                <Image
                  src="/images/stock/2.webp"
                  alt={SITE_NAME}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </SlideBottom>
          </div>
          <div className="flex-1">
            <p className="text-sm uppercase font-bold text-primary">
              {t("smallTitle")}
            </p>
            <h1 className="text-6xl font-bold uppercase mb-4">{t("title")}</h1>
            <p className="text-xl">{t("subtitle")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
