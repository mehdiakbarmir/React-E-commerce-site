"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

type FilterProps = {
  categories: string[];
  minPrice: number;
  maxPrice: number;
};

export default function ProductFilter({ categories, minPrice, maxPrice }: FilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Initialize filters from URL params
  useEffect(() => {
    if (!searchParams) return;

    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategories(categoryParam.split(","));
    }
    
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    if (minPriceParam && maxPriceParam) {
      setPriceRange([Number(minPriceParam), Number(maxPriceParam)]);
    }
    
    const onSaleParam = searchParams.get("onSale");
    if (onSaleParam === "true") {
      setShowSaleOnly(true);
    }
    
    const isNewParam = searchParams.get("isNew");
    if (isNewParam === "true") {
      setShowNewOnly(true);
    }
  }, [searchParams]);

  // Update URL when filters change
  const updateURL = () => {
    const params = new URLSearchParams();
    
    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories.join(","));
    }
    
    if (priceRange[0] !== minPrice || priceRange[1] !== maxPrice) {
      params.set("minPrice", priceRange[0].toString());
      params.set("maxPrice", priceRange[1].toString());
    }
    
    if (showSaleOnly) {
      params.set("onSale", "true");
    }
    
    if (showNewOnly) {
      params.set("isNew", "true");
    }
    
    router.push(`/products?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      }
      return [...prev, category];
    });
  };

  const handlePriceChange = (values: [number, number]) => {
    setPriceRange(values);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([minPrice, maxPrice]);
    setShowSaleOnly(false);
    setShowNewOnly(false);
    router.push("/products");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        {(selectedCategories.length > 0 || 
          priceRange[0] !== minPrice || 
          priceRange[1] !== maxPrice || 
          showSaleOnly || 
          showNewOnly) && (
          <button
            onClick={clearFilters}
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange([Number(e.target.value), priceRange[1]])}
            className="w-24 px-2 py-1 border rounded-md"
          />
          <span>to</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange([priceRange[0], Number(e.target.value)])}
            className="w-24 px-2 py-1 border rounded-md"
          />
        </div>
      </div>

      {/* Sale Items */}
      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showSaleOnly}
            onChange={(e) => setShowSaleOnly(e.target.checked)}
            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span className="ml-2">Show Sale Items Only</span>
        </label>
      </div>

      {/* New Arrivals */}
      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showNewOnly}
            onChange={(e) => setShowNewOnly(e.target.checked)}
            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span className="ml-2">New Arrivals Only</span>
        </label>
      </div>

      {/* Apply Filters Button */}
      <button
        onClick={updateURL}
        className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors"
      >
        Apply Filters
      </button>
    </div>
  );
}