"use client";

import { useState, useEffect, ReactNode } from 'react';

interface HydrationProviderProps {
  children: ReactNode;
}

export default function HydrationProvider({ children }: HydrationProviderProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      <div style={{ display: isHydrated ? 'none' : 'block' }}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      </div>
      <div style={{ display: isHydrated ? 'block' : 'none' }}>
        {children}
      </div>
    </>
  );
} 