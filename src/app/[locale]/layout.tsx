import type { Metadata } from "next";
import { Cairo, Geist, Geist_Mono, Roboto, Tajawal } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { SITE_NAME } from "@/config/constants";
import Layout from "@/modules/common/components/layout/Layout";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_NAME,
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
});

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${poppins.variable} ${roboto.variable} ${cairo.variable} ${tajawal.variable}`}>
        <NextIntlClientProvider>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
