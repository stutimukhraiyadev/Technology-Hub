'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-black bg-opacity-50 text-white z-10">
      <div className="text-2xl font-bold">TechHub</div>

      {/* Desktop Nav */}
      <nav className="space-x-6 hidden md:block">
        <Link href="/" className="hover:text-orange-500">Home</Link>
        <Link href="/articles" className="hover:text-orange-400">Articles</Link>
        <Link href="/about" className="hover:text-orange-400">About Us</Link>
        <Link href="/contact" className="hover:text-orange-400">Contact Us</Link>
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/" className="hover:text-orange-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/articles" className="hover:text-orange-400" onClick={() => setMenuOpen(false)}>Articles</Link>
          <Link href="/about" className="hover:text-orange-400" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className="hover:text-orange-400" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600" onClick={() => setMenuOpen(false)}>
            Login
          </button>
        </div>
      )}

      {/* Desktop Login Button */}
      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 hidden md:block">
        Login
      </button>
    </header>
  );
}
