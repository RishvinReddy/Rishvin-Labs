export const siteConfig = {
  name: "Rishvin Labs",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rishvinlabs.com",
  description: "Boutique engineering studio dedicated to solving complex problems through thoughtful architecture, clean code, and zero-trust security.",
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "contact@rishvinlabs.com",
  founder: "Rishvin Reddy",
  socials: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/RishvinReddy",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/rishvinreddy",
    portfolio: process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://rishvinreddy.vercel.app",
    twitter: "@rishvinreddy",
  }
};
