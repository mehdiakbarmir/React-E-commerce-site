"use client";

import { useEffect, useState } from "react";

export default function HydrationFix({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div style={{ visibility: isClient ? 'visible' : 'hidden' }}>
        {children}
      </div>
      {!isClient && (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      )}
    </>
  );
} 