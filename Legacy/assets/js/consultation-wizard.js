/**
 * Consultation Wizard Logic
 * Handles the interactive multi-step funnel for contact.html
 */
document.addEventListener('DOMContentLoaded', () => {
    const wizardContainer = document.getElementById('consultation-wizard');
    if (!wizardContainer) return;

    let currentStep = 1;
    const totalSteps = 5; // Updated to 5 steps
    const formData = {
        domain: '',
        stage: '',
        budget: '',
        name: '',
        email: '',
        details: ''
    };

    const steps = document.querySelectorAll('.wizard-step');
    const progressFill = document.getElementById('wizard-progress-fill');
    const stepIndicators = document.querySelectorAll('.step-indicator');
    
    // UI Update functions
    function updateUI() {
        // Update Step Visibility
        steps.forEach((step, index) => {
            if (index + 1 === currentStep) {
                step.classList.add('active');
                step.style.display = 'flex';
                // Trigger animation
                setTimeout(() => step.style.opacity = '1', 50);
            } else {
                step.classList.remove('active');
                step.style.opacity = '0';
                setTimeout(() => step.style.display = 'none', 300);
            }
        });

        // Update Progress Bar
        const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
        if (progressFill) {
            progressFill.style.width = `${progressPercentage}%`;
        }

        // Update Step Indicators
        stepIndicators.forEach((ind, index) => {
            if (index + 1 === currentStep) {
                ind.classList.add('active');
                ind.classList.remove('completed');
            } else if (index + 1 < currentStep) {
                ind.classList.add('completed');
                ind.classList.remove('active');
            } else {
                ind.classList.remove('active', 'completed');
            }
        });

        // Special logic for Step 4 (Proposal Output)
        if (currentStep === 4) {
            generateProposal();
        }
    }

    function generateProposal() {
        const output = document.getElementById('proposal-output');
        if (!output) return;

        // Base text fragments
        const domainText = {
            'software': 'Web platform / SaaS architecture with scalable cloud infrastructure.',
            'iot': 'IoT system with hardware telemetry and real-time data processing.',
            'security': 'Cybersecurity audit and zero-trust system hardening.'
        }[formData.domain] || 'Custom engineering system.';

        const stageText = {
            'idea': 'Focus: Requirements engineering, architecture design, and initial proof-of-concept.',
            'mvp': 'Focus: Codebase refinement, performance optimization, and production readiness.',
            'scaling': 'Focus: High-availability scaling, load balancing, and automated CI/CD pipelines.'
        }[formData.stage] || 'Focus: Custom development.';

        const budgetText = {
            '10k-50k': 'Estimated Timeline: 4-8 weeks. Standard SLA.',
            '50k-150k': 'Estimated Timeline: 2-4 months. Priority SLA.',
            '150k+': 'Estimated Timeline: 4+ months. Dedicated engineering team. Enterprise SLA.'
        }[formData.budget] || 'Estimated Timeline: TBD.';

        output.innerHTML = `
            <div style="margin-bottom: 8px;"><span style="color: var(--primary);">[ ARCHITECTURE ]</span> ${domainText}</div>
            <div style="margin-bottom: 8px;"><span style="color: var(--primary);">[ OBJECTIVE ]</span> ${stageText}</div>
            <div><span style="color: var(--primary);">[ PARAMETERS ]</span> ${budgetText}</div>
        `;
    }

    // Next Step Logic
    window.nextStep = function() {
        if (currentStep < totalSteps) {
            currentStep++;
            updateUI();
        }
    }

    // Previous Step Logic
    window.prevStep = function() {
        if (currentStep > 1) {
            currentStep--;
            updateUI();
        }
    };

    // Option Selection Handlers
    const optionBtns = document.querySelectorAll('.wizard-option');
    optionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const field = btn.getAttribute('data-field');
            const value = btn.getAttribute('data-value');
            
            // Clear other active options in this group
            const siblings = document.querySelectorAll(`.wizard-option[data-field="${field}"]`);
            siblings.forEach(s => s.classList.remove('selected'));
            
            // Select this option
            btn.classList.add('selected');
            formData[field] = value;

            // Auto-advance for single-click steps
            setTimeout(() => {
                nextStep();
            }, 300);
        });
    });

    // Form Submission (Real Mailto Integration)
    const wizardForm = document.getElementById('consultation-form');
    if (wizardForm) {
        wizardForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect final inputs
            formData.name = document.getElementById('wizard-name').value;
            formData.email = document.getElementById('wizard-email').value;
            formData.details = document.getElementById('wizard-details').value;
            
            // Validate
            if (!formData.name || !formData.email) {
                alert('Please provide your name and email to proceed.');
                return;
            }

            // Construct email payload
            const subject = encodeURIComponent(`Project Inquiry: ${formData.name} - ${formData.domain.toUpperCase()} System`);
            const body = encodeURIComponent(`
SYSTEM ARCHITECTURE INITIATION
------------------------------
Name: ${formData.name}
Email: ${formData.email}

PARAMETERS
------------------------------
Domain: ${formData.domain}
Stage: ${formData.stage}
Budget: ${formData.budget}

SYSTEM REQUIREMENTS
------------------------------
${formData.details}
            `.trim());

            const mailtoLink = `mailto:rishvinreddy@gmail.com?subject=${subject}&body=${body}`;

            // Provide visual feedback
            const submitBtn = wizardForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '[ TRANSMITTING... ]';
            submitBtn.disabled = true;

            setTimeout(() => {
                // Open mail client
                window.location.href = mailtoLink;

                wizardContainer.innerHTML = `
                    <div style="text-align: center; padding: var(--space-16) 0; flex: 1; display: flex; flex-direction: column; justify-content: center;" class="animate-fade-in">
                        <i data-lucide="check-circle" style="width: 48px; height: 48px; color: var(--text-primary); margin: 0 auto var(--space-6);"></i>
                        <h2 style="font-size: var(--text-h2); margin-bottom: var(--space-4);">Transmission Ready.</h2>
                        <p style="color: var(--text-secondary); max-width: 400px; margin: 0 auto var(--space-8);">
                            Your email client has been opened with the architecture parameters pre-filled. Please send the email to initiate the project.
                        </p>
                        <a href="index.html" class="btn btn-secondary" style="align-self: center;">Return Home</a>
                    </div>
                `;
                if(window.lucide) lucide.createIcons();
            }, 1000);
        });
    }

    // Initialize UI
    updateUI();
});
