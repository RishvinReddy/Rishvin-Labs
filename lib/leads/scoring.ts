export function calculateLeadScore(data: Record<string, unknown>): { score: number, reasons: string[] } {
  let score = 0;
  const reasons: string[] = [];

  const timeline = typeof data.timeline === 'string' ? data.timeline.toLowerCase() : '';
  const budget = typeof data.budget === 'string' ? data.budget : '';
  const businessProblem = typeof data.business_problem === 'string' ? data.business_problem : '';
  const projectLinks = typeof data.project_links === 'string' ? data.project_links : '';
  const aiRequired = Boolean(data.ai_required);

  // Timeline scoring
  if (timeline) {
    if (timeline.includes('immediate') || timeline.includes('1 month')) {
      score += 25;
      reasons.push("Project starts within 30 days");
    } else if (timeline.includes('1-3 months')) {
      score += 15;
      reasons.push("Project starts within 1-3 months");
    }
  }

  // Budget scoring
  if (budget) {
    if (budget.includes('$10k') || budget.includes('$25k') || budget.includes('$50k+') || budget.includes('₹50,000+')) {
      score += 30;
      reasons.push("High value budget tier");
    } else if (budget.includes('$5k') || budget.includes('₹10,000')) {
      score += 15;
      reasons.push("Standard budget tier");
    }
  }

  // Completeness scoring
  if (businessProblem && businessProblem.length > 50) {
    score += 15;
    reasons.push("Clear problem description provided");
  }

  if (projectLinks && projectLinks.length > 0 && !projectLinks.includes('None')) {
    score += 10;
    reasons.push("Reference materials provided");
  }

  if (aiRequired) {
    score += 20;
    reasons.push("AI product opportunity");
  }

  return {
    score: Math.min(score, 100),
    reasons
  };
}
