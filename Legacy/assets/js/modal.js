document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('case-study-modal');
    if (!modal) return;
    
    const closeBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body-content');
    const triggers = document.querySelectorAll('.modal-trigger');
  
    // Dummy case study data (In a real app, fetch from JSON/API)
    const caseStudies = {
      soil: {
        title: "Intelligent Soil Health Monitoring System",
        overview: "A distributed IoT network designed to eliminate inefficient water usage and maximize crop yields through real-time soil analytics.",
        problem: "Inefficient water usage and lack of real-time soil data led to suboptimal crop yields and wasted resources.",
        challenge: "Developing low-power sensor nodes capable of surviving harsh agricultural environments while maintaining a stable connection to the central gateway.",
        architecture: "Mesh network of ESP32 microcontrollers communicating via MQTT to a central Python backend, processing telemetry data in real-time.",
        tech: ["C++", "ESP32", "MQTT", "Python", "AWS IoT Core"],
        implementation: "We built custom PCB enclosures for the sensors, implemented deep-sleep cycles to extend battery life to 2+ years, and built a web dashboard for farmers.",
        outcome: "Reduced water usage by 35% across test farms while increasing crop yield by 15%."
      },
      finance: {
        title: "Personal Finance Intelligence Platform",
        overview: "A highly secure, scalable web platform that aggregates banking data and utilizes predictive models to forecast cash flow.",
        problem: "Fragmented financial data prevented users from getting a holistic view of their wealth and spending patterns.",
        challenge: "Ensuring SOC2 compliance and end-to-end encryption while rapidly processing thousands of transactional data points per user.",
        architecture: "React frontend communicating via GraphQL to a Node.js backend, storing encrypted records in PostgreSQL, and integrating with the Plaid API.",
        tech: ["React", "Node.js", "GraphQL", "PostgreSQL", "Plaid API"],
        implementation: "Implemented a microservices architecture to isolate the machine learning forecasting engine from the core transactional database, ensuring high availability.",
        outcome: "Platform scaled to handle 10k+ concurrent users with zero data breaches and <200ms latency on the dashboard."
      },
      waste: {
        title: "IoT Waste Monitoring Infrastructure",
        overview: "A smart logistics solution for municipalities to optimize waste collection routes dynamically based on bin volume.",
        problem: "Municipalities faced significant logistical costs dispatching trucks to empty partially filled waste bins.",
        challenge: "Calibrating ultrasonic sensors to accurately read volume despite uneven waste distribution and harsh weather conditions.",
        architecture: "Cellular-enabled sensor nodes reporting to AWS IoT Core, which triggers Lambda functions to update the React-based admin dashboard and route optimization engine.",
        tech: ["Embedded C", "AWS IoT Core", "React Admin", "Node.js"],
        implementation: "Prototyped the hardware, wrote the firmware, and built the full cloud infrastructure. Deployed a machine learning algorithm to predict when bins would reach capacity.",
        outcome: "Cut municipal collection costs by 22% and reduced carbon emissions from unnecessary truck routes."
      },
      vault: {
        title: "Zero-Trust Enterprise Data Vault",
        overview: "A distributed, end-to-end encrypted storage system using strict Zero-Trust authentication and ephemeral access tokens.",
        problem: "Sensitive client records were stored in monolithic databases vulnerable to lateral movement during a breach.",
        challenge: "Implementing a seamless user experience that doesn't compromise the stringent Zero-Trust security requirements.",
        architecture: "Python-based microservices running in Docker containers, utilizing HashiCorp Vault for secrets management and AES-256 for data-at-rest encryption.",
        tech: ["Python", "Cryptography", "Docker", "HashiCorp Vault"],
        implementation: "Architected the system to assume breach. We implemented mutual TLS between all internal services and ephemeral, time-bound access tokens for users.",
        outcome: "Successfully passed 3 independent penetration tests and achieved compliance with enterprise data security standards."
      },
      recruitment: {
        title: "Automated Recruitment Workflow Engine",
        overview: "A custom middleware engine that parses resumes via NLP, scores candidates, and automates calendar scheduling.",
        problem: "HR teams spent 20+ hours a week manually triaging resumes and scheduling initial screening calls.",
        challenge: "Integrating with legacy ATS (Applicant Tracking Systems) without native APIs, requiring custom webhook translation layers.",
        architecture: "Node.js event-driven engine processing webhooks, utilizing the OpenAI API for NLP extraction, and interfacing with Google Calendar API.",
        tech: ["Node.js", "OpenAI API", "Webhooks", "Google Calendar API"],
        implementation: "Built a resilient queue system (Redis) to handle spikes in application volume, ensuring no candidate data was dropped during processing.",
        outcome: "Reduced HR manual workload by 85% and decreased time-to-hire by 12 days on average."
      }
    };
  
    let previousActiveElement;

    const openModal = (projectId) => {
      const data = caseStudies[projectId];
      if (!data) return;
  
      modalTitle.textContent = data.title;
      
      const techBadges = data.tech.map(t => `<span class="badge" style="background: rgba(99, 102, 241, 0.1); color: var(--primary);">${t}</span>`).join('');
  
      modalBody.innerHTML = `
        <div class="modal-section">
            <h4>Overview</h4>
            <p>${data.overview}</p>
        </div>
        <div class="modal-section">
            <h4>The Problem</h4>
            <p>${data.problem}</p>
        </div>
        <div class="modal-section">
            <h4>The Challenge</h4>
            <p>${data.challenge}</p>
        </div>
        <div class="modal-section">
            <h4>Architecture</h4>
            <p>${data.architecture}</p>
        </div>
        <div class="modal-section">
            <h4>Implementation</h4>
            <p>${data.implementation}</p>
        </div>
        <div class="modal-section">
            <h4>Tech Stack</h4>
            <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">${techBadges}</div>
        </div>
        <div class="modal-section" style="border-top: 1px solid var(--border); padding-top: var(--space-4);">
            <h4 style="color: #10b981;">The Outcome</h4>
            <p style="font-size: 1.125rem; font-weight: 500;">${data.outcome}</p>
        </div>
      `;
  
      previousActiveElement = document.activeElement;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // prevent bg scroll
      
      // Focus the close button initially for accessibility
      setTimeout(() => closeBtn.focus(), 50);
    };
  
    const closeModal = () => {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (previousActiveElement) previousActiveElement.focus();
    };
  
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(trigger.getAttribute('data-project'));
      });
    });
  
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
  });
