import AboutMe from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      {/* ----------------- সেকশন ১: হোম / প্রোফাইল পেজ ----------------- */}
      <div className="min-h-[calc(100vh-68px)] bg-[#232931] text-white font-mono flex justify-center relative px-16 pb-20 pt-8">
        
        {/* ১. বাম পাশের ফিক্সড সাইডবার মেনু */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-7 bg-[#1c2229] border border-gray-800 py-6 px-3.5 rounded-full shadow-2xl">
          {/* Grid Icon */}
          <button className="bg-white text-black p-2 rounded-full transition-transform hover:scale-110">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
          </button>
          {/* User Icon */}
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors pt-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
          </button>
          {/* Code Icon */}
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
          </button>
          {/* Monitor Icon */}
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
          </button>
          {/* Edit Icon */}
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
          </button>
          {/* Mail Icon */}
          <button className="text-gray-400 hover:text-[#00adb5] transition-colors pb-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          </button>
        </div>

        <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[5vw] font-bold text-[#85f4ff] opacity-60 select-none pointer-events-none w-full text-center mix-blend-screen">
          Developer
        </div>

        {/* মূল ৩-কলাম গ্রিড লেআউট */}
        <div className="relative -top-20 max-w-7xl mx-auto w-full grid grid-cols-12 items-end gap-12 pl-12 z-10">
          
          {/* ২. বাম পাশের প্রোফাইল কার্ড (Col: 4) */}
          <div className="col-span-4 relative justify-self-center">
            <div className="absolute -inset-[2px] rounded-[0px_90px_0px_90px] border-[3px] border-[#00adb5] pointer-events-none"></div>
            
            <div className="relative bg-[#1c2229] rounded-[0px_90px_0px_90px] p-8 w-[340px] text-center flex flex-col items-center shadow-2xl">
              <div className="w-24 h-24 rounded-full border-[3px] border-[#00adb5] overflow-hidden bg-[#2d3743] mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400 mt-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 0 1 8 0z" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold tracking-wide text-white">Shihab</h2>
              <p className="text-[11px] text-gray-400 mt-1 mb-5">Full-stack developer</p>
              
              <div className="w-full text-left space-y-3.5 text-[11px] text-gray-300 mb-5 pl-2">
                <div className="flex items-center space-x-3">
                  <svg className="w-3.5 trim h-3.5 text-[#00adb5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span className="text-gray-400">mdshihab8007@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-3.5 h-3.5 text-[#00adb5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="text-gray-400">Bangladesh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-3.5 h-3.5 text-[#00adb5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                  <span className="text-gray-400">Fresher</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-3.5 h-3.5 text-[#00adb5]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  <span className="text-gray-400">www.shihab.com</span>
                </div>
              </div>

              {/* স্কিল ব্যাজসমূহ */}
              <div className="flex flex-wrap gap-2 justify-center mb-6 max-w-[280px]">
                {["HTML", "CSS", "JS", "REACT", "NEXT.JS", "FLUTTER", "DART", "PYTHON", "DJANGO"].map((skill) => (
                  <span key={skill} className="bg-[#00adb5] text-[#1c2229] text-[9px] font-bold px-2 py-0.5 rounded-sm">
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="/shihabResume.pdf"
                download="shihabResume.pdf"
                className="w-[85%] bg-white text-black font-bold py-2.5 px-4 rounded-full flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all shadow-md text-xs"
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

          {/* ৩. মাঝখানের মূল টাইটেল ও বিবরণী অংশ (Col: 5) */}
          <div className="col-span-5 pl-4 flex flex-col justify-end pb-2">
            <div className="text-gray-500 text-[11px] mb-2 self-start">&lt;h1&gt;</div>
            <h1 className="text-5xl font-bold leading-[1.15] tracking-wide text-white pl-4">
              Hey<br />
              I'm <span className="text-[#00adb5]">Shihab</span>,<br />
              Full-Stack Developer
            </h1>
            <div className="text-gray-500 text-[11px] mt-2 pr-20 text-right w-full">&lt;/h1&gt;</div>

            <div className="text-gray-500 text-[11px] mb-2 mt-4 self-start">&lt;p&gt;</div>
            <p className="text-gray-300 text-[12px] leading-relaxed max-w-md pl-4 pr-6">
              I develop responsive websites and cross-platform mobile apps that deliver seamless performance and exceptional user experiences.
            </p>
            <div className="text-gray-500 text-[11px] mt-2 self-start">&lt;/p&gt;</div>

            <div className="flex items-center space-x-3 group cursor-pointer w-fit mt-8 pl-4">
              <span className="text-2xl font-bold text-[#00adb5] tracking-wide">Let's Talk</span>
              <div className="bg-[#1c2229] border border-gray-700 p-2.5 rounded-full text-[#00adb5] shadow-lg">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              </div>
            </div>
          </div>

          {/* ৪. ডানপাশের এক্সপেরিয়েন্স স্ট্যাটস কার্ড (Col: 3) */}
          <div className="col-span-3 justify-self-end relative -top-16 bg-[#1c2229] rounded-[40px] px-8 py-8 flex flex-col gap-8 w-[210px] h-[260px] shadow-2xl border border-gray-800/50">
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-[#00adb5]">5</span>
              <span className="text-[10px] text-gray-400 font-sans font-medium uppercase tracking-wider leading-tight">
                Programming<br />Language
              </span>
            </div>

            <div className="border-t border-gray-800"></div>

            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-[#00adb5]">4</span>
              <span className="text-[10px] text-gray-400 font-sans font-medium uppercase tracking-wider leading-tight">
                Development<br />Tools
              </span>
            </div>
          </div>

        </div>
      </div>

      
      <AboutMe />
      <Skills />
      <Works />

    </>
  );
}