/**
 * Page Transitions
 * Handles smooth fade out on page navigation and handles fade in on load.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Add class to trigger fade-in animation
    document.body.classList.add('page-loaded');

    // Intercept internal links for fade-out
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const target = link.getAttribute('href');
            
            // Ignore external links, hash links, or open in new tab
            if (target.startsWith('#') || target.startsWith('http') || link.target === '_blank' || target.startsWith('mailto:') || target.startsWith('tel:')) {
                return;
            }

            e.preventDefault();
            
            // Trigger fade out
            document.body.classList.remove('page-loaded');
            document.body.classList.add('page-exiting');

            // Navigate after transition (assuming 300ms transition time)
            setTimeout(() => {
                window.location.href = target;
            }, 300); // matches CSS transition duration
        });
    });
});
