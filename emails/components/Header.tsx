import * as React from 'react';
import { Row, Column, Text } from '@react-email/components';

interface HeaderProps {
  title?: string;
}

export const Header = ({ title = "RISHVIN LABS" }: HeaderProps) => {
  return (
    <div className="bg-[#09090b] text-white px-[34px] py-[30px] border-b border-[#27272a]">
      <Row>
        <Column align="left">
          <Row>
            <Column>
              <div className="w-[44px] h-[44px] rounded-[12px] bg-gradient-to-tr from-zinc-800 to-zinc-950 border border-zinc-700 text-white flex items-center justify-center font-bold text-[15px] shadow-sm">
                RL
              </div>
            </Column>
            <Column className="pl-4">
              <Text className="m-0 font-bold text-[16px] text-white tracking-tight">Rishvin Labs</Text>
              <Text className="m-0 font-medium text-[10px] text-zinc-400 uppercase tracking-widest mt-[4px]">
                {title}
              </Text>
            </Column>
          </Row>
        </Column>
      </Row>
    </div>
  );
};

export default Header;
