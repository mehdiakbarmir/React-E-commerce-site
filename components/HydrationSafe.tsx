"use client";

import React, { useState, useEffect, ReactNode } from "react";

interface HydrationSafeProps {
  children: ReactNode;
  className?: string;
}

/**
 * A component that prevents hydration errors by only rendering its children on the client side
 */
export default function HydrationSafe({ children, className }: HydrationSafeProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div className={className}>{children}</div>;
} 