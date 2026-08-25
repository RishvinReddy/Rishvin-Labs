import * as React from 'react';
import { Text } from '@react-email/components';
import { EmailShell } from './components/EmailShell';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Section } from './components/Section';
import { InfoGrid } from './components/InfoGrid';
import { ActionCard } from './components/ActionCard';
import { LINKS } from '@/lib/constants';

export interface InquiryConfirmationEmailProps {
  clientName: string;
  inquiryId: string;
  projectName: string;
  services: string;
  timeline: string;
}

export const InquiryConfirmationEmail = ({
  clientName = "John Doe",
  inquiryId = "RL-2026-0000",
  projectName = "New Project",
  services = "Not specified",
  timeline = "Not specified",
}: InquiryConfirmationEmailProps) => {
  return (
    <EmailShell previewText={`We've received your project inquiry (${inquiryId})`}>
      <Header title="INQUIRY CONFIRMATION" />
      
      <Section>
        <Text className="m-0 mb-[16px] text-[15px] font-semibold text-zinc-100 tracking-tight">
          Hi {clientName},
        </Text>
        <Text className="m-0 mb-[16px] text-[14px] text-zinc-300 leading-[1.6]">
          Thank you for reaching out to Rishvin Labs. Your inquiry has been successfully received and our team is currently reviewing it.
        </Text>
        <Text className="m-0 text-[14px] text-zinc-400 leading-[1.6]">
          We aim to respond to all inquiries within 24 hours.
        </Text>
      </Section>

      <Section title="Project Summary">
        <InfoGrid items={[
          { label: 'Reference ID', value: inquiryId },
          { label: 'Project Name', value: projectName },
          { label: 'Service', value: services },
          { label: 'Timeline', value: timeline },
        ]} />
      </Section>

      <Section title="What Happens Next">
        <div className="bg-[#18181b] border border-[#27272a] rounded-[12px] p-[24px]">
          <ol className="m-0 pl-[20px] text-[14px] text-zinc-300 leading-[1.8]">
            <li className="mb-[8px]"><strong className="text-zinc-100 font-semibold">Requirements review</strong> — We analyze your submission.</li>
            <li className="mb-[8px]"><strong className="text-zinc-100 font-semibold">Initial qualification</strong> — We verify alignment with our services.</li>
            <li className="mb-[8px]"><strong className="text-zinc-100 font-semibold">Discovery discussion</strong> — We reach out to schedule a call.</li>
            <li className="mb-[8px]"><strong className="text-zinc-100 font-semibold">Technical assessment</strong> — We evaluate feasibility and scope.</li>
            <li><strong className="text-zinc-100 font-semibold">Proposal / next steps</strong> — We present a formal plan.</li>
          </ol>
        </div>
      </Section>

      <Section>
        <ActionCard 
          title="Need to discuss your project now?"
          description="You can book a 15-minute introductory call directly on our calendar, or simply reply to this email with any additional context."
          buttonText="Book a Discovery Call"
          buttonLink={LINKS.calendar}
        />
      </Section>
      
      <Footer />
    </EmailShell>
  );
};

export default InquiryConfirmationEmail;
