import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
         <Link href="/" className="text-white heading3 font-bold">
              Companion<span className="text-rose-600">AI</span>
            </Link>
          <p className="text-sm text-gray-400 mt-1">
            Your ultimate tool for managing and converting PDFs with ease.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex space-x-6 text-sm">
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/features" className="hover:text-white transition">Features</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" className="hover:text-white transition">
            <Facebook size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-white transition">
            <Twitter size={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition">
            <Linkedin size={20} />
          </Link>
          <Link href="https://github.com" target="_blank" className="hover:text-white transition">
            <Github size={20} />
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} PDF Companion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
