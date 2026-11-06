import { NextResponse } from 'next/server';
import { searchIndex, contentRegistry } from '@/lib/search-indexer';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const typeFilter = searchParams.get('type'); // optional filter (e.g., 'blog')
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  // Search across all fields
  const searchResults = searchIndex.search(query, {
    limit,
    suggest: true, // fuzzy suggestions
  });

  interface FlexFieldResult {
    field: string;
    result: (string | number)[];
  }

  // FlexSearch Document returns an array of field results
  const idScores = new Map<string, number>();

  (searchResults as unknown as FlexFieldResult[]).forEach((fieldResult) => {
    if (Array.isArray(fieldResult?.result)) {
      fieldResult.result.forEach((id, index) => {
        const idStr = String(id);
        const currentScore = idScores.get(idStr) || 0;
        idScores.set(idStr, currentScore + (100 - index)); 
      });
    }
  });

  // Sort IDs by our combined score
  const sortedIds = Array.from(idScores.entries())
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);

  // Map IDs back to content metadata
  let results = sortedIds
    .map((id) => contentRegistry.get(id))
    .filter(Boolean) as Record<string, unknown>[];

  // Apply filters if provided
  if (typeFilter) {
    results = results.filter((r) => r && r.type === typeFilter);
  }

  // Ensure we don't return more than the limit after filtering
  results = results.slice(0, limit);

  return NextResponse.json({ results });
}
