"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  Download, 
  Bell, 
  Clock, 
  Trophy, 
  BookOpen, 
  ChevronRight,
  Star
} from "lucide-react";

// --- ACADEMIC EVENTS DATA ---
const academicEvents = [
  { 
    date: "Jan 08", 
    title: "Resumption for 2nd Term", 
    type: "Resumption", 
    color: "bg-green-500",
    desc: "All students are expected back on campus by 8:00 AM."
  },
  { 
    date: "Feb 14", 
    title: "Inter-House Sports Competition", 
    type: "Event", 
    color: "bg-gvYellow",
    desc: "A day of athletic excellence and teamwork at the main field."
  },
  { 
    date: "Feb 22", 
    title: "Mid-Term Break", 
    type: "Holiday", 
    color: "bg-blue-400",
    desc: "School closes for a short break. Resumption on Feb 26."
  },
  { 
    date: "Mar 15", 
    title: "2nd Term Continuous Assessment", 
    type: "Exams", 
    color: "bg-purple-500",
    desc: "Mid-term tests for all Nursery, Primary, and Secondary classes."
  },
  { 
    date: "Apr 05", 
    title: "End of 2nd Term Vacation", 
    type: "Holiday", 
    color: "bg-red-400",
    desc: "Closing ceremony and collection of report cards."
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function CalendarPage() {
  const [activeTerm, setActiveTerm] = useState("2nd Term");

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-20 bg-gvBlue rounded-b-[5rem] overflow-hidden">
        {/* Playful Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gvYellow/10 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -ml-20 -mb-20" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeInUp} className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20">
              <CalendarIcon className="text-gvYellow w-10 h-10" />
            </div>
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase"
          >
            Academic <span className="text-gvYellow">Calendar</span>
          </motion.h1>

          <motion.p 
            {...fadeInUp}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Stay updated with school resumptions, examination dates, holidays, 
            and exciting extracurricular events.
          </motion.p>
        </div>
      </section>

      {/* --- TERM SWITCHER & DOWNLOAD --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 -mt-12 relative z-20">
        <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl flex gap-2 border border-gray-100">
          {["1st Term", "2nd Term", "3rd Term"].map((term) => (
            <button
              key={term}
              onClick={() => setActiveTerm(term)}
              className={`px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                activeTerm === term 
                  ? "bg-gvDarkBlue text-white shadow-lg" 
                  : "text-gray-400 hover:text-gvDarkBlue hover:bg-gray-50"
              }`}
            >
              {term}
            </button>
          ))}
        </div>

        <motion.a 
          href="/Academic_Calendar_2024.pdf" // Ensure this is in your /public folder
          download
          whileHover={{ scale: 1.05 }}
          className="bg-gvYellow text-gvDarkBlue px-10 py-5 rounded-full font-black uppercase tracking-widest shadow-xl flex items-center gap-3"
        >
          <Download size={20} /> Download PDF
        </motion.a>
      </section>

      {/* --- EVENTS LIST --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="space-y-8">
          {academicEvents.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-white p-8 rounded-[3rem] shadow-xl shadow-gray-100 border border-gray-50 group hover:shadow-2xl transition-all"
            >
              {/* Date Box */}
              <div className="bg-gvDarkBlue text-white p-6 rounded-[2rem] text-center min-w-[120px] shadow-lg group-hover:bg-gvBlue transition-colors">
                <span className="block text-2xl font-black">{event.date.split(" ")[1]}</span>
                <span className="block text-xs font-bold uppercase tracking-widest text-gvYellow">{event.date.split(" ")[0]}</span>
              </div>

              {/* Content */}
              <div className="flex-grow space-y-2">
                <div className="flex items-center gap-3">
                  <span className={`${event.color} w-3 h-3 rounded-full animate-pulse`} />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{event.type}</span>
                </div>
                <h3 className="text-2xl font-black text-gvDarkBlue tracking-tight">{event.title}</h3>
                <p className="text-gray-500 font-medium">{event.desc}</p>
              </div>

              {/* Action/Indicator */}
              <div className="hidden md:block">
                 <div className="p-4 bg-slate-50 rounded-full text-gray-300 group-hover:text-gvYellow transition-colors">
                    <ChevronRight size={24} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- LEGEND / INFO SECTION --- */}
      <section className="py-24 bg-slate-50 rounded-[5rem] mx-4 px-6 mb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-gvDarkBlue tracking-tighter mb-8 uppercase">Key Calendar <span className="text-gvYellow">Categories</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Clock className="text-green-500" />, label: "Resumption Dates" },
                { icon: <BookOpen className="text-purple-500" />, label: "Exams & Assessment" },
                { icon: <Bell className="text-red-400" />, label: "Public Holidays" },
                { icon: <Trophy className="text-gvYellow" />, label: "School Events" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                  {item.icon}
                  <span className="font-black text-gvDarkBlue text-xs uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gvDarkBlue p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
            <Star className="absolute top-10 right-10 text-gvYellow/20" size={100} />
            <h3 className="text-3xl font-black mb-6 tracking-tight">Parent-Teacher Meeting</h3>
            <p className="text-white/60 text-lg mb-8 leading-relaxed font-medium">
              Communication is key. Don't forget our termly open-day meetings where we discuss your child's progress.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full border border-white/20">
               <Bell size={18} className="text-gvYellow" />
               <span className="text-xs font-bold uppercase tracking-widest">Next Meeting: TBA</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}