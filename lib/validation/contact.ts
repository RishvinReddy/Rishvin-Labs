export function validateContactPayload(body: any): { valid: boolean, error?: string } {
  if (!body) return { valid: false, error: "Empty payload" };

  if (body.honeypot) {
    return { valid: false, error: "Spam detected" };
  }

  if (!body.from_name || typeof body.from_name !== 'string') {
    return { valid: false, error: "Missing or invalid name" };
  }

  if (!body.from_email || typeof body.from_email !== 'string') {
    return { valid: false, error: "Missing or invalid email" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.from_email)) {
    return { valid: false, error: "Invalid email address format" };
  }

  return { valid: true };
}

export function parseProjectLinks(linksString?: string): string {
  if (!linksString || !linksString.trim()) return "None provided";
  
  const lines = linksString.split('\n').map((l: string) => l.trim()).filter(Boolean);
  return lines.map((line: string) => {
    if (line.startsWith('http')) {
      let domain = "External Reference";
      try {
        const url = new URL(line);
        if (url.hostname.includes('drive.google')) domain = 'Google Drive';
        else if (url.hostname.includes('figma.com')) domain = 'Figma';
        else if (url.hostname.includes('github.com')) domain = 'GitHub';
        else if (url.hostname.includes('notion.so') || url.hostname.includes('notion.site')) domain = 'Notion';
        else if (url.hostname.includes('dropbox.com')) domain = 'Dropbox';
        else if (url.hostname.includes('onedrive.live.com')) domain = 'OneDrive';
      } catch (e) {}
      return `${domain}: ${line}`;
    }
    return line; 
  }).join('\n\n');
}
