import { ServiceCategory } from "@/types/studio";

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "web-development",
    title: "Website Development",
    icon: "Globe",
    description: "High-performance, conversion-engineered digital platforms and responsive web applications.",
    services: [
      {
        id: "single-page-website",
        name: "Single-Page Website",
        description: "A fast, scrollable single-page presence tailored for immediate impact.",
        pricing: { startingPrice: 799, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["Responsive Design", "Custom Sections", "Contact Form", "Fast Loading"]
      },
      {
        id: "landing-page",
        name: "Landing Page",
        description: "Optimized for conversions, ad campaigns, and product launches.",
        pricing: { startingPrice: 699, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["High-Conversion CTAs", "Lead Capture Form", "A/B Test Ready", "Analytics Setup"]
      },
      {
        id: "professional-portfolio",
        name: "Professional Portfolio",
        description: "Showcase your work and career with an editorial-quality digital presence.",
        pricing: { startingPrice: 999, advancedPrice: 2499, currency: "INR", type: "starting" },
        popular: true,
        features: ["Project Galleries", "Resume Integration", "Custom Animations", "SEO Optimized"]
      },
      {
        id: "developer-portfolio",
        name: "Developer Portfolio",
        description: "Built for engineers. Features GitHub integrations, dark mode, and technical writing blogs.",
        pricing: { startingPrice: 999, advancedPrice: 2999, currency: "INR", type: "starting" },
        features: ["GitHub API Sync", "Code Snippet Support", "Tech Stack Showcase", "Markdown Blog"]
      },
      {
        id: "freelancer-website",
        name: "Freelancer Website",
        description: "A complete toolkit to sell your services, display testimonials, and capture leads.",
        pricing: { startingPrice: 999, advancedPrice: 2499, currency: "INR", type: "starting" },
        features: ["Service Pricing Tables", "Client Testimonials", "Booking Integration", "Lead Magnet"]
      },
      {
        id: "personal-brand",
        name: "Personal Brand Website",
        description: "Establish authority with a comprehensive site for thought leaders and creators.",
        pricing: { startingPrice: 1299, advancedPrice: 2999, currency: "INR", type: "starting" },
        features: ["Newsletter Integration", "Content Hub", "Media Kit", "Premium Aesthetics"]
      },
      {
        id: "resume-cv",
        name: "Resume/CV Website",
        description: "A digital, interactive version of your CV to stand out in the job market.",
        pricing: { startingPrice: 599, advancedPrice: 1299, currency: "INR", type: "starting" },
        features: ["Printable PDF Export", "Timeline UI", "Skill Radars", "Mobile Optimized"]
      },
      {
        id: "small-business",
        name: "Small Business Website",
        description: "A professional, multi-page website to represent your local or online business.",
        pricing: { startingPrice: 1499, advancedPrice: 4999, currency: "INR", type: "starting" },
        popular: true,
        features: ["About & Services Pages", "Google Maps Integration", "Contact Forms", "SEO Setup"]
      },
      {
        id: "corporate",
        name: "Corporate Website",
        description: "Enterprise-grade digital presence with advanced security and scalability.",
        pricing: { startingPrice: 2499, advancedPrice: 6999, currency: "INR", type: "starting" },
        features: ["Investor Relations", "Career Portal", "Multi-Language Support", "Compliance Ready"]
      },
      {
        id: "restaurant",
        name: "Restaurant Website",
        description: "Showcase menus, locations, and take online reservations seamlessly.",
        pricing: { startingPrice: 1499, advancedPrice: 4499, currency: "INR", type: "starting" },
        features: ["Interactive Menu", "Table Booking", "Business Hours", "Review Integration"]
      },
      {
        id: "cafe",
        name: "Café Website",
        description: "Aesthetic online presence for cafes and coffee shops.",
        pricing: { startingPrice: 1299, advancedPrice: 3499, currency: "INR", type: "starting" },
        features: ["Vibe Gallery", "Drink Menu", "Location Maps", "Social Media Feed"]
      },
      {
        id: "event",
        name: "Event Website",
        description: "Dedicated sites for weddings, summits, and large gatherings.",
        pricing: { startingPrice: 999, advancedPrice: 2999, currency: "INR", type: "starting" },
        features: ["RSVP System", "Schedule/Itinerary", "Speaker Profiles", "Venue Details"]
      },
      {
        id: "conference",
        name: "Conference Website",
        description: "Comprehensive platform for large-scale professional conferences.",
        pricing: { startingPrice: 1499, advancedPrice: 3999, currency: "INR", type: "starting" },
        features: ["Ticketing Integration", "Multi-Track Schedules", "Sponsor Showcase", "Live Stream Ready"]
      },
      {
        id: "product-showcase",
        name: "Product Showcase Website",
        description: "Highlight a flagship product with 3D models, animations, and deep-dives.",
        pricing: { startingPrice: 999, advancedPrice: 2999, currency: "INR", type: "starting" },
        features: ["Scroll Animations", "Feature Deep-Dives", "Technical Specs", "Buy Buttons"]
      },
      {
        id: "agency",
        name: "Agency Website",
        description: "Creative agency portfolios designed to win high-ticket clients.",
        pricing: { startingPrice: 1499, advancedPrice: 4499, currency: "INR", type: "starting" },
        features: ["Case Study Framework", "Team Profiles", "Video Backgrounds", "Client Roster"]
      },
      {
        id: "blog",
        name: "Blog Website",
        description: "Optimized content platforms for writers, journalists, and companies.",
        pricing: { startingPrice: 999, advancedPrice: 2499, currency: "INR", type: "starting" },
        features: ["CMS Integration", "SEO Tooling", "Category Filters", "Newsletter Capture"]
      },
      {
        id: "documentation",
        name: "Documentation Website",
        description: "Technical docs for software, APIs, and internal company wikis.",
        pricing: { startingPrice: 999, advancedPrice: 2999, currency: "INR", type: "starting" },
        features: ["Version Control", "Search Functionality", "Code Block Highlights", "MDX Support"]
      },
      {
        id: "coming-soon",
        name: "Coming-Soon Page",
        description: "Generate hype and collect emails before your official launch.",
        pricing: { startingPrice: 399, advancedPrice: 799, currency: "INR", type: "starting" },
        features: ["Waitlist Form", "Countdown Timer", "Social Links", "Branded Teaser"]
      },
      {
        id: "link-in-bio",
        name: "Link-in-Bio Website",
        description: "A custom, branded alternative to generic social media link trees.",
        pricing: { startingPrice: 399, advancedPrice: 999, currency: "INR", type: "starting" },
        features: ["Custom Domain", "Unlimited Links", "Analytics", "Brand Matching"]
      },
      {
        id: "digital-business-card",
        name: "Digital Business Card",
        description: "Modern, scannable QR-code digital vCard for networking.",
        pricing: { startingPrice: 300, advancedPrice: 699, currency: "INR", type: "starting" },
        features: ["vCard Download", "NFC Ready", "Contact Quick-Save", "Minimalist UI"]
      },
      {
        id: "website-redesign",
        name: "Website Redesign",
        description: "Modernize an outdated website with contemporary UI/UX principles.",
        pricing: { startingPrice: 999, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["UX Audit", "Asset Migration", "Responsive Overhaul", "Performance Boost"]
      },
      {
        id: "website-migration",
        name: "Website Migration",
        description: "Move from WordPress/Wix to a modern Next.js or React stack.",
        pricing: { startingPrice: 699, advancedPrice: 2499, currency: "INR", type: "starting" },
        features: ["Zero Downtime", "SEO Preservation", "Content Porting", "Stack Upgrade"]
      },
      {
        id: "responsive-conversion",
        name: "Responsive Conversion",
        description: "Fix mobile rendering issues and make desktop-only sites fully responsive.",
        pricing: { startingPrice: 599, advancedPrice: 1999, currency: "INR", type: "starting" },
        features: ["Mobile-First CSS", "Touch-Friendly UI", "Tablet Breakpoints", "Cross-Browser Fixes"]
      }
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: "Package",
    description: "High-conversion online stores, payment integrations, and digital storefronts.",
    services: [
      {
        id: "product-catalogue",
        name: "Product Catalogue Website",
        description: "Display products professionally without full checkout functionality.",
        pricing: { startingPrice: 1499, advancedPrice: 3499, currency: "INR", type: "starting" },
        features: ["Product Grids", "Search & Filter", "Detail Pages", "Inquiry Forms"]
      },
      {
        id: "basic-online-store",
        name: "Basic Online Store",
        description: "Essential e-commerce setup to start selling online quickly.",
        pricing: { startingPrice: 2499, advancedPrice: 5499, currency: "INR", type: "starting" },
        features: ["Cart System", "Basic Payments", "Order Management", "Mobile Ready"]
      },
      {
        id: "full-ecommerce",
        name: "E-Commerce Website",
        description: "Comprehensive online retail platform with advanced features.",
        pricing: { startingPrice: 3499, advancedPrice: 6999, currency: "INR", type: "starting" },
        popular: true,
        features: ["Custom Checkout", "Inventory Sync", "User Accounts", "Discount Engine"]
      },
      {
        id: "shopping-cart",
        name: "Shopping Cart Integration",
        description: "Add a robust shopping cart to an existing static website.",
        pricing: { startingPrice: 999, advancedPrice: 2499, currency: "INR", type: "starting" },
        features: ["State Management", "Slide-out Cart", "Quantity Controls", "Tax Calculation"]
      },
      {
        id: "checkout-integration",
        name: "Checkout Integration",
        description: "Secure, high-conversion checkout flow design and implementation.",
        pricing: { startingPrice: 799, advancedPrice: 1999, currency: "INR", type: "starting" },
        features: ["Guest Checkout", "Address Auto-complete", "Shipping Tiers", "Stripe/Razorpay"]
      },
      {
        id: "payment-gateway",
        name: "Payment Gateway Setup",
        description: "Integrate regional and international payment processors seamlessly.",
        pricing: { startingPrice: 799, advancedPrice: 2499, currency: "INR", type: "starting" },
        features: ["Razorpay/Stripe/PayPal", "Webhook Handling", "Error States", "Success Routing"]
      },
      {
        id: "product-management",
        name: "Product Management System",
        description: "Custom admin interface to manage inventory, variants, and pricing.",
        pricing: { startingPrice: 999, advancedPrice: 2499, currency: "INR", type: "starting" },
        features: ["Bulk Uploads", "Variant Logic", "Stock Alerts", "Image Optimization"]
      },
      {
        id: "order-dashboard",
        name: "Order Dashboard",
        description: "Admin panel to track, fulfill, and analyze incoming orders.",
        pricing: { startingPrice: 1499, advancedPrice: 3999, currency: "INR", type: "starting" },
        features: ["Order Statusing", "Customer Data", "Export to CSV", "Revenue Metrics"]
      },
      {
        id: "coupon-system",
        name: "Coupon System",
        description: "Implement discount codes, percentage-off logic, and promotional rules.",
        pricing: { startingPrice: 699, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["Usage Limits", "Expiry Dates", "Auto-apply Links", "Cart Validation"]
      },
      {
        id: "whatsapp-ordering",
        name: "WhatsApp Ordering",
        description: "Route e-commerce checkouts directly to WhatsApp for manual fulfillment.",
        pricing: { startingPrice: 599, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["Cart to Chat", "Pre-filled Messages", "Order Formatting", "No Payment Gateway Needed"]
      }
    ]
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    icon: "Terminal",
    description: "End-to-end software architectures, serverless API backends, and cloud-native integrations.",
    services: [
      {
        id: "full-stack-web-app",
        name: "Full-Stack Web App",
        description: "Scalable, custom SaaS platforms and web applications.",
        pricing: { startingPrice: 2499, advancedPrice: 6999, currency: "INR", type: "starting" },
        popular: true,
        features: ["React/Next.js Frontend", "Node/Python Backend", "Database Architecture", "Authentication"]
      },
      {
        id: "admin-dashboard",
        name: "Admin Dashboard",
        description: "Secure, data-rich control panels for business operations.",
        pricing: { startingPrice: 1499, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["Data Tables", "Analytics Charts", "CRUD Operations", "Role Management"]
      },
      {
        id: "client-portal",
        name: "Client Portal",
        description: "Secure portal for your clients to access documents, invoices, or progress.",
        pricing: { startingPrice: 1999, advancedPrice: 5999, currency: "INR", type: "starting" },
        features: ["Secure Login", "File Sharing", "Messaging", "Status Tracking"]
      },
      {
        id: "customer-dashboard",
        name: "Customer Dashboard",
        description: "Self-service hubs for SaaS users or high-ticket service clients.",
        pricing: { startingPrice: 1499, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["Profile Management", "Billing History", "Usage Metrics", "Support Tickets"]
      },
      {
        id: "auth-system",
        name: "Authentication System",
        description: "Secure login, registration, and session management.",
        pricing: { startingPrice: 799, advancedPrice: 2499, currency: "INR", type: "starting" },
        features: ["OAuth (Google/GitHub)", "Magic Links", "JWT/Session Auth", "Password Reset"]
      },
      {
        id: "rbac",
        name: "Role-Based Access",
        description: "Complex permission logic to restrict features based on user roles.",
        pricing: { startingPrice: 999, advancedPrice: 2999, currency: "INR", type: "starting" },
        features: ["Admin/User Tiers", "Route Protection", "UI Feature Flags", "Middleware Checks"]
      },
      {
        id: "database-integration",
        name: "Database Integration",
        description: "Connect your frontend to PostgreSQL, MongoDB, or Supabase.",
        pricing: { startingPrice: 799, advancedPrice: 2999, currency: "INR", type: "starting" },
        features: ["Schema Design", "ORM Setup", "Migration Scripts", "Query Optimization"]
      },
      {
        id: "rest-api",
        name: "REST API Development",
        description: "Custom backend endpoints to serve data to web or mobile clients.",
        pricing: { startingPrice: 999, advancedPrice: 3499, currency: "INR", type: "starting" },
        features: ["Endpoint Design", "Rate Limiting", "Input Validation", "API Documentation"]
      },
      {
        id: "third-party-api",
        name: "Third-Party API Integration",
        description: "Connect your app to external services like Stripe, Twilio, or Google.",
        pricing: { startingPrice: 499, advancedPrice: 2499, currency: "INR", type: "starting" },
        features: ["Webhook Handling", "Authentication flows", "Data Normalization", "Error Retries"]
      },
      {
        id: "crud-app",
        name: "CRUD Application",
        description: "Standard Create, Read, Update, Delete applications for data management.",
        pricing: { startingPrice: 1499, advancedPrice: 3499, currency: "INR", type: "starting" },
        features: ["Form Validations", "List Views", "Detail Views", "Delete Confirmations"]
      },
      {
        id: "booking-system",
        name: "Booking System",
        description: "Allow clients to book time slots, rooms, or resources.",
        pricing: { startingPrice: 1499, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["Calendar UI", "Availability Logic", "Timezone Handling", "Confirmation Emails"]
      },
      {
        id: "appointment-system",
        name: "Appointment System",
        description: "Professional scheduling integrated with Google Calendar or Calendly logic.",
        pricing: { startingPrice: 1499, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["Sync to GCal", "Buffer Times", "Rescheduling", "Reminder Webhooks"]
      },
      {
        id: "inventory-system",
        name: "Inventory System",
        description: "Track stock levels, variants, and warehouse logistics.",
        pricing: { startingPrice: 1999, advancedPrice: 5999, currency: "INR", type: "starting" },
        features: ["Low Stock Alerts", "Barcode Scanning Ready", "SKU Management", "Supplier Tracking"]
      },
      {
        id: "internal-tool",
        name: "Internal Business Tool",
        description: "Bespoke software built to solve specific operational bottlenecks.",
        pricing: { startingPrice: 1999, advancedPrice: 6999, currency: "INR", type: "starting" },
        features: ["Custom Workflows", "Legacy System Sync", "Employee Directory", "Audit Logs"]
      },
      {
        id: "basic-crm",
        name: "Basic CRM",
        description: "Custom Customer Relationship Management software tailored to your sales flow.",
        pricing: { startingPrice: 2499, advancedPrice: 6999, currency: "INR", type: "starting" },
        features: ["Lead Tracking", "Kanban Pipelines", "Contact Notes", "Activity History"]
      }
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX & Frontend",
    icon: "LayoutTemplate",
    description: "Editorial engineering aesthetics, design systems, and conversion-centered user interfaces.",
    services: [
      {
        id: "landing-page-ui",
        name: "Landing Page UI",
        description: "High-fidelity Figma design focused on conversion and aesthetics.",
        pricing: { startingPrice: 499, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["Wireframing", "Copy Structuring", "High-Fidelity Mockups", "Asset Export"]
      },
      {
        id: "website-ui-design",
        name: "Website UI Design",
        description: "Complete design systems and multi-page layouts for web platforms.",
        pricing: { startingPrice: 999, advancedPrice: 3499, currency: "INR", type: "starting" },
        popular: true,
        features: ["Design System", "Component Library", "Responsive Views", "Prototyping"]
      },
      {
        id: "dashboard-ui",
        name: "Dashboard UI",
        description: "Complex data visualization and control panel design.",
        pricing: { startingPrice: 999, advancedPrice: 3499, currency: "INR", type: "starting" },
        features: ["Data Tables", "Chart Concepts", "Navigation Logic", "Widget Design"]
      },
      {
        id: "mobile-responsive",
        name: "Mobile Responsive Design",
        description: "Translate existing desktop designs into flawless mobile experiences.",
        pricing: { startingPrice: 499, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["Touch Targets", "Hamburger Menus", "Stacking Logic", "Typography Scaling"]
      },
      {
        id: "ui-modernisation",
        name: "UI Modernisation",
        description: "Refresh an outdated interface with contemporary design trends.",
        pricing: { startingPrice: 799, advancedPrice: 2499, currency: "INR", type: "starting" },
        features: ["Color Palette Update", "Typography Refresh", "Spacing Audit", "Modern Shadows/Borders"]
      },
      {
        id: "dark-mode",
        name: "Dark Mode",
        description: "Design and implement a beautiful dark mode for an existing site.",
        pricing: { startingPrice: 399, advancedPrice: 999, currency: "INR", type: "starting" },
        features: ["Color Inversion Strategy", "Contrast Checking", "Toggle UI", "CSS Variables"]
      },
      {
        id: "animations",
        name: "Animations",
        description: "Implement smooth Framer Motion or CSS animations to elevate UX.",
        pricing: { startingPrice: 399, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["Page Transitions", "Scroll Reveals", "Hover States", "Performance Tuning"]
      },
      {
        id: "micro-interactions",
        name: "Micro-interactions",
        description: "Tiny, delightful animations that provide user feedback.",
        pricing: { startingPrice: 300, advancedPrice: 999, currency: "INR", type: "starting" },
        features: ["Button Clicks", "Loading Spinners", "Success Checkmarks", "Toggle Switches"]
      },
      {
        id: "navigation-redesign",
        name: "Navigation Redesign",
        description: "Overhaul messy menus into clean, usable navigation structures.",
        pricing: { startingPrice: 300, advancedPrice: 799, currency: "INR", type: "starting" },
        features: ["Mega Menus", "Mobile Drawers", "Sticky Headers", "Breadcrumbs"]
      },
      {
        id: "hero-section",
        name: "Hero Section Design",
        description: "Redesign the most important section of your website for maximum impact.",
        pricing: { startingPrice: 300, advancedPrice: 999, currency: "INR", type: "starting" },
        features: ["Headline Copywriting", "Background Video/Image", "Primary CTA", "Trust Badges"]
      },
      {
        id: "pricing-section",
        name: "Pricing Section Design",
        description: "Clear, psychological pricing tables designed to convert.",
        pricing: { startingPrice: 300, advancedPrice: 799, currency: "INR", type: "starting" },
        features: ["Tiered Cards", "Feature Toggles", "Highlighting 'Popular'", "FAQ Accordions"]
      },
      {
        id: "contact-section",
        name: "Contact Section",
        description: "Accessible, trustworthy contact forms and maps.",
        pricing: { startingPrice: 300, advancedPrice: 699, currency: "INR", type: "starting" },
        features: ["Input Validation", "Map Embeds", "Social Links", "Direct Email Links"]
      },
      {
        id: "footer-design",
        name: "Footer Design",
        description: "Organized, SEO-friendly mega-footers.",
        pricing: { startingPrice: 300, advancedPrice: 599, currency: "INR", type: "starting" },
        features: ["Sitemap Links", "Newsletter Signup", "Legal Links", "Branding Elements"]
      },
      {
        id: "form-ui",
        name: "Form UI",
        description: "Redesign complex forms to reduce friction and drop-off.",
        pricing: { startingPrice: 300, advancedPrice: 799, currency: "INR", type: "starting" },
        features: ["Multi-step Logic", "Inline Validation", "Progress Bars", "Clear Error States"]
      },
      {
        id: "dashboard-components",
        name: "Dashboard Components",
        description: "Individual widget designs for data heavy applications.",
        pricing: { startingPrice: 499, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["Stat Cards", "Activity Feeds", "Mini Charts", "Data Grids"]
      }
    ]
  },
  {
    id: "ai-services",
    title: "AI Integrations",
    icon: "Cpu",
    description: "Intelligent AI workflows, custom chatbots, and automated data processing.",
    services: [
      {
        id: "ai-chatbot",
        name: "AI Chatbot Integration",
        description: "Deploy intelligent chatbots trained on your company data.",
        pricing: { startingPrice: 999, advancedPrice: 3499, currency: "INR", type: "starting" },
        popular: true,
        features: ["Knowledge Base Training", "Human Handoff", "Widget UI", "Conversation Logs"]
      },
      {
        id: "website-ai-assistant",
        name: "Website AI Assistant",
        description: "Advanced on-site AI that helps users navigate or purchase.",
        pricing: { startingPrice: 999, advancedPrice: 3999, currency: "INR", type: "starting" },
        features: ["Product Recommendations", "Context Awareness", "Voice Input", "Lead Capture"]
      },
      {
        id: "faq-ai-bot",
        name: "FAQ AI Bot",
        description: "A simple bot that answers frequent customer questions instantly.",
        pricing: { startingPrice: 799, advancedPrice: 2499, currency: "INR", type: "starting" },
        features: ["Pre-defined Q&A", "Fallback Logic", "Analytics", "Fast Response"]
      },
      {
        id: "ai-support",
        name: "AI Customer Support",
        description: "Automate tier-1 support tickets and email responses.",
        pricing: { startingPrice: 1499, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["Ticket Triage", "Draft Responses", "CRM Integration", "Sentiment Analysis"]
      },
      {
        id: "ai-lead-qualification",
        name: "AI Lead Qualification",
        description: "Bots that engage leads, ask qualifying questions, and book meetings.",
        pricing: { startingPrice: 1499, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["Calendly Sync", "Scoring Logic", "CRM Push", "Dynamic Questioning"]
      },
      {
        id: "ai-content",
        name: "AI Content Workflow",
        description: "Automate blog, social media, or product description generation.",
        pricing: { startingPrice: 999, advancedPrice: 3499, currency: "INR", type: "starting" },
        features: ["Brand Voice Tuning", "Bulk Generation", "CMS Direct Push", "SEO Optimization"]
      },
      {
        id: "ai-email",
        name: "AI Email Automation",
        description: "Draft personalized outreach or responses based on incoming triggers.",
        pricing: { startingPrice: 999, advancedPrice: 3499, currency: "INR", type: "starting" },
        features: ["Context Extraction", "Tone Adjustments", "Draft Folders", "Auto-reply"]
      },
      {
        id: "ai-documents",
        name: "AI Document Processing",
        description: "Extract structured data (JSON) from messy PDFs and invoices.",
        pricing: { startingPrice: 1499, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["OCR Integration", "Invoice Parsing", "Contract Analysis", "Data Validation"]
      },
      {
        id: "ai-data-extraction",
        name: "AI Data Extraction",
        description: "Scrape and summarize unstructured web data intelligently.",
        pricing: { startingPrice: 999, advancedPrice: 3499, currency: "INR", type: "starting" },
        features: ["Web Scraping", "Summarization", "Entity Recognition", "Database Export"]
      },
      {
        id: "ai-api",
        name: "AI API Integration",
        description: "Connect OpenAI, Anthropic, or Gemini APIs to your existing app.",
        pricing: { startingPrice: 799, advancedPrice: 2999, currency: "INR", type: "starting" },
        features: ["Prompt Engineering", "Streaming Responses", "Cost Tracking", "Error Handling"]
      },
      {
        id: "custom-ai-workflow",
        name: "Custom AI Workflow",
        description: "Bespoke AI solutions involving multiple agents or complex reasoning.",
        pricing: { startingPrice: 1499, advancedPrice: 6999, currency: "INR", type: "starting" },
        features: ["Agentic Frameworks", "Tool Calling", "Memory Management", "Long-running tasks"]
      },
      {
        id: "business-ai-automation",
        name: "Business AI Automation",
        description: "End-to-end transformation of operational workflows using AI.",
        pricing: { startingPrice: 2499, advancedPrice: 6999, currency: "INR", type: "starting" },
        features: ["Audit & Strategy", "Multi-model orchestration", "Security Guardrails", "Employee Training"]
      }
    ]
  },
  {
    id: "automation",
    title: "Automation",
    icon: "Workflow",
    description: "Intelligent workflow automation, eliminating repetitive manual tasks.",
    services: [
      {
        id: "simple-workflow",
        name: "Simple Workflow Automation",
        description: "Connect two apps together (e.g. Stripe to Slack).",
        pricing: { startingPrice: 499, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["Zapier/Make Setup", "Basic Mapping", "Testing", "Documentation"]
      },
      {
        id: "n8n-automation",
        name: "n8n Automation",
        description: "Self-hosted, complex, and cost-effective workflow automation.",
        pricing: { startingPrice: 799, advancedPrice: 3499, currency: "INR", type: "starting" },
        popular: true,
        features: ["Server Setup", "Custom Nodes", "Webhook Handling", "Cron Jobs"]
      },
      {
        id: "form-email",
        name: "Form → Email Automation",
        description: "Reliably route website submissions to the right inboxes.",
        pricing: { startingPrice: 399, advancedPrice: 999, currency: "INR", type: "starting" },
        features: ["SMTP Setup", "HTML Templates", "Spam Filtering", "Auto-responders"]
      },
      {
        id: "form-sheets",
        name: "Form → Google Sheets",
        description: "Log all website leads or inquiries directly into a spreadsheet.",
        pricing: { startingPrice: 399, advancedPrice: 999, currency: "INR", type: "starting" },
        features: ["Real-time Sync", "Data Formatting", "Error Logging", "Shared Access"]
      },
      {
        id: "email-automation",
        name: "Email Automation",
        description: "Drip campaigns and automated onboarding sequences.",
        pricing: { startingPrice: 599, advancedPrice: 1999, currency: "INR", type: "starting" },
        features: ["Mailchimp/Brevo", "Sequence Logic", "Open Tracking", "Segmentation"]
      },
      {
        id: "lead-automation",
        name: "Lead Automation",
        description: "Route, score, and notify sales teams of new high-value leads.",
        pricing: { startingPrice: 999, advancedPrice: 3499, currency: "INR", type: "starting" },
        features: ["Lead Scoring", "Slack/SMS Alerts", "CRM Entry", "Round-robin Assignment"]
      },
      {
        id: "crm-automation",
        name: "CRM Automation",
        description: "Keep HubSpot or Salesforce clean with automated data syncing.",
        pricing: { startingPrice: 1499, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["De-duplication", "Status Updates", "Deal Creation", "Note Syncing"]
      },
      {
        id: "whatsapp-workflow",
        name: "WhatsApp Workflow",
        description: "Automated messaging sequences via WhatsApp API.",
        pricing: { startingPrice: 999, advancedPrice: 3999, currency: "INR", type: "starting" },
        features: ["Template Approval", "Interactive Buttons", "Opt-in Management", "Drip Messages"]
      },
      {
        id: "social-media-workflow",
        name: "Social Media Workflow",
        description: "Automate cross-posting and content scheduling.",
        pricing: { startingPrice: 999, advancedPrice: 3499, currency: "INR", type: "starting" },
        features: ["RSS to Social", "Image Formatting", "Hashtag Generation", "Multi-platform Sync"]
      },
      {
        id: "reporting-automation",
        name: "Reporting Automation",
        description: "Generate and email weekly KPI PDFs or dashboards automatically.",
        pricing: { startingPrice: 799, advancedPrice: 2499, currency: "INR", type: "starting" },
        features: ["Data Aggregation", "Chart Generation", "Scheduled Delivery", "Executive Summaries"]
      },
      {
        id: "notification-system",
        name: "Notification System",
        description: "Internal alerts for server downtime, failed payments, or VIP signups.",
        pricing: { startingPrice: 499, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["Slack/Discord/SMS", "Urgency Tiers", "Actionable Buttons", "Downtime Alerts"]
      },
      {
        id: "api-automation",
        name: "API Automation",
        description: "Custom scripts bridging two incompatible systems via their APIs.",
        pricing: { startingPrice: 799, advancedPrice: 2999, currency: "INR", type: "starting" },
        features: ["Custom Code", "Data Transformation", "Authentication", "Logging"]
      },
      {
        id: "multi-step",
        name: "Multi-Step Business Workflow",
        description: "Complex logic involving conditionals, delays, and approvals.",
        pricing: { startingPrice: 1499, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["State Machines", "Human-in-the-loop", "Error Recovery", "Complex Branching"]
      },
      {
        id: "advanced-automation",
        name: "Advanced Automation System",
        description: "Enterprise-grade automation replacing entire manual departments.",
        pricing: { startingPrice: 2499, advancedPrice: 6999, currency: "INR", type: "starting" },
        features: ["High Throughput", "Redundancy", "Custom Architecture", "SLA Support"]
      }
    ]
  },
  {
    id: "whatsapp",
    title: "WhatsApp Solutions",
    icon: "MessageSquare",
    description: "Engage customers where they are with WhatsApp API and chat integrations.",
    services: [
      {
        id: "click-to-chat",
        name: "WhatsApp Click-to-Chat",
        description: "Simple links and buttons to open WhatsApp with pre-filled messages.",
        pricing: { startingPrice: 300, advancedPrice: 599, currency: "INR", type: "starting" },
        features: ["URL Encoding", "UTM Tracking", "Multiple Numbers", "QR Codes"]
      },
      {
        id: "website-button",
        name: "Website WhatsApp Button",
        description: "A floating WhatsApp widget for instant customer support.",
        pricing: { startingPrice: 300, advancedPrice: 599, currency: "INR", type: "starting" },
        features: ["Floating UI", "Online/Offline Status", "Custom Avatars", "Page Tracking"]
      },
      {
        id: "lead-form",
        name: "WhatsApp Lead Form",
        description: "Capture user details before redirecting them to WhatsApp.",
        pricing: { startingPrice: 499, advancedPrice: 999, currency: "INR", type: "starting" },
        features: ["Data Validation", "CRM Push", "Dynamic Routing", "Spam Prevention"]
      },
      {
        id: "business-setup",
        name: "WhatsApp Business Setup",
        description: "Professional configuration of WhatsApp Business App/API.",
        pricing: { startingPrice: 499, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["Catalog Setup", "Auto-Replies", "Greeting Messages", "Green Tick Application"]
      },
      {
        id: "enquiry-system",
        name: "WhatsApp Enquiry System",
        description: "Automated routing of product inquiries directly to sales teams.",
        pricing: { startingPrice: 799, advancedPrice: 1999, currency: "INR", type: "starting" },
        popular: true,
        features: ["Product ID Passing", "Agent Routing", "Quick Replies", "Analytics"]
      },
      {
        id: "ordering-flow",
        name: "WhatsApp Ordering Flow",
        description: "Allow customers to browse and order directly within WhatsApp.",
        pricing: { startingPrice: 999, advancedPrice: 2999, currency: "INR", type: "starting" },
        features: ["Interactive Menus", "Cart Management", "Address Collection", "Order Confirmation"]
      },
      {
        id: "booking-flow",
        name: "WhatsApp Booking Flow",
        description: "Conversational appointment scheduling via WhatsApp.",
        pricing: { startingPrice: 999, advancedPrice: 2999, currency: "INR", type: "starting" },
        features: ["Date Selection", "Slot Availability", "Reminders", "Rescheduling"]
      },
      {
        id: "wa-automation",
        name: "WhatsApp Automation",
        description: "Automate responses and workflows using the Official API.",
        pricing: { startingPrice: 1499, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["Template Messages", "Webhook Processing", "Interactive Messages", "Fallbacks"]
      },
      {
        id: "wa-crm",
        name: "WhatsApp CRM Integration",
        description: "Log all WhatsApp conversations directly into HubSpot or Salesforce.",
        pricing: { startingPrice: 1999, advancedPrice: 5999, currency: "INR", type: "starting" },
        features: ["Chat Transcripts", "Contact Syncing", "Ticket Creation", "Analytics"]
      },
      {
        id: "advanced-wa",
        name: "Advanced WhatsApp System",
        description: "Complex, high-volume WhatsApp applications and bots.",
        pricing: { startingPrice: 2999, advancedPrice: 6999, currency: "INR", type: "starting" },
        features: ["Multi-Agent Inboxes", "NLP Integration", "Custom Analytics", "Broadcasting"]
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "Shield",
    description: "Defensive security reviews, hardening, and vulnerability assessments.",
    services: [
      {
        id: "basic-security",
        name: "Basic Website Security Check",
        description: "High-level scan for common misconfigurations and exposed data.",
        pricing: { startingPrice: 499, advancedPrice: 999, currency: "INR", type: "starting" },
        features: ["Port Scanning", "Header Analysis", "SSL Check", "Summary Report"]
      },
      {
        id: "config-review",
        name: "Security Configuration Review",
        description: "Audit of server, DNS, and application configurations.",
        pricing: { startingPrice: 599, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["Cloudflare/AWS Audit", "DNSsec Check", "Permissions Audit", "Remediation Steps"]
      },
      {
        id: "https-ssl",
        name: "HTTPS/SSL Configuration",
        description: "Proper installation and enforcement of SSL certificates.",
        pricing: { startingPrice: 300, advancedPrice: 799, currency: "INR", type: "starting" },
        features: ["Certificate Generation", "HSTS Setup", "Mixed Content Fixes", "Auto-renewal Setup"]
      },
      {
        id: "security-headers",
        name: "Security Headers Setup",
        description: "Implement CSP, XSS protection, and frame options to prevent attacks.",
        pricing: { startingPrice: 399, advancedPrice: 999, currency: "INR", type: "starting" },
        features: ["Content Security Policy", "X-Frame-Options", "X-Content-Type-Options", "Testing"]
      },
      {
        id: "auth-security",
        name: "Authentication Security Review",
        description: "Audit login flows, session management, and password policies.",
        pricing: { startingPrice: 799, advancedPrice: 1999, currency: "INR", type: "starting" },
        features: ["JWT Validation", "Cookie Security", "Brute Force Protection", "2FA Audit"]
      },
      {
        id: "website-hardening",
        name: "Website Hardening",
        description: "Apply defensive measures to secure CMS (WordPress) or custom apps.",
        pricing: { startingPrice: 999, advancedPrice: 2999, currency: "INR", type: "starting" },
        popular: true,
        features: ["Admin Obfuscation", "File Permissions", "Plugin Audit", "WAF Configuration"]
      },
      {
        id: "dependency-review",
        name: "Dependency Security Review",
        description: "Scan npm/pip packages for known vulnerabilities.",
        pricing: { startingPrice: 499, advancedPrice: 1499, currency: "INR", type: "starting" },
        features: ["SCA Scanning", "Outdated Libs", "License Audit", "Update Strategy"]
      },
      {
        id: "vuln-assessment",
        name: "Basic Vulnerability Assessment",
        description: "Automated dynamic scanning (DAST) for OWASP Top 10 vulnerabilities.",
        pricing: { startingPrice: 999, advancedPrice: 3499, currency: "INR", type: "starting" },
        features: ["XSS/SQLi Scanning", "CSRF Checks", "Detailed Report", "False Positive Filtering"]
      },
      {
        id: "web-app-security",
        name: "Web Application Security Review",
        description: "In-depth manual review of application business logic and security controls.",
        pricing: { startingPrice: 1499, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["Manual Testing", "Logic Flaws", "Privilege Escalation", "Actionable Fixes"]
      },
      {
        id: "remediation",
        name: "Security Remediation",
        description: "Hands-on engineering to fix identified security vulnerabilities.",
        pricing: { startingPrice: 999, advancedPrice: 4999, currency: "INR", type: "starting" },
        features: ["Code Patching", "Architecture Fixes", "Configuration Updates", "Re-testing"]
      }
    ]
  },
  {
    id: "deployment",
    title: "Deployment & DevOps",
    icon: "Blocks",
    description: "Cloud infrastructure, CI/CD pipelines, and robust production environments.",
    services: [
      {
        id: "vercel-deploy",
        name: "Vercel Deployment",
        description: "Deploy Next.js/React apps to Vercel.",
        pricing: { startingPrice: 300, currency: "INR", type: "fixed" },
        features: ["Project Link", "Build Config", "Environment Variables"]
      },
      {
        id: "github-pages",
        name: "GitHub Pages Deployment",
        description: "Deploy static sites (React/HTML) via GitHub Actions.",
        pricing: { startingPrice: 300, currency: "INR", type: "fixed" },
        features: ["Action Workflow", "Branch Config", "Asset Paths"]
      },
      {
        id: "domain-connection",
        name: "Domain Connection",
        description: "Link your custom domain to your hosting provider.",
        pricing: { startingPrice: 300, currency: "INR", type: "fixed" },
        features: ["A/CNAME Records", "Propagation Check", "Redirects"]
      },
      {
        id: "dns-config",
        name: "DNS Configuration",
        description: "Setup complex DNS records (MX, TXT, SPF) for email and services.",
        pricing: { startingPrice: 300, advancedPrice: 599, currency: "INR", type: "range" },
        features: ["Email Deliverability", "Subdomains", "Cloudflare Setup"]
      },
      {
        id: "ssl-setup",
        name: "SSL Setup",
        description: "Install Let's Encrypt or custom SSL certificates.",
        pricing: { startingPrice: 300, advancedPrice: 599, currency: "INR", type: "range" },
        features: ["Certbot", "Nginx/Apache Config", "Auto-renewal"]
      },
      {
        id: "env-vars",
        name: "Environment Variables Setup",
        description: "Securely configure production secrets and API keys.",
        pricing: { startingPrice: 300, advancedPrice: 599, currency: "INR", type: "range" },
        features: ["Secret Management", "Local vs Prod", "Access Scopes"]
      },
      {
        id: "github-repo",
        name: "GitHub Repository Setup",
        description: "Initialize and structure a professional codebase repository.",
        pricing: { startingPrice: 399, currency: "INR", type: "fixed" },
        features: ["Branching Strategy", "README Setup", "gitignore", "Linting Hooks"]
      },
      {
        id: "basic-cicd",
        name: "Basic CI/CD",
        description: "Automate testing and deployment on git push.",
        pricing: { startingPrice: 699, advancedPrice: 1499, currency: "INR", type: "range" },
        popular: true,
        features: ["GitHub Actions", "Build Tests", "Auto-deploy", "Status Badges"]
      },
      {
        id: "prod-deploy",
        name: "Production Deployment",
        description: "Deploy complex apps to VPS (DigitalOcean/AWS EC2).",
        pricing: { startingPrice: 599, advancedPrice: 1499, currency: "INR", type: "range" },
        features: ["PM2 Setup", "Nginx Proxy", "Firewall (UFW)", "Daemonization"]
      },
      {
        id: "deploy-troubleshoot",
        name: "Deployment Troubleshooting",
        description: "Fix failing builds, memory limits, or server crashes.",
        pricing: { startingPrice: 499, advancedPrice: 1499, currency: "INR", type: "range" },
        features: ["Log Analysis", "Build Cache Clear", "Dependency Fixes", "Memory Profiling"]
      },
      {
        id: "db-deploy",
        name: "Database Deployment",
        description: "Provision and secure production databases.",
        pricing: { startingPrice: 799, advancedPrice: 1999, currency: "INR", type: "range" },
        features: ["PostgreSQL/MySQL", "Remote Access Config", "Backups Setup", "Connection Pooling"]
      },
      {
        id: "full-prod",
        name: "Full Production Setup",
        description: "Complete infrastructure setup (Web + API + DB + Redis).",
        pricing: { startingPrice: 1499, advancedPrice: 3499, currency: "INR", type: "range" },
        features: ["Docker Compose", "Network Isolation", "Monitoring", "Load Balancing Basics"]
      }
    ]
  },
  {
    id: "fixes",
    title: "Website Fixes",
    icon: "Code2",
    description: "Quick, reliable solutions for bugs, layout issues, and maintenance tasks.",
    services: [
      {
        id: "css-fix",
        name: "Tiny CSS Fix",
        description: "Fix alignment, colors, or spacing issues.",
        pricing: { startingPrice: 300, currency: "INR", type: "fixed" },
        features: ["Fast Turnaround", "Cross-browser test"]
      },
      {
        id: "button-fix",
        name: "Button Fix",
        description: "Fix broken buttons or hover states.",
        pricing: { startingPrice: 300, currency: "INR", type: "fixed" },
        features: ["Link Correction", "Styling Update"]
      },
      {
        id: "link-fix",
        name: "Broken Link Fix",
        description: "Find and repair 404 links.",
        pricing: { startingPrice: 300, currency: "INR", type: "fixed" },
        features: ["Internal/External", "Redirects (301)"]
      },
      {
        id: "content-update",
        name: "Text/Content Update",
        description: "Update copy, addresses, or team members.",
        pricing: { startingPrice: 300, currency: "INR", type: "fixed" },
        features: ["Formatting", "HTML/CMS Updates"]
      },
      {
        id: "image-replacement",
        name: "Image Replacement",
        description: "Swap out old images and optimize new ones.",
        pricing: { startingPrice: 300, currency: "INR", type: "fixed" },
        features: ["WebP Conversion", "Alt Text", "Resizing"]
      },
      {
        id: "favicon-setup",
        name: "Favicon Setup",
        description: "Generate and install proper favicons for all devices.",
        pricing: { startingPrice: 300, currency: "INR", type: "fixed" },
        features: ["Apple Touch Icon", "Manifest file", "ICO/PNG"]
      },
      {
        id: "social-links",
        name: "Social Links Setup",
        description: "Add or update social media icons and links.",
        pricing: { startingPrice: 300, currency: "INR", type: "fixed" },
        features: ["Icon SVG Updates", "Target Blank", "Rel attributes"]
      },
      {
        id: "basic-deploy-fix",
        name: "Basic Deployment Fix",
        description: "Fix minor build errors stopping deployment.",
        pricing: { startingPrice: 300, currency: "INR", type: "fixed" },
        features: ["Lint Errors", "Type Errors", "Config Fixes"]
      },
      {
        id: "mobile-layout-fix",
        name: "Mobile Layout Fix",
        description: "Fix overlapping elements or horizontal scrolling on phones.",
        pricing: { startingPrice: 399, currency: "INR", type: "fixed" },
        popular: true,
        features: ["Media Queries", "Viewport fixes", "Overflow hiding"]
      },
      {
        id: "navbar-fix",
        name: "Navbar Fix",
        description: "Fix sticky headers, mobile menus, or dropdowns.",
        pricing: { startingPrice: 399, currency: "INR", type: "fixed" },
        features: ["Z-index issues", "Hamburger logic", "Scroll behavior"]
      },
      {
        id: "footer-fix",
        name: "Footer Fix",
        description: "Fix floating footers or broken footer layouts.",
        pricing: { startingPrice: 399, currency: "INR", type: "fixed" },
        features: ["Flexbox/Grid fixes", "Responsive stacking", "Bottom anchoring"]
      },
      {
        id: "form-fix",
        name: "Form Fix",
        description: "Fix forms not submitting or styling issues.",
        pricing: { startingPrice: 499, currency: "INR", type: "fixed" },
        features: ["Validation fixes", "Submission routing", "Input styling"]
      },
      {
        id: "responsive-issue",
        name: "Responsive Issue",
        description: "Fix complex layout breaks across different screen sizes.",
        pricing: { startingPrice: 499, currency: "INR", type: "fixed" },
        features: ["Grid adjustments", "Flexbox wrapping", "Image scaling"]
      },
      {
        id: "js-bug",
        name: "JavaScript Bug",
        description: "Fix console errors, broken logic, or state issues.",
        pricing: { startingPrice: 599, currency: "INR", type: "starting" },
        features: ["React state fixes", "Event listeners", "Async/Await logic"]
      },
      {
        id: "deploy-error",
        name: "Deployment Error",
        description: "Resolve complex server crashes or build failures.",
        pricing: { startingPrice: 599, currency: "INR", type: "starting" },
        features: ["Dependency conflicts", "Node version mismatches", "Webpack/Vite config"]
      },
      {
        id: "api-bug",
        name: "API Bug",
        description: "Fix CORS errors, 500 errors, or failed data fetches.",
        pricing: { startingPrice: 799, currency: "INR", type: "starting" },
        features: ["Header configuration", "Payload debugging", "Route handling"]
      },
      {
        id: "db-issue",
        name: "Database Issue",
        description: "Fix slow queries, connection timeouts, or schema mismatches.",
        pricing: { startingPrice: 999, currency: "INR", type: "starting" },
        features: ["Indexing", "Prisma/Mongoose fixes", "Connection limits"]
      },
      {
        id: "complex-debugging",
        name: "Complex Debugging",
        description: "Deep dive into elusive bugs across the full stack.",
        pricing: { startingPrice: 1499, currency: "INR", type: "starting" },
        features: ["Memory Leaks", "Race Conditions", "Third-party integrations"]
      }
    ]
  },
  {
    id: "seo-digital-presence",
    title: "SEO & Digital Presence",
    icon: "TrendingUp",
    description: "Heavy-duty search engine optimization, technical audits, and digital footprint expansion.",
    services: [
      {
        id: "technical-seo-audit",
        name: "Technical SEO Audit",
        description: "Deep-dive analysis of your codebase, Core Web Vitals, and indexing issues.",
        pricing: { startingPrice: 1999, currency: "INR", type: "starting" },
        features: ["Core Web Vitals Check", "Robots.txt & Sitemap", "Indexability Review"]
      },
      {
        id: "on-page-seo",
        name: "On-Page SEO Optimization",
        description: "Keyword integration, meta tags, and content structure optimization.",
        pricing: { startingPrice: 1499, currency: "INR", type: "starting" },
        features: ["Title & Meta Descriptions", "Heading Tags (H1-H6)", "Image Alt Text"]
      },
      {
        id: "local-seo",
        name: "Local SEO Setup",
        description: "Dominate local search results with Google Business Profile optimization.",
        pricing: { startingPrice: 1299, currency: "INR", type: "starting" },
        features: ["Google Business Profile", "Local Citations", "Review Strategy"]
      },
      {
        id: "ecommerce-seo",
        name: "E-Commerce SEO",
        description: "Heavy optimization for product pages, categories, and shopping feeds.",
        pricing: { startingPrice: 2499, advancedPrice: 6999, currency: "INR", type: "starting" },
        popular: true,
        features: ["Product Schema Markup", "URL Structure Optimization", "Cannibalization Fixes"]
      },
      {
        id: "programmatic-seo",
        name: "Programmatic SEO Architecture",
        description: "Build scalable page generation systems for mass keyword targeting.",
        pricing: { startingPrice: 4999, advancedPrice: 14999, currency: "INR", type: "starting" },
        features: ["Database-Driven Pages", "Dynamic Meta Generation", "Next.js ISR/SSG Setup"]
      },
      {
        id: "seo-migration",
        name: "SEO Migration Service",
        description: "Safely move your website to a new domain or tech stack without losing traffic.",
        pricing: { startingPrice: 2999, currency: "INR", type: "starting" },
        features: ["301 Redirect Mapping", "Traffic Drop Prevention", "Post-Launch Monitoring"]
      },
      {
        id: "schema-markup",
        name: "Advanced Schema Markup",
        description: "Implement complex JSON-LD structured data for rich search snippets.",
        pricing: { startingPrice: 999, currency: "INR", type: "starting" },
        features: ["FAQ & Review Schema", "Organization Schema", "Article & Breadcrumb Schema"]
      },
      {
        id: "analytics-setup",
        name: "Analytics & Rank Tracking Setup",
        description: "Implement Google Analytics 4, Search Console, and custom event tracking.",
        pricing: { startingPrice: 999, currency: "INR", type: "fixed" },
        features: ["GA4 Configuration", "GSC Setup", "Conversion Tracking"]
      }
    ]
  }
];
