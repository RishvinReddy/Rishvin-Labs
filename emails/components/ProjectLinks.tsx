import * as React from 'react';
import { Text } from '@react-email/components';

interface ProjectLinksProps {
  links: string;
}

export const ProjectLinks = ({ links }: ProjectLinksProps) => {
  if (!links || links === 'None provided') {
    return <Text className="m-0 text-[14px] text-[#71717a]">No project resources provided.</Text>;
  }

  const formattedLinks = links.split('\n\n');

  return (
    <div className="bg-[#18181b] border border-[#27272a] rounded-[12px] p-[20px]">
      {formattedLinks.map((linkStr, i) => {
        const parts = linkStr.split(': ');
        const domain = parts[0];
        const url = parts[1] || parts[0];
        
        return (
          <div key={i} className="mb-[12px]">
            <Text className="m-0 mb-[2px] font-semibold text-[13px] text-zinc-200">{domain}</Text>
            {url !== domain ? (
               <a href={url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-blue-400 underline">
                 {url}
               </a>
            ) : (
               <Text className="m-0 text-[13px] text-zinc-400">{url}</Text>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectLinks;
