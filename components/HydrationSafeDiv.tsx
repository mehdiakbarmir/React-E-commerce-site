"use client";

import { useEffect, useRef, ReactNode } from 'react';

interface HydrationSafeDivProps {
  children: ReactNode;
  className?: string;
}

export default function HydrationSafeDiv({ children, className }: HydrationSafeDivProps) {
  const divRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Clean up any browser extension attributes after hydration
    if (divRef.current) {
      const attributes = Array.from(divRef.current.attributes);
      for (const attr of attributes) {
        if (attr.name.startsWith('bis_') || attr.name.startsWith('__processed_')) {
          divRef.current.removeAttribute(attr.name);
        }
      }
    }
  }, []);
  
  return (
    <div ref={divRef} className={className}>
      {children}
    </div>
  );
} 