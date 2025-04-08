"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Skip rendering on home page
  if (pathname === "/") return null;
  
  // Generate breadcrumb items
  const pathSegments = pathname.split("/").filter(Boolean);
  
  // Create breadcrumb items with proper URLs and labels
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
    
    // Format the label (capitalize, replace hyphens with spaces)
    let label = segment.replace(/-/g, " ");
    
    // Handle special cases
    if (segment === "products" && pathSegments.length > 1 && index === 0) {
      label = "Products";
    } else if (index > 0 && pathSegments[0] === "products") {
      // For product detail pages, use "Product Details" instead of the ID
      label = "Product Details";
    }
    
    // Capitalize first letter of each word
    label = label
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    
    return { url, label };
  });
  
  return (
    <nav className="container mx-auto px-4 py-4">
      <ol className="flex flex-wrap items-center text-sm text-gray-500">
        <li className="flex items-center">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="mx-2" />
        </li>
        
        {breadcrumbItems.map((item, index) => (
          <li key={item.url} className="flex items-center">
            {index === breadcrumbItems.length - 1 ? (
              <span className="font-medium text-black">{item.label}</span>
            ) : (
              <>
                <Link href={item.url} className="hover:text-black transition-colors">
                  {item.label}
                </Link>
                <ChevronRight size={14} className="mx-2" />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 