"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          SN Appliances
        </Link>

        {/* Desktop Menu */}
       <div className="hidden md:flex gap-8">
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <Link href="/book">Book Technician</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
  className="md:hidden p-2 border"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X size={30} /> : <Menu size={30} />}
</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4">
          <a href="/">Home</a>
          <br />
          <a href="#services">Services</a>
          <br />
          <Link href="/book">Book Technician</Link>
        </div>
      )}
    </nav>
  );
}