"use client";

import { ReactNode } from 'react';
import Link from 'next/link';

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  className?: string;
  onClick?: () => void;
}

export default function AnimatedButton({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick
}: AnimatedButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-md transition-all duration-300";
  
  const variantStyles = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "bg-secondary-900 text-white hover:bg-secondary-800",
    outline: "bg-transparent border border-secondary-300 text-secondary-700 hover:bg-secondary-50",
    accent: "bg-accent-600 text-white hover:bg-accent-700"
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  const content = (
    <>
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 opacity-10"></span>
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={`group ${buttonClasses}`}>
        {content}
      </Link>
    );
  }
  
  return (
    <button className={`group ${buttonClasses}`} onClick={onClick}>
      {content}
    </button>
  );
} 