class RecommendationEngine {
    constructor() {
        this.mountPoint = document.getElementById('recommendation-engine-mount');
        this.pageMount = document.getElementById('recommendation-page-mount');
        
        this.roles = [
            { id: 'student', title: 'Student', icon: 'graduation-cap', desc: 'Resumes, portfolios, and placement readiness.', needs: ['Resume', 'Portfolio', 'Projects', 'Placement help'] },
            { id: 'startup', title: 'Startup', icon: 'rocket', desc: 'Fast MVPs, landing pages, and growth tech.', needs: ['Landing page', 'MVP', 'Branding', 'Growth support'] },
            { id: 'business', title: 'Small Business', icon: 'store', desc: 'Digital presence, booking, and WhatsApp flows.', needs: ['Website', 'Online presence', 'WhatsApp integration', 'Growth'] },
            { id: 'creator', title: 'Creator', icon: 'pen-tool', desc: 'Personal branding, links, and media portfolios.', needs: ['Personal branding', 'Portfolio', 'Creator website'] },
            { id: 'developer', title: 'Developer', icon: 'terminal', desc: 'GitHub setup, tech blogs, and deployments.', needs: ['GitHub', 'Portfolio', 'README', 'Deployment'] },
            { id: 'professional', title: 'Professional', icon: 'briefcase', desc: 'Career elevation and professional networking.', needs: ['Resume', 'LinkedIn', 'Portfolio', 'Career guidance'] },
            { id: 'academic', title: 'Academic', icon: 'book-open', desc: 'IoT projects, UMLs, and technical documentation.', needs: ['IoT', 'Documentation', 'UML', 'Reports'] },
            { id: 'custom', title: 'Enterprise / Custom', icon: 'settings', desc: 'Bespoke automation, AI, and scalable systems.', needs: ['Custom software', 'Automation', 'AI', 'Enterprise solutions'] }
        ];

        this.recommendationLogic = {
            'student': {
                services: [
                    { name: 'ATS Resume', price: '₹399' },
                    { name: 'LinkedIn Optimization', price: '₹399' },
                    { name: 'GitHub Profile Optimization', price: '₹399' }
                ],
                bundle: { name: 'Placement Readiness Package', price: '₹999' }
            },
            'startup': {
                services: [
                    { name: 'Startup Landing Page', price: '₹999' },
                    { name: 'Startup Consultation', price: '₹499' },
                    { name: 'WhatsApp Integration', price: '₹199' }
                ],
                bundle: { name: 'Startup Lite Package', price: '₹1,499' }
            },
            'business': {
                services: [
                    { name: 'Business Website', price: '₹999' },
                    { name: 'Google Maps Setup', price: '₹199' },
                    { name: 'WhatsApp Setup', price: '₹299' }
                ],
                bundle: { name: 'Local Business Starter', price: '₹999' }
            },
            'creator': {
                services: [
                    { name: 'Creator Portfolio', price: '₹999' },
                    { name: 'Bio Optimization', price: '₹199' },
                    { name: 'Social Media Profile Audit', price: '₹299' }
                ],
                bundle: { name: 'Creator Starter', price: '₹799' }
            },
            'developer': {
                services: [
                    { name: 'GitHub Setup', price: '₹299' },
                    { name: 'README Creation', price: '₹199' },
                    { name: 'Portfolio Deployment', price: '₹299' }
                ],
                bundle: { name: 'Developer Starter', price: '₹499' }
            },
            'professional': {
                services: [
                    { name: 'Resume Review', price: '₹199' },
                    { name: 'LinkedIn Optimization', price: '₹499' },
                    { name: 'Interview Guidance', price: '₹299' }
                ],
                bundle: { name: 'Job Ready Package', price: '₹999' }
            },
            'academic': {
                services: [
                    { name: 'Mini Project Guidance', price: '₹299' },
                    { name: 'Documentation', price: '₹499' },
                    { name: 'UML Diagrams', price: '₹499' }
                ],
                bundle: { name: 'Mini Project Package', price: '₹799' }
            },
            'custom': {
                services: [
                    { name: 'Custom Web Apps', price: 'Starts ₹4,999' },
                    { name: 'AI Integrations', price: 'Starts ₹4,999' },
                    { name: 'Automation Systems', price: 'Starts ₹4,999' }
                ],
                bundle: { name: 'Enterprise Consultation', price: '₹999' }
            }
        };

        this.init();
    }

    init() {
        if (this.mountPoint) {
            this.renderMainSection();
        }
        if (this.pageMount) {
            this.renderFormPage();
            this.attachFormListeners();
        }
        if (window.lucide) {
            lucide.createIcons();
        }
    }

    // ==========================================
    // 1. Grid Rendering (for index.html)
    // ==========================================
    renderMainSection() {
        let cardsHtml = this.roles.map((role) => {
            return `
            <div class="role-card" style="
                background: rgba(255, 255, 255, 0.02);
                border: 1px solid var(--border);
                border-radius: var(--radius-lg);
                padding: var(--space-6);
                display: flex;
                flex-direction: column;
                transition: all 0.2s ease;
                cursor: default;
            " onmouseover="this.style.background='rgba(255, 255, 255, 0.04)'; this.style.borderColor='var(--border-strong)';" onmouseout="this.style.background='rgba(255, 255, 255, 0.02)'; this.style.borderColor='var(--border)';">
                
                <div style="display: flex; align-items: center; gap: var(--space-4); margin-bottom: var(--space-4);">
                    <div style="
                        width: 40px; height: 40px; 
                        border-radius: var(--radius-sm); 
                        background: rgba(255,255,255,0.05); 
                        border: 1px solid var(--border);
                        display: flex; align-items: center; justify-content: center;
                        color: var(--text-primary);
                        flex-shrink: 0;
                    ">
                        <i data-lucide="${role.icon}" style="width: 18px; height: 18px;"></i>
                    </div>
                    <h3 style="font-family: var(--font-heading); font-size: 1.1rem; font-weight: 600; color: var(--text-primary); margin: 0;">${role.title}</h3>
                </div>
                
                <p style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.6; margin-bottom: var(--space-6); flex-grow: 1;">
                    ${role.desc}
                </p>
                
                <!-- Navigate to dedicated page instead of opening modal -->
                <a href="recommendation.html?role=${role.id}" style="
                    width: 100%; 
                    padding: 10px 16px;
                    background: transparent;
                    border: 1px solid var(--border);
                    border-radius: var(--radius-md);
                    color: var(--text-primary);
                    font-size: 0.85rem;
                    font-weight: 500;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    text-decoration: none;
                    transition: all 0.2s ease;
                " onmouseover="this.style.background='var(--text-primary)'; this.style.color='var(--bg-primary)';" onmouseout="this.style.background='transparent'; this.style.color='var(--text-primary)';">
                    Get Recommendation <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
                </a>
            </div>
        `}).join('');

        this.mountPoint.innerHTML = `
            <section class="section" id="not-sure" style="padding-top: var(--space-20); padding-bottom: var(--space-20); border-top: 1px solid var(--border);">
                <div class="container container-wide">
                    <div style="display: flex; flex-direction: column; align-items: center; text-align: center; margin-bottom: var(--space-16);">
                        <h2 style="font-size: var(--text-h2); font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-4); letter-spacing: -0.02em;">Not Sure What You Need?</h2>
                        <p style="color: var(--text-secondary); font-size: 1.1rem; max-width: 500px; line-height: 1.6;">Select your profile below and we'll engineer the perfect technical package for your goals.</p>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-6);">
                        ${cardsHtml}
                    </div>
                </div>
            </section>
        `;
    }

    // ==========================================
    // 2. Form Rendering (for recommendation.html)
    // ==========================================
    renderFormPage() {
        const urlParams = new URLSearchParams(window.location.search);
        const prefilledRole = urlParams.get('role') || '';

        this.pageMount.innerHTML = `
            <div id="page-content" style="width: 100%; max-width: 640px; margin: 0 auto; background: var(--bg-secondary); border: 1px solid var(--border-strong); border-radius: 24px; padding: var(--space-12); position: relative; box-shadow: 0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05);">
                
                <div style="text-align: center; margin-bottom: var(--space-10);">
                    <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 100px; font-size: 0.75rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); margin-bottom: var(--space-5);">
                        <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--text-primary); display: inline-block;"></span>
                        System Initialization
                    </div>
                    <h3 style="font-size: 2.2rem; font-family: var(--font-heading); font-weight: 700; color: var(--text-primary); margin: 0; letter-spacing: -0.02em;">Project Parameters</h3>
                    <p style="color: var(--text-secondary); margin-top: var(--space-3); font-size: 1rem;">Configure your requirements to engineer a bespoke technical architecture.</p>
                </div>
                
                <form id="recommendation-form" style="display: flex; flex-direction: column; gap: var(--space-5);">
                    <div>
                        <label style="display: block; margin-bottom: var(--space-2); color: var(--text-primary); font-size: 0.85rem; font-weight: 500;">Role Identifier</label>
                        <select id="form-role" required style="width: 100%; padding: 14px 16px; background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--text-primary); font-size: 0.95rem; appearance: none; outline: none; transition: border 0.2s ease;" onfocus="this.style.borderColor='var(--text-primary)'" onblur="this.style.borderColor='var(--border)'">
                            <option value="" disabled ${!prefilledRole ? 'selected' : ''}>Select your role...</option>
                            ${this.roles.map(r => `<option value="${r.id}" ${r.id === prefilledRole ? 'selected' : ''} style="background: var(--bg-primary);">${r.title}</option>`).join('')}
                        </select>
                    </div>
                    
                    <div>
                        <label style="display: block; margin-bottom: var(--space-2); color: var(--text-primary); font-size: 0.85rem; font-weight: 500;">Primary Objective</label>
                        <select id="form-goal" required style="width: 100%; padding: 14px 16px; background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--text-primary); font-size: 0.95rem; appearance: none; outline: none; transition: border 0.2s ease;" onfocus="this.style.borderColor='var(--text-primary)'" onblur="this.style.borderColor='var(--border)'">
                            <option value="" disabled selected>Select an objective...</option>
                            <option value="Get placement">Secure placement / Job</option>
                            <option value="Build online presence">Establish online presence</option>
                            <option value="Launch startup">Launch MVP / Startup</option>
                            <option value="Improve branding">Enhance personal branding</option>
                            <option value="Build a website">Develop custom website</option>
                            <option value="Project help">Academic system design</option>
                            <option value="Automate workflow">Automate operations</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label style="display: block; margin-bottom: var(--space-2); color: var(--text-primary); font-size: 0.85rem; font-weight: 500;">Budget Allocation</label>
                        <select id="form-budget" required style="width: 100%; padding: 14px 16px; background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--text-primary); font-size: 0.95rem; appearance: none; outline: none; transition: border 0.2s ease;" onfocus="this.style.borderColor='var(--text-primary)'" onblur="this.style.borderColor='var(--border)'">
                            <option value="" disabled selected>Select budget...</option>
                            <option value="₹199–₹499">₹199 – ₹499</option>
                            <option value="₹500–₹999">₹500 – ₹999</option>
                            <option value="₹1,000–₹2,000">₹1,000 – ₹2,000</option>
                            <option value="₹2,000–₹5,000">₹2,000 – ₹5,000</option>
                            <option value="Custom">Custom Enterprise</option>
                        </select>
                    </div>

                    <div>
                        <label style="display: block; margin-bottom: var(--space-2); color: var(--text-primary); font-size: 0.85rem; font-weight: 500;">Delivery Timeline</label>
                        <select id="form-timeline" required style="width: 100%; padding: 14px 16px; background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: var(--radius-md); color: var(--text-primary); font-size: 0.95rem; appearance: none; outline: none; transition: border 0.2s ease;" onfocus="this.style.borderColor='var(--text-primary)'" onblur="this.style.borderColor='var(--border)'">
                            <option value="" disabled selected>Select timeline...</option>
                            <option value="Urgent">Urgent (ASAP)</option>
                            <option value="1 Week">1 Week</option>
                            <option value="2 Weeks">2 Weeks</option>
                            <option value="Flexible">Flexible</option>
                        </select>
                    </div>

                    <button type="submit" style="
                        margin-top: var(--space-4);
                        width: 100%;
                        padding: 16px;
                        background: var(--text-primary);
                        color: var(--bg-primary);
                        border: none;
                        border-radius: var(--radius-md);
                        font-weight: 600;
                        font-size: 0.95rem;
                        cursor: pointer;
                        transition: opacity 0.2s ease;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    " onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
                        Compute Recommendation
                    </button>
                </form>
            </div>
        `;
    }

    attachFormListeners() {
        const form = document.getElementById('recommendation-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            });
        }
    }

    handleFormSubmit() {
        const role = document.getElementById('form-role').value;
        const goal = document.getElementById('form-goal').value;
        const budget = document.getElementById('form-budget').value;
        const timeline = document.getElementById('form-timeline').value;
        const submitBtn = document.querySelector('#recommendation-form button[type="submit"]');

        const recommendation = this.recommendationLogic[role] || this.recommendationLogic['custom'];
        
        // 1. Loading state on button
        if (submitBtn) {
            submitBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite; margin-right:8px;"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Architecting System...`;
            submitBtn.style.opacity = '0.7';
            submitBtn.style.pointerEvents = 'none';
        }

        const pageContent = document.getElementById('page-content');
        
        // 2. Fade out form
        pageContent.style.transition = 'opacity 0.3s ease';
        pageContent.style.opacity = '0';
        
        setTimeout(() => {
            // 3. Show skeletal loader sequence
            pageContent.innerHTML = `
                <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:400px; text-align:center;">
                    <div style="width: 48px; height: 48px; border: 2px solid var(--border); border-top-color: var(--text-primary); border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: var(--space-6);"></div>
                    <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.1em; display:flex; flex-direction:column; gap:8px;">
                        <span class="loading-step">Analyzing constraints...</span>
                    </div>
                </div>
                <style>@keyframes spin { 100% { transform: rotate(360deg); } }</style>
            `;
            pageContent.style.opacity = '1';

            // 4. Update loader text dynamically
            const steps = ["Mapping architecture...", "Calculating optimal bundle...", "Finalizing parameters..."];
            let stepIndex = 0;
            const stepInterval = setInterval(() => {
                const stepEl = pageContent.querySelector('.loading-step');
                if (stepEl && steps[stepIndex]) {
                    stepEl.innerText = steps[stepIndex];
                    stepIndex++;
                } else {
                    clearInterval(stepInterval);
                }
            }, 600);

            // 5. Resolve to final result
            setTimeout(() => {
                pageContent.style.opacity = '0';
                setTimeout(() => {
                    this.renderRecommendationResult(recommendation, { role, goal, budget, timeline });
                    pageContent.style.opacity = '1';
                }, 300);
            }, 2400);

        }, 300);
    }

    renderRecommendationResult(rec, formData) {
        const pageContent = document.getElementById('page-content');
        
        const textMessage = `Hi Rishvin Labs! 👋
I'd like to get started with a project.
Here are my details:
*Role:* ${formData.role}
*Goal:* ${formData.goal}
*Budget:* ${formData.budget}
*Timeline:* ${formData.timeline}

*I'm interested in:* ${rec.bundle.name}
Can we discuss this?`;
        
        const whatsappUrl = `https://wa.me/919848723235?text=${encodeURIComponent(textMessage)}`;

        pageContent.innerHTML = `
            <div style="text-align: center; margin-bottom: var(--space-8);">
                <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-4); color: var(--text-primary);">
                    <i data-lucide="check" style="width: 20px; height: 20px;"></i>
                </div>
                <h3 style="font-size: var(--text-h3); font-weight: 600; color: var(--text-primary); margin-bottom: var(--space-2);">System Recommendation</h3>
                <p style="color: var(--text-secondary); font-size: 0.95rem;">Based on your parameters, we suggest the following architecture.</p>
            </div>

            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: var(--space-6); margin-bottom: var(--space-6);">
                <h4 style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-secondary); margin-bottom: var(--space-4);">Recommended Components</h4>
                <ul style="list-style: none; padding: 0; margin-bottom: 0;">
                    ${rec.services.map((s, i) => `
                        <li style="display: flex; justify-content: space-between; align-items: center; padding-bottom: ${i !== rec.services.length-1 ? 'var(--space-3)' : '0'}; border-bottom: ${i !== rec.services.length-1 ? '1px solid var(--border)' : 'none'}; margin-bottom: ${i !== rec.services.length-1 ? 'var(--space-3)' : '0'};">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <i data-lucide="check-circle" style="width: 14px; height: 14px; color: var(--text-muted);"></i>
                                <span style="color: var(--text-primary); font-size: 0.95rem;">${s.name}</span>
                            </div>
                            <span style="color: var(--text-secondary); font-size: 0.9rem; font-family: var(--font-mono);">${s.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div style="background: var(--text-primary); border-radius: var(--radius-lg); padding: var(--space-6); margin-bottom: var(--space-6); text-align: center;">
                <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(0,0,0,0.5); font-weight: 700; margin-bottom: var(--space-2);">[ OPTIMAL BUNDLE ]</div>
                <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: var(--space-2); color: var(--bg-primary);">${rec.bundle.name}</h4>
                <div style="font-size: 1.75rem; font-weight: 600; color: var(--bg-primary); margin-bottom: var(--space-5);">${rec.bundle.price}</div>
                
                <a href="${whatsappUrl}" target="_blank" style="
                    display: flex; align-items: center; justify-content: center; gap: 8px;
                    width: 100%; padding: 14px;
                    background: var(--bg-primary);
                    color: var(--text-primary);
                    border-radius: var(--radius-md);
                    font-weight: 600; font-size: 0.95rem;
                    text-decoration: none;
                ">
                    <i data-lucide="message-circle" style="width: 18px; height: 18px;"></i>
                    Initialize on WhatsApp
                </a>
            </div>
            
            <a href="index.html" style="
                display: flex; align-items: center; justify-content: center; gap: 8px;
                width: 100%; padding: 14px;
                background: transparent;
                border: 1px solid var(--border);
                color: var(--text-primary);
                border-radius: var(--radius-md);
                font-weight: 500; font-size: 0.95rem;
                cursor: pointer;
                text-decoration: none;
                transition: background 0.2s ease;
            " onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">
                <i data-lucide="arrow-left" style="width: 16px; height: 16px;"></i> Return to Home
            </a>
        `;
        
        if (window.lucide) {
            lucide.createIcons();
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new RecommendationEngine();
});
