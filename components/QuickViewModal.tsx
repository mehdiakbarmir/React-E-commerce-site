"use client";

import { useState, useEffect } from 'react';
import { X, ShoppingBag, Heart } from 'lucide-react';
import SafeImage from './SafeImage';
import { Product } from '@/types';
import Link from 'next/link';
import AnimatedButton from './ui/AnimatedButton';

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  
  // Close modal when pressing escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-secondary-900 z-10"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <SafeImage 
              src={product.image} 
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {product.onSale && (
              <div className="absolute top-4 right-4 bg-accent-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                SALE
              </div>
            )}
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
            <p className="text-secondary-500 mb-4">{product.category}</p>
            
            <div className="flex items-center gap-2 mb-6">
              {product.onSale && product.salePrice ? (
                <>
                  <span className="text-2xl font-bold text-accent-600">${product.salePrice.toFixed(2)}</span>
                  <span className="text-secondary-400 line-through">${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-2xl font-bold text-secondary-900">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-secondary-700 mb-6">{product.description || "A premium quality product designed for comfort and style."}</p>
            
            {/* Size selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h4 className="font-medium mb-2">Size</h4>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 border rounded-md ${
                        selectedSize === size 
                          ? 'border-primary-600 bg-primary-50 text-primary-700' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Color selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h4 className="font-medium mb-2">Color</h4>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color ? 'ring-2 ring-primary-600 ring-offset-2' : ''
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Select ${color} color`}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity selector */}
            <div className="mb-6">
              <h4 className="font-medium mb-2">Quantity</h4>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-l-md"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 h-10 border-t border-b border-gray-300 text-center"
                />
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-r-md"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <AnimatedButton variant="primary" className="flex-1">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </AnimatedButton>
              <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
            </div>
            
            <Link 
              href={`/products/${product.id}`}
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
            >
              View Full Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 