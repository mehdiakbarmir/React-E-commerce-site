"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import { products as allProducts } from "@/data/products";
import { Loader2 } from "lucide-react";
import SearchBar from "@/components/SearchBar";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      const searchResults = allProducts.filter(product => {
        const searchString = `${product.name} ${product.description} ${product.category} ${product.tags?.join(" ")}`.toLowerCase();
        return searchString.includes(query.toLowerCase());
      });
      
      setResults(searchResults);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto mb-8">
        <SearchBar initialQuery={query} className="mb-8" />
        <h1 className="text-3xl font-bold mb-4">
          {query ? `Search results for "${query}"` : "Search Products"}
        </h1>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">No products found</p>
          <p className="text-gray-500">
            Try adjusting your search or browse our categories
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
} 