import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../app/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Clean up browser extension attributes on client side
    const cleanupAttributes = () => {
      document.querySelectorAll('*').forEach(el => {
        for (let i = 0; i < el.attributes.length; i++) {
          const attr = el.attributes[i];
          if (
            attr.name.startsWith('bis_') || 
            attr.name.startsWith('__') || 
            attr.name.includes('skin_checked') ||
            attr.name.includes('data-') && !attr.name.startsWith('data-next') ||
            attr.name === 'style' && attr.value === ''
          ) {
            el.removeAttribute(attr.name);
            i--; // Adjust index since we're removing items
          }
        }
      });
    };
    
    // Run cleanup immediately and periodically
    cleanupAttributes();
    const interval = setInterval(cleanupAttributes, 100);
    
    return () => clearInterval(interval);
  }, []);

  return <Component {...pageProps} />;
} 