"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  
  return (
    <Link 
      href={href}
      className={`text-secondary-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
        isActive ? "font-medium text-primary-600 dark:text-primary-400" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
} 