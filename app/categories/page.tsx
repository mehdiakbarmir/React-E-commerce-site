"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

// Get unique categories and their first product image
const categories = Array.from(new Set(products.map(p => p.category))).map(category => ({
  name: category,
  image: products.find(p => p.category === category)?.image || "",
  count: products.filter(p => p.category === category).length
}));

export default function CategoriesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/products?category=${category.name}`}
            className="group relative overflow-hidden rounded-lg aspect-square"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-2xl font-bold text-white mb-2">{category.name}</h2>
              <p className="text-white/80 mb-4">{category.count} Products</p>
              <span className="text-white flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 