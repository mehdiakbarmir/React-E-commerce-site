import React from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function RelatedProducts({ 
  currentProductId, 
  category 
}: { 
  currentProductId: string;
  category: string;
}) {
  // Get products in the same category, excluding the current product
  const relatedProducts = products
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, 4); // Limit to 4 related products
  
  if (relatedProducts.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You might also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
} 