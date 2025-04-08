"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  className?: string;
  initialQuery?: string;
}

export default function SearchBar({ className = "", initialQuery = "" }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800"
      />
      <Search 
        size={18} 
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
      />
      {query && (
        <button
          type="button"
          onClick={() => setQuery("")}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          <X size={18} className="text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </form>
  );
} 