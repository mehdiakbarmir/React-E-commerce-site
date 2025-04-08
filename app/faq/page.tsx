import React from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import HydrationSafe from "@/components/HydrationSafe";

// FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, toggleOpen }: { 
  question: string; 
  answer: string | React.ReactNode; 
  isOpen: boolean; 
  toggleOpen: () => void;
}) => {
  return (
    <HydrationSafe className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-medium"
        onClick={toggleOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp size={20} className="text-gray-500" />
        ) : (
          <ChevronDown size={20} className="text-gray-500" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <div className="text-gray-600 dark:text-gray-400">
          {answer}
        </div>
      </div>
    </HydrationSafe>
  );
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqCategories = [
    {
      title: "Orders & Shipping",
      faqs: [
        {
          question: "How do I track my order?",
          answer: (
            <>
              <p>You can track your order by following these steps:</p>
              <ol className="list-decimal ml-5 mt-2 space-y-1">
                <li>Log in to your account</li>
                <li>Go to "My Orders" section</li>
                <li>Find your order and click "Track"</li>
              </ol>
              <p className="mt-2">Alternatively, you can use the tracking number provided in your shipping confirmation email.</p>
            </>
          )
        },
        {
          question: "What are the shipping options and costs?",
          answer: "We offer several shipping options: Standard (3-5 business days, $5.99), Express (2 business days, $12.99), and Next Day ($19.99). Orders over $75 qualify for free standard shipping."
        },
        {
          question: "How long will it take to receive my order?",
          answer: "Delivery times depend on your location and chosen shipping method. Standard shipping typically takes 3-5 business days, Express shipping takes 2 business days, and Next Day delivery arrives the next business day if ordered before 1 PM EST."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to most countries worldwide. International shipping costs and delivery times vary by location. You can see the exact shipping cost during checkout after entering your address."
        }
      ]
    },
    {
      title: "Returns & Refunds",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Products must be unworn, unwashed, and in their original packaging with all tags attached. Some items like underwear, swimwear, and face masks cannot be returned for hygiene reasons."
        },
        {
          question: "How do I return an item?",
          answer: (
            <>
              <p>To return an item:</p>
              <ol className="list-decimal ml-5 mt-2 space-y-1">
                <li>Log in to your account and go to "My Orders"</li>
                <li>Select the order and items you wish to return</li>
                <li>Follow the instructions to print a return label</li>
                <li>Package your items securely with all tags attached</li>
                <li>Drop off the package at your nearest shipping location</li>
              </ol>
            </>
          )
        },
        {
          question: "When will I receive my refund?",
          answer: "Once we receive and inspect your return (usually within 3-5 business days), we'll process your refund. It typically takes an additional 3-5 business days for the refund to appear in your account, depending on your payment method."
        },
        {
          question: "Can I exchange an item instead of returning it?",
          answer: "Yes, you can exchange items for a different size or color. Follow the same return process but select 'Exchange' instead of 'Return' and specify the item you'd like instead."
        }
      ]
    },
    {
      title: "Products & Sizing",
      faqs: [
        {
          question: "How do I find the right size?",
          answer: (
            <>
              <p>We recommend checking our detailed size guide for accurate measurements. You can find our size guide <Link href="/size-guide" className="text-primary-600 hover:underline">here</Link>.</p>
              <p className="mt-2">Each product page also includes specific sizing information for that item.</p>
            </>
          )
        },
        {
          question: "Are your products true to size?",
          answer: "Most of our products fit true to size, but we recommend checking the specific product description and reviews for any sizing notes. Some items may run slightly larger or smaller than standard sizes."
        },
        {
          question: "What materials do you use in your products?",
          answer: "We use a variety of high-quality materials in our products. Each product page lists the specific materials used. We prioritize sustainable and ethical sourcing where possible."
        },
        {
          question: "How do I care for my purchases?",
          answer: "Care instructions are provided on the product tags and on each product page. Generally, we recommend washing in cold water and air drying to extend the life of your garments."
        }
      ]
    },
    {
      title: "Account & Payment",
      faqs: [
        {
          question: "How do I create an account?",
          answer: "You can create an account by clicking the 'Account' icon in the top right corner of our website and selecting 'Register'. You'll need to provide your email address and create a password."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard encryption and security measures to protect your payment information. We are PCI compliant and never store your full credit card details on our servers."
        },
        {
          question: "Can I save my payment information for future purchases?",
          answer: "Yes, you can save your payment information securely for faster checkout in the future. You can manage your saved payment methods in your account settings."
        }
      ]
    }
  ];
  
  // Filter FAQs based on search query
  const filteredFAQs = searchQuery 
    ? faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      })).filter(category => category.faqs.length > 0)
    : faqCategories;
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800"
          />
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      {filteredFAQs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg mb-4">No FAQs found matching "{searchQuery}"</p>
          <button 
            onClick={() => setSearchQuery("")}
            className="text-primary-600 hover:underline"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <FAQItem
                      key={globalIndex}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === globalIndex}
                      toggleOpen={() => toggleFAQ(globalIndex)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-12 bg-primary-50 dark:bg-primary-900/10 rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          If you couldn't find the answer to your question, our customer support team is here to help.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
} 