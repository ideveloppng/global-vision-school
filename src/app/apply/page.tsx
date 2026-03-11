"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Users, // Added this to fix the ReferenceError
  ChevronLeft
} from "lucide-react";
import Link from 'next/link';

export default function ApplicationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Scroll to top when submitted
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          className="bg-white p-12 rounded-[3rem] shadow-2xl text-center max-w-lg border border-gray-100"
        >
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-green-600" size={32} />
          </div>
          <h1 className="text-3xl font-black text-gvDarkBlue mb-4 uppercase tracking-tighter">Application Sent!</h1>
          <p className="text-gray-500 font-medium mb-8 leading-relaxed">
            Thank you for choosing Global Vision. Our admissions officer will review your data and contact you within 48 hours for the next steps.
          </p>
          <Link href="/" className="bg-gvDarkBlue text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm inline-block shadow-xl hover:bg-gvBlue transition-all">
            Back to Home
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* BACK BUTTON */}
        <Link href="/admissions" className="inline-flex items-center gap-2 text-gvBlue font-black text-xs uppercase tracking-widest mb-8 hover:gap-3 transition-all">
          <ChevronLeft size={16} /> Back to Admissions
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-gvDarkBlue tracking-tighter uppercase">Online <span className="text-gvYellow">Application</span></h1>
          <p className="text-gray-400 font-bold mt-4 uppercase tracking-[0.3em] text-[10px]">Academic Session 2024 / 2025</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl border border-gray-100 space-y-12">
          
          {/* SECTION 1: STUDENT DATA */}
          <div>
            <h3 className="text-xl font-black text-gvDarkBlue mb-8 flex items-center gap-3 uppercase tracking-tight border-b border-gray-50 pb-4">
              <User className="text-gvYellow" size={24} /> Student Bio-Data
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Student Full Name</label>
                <input required type="text" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-gvYellow outline-none transition-all font-medium" placeholder="Surname First" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Date of Birth</label>
                <input required type="date" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-gvYellow outline-none transition-all font-medium text-gray-500" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Gender</label>
                <select className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-gvYellow outline-none transition-all font-medium">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Class Applied For</label>
                <select className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-gvYellow outline-none transition-all font-medium">
                  <option>Nursery (1 - 3)</option>
                  <option>Primary (1 - 6)</option>
                  <option>Junior Secondary (JSS 1-3)</option>
                  <option>Senior Secondary (SSS 1-3)</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 2: PARENT DATA */}
          <div className="pt-10">
            <h3 className="text-xl font-black text-gvDarkBlue mb-8 flex items-center gap-3 uppercase tracking-tight border-b border-gray-50 pb-4">
              <Users className="text-gvYellow" size={24} /> Parent / Guardian Info
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Parent Full Name</label>
                <input required type="text" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-gvBlue transition-all outline-none font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                <input required type="tel" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-gvBlue transition-all outline-none font-medium" placeholder="+234..." />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <input required type="email" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-gvBlue transition-all outline-none font-medium" placeholder="parent@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Home Address</label>
                <input required type="text" className="w-full px-6 py-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-gvBlue transition-all outline-none font-medium" placeholder="Area in Suleja..." />
              </div>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-12 flex flex-col items-center">
            <p className="text-[10px] text-gray-400 font-bold mb-8 text-center max-w-sm italic uppercase tracking-widest">
              By submitting, you confirm the details are correct and agree to follow school policies.
            </p>
            <button 
              type="submit" 
              className="bg-gvDarkBlue text-white w-full md:w-auto px-20 py-5 rounded-full font-black uppercase tracking-widest shadow-2xl hover:bg-gvBlue hover:-translate-y-1 transition-all"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}