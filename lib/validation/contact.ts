export function validateContactPayload(body: Record<string, unknown> | null | undefined): { valid: boolean; error?: string } {
  if (!body) return { valid: false, error: "Empty payload" };

  if (body.honeypot) {
    return { valid: false, error: "Spam detected" };
  }

  // Helper to trim and measure length safely
  const trimLen = (val: unknown) => (typeof val === 'string' ? val.trim().length : 0);

  const fromName = typeof body.from_name === 'string' ? body.from_name : '';
  const fromEmail = typeof body.from_email === 'string' ? body.from_email : '';
  const company = typeof body.company === 'string' ? body.company : '';
  const message = typeof body.message === 'string' ? body.message : '';
  const businessProblem = typeof body.business_problem === 'string' ? body.business_problem : '';
  const projectLinks = typeof body.project_links === 'string' ? body.project_links : '';

  if (!fromName || trimLen(fromName) === 0) {
    return { valid: false, error: "Missing or invalid name" };
  }
  if (trimLen(fromName) > 100) return { valid: false, error: "Name is too long (max 100 characters)" };

  if (!fromEmail || trimLen(fromEmail) === 0) {
    return { valid: false, error: "Missing or invalid email" };
  }
  if (trimLen(fromEmail) > 255) return { valid: false, error: "Email is too long" };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(fromEmail)) {
    return { valid: false, error: "Invalid email address format" };
  }

  if (company && trimLen(company) > 150) {
    return { valid: false, error: "Company name is too long (max 150 characters)" };
  }

  if (message && trimLen(message) > 10000) {
    return { valid: false, error: "Message is too long (max 10,000 characters)" };
  }

  if (businessProblem && trimLen(businessProblem) > 10000) {
    return { valid: false, error: "Business problem description is too long (max 10,000 characters)" };
  }

  if (projectLinks) {
    if (trimLen(projectLinks) > 5000) {
      return { valid: false, error: "Project links are too long (max 5,000 characters)" };
    }
    const lines = projectLinks.split('\n').map((l: string) => l.trim()).filter(Boolean);
    for (const line of lines) {
      try {
        const url = new URL(line);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') {
          return { valid: false, error: `Invalid project link protocol (must be http or https): ${line}` };
        }
      } catch {
        return { valid: false, error: `Invalid project link URL: ${line}` };
      }
    }
  }

  return { valid: true };
}

export function parseProjectLinks(linksString?: string): string {
  if (!linksString || typeof linksString !== 'string' || !linksString.trim()) return "None provided";
  
  const lines = linksString.split('\n').map((l: string) => l.trim()).filter(Boolean);
  
  const validUrls = new Map<string, string>();

  for (const line of lines) {
    try {
      const url = new URL(line);
      if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        continue;
      }
      
      let domain = "External Reference";
      if (url.hostname.includes('drive.google')) domain = 'Google Drive';
      else if (url.hostname.includes('figma.com')) domain = 'Figma';
      else if (url.hostname.includes('github.com')) domain = 'GitHub';
      else if (url.hostname.includes('notion.so') || url.hostname.includes('notion.site')) domain = 'Notion';
      else if (url.hostname.includes('dropbox.com')) domain = 'Dropbox';
      else if (url.hostname.includes('onedrive.live.com')) domain = 'OneDrive';

      validUrls.set(url.href, domain);
    } catch {
      if (line.startsWith('http')) {
        validUrls.set(line, "Link");
      }
    }
  }

  if (validUrls.size === 0) return "None provided";

  return Array.from(validUrls.entries())
    .map(([url, domain]) => `${domain}: ${url}`)
    .join('\n\n');
}
