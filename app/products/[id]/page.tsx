"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, Share, Truck, RotateCcw, Shield, ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import HydrationSafe from "@/components/HydrationSafe";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Product } from "@/types";

// Mock product data
const product: Product = {
  id: "1",
  name: "Premium Cotton T-Shirt",
  price: 39.99,
  salePrice: 29.99,
  onSale: true,
  description: "Our premium cotton t-shirt offers exceptional comfort and durability. Made from 100% organic cotton, it features a classic fit that's perfect for everyday wear.",
  features: [
    "100% organic cotton",
    "Breathable fabric",
    "Reinforced stitching",
    "Pre-shrunk",
    "Machine washable"
  ],
  rating: 4.5,
  reviewCount: 128,
  images: [
    "/images/products/tshirt-white-1.jpg",
    "/images/products/tshirt-white-2.jpg",
    "/images/products/tshirt-white-3.jpg",
    "/images/products/tshirt-white-4.jpg"
  ],
  colors: ["White", "Black", "Navy", "Gray"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  sku: "TS-PRE-001",
  inStock: true,
  category: "T-Shirts",
  tags: ["Cotton", "Summer", "Basics"],
  image: "/images/products/tshirt-white-1.jpg"
};

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }
    
    addToCart({
      ...product,
      quantity,
      size: selectedSize,
      color: selectedColor,
      image: product.images?.[0] || product.image
    });
  };
  
  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Product Images */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-2 mt-4 md:mt-0">
            {product.images && product.images.length > 0 ? (
              product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-16 md:w-20 rounded-md overflow-hidden border-2 ${
                    selectedImage === index 
                      ? "border-primary-600" 
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))
            ) : (
              <p>No images available.</p>
            )}
            </div>
            
            <div className="relative aspect-square w-full rounded-lg overflow-hidden">
              <Image
                src={product.images![selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.onSale && (
                <div className="absolute top-4 left-4 bg-accent-600 text-white text-xs font-bold px-2 py-1 rounded">
                  SALE
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < Math.floor(product.rating ?? 0) ? "text-yellow-400 fill-yellow-400" : i < (product.rating ?? 0) "text-yellow-400 fill-yellow-400 half-filled" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              ({product.reviewCount} reviews)
            </span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              SKU: {product.sku}
            </span>
          </div>
          
          <div className="mb-6">
            {product.onSale ? (
              <div className="flex items-center">
                <span className="text-2xl font-bold text-accent-600">${product.salePrice.toFixed(2)}</span>
                <span className="ml-2 text-gray-500 line-through">${product.price.toFixed(2)}</span>
                <span className="ml-2 bg-accent-100 text-accent-800 text-xs font-medium px-2 py-0.5 rounded">
                  Save ${(product.price - product.salePrice).toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="mb-6">
            <h2 className="font-medium mb-2">Color</h2>
            <div className="flex flex-wrap gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedColor === color
                      ? "border-primary-600 bg-primary-50 text-primary-600"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="font-medium mb-2">Size</h2>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center border rounded-md ${
                    selectedSize === size
                      ? "border-primary-600 bg-primary-50 text-primary-600"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <Link href="/size-guide" className="text-sm text-primary-600 hover:underline mt-2 inline-block">
              Size Guide
            </Link>
          </div>
          
          <div className="mb-8">
            <h2 className="font-medium mb-2">Quantity</h2>
            <div className="flex items-center">
              <button
                onClick={decrementQuantity}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100"
              >
                <Minus size={16} />
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-16 h-10 border-t border-b border-gray-300 text-center"
              />
              <button
                onClick={incrementQuantity}
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center"
            >
              Add to Cart
            </button>
            <button
              onClick={toggleWishlist}
              className={`w-12 h-12 flex items-center justify-center border rounded-md ${
                isInWishlist(product.id)
                  ? "border-accent-600 text-accent-600"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <Heart size={20} className={isInWishlist(product.id) ? "fill-accent-600" : ""} />
            </button>
            <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-md hover:border-gray-400">
              <Share size={20} />
            </button>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <Truck size={20} className="mr-3 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Free Shipping</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Free standard shipping on orders over $75
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <RotateCcw size={20} className="mr-3 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Easy Returns</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  30-day return policy
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield size={20} className="mr-3 text-primary-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium">Secure Checkout</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  SSL encrypted payment processing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="mt-16">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap -mb-px">
            <button
              className={`inline-block py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === "description"
                  ? "border-primary-600 text-primary-600"
                  : "border-transparent hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`inline-block py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === "features"
                  ? "border-primary-600 text-primary-600"
                  : "border-transparent hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
            <button
              className={`inline-block py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === "reviews"
                  ? "border-primary-600 text-primary-600"
                  : "border-transparent hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({product.reviewCount})
            </button>
          </div>
        </div>
        
        <div className="py-6">
          {activeTab === "description" && (
            <div>
              <p className={`text-gray-700 dark:text-gray-300 ${!isDescriptionExpanded ? "line-clamp-3" : ""}`}>
                {product.description}
              </p>
              <button
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                className="text-primary-600 hover:underline mt-2 flex items-center text-sm"
              >
                {isDescriptionExpanded ? (
                  <>
                    Show Less <ChevronUp size={16} className="ml-1" />
                  </>
                ) : (
                  <>
                    Show More <ChevronDown size={16} className="ml-1" />
                  </>
                )}
              </button>
            </div>
          )}
          
          {activeTab === "features" && (
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
          
          {activeTab === "reviews" && (
            <div>
              <div className="flex items-center mb-6">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : i < product.rating ? "text-yellow-400 fill-yellow-400 half-filled" : "text-gray-300"}
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold">{product.rating.toFixed(1)}</span>
                <span className="mx-2 text-gray-500">|</span>
                <span className="text-gray-500">{product.reviewCount} reviews</span>
              </div>
              
              <button className="bg-primary-600 text-white py-2 px-6 rounded-md hover:bg-primary-700 transition-colors">
                Write a Review
              </button>
              
              {/* Sample reviews would go here */}
            </div>
          )}
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        {/* Related products grid would go here */}
      </div>
    </div>
  );
} 