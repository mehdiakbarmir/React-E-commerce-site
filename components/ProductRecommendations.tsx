"use client";

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductRecommendationsProps {
  currentProductId: string;
  category?: string;
  title?: string;
}

export default function ProductRecommendations({ 
  currentProductId, 
  category,
  title = "You May Also Like"
}: ProductRecommendationsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, you would fetch recommendations from an API
    // For now, we'll simulate with a timeout
    const fetchRecommendations = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // In a real app, this would be an API call
        // For now, we'll import from a mock data file
        const { products } = await import('@/data/products');
        
        // Filter out the current product and get products in the same category if specified
        const filtered = products.filter(product => 
          product.id !== currentProductId && 
          (!category || product.category === category)
        ).slice(0, 4);
        
        setProducts(filtered);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchRecommendations();
  }, [currentProductId, category]);
  
  // Scroll functionality for mobile
  const scrollContainer = (direction: 'left' | 'right') => {
    const container = document.getElementById('recommendations-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  if (isLoading) {
    return (
      <div className="py-12">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 aspect-[3/4] rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  if (products.length === 0) {
    return null;
  }
  
  return (
    <div className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">{title}</h2>
        
        <div className="hidden md:flex items-center gap-2">
          <button 
            onClick={() => scrollContainer('left')}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label="Previous recommendations"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scrollContainer('right')}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            aria-label="Next recommendations"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div 
        id="recommendations-container"
        className="flex overflow-x-auto gap-6 pb-4 md:grid md:grid-cols-4 scrollbar-hide"
      >
        {products.map(product => (
          <div key={product.id} className="w-64 md:w-auto flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
} 