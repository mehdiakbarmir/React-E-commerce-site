import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import HydrationSafe from "@/components/HydrationSafe";

// Sample team members data
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/images/team/sarah.jpg",
    bio: "Sarah founded StyleHub with a vision to create sustainable, accessible fashion for everyone."
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    image: "/images/team/michael.jpg",
    bio: "Michael brings over 15 years of experience in fashion design and brand development."
  },
  {
    name: "Emma Rodriguez",
    role: "Head of Operations",
    image: "/images/team/emma.jpg",
    bio: "Emma ensures that StyleHub delivers exceptional quality and service at every step."
  },
  {
    name: "David Kim",
    role: "Sustainability Officer",
    image: "/images/team/david.jpg",
    bio: "David leads our initiatives to minimize environmental impact and promote ethical practices."
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About StyleHub</h1>
        
        {/* Hero Section */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-12">
          <Image
            src="/images/about/store-front.jpg"
            alt="StyleHub Store"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Founded in 2015, StyleHub began with a simple mission: to create high-quality, sustainable clothing that doesn't compromise on style or accessibility. What started as a small online boutique has grown into a community of fashion enthusiasts who value both aesthetics and ethics.
            </p>
            <p>
              Our journey began when our founder, Sarah Johnson, recognized a gap in the market for clothing that was both fashionable and produced with ethical considerations. After years in the fast fashion industry, she was determined to create a brand that prioritized sustainability, fair labor practices, and timeless design.
            </p>
            <p>
              Today, StyleHub works with artisans and manufacturers around the world who share our commitment to quality craftsmanship and responsible production methods. We believe that great style shouldn't come at the expense of our planet or the people who make our clothes.
            </p>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're committed to reducing our environmental footprint through responsible sourcing, minimal waste production, and eco-friendly packaging.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ethical Production</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We partner with factories that provide fair wages, safe working conditions, and respect the rights and dignity of their workers.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We believe in creating pieces that last, focusing on quality materials and expert construction to reduce the cycle of disposable fashion.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We'd love to hear from you! Whether you have a question about our products, want to collaborate, or just want to say hello, reach out to us.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin size={20} className="mr-3 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Our Flagship Store</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Fashion Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={20} className="mr-3 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      hello@stylehub.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={20} className="mr-3 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors">
                    <Instagram size={20} className="text-gray-700 dark:text-gray-300" />
                  </a>
                  <a href="#" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors">
                    <Facebook size={20} className="text-gray-700 dark:text-gray-300" />
                  </a>
                  <a href="#" className="bg-gray-100 dark:bg-gray-700 p-3 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors">
                    <Twitter size={20} className="text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <Link 
                href="/contact" 
                className="block bg-primary-600 text-white text-center py-3 px-6 rounded-md hover:bg-primary-700 transition-colors mb-4"
              >
                Contact Us
              </Link>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/images/about/map.jpg"
                  alt="Store Location"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 