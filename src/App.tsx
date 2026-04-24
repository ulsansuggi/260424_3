/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowUpRight, 
  Github, 
  Instagram, 
  Mail, 
  Menu, 
  X,
  Sparkles,
  Zap,
  Globe,
  Code
} from 'lucide-react';
import { useState, useRef } from 'react';

const PROJECTS = [
  {
    title: "Awesome App",
    category: "Development",
    color: "#eab308", // Yellow
    desc: "A revolutionary application that solves world problems with code."
  },
  {
    title: "Cyber Design",
    category: "Branding",
    color: "#ef4444", // Red
    desc: "Visual identity for a tech startup in the year 2099."
  },
  {
    title: "Pixel Perfect",
    category: "Product",
    color: "#3b82f6", // Blue
    desc: "Ensuring every single pixel serves a divine purpose."
  },
  {
    title: "Eco Future",
    category: "Sustainability",
    color: "#22c55e", // Green
    desc: "Helping companies plant trees without leaving their desk."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const rotateHero = useTransform(scrollYProgress, [0, 0.2], [4, -4]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-purple-500 selection:text-white relative">
      {/* Mesh Background */}
      <div className="mesh-gradient">
        <div className="mesh-blob top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/30 blur-[120px]"></div>
        <div className="mesh-blob bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[150px]"></div>
        <div className="mesh-blob top-[40%] left-[30%] w-[30%] h-[30%] bg-pink-500/10 blur-[100px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-7xl z-50 p-4 flex justify-between items-center glass rounded-full px-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white font-display text-xl rounded-lg">S</div>
          <span className="font-display text-2xl tracking-tighter text-gradient">SUGGi</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase font-bold tracking-widest">
          <a href="#work" className="hover:text-purple-400 transition-colors">Work</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          <div className="flex items-center gap-2 px-4 py-1.5 glass rounded-full text-[10px]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            AVAILABLE FOR WORK
          </div>
        </div>

        <button 
          className="md:hidden glass p-2 rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          className="fixed inset-0 z-40 bg-black/60 flex flex-col items-center justify-center gap-8 p-6 md:hidden"
        >
          <div className="flex flex-col items-center gap-6 font-display text-5xl uppercase text-center">
            <a href="#work" className="text-white" onClick={() => setIsMenuOpen(false)}>Work</a>
            <a href="#about" className="text-white" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="text-white" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
          <div className="flex gap-6 mt-12">
            <Github size={32} className="text-gray-400 hover:text-white" />
            <Instagram size={32} className="text-gray-400 hover:text-white" />
            <Mail size={32} className="text-gray-400 hover:text-white" />
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="pt-56 pb-20 px-6 overflow-hidden">
        <motion.div 
          style={{ rotate: rotateHero, scale: scaleHero }}
          className="max-w-7xl mx-auto flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs mb-8 flex items-center gap-2 px-6 py-2 glass rounded-full text-purple-300 tracking-widest italic font-bold"
          >
            <Sparkles size={14} /> CREATIVE EXPLORER
          </motion.div>
          
          <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.85] uppercase tracking-tighter mb-8 font-black">
            <motion.span 
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.4, duration: 1 }}
              className="inline-block"
            >
              HELLO
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.6, duration: 1 }}
              className="inline-block text-hero-gradient"
            >
              I'M SUGGi
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-xl text-lg md:text-xl text-gray-400 font-medium leading-relaxed"
          >
            A creative explorer building <span className="text-white font-semibold">digital playgrounds</span> and interfaces that feel like magic. 코드로 마법을 부리는 창의적인 개발자입니다.
          </motion.p>

          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-white/5 active:scale-95">
              Let's Talk
            </button>
            <button className="px-10 py-4 glass rounded-full glass-hover text-white font-bold active:scale-95">
              View Work
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="py-8 glass border-y border-white/5 overflow-hidden -rotate-1 mt-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-12 px-6 font-display text-4xl uppercase tracking-[0.2em] text-white/20">
              <span className="hover:text-purple-400 transition-colors cursor-default">REACT</span> <Zap size={24} className="text-yellow-400/50" />
              <span className="hover:text-blue-400 transition-colors cursor-default">TYPESCRIPT</span> <Code size={24} className="text-blue-400/50" />
              <span className="hover:text-purple-400 transition-colors cursor-default">MOTION</span> <Sparkles size={24} className="text-purple-400/50" />
              <span className="hover:text-green-400 transition-colors cursor-default">DESIGN</span> <Globe size={24} className="text-green-400/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
            <div className="max-w-xl">
              <h2 className="font-display text-7xl md:text-8xl leading-none font-black italic tracking-tighter">PROJECTS</h2>
              <p className="font-mono text-xs mt-4 uppercase font-bold text-gray-500 tracking-[0.3em]">Featured selection (2024)</p>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-gray-600 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              Scroll to explore
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="group relative glass rounded-[32px] p-2 glass-hover overflow-hidden"
              >
                <div 
                  className="aspect-[4/3] w-full rounded-[26px] overflow-hidden relative"
                  style={{ background: `linear-gradient(45deg, ${project.color}44, ${project.color}11)` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0.5 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      className="font-display text-white text-5xl md:text-6xl text-center p-8 opacity-90 tracking-tighter group-hover:scale-110 transition-transform duration-700"
                    >
                      {project.title}
                    </motion.div>
                  </div>
                  {/* Decorative Project Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                
                <div className="p-8 pb-10 flex justify-between items-start">
                  <div>
                    <span className="font-mono text-[10px] uppercase font-black text-purple-400 tracking-[0.2em] mb-2 block italic">{project.category}</span>
                    <h3 className="font-display text-3xl uppercase tracking-tighter">{project.title}</h3>
                    <p className="text-sm mt-3 text-gray-400 leading-relaxed font-medium">{project.desc}</p>
                  </div>
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={28} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square glass rounded-[48px] relative overflow-hidden group border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[25vw] md:text-[20vw] text-white/5 font-black group-hover:scale-110 transition-transform duration-1000">?</span>
              </div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="p-8 glass rounded-[32px]">
                  <h3 className="font-display text-3xl uppercase text-gradient mb-4 italic">Who is SUGGi?</h3>
                  <p className="font-mono text-xs leading-relaxed text-gray-400">
                    창의적인 문제 해결을 즐기는 풀스택 개발자입니다. 디자인과 개발 사이의 경계를 허무는 것을 목표로 합니다.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Soft decorative blur circles */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full"></div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-pink-500/20 blur-[70px] rounded-full"></div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-display text-6xl md:text-8xl leading-[0.9] font-black uppercase tracking-tighter mb-10">
              DESIGN THAT <br />
              <span className="text-white/40 italic">MOVES </span> 
              <span className="text-gradient">PEOPLE</span>
            </h2>
            <div className="space-y-8">
              <p className="text-xl font-medium text-gray-400 leading-relaxed">
                단순히 보기 좋은 것을 넘어, 사용자에게 즐거움을 줄 수 있는 인터랙티브한 경험을 만드는 것을 좋아합니다. 최신 기술을 탐구하고 실제 프로젝트에 적용하며 끊임없이 성장 중입니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Location", value: "Seoul, KR" },
                  { label: "Experience", value: "3+ Years" },
                  { label: "Focus", value: "React, UI/UX" },
                  { label: "Hobbies", value: "Cooking" }
                ].map((item, i) => (
                  <div key={i} className="p-6 glass rounded-[24px] glass-hover">
                    <div className="font-mono text-[10px] uppercase font-black text-gray-500 tracking-widest">{item.label}</div>
                    <div className="font-display text-2xl uppercase mt-2 tracking-tight text-white/90">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto glass rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Internal Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[80px]"></div>

          <h2 className="font-display text-7xl md:text-[8vw] leading-[0.8] uppercase font-black tracking-tighter mb-12 relative z-10">
            LET'S WORK <br />
            <span className="text-gradient italic">TOGETHER</span>
          </h2>
          
          <div className="flex flex-col items-center justify-center gap-8 mt-16 relative z-10">
            <a 
              href="mailto:hello@suggi.dev"
              className="group flex flex-col md:flex-row items-center gap-6 font-display text-4xl md:text-5xl hover:scale-105 transition-transform"
            >
              <div className="w-20 h-20 glass rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <Mail size={32} />
              </div>
              <span className="tracking-tighter">HELLO@SUGGi.DEV</span>
            </a>
          </div>

          <div className="mt-28 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[10px] tracking-[0.3em] text-gray-500 pt-10 border-t border-white/5 relative z-10 uppercase font-black">
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Github</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <div className="opacity-40 italic">© 2024 SUGGi STUDIO. ALL RIGHTS RESERVED.</div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-white text-black shadow-2xl flex items-center justify-center z-50 rounded-full border-4 border-black/10"
      >
        <Mail size={24} />
      </motion.button>
    </div>
  );
}
