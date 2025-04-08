"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Printer, ArrowRight, Calendar, Truck, MapPin } from "lucide-react";
import HydrationSafe from "@/components/HydrationSafe";

// Sample order data
const order = {
  id: "ORD-12345678",
  date: "June 15, 2023",
  status: "Processing",
  total: 129.97,
  shipping: 5.99,
  tax: 10.40,
  items: [
    {
      id: "1",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      quantity: 2,
      color: "White",
      size: "M",
      image: "/images/products/tshirt-white-1.jpg"
    },
    {
      id: "2",
      name: "Slim Fit Jeans",
      price: 59.99,
      quantity: 1,
      color: "Blue",
      size: "32",
      image: "/images/products/jeans-blue-1.jpg"
    }
  ],
  shippingAddress: {
    name: "John Doe",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States"
  },
  paymentMethod: "Credit Card (ending in 4242)",
  estimatedDelivery: "June 20 - June 22, 2023"
};

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <HydrationSafe className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
            <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your order has been received and is being processed.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h2 className="text-xl font-bold mb-1">Order #{order.id}</h2>
              <p className="text-gray-600 dark:text-gray-400 flex items-center">
                <Calendar size={16} className="mr-1" />
                Placed on {order.date}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <button className="flex items-center text-primary-600 hover:text-primary-700">
                <Printer size={18} className="mr-1" />
                Print Receipt
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-3">Shipping Address</h3>
              <div className="text-gray-700 dark:text-gray-300">
                <p className="font-medium">{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.address}</p>
                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                </p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Order Information</h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Payment Method:</span>
                  <span>{order.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span>Order Status:</span>
                  <span className="text-yellow-600 dark:text-yellow-400 font-medium">{order.status}</span>
                </div>
                <div className="flex items-start">
                  <Truck size={18} className="mr-2 flex-shrink-0 mt-0.5 text-primary-600" />
                  <div>
                    <span className="block font-medium">Estimated Delivery</span>
                    <span>{order.estimatedDelivery}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="font-semibold mb-4">Order Summary</h3>
          <div className="border rounded-md overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Product</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Quantity</th>
                  <th className="px-4 py-3 text-right text-sm font-medium">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-4">
                      <div className="flex items-center">
                        <div className="relative w-12 h-12 rounded-md overflow-hidden mr-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.color} / {item.size}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center">{item.quantity}</td>
                    <td className="px-4 py-4 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span>${(order.total - order.shipping - order.tax).toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600 dark:text-gray-400">Shipping</span>
              <span>${order.shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600 dark:text-gray-400">Tax</span>
              <span>${order.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 font-bold">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We've sent a confirmation email to your registered email address.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/account/orders" 
              className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
            >
              View Order History
            </Link>
            <Link 
              href="/products" 
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </HydrationSafe>
    </div>
  );
} 