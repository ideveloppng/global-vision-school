"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Define functional navigation links
  const quickLinks = [
    { name: "About GVSS", href: "/about" },
    { name: "Academic Programs", href: "/academics" },
    { name: "Admissions Info", href: "/admissions" },
    { name: "School Calendar", href: "/calendar" },
    { name: "Online Application", href: "/apply" },
    { name: "School Portal", href: "/portal" },
  ];

  return (
    <footer className="bg-gvDarkBlue text-white pt-24 pb-12 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-16 border-b border-white/10 pb-16">
        
        {/* --- COLUMN 1: BRANDING --- */}
        <div className="space-y-8 text-center md:text-left">
          <Link href="/" className="inline-block">
            <div className="bg-white p-2 rounded-full inline-flex items-center justify-center shadow-xl border-2 border-gvYellow/30 h-20 w-20 transition-transform hover:scale-105">
               <div className="relative h-full w-full">
                <Image src="/logo.png" alt="Global Vision Logo" fill className="object-contain" />
               </div>
            </div>
          </Link>
          <p className="text-gray-400 font-medium leading-relaxed">
            Building a reputable generation through high-quality education and strong moral training since 2008.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.a 
              href="https://facebook.com" 
              target="_blank"
              whileHover={{ y: -5 }} 
              className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-gvBlue transition-colors"
            >
              <Facebook size={20}/>
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank"
              whileHover={{ y: -5 }} 
              className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-gvBlue transition-colors"
            >
              <Twitter size={20}/>
            </motion.a>
            <motion.a 
              href="https://instagram.com" 
              target="_blank"
              whileHover={{ y: -5 }} 
              className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-gvBlue transition-colors"
            >
              <Instagram size={20}/>
            </motion.a>
          </div>
        </div>

        {/* --- COLUMN 2: QUICK LINKS --- */}
        <div>
          <h4 className="font-black text-xl mb-10 text-gvYellow uppercase tracking-tighter">Quick Links</h4>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-gray-400 font-bold text-sm hover:text-white transition-colors tracking-widest uppercase flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="text-gvYellow transition-transform group-hover:translate-x-1" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- COLUMN 3: REACH US --- */}
        <div>
          <h4 className="font-black text-xl mb-10 text-gvYellow uppercase tracking-tighter">Reach Us</h4>
          <ul className="space-y-6 text-gray-400 font-bold text-xs uppercase tracking-widest">
            <li className="flex items-start gap-4">
              <MapPin className="text-gvYellow shrink-0" size={18}/>
              <span className="leading-relaxed">Guazunu Road, Near B-Division Police Station, Suleja, Niger State.</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-gvYellow shrink-0" size={18}/>
              <span>+234 800 123 4567</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-gvYellow shrink-0" size={18}/>
              <span>info@gvssuleja.edu.ng</span>
            </li>
          </ul>
        </div>

        {/* --- COLUMN 4: LOCATION MAP --- */}
        <div>
          <h4 className="font-black text-xl mb-10 text-gvYellow uppercase tracking-tighter">Location</h4>
          <div className="bg-white/5 rounded-[2.5rem] h-44 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer border border-white/5">
             <div className="absolute inset-0 flex items-center justify-center bg-gvDarkBlue/40 z-10">
                <div className="bg-gvYellow p-3 rounded-full animate-pulse shadow-2xl">
                  <MapPin size={24} className="text-gvDarkBlue" fill="currentColor" />
                </div>
             </div>
             {/* Map Pattern Placeholder */}
             <div className="w-full h-full bg-slate-800 flex flex-wrap gap-1 p-1 opacity-20">
                {Array.from({length: 120}).map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 bg-white/10 rounded-full"></div>
                ))}
             </div>
          </div>
          <p className="mt-4 text-[10px] font-bold text-gray-500 uppercase text-center tracking-widest">
            Click to view on Google Maps
          </p>
        </div>
      </div>

      {/* --- COPYRIGHT SECTION --- */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 font-black text-[10px] tracking-[0.4em] uppercase text-center md:text-left leading-relaxed">
          © {currentYear} GLOBAL VISION SCHOOL SULEJA. <br className="md:hidden" /> ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
           <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
           <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}