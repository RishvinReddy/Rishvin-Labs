import React from "react";

export function JsonLd() {
  const entityGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://rishvinreddy.vercel.app/rishvin-labs/#organization",
        "name": "Rishvin Labs",
        "url": "https://rishvinreddy.vercel.app/rishvin-labs",
        "logo": "https://rishvinreddy.vercel.app/favicon.png",
        "description": "Rishvin Labs builds modern websites, custom software, AI automation, cybersecurity solutions, and IoT systems.",
        "founder": {
          "@type": "Person",
          "@id": "https://rishvinreddy.vercel.app/#person",
          "name": "Rishvin Reddy",
          "url": "https://rishvinreddy.vercel.app",
          "sameAs": [
            "https://github.com/rishvin", 
            "https://www.linkedin.com/in/rishvinreddy/"
          ],
          "jobTitle": "Founder & Software Engineer",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Woxsen University"
          }
        },
        "offers": {
          "@type": "OfferCatalog",
          "name": "Rishvin Labs Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Development",
                "description": "Custom websites, portfolios, landing pages, and web apps."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Software Development",
                "description": "Custom software systems, MVPs, and business solutions."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cybersecurity",
                "description": "Security audits, vulnerability assessments, and secure coding."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "IoT Development",
                "description": "Smart systems, embedded engineering, and hardware automation."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://rishvinreddy.vercel.app/rishvin-labs/#website",
        "url": "https://rishvinreddy.vercel.app/rishvin-labs",
        "name": "Rishvin Labs",
        "description": "Web Development, Software, AI, Cybersecurity, IoT & Automation",
        "publisher": {
          "@id": "https://rishvinreddy.vercel.app/rishvin-labs/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(entityGraph) }}
    />
  );
}
