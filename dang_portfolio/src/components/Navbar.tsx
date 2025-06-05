"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">Subrat Kumar Dang</Link> {/* Logo links to homepage */}
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href="/">About</Link> {/* Renamed from Home */}
        <Link href="/education">Education</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/publications">Publications</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2">
          <Link href="/">About</Link>
          <Link href="/education">Education</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/cv">CV</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
}
