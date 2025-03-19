/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Separator } from "../ui/separator";
import NavigationMenuComponent from "./dropdown";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" boxMar relative">
      <div className="flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flexCenter space-x-4">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-slate-800 heading3 font-bold">
              Companion<span className="text-rose-600">AI</span>
            </Link>
            <NavigationMenuComponent />
          </div>

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
        </div>

        {/* Login/Signup Buttons */}
        <div className="hidden md:flex space-x-4">
          <div className="flexCenter space-x-4">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in" className="btn-primary">
                Login
              </Link>
            </SignedOut>
            <Separator
              orientation="vertical"
              className="h-full w-1.5 bg-gray-900"
            />
            <div className="flex gap-3">
              <Link href="/pricing" className="nav-link">
                Pricing
              </Link>
              <Link href="/teams" className="nav-link">
                Teams
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 px-1">
          <Link href="/summary" className="nav-link">
            Summary
          </Link>
          <Link href="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link href="/convert" className="nav-link">
            Convert
          </Link>
          <Link href="/pricing" className="nav-link">
            Pricing
          </Link>
          <Link href="/teams" className="nav-link">
            Teams
          </Link>
          <Link href="/login" className="btn-primary w-full text-center">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
