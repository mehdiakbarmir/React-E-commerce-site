"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Product } from "@/types";
import SafeImage from "./SafeImage";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product page
    setIsAddingToCart(true);
    
    // If the product has no size/color options, add it directly
    if (!product.sizes?.length && !product.colors?.length) {
      addToCart({
        ...product,
        quantity: 1
      });
      setIsAddingToCart(false);
    } else {
      // If product has options, navigate to product page
      window.location.href = `/products/${product.id}`;
    }
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product page
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link 
      href={`/products/${product.id}`}
      className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {product.onSale && (
          <div className="absolute top-3 left-3 bg-accent-600 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2 line-clamp-1">{product.name}</h3>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            {product.onSale ? (
              <div className="flex items-center">
                <span className="text-accent-600 font-bold">${product.salePrice?.toFixed(2)}</span>
                <span className="ml-2 text-gray-500 line-through text-sm">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          {/* Wishlist Button */}
          <button
            onClick={toggleWishlist}
            className="text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart
              size={20}
              className={isInWishlist(product.id) ? "fill-red-500 text-red-500" : ""}
            />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isAddingToCart || !product.inStock}
          className={`w-full py-2 px-4 rounded-md flex items-center justify-center transition-colors ${
            product.inStock
              ? "bg-primary-600 text-white hover:bg-primary-700"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          <ShoppingBag size={18} className="mr-2" />
          {product.inStock
            ? (product.sizes?.length || product.colors?.length)
              ? "Select Options"
              : "Add to Cart"
            : "Out of Stock"}
        </button>
      </div>
    </Link>
  );
} 