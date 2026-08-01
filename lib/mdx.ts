import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import GithubSlugger from 'github-slugger';
import { AnyContent, BaseContent, ContentType, TocEntry } from './content-model';
import { siteConfig } from './site';

const contentDirectory = path.join(process.cwd(), 'content');

export function getMdxFiles(dir: string) {
  const dirPath = path.join(contentDirectory, dir);
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath).filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));
}

function parseToc(content: string): TocEntry[] {
  const slugger = new GithubSlugger();
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TocEntry[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1').replace(/[\*`_]/g, '');
    const id = slugger.slug(text);
    toc.push({ id, text, level });
  }

  return toc;
}

export function getContentBySlug(type: ContentType, slug: string): AnyContent | null {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const dirPath = path.join(contentDirectory, type);
  
  let fullPath = path.join(dirPath, `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(dirPath, `${realSlug}.md`);
  }
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);
  
  const baseContent: BaseContent = {
    slug: realSlug,
    type,
    title: data.title || 'Untitled',
    description: data.description || '',
    domain: data.domain,
    category: data.category,
    topic: data.topic,
    tags: data.tags || [],
    series: data.series,
    publishedAt: data.date || data.publishedAt || new Date().toISOString(),
    updatedAt: data.updatedAt,
    author: data.author || siteConfig.founder,
    readingTime: stats.text,
    coverImage: data.coverImage,
    content,
    toc: parseToc(content),
  };

  return baseContent as AnyContent;
}

export function getAllContent(type?: ContentType): AnyContent[] {
  const typesToFetch: ContentType[] = type ? [type] : ['blog', 'research', 'whitepapers', 'case-studies', 'resources'];
  
  const allContent: AnyContent[] = [];

  for (const t of typesToFetch) {
    const slugs = getMdxFiles(t);
    for (const slug of slugs) {
      const post = getContentBySlug(t, slug);
      if (post) allContent.push(post);
    }
  }

  return allContent.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA; // descending
  });
}

// Backward compatibility or convenience
export function getMdxBySlug(dir: string, slug: string) {
  return getContentBySlug(dir as ContentType, slug);
}

export function getAllMdx(dir: string) {
  return getAllContent(dir as ContentType);
}

// Extract related posts based on rich taxonomy (tags, category, topic, series)
export function getRelatedPosts(currentSlug: string, current: BaseContent, limit: number = 3): AnyContent[] {
  const allPosts = getAllContent();
  return allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      
      // Series match is highly relevant
      if (post.series && current.series && post.series.name === current.series.name) {
        score += 15;
      }
      
      // Category match
      if (post.category && current.category && post.category === current.category) {
        score += 7;
      }
      
      // Topic match
      if (post.topic && current.topic && post.topic === current.topic) {
        score += 7;
      }

      // Tag overlap
      const tagMatchCount = (post.tags || []).filter(tag => (current.tags || []).includes(tag)).length;
      score += tagMatchCount * 3;

      return { post, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      // fallback to recency
      return new Date(b.post.publishedAt).getTime() - new Date(a.post.publishedAt).getTime();
    })
    .map(({ post }) => post)
    .slice(0, limit);
}
