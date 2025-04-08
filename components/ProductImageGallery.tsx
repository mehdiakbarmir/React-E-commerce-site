"use client";

import { useState } from 'react';
import SafeImage from './SafeImage';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };
  
  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };
  
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  
  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
        <div 
          className={`relative w-full h-full transition-transform duration-300 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
          onClick={toggleZoom}
        >
          <SafeImage 
            src={images[activeIndex]} 
            alt={`${productName} - Image ${activeIndex + 1}`}
            fill
            className={`object-contain transition-transform duration-500 ${isZoomed ? 'scale-150' : 'scale-100'}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        
        <button 
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
        
        <button 
          onClick={(e) => { e.stopPropagation(); toggleZoom(); }}
          className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label={isZoomed ? "Zoom out" : "Zoom in"}
        >
          <ZoomIn size={20} />
        </button>
      </div>
      
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 ${
              index === activeIndex ? 'ring-2 ring-primary-600' : 'ring-1 ring-gray-200'
            }`}
          >
            <SafeImage 
              src={image} 
              alt={`${productName} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
} 