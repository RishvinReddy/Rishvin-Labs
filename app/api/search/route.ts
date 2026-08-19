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

  // FlexSearch Document returns an array of field results: 
  // [ { field: "title", result: ["id1", "id2"] }, { field: "content", result: ["id2"] } ]
  // We need to flatten and deduplicate the IDs.
  const idScores = new Map<string, number>();

  searchResults.forEach((fieldResult: any) => {
    // We can infer weight based on the field if we wanted, but flexsearch handles internal scoring.
    // We'll just collect unique IDs.
    fieldResult.result.forEach((id: string, index: number) => {
      // The lower the index, the higher the score inside this field
      const currentScore = idScores.get(id) || 0;
      idScores.set(id, currentScore + (100 - index)); 
    });
  });

  // Sort IDs by our combined score
  const sortedIds = Array.from(idScores.entries())
    .sort((a, b) => b[1] - a[1])
    .map(entry => entry[0]);

  // Map IDs back to content metadata
  let results = sortedIds
    .map(id => contentRegistry.get(id))
    .filter(Boolean); // remove nulls

  // Apply filters if provided
  if (typeFilter) {
    results = results.filter(r => r && (r as any).type === typeFilter);
  }

  // Ensure we don't return more than the limit after filtering
  results = results.slice(0, limit);

  return NextResponse.json({ results });
}
