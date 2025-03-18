"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="boxWidth boxMar ">
      <div className="flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-slate-800 heading3 font-bold">
          Companion<span className="text-rose-600">AI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/convert" className="nav-link">
            Convert Files
          </Link>
          <Link href="/summary" className="nav-link">
            Summary
          </Link>
          <Link href="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </div>

        {/* Login/Signup Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="btn-primary">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-end space-y-4 pb-4">
          <Link href="/summary" className="nav-link">
            Summary
          </Link>
          <Link href="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link href="/convert" className="nav-link">
            Convert
          </Link>
          <Link href="/login" className="btn-primary text-center">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
