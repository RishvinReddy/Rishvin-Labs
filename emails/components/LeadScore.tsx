import * as React from 'react';
import { Text } from '@react-email/components';

interface LeadScoreProps {
  score: number;
  reasons: string[];
}

export const LeadScore = ({ score, reasons }: LeadScoreProps) => {
  let color = '#a1a1aa'; // default gray (zinc-400)
  let label = 'STANDARD';

  if (score >= 80) {
    color = '#22c55e'; // green-500
    label = 'HOT LEAD';
  } else if (score >= 50) {
    color = '#eab308'; // yellow-500
    label = 'WARM LEAD';
  }

  return (
    <div className="bg-[#18181b] border border-[#27272a] rounded-[12px] p-[24px] mb-[24px]">
      <Text className="m-0 font-bold text-[18px] tracking-tight" style={{ color }}>
        {label} — {score}/100
      </Text>
      
      {reasons && reasons.length > 0 && (
        <div className="mt-[16px] border-t border-[#27272a] pt-[16px]">
          <Text className="m-0 mb-[12px] text-[12px] text-zinc-400 font-medium tracking-wide uppercase">
            Why this lead is high priority:
          </Text>
          <ul className="m-0 pl-[16px] text-[13px] text-zinc-300 leading-[1.6]">
            {reasons.map((reason, i) => (
              <li key={i} className="mb-[6px]">{reason}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LeadScore;
