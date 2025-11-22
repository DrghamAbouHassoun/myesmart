import { EMAIL_SWITZERLAND, EMAIL_UAE, PHONE_SWITZERLAND, PHONE_UAE } from "@/config/constants";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export const mainLinks = [
  {
    id: 1,
    href: "/",
    label: "home",
  },
  {
    id: 2,
    href: "/about",
    label: "about",
  },
  {
    id: 3,
    href: "/contact",
    label: "contact",
  },
  {
    id: 4,
    href: "/projects",
    label: "projects",
  },
  {
    id: 5,
    href: "/services",
    label: "services",
  },
];

export const privacyLinks = [
  {
    id: 6,
    href: "/terms-and-conditions",
    label: "terms-and-conditions",
  },
  {
    id: 7,
    href: "/privacy-policy",
    label: "privacy-policy",
  },
  {
    id: 8,
    href: "/cookies-policy",
    label: "cookies-policy",
  },
];

const Footer = async () => {
  const t = await getTranslations("Common.Footer");
  const commonT = await getTranslations("Common");
  return (
    <footer className="w-full px-4 bg-black text-white flex flex-col justify-center items-center">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row gap-10 py-16">
        <div className="flex flex-col flex-1">
          <div className="relative w-[150px] h-auto">
            <Image
              src="/esmart-light.png"
              alt="eSMART UAE"
              width={150}
              height={150}
              className="w-full h-auto object-contain"
            />
          </div>
          <p className="text-sm text-gray-400 py-4">{t("description")}</p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold uppercase">
            {commonT("address")}
          </h3>
          <div className="text-gray-400">
            <span className="fi fi-ae"></span> {commonT("address-1-line-1")}{" "}
            <br />
            {commonT("address-1-line-2")} <br />
            {commonT("address-1-line-3")} <br /><br />
            <p className="text-gray-400 flex items-center gap-2">
              <FaPhone />{" "}
              <Link className="hover:text-primary transition-all duration-300 w-fit" href={`tel:${PHONE_UAE.replace(" ", "")}`}>
                {PHONE_UAE}
              </Link>
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <MdAlternateEmail />{" "}
              <Link className="hover:text-primary transition-all duration-300 w-fit" href={`mailto:${EMAIL_UAE}`}>{EMAIL_UAE}</Link>
            </p>
            <br />
            <span className="fi fi-ch"></span> {commonT("address-line-2")}{" "}
            <br />
            {commonT("address-2-line-1")} <br />
            {commonT("address-2-line-2")} <br />
            <br />
            <p className="text-gray-400 flex items-center gap-2">
              <FaPhone />{" "}
              <Link className="hover:text-primary transition-all duration-300 w-fit" href={`tel:${PHONE_SWITZERLAND.replace(" ", "")}`}>
                {PHONE_SWITZERLAND}
              </Link>
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <MdAlternateEmail />{" "}
              <Link className="hover:text-primary transition-all duration-300 w-fit" href={`mailto:${EMAIL_SWITZERLAND}`}>{EMAIL_SWITZERLAND}</Link>
            </p>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold uppercase">
            {commonT("links")}
          </h3>
          <div className="flex flex-col gap-2 text-gray-400">
            {mainLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="hover:text-primary transition-all duration-300 w-fit"
              >
                {commonT(link.label)}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold uppercase">
            {commonT("privacy")}
          </h3>
          <div className="flex flex-col gap-2 text-gray-400">
            {privacyLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="hover:text-primary transition-all duration-300 w-fit"
              >
                {commonT(link.label)}
              </Link>
            ))}
          </div>
        </div>
        {/* <div className="flex-1">
          <Link
            href={""}
            className="relative block w-[130px] h-auto overflow-hidden"
          >
            <Image
              src="/icons/insta-light.png"
              alt="Instagram"
              width={150}
              height={150}
              className="w-full h-auto object-cover"
            />
          </Link>
        </div> */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold uppercase">
            {commonT("social")}
          </h3>
          <div className="flex flex-row gap-4 text-gray-400">
            <Link href={""} className="hover:text-primary transition-all duration-300 w-fit">
              <FaInstagram size={24} />
            </Link>
            <Link href={""} className="hover:text-primary transition-all duration-300 w-fit">
              <FaLinkedin size={24} />
            </Link>
            <Link href={""} className="hover:text-primary transition-all duration-300 w-fit">
              <FaXTwitter size={24} />
            </Link>
            <Link href={""} className="hover:text-primary transition-all duration-300 w-fit">
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center text-gray-400 text-sm border-t border-t-gray-400 py-4">
        <p>{commonT("copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
