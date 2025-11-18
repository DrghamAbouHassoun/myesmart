"use client";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuProvider";
import { navLinks } from "./Navbar";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

const Menu = () => {
  const { active, setActive } = useContext(MenuContext);
  const locale = useLocale();
  const t = useTranslations("Common");
  return (
    <div className={`fixed md:hidden top-0 left-0 w-full h-screen bg-black z-50 transition-all duration-700 ${active ? "translate-y-0" : "translate-y-[-100vh]"}`}>
      <div className="flex flex-col items-center justify-center h-full gap-4">
        {navLinks.map(item => (
          <Link 
            key={item.id}
            href={item.href}
            className={`text-white text-2xl font-bold ${locale === "ar" ? "font-cairo" : "font-poppins"}`}
          >
            {t(item.label)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
