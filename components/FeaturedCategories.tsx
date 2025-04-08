"use client";

import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight } from "lucide-react";

export default function FeaturedCategories() {
  const categories = [
    {
      name: "Men's Collection",
      image: "/images/mens-category.jpg",
      link: "/products?category=men",
      description: "Sophisticated styles for the modern man"
    },
    {
      name: "Women's Collection",
      image: "/images/womens-category.jpg",
      link: "/products?category=women",
      description: "Elegant designs for every occasion"
    },
    {
      name: "Accessories",
      image: "/images/accessories-category.jpg",
      link: "/products?category=accessories",
      description: "Complete your look with our premium accessories"
    }
  ];

  return (
    <section className="bg-white py-24 px-4">
      <div className="container mx-auto">
        <h2 className="font-heading text-4xl font-bold mb-4 text-center text-secondary-900">Shop by Category</h2>
        <p className="text-secondary-600 text-center max-w-2xl mx-auto mb-16">Discover our carefully curated collections designed to elevate your personal style</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category.name}
              href={category.link}
              className="group relative h-96 overflow-hidden rounded-lg shadow-card transition-all duration-300 hover:shadow-lg"
            >
              <SafeImage 
                src={category.image} 
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold transform group-hover:translate-y-[-8px] transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <span className="text-white flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 