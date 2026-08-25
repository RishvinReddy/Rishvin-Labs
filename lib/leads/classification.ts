export function classifyLead(data: Record<string, any>): { category: string, priority: 'Low' | 'Medium' | 'High' | 'Critical' } {
  const category = data.serviceId || data.serviceName || 'General Inquiry';
  
  let priority: 'Low' | 'Medium' | 'High' | 'Critical' = 'Medium';
  
  if (data.budget && (data.budget.includes('$25k') || data.budget.includes('$50k+'))) {
    priority = 'High';
  }
  
  if (data.timeline && data.timeline.toLowerCase().includes('immediate')) {
    priority = priority === 'High' ? 'Critical' : 'High';
  }

  return { category, priority };
}
