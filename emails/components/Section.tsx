import * as React from 'react';
import { Section as ReactEmailSection, Text } from '@react-email/components';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <ReactEmailSection className="px-[34px] py-[32px] border-b border-[#27272a]">
      {title && (
        <Text className="m-0 mb-[24px] font-bold text-[11px] text-zinc-400 uppercase tracking-widest">
          {title}
        </Text>
      )}
      <div className="text-zinc-300">
        {children}
      </div>
    </ReactEmailSection>
  );
};

export default Section;
