export function validateContactPayload(body: any): { valid: boolean, error?: string } {
  if (!body) return { valid: false, error: "Empty payload" };

  if (body.honeypot) {
    return { valid: false, error: "Spam detected" };
  }

  // Helper to trim and measure length safely
  const trimLen = (val: any) => (typeof val === 'string' ? val.trim().length : 0);

  if (!body.from_name || typeof body.from_name !== 'string' || trimLen(body.from_name) === 0) {
    return { valid: false, error: "Missing or invalid name" };
  }
  if (trimLen(body.from_name) > 100) return { valid: false, error: "Name is too long (max 100 characters)" };

  if (!body.from_email || typeof body.from_email !== 'string') {
    return { valid: false, error: "Missing or invalid email" };
  }
  if (trimLen(body.from_email) > 255) return { valid: false, error: "Email is too long" };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.from_email)) {
    return { valid: false, error: "Invalid email address format" };
  }

  if (body.company && trimLen(body.company) > 150) {
    return { valid: false, error: "Company name is too long (max 150 characters)" };
  }

  if (body.message && trimLen(body.message) > 10000) {
    return { valid: false, error: "Message is too long (max 10,000 characters)" };
  }

  if (body.business_problem && trimLen(body.business_problem) > 10000) {
    return { valid: false, error: "Business problem description is too long (max 10,000 characters)" };
  }

  if (body.project_links) {
    if (trimLen(body.project_links) > 5000) {
      return { valid: false, error: "Project links are too long (max 5,000 characters)" };
    }
    const lines = body.project_links.split('\n').map((l: string) => l.trim()).filter(Boolean);
    for (const line of lines) {
      try {
        const url = new URL(line);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') {
          return { valid: false, error: `Invalid project link protocol (must be http or https): ${line}` };
        }
      } catch (e) {
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
      // Validate that it's a parseable URL
      const url = new URL(line);
      // Ensure it's http/https
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
    } catch (e) {
      // Ignore invalid URLs silently or we could add them as plain text. 
      // User request: "I would not silently discard invalid URLs without telling the user, though. Better to return a validation error if a supplied project link isn’t valid."
      // Since this function is called during parsing, not validation, we will just include it as raw text if it doesn't parse, or we can handle it.
      // Given the user's note, wait - I should throw a validation error during the validation phase instead. But for now, we will just leave it as raw text if it doesn't start with http to support natural language links like "Here is my drive: google.com/...". Let's assume if it starts with http it must be valid.
      // We will just do a basic fallback here.
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
