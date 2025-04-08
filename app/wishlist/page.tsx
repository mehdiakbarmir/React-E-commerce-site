"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Trash2, AlertCircle } from "lucide-react";
import HydrationSafe from "@/components/HydrationSafe";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1,
      selectedColor: product.colors?.[0] || null,
      selectedSize: product.sizes?.[2] || null // Default to M if available
    });
  };
  
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        {items.length > 0 && (
          <button 
            onClick={clearWishlist}
            className="text-red-500 hover:text-red-700 flex items-center"
          >
            <Trash2 size={18} className="mr-1" />
            Clear Wishlist
          </button>
        )}
      </div>
      
      {items.length === 0 ? (
        <HydrationSafe className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
            <Heart size={32} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Your Wishlist is Empty</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Items added to your wishlist will appear here.
          </p>
          <Link 
            href="/products" 
            className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
          >
            Explore Products
          </Link>
        </HydrationSafe>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((product) => (
            <HydrationSafe key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden group">
              <div className="relative">
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={product.images?.[0] || "/images/placeholder-product.jpg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <Heart size={18} className="text-red-500 fill-red-500" />
                </button>
                {product.onSale && (
                  <div className="absolute top-3 left-3 bg-accent-600 text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-semibold mb-1 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    {product.onSale && product.salePrice ? (
                      <div className="flex items-center">
                        <span className="font-bold text-accent-600">${product.salePrice.toFixed(2)}</span>
                        <span className="ml-2 text-gray-500 line-through text-sm">${product.price.toFixed(2)}</span>
                      </div>
                    ) : (
                      <span className="font-bold">${product.price.toFixed(2)}</span>
                    )}
                  </div>
                  
                  {product.inStock ? (
                    <span className="text-green-600 dark:text-green-400 text-sm">In Stock</span>
                  ) : (
                    <span className="text-red-500 text-sm flex items-center">
                      <AlertCircle size={14} className="mr-1" />
                      Out of Stock
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock}
                  className={`w-full flex items-center justify-center py-2 rounded-md transition-colors ${
                    product.inStock 
                      ? "bg-primary-600 text-white hover:bg-primary-700" 
                      : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </HydrationSafe>
          ))}
        </div>
      )}
    </div>
  );
} 