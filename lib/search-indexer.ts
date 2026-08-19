import FlexSearch from 'flexsearch';
import { getAllContent } from './mdx';

// We map string ids to the actual content to return rich results
export const contentRegistry = new Map<string, Record<string, unknown>>();

// Initialize FlexSearch Document Index
export const searchIndex = new FlexSearch.Document({
  document: {
    id: "id",
    index: [
      { field: "title", tokenize: "forward", resolution: 9 },
      { field: "tags", tokenize: "forward", resolution: 9 },
      { field: "category", tokenize: "forward", resolution: 9 },
      { field: "topic", tokenize: "forward", resolution: 9 },
      { field: "headings", tokenize: "forward", resolution: 9 },
      { field: "description", tokenize: "forward", resolution: 9 },
      { field: "content", tokenize: "strict", resolution: 9 }
    ],
    store: true
  }
});

let isBuilt = false;

export function buildIndex() {
  if (isBuilt) return;

  const allContent = getAllContent();

  allContent.forEach((post) => {
    const id = `${post.type}-${post.slug}`;
    const headings = post.toc.map(t => t.text).join(' ');
    
    const doc = {
      id,
      title: post.title,
      description: post.description,
      content: post.content,
      headings,
      tags: post.tags?.join(' ') || '',
      category: post.category || '',
      topic: post.topic || '',
      domain: post.domain || '',
      author: post.author,
      series: post.series?.name || '',
      type: post.type,
      slug: post.slug,
      url: `/${post.type}/${post.slug}`,
      publishedAt: post.publishedAt
    };

    searchIndex.add(doc);

    // Store a lightweight version in the registry to return to client
    contentRegistry.set(id, {
      title: post.title,
      description: post.description,
      type: post.type,
      slug: post.slug,
      url: `/${post.type}/${post.slug}`,
      tags: post.tags,
      category: post.category,
      topic: post.topic,
      publishedAt: post.publishedAt
    });
  });

  isBuilt = true;
  console.log(`[Search Indexer] Built index with ${allContent.length} documents.`);
}

// Automatically build on module load (Server side only)
buildIndex();
