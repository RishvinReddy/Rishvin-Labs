import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";
import { OrganizationSchema, WebSiteSchema } from "@/components/seo/schema";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

import { constructMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = constructMetadata();

import { cookies } from "next/headers";
import { GlobalIntro } from "@/components/intro/GlobalIntro";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check if intro has already been played in this session
  const cookieStore = await cookies();
  const hasSeenIntro = cookieStore.has("intro_played");

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
        <OrganizationSchema />
        <WebSiteSchema />
        <GlobalIntro hasSeenIntro={hasSeenIntro} />
        {children}
        <GoogleAnalytics />
        <MicrosoftClarity />
      </body>
    </html>
  );
}
