"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">StyleHub</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Elevate your style with our curated collection of sustainable, high-quality clothing and accessories.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Fashion Avenue<br />
                  New York, NY 10001
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-600" />
                <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-600" />
                <span className="text-gray-600 dark:text-gray-400">hello@stylehub.com</span>
              </div>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?filter=new" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/products?filter=sale" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/products?category=men" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/products?category=women" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 pb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get the latest updates on new products and upcoming sales.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800"
              />
              <button className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Social & Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              <Youtube size={20} />
            </a>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} StyleHub. All rights reserved. Design and Develop by Mehdi Akbar
          </div>
        </div>
      </div>
    </footer>
  );
} 