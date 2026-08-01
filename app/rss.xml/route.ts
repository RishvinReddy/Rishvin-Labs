import { getAllMdx } from "@/lib/mdx";
import { siteConfig } from "@/lib/site";

export async function GET() {
  const SITE_URL = siteConfig.url;
  
  const blogPosts = getAllMdx("blog").map((p) => ({ ...p, dir: "blog" }));
  const researchPosts = getAllMdx("research").map((p) => ({ ...p, dir: "research" }));
  const whitepapers = getAllMdx("whitepapers").map((p) => ({ ...p, dir: "whitepapers" }));
  
  const allContent = [...blogPosts, ...researchPosts, ...whitepapers].sort((a, b) => {
    return (a.publishedAt && b.publishedAt && a.publishedAt < b.publishedAt) ? 1 : -1;
  });

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${siteConfig.name}</title>
      <link>${SITE_URL}</link>
      <description>${siteConfig.description}</description>
      <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
      ${allContent
        .map((post) => {
          return `
            <item>
              <title><![CDATA[${post.title}]]></title>
              <link>${SITE_URL}/${post.dir}/${post.slug}</link>
              <guid>${SITE_URL}/${post.dir}/${post.slug}</guid>
              <description><![CDATA[${post.description}]]></description>
              ${post.publishedAt ? `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>` : ''}
            </item>
          `;
        })
        .join("")}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
