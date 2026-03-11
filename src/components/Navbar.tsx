"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll to change navbar theme
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Portal', href: '/portal' },
  ];

  return (
    <header className="fixed top-0 left-0 z-[100] w-full px-4 md:px-12 py-4 transition-all duration-500">
      <nav className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-4 md:px-6 py-2 rounded-2xl shadow-2xl border ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-gray-100 shadow-xl" 
          : "bg-white/10 backdrop-blur-xl border-white/20"
      }`}>
        
        {/* LOGO (Left) */}
        <Link href="/" className="flex items-center flex-1">
          <motion.div 
            animate={{ scale: isScrolled ? 0.85 : 1 }}
            className="relative bg-white p-1.5 rounded-full shadow-2xl flex items-center justify-center border-2 border-gvYellow/50"
          >
            <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full">
                <Image src="/logo.png" alt="GVSS Logo" fill priority className="object-contain" />
            </div>
          </motion.div>
          <div className={`ml-3 hidden sm:flex flex-col leading-tight transition-colors duration-500 ${isScrolled ? "text-gvDarkBlue" : "text-white"}`}>
            <span className="font-black text-sm uppercase tracking-tight">Global Vision</span>
            <span className={`text-[8px] font-bold tracking-widest ${isScrolled ? "text-gvBlue" : "text-gvYellow"}`}>SCHOOL SULEJA</span>
          </div>
        </Link>

        {/* NAV LINKS (Centered) */}
        <div className="hidden lg:flex items-center justify-center gap-8 font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`transition-colors duration-500 relative group text-[10px] uppercase tracking-[0.2em] ${
                pathname === link.href 
                  ? (isScrolled ? "text-gvBlue" : "text-gvYellow")
                  : (isScrolled ? "text-gvDarkBlue hover:text-gvBlue" : "text-white hover:text-gvYellow")
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"} ${isScrolled ? "bg-gvBlue" : "bg-gvYellow"}`} />
            </Link>
          ))}
        </div>

        {/* CTA & TOGGLE (Right) */}
        <div className="flex items-center justify-end flex-1 gap-4">
          <Link href="/admissions" className={`hidden md:block px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl transition-all transform hover:scale-105 ${
            isScrolled ? "bg-gvDarkBlue text-white" : "bg-gvYellow text-gvDarkBlue"
          }`}>
            Enroll Now
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-gvDarkBlue hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="lg:hidden absolute top-24 left-6 right-6 bg-gvDarkBlue/98 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl z-[101]">
            <div className="flex flex-col gap-8 text-left">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-white text-lg font-black uppercase tracking-[0.2em] hover:text-gvYellow transition-colors">{link.name}</Link>
              ))}
              <Link href="/admissions" className="bg-gvYellow text-gvDarkBlue w-full py-4 rounded-full font-black uppercase tracking-widest text-center">Enroll Now</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}