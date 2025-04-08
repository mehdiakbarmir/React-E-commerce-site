"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface NavMenuItem {
  label: string;
  href: string;
}

interface NavMenuProps {
  title: string;
  href: string;
  items: NavMenuItem[];
}

export default function NavMenu({ title, href, items }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`) || 
                  items.some(item => pathname === item.href || pathname.startsWith(`${item.href}/`));
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  return (
    <div className="relative group" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center text-secondary-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
          isActive ? "font-medium text-primary-600 dark:text-primary-400" : ""
        }`}
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown size={16} className="ml-1" />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-50 animate-fade-in">
          <Link 
            href={href}
            className="block px-4 py-2 text-secondary-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium"
          >
            All {title}
          </Link>
          
          <div className="border-t border-gray-100 dark:border-gray-700">
            {items.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="block px-4 py-2 text-secondary-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 