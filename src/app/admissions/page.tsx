"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Added this to fix the "Link is not defined" error
import { motion } from 'framer-motion';
import { 
  FileText, 
  ClipboardCheck, 
  UserPlus, 
  HeartHandshake, 
  HelpCircle,
  ArrowRight
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-24 bg-gvYellow rounded-b-[5rem] overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-gvDarkBlue rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-gvDarkBlue tracking-tighter mb-6 uppercase"
          >
            Join the <span className="text-white">Family</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gvDarkBlue/70 text-lg md:text-2xl font-bold max-w-2xl mx-auto leading-relaxed"
          >
            Your journey to a reputable future starts here. Admission is now open for the 2024/2025 academic session.
          </motion.p>
        </div>
      </section>

      {/* --- REQUIREMENTS SECTION --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gvDarkBlue uppercase tracking-tighter">Required Documents</h2>
            <div className="w-20 h-2 bg-gvYellow mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {[
            { title: "Birth Certificate", desc: "A clear copy of the child's government-issued birth certificate." },
            { title: "Passport Photos", desc: "4 recent passport-sized photographs of the student on a white background." },
            { title: "Transfer Letter", desc: "For students coming from other schools (Required for Primary 2 and above)." },
            { title: "Medical Report", desc: "Basic fitness and blood group report from a recognized medical center." },
          ].map((req, i) => (
            <motion.div 
                key={i} 
                {...fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="flex gap-5 p-8 bg-slate-50 rounded-[2.5rem] border border-gray-100 shadow-sm"
            >
               <div className="bg-gvYellow/20 p-3 h-fit rounded-xl">
                    <FileText className="text-gvDarkBlue" size={24} />
               </div>
               <div>
                 <h4 className="font-black text-gvDarkBlue uppercase text-sm mb-2 tracking-tight">{req.title}</h4>
                 <p className="text-sm text-gray-500 font-medium leading-relaxed">{req.desc}</p>
               </div>
            </motion.div>
          ))}
        </div>

        {/* --- CALL TO ACTION BOX --- */}
        <motion.div 
            {...fadeInUp}
            className="bg-gvDarkBlue p-10 md:p-20 rounded-[4rem] text-center text-white shadow-2xl relative overflow-hidden"
        >
           {/* Decorative circles */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-gvYellow/10 rounded-full -mr-20 -mt-20 blur-3xl" />
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-gvBlue/20 rounded-full -ml-10 -mb-10 blur-3xl" />

           <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">Ready to start?</h3>
                <p className="text-white/60 mb-12 max-w-xl mx-auto text-lg font-medium leading-relaxed">
                    Choose your preferred method of application. You can apply online instantly or download a hard copy to fill and submit physically.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    {/* BUTTON 1: LINKS TO THE ONLINE FORM PAGE */}
                    <Link 
                        href="/apply" 
                        className="bg-gvYellow text-gvDarkBlue px-12 py-5 rounded-full font-black uppercase tracking-widest shadow-xl text-sm transition-all hover:bg-white hover:scale-105"
                    >
                        Online Application
                    </Link>

                    {/* BUTTON 2: DOWNLOADS THE PDF FILE FROM PUBLIC FOLDER */}
                    <a 
                        href="/Admission_Form.pdf" 
                        download="Global_Vision_Admission_Form.pdf"
                        className="bg-white/10 border-2 border-white/20 px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm transition-all hover:bg-white/20"
                    >
                        Download PDF
                    </a>
                </div>
           </div>
        </motion.div>
      </section>

      {/* FAQ / SUPPORT SECTION */}
      <section className="py-20 bg-slate-50 border-t border-gray-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
            <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-xl border border-gray-100 inline-block max-w-3xl">
                <HelpCircle className="text-gvYellow mx-auto mb-6" size={48} />
                <h3 className="text-2xl font-black text-gvDarkBlue uppercase mb-4">Need Help with Admission?</h3>
                <p className="text-gray-500 font-medium mb-8">
                    Our admissions office is open Monday to Friday (8:00 AM - 4:00 PM). 
                    Feel free to visit us at Guazunu Road or call our support line.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <span className="font-black text-gvBlue uppercase tracking-widest text-sm">+234 800 123 4567</span>
                    <span className="font-black text-gvBlue uppercase tracking-widest text-sm">admissions@gvssuleja.edu.ng</span>
                </div>
            </div>
        </div>
      </section>

    </main>
  );
}