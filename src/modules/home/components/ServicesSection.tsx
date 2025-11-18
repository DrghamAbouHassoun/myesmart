import { Link } from "@/i18n/navigation";
import ServiceHSlider from "@/modules/common/components/Sliders/ServiceHSlider";
import { getTranslations } from "next-intl/server";

const ServicesSection = async () => {
  const t = await getTranslations("Services");
  return (
    <section
      id="services"
      className="relative w-full py-16 flex flex-col justify-center items-center  text-white"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10  bg-linear-to-r from-primary via-black to-primary brightness-20"></div>
      <div className="max-w-[1400px] mx-auto w-full h-full">
        <div className="w-full text-center">
          <h2 className="text-4xl font-bold uppercase mb-4">{t("title")}</h2>
          <p className="text-xl my-10">
            {t("description")}
          </p>
        </div>
        <div className="w-full flex my-16">
          <ServiceHSlider />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Link
          href="/services"
          className="bg-primary hover:bg-primary/80 transition-all duration-300 text-white px-4 py-2 rounded-full font-semibold text-lg"
        >
          {t("learn-more")}
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
