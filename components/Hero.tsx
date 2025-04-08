"use client";

import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative h-[90vh] flex items-center" 
      style={{ 
        backgroundColor: '#1a1a1a',
        color: 'white'
      }}
    >
      <div className="absolute inset-0 z-0">
        <SafeImage 
          src="/images/hero.jpg" 
          alt="Hero background" 
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-xl animate-slide-up">
          <span className="inline-block px-4 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-6">New Collection 2024</span>
          <h1 
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ color: 'white' }}
          >
            Discover Your <span className="text-primary-400">Signature</span> Style
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            Explore our curated collection of premium fashion pieces designed for the modern lifestyle.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/products?category=women" 
              className="group bg-white text-secondary-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-medium flex items-center"
              style={{ 
                backgroundColor: 'white', 
                color: '#1a1a1a' 
              }}
            >
              Shop Women
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/products?category=men" 
              className="border border-white text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors font-medium"
            >
              Shop Men
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-white/20 p-2 w-10 h-10 ring-1 ring-white/20 shadow-lg rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
} 