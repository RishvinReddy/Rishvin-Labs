import * as React from 'react';
import { Text } from '@react-email/components';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  let bgColor = '#27272a'; // zinc-800
  let textColor = '#d4d4d8'; // zinc-300
  let border = '1px solid #3f3f46';

  if (variant === 'success') {
    bgColor = 'rgba(34, 197, 94, 0.1)'; // green-500/10
    textColor = '#4ade80'; // green-400
    border = '1px solid rgba(34, 197, 94, 0.2)';
  } else if (variant === 'warning') {
    bgColor = 'rgba(234, 179, 8, 0.1)'; // yellow-500/10
    textColor = '#facc15'; // yellow-400
    border = '1px solid rgba(234, 179, 8, 0.2)';
  } else if (variant === 'error') {
    bgColor = 'rgba(239, 68, 68, 0.1)'; // red-500/10
    textColor = '#f87171'; // red-400
    border = '1px solid rgba(239, 68, 68, 0.2)';
  }

  return (
    <span style={{ 
      backgroundColor: bgColor, 
      color: textColor, 
      border: border,
      padding: '4px 8px', 
      borderRadius: '6px', 
      fontSize: '11px', 
      fontWeight: 600,
      display: 'inline-block' 
    }}>
      {children}
    </span>
  );
};

export default Badge;
