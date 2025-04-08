"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import SearchBar from "./SearchBar";

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl">
        <div className="p-4">
          <button onClick={onClose} className="p-2">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4">
          <SearchBar />
        </div>
        
        {/* Rest of the mobile menu content */}
      </div>
    </div>
  );
} 