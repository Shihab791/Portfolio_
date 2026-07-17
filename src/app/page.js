// src/app/page.js
import AboutMe from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* ----------------- সেকশন ১: হোম / প্রোফাইল পেজ ----------------- */}
      <div className="min-h-[calc(100vh-68px)] bg-[#232931] text-white font-mono flex items-center justify-center relative px-4 sm:px-8 lg:px-16 xl:px-24 py-12 md:py-20 overflow-hidden">
        
        {/* ১. বাম পাশের ফিক্সড সাইডবার মেনু (মোবাইলে হাইড, md থেকে দেখাবে) */}
        <div className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 flex-col items-center space-y-5 lg:space-y-7 bg-[#1c2229] border border-gray-800 py-5 px-3 rounded-full shadow-2xl z-20">
          <button className="bg-white text-black p-2 rounded-full transition-transform hover:scale-110">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
          </button>
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors pt-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </button>
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
          </button>
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
          </button>
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
          </button>
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors pb-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          </button>
        </div>

        {/* মূল লেআউট কন্টেইনার */}
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-12 items-center lg:items-center gap-10 lg:gap-8 xl:gap-12 md:pl-16 lg:pl-16 z-10">
          
          {/* ২. প্রোফাইল কার্ড */}
          <div className="w-full max-w-[340px] sm:max-w-[360px] lg:max-w-none lg:col-span-4 relative">
            <div className="absolute -inset-[2px] rounded-[0px_60px_0px_60px] sm:rounded-[0px_80px_0px_80px] border-[3px] border-[#00adb5] pointer-events-none"></div>
            
            <div className="relative bg-[#1c2229] rounded-[0px_60px_0px_60px] sm:rounded-[0px_80px_0px_80px] p-6 sm:p-8 w-full text-center flex flex-col items-center shadow-2xl">
              {/* প্রোফাইল ছবি */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[3px] border-[#00adb5] overflow-hidden bg-[#2d3743] mb-4">
                <img
                  src="profile.jpeg"
                  alt="Shihab"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-white">Shihab</h2>
              <p className="text-[11px] text-gray-400 mt-1 mb-5">Full-stack developer</p>
              
              <div className="w-full text-left space-y-3.5 text-[11px] text-gray-300 mb-5 pl-2">
                <div className="flex items-center space-x-3">
                  <svg className="w-3.5 h-3.5 text-[#00adb5] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span className="text-gray-400 break-all">mdshihab8007@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-3.5 h-3.5 text-[#00adb5] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="text-gray-400">Bangladesh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-3.5 h-3.5 text-[#00adb5] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  <span className="text-gray-400">Fresher</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-3.5 h-3.5 text-[#00adb5] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span className="text-gray-400">+880 1889804917</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 justify-center mb-6 w-full">
                {["HTML", "CSS", "JS", "REACT", "NEXT.JS", "FLUTTER", "DART", "PYTHON", "DJANGO"].map((skill) => (
                  <span key={skill} className="bg-[#00adb5] text-[#1c2229] text-[9px] font-bold px-2 py-0.5 rounded-sm">
                    {skill}
                  </span>
                ))}
              </div>

              {/* ডাউনলোড সিভি বাটন */}
              <a
                href="/shihabResume.pdf"
                download="shihabResume.pdf"
                className="w-full bg-white text-black font-bold py-2.5 px-4 rounded-full flex items-center justify-center space-x-2 hover:bg-[#00adb5] hover:text-white transition-all shadow-md text-xs"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          {/* ৩. মাঝখানের মূল টাইটেল ও বিবরণী অংশ */}
          <div className="w-full lg:col-span-5 flex flex-col justify-center text-center lg:text-left items-center lg:items-start px-2 sm:px-4 lg:px-0">
            <div className="hidden lg:block text-gray-500 text-[11px] mb-1 self-start">&lt;h1&gt;</div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-[1.2] tracking-wide text-white lg:pl-4">
              Hey<br />
              I'm <span className="text-[#00adb5]">Shihab</span>,<br />
              Full-Stack Developer
            </h1>
            <div className="hidden lg:block text-gray-500 text-[11px] mt-1 text-right w-full lg:max-w-md">&lt;/h1&gt;</div>

            <div className="hidden lg:block text-gray-500 text-[11px] mb-1 mt-4 self-start">&lt;p&gt;</div>
            <p className="text-gray-300 text-xs sm:text-[13px] lg:text-[12px] leading-relaxed max-w-md lg:pl-4 mt-4 lg:mt-0">
              I develop responsive websites and cross-platform mobile apps that deliver seamless performance and exceptional user experiences.
            </p>
            <div className="hidden lg:block text-gray-500 text-[11px] mt-1 self-start">&lt;/p&gt;</div>

            {/* Let's Talk Button */}
            <div className="flex items-center space-x-3 group cursor-pointer w-fit mt-6 lg:mt-8 lg:pl-4">
              <span className="text-xl sm:text-2xl font-bold text-[#00adb5] tracking-wide group-hover:text-white transition-colors">Let's Talk</span>
              <div className="bg-[#1c2229] border border-gray-700 p-2.5 rounded-full text-[#00adb5] shadow-lg group-hover:bg-[#00adb5] group-hover:text-black transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
            </div>
          </div>

          {/* ৪. এক্সপেরিয়েন্স স্ট্যাটস কার্ড */}
          <div className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none lg:col-span-3 bg-[#1c2229] rounded-[30px] sm:rounded-[40px] px-6 sm:px-8 py-5 sm:py-6 lg:py-8 flex flex-row lg:flex-col justify-around lg:justify-center gap-4 lg:gap-6 shadow-2xl border border-gray-800/50 lg:self-center">
            
            <div className="flex items-center space-x-3 sm:space-x-4">
              <span className="text-3xl sm:text-4xl font-bold text-[#00adb5]">5</span>
              <span className="text-[9px] sm:text-[10px] text-gray-400 font-sans font-medium uppercase tracking-wider leading-tight text-left">
                Programming<br />Language
              </span>
            </div>

            <div className="hidden lg:block border-t border-gray-800/60 w-full"></div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <span className="text-3xl sm:text-4xl font-bold text-[#00adb5]">4</span>
              <span className="text-[9px] sm:text-[10px] text-gray-400 font-sans font-medium uppercase tracking-wider leading-tight text-left">
                Development<br />Tools
              </span>
            </div>
            
          </div>

        </div>

        {/* নিচের দিকে সেকশন কানেক্ট করার জন্য একটি ড্যাশড লাইন */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
          <div className="h-10 border-l-2 border-dashed border-[#00adb5]/40 relative">
            <div className="w-1.5 h-1.5 bg-[#00adb5] rotate-45 absolute -bottom-1 -left-[4px] shadow-[0_0_8px_#00adb5]"></div>
          </div>
        </div>

      </div>

      {/* অন্যান্য সাব-সেকশনসমূহ */}
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}