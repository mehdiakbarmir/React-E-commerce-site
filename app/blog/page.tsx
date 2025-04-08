"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Clock, ArrowRight, Search, Tag } from "lucide-react";
import HydrationSafe from "@/components/HydrationSafe";

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "Summer Fashion Trends: What's Hot This Season",
    excerpt: "Discover the hottest fashion trends for summer 2023, from vibrant colors to sustainable fabrics that are making waves in the fashion world.",
    image: "/images/blog/summer-trends.jpg",
    author: "Emma Johnson",
    date: "June 15, 2023",
    readTime: "5 min read",
    category: "Fashion Trends",
    tags: ["Summer", "Trends", "Sustainable Fashion"]
  },
  {
    id: "2",
    title: "How to Build a Capsule Wardrobe That Works for You",
    excerpt: "Learn how to create a versatile capsule wardrobe that maximizes your outfit options while minimizing clutter in your closet.",
    image: "/images/blog/capsule-wardrobe.jpg",
    author: "Michael Chen",
    date: "May 28, 2023",
    readTime: "8 min read",
    category: "Style Tips",
    tags: ["Capsule Wardrobe", "Minimalism", "Sustainable Fashion"]
  },
  {
    id: "3",
    title: "The History of Denim: From Workwear to High Fashion",
    excerpt: "Explore the fascinating journey of denim from its humble beginnings as workwear to becoming a staple in high fashion runways around the world.",
    image: "/images/blog/denim-history.jpg",
    author: "Sarah Williams",
    date: "May 10, 2023",
    readTime: "7 min read",
    category: "Fashion History",
    tags: ["Denim", "History", "Jeans"]
  },
  {
    id: "4",
    title: "Sustainable Fashion: How to Shop Ethically",
    excerpt: "A comprehensive guide to making more ethical and sustainable choices when shopping for clothes without compromising on style.",
    image: "/images/blog/sustainable-fashion.jpg",
    author: "David Rodriguez",
    date: "April 22, 2023",
    readTime: "10 min read",
    category: "Sustainability",
    tags: ["Eco-friendly", "Ethical Fashion", "Sustainable Brands"]
  },
  {
    id: "5",
    title: "The Psychology of Color in Fashion",
    excerpt: "Understanding how different colors in your wardrobe can affect your mood and how others perceive you in various social contexts.",
    image: "/images/blog/color-psychology.jpg",
    author: "Lisa Thompson",
    date: "April 5, 2023",
    readTime: "6 min read",
    category: "Fashion Psychology",
    tags: ["Color Theory", "Psychology", "Style"]
  },
  {
    id: "6",
    title: "How to Care for Luxury Garments",
    excerpt: "Expert tips on how to properly care for and maintain your luxury clothing items to ensure they last for years to come.",
    image: "/images/blog/luxury-care.jpg",
    author: "James Wilson",
    date: "March 18, 2023",
    readTime: "9 min read",
    category: "Clothing Care",
    tags: ["Luxury", "Maintenance", "Cleaning"]
  }
];

// Categories for filtering
const categories = [
  "All",
  "Fashion Trends",
  "Style Tips",
  "Fashion History",
  "Sustainability",
  "Fashion Psychology",
  "Clothing Care"
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="w-full md:w-3/4">
          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <Link href={`/blog/${blogPosts[0].id}`} className="block mb-12">
              <HydrationSafe className="group relative rounded-lg overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center text-white/80 text-sm mb-2">
                      <span className="flex items-center mr-4">
                        <Calendar size={14} className="mr-1" />
                        {blogPosts[0].date}
                      </span>
                      <span className="flex items-center mr-4">
                        <User size={14} className="mr-1" />
                        {blogPosts[0].author}
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-white/80 mb-4 max-w-3xl">
                      {blogPosts[0].excerpt}
                    </p>
                    <span className="inline-flex items-center text-primary-400 group-hover:text-primary-300 transition-colors">
                      Read More <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </div>
              </HydrationSafe>
            </Link>
          )}
          
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800"
                />
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <p className="text-lg mb-4">No articles found matching your criteria</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-primary-600 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map(post => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <HydrationSafe className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden h-full flex flex-col group">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                        <span className="flex items-center mr-4">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-2">
                            <User size={16} className="text-gray-500 dark:text-gray-400" />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{post.author}</span>
                        </div>
                        <span className="text-primary-600 dark:text-primary-400 flex items-center text-sm">
                          Read More <ArrowRight size={14} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  </HydrationSafe>
                </Link>
              ))}
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <HydrationSafe className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category
                        ? "bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </HydrationSafe>
          
          <HydrationSafe className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map(tag => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
                >
                  <Tag size={12} className="mr-1" />
                  {tag}
                </button>
              ))}
            </div>
          </HydrationSafe>
          
          <HydrationSafe className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Get the latest fashion tips and trends delivered straight to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800"
              />
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </HydrationSafe>
        </div>
      </div>
    </div>
  );
}
