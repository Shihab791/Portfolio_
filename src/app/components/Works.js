'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "Food-order",
      codeScreenImg: "/images/code-monitor1.png", 
      webScreenImg: "food.png", 
      link: "https://food-order-five-rust.vercel.app"
    },
    {
      id: 2,
      title: "olistami",
      codeScreenImg: "/images/code-monitor2.png",
      webScreenImg: "olistami.png",
      link: "https://olistami.vercel.app"
    },
    {
      id: 3,
      title: "E-commerce",
      codeScreenImg: "/images/code-monitor3.png",
      webScreenImg: "ecommerce.png",
      link: "https://e-commerce-jliw.vercel.app/"
    },
    {
    id: 4,
    title: "Scope-suite",
    codeScreenImg: "/images/code-monitor4.png",
    webScreenImg: "scope-suite.png",
    link: "https://scope-suite.vercel.app"
  },
  {
    id: 5,
    title: "Cha bari",
    codeScreenImg: "/images/code-monitor4.png",
    webScreenImg: "cha_bari.png",
    link: "https://shihab791.github.io/Cha-Bari/"
  }

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects">
    <div className="min-h-screen bg-[#1f242c] text-white font-mono flex flex-col items-center justify-center relative px-4 sm:px-8 md:px-16 py-20 overflow-hidden select-none">

      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/works.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px sm:420px",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-[#1f242c]/88"></div>

      {/* Extra Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-[#1f242c]/50"></div>

      {/* টপ মাউস স্ক্রলার ইন্ডিকেটর */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="w-[18px] h-[30px] border-2 border-[#00adb5] rounded-full flex justify-center pt-1 shadow-[0_0_8px_rgba(0,173,181,0.3)]">
          <div className="w-[2px] h-[5px] bg-[#00adb5] rounded-full animate-bounce"></div>
        </div>
        <div className="h-10 border-l-2 border-dashed border-gray-600/50 mt-1 relative">
          <div className="w-1.5 h-1.5 bg-white rotate-45 absolute -bottom-1 -left-[4px]"></div>
        </div>
      </div>

      {/* Works হেডিং */}
      <div className="text-center mt-6 sm:mt-12 z-20">
        <h2 className="text-4xl sm:text-[54px] font-bold tracking-wider text-[#00adb5] leading-none drop-shadow-[0_0_6px_#00adb5]">Projects</h2>
        <div className="w-16 sm:w-20 h-[3px] bg-[#00adb5] mx-auto mt-2 rounded-full relative shadow-[0_0_8px_#00adb5]">
          <div className="w-1.5 h-1.5 bg-[#00adb5] rounded-full absolute -left-1 -top-[1.5px]"></div>
          <div className="w-1.5 h-1.5 bg-[#00adb5] rounded-full absolute -right-1 -top-[1.5px]"></div>
        </div>
      </div>

      {/* সাবটাইটেল */}
      <p className="text-gray-400 text-[10px] sm:text-[11px] tracking-wide mt-3 text-center max-w-xs sm:max-w-xl z-20">
        Here are some of the projects I've worked on.
      </p>

      {/* মেইন কন্টেন্ট এরিয়া */}
      <div className="relative w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center mt-10 sm:mt-16 z-20 lg:px-16 gap-8">
        
        {/* ডেস্কটপ/লার্জ স্ক্রিনের জন্য লেফট বাটন */}
        <button 
          onClick={prevSlide}
          className="hidden lg:flex absolute left-0 w-10 h-10 rounded-full bg-[#262c36]/80 hover:bg-[#00adb5]/20 border border-gray-700 hover:border-[#00adb5] items-center justify-center transition-all duration-300 group z-30"
        >
          <svg className="w-5 h-5 text-gray-400 group-hover:text-[#00adb5] transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* স্লাইড অ্যানিমেশন এরিয়া */}
        <div className="w-full overflow-hidden px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col md:flex-row lg:flex-row items-center md:items-end justify-center gap-8 md:gap-6 lg:gap-10 w-full"
            >
              {/* খাড়া কোডিং মনিটর (মোবাইলে প্রথমে বা পাশে) */}
              <div className="relative flex flex-col items-center w-full max-w-[160px] sm:max-w-[180px]">
                <div className="w-full h-[230px] sm:h-[260px] bg-[#0c0f13] border-4 border-[#3a414c] rounded-md shadow-[0_15px_35px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
                  {currentProject.codeScreenImg ? (
                    <img 
                      src={currentProject.codeScreenImg} 
                      alt="Code Screen" 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : null}
                  <div className="p-3 text-[6.5px] sm:text-[7px] text-[#00ff88]/80 leading-normal font-mono text-left overflow-hidden">
                    <p className="text-[#ff79c6]">import React from "react";</p>
                    <p className="text-[#8be9fd]">const App = () =&gt; &#123;</p>
                    <p className="pl-2">const [data, setData] = useState(null);</p>
                    <p className="pl-2 text-[#6272a4]">// Fetching live API data...</p>
                    <p className="pl-2">useEffect(() =&gt; &#123;</p>
                    <p className="pl-4">fetchData().then(res =&gt; setData(res));</p>
                    <p className="pl-2">&#125;, []);</p>
                    <p className="pl-2">return &lt;div&gt;Success&lt;/div&gt;;</p>
                    <p className="text-[#8be9fd]">&#125;;</p>
                  </div>
                </div>
                <div className="w-4 h-6 sm:h-10 bg-[#3a414c]"></div>
                <div className="w-16 sm:w-20 h-2 bg-[#3a414c] rounded-sm"></div>
              </div>

              {/* ডেস্কটপ মনিটর */}
              <div className="relative flex flex-col items-center w-full max-w-[300px] sm:max-w-[360px] mt-8 md:mt-0">
                
                {/* লিংক বাটন */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                  <a 
                    href={currentProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#00adb5] text-xs sm:text-sm font-bold tracking-wider hover:text-white transition-colors duration-300 flex items-center gap-1 group/btn"
                  >
                    View Website ({currentProject.title})
                    <svg className="w-3.5 h-3.5 text-[#00adb5] group-hover/btn:text-white transition-colors animate-pulse" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <div className="w-20 sm:w-24 h-[2px] bg-[#00adb5] mt-1 shadow-[0_0_8px_#00adb5]"></div>
                </div>

                <div className="w-full h-[180px] sm:h-[220px] bg-[#0c0f13] border-4 border-[#3a414c] rounded-t-md shadow-[0_15px_35px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between">
                  {currentProject.webScreenImg ? (
                    <img 
                      src={currentProject.webScreenImg} 
                      alt={currentProject.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ) : null}
                  <div className="w-full h-full bg-[#171b21] p-3 flex flex-col justify-between text-[10px] text-gray-400">
                    <div className="flex justify-between border-b border-gray-700 pb-1 items-center"></div>
                  </div>
                </div>
                <div className="w-10 sm:w-12 h-6 sm:h-8 bg-[#3a414c]"></div>
                <div className="w-28 sm:w-36 h-2 sm:h-2.5 bg-[#3a414c] rounded-b-md"></div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* ডেস্কটপ/লার্জ স্ক্রিনের জন্য রাইট বাটন */}
        <button 
          onClick={nextSlide}
          className="hidden lg:flex absolute right-0 w-10 h-10 rounded-full bg-[#262c36]/80 hover:bg-[#00adb5]/20 border border-gray-700 hover:border-[#00adb5] items-center justify-center transition-all duration-300 group z-30"
        >
          <svg className="w-5 h-5 text-gray-400 group-hover:text-[#00adb5] transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>

      {/* মোবাইল এবং ট্যাবলেটের জন্য বটম নেভিগেশন বাটন লেআউট */}
      <div className="flex lg:hidden gap-6 mt-8 z-30">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-[#262c36]/90 border border-gray-700 active:border-[#00adb5] flex items-center justify-center active:bg-[#00adb5]/20"
        >
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-[#262c36]/90 border border-gray-700 active:border-[#00adb5] flex items-center justify-center active:bg-[#00adb5]/20"
        >
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
    </section>
  );
}