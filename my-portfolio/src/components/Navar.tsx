// src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Subrat Kumar Dang
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            ☰
          </button>
        </div>

        <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 ${menuOpen ? 'flex' : 'hidden'}`}>
          <Link href="/" className="block py-2">About</Link>
          <Link href="/education" className="block py-2">Education</Link>
          <Link href="/projects" className="block py-2">Projects</Link>
          <Link href="/publications" className="block py-2">Publications</Link>
          <Link href="/blog" className="block py-2">Blog</Link>
          <Link href="/cv" className="block py-2">CV</Link>
          <Link href="/contact" className="block py-2">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
