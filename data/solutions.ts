export interface Solution {
  id: string;
  question: string;
  outcome: string;
  description: string;
  link: string;
}

export const solutions: Solution[] = [
  {
    id: "online-presence",
    question: "Need a better online presence?",
    outcome: "Business Website",
    description: "Launch a fast, professional, and conversion-optimized website that clearly communicates your value to your target audience.",
    link: "/contact?service=business-website&source=solutions"
  },
  {
    id: "launch-product",
    question: "Need to launch a digital product?",
    outcome: "MVP / Web Application",
    description: "Build a scalable, robust, and secure custom web application tailored precisely to your business requirements.",
    link: "/contact?service=custom-web-application&source=solutions"
  },
  {
    id: "manual-work",
    question: "Too much manual administrative work?",
    outcome: "Business Automation",
    description: "Connect your existing software stack and automate repetitive tasks to save time and reduce human error.",
    link: "/contact?service=business-automation&source=solutions"
  },
  {
    id: "internal-tools",
    question: "Need custom internal software?",
    outcome: "Custom Business System",
    description: "Develop operational dashboards, CRM extensions, and administrative tools that run your business operations smoothly.",
    link: "/contact?service=custom-web-application&source=solutions"
  },
  {
    id: "security",
    question: "Need stronger application security?",
    outcome: "Security-focused Engineering",
    description: "Ensure your applications are built with secure architecture, authentication, and data protection from the ground up.",
    link: "/contact?service=security-review&source=solutions"
  }
];
