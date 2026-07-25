/**
 * Interactive Tech Stack Map
 * Handles domain tab switching on services.html
 */
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.stack-tab');
    const panel = document.getElementById('stack-panel');
    const domains = document.querySelectorAll('.stack-domain');

    if (!tabs.length || !panel) return;

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const domain = tab.getAttribute('data-domain');

            // Update tab styles
            tabs.forEach(t => {
                t.classList.remove('active');
                t.style.background = 'transparent';
                t.style.color = 'var(--text-secondary)';
                t.style.borderColor = 'var(--border)';
            });
            tab.classList.add('active');
            tab.style.background = 'var(--text-primary)';
            tab.style.color = 'var(--surface)';
            tab.style.borderColor = 'var(--text-primary)';

            // Fade-out → swap → fade-in
            panel.style.opacity = '0';
            setTimeout(() => {
                domains.forEach(d => d.style.display = 'none');
                const target = document.getElementById(`stack-${domain}`);
                if (target) target.style.display = 'block';
                panel.style.opacity = '1';
            }, 220);
        });
    });
});
