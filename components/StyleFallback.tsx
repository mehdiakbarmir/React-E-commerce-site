"use client";

import { ReactNode } from 'react';

interface StyleFallbackProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function StyleFallback({ children, className, style }: StyleFallbackProps) {
  // Default styles that will be applied if Tailwind fails
  const defaultStyles: React.CSSProperties = {
    fontFamily: 'var(--font-inter), sans-serif',
    color: '#1a1a1a',
    ...style
  };
  
  return (
    <div className={className} style={defaultStyles}>
      {children}
    </div>
  );
} 