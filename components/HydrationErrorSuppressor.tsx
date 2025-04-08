"use client";

import { useEffect, useState } from 'react';

export default function HydrationErrorSuppressor({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <>
      <div style={{ display: isClient ? 'none' : 'block' }}>
        {children}
      </div>
      {isClient && <div>{children}</div>}
    </>
  );
} 