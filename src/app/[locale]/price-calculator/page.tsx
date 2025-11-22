import PriceCalculatorForm from "@/modules/common/components/PriceCalculator/PriceCalculatorForm";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("PriceCalculator");
  return (
    <div className="py-32 px-4">
      <div className="max-w-[800px] mx-auto w-full flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center">{t("title")}</h1>
        <p className="text-lg text-gray-500 text-center">{t("description")}</p>
        <PriceCalculatorForm />
      </div>
    </div>
  );
};

export default page;
