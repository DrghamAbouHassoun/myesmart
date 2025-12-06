import React from "react";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("About");

  return (
    <div className="max-w-[1400px] mx-auto w-full h-full flex flex-col text-gray-600 relative py-32 gap-10 px-4">
      <h1 className="text-4xl font-bold uppercase mb-4 text-center lg:text-start text-primary">
        {t("title")}
      </h1>
      <p>{t("intro.paragraph1")}</p>
      <p>{t("intro.paragraph2")}</p>
      <div className="w-full h-px bg-gray-300 my-10"></div>
      <h2>{t("sustainability.title")}</h2>
      <p>{t("sustainability.paragraph1")}</p>
      <div>
        <p>{t("sustainability.paragraph2")}</p>
        <ul className="list-disc pl-6">
          <li>{t("sustainability.list.item1")}</li>
          <li>{t("sustainability.list.item2")}</li>
          <li>{t("sustainability.list.item3")}</li>
        </ul>
        <p>{t("sustainability.paragraph3")}</p>
      </div>
      <div className="w-full h-px bg-gray-300 my-10"></div>
      <h3>{t("energyInsights.title")}</h3>
      <div>
        <p>{t("energyInsights.paragraph1")}</p>
        <ul className="list-disc pl-6">
          <li>{t("energyInsights.list.item1")}</li>
          <li>{t("energyInsights.list.item2")}</li>
          <li>{t("energyInsights.list.item3")}</li>
          <li>{t("energyInsights.list.item4")}</li>
        </ul>
        <p>{t("energyInsights.paragraph2")}</p>
      </div>
      <div className="w-full h-px bg-gray-300 my-10"></div>
      <h3>{t("propertyManagement.title")}</h3>
      <div>
        <p>{t("propertyManagement.paragraph1")}</p>
        <ul className="list-disc pl-6">
          <li>{t("propertyManagement.list.item1")}</li>
          <li>{t("propertyManagement.list.item2")}</li>
          <li>{t("propertyManagement.list.item3")}</li>
          <li>{t("propertyManagement.list.item4")}</li>
          <li>{t("propertyManagement.list.item5")}</li>
        </ul>
        <p>{t("propertyManagement.paragraph2")}</p>
      </div>
      <div className="w-full h-px bg-gray-300 my-10"></div>
      <h3>{t("technology.title")}</h3>
      <div>
        <p>{t("technology.paragraph1")}</p>
        <ul className="list-disc pl-6">
          <li>{t("technology.list.item1")}</li>
          <li>{t("technology.list.item2")}</li>
          <li>{t("technology.list.item3")}</li>
          <li>{t("technology.list.item4")}</li>
        </ul>
        <p>{t("technology.paragraph2")}</p>
      </div>
      <div className="w-full h-px bg-gray-300 my-10"></div>
      <h3>{t("agency.title")}</h3>
      <div>
        <p>{t("agency.paragraph1")}</p>
        <ul className="list-disc pl-6">
          <li>{t("agency.list.item1")}</li>
          <li>{t("agency.list.item2")}</li>
          <li>{t("agency.list.item3")}</li>
          <li>{t("agency.list.item4")}</li>
          <li>{t("agency.list.item5")}</li>
          <li>{t("agency.list.item6")}</li>
        </ul>
        <p>{t("agency.paragraph2")}</p>
      </div>
      <div className="w-full h-px bg-gray-300 my-10"></div>
      <h3>{t("conclusion.title")}</h3>
      <p>{t("conclusion.paragraph1")}</p>
    </div>
  );
};

export default page;
