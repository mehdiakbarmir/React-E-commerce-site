import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <div className="max-w-md mx-auto">
        <CheckCircle size={64} className="mx-auto text-green-500 mb-6" />
        <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We've sent a confirmation email with your order details.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/products" 
            className="block w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
          
          <Link 
            href="/" 
            className="block w-full bg-white text-black border border-black py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 