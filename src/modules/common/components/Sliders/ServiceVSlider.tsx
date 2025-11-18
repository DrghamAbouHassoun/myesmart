"use client";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { services } from "@/data/services";
import { useLocale } from "next-intl";

const ServiceVSlider = () => {
  const locale = useLocale();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    axis: "y",
  });
  return (
    <div className="w-full h-full overflow-y-hidden">
      <div className="embla__viewport w-full h-full overflow-y-hidden" ref={emblaRef}>
        <div className="embla__container h-full flex flex-col">
          {services.map((service) => (
            <div key={service.title} className="embla__slide flex-[0_0_100%] min-h-full flex flex-col gap-4">
              <h3 className="text-2xl font-bold uppercase">{locale === "ar" ? service.titleAr : service.title}</h3>
              <p className="text-lg">{locale === "ar" ? service.descriptionAr : service.description}</p>
            </div>  
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceVSlider;
