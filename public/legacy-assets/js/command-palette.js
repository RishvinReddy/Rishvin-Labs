/**
 * Command Palette (Cmd/Ctrl + K)
 * Provides a global search and quick navigation overlay.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject HTML for Command Palette
    const paletteHTML = `
    <div class="command-palette-overlay" id="command-palette" style="display: none;">
        <div class="command-palette-modal animate-slide-up">
            <div class="command-palette-header">
                <i data-lucide="search" style="width: 20px; height: 20px; color: var(--text-secondary);"></i>
                <input type="text" id="command-input" placeholder="Search systems, services, or pages..." autocomplete="off">
                <span class="command-esc">ESC</span>
            </div>
            <div class="command-palette-results" id="command-results">
                <!-- Results populated by JS -->
            </div>
        </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', paletteHTML);
    lucide.createIcons(); // Re-init icons for the new HTML
    
    const palette = document.getElementById('command-palette');
    const input = document.getElementById('command-input');
    const resultsContainer = document.getElementById('command-results');
    
    // 2. Define Index of Pages / Actions
    const commandIndex = [
        { title: 'Home', url: 'index.html', icon: 'home', category: 'Pages' },
        { title: 'About Us', url: 'about.html', icon: 'info', category: 'Pages' },
        { title: 'Engineering Services', url: 'services.html', icon: 'cpu', category: 'Pages' },
        { title: 'Case Studies (Projects)', url: 'projects.html', icon: 'folder', category: 'Pages' },
        { title: 'Start a Project (Contact)', url: 'contact.html', icon: 'mail', category: 'Pages' },
        { title: 'View GitHub Profile', url: 'https://github.com/RishvinReddy', icon: 'github', category: 'External', external: true },
        { title: 'IoT Systems Service', url: 'services.html#iot', icon: 'radio', category: 'Services' },
        { title: 'Cybersecurity Service', url: 'services.html#cyber', icon: 'shield', category: 'Services' },
        { title: 'Software Engineering', url: 'services.html#software', icon: 'code', category: 'Services' },
        { title: 'Automation Systems', url: 'services.html#automation', icon: 'workflow', category: 'Services' }
    ];
    
    let activeIndex = 0;
    
    // 3. Render Results
    function renderResults(query = '') {
        const lowerQuery = query.toLowerCase();
        const filtered = commandIndex.filter(item => 
            item.title.toLowerCase().includes(lowerQuery) || 
            item.category.toLowerCase().includes(lowerQuery)
        );
        
        if (filtered.length === 0) {
            resultsContainer.innerHTML = '<div class="command-empty">No results found.</div>';
            return;
        }
        
        let html = '';
        let currentCategory = '';
        
        filtered.forEach((item, index) => {
            if (item.category !== currentCategory) {
                html += `<div class="command-category">${item.category}</div>`;
                currentCategory = item.category;
            }
            const activeClass = index === activeIndex ? 'active' : '';
            html += `
                <a href="${item.url}" class="command-item ${activeClass}" data-index="${index}" ${item.external ? 'target="_blank"' : ''}>
                    <i data-lucide="${item.icon}"></i>
                    <span>${item.title}</span>
                </a>
            `;
        });
        
        resultsContainer.innerHTML = html;
        lucide.createIcons();
        
        // Add hover events to update active state
        document.querySelectorAll('.command-item').forEach(el => {
            el.addEventListener('mouseenter', (e) => {
                activeIndex = parseInt(e.currentTarget.getAttribute('data-index'));
                updateActiveItem();
            });
        });
    }
    
    function updateActiveItem() {
        const items = document.querySelectorAll('.command-item');
        items.forEach((item, index) => {
            if (index === activeIndex) {
                item.classList.add('active');
                // Scroll into view if needed
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    // 4. Handle Modal Toggle
    function togglePalette() {
        if (palette.style.display === 'none') {
            palette.style.display = 'flex';
            input.value = '';
            activeIndex = 0;
            renderResults();
            setTimeout(() => input.focus(), 50);
            document.body.style.overflow = 'hidden';
        } else {
            palette.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
    
    // 5. Event Listeners
    document.addEventListener('keydown', (e) => {
        // Cmd+K or Ctrl+K
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            togglePalette();
        }
        
        if (palette.style.display !== 'none') {
            if (e.key === 'Escape') {
                togglePalette();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                const items = document.querySelectorAll('.command-item');
                if (activeIndex < items.length - 1) {
                    activeIndex++;
                    updateActiveItem();
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (activeIndex > 0) {
                    activeIndex--;
                    updateActiveItem();
                }
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const activeItem = document.querySelector('.command-item.active');
                if (activeItem) {
                    if (activeItem.getAttribute('target') === '_blank') {
                        window.open(activeItem.getAttribute('href'), '_blank');
                        togglePalette();
                    } else {
                        window.location.href = activeItem.getAttribute('href');
                    }
                }
            }
        }
    });
    
    // Close on overlay click
    palette.addEventListener('click', (e) => {
        if (e.target === palette) {
            togglePalette();
        }
    });
    
    // Search input typing
    input.addEventListener('input', (e) => {
        activeIndex = 0;
        renderResults(e.target.value);
    });
});
