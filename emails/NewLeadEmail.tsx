import * as React from 'react';
import { Text } from '@react-email/components';
import { EmailShell } from './components/EmailShell';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Section } from './components/Section';
import { InfoGrid } from './components/InfoGrid';
import { Badge } from './components/Badge';
import { LeadScore } from './components/LeadScore';
import { ProjectLinks } from './components/ProjectLinks';

export interface NewLeadEmailProps {
  inquiryId: string;
  leadScore: number;
  leadScoreReasons: string[];
  classificationCategory: string;
  classificationPriority: 'Low' | 'Medium' | 'High' | 'Critical';
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientRole: string;
  clientCompany: string;
  clientWebsite: string;
  projectName: string;
  services: string;
  budget: string;
  timeline: string;
  businessProblem: string;
  projectLinks: string;
  source: string;
  submittedAt: string;
}

export const NewLeadEmail = ({
  inquiryId = "RL-2026-0000",
  leadScore = 0,
  leadScoreReasons = [],
  classificationCategory = "General",
  classificationPriority = "Medium",
  clientName = "John Doe",
  clientEmail = "john@example.com",
  clientPhone = "Not provided",
  clientRole = "Not specified",
  clientCompany = "Not specified",
  clientWebsite = "Not specified",
  projectName = "New Project",
  services = "Not specified",
  budget = "Not specified",
  timeline = "Not specified",
  businessProblem = "No details provided.",
  projectLinks = "None provided",
  source = "Website",
  submittedAt = new Date().toLocaleString()
}: NewLeadEmailProps) => {
  return (
    <EmailShell previewText={`New Lead: ${projectName} from ${clientName}`}>
      <Header title="NEW INQUIRY" />
      
      <Section>
        <LeadScore score={leadScore} reasons={leadScoreReasons} />
        
        <InfoGrid items={[
          { label: 'Inquiry ID', value: inquiryId },
          { label: 'Source', value: source },
          { label: 'Submitted At', value: submittedAt },
          { label: 'Priority', value: <Badge variant={classificationPriority === 'Critical' || classificationPriority === 'High' ? 'error' : 'warning'}>{classificationPriority.toUpperCase()}</Badge> },
        ]} />
      </Section>

      <Section title="Client Profile">
        <InfoGrid items={[
          { label: 'Name', value: clientName },
          { label: 'Email', value: <a href={`mailto:${clientEmail}`} className="text-blue-400 underline">{clientEmail}</a> },
          { label: 'Phone', value: clientPhone },
          { label: 'Role', value: clientRole },
          { label: 'Company', value: clientCompany },
          { label: 'Website', value: clientWebsite !== 'Not specified' && clientWebsite !== 'Not provided' ? <a href={clientWebsite.startsWith('http') ? clientWebsite : `https://${clientWebsite}`} className="text-blue-400 underline">{clientWebsite}</a> : clientWebsite },
        ]} />
      </Section>

      <Section title="Project Details">
        <InfoGrid items={[
          { label: 'Project Name', value: projectName },
          { label: 'Category', value: classificationCategory },
          { label: 'Services', value: services },
          { label: 'Budget', value: budget },
          { label: 'Timeline', value: timeline },
        ]} />
      </Section>

      <Section title="Business Problem & Requirements">
        <Text className="m-0 text-[14px] text-zinc-300 leading-[1.6]">
          {businessProblem}
        </Text>
      </Section>

      <Section title="Project Resources">
        <ProjectLinks links={projectLinks} />
      </Section>
      
      <Footer />
    </EmailShell>
  );
};

export default NewLeadEmail;
