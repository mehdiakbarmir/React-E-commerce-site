"use client";

import React, { useState } from "react";
import { User, Package, Heart, CreditCard, LogOut, Settings, ShoppingBag } from "lucide-react";
import Link from "next/link";

// Mock user data
const user = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  avatar: "/images/avatar.jpg"
};

// Mock order data
const orders = [
  {
    id: "ORD-1234",
    date: "2023-05-15",
    status: "Delivered",
    total: 129.99,
    items: 3
  },
  {
    id: "ORD-5678",
    date: "2023-04-22",
    status: "Processing",
    total: 79.50,
    items: 2
  },
  {
    id: "ORD-9012",
    date: "2023-03-10",
    status: "Delivered",
    total: 45.75,
    items: 1
  }
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <User size={24} className="text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{user.email}</p>
              </div>
            </div>
            
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                  activeTab === "profile" 
                    ? "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <User size={18} />
                <span>Profile</span>
              </button>
              
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                  activeTab === "orders" 
                    ? "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Package size={18} />
                <span>Orders</span>
              </button>
              
              <Link
                href="/wishlist"
                className="w-full flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Heart size={18} />
                <span>Wishlist</span>
              </Link>
              
              <button
                onClick={() => setActiveTab("payment")}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                  activeTab === "payment" 
                    ? "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <CreditCard size={18} />
                <span>Payment Methods</span>
              </button>
              
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
                  activeTab === "settings" 
                    ? "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400" 
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Settings size={18} />
                <span>Settings</span>
              </button>
              
              <button
                className="w-full flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>
        
        <div className="w-full md:w-3/4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            {activeTab === "profile" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name</label>
                      <input 
                        type="text" 
                        defaultValue="Jane" 
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name</label>
                      <input 
                        type="text" 
                        defaultValue="Doe" 
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      defaultValue="jane.doe@example.com" 
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input 
                      type="tel" 
                      defaultValue="(555) 123-4567" 
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Address</label>
                    <textarea 
                      defaultValue="123 Main St, Anytown, CA 12345" 
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      rows={3}
                    />
                  </div>
                  
                  <div className="pt-4">
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {activeTab === "orders" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Order History</h2>
                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.map(order => (
                      <div key={order.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex flex-wrap justify-between items-center mb-2">
                          <div>
                            <span className="font-medium">{order.id}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                              {order.date}
                            </span>
                          </div>
                          <div className={`text-sm px-2 py-1 rounded-full ${
                            order.status === "Delivered" 
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          }`}>
                            {order.status}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {order.items} {order.items === 1 ? 'item' : 'items'}
                          </div>
                          <div className="font-medium">${order.total.toFixed(2)}</div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                          <button className="text-primary-600 hover:text-primary-700 text-sm">
                            View Order Details
                          </button>
                          <button className="text-primary-600 hover:text-primary-700 text-sm">
                            Track Package
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                      <ShoppingBag size={32} className="text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No orders yet</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                      When you place your first order, it will appear here.
                    </p>
                    <Link 
                      href="/products" 
                      className="inline-block bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                    >
                      Start Shopping
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === "payment" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Payment Methods</h2>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-6 bg-blue-600 rounded mr-3"></div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Expires 12/2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">Edit</button>
                      <button className="text-sm text-red-500 hover:text-red-700">Remove</button>
                    </div>
                  </div>
                </div>
                
                <button className="flex items-center text-primary-600 hover:text-primary-700">
                  <span className="mr-2">+</span> Add Payment Method
                </button>
              </div>
            )}
            
            {activeTab === "settings" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Email Notifications</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-2" />
                        Order updates
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-2" />
                        Promotions and sales
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        New product arrivals
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Password</h3>
                    <button className="text-primary-600 hover:text-primary-700">
                      Change Password
                    </button>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Delete Account</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button className="text-red-500 hover:text-red-700">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 