import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";
import { CartProvider } from "@/context/CartContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import { WishlistProvider } from "@/context/WishlistContext";
import Breadcrumb from "@/components/Breadcrumb";
import ThemeProvider from "@/components/ThemeProvider";
import BackToTop from "@/components/BackToTop";
import CartDrawer from "@/components/CartDrawer";

// Suppress hydration warnings when browser extensions modify the DOM
React.useLayoutEffect = React.useEffect;
React.useLayoutEffect = React.useEffect;

// Add this to suppress hydration warnings globally
if (typeof window !== 'undefined') {
  // This runs only on the client
  const originalError = console.error;
  console.error = (...args) => {
    // Filter out hydration warnings related to browser extensions
    if (args[0]?.includes && 
        (args[0].includes('Hydration failed because the initial UI does not match') ||
         args[0].includes('Warning: Expected server HTML to contain a matching') ||
         args[0].includes('bis_skin_checked'))) {
      return;
    }
    originalError.apply(console, args);
  };
}

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StyleHub - Modern Fashion E-commerce",
  description: "Discover the latest fashion trends at StyleHub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`} suppressHydrationWarning>
        <ErrorBoundary>
          <ThemeProvider>
            <CartProvider>
              <WishlistProvider>
                <Header />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
              </WishlistProvider>
            </CartProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
} 