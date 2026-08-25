import * as React from 'react';
import { Text, Button } from '@react-email/components';

interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const ActionCard = ({ title, description, buttonText, buttonLink }: ActionCardProps) => {
  return (
    <div className="bg-[#18181b] border border-[#27272a] rounded-[16px] p-[32px] text-center shadow-lg">
      <Text className="m-0 mb-[12px] font-bold text-[20px] text-white tracking-tight">{title}</Text>
      <Text className="m-0 mb-[28px] text-[14px] text-zinc-400 leading-[1.6]">{description}</Text>
      <Button 
        href={buttonLink}
        className="bg-white text-[#09090b] font-bold text-[14px] px-[28px] py-[14px] rounded-[10px]"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ActionCard;
