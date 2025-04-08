"use client";

import HydrationProvider from "@/components/HydrationProvider";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Newsletter from "@/components/Newsletter";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <HydrationProvider>
      <Hero />
      <Features />
      <FeaturedCategories />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </section>
    </HydrationProvider>
  );
} 