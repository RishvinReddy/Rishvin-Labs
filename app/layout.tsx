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
  title: "Rishvin Labs | AI-Powered Software, Web, IoT & Cybersecurity Solutions",
  description:
    "Rishvin Labs builds premium software platforms, websites, IoT sensor networks, cybersecurity auditing solutions, and scalable digital systems for ambitious enterprises and founders.",
  keywords: [
    "software development",
    "web development",
    "IoT solutions",
    "cybersecurity services",
    "automation systems",
    "Next.js developer",
    "Rishvin Labs",
    "Rishvin Reddy",
    "tech studio"
  ],
  authors: [{ name: "Rishvin Labs", url: "https://rishvinreddy.vercel.app/rishvin-labs/" }],
  openGraph: {
    title: "Rishvin Labs | Premium Tech Studio & Software Engineering",
    description:
      "Engineering scalable web platforms, software architectures, IoT systems, and zero-trust cybersecurity solutions.",
    siteName: "Rishvin Labs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
