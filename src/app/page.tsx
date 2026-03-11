"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Star, Play, MessageCircle, 
  BookOpen, Globe, Users, Calendar, 
  GraduationCap, Quote, Beaker, Laptop, Library 
} from "lucide-react";

// --- SLIDER CONTENT CONFIGURATION ---
const slides = [
  {
    image: "/hero1.jpg", 
    title: "Building a Reputable Generation",
    subtitle: "Empowering students with excellence, character, and global perspectives in a safe environment."
  },
  {
    image: "/hero2.jpg",
    title: "Nurturing Future Leaders",
    subtitle: "At Global Vision, we combine modern technology with high moral standards to build total children."
  },
  {
    image: "/hero3.jpg",
    title: "Excellence Since 2008",
    subtitle: "Join our community in Suleja and experience a curriculum designed for 21st-century success."
  }
];

// --- ANIMATION VARIANTS (Fixed with 'as const' for TypeScript) ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto-play slider logic
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-gvDarkBlue overflow-x-hidden">
      
      {/* --- SECTION 1: HERO SLIDER --- */}
      <section className="relative h-screen w-full flex flex-col overflow-hidden bg-gvDarkBlue">
        <div className="absolute inset-0 z-0 bg-gvDarkBlue">
          <AnimatePresence initial={false}>
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[current].image})` }}
            >
              <div className="absolute inset-0 bg-gvDarkBlue/60 backdrop-blur-[2px]" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 flex-grow flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block bg-white/10 backdrop-blur-md text-gvYellow border border-white/20 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-8">
                  Excellence Since 2008
                </span>
                
                <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8">
                  {slides[current].title.split(" ").map((word, i) => (
                    <span key={i} className={word === "Reputable" ? "text-gvYellow" : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </h1>

                <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-12">
                  {slides[current].subtitle}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6">
                  <Link href="/admissions">
                    <motion.button whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className="bg-white text-gvDarkBlue px-12 py-5 rounded-full font-black text-lg flex items-center gap-3 shadow-2xl">
                      Get Started <ArrowRight size={22} />
                    </motion.button>
                  </Link>
                  <motion.button whileHover={{ scale: 1.05 }} className="bg-transparent border-2 border-white/50 text-white px-12 py-5 rounded-full font-black text-lg flex items-center gap-3 hover:bg-white/10 transition-all">
                    <div className="bg-gvYellow p-2 rounded-full"><Play size={18} className="text-gvDarkBlue fill-gvDarkBlue ml-0.5" /></div>
                    Tour Campus
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 transition-all duration-500 rounded-full ${current === idx ? "w-12 bg-gvYellow" : "w-3 bg-white/30 hover:bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: QUICK STATS (Fixed to prevent TS error) --- */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {[
            { label: "Years Experience", val: "15+", icon: <Calendar size={26} />, color: "border-gvYellow" },
            { label: "Students Enrolled", val: "500+", icon: <Users size={26} />, color: "border-green-400" },
            { label: "Expert Educators", val: "40+", icon: <GraduationCap size={26} />, color: "border-blue-400" },
            { label: "Pass Rate", val: "100%", icon: <Star size={26} />, color: "border-gvYellow" },
          ].map((stat, i) => (
            <motion.div key={i} {...fadeInUp} whileHover={{ y: -10 }} className={`bg-white p-10 rounded-[3rem] shadow-xl shadow-gray-100 border-b-8 ${stat.color} transition-all duration-300`}>
              <div className="mb-6 bg-gray-50 w-14 h-14 rounded-2xl flex items-center justify-center text-gvDarkBlue shadow-inner">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-gvDarkBlue tracking-tight">{stat.val}</h3>
              <p className="text-gray-400 font-bold text-xs mt-2 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: WELCOME MESSAGE --- */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden border-[15px] border-white shadow-2xl">
              <img src="/principal.jpg" alt="Principal" className="w-full h-[600px] object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-gvYellow p-10 rounded-[3rem] shadow-2xl hidden md:block">
              <Quote className="text-gvDarkBlue mb-4" size={40} />
              <p className="text-gvDarkBlue font-black text-xl italic leading-tight">"We don't just teach;<br/>we inspire."</p>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="space-y-8 text-center lg:text-left">
            <span className="text-gvBlue font-black uppercase tracking-widest text-sm">Welcome to Global Vision</span>
            <h2 className="text-4xl md:text-6xl font-black text-gvDarkBlue leading-tight tracking-tighter">A Message From Our <br/><span className="text-gvYellow">Proprietor</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Global Vision School Suleja was founded on the belief that every child carries a unique potential that deserves a world-class environment to flourish. Our graduates are equipped to be reputable leaders with a deep sense of integrity.
            </p>
            <div className="pt-6 border-t border-gray-100 flex items-center justify-center lg:justify-start gap-4">
               <div className="w-16 h-16 bg-gvDarkBlue rounded-full flex items-center justify-center font-black text-white italic">AUA</div>
               <div className="text-left">
                  <h4 className="font-black text-gvDarkBlue text-xl tracking-tight">Alh. Usman Abdullahi Adegboyega</h4>
                  <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">Founder / Proprietor</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4: ACADEMIC SECTIONS --- */}
      <section id="academics" className="py-24 bg-gvDarkBlue rounded-[5rem] mx-4 px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">Our Academic Sections</h2>
          <div className="w-24 h-2 bg-gvYellow mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { title: "Nursery", icon: "🧸", desc: "Focusing on early literacy, numeracy, and creative play.", color: "bg-pink-400" },
            { title: "Primary", icon: "📚", desc: "A rigorous curriculum designed to build strong foundations.", color: "bg-gvYellow" },
            { title: "Secondary", icon: "🎓", desc: "Preparing students for WAEC, NECO and beyond.", color: "bg-blue-400" },
          ].map((stage, i) => (
            <motion.div key={i} {...fadeInUp} whileHover={{ y: -15 }} className="bg-white/5 backdrop-blur-md p-10 rounded-[4rem] border border-white/10 group">
              <div className={`${stage.color} w-20 h-20 rounded-[2rem] flex items-center justify-center text-4xl mb-8 group-hover:rotate-12 transition-transform`}>{stage.icon}</div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{stage.title}</h3>
              <p className="text-white/60 leading-relaxed text-lg">{stage.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 5: FACILITIES --- */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-6xl font-black text-gvDarkBlue tracking-tighter mb-20">Modern <span className="text-gvYellow">Facilities</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "ICT Laboratory", icon: <Laptop size={32}/>, image: "/lab-ict.jpg" },
            { title: "Science Labs", icon: <Beaker size={32}/>, image: "/lab-science.jpg" },
            { title: "Modern Library", icon: <Library size={32}/>, image: "/library.jpg" },
          ].map((item, i) => (
            <motion.div key={i} {...fadeInUp} className="group relative rounded-[4rem] overflow-hidden h-[450px]">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gvDarkBlue via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="bg-gvYellow p-3 rounded-2xl w-fit text-gvDarkBlue mb-6">{item.icon}</div>
                <h4 className="text-2xl font-black tracking-tighter uppercase">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 6: ADMISSIONS --- */}
      <section id="admissions" className="py-24 bg-slate-50 relative px-6 md:px-12 rounded-[5rem] mx-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-gvDarkBlue tracking-tighter mb-10">Simple Admission <br/><span className="text-gvYellow">Process</span></h2>
            <div className="space-y-8">
              {['Inquiry', 'Entrance Exam', 'Registration', 'Welcome'].map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <span className="text-4xl font-black text-gvYellow/30 group-hover:text-gvYellow transition-colors">0{i+1}</span>
                  <div>
                    <h4 className="text-2xl font-black text-gvDarkBlue tracking-tight mb-2 uppercase">{step}</h4>
                    <p className="text-gray-500 font-medium">Detailed description of the admission step for the student.</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/admissions">
              <button className="mt-12 bg-gvDarkBlue text-white px-10 py-5 rounded-full font-black uppercase shadow-xl flex items-center gap-3">
                Enroll Now <ArrowRight size={20} />
              </button>
            </Link>
          </div>
          <div className="relative h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-white">
            <img src="/admission-img.jpg" alt="Admission" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* --- SECTION 7: TESTIMONIALS --- */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black text-gvDarkBlue tracking-tighter mb-20">Parent <span className="text-gvYellow">Feedback</span></h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div key={item} {...fadeInUp} className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-50 text-left">
               <Quote className="text-gray-100 mb-6" size={40} />
               <p className="text-gray-600 text-lg italic leading-relaxed mb-8">"Global Vision School offers high moral standards and academic excellence. Best school in Suleja!"</p>
               <h5 className="font-black text-gvDarkBlue uppercase">Happy Parent</h5>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <motion.a 
        href="https://wa.me/2348000000000"
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        className="fixed bottom-10 right-10 bg-[#25D366] text-white p-5 rounded-full shadow-2xl z-50 flex items-center justify-center"
      >
        <MessageCircle size={30} fill="currentColor" />
      </motion.a>

    </main>
  );
}