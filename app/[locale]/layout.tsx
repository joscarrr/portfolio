import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Navbar from "./_components/navbar";
import { Lexend, JetBrains_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
import "../globals.css";

const LEXEND = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const JETBRAINS_MONO = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${LEXEND.variable} ${JETBRAINS_MONO.variable} h-full antialiased`}>
      <body className="bg-primary min-h-full flex flex-col">
        <NextIntlClientProvider>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
