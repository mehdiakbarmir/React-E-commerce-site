"use client";

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

export default function SafeImage(props: ImageProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div 
        className="bg-gray-200 animate-pulse"
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: props.width && props.height ? `${props.width}/${props.height}` : undefined
        }}
      />
    );
  }

  return <Image {...props} />;
} 