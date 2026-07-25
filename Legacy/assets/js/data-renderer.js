document.addEventListener("DOMContentLoaded", () => {
    const servicesContainer = document.getElementById("services-container");
    const categoryNavContainer = document.getElementById("categories-nav");
    
    // Check if we are on a page that should render data dynamically
    if (!servicesContainer) return;

    // Helper: Build Contact Routing URL
    const buildContactUrl = (categoryTitle, serviceName) => {
        return `contact.html?service=${encodeURIComponent(categoryTitle)}&package=${encodeURIComponent(serviceName)}`;
    };

    // Load Sections Master File
    const isStudentPage = window.location.pathname.includes('students');
    const sectionsUrl = isStudentPage ? 'data/student-sections.json' : 'data/sections.json';
    
    fetch(sectionsUrl)
        .then(res => res.json())
        .then(data => {
            // For students, the root array is the whole JSON array. 
            // Oh wait, my script output an array directly, but services.html expects { sections: [...] }.
            // I need to account for this.
            const sectionsData = Array.isArray(data) ? data : data.sections;
            renderCategoryNav(sectionsData);
            
            // Determine which category to load based on URL params
            const urlParams = new URLSearchParams(window.location.search);
            const categoryId = urlParams.get('category');
            
            if (categoryId) {
                const activeSection = sectionsData.find(s => s.id === categoryId && s.enabled);
                if (activeSection) {
                    loadCategoryData(activeSection);
                } else {
                    servicesContainer.innerHTML = "<p>Category not found or disabled.</p>";
                }
            } else {
                let domainButtonsHtml = `<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 2.5rem;">`;
                sectionsData.filter(s => s.enabled).forEach(section => {
                    domainButtonsHtml += `
                        <a href="?category=${section.id}" style="background: rgba(255,255,255,0.03); border: 1px solid var(--border); padding: 12px 24px; border-radius: 100px; color: var(--text-primary); text-decoration: none; display: flex; align-items: center; gap: 8px; transition: all 0.2s ease;" onmouseover="this.style.background='var(--text-primary)'; this.style.color='var(--bg-primary)';" onmouseout="this.style.background='rgba(255,255,255,0.03)'; this.style.color='var(--text-primary)';">
                            <span style="font-weight: 600; font-size: 0.9rem;">${section.title}</span>
                        </a>
                    `;
                });
                domainButtonsHtml += `</div>`;

                servicesContainer.innerHTML = `
                    <div class="category-placeholder" style="position: relative; text-align: center; padding: 4rem 2rem; background: var(--bg-secondary); border: 1px solid var(--border-strong); border-radius: 24px; margin-bottom: 3rem; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.05); animation: fade-in 0.6s cubic-bezier(0.22, 1, 0.36, 1); transition: all 0.3s ease;">
                        
                        <!-- Icon Box -->
                        <div style="width: 64px; height: 64px; background: rgba(255,255,255,0.03); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto; color: var(--text-primary); border: 1px solid var(--border); box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
                            <i data-lucide="layout-grid" style="width: 28px; height: 28px;"></i>
                        </div>

                        <div style="margin-bottom: 1rem; display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 100px; font-size: 0.7rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary);">
                            <span style="width: 6px; height: 6px; background: var(--text-primary); border-radius: 50%; display: inline-block; animation: pulse 2s infinite;"></span>
                            Action Required
                        </div>
                        
                        <h3 style="font-family: var(--font-heading); font-size: clamp(1.8rem, 3vw, 2.5rem); margin-bottom: 1rem; color: var(--text-primary); font-weight: 800; letter-spacing: -0.02em;">
                            Select a Domain
                        </h3>
                        
                        <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto; font-size: 1.05rem; line-height: 1.6;">
                            Choose a category below to explore specialized services, technical stacks, and engineering packages.
                        </p>

                        ${domainButtonsHtml}

                        <style>
                            @keyframes pulse {
                                0% { opacity: 1; }
                                50% { opacity: 0.3; }
                                100% { opacity: 1; }
                            }
                        </style>
                    </div>
                `;
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            }
        })
        .catch(err => {
            console.error("Error loading sections:", err);
            if (window.location.protocol === 'file:') {
                servicesContainer.innerHTML = `
                    <div style="padding: 2rem; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; text-align: center; max-width: 600px; margin: 0 auto;">
                        <h3 style="color: #ef4444; margin-bottom: 1rem; font-family: var(--font-heading);">⚠️ Local File Protocol Detected</h3>
                        <p style="color: var(--text-secondary); margin-bottom: 1rem;">The dynamic data engine uses <strong>fetch()</strong> to load the service catalog. Modern browsers block this for security reasons when you open the file directly (using <code>file:///</code>).</p>
                        <p style="color: var(--text-secondary); font-weight: 600;">How to fix it:</p>
                        <ul style="color: var(--text-secondary); text-align: left; margin: 1rem auto; max-width: 400px; line-height: 1.6;">
                            <li><strong>VS Code:</strong> Install the "Live Server" extension and click "Go Live" at the bottom right.</li>
                            <li><strong>Terminal:</strong> Run <code>python -m http.server</code> or <code>npx serve</code> in the project folder.</li>
                        </ul>
                    </div>
                `;
            } else {
                servicesContainer.innerHTML = "<p>Error loading sections data. Please try again later.</p>";
            }
        });

    // Render Navigation for categories (Premium UX)
    function renderCategoryNav(sections) {
        if (!categoryNavContainer) return;
        
        const urlParams = new URLSearchParams(window.location.search);
        const currentCategory = urlParams.get('category');

        let navHTML = `
        <div class="category-tabs-wrapper" style="flex-direction: column; gap: var(--space-4);">
            ${!currentCategory ? `
                <div style="font-size: 0.75rem; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-primary); display: flex; align-items: center; gap: 8px; animation: pulse 2s infinite; background: var(--bg-secondary); padding: 6px 16px; border-radius: 100px; border: 1px solid var(--border);">
                    <i data-lucide="mouse-pointer-click" style="width: 14px; height: 14px;"></i> Select Category to Explore
                </div>
            ` : ''}
            <div class="category-tabs-container" id="category-scroll-container">
        `;
        
        sections.filter(s => s.enabled).forEach(section => {
            const isActive = section.id === currentCategory;
            const activeClass = isActive ? 'active' : '';
            navHTML += `
            <a href="?category=${section.id}" class="category-tab ${activeClass}">
                <i data-lucide="${section.icon}"></i>
                ${section.title}
            </a>`;
        });
        
        navHTML += `
            </div>
        </div>`;
        
        categoryNavContainer.innerHTML = navHTML;
        
        // Re-initialize lucide icons for newly added elements
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // Load specific category data
    function loadCategoryData(section) {
        servicesContainer.innerHTML = `<div class="loader-spinner" style="text-align: center; padding: 2rem;">Loading...</div>`;
        
        fetch(`data/${section.file}`)
            .then(res => res.json())
            .then(data => {
                renderServices(data);
            })
            .catch(err => {
                console.error("Error loading category data:", err);
                servicesContainer.innerHTML = "<p>Error loading services data.</p>";
            });
    }

    // Render the services and packages
    function renderServices(data) {
        let html = `
            <div style="margin-bottom: 2rem;">
                <h2 style="font-size: var(--text-h2); margin-bottom: 0.5rem;">${data.category}</h2>
                <p style="color: var(--text-secondary);">${data.description}</p>
            </div>
        `;

        const renderServicesGrid = (servicesArray) => {
            let gridHtml = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-6); margin-bottom: 3rem;">`;
            servicesArray.forEach((service, index) => {
                const delay = (index % 3 + 1) * 100;
                let featuresHtml = '';
                if (service.features) {
                    featuresHtml = `<ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; flex-grow: 1; margin-bottom: 1.5rem; border-top: 1px solid var(--border); padding-top: 1rem;">`;
                    service.features.forEach(feature => {
                        featuresHtml += `
                            <li style="font-size: 0.85rem; display: flex; gap: 8px; align-items: center; color: var(--text-secondary);">
                                <i data-lucide="check" style="width: 14px; height: 14px; color: var(--accent-blue);"></i>
                                ${feature}
                            </li>
                        `;
                    });
                    featuresHtml += `</ul>`;
                }

                gridHtml += `
                    <div class="card reveal delay-${delay}" style="padding: 0; display: flex; flex-direction: column; height: 100%; position: relative; overflow: hidden; border-radius: var(--radius-xl); background: var(--surface); transition: transform 0.3s ease, box-shadow 0.3s ease; border: 1px solid var(--border); box-shadow: var(--shadow-md);">
                        
                        <!-- Solid Accent Bar -->
                        <div style="height: 4px; background: ${service.popular ? 'var(--text-primary)' : 'rgba(255,255,255,0.05)'}; width: 100%;"></div>
                        
                        <div style="padding: var(--space-8); flex-grow: 1; display: flex; flex-direction: column; position: relative; z-index: 2;">
                            <!-- Badges -->
                            <div style="display: flex; justify-content: flex-end; align-items: center; margin-bottom: var(--space-6);">
                                <div style="display: flex; gap: 8px;">
                                    ${service.popular ? `<span style="font-size: 0.65rem; background: var(--text-primary); color: var(--bg-primary); padding: 4px 12px; font-family: var(--font-mono); font-weight: 800; border-radius: 100px; letter-spacing: 0.05em; text-transform: uppercase;">Most Popular</span>` : ''}
                                    ${service.offer ? `<span style="font-size: 0.65rem; background: rgba(255,255,255,0.1); color: var(--text-primary); padding: 4px 12px; font-family: var(--font-mono); font-weight: 800; border-radius: 100px; border: 1px solid var(--border-strong); letter-spacing: 0.05em; text-transform: uppercase;">${service.offer.label}</span>` : ''}
                                </div>
                            </div>

                            <h3 style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; letter-spacing: -0.01em; color: var(--text-primary);">${service.name}</h3>
                            
                            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: var(--space-6); line-height: 1.6; flex-grow: 0;">${service.description || ''}</p>
                            
                            <div style="font-size: 2.2rem; font-weight: 800; font-family: var(--font-heading); margin-bottom: var(--space-6); letter-spacing: -0.03em; color: var(--text-primary); display: flex; align-items: baseline; gap: 6px;">
                                <span style="font-size: 1.2rem; color: var(--text-muted); font-weight: 600;">${service.currency === 'INR' ? '₹' : service.currency}</span>${service.price} 
                                ${service.startingAt ? `<span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; font-family: var(--font-mono); margin-left: 4px;">/ STARTING</span>` : ''}
                            </div>
                            
                            ${featuresHtml}
                            
                            <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: var(--radius-md); margin-bottom: var(--space-6);">
                                <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-secondary); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Timeline</span>
                                <span style="font-size: 0.8rem; font-weight: 800; color: var(--text-primary); font-family: var(--font-mono);">${service.delivery || 'TBD'}</span>
                            </div>
                            
                            <a href="${buildContactUrl(data.title, service.name)}" class="btn ${service.popular ? 'btn-primary' : 'btn-outline'}" style="text-align: center; width: 100%; padding: 16px; font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border-radius: var(--radius-full); box-shadow: ${service.popular ? '0 8px 25px rgba(124,58,237,0.3)' : 'none'}; transition: all 0.3s ease;">
                                Get Started <i data-lucide="arrow-right" style="width: 16px; height: 16px; margin-left: 8px;"></i>
                            </a>
                        </div>
                    </div>
                `;
            });
            gridHtml += `</div>`;
            return gridHtml;
        };

        if (data.subcategories && data.subcategories.length > 0) {
            data.subcategories.forEach(sub => {
                html += `<h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem;">${sub.name}</h3>`;
                if (sub.services && sub.services.length > 0) {
                    html += renderServicesGrid(sub.services);
                }
            });
        } else if (data.services && data.services.length > 0) {
            html += `<h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 1.5rem;">Services</h3>`;
            html += renderServicesGrid(data.services);
        }

        if (data.packages && data.packages.length > 0) {
            html += `<h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 1.5rem; margin-top: 2rem;">Bundled Packages</h3>`;
            html += `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--space-6); margin-bottom: 3rem;">`;
            
            data.packages.forEach((pkg, index) => {
                const delay = (index % 3 + 1) * 100;
                
                let includesHtml = '';
                if (pkg.includes) {
                    includesHtml = `<ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; flex-grow: 1; margin-bottom: 1.5rem; border-top: 1px solid var(--border); padding-top: 1rem;">`;
                    pkg.includes.forEach(item => {
                        includesHtml += `
                            <li style="font-size: 0.85rem; display: flex; gap: 8px; align-items: center; color: var(--text-secondary);">
                                <i data-lucide="plus" style="width: 14px; height: 14px; color: var(--accent-violet);"></i>
                                ${item}
                            </li>
                        `;
                    });
                    includesHtml += `</ul>`;
                }

                html += `
                    <div class="card reveal delay-${delay}" style="padding: 0; display: flex; flex-direction: column; height: 100%; position: relative; overflow: hidden; border-radius: var(--radius-xl); background: var(--surface); transition: transform 0.3s ease, box-shadow 0.3s ease; border: 1px solid ${pkg.popular ? 'var(--text-primary)' : 'var(--border)'}; box-shadow: ${pkg.popular ? '0 10px 40px rgba(0,0,0,0.1)' : 'var(--shadow-md)'};">
                        
                        <!-- Solid Accent Bar -->
                        <div style="height: 4px; background: ${pkg.popular ? 'var(--text-primary)' : 'rgba(255,255,255,0.05)'}; width: 100%;"></div>

                        <div style="padding: var(--space-8); flex-grow: 1; display: flex; flex-direction: column; position: relative; z-index: 2;">
                            <!-- Badges -->
                            <div style="display: flex; justify-content: flex-end; align-items: center; margin-bottom: var(--space-6);">
                                <div style="display: flex; gap: 8px;">
                                    ${pkg.popular ? `<span style="font-size: 0.65rem; background: var(--text-primary); color: var(--bg-primary); padding: 4px 12px; font-family: var(--font-mono); font-weight: 800; border-radius: 100px; letter-spacing: 0.05em; text-transform: uppercase;">Popular Bundle</span>` : ''}
                                </div>
                            </div>
                            
                            <h3 style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text-primary); letter-spacing: -0.01em;">${pkg.name}</h3>
                            
                            <div style="font-size: 2.2rem; font-weight: 800; font-family: var(--font-heading); margin-bottom: 0.5rem; color: var(--text-primary); display: flex; align-items: baseline; gap: 6px;">
                                <span style="font-size: 1.2rem; color: var(--text-muted); font-weight: 600;">${pkg.currency === 'INR' ? '₹' : pkg.currency}</span>${pkg.price}
                            </div>
                            
                            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: var(--space-6); line-height: 1.6;">${pkg.description}</p>
                            
                            ${includesHtml}
                            
                            <a href="${buildContactUrl(data.title, pkg.name)}" class="btn ${pkg.popular ? 'btn-primary' : 'btn-outline'}" style="margin-top: auto; text-align: center; width: 100%; padding: 16px; font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 100px; transition: all 0.3s ease; box-shadow: none; ${pkg.popular ? 'background: var(--text-primary); color: var(--bg-primary); border-color: var(--text-primary);' : ''}">
                                Get Started <i data-lucide="arrow-right" style="width: 16px; height: 16px; margin-left: 8px;"></i>
                            </a>
                        </div>
                    </div>
                `;
            });
            html += `</div>`;
        }

        servicesContainer.innerHTML = html;
        
        // Re-initialize lucide icons for newly added elements
        if (window.lucide) {
            window.lucide.createIcons();
        }

        // Re-trigger scroll reveal animations if applicable
        
        if (typeof window.checkReveal === 'function') {
            setTimeout(window.checkReveal, 100);
        }

    }
});
