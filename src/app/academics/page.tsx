"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Beaker, Laptop, Star, GraduationCap, ArrowRight } from "lucide-react";

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HEADER (Same as above) */}
      <section className="pt-48 pb-20 bg-gvLightBlue px-6 text-center rounded-b-[5rem]">
        <h1 className="text-5xl md:text-7xl font-black text-gvDarkBlue tracking-tighter">Academic <span className="text-gvYellow">Programs</span></h1>
        <p className="mt-6 text-gray-500 text-xl font-medium max-w-2xl mx-auto">A robust curriculum blending the Nigerian National standard with modern digital skills.</p>
      </section>

      {/* CURRICULUM GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
        {/* Nursery */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full font-black text-xs uppercase">Early Years</span>
             <h2 className="text-4xl md:text-5xl font-black text-gvDarkBlue mt-4 mb-6">Nursery & Pre-School</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">We focus on the Montessori method, emphasizing creative play, basic phonics, and social interaction to give your child the best start in life.</p>
             <ul className="grid grid-cols-2 gap-4">
               {['Sensory Play', 'Early Phonics', 'Numeracy', 'Arts & Crafts'].map(item => (
                 <li key={item} className="flex items-center gap-2 font-bold text-gvDarkBlue text-sm"><Star size={16} className="text-gvYellow" /> {item}</li>
               ))}
             </ul>
          </div>
          <div className="order-1 lg:order-2 rounded-[4rem] overflow-hidden shadow-2xl h-[400px] relative">
            <Image src="/hero1.jpg" alt="Nursery" fill className="object-cover" />
          </div>
        </div>

        {/* Secondary */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[400px] relative">
            <Image src="/hero3.jpg" alt="Secondary" fill className="object-cover" />
          </div>
          <div>
             <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-black text-xs uppercase">College Level</span>
             <h2 className="text-4xl md:text-5xl font-black text-gvDarkBlue mt-4 mb-6">Secondary School</h2>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">Our Junior and Senior secondary programs are designed to produce top results in WAEC, NECO, and JAMB, with a strong focus on Science and ICT.</p>
             <div className="bg-slate-50 p-6 rounded-3xl border-l-8 border-gvBlue">
               <h4 className="font-black text-gvBlue mb-2">CBT Center</h4>
               <p className="text-sm font-medium text-gray-500">We train our students for Computer Based Tests (CBT) from JSS1 to ensure 100% confidence in national exams.</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}