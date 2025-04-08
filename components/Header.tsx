"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Sun, 
  Moon 
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useTheme } from "next-themes";
import SearchBar from "@/components/SearchBar";

// Navigation links
const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Shop", 
    href: "/products",
    submenu: [
      { name: "All Products", href: "/products" },
      { name: "New Arrivals", href: "/products?filter=new" },
      { name: "Sale", href: "/products?filter=sale" },
      { name: "Men", href: "/products?category=men" },
      { name: "Women", href: "/products?category=women" },
      { name: "Accessories", href: "/products?category=accessories" }
    ]
  },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname() || '';
  const { totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname]);
  
  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
    }`}>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 text-center text-sm">
        Free shipping on orders over $50 | Use code WELCOME10 for 10% off your first order
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold">StyleHub</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <>
                    <button 
                      className={`flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                        pathname.startsWith(link.href || '') ? "text-primary-600 dark:text-primary-400" : ""
                      }`}
                      onClick={() => toggleSubmenu(link.name)}
                    >
                      {link.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    <div className={`absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-10 transition-all duration-200 ${
                      activeSubmenu === link.name ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    }`}>
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                      pathname === link.href ? "text-primary-600 dark:text-primary-400" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Search size={20} />
            </button>
            
            {/* Theme Toggle */}
            {mounted && (
              <button 
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              >
                {theme === "dark" ? (
                  <Sun size={20} className="transition-transform hover:rotate-45" />
                ) : (
                  <Moon size={20} className="transition-transform hover:-rotate-12" />
                )}
              </button>
            )}
            
            {/* Wishlist */}
            <Link 
              href="/wishlist" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 relative"
            >
              <Heart size={20} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            
            {/* Cart */}
            <Link 
              href="/cart" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 relative"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Account */}
            <Link 
              href="/account" 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <User size={20} />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute inset-x-0 top-full bg-white dark:bg-gray-900 shadow-md z-20">
          <div className="container mx-auto p-4">
            <SearchBar />
          </div>
        </div>
      )}
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full bg-white dark:bg-gray-900 shadow-md z-20">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.submenu ? (
                    <div>
                      <button 
                        className={`flex items-center justify-between w-full text-left py-2 ${
                          pathname.startsWith(link.href || '') ? "text-primary-600 dark:text-primary-400" : "text-gray-700 dark:text-gray-300"
                        }`}
                        onClick={() => toggleSubmenu(link.name)}
                      >
                        {link.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform ${activeSubmenu === link.name ? "rotate-180" : ""}`} 
                        />
                      </button>
                      {activeSubmenu === link.name && (
                        <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200 dark:border-gray-700">
                          {link.submenu.map((sublink) => (
                            <li key={sublink.name}>
                              <Link
                                href={sublink.href}
                                className={`block py-1 ${
                                  pathname === sublink.href ? "text-primary-600 dark:text-primary-400" : "text-gray-700 dark:text-gray-300"
                                }`}
                              >
                                {sublink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block py-2 ${
                        pathname === link.href ? "text-primary-600 dark:text-primary-400" : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
} 