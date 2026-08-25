import * as React from 'react';
import { Text, Row, Column } from '@react-email/components';

interface InfoItemProps {
  label: string;
  value: React.ReactNode;
}

export const InfoItem = ({ label, value }: InfoItemProps) => {
  return (
    <div className="mb-[18px]">
      <Text className="m-0 mb-[4px] text-[12px] text-zinc-400">{label}</Text>
      <Text className="m-0 text-[14px] text-zinc-100 leading-[1.4] font-medium">
        {value}
      </Text>
    </div>
  );
};

interface InfoGridProps {
  items: { label: string; value: React.ReactNode }[];
}

export const InfoGrid = ({ items }: InfoGridProps) => {
  const midpoint = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, midpoint);
  const rightItems = items.slice(midpoint);

  return (
    <Row>
      <Column className="w-[50%] align-top pr-2">
        {leftItems.map((item, i) => (
          <InfoItem key={`left-${i}`} label={item.label} value={item.value} />
        ))}
      </Column>
      <Column className="w-[50%] align-top pl-2">
        {rightItems.map((item, i) => (
          <InfoItem key={`right-${i}`} label={item.label} value={item.value} />
        ))}
      </Column>
    </Row>
  );
};

export default InfoGrid;
