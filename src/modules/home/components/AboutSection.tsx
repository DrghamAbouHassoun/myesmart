import { SITE_NAME } from "@/config/constants";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const AboutSection = async () => {
  const t = await getTranslations("About");
  return (
    <section
      id="about"
      className="w-full flex flex-col justify-center items-center relative py-16 gap-10 px-4"
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/images/textures/texture-6.jpg"
          alt={SITE_NAME}
          width={1400}
          height={1000}
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-[1400px] mx-auto w-full h-full flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
        <div className=" lg:w-[50%] flex flex-row lg:flex-col items-center lg:items-end gap-16">
          <div className="flex flex-col items-center lg:items-end gap-4">
            <p className="text-5xl text-primary">13.2%</p>
            <p className="text-lg font-semibold">Average energy savings</p>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-4">
            <p className="text-5xl text-primary">+13,100</p>
            <p className="text-lg font-semibold">Homes equipped</p>
          </div>
        </div>
        <div className=" lg:w-[50%]">
          <h2 className="text-4xl font-bold uppercase mb-4 text-center lg:text-start">
            {t("about-esmart")}
          </h2>
          <p className="text-xl my-10 text-center lg:text-start">{t("about-esmart-description")}</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Link
          href="/about"
          className="bg-primary hover:bg-primary/80 transition-all duration-300 text-white px-4 py-2 rounded-full font-semibold text-lg"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
