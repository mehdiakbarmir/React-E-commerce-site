"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: "summer-2023",
    name: "Summer 2023",
    description: "Light and breezy pieces for the perfect summer look",
    image: "/images/collections/summer-2023.jpg",
  },
  {
    id: "workwear",
    name: "Modern Workwear",
    description: "Professional attire for the contemporary workplace",
    image: "/images/collections/workwear.jpg",
  },
  {
    id: "activewear",
    name: "Active Life",
    description: "Performance wear for your active lifestyle",
    image: "/images/collections/activewear.jpg",
  },
  {
    id: "essentials",
    name: "The Essentials",
    description: "Timeless pieces for every wardrobe",
    image: "/images/collections/essentials.jpg",
  }
];

export default function CollectionsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Collections</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/collections/${collection.id}`}
            className="group relative overflow-hidden rounded-lg aspect-[16/9]"
          >
            <Image
              src={collection.image}
              alt={collection.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-2xl font-bold text-white mb-2">{collection.name}</h2>
              <p className="text-white/80 mb-4">{collection.description}</p>
              <span className="text-white flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 