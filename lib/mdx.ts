import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export type BlogPostFrontmatter = {
  title: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
  slug: string;
};

export type BlogPost = {
  frontmatter: BlogPostFrontmatter;
  content: string;
  slug: string;
};

export function getBlogSlugs() {
  if (!fs.existsSync(blogDirectory)) return [];
  return fs.readdirSync(blogDirectory).filter((file) => file.endsWith('.mdx'));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(blogDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug: realSlug,
    frontmatter: data as BlogPostFrontmatter,
    content,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.frontmatter.date > post2.frontmatter.date ? -1 : 1));
  
  return posts;
}
