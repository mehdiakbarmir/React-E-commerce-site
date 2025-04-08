"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    image: "/images/testimonials/sarah.jpg",
    quote: "StyleHub has completely transformed my wardrobe. The quality of their clothing is exceptional, and their customer service is top-notch. I've never been disappointed with any of my purchases.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Entrepreneur",
    image: "/images/testimonials/michael.jpg",
    quote: "As someone who values both style and comfort, I've found StyleHub to be the perfect balance. Their men's collection is versatile enough for both business meetings and casual outings.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Photographer",
    image: "/images/testimonials/emma.jpg",
    quote: "The attention to detail in StyleHub's designs is remarkable. Each piece feels unique and thoughtfully crafted. I always receive compliments when wearing their clothes.",
    rating: 4
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl font-bold mb-16 text-center text-secondary-900">What Our Customers Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <blockquote className="text-xl italic text-secondary-700 mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/48';
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-secondary-900">{testimonial.name}</p>
                        <p className="text-secondary-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-secondary-900" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-secondary-900" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 