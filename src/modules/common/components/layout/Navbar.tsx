"use client";
import { SITE_NAME } from "@/config/constants";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LangSwitcher from "./LangSwitcher";
import { getLocale, getTranslations } from "next-intl/server";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import { useLocale, useTranslations } from "next-intl";
import PopUp from "../Animations/PopUp";

export const navLinks = [
  {
    id: 1,
    href: "/about",
    label: "about",
  },
  {
    id: 2,
    href: "/contact",
    label: "contact",
  },
  {
    id: 3,
    href: "/projects",
    label: "projects",
  },
  {
    id: 4,
    href: "/services",
    label: "services",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Common");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Menu />
      <div
        className={`flex justify-between items-center px-8 py-4 fixed top-0 left-0 w-full z-50  ${
          isScrolled ? "bg-white text-black" : "bg-black/0 text-white"
        } transition-all duration-300`}
      >
        <Link href="/" className="relative block w-[150px] h-auto">
          <Image
            src={isScrolled ? "/esmart-dark.png" : "/esmart-light.png"}
            alt={SITE_NAME}
            width={200}
            height={200}
            className="w-full h-auto object-contain"
          />
        </Link>
        <div
          className={`items-center gap-4 hidden md:flex ${
            locale === "ar" ? "font-cairo" : "font-poppins"
          }`}
        >
          {navLinks.map((link) => (
            <PopUp key={link.id}>
              <Link
                key={link.id}
                href={link.href}
                className={`font-semibold hover:text-primary transition-all duration-300 ${
                  locale === "ar" ? "font-cairo" : "font-poppins"
                }`}
              >
                {t(link.label)}
              </Link>
            </PopUp>
          ))}
        </div>
        <div className=" w-[150px] flex justify-end items-center gap-4">
          <LangSwitcher />
          <MenuButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
