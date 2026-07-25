import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://rishvinreddy.vercel.app/rishvin-labs"),
  title: {
    default: "Rishvin Labs | Web Development, Software, AI, Cybersecurity, IoT & Automation",
    template: "%s | Rishvin Labs",
  },
  description:
    "Rishvin Labs builds modern websites, custom software, AI automation, cybersecurity solutions, IoT systems and digital products for startups, businesses, creators and individuals. Founded by Rishvin Reddy.",
  authors: [{ name: "Rishvin Reddy", url: "https://rishvinreddy.vercel.app" }],
  creator: "Rishvin Reddy",
  publisher: "Rishvin Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rishvin Labs | Web Development, Software, AI, Cybersecurity, IoT & Automation",
    description:
      "Rishvin Labs builds modern websites, custom software, AI automation, cybersecurity solutions, IoT systems and digital products for startups, businesses, creators and individuals. Founded by Rishvin Reddy.",
    siteName: "Rishvin Labs",
    url: "https://rishvinreddy.vercel.app/rishvin-labs",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rishvin Labs | Web Development, Software, AI, Cybersecurity, IoT & Automation",
    description: "Rishvin Labs builds modern websites, custom software, AI automation, cybersecurity solutions, IoT systems and digital products for startups, businesses, creators and individuals. Founded by Rishvin Reddy.",
    creator: "@rishvinreddy",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://rishvinreddy.vercel.app/rishvin-labs",
  }
};

import { cookies } from "next/headers";
import { GlobalIntro } from "@/components/intro/GlobalIntro";
import { JsonLd } from "@/components/seo/json-ld";

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
        <JsonLd />
        <GlobalIntro hasSeenIntro={hasSeenIntro} />
        {children}
      </body>
    </html>
  );
}
