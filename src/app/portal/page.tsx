"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, 
  UserPlus, 
  ArrowRight, 
  ShieldCheck, 
  GraduationCap, 
  Users, 
  BookOpen,
  LayoutDashboard,
  Star // <--- Added this to fix the error
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function PortalLanding() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-48 pb-20 bg-gvDarkBlue rounded-b-[5rem] overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gvYellow/10 rounded-full blur-3xl -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gvBlue/20 rounded-full blur-3xl -ml-20 -mb-20" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeInUp} className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20">
              <LayoutDashboard className="text-gvYellow w-10 h-10" />
            </div>
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
          >
            School <span className="text-gvYellow">Portal</span>
          </motion.h1>

          <motion.p 
            {...fadeInUp}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Welcome to the Global Vision Digital Hub. Access your academic records, 
            pay school fees, and stay updated with school activities.
          </motion.p>
        </div>
      </section>

      {/* --- ACTION CARDS --- */}
      <section className="py-24 px-6 max-w-5xl mx-auto -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* LOGIN CARD */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[4rem] shadow-2xl border border-gray-100 flex flex-col items-center text-center group transition-all"
          >
            <div className="bg-gvDarkBlue w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-transform">
              <Lock className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-black text-gvDarkBlue mb-4 uppercase tracking-tighter">Existing User</h2>
            <p className="text-gray-500 font-medium mb-10">
              Already have an account? Log in to your dashboard to manage your school profile.
            </p>
            <a 
              href="#" 
              className="w-full bg-gvDarkBlue text-white py-5 rounded-full font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:bg-gvBlue transition-all"
            >
              Login to Portal <ArrowRight size={20} />
            </a>
          </motion.div>

          {/* REGISTER CARD */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[4rem] shadow-2xl border border-gray-100 flex flex-col items-center text-center group transition-all"
          >
            <div className="bg-gvYellow w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl group-hover:-rotate-6 transition-transform">
              <UserPlus className="text-gvDarkBlue" size={32} />
            </div>
            <h2 className="text-3xl font-black text-gvDarkBlue mb-4 uppercase tracking-tighter">New Registration</h2>
            <p className="text-gray-500 font-medium mb-10">
              New student or parent? Create an account to start your journey with Global Vision.
            </p>
            <a 
              href="#" 
              className="w-full bg-gvYellow text-gvDarkBlue py-5 rounded-full font-black uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 hover:bg-white border-2 border-gvYellow transition-all"
            >
              Create Account <ArrowRight size={20} />
            </a>
          </motion.div>

        </div>
      </section>

      {/* --- INFO / FEATURES SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <BookOpen size={30} />, label: "Check Results", color: "text-blue-500" },
            { icon: <Star size={30} />, label: "Manage Fees", color: "text-gvYellow" },
            { icon: <GraduationCap size={30} />, label: "Assignments", color: "text-purple-500" },
            { icon: <ShieldCheck size={30} />, label: "Security", color: "text-green-500" },
          ].map((item, i) => (
            <div key={i} className="text-center p-8 bg-slate-50 rounded-[3rem] border border-gray-100">
               <div className={`${item.color} flex justify-center mb-4`}>
                 {item.icon}
               </div>
               <h4 className="font-black text-gvDarkBlue uppercase tracking-widest text-xs">{item.label}</h4>
            </div>
          ))}
        </div>

        {/* Support Note */}
        <div className="mt-20 text-center bg-slate-50 p-10 rounded-[3rem] border border-gray-100">
           <h3 className="text-xl font-black text-gvDarkBlue uppercase mb-2">Need Assistance?</h3>
           <p className="text-gray-500 font-medium">If you are having trouble accessing the portal, please contact the school ICT department at <span className="text-gvBlue font-bold">support@gvssuleja.edu.ng</span></p>
        </div>
      </section>

    </main>
  );
}