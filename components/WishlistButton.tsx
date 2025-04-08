"use client";

import { Heart } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { Product } from '@/types';

interface WishlistButtonProps {
  product: Product;
  variant?: 'icon' | 'button';
  className?: string;
}

export default function WishlistButton({ 
  product, 
  variant = 'icon',
  className = ''
}: WishlistButtonProps) {
  const { toggleItem, isInWishlist } = useWishlist();
  const isActive = isInWishlist(product.id);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(product);
  };
  
  if (variant === 'icon') {
    return (
      <button
        onClick={handleClick}
        className={`p-2 rounded-full transition-colors active:scale-90 transition-transform ${
          isActive 
            ? 'text-red-500 hover:bg-red-50' 
            : 'text-gray-500 hover:bg-gray-100'
        } ${className}`}
        aria-label={isActive ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart 
          size={20} 
          className={isActive ? "fill-red-500" : ""} 
        />
      </button>
    );
  }
  
  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center px-4 py-2 rounded-md border transition-colors ${
        isActive 
          ? 'border-red-500 text-red-500 hover:bg-red-50' 
          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
      } ${className}`}
      aria-label={isActive ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart 
        size={18} 
        className={`mr-2 ${isActive ? "fill-red-500" : ""}`} 
      />
      {isActive ? "Added to Wishlist" : "Add to Wishlist"}
    </button>
  );
} 