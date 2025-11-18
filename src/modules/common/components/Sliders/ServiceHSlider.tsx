"use client";
import { services } from "@/data/services";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";
import Image from "next/image";

const ServiceHSlider = () => {
  const locale = useLocale();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    axis: "x",
    dragFree: false,
  });
  return (
    <div className="w-full h-full overflow-x-hidden">
      <div
        className="embla__viewport w-full h-full overflow-x-hidden"
        ref={emblaRef}
      >
        <div className="embla__container w-full h-full flex gap-4">
          {services.map((service) => (
            <div
              key={locale === "ar" ? service.titleAr : service.title}
              className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.32%] min-w-0 w-full px-4"
            >
              <div className="w-full h-full flex flex-1 flex-col gap-4 bg-white text-black rounded-lg p-4">
                <div className="relative aspect-4/3 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={locale === "ar" ? service.titleAr : service.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold uppercase">
                  {locale === "ar" ? service.titleAr : service.title}
                </h3>
                <p className="text-lg">{locale === "ar" ? service.descriptionAr : service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceHSlider;
