export type ContentDomain = 'Cybersecurity' | 'Software Engineering' | 'Company' | 'Research';
export type ContentType = 'blog' | 'research' | 'whitepapers' | 'case-studies' | 'resources';

export interface TocEntry {
  id: string;
  text: string;
  level: number;
}

export interface BaseContent {
  slug: string;
  type: ContentType;
  title: string;
  description: string;
  domain?: ContentDomain;
  category?: string;
  topic?: string;
  tags?: string[];
  series?: {
    name: string;
    part: number;
  };
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readingTime?: string;
  coverImage?: string;
  content: string; // raw MDX body
  toc: TocEntry[];
}

export interface BlogPost extends BaseContent {
  type: 'blog';
}

export interface ResearchPaper extends BaseContent {
  type: 'research';
}

export interface CaseStudy extends BaseContent {
  type: 'case-studies';
}

export interface Whitepaper extends BaseContent {
  type: 'whitepapers';
}

export interface Resource extends BaseContent {
  type: 'resources';
  downloadUrl?: string;
  format?: string;
  size?: string;
}

export type AnyContent = BlogPost | ResearchPaper | CaseStudy | Whitepaper | Resource;
