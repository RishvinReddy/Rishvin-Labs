import * as React from 'react';
import { Text } from '@react-email/components';

export const Footer = () => {
  return (
    <div className="bg-[#09090b] text-center px-[34px] py-[32px] border-t border-[#27272a]">
      <Text className="text-[11px] font-medium text-zinc-500 m-0 mb-[8px]">
        © {new Date().getFullYear()} Rishvin Labs. All rights reserved.
      </Text>
      <Text className="text-[10px] text-zinc-600 m-0">
        This is an automated system message. Please do not reply directly unless instructed.
      </Text>
    </div>
  );
};

export default Footer;
