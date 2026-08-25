export function calculateLeadScore(data: Record<string, any>): { score: number, reasons: string[] } {
  let score = 0;
  const reasons: string[] = [];

  // Timeline scoring
  if (data.timeline) {
    if (data.timeline.toLowerCase().includes('immediate') || data.timeline.toLowerCase().includes('1 month')) {
      score += 25;
      reasons.push("Project starts within 30 days");
    } else if (data.timeline.toLowerCase().includes('1-3 months')) {
      score += 15;
      reasons.push("Project starts within 1-3 months");
    }
  }

  // Budget scoring
  if (data.budget) {
    if (data.budget.includes('$10k') || data.budget.includes('$25k') || data.budget.includes('$50k+')) {
      score += 30;
      reasons.push("High value budget tier");
    } else if (data.budget.includes('$5k')) {
      score += 15;
      reasons.push("Standard budget tier");
    }
  }

  // Completeness scoring
  if (data.business_problem && data.business_problem.length > 50) {
    score += 15;
    reasons.push("Clear problem description provided");
  }

  if (data.project_links && data.project_links.length > 0 && !data.project_links.includes('None')) {
    score += 10;
    reasons.push("Reference materials provided");
  }

  if (data.ai_required) {
    score += 20;
    reasons.push("AI product opportunity");
  }

  return {
    score: Math.min(score, 100),
    reasons
  };
}
