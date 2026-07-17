"use client";

import AboutMe from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      {/* ----------------- সেকশন ১: হোম / প্রোফাইল পেজ ----------------- */}
      <div className="min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-68px)] bg-[#232931] text-white font-mono flex items-center lg:items-center justify-start lg:justify-center relative px-4 sm:px-8 lg:px-16 xl:px-24 pt-14 pb-20 lg:py-20 overflow-hidden">
        
        {/* ১. বাম পাশের ফিক্সড সাইডবার মেনু (hidden lg:flex করা হয়েছে) */}
        <div className="hidden lg:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 flex-col items-center space-y-4 lg:space-y-5 bg-[#1c2229] border border-gray-800 py-5 px-3 rounded-full shadow-2xl z-20">
          <button className="bg-white text-black p-2 rounded-full transition-transform hover:scale-110">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
          </button>
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </button>
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
          </button>
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
          </button>
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          </button>

          <div className="w-full border-t border-gray-800 my-1"></div>

          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="3" strokeLinecap="round"/></svg>
          </a>
        </div>

        {/* মূল লেআউট কন্টেইনার (items-center এবং lg:grid lg:grid-cols-12 ঠিক রাখা হয়েছে) */}
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-12 items-center gap-12 lg:gap-8 xl:gap-12 px-2 sm:px-4 md:pl-16 lg:pl-16 z-10">
          
          {/* মাঝখানের টাইটেল ও বিবরণী (text-left items-start এবং order-1 lg:order-2) */}
          <div className="order-1 lg:order-2 w-full lg:col-span-5 flex flex-col justify-center text-left items-start px-2 sm:px-4 lg:px-0">
            {/* মোবাইল লেআউটের জন্য নতুন হেডিং (block lg:hidden) */}
            <h2 className="block lg:hidden text-5xl font-light text-[#8ffcff] mb-8">
              Developer
            </h2>

            <div className="hidden lg:block text-gray-500 text-[11px] mb-1 self-start">&lt;h1&gt;</div>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-[1.2] tracking-wide text-white lg:pl-4">
              Hey<br />
              I'm <span className="text-[#00adb5]">Shihab</span>,<br />
              Full-Stack Developer
            </h1>
            <div className="hidden lg:block text-gray-500 text-[11px] mt-1 text-right w-full lg:max-w-md">&lt;/h1&gt;</div>

            <div className="hidden lg:block text-gray-500 text-[11px] mb-1 mt-4 self-start">&lt;p&gt;</div>
            <p className="text-gray-300 text-xs sm:text-[13px] lg:text-[12px] leading-relaxed max-w-[260px] sm:max-w-sm lg:max-w-md lg:pl-4 mt-4 lg:mt-0">
              I develop responsive websites and cross-platform mobile apps that deliver seamless performance and exceptional user experiences.
            </p>
            <div className="hidden lg:block text-gray-500 text-[11px] mt-1 self-start">&lt;/p&gt;</div>

            <div className="flex items-center space-x-3 group cursor-pointer w-fit mt-6 lg:mt-8 lg:pl-4">
              <span className="text-xl sm:text-2xl font-bold text-[#00adb5] tracking-wide group-hover:text-white transition-colors">Let's Talk</span>
              <div className="bg-[#1c2229] border border-gray-700 p-2.5 rounded-full text-[#00adb5] shadow-lg group-hover:bg-[#00adb5] group-hover:text-black transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
            </div>
          </div>

          {/* প্রোফাইল কার্ড (order-2 lg:order-1 এবং max-w-[220px] lg:max-w-none) */}
          <div className="order-2 lg:order-1 w-full max-w-[220px] lg:max-w-none lg:col-span-4 relative">
            <div className="absolute -inset-[2px] rounded-[0px_60px_0px_60px] sm:rounded-[0px_80px_0px_80px] border-[3px] border-[#00adb5] pointer-events-none"></div>
            
            <div className="relative bg-[#1c2229] rounded-[0px_60px_0px_60px] sm:rounded-[0px_80px_0px_80px] p-6 sm:p-8 w-full text-center flex flex-col items-center shadow-2xl">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-[3px] border-[#00adb5] overflow-hidden bg-[#2d3743] mb-4">
                <img src="profile.jpeg" alt="Shihab" className="w-full h-full object-cover" />
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

          {/* এক্সপেরিয়েন্স স্ট্যাটস কার্ড (order-3 এবং w-[150px]) */}
          <div className="order-3 w-[150px] lg:col-span-3 lg:w-[210px] bg-[#1c2229] rounded-[35px] lg:rounded-[40px] px-5 lg:px-8 py-6 lg:py-8 flex flex-col gap-6 lg:gap-8 shadow-2xl border border-gray-800 lg:self-center mx-auto lg:mx-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <span className="text-3xl sm:text-4xl font-bold text-[#00adb5]">5</span>
              <span className="text-[9px] sm:text-[10px] text-gray-400 font-sans font-medium uppercase tracking-wider leading-tight text-left">
                Programming<br />Language
              </span>
            </div>

            <div className="border-t border-gray-700"></div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <span className="text-3xl sm:text-4xl font-bold text-[#00adb5]">4</span>
              <span className="text-[9px] sm:text-[10px] text-gray-400 font-sans font-medium uppercase tracking-wider leading-tight text-left">
                Development<br />Tools
              </span>
            </div>
          </div>

        </div>

        {/* ড্যাশড লাইন */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
          <div className="h-10 border-l-2 border-dashed border-[#00adb5]/40 relative">
            <div className="w-1.5 h-1.5 bg-[#00adb5] rotate-45 absolute -bottom-1 -left-[4px] shadow-[0_0_8px_#00adb5]"></div>
          </div>
        </div>

      </div>

      <AboutMe />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}