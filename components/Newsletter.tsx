"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail("");
    }, 500);
  };
  
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-primary-600 opacity-5 pattern-dots"></div>
      <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
        <span className="inline-block px-4 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full mb-6">Join Our Community</span>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-secondary-900">Stay in the Loop</h2>
        <p className="text-secondary-600 mb-10 text-lg">
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals. Be the first to know about new arrivals and exclusive collections.
        </p>
        
        {isSubmitted ? (
          <div className="bg-green-50 text-green-800 p-6 rounded-lg border border-green-200 animate-fade-in">
            <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-medium text-lg">Thank you for subscribing!</p>
            <p className="text-sm mt-2">You'll be the first to know about our latest styles and offers.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-10"
                />
              </div>
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors font-medium flex items-center justify-center"
              >
                Subscribe <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
} 