"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import { products as allProducts } from "@/data/products";
import { Product } from "@/types";
import { Loader2 } from "lucide-react";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get unique categories for filter
  const categories = Array.from(new Set(allProducts.map(p => p.category)));
  
  // Get min and max prices for filter
  const prices = allProducts.map(p => p.salePrice || p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  
  useEffect(() => {
    if (!searchParams) return;
    
    setIsLoading(true);
    
    // Extract filter parameters
    const categoryParam = searchParams.get('category');
    const searchQuery = searchParams.get('search');
    const showSaleOnly = searchParams.get('sale') === 'true';
    const showNewOnly = searchParams.get('new') === 'true';
    const minPriceParam = searchParams.get('minPrice');
    const maxPriceParam = searchParams.get('maxPrice');
    
    // Apply filters
    let filtered = [...allProducts];
    
    // Category filter
    if (categoryParam) {
      const categories = categoryParam.split(',');
      filtered = filtered.filter(p => categories.includes(p.category));
    }
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description?.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }
    
    // Sale filter
    if (showSaleOnly) {
      filtered = filtered.filter(p => p.onSale);
    }
    
    // New arrivals filter
    if (showNewOnly) {
      filtered = filtered.filter(p => p.isNew);
    }
    
    // Price range filter
    if (minPriceParam && maxPriceParam) {
      filtered = filtered.filter(p => {
        const price = p.salePrice || p.price;
        return price >= Number(minPriceParam) && price <= Number(maxPriceParam);
      });
    }
    
    // Simulate API delay
    setTimeout(() => {
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 500);
    
  }, [searchParams]);
  
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <ProductFilter
            categories={categories}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </div>
        
        {/* Products Grid */}
        <div className="flex-grow">
          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
            </div>
          ) : (
            <>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl mb-4">No products match your filters</p>
                  <p className="text-gray-500">Try adjusting your filters or browse all products</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
} 