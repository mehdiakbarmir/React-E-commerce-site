"use client";

import { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
  size?: string;
  color?: string;
  variant?: 'primary' | 'secondary' | 'small';
  className?: string;
}

export default function AddToCartButton({ 
  product, 
  quantity = 1,
  size,
  color,
  variant = 'primary',
  className = ''
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = () => {
    addItem(product, quantity, size, color);
    setIsAdded(true);
    
    // Reset the added state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };
  
  const getButtonClasses = () => {
    const baseClasses = "transition-colors font-medium flex items-center justify-center";
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 ${className}`;
      case 'secondary':
        return `${baseClasses} w-full border border-primary-600 text-primary-600 px-6 py-3 rounded-md hover:bg-primary-50 ${className}`;
      case 'small':
        return `${baseClasses} bg-primary-600 text-white px-3 py-2 rounded-md hover:bg-primary-700 text-sm ${className}`;
      default:
        return `${baseClasses} w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 ${className}`;
    }
  };
  
  return (
    <button
      onClick={handleAddToCart}
      className={`${getButtonClasses()} active:scale-95 transition-transform`}
      disabled={isAdded}
    >
      {isAdded ? (
        <>
          <Check className="mr-2 h-5 w-5" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingBag className="mr-2 h-5 w-5" />
          Add to Cart
        </>
      )}
    </button>
  );
} 