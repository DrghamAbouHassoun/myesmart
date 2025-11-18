"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import "flag-icons/css/flag-icons.min.css";

const LangSwitcher = () => {
  const locale = useLocale();
  const path = usePathname();
  return (
    <div>
      {locale === "en" ? (
        <Link href={path} locale="ar">
          <span className="fi fi-ae"></span> AR
        </Link>
      ) : (
        <Link href={path} locale="en">
          <span className="fi fi-gb"></span> EN
        </Link>
      )}
    </div>
  );
};

export default LangSwitcher;
