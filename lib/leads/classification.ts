export function classifyLead(data: Record<string, unknown>): { category: string; priority: 'Low' | 'Medium' | 'High' | 'Critical' } {
  const serviceId = typeof data.serviceId === 'string' ? data.serviceId : undefined;
  const serviceName = typeof data.serviceName === 'string' ? data.serviceName : undefined;
  const category = serviceId || serviceName || 'General Inquiry';
  
  let priority: 'Low' | 'Medium' | 'High' | 'Critical' = 'Medium';
  const budget = typeof data.budget === 'string' ? data.budget : '';
  const timeline = typeof data.timeline === 'string' ? data.timeline : '';
  
  if (budget && (budget.includes('$25k') || budget.includes('$50k+') || budget.includes('₹50,000+'))) {
    priority = 'High';
  }
  
  if (timeline && timeline.toLowerCase().includes('immediate')) {
    priority = priority === 'High' ? 'Critical' : 'High';
  }

  return { category, priority };
}
