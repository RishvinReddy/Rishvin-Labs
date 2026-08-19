export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  questions: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "general",
    label: "General",
    questions: [
      { q: "What is Rishvin Labs?", a: "Rishvin Labs is a founder-led technology studio that builds digital products, business systems, automation pipelines, and security-focused solutions for businesses, startups, and organizations." },
      { q: "What does Rishvin Labs actually do?", a: "We design, build, automate, integrate, and improve digital systems. This includes websites, web applications, internal tools, automation workflows, integrations, cybersecurity solutions, IoT systems, and related engineering services." },
      { q: "Is Rishvin Labs a software agency?", a: "Rishvin Labs is a founder-led technology studio rather than a traditional large agency. Projects are approached as engineering problems, with emphasis on practical outcomes, maintainability, and long-term usefulness." },
      { q: "Who do you work with?", a: "We work with startups, small businesses, founders, organizations, professionals, and teams that need technical solutions built or improved." },
      { q: "Do you work with students?", a: "Yes. Rishvin Labs has a separate Student Hub providing resources, technical guidance, project support, career-oriented programs, and engineering mentoring for students." },
      { q: "Do you work internationally?", a: "Yes. Digital projects can be handled remotely, subject to project scope, communication requirements, and applicable commercial arrangements." },
      { q: "I have a problem but don't know which service I need. What should I do?", a: "Contact us and describe the problem. You don't need to choose the technical solution yourself. We can help identify the appropriate approach based on your goals, existing systems, constraints, and budget." },
    ]
  },
  {
    id: "services",
    label: "Services",
    questions: [
      { q: "What services do you provide?", a: "Our services span business websites, web applications, custom software, business automation, API integrations, internal tools, cybersecurity, IoT systems, AI and automation, database systems, technical audits, and deployment and infrastructure support." },
      { q: "Can you build a website for my business?", a: "Yes. We design and develop business websites focused on credibility, performance, usability, SEO, and conversion." },
      { q: "Can you build a custom web application?", a: "Yes. We develop custom applications around your specific business workflow, users, data, and operational requirements." },
      { q: "Can you build internal business software?", a: "Yes. Internal dashboards, workflow systems, management tools, CRM-style applications, and operational platforms are all possible project types." },
      { q: "Can you automate repetitive business processes?", a: "Yes. We can identify repetitive workflows and connect systems using APIs, webhooks, automation platforms, and custom software to reduce manual overhead." },
      { q: "Can you integrate different software systems?", a: "Yes. If your existing tools expose APIs or other integration mechanisms, we can design integrations that reduce duplicate data entry and disconnected workflows." },
      { q: "Do you provide cybersecurity services?", a: "Yes. Security-focused work includes application security reviews, secure architecture planning, vulnerability analysis, security improvements, and security-oriented engineering." },
      { q: "Do you build IoT systems?", a: "Yes. IoT projects can involve sensors, microcontrollers, communication protocols, cloud systems, dashboards, databases, and automation pipelines." },
      { q: "Do you work with AI?", a: "Yes. AI can be incorporated where it provides genuine business or engineering benefit, including intelligent workflows, automation, classification, extraction, assistants, and system integrations." },
    ]
  },
  {
    id: "project-fit",
    label: "Project Fit",
    questions: [
      { q: "I only have an idea. Can you help?", a: "Yes. You don't need to arrive with a complete technical specification. We can help translate the problem or idea into a practical technical direction." },
      { q: "I don't know what technology I need. Is that a problem?", a: "No. You don't need to choose the technology stack yourself. We can recommend an appropriate architecture based on the problem, requirements, budget, scalability, and timeline." },
      { q: "Can you work with my existing software?", a: "Yes. Depending on the system, we can improve, integrate, debug, migrate, or extend existing software without requiring a complete rebuild." },
      { q: "Can you take over an unfinished project?", a: "Potentially, yes. We can review the current state of the project, identify technical issues, and determine whether continuing, refactoring, or rebuilding makes the most sense." },
      { q: "Can you fix an existing website?", a: "Yes. We can investigate bugs, deployment issues, performance problems, broken integrations, responsiveness issues, and other technical problems." },
      { q: "Can you work with an existing codebase?", a: "Yes. Existing repositories can be reviewed before deciding on the appropriate implementation approach. We don't require a greenfield project to engage." },
      { q: "Can you build an MVP?", a: "Yes. We can help scope and build a focused MVP around the core problem, rather than unnecessarily building a large first release that slows the feedback loop." },
    ]
  },
  {
    id: "process",
    label: "Process",
    questions: [
      { q: "How does a project start?", a: "Typically: Discovery → Scope → Technical Plan → Design → Development → Testing → Deployment → Improvement. It begins with an initial inquiry and a discussion to understand your requirements." },
      { q: "Do I need a complete requirements document?", a: "No. A clear explanation of the problem, desired outcome, and current situation is usually enough to begin the discussion and develop a proper scope." },
      { q: "Do you provide a project proposal?", a: "For suitable projects, the scope, approach, deliverables, timeline, and commercial terms are defined before development begins." },
      { q: "How long does a project take?", a: "It depends entirely on complexity. A focused business website takes substantially less time than a custom application, automation platform, or IoT system. Timeline is established during scoping." },
      { q: "Can I see progress during development?", a: "Yes. Project communication and review checkpoints are established according to the project, and live staging environments are provided where appropriate." },
      { q: "Do you provide documentation?", a: "Where appropriate, documentation can cover architecture, setup, deployment, APIs, workflows, and operational requirements for the delivered system." },
      { q: "Do you provide post-launch support?", a: "Support can be arranged depending on the project and engagement model. This is discussed as part of the initial scope definition." },
    ]
  },
  {
    id: "pricing",
    label: "Pricing",
    questions: [
      { q: "How much does a project cost?", a: "There is no single price for every project. Pricing depends on scope, complexity, integrations, timeline, infrastructure, and support requirements. The initial discussion helps establish this." },
      { q: "Do you have fixed-price packages?", a: "Yes. Some clearly defined services are offered as fixed-price packages. Custom scopes are quoted separately after understanding the requirements." },
      { q: "Can I get a quote before starting?", a: "Yes. The initial discussion can establish the requirements needed to determine an appropriate scope and estimate before any commitment is made." },
      { q: "Do you offer monthly retainers?", a: "For suitable ongoing requirements, a recurring support or engineering engagement can be considered and structured appropriately." },
      { q: "Do you offer audits or consultations?", a: "Yes. Smaller engagements are useful when you need architecture guidance, technical assessment, debugging, security review, or planning before committing to a larger build." },
      { q: "Why don't you show prices for everything?", a: "Because two projects with the same general description can have very different technical requirements. A meaningful estimate requires understanding the actual problem, not just a category label." },
    ]
  },
  {
    id: "technology",
    label: "Technology",
    questions: [
      { q: "What technologies do you use?", a: "The stack is chosen for the project requirements. This can include modern frontend frameworks (Next.js, React), backend systems, databases, cloud infrastructure, automation platforms, IoT technologies, and security tooling." },
      { q: "Do you work with Next.js or React?", a: "Yes, where they are the appropriate tools for the project's requirements and scale." },
      { q: "Can you work with an existing technology stack?", a: "Where technically practical, yes. The goal is not to replace technology simply for the sake of using something newer — it's to solve the actual problem." },
      { q: "Do you build APIs?", a: "Yes. API design, integration, authentication, data handling, and backend services can be part of a project." },
      { q: "Can you connect third-party APIs?", a: "Yes, subject to the capabilities and terms of the third-party platform. Most commercial platforms with an API or webhook system can be connected." },
      { q: "Do you build databases?", a: "Yes. Database architecture, schema design, integration, and data workflows can be part of application development." },
    ]
  },
  {
    id: "security",
    label: "Security",
    questions: [
      { q: "Is security considered during development?", a: "Yes. Security is considered as part of architecture and implementation — not as a final checklist bolted on at the end." },
      { q: "Can you review an existing application for security issues?", a: "Yes, within an authorized security assessment scope. Security reviews can identify vulnerabilities, insecure configurations, and architectural risk before they become problems." },
      { q: "Can you secure APIs and authentication?", a: "Yes. Authentication, authorization, input validation, secure data handling, and API security can be addressed as part of engineering and security work." },
      { q: "Do you work with cybersecurity for businesses?", a: "Yes. Security-focused engineering and assessments can be considered depending on the organization's requirements and risk profile." },
      { q: "Do you perform penetration testing?", a: "Only where there is explicit written authorization and a clearly defined scope. Security testing is performed responsibly and within agreed boundaries." },
    ]
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    questions: [
      { q: "Can you automate my business workflow?", a: "Yes. We can examine the existing workflow, identify repetitive operations, and determine which parts can be automated safely and cost-effectively." },
      { q: "Do I need an AI system?", a: "Not necessarily. We recommend AI only when it provides a meaningful benefit. Traditional software or automation may be a better, simpler solution for some problems." },
      { q: "Can AI be integrated into existing software?", a: "Yes. AI capabilities can be integrated into existing applications and workflows where appropriate and where the system architecture supports it." },
      { q: "Can you automate tasks across multiple applications?", a: "Potentially, yes — through APIs, webhooks, automation platforms, or custom integrations depending on what the existing tools support." },
      { q: "Can you build an AI-powered internal tool?", a: "Yes, depending on the requirements, data, security constraints, and desired workflow. We can design an appropriate architecture before building." },
    ]
  },
  {
    id: "students",
    label: "Students",
    questions: [
      { q: "What is the Student Hub?", a: "The Student Hub is Rishvin Labs' dedicated ecosystem for students — focused on learning, building, showcasing technical work, gaining experience, and preparing for careers in engineering and technology." },
      { q: "Is the Student Hub separate from business services?", a: "Yes. It is a separate, student-focused experience within the Rishvin Labs ecosystem, with its own programs, pricing, and resources." },
      { q: "Are Student Hub resources free?", a: "Free resources include roadmaps, guides, templates, learning resources, and opportunities. Paid programs and technical support sessions are separate and clearly priced." },
      { q: "Can you help me with my student project?", a: "Yes, through mentoring, engineering guidance, debugging, architecture discussions, deployment assistance, and related technical support." },
      { q: "Will you complete my academic assignment for me?", a: "No. Rishvin Labs provides technical guidance, mentoring, debugging, and engineering support — not completion of graded academic work on a student's behalf." },
      { q: "Can you help with hackathons?", a: "Yes. Support can include idea validation, technical architecture, implementation guidance, debugging, demonstrations, and pitch preparation." },
      { q: "Can you help me build a portfolio?", a: "Yes. Student programs include portfolio development, GitHub optimization, project presentation, and technical positioning for internships and jobs." },
    ]
  },
  {
    id: "contact",
    label: "Contact",
    questions: [
      { q: "How do I start a project?", a: "Use the Start a Project button and provide information about what you're trying to build, improve, automate, or secure. We review every inquiry personally." },
      { q: "What should I include in my inquiry?", a: "Tell us what you're trying to solve, what you currently have, what you want to achieve, your timeline, and any relevant links or documentation. You don't need to know the technical solution beforehand." },
      { q: "Can I contact you if I'm not sure what service I need?", a: "Yes — this is exactly what the initial discussion is for. Describe the problem and we can identify the appropriate approach together." },
      { q: "What happens after I submit the form?", a: "Your inquiry is reviewed personally. We understand the requirement and reach out within 24 hours with appropriate next steps or a technical proposal." },
      { q: "Do I have to commit after contacting you?", a: "No. An initial inquiry does not automatically commit you to a project. The first discussion is exploratory." },
      { q: "Can I request a consultation before a full project?", a: "Yes. A consultation or technical discovery engagement may be appropriate when requirements are unclear or the project needs planning before development begins." },
    ]
  },
  {
    id: "trust",
    label: "Trust & Ownership",
    questions: [
      { q: "Who will I work with?", a: "Rishvin Labs is founder-led, so projects are approached directly — not passed through a chain of account managers. You work with the people doing the engineering." },
      { q: "Who owns the final project?", a: "Ownership is explicitly defined in the project agreement based on the scope and engagement terms. This is not ambiguous." },
      { q: "Will I receive the source code?", a: "For development projects, source-code delivery and ownership should be clearly defined in the project agreement before work begins." },
      { q: "Can you sign an NDA?", a: "This can be discussed as part of the engagement. Confidentiality is treated seriously regardless of formal agreements." },
      { q: "Do you guarantee project results?", a: "We commit to defined deliverables and engineering work. Business outcomes can depend on factors outside the development team's control, which is why clear scope definition matters." },
    ]
  },
  {
    id: "technical-support",
    label: "Technical Support",
    questions: [
      { q: "Can you fix deployment problems?", a: "Yes. Support can cover deployment configuration, build failures, environment variables, hosting configuration, CI/CD pipelines, and related infrastructure issues." },
      { q: "Can you fix API problems?", a: "Yes. API integration issues, authentication failures, request/response handling, CORS problems, and related debugging can all be investigated." },
      { q: "Can you fix database problems?", a: "Yes. Connection issues, schema problems, queries, authentication, migrations, and integration problems with databases can be reviewed and resolved." },
      { q: "Can you debug IoT projects?", a: "Yes. Depending on the project, this can include firmware debugging, sensor integration, communication protocols, cloud connectivity, and related issues." },
      { q: "Can you review my architecture before I start building?", a: "Yes. Architecture review can help identify unnecessary complexity, technical risks, security gaps, and better implementation approaches before any code is written." },
    ]
  },
];

/** Flat list of the highest-conversion questions for homepage/compact usage */
export const FAQ_HOMEPAGE: FaqItem[] = [
  { q: "What does Rishvin Labs do?",                              a: FAQ_CATEGORIES[0].questions[1].a },
  { q: "Who do you work with?",                                   a: FAQ_CATEGORIES[0].questions[3].a },
  { q: "What services do you provide?",                          a: FAQ_CATEGORIES[1].questions[0].a },
  { q: "I don't know what technology I need. Can you help?",     a: FAQ_CATEGORIES[2].questions[1].a },
  { q: "How much does a project cost?",                          a: FAQ_CATEGORIES[4].questions[0].a },
  { q: "Can you work with an existing project or codebase?",     a: FAQ_CATEGORIES[2].questions[5].a },
  { q: "How does a project start?",                              a: FAQ_CATEGORIES[3].questions[0].a },
  { q: "How long does a project take?",                          a: FAQ_CATEGORIES[3].questions[3].a },
  { q: "Do you provide post-launch support?",                    a: FAQ_CATEGORIES[3].questions[6].a },
  { q: "I have a problem but I don't know which service I need.", a: FAQ_CATEGORIES[0].questions[6].a },
];
