"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Star, CheckCircle, Target, Eye, Users, Menu, X } from "lucide-react";

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gvDarkBlue">
      

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-24 bg-gvDarkBlue overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <Image src="/hero2.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Our <span className="text-gvYellow">Journey</span> & Vision
          </motion.h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto font-medium">Building reputable generations through excellence and high moral standards in Suleja since 2007.</p>
        </div>
      </section>

      {/* MISSION & VISION CARDS */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.div whileHover={{y:-10}} className="bg-slate-50 p-12 rounded-[4rem] border-2 border-dashed border-gvYellow">
          <div className="bg-gvYellow w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
            <Target className="text-gvDarkBlue" size={32} />
          </div>
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter text-gvDarkBlue">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed font-medium">To provide a world-class educational environment where children are developed educationally, morally, and socially to become leaders of integrity.</p>
        </motion.div>

        <motion.div whileHover={{y:-10}} className="bg-gvDarkBlue p-12 rounded-[4rem] border-2 border-dashed border-white/20">
          <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
            <Eye className="text-gvDarkBlue" size={32} />
          </div>
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter text-white">Our Vision</h2>
          <p className="text-white/60 text-lg leading-relaxed font-medium">To be the leading citadel of learning in Nigeria, recognized for producing students with high academic standards and patriotic values.</p>
        </motion.div>
      </section>

      {/* THE STORY */}
      <section className="py-24 bg-white px-6 max-w-5xl mx-auto text-center">
         <span className="text-gvYellow font-black uppercase tracking-[0.3em] text-xs">Established 2007</span>
         <h2 className="text-4xl md:text-6xl font-black text-gvDarkBlue mt-4 mb-10 tracking-tighter">A Legacy of <span className="text-gvBlue">Excellence</span></h2>
         <div className="space-y-6 text-gray-600 text-lg leading-loose font-medium text-justify md:text-center">
           <p>Global Vision School Suleja began its journey on January 7th, 2007. What started as a vision by Alhaji Usman Abdullahi Adegboyega in a modest apartment has grown into a premier multi-campus institution.</p>
           <p>By 2008, the school expanded its operations, establishing a reputation for discipline and academic rigour that attracted parents from all over Niger State and the FCT. Today, we stand as a beacon of hope for parents seeking "The Total Child" education.</p>
         </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-slate-50 rounded-[5rem] mx-4 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-black mb-16 uppercase tracking-tighter">Our Core Values</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {['Patriotism', 'Dedication', 'Integrity', 'Teamwork'].map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-[3rem] shadow-xl text-center border-b-8 border-gvYellow">
                <CheckCircle className="mx-auto text-gvBlue mb-4" />
                <h4 className="font-black text-gvDarkBlue uppercase tracking-widest text-sm">{val}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}