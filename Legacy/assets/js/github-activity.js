/**
 * Live GitHub Activity
 * Fetches recent public activity from GitHub API.
 */

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('github-activity-feed');
    if (!container) return;

    const username = 'RishvinReddy';
    const apiUrl = `https://api.github.com/users/${username}/events/public`;

    async function fetchGitHubActivity() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Network response was not ok');
            
            const events = await response.json();
            
            // Filter out events we don't care about, keep PushEvent, CreateEvent, PullRequestEvent
            const validEvents = events.filter(e => 
                ['PushEvent', 'CreateEvent', 'PullRequestEvent'].includes(e.type)
            ).slice(0, 4); // Take top 4

            if (validEvents.length === 0) {
                container.innerHTML = '<p class="text-small" style="color: var(--text-secondary);">No recent public engineering activity found.</p>';
                return;
            }

            let html = '';
            
            validEvents.forEach(event => {
                const date = new Date(event.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                const repoName = event.repo.name.replace(`${username}/`, '');
                let actionText = '';
                let icon = '';

                switch (event.type) {
                    case 'PushEvent':
                        actionText = `Pushed ${event.payload.commits ? event.payload.commits.length : 'code'} commit(s) to`;
                        icon = 'git-commit';
                        break;
                    case 'CreateEvent':
                        actionText = `Created repository`;
                        icon = 'folder-plus';
                        break;
                    case 'PullRequestEvent':
                        actionText = `${event.payload.action} pull request in`;
                        icon = 'git-pull-request';
                        break;
                }

                html += `
                    <div style="display: flex; gap: var(--space-4); align-items: flex-start; padding: var(--space-4) 0; border-bottom: 1px solid var(--border);">
                        <i data-lucide="${icon}" style="width: 16px; height: 16px; color: var(--text-secondary); margin-top: 4px;"></i>
                        <div>
                            <p class="text-small" style="margin-bottom: 0;">
                                <span style="color: var(--text-secondary); font-family: var(--font-mono); margin-right: var(--space-2);">${date}</span>
                                ${actionText} <a href="https://github.com/${event.repo.name}" target="_blank" style="font-weight: 500; text-decoration: underline;">${repoName}</a>
                            </p>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = html;
            lucide.createIcons();
            
        } catch (error) {
            console.error('Error fetching GitHub activity:', error);
            container.innerHTML = '<p class="text-small" style="color: var(--text-secondary);">Unable to load live engineering activity at this time.</p>';
        }
    }

    fetchGitHubActivity();
});
