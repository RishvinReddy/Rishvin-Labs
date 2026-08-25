// The keyword array is useful for our internal content strategy and mapping intents to pages,
// rather than being used as a massive meta keywords dump.

export const SEO_KEYWORDS = {
  brand: [
    "Rishvin Labs",
    "Rishvin Labs India",
    "Rishvin Labs software",
    "Rishvin Labs AI",
    "Rishvin Labs technology",
    "Rishvin Labs development",
  ],
  founder: [
    "Rishvin Reddy",
    "Rishvin Reddy India",
    "Rishvin Reddy founder",
    "Rishvin Reddy developer",
    "Rishvin Reddy software developer",
    "Rishvin Reddy AI",
  ],
  services: {
    ai: [
      "AI development company",
      "AI software development",
      "AI application development",
      "AI agents",
      "AI workflow automation",
    ],
    software: [
      "custom software development",
      "software development company",
      "web application development",
      "SaaS development",
      "digital product development",
      "startup software development",
    ],
    d2c: [
      "D2C technology",
      "D2C software",
      "D2C ecommerce technology",
      "D2C automation",
      "D2C AI",
      "D2C customer experience",
    ],
  },
};

export const getGlobalKeywords = () => [
  ...SEO_KEYWORDS.brand,
  ...SEO_KEYWORDS.services.ai,
  ...SEO_KEYWORDS.services.software,
  ...SEO_KEYWORDS.services.d2c,
];
