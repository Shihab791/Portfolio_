// src/app/components/About.js
export default function AboutMe() {
  return (
    <div className="min-h-screen bg-[#0f1316] text-white font-mono flex flex-col items-center justify-center relative px-4 sm:px-8 md:px-16 lg:px-24 py-20 lg:py-16 overflow-hidden select-none">
      
      {/* ১. ব্যাকগ্রাউন্ড SVG লাইন (মোবাইলে অপাসিটি কমানো হয়েছে ক্ল্যারিটির জন্য) */}
      <div className="absolute inset-0 opacity-[0.12] sm:opacity-[0.25] pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M -50,300 C 100,200 150,450 400,350 S 550,150 700,250" fill="none" stroke="#2c3a47" strokeWidth="2" />
          <path d="M -50,340 C 120,240 170,490 420,390 S 570,190 720,290" fill="none" stroke="#2c3a47" strokeWidth="2" />
          <path d="M -50,380 C 140,280 190,530 440,430 S 590,230 740,330" fill="none" stroke="#2c3a47" strokeWidth="2" />
          <path d="M 450,100 C 550,50 750,80 850,200 S 750,450 600,400 S 350,150 450,100 Z" fill="none" stroke="#2c3a47" strokeWidth="2" />
          <path d="M 480,130 C 560,90 720,110 800,210 S 710,390 590,350 S 400,170 480,130 Z" fill="none" stroke="#2c3a47" strokeWidth="1.8" />
          <path d="M 510,160 C 570,130 690,140 750,220 S 680,340 580,310 S 450,190 510,160 Z" fill="none" stroke="#2c3a47" strokeWidth="1.5" />
          <path d="M 540,190 C 580,170 660,180 700,230 S 650,290 580,270 S 500,210 540,190 Z" fill="none" stroke="#2c3a47" strokeWidth="1.2" />

          {/* ডান পাশের বড় ও বাঁকানো দাগগুলো */}
          <path d="M 850,-50 C 1050,150 1200,0 1450,200 S 1700,-50 1950,150" fill="none" stroke="#2c3a47" strokeWidth="2" />
          <path d="M 880,-20 C 1080,180 1230,30 1480,230 S 1730,-20 1980,180" fill="none" stroke="#2c3a47" strokeWidth="2" />
          <path d="M 910,10 C 1110,210 1260,60 1510,260 S 1760,10 2010,210" fill="none" stroke="#2c3a47" strokeWidth="2" />

          {/* নিচের দিকের গভীর সমান্তরাল লাইনের ডিজাইন */}
          <path d="M 100,750 C 350,550 600,850 900,680 S 1350,900 1650,720" fill="none" stroke="#2c3a47" strokeWidth="2.2" />
          <path d="M 100,800 C 350,600 600,900 900,730 S 1350,950 1650,770" fill="none" stroke="#2c3a47" strokeWidth="2.2" />
          <path d="M 100,850 C 350,650 600,950 900,780 S 1350,1000 1650,820" fill="none" stroke="#2c3a47" strokeWidth="2.2" />
        </svg>
      </div>

      {/* ২. বাম পাশের ফিক্সড ওভাল সাইডবার (মোবাইলে হাইড, md থেকে দেখাবে) */}
      <div className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 flex-col items-center space-y-6 bg-[#161a1e]/95 border border-gray-800/80 py-6 px-3.5 rounded-full shadow-[0_25px_60px_rgba(0,0,0,0.6)] z-20">
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
        </button>
        <button className="bg-white text-black p-2 rounded-full shadow-lg transition-transform hover:scale-105">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
        </button>
      </div>

      {/* ৩. টপ মাউস স্ক্রলার ইন্ডিকেটর */}
      <div className="absolute top-6 left-[50%] -translate-x-[50%] flex flex-col items-center z-10">
        <div className="w-[20px] h-[32px] border-2 border-[#00adb5] rounded-full flex justify-center pt-1.5 shadow-[0_0_8px_rgba(0,173,181,0.3)]">
          <div className="w-[3px] h-[6px] bg-[#00adb5] rounded-full animate-bounce"></div>
        </div>
        <div className="h-10 sm:h-14 border-l-2 border-dashed border-gray-600/70 mt-1 relative">
          <div className="w-1.5 h-1.5 bg-white rotate-45 absolute -bottom-1 -left-[4px]"></div>
        </div>
      </div>

      {/* মেইন লেআউট কন্টেইনার: মোবাইলে flex-col, ডেস্কটপে grid */}
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:grid lg:grid-cols-12 items-center gap-10 lg:gap-12 z-10 md:pl-12 lg:pl-16 mt-12 lg:mt-0">
        
        {/* ৪. কন্টেন্ট এরিয়া (মোবাইলে full width, ডেস্কটপে col-span-7) */}
        <div className="w-full lg:col-span-7 flex flex-col items-center lg:items-start space-y-6 sm:space-y-8">
          
          {/* টাইটেল বক্স */}
          <div className="relative w-fit">
            <div className="bg-[#11161a] border border-[#00adb5] rounded-tr-[28px] rounded-bl-[28px] px-8 sm:px-12 py-3 shadow-[0_0_35px_rgba(0,173,181,.25)]">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-white font-sans">About Me</h2>
            </div>
          </div>

          {/* কোড টেক্সট বক্স */}
          <div className="bg-[#212730]/95 border border-gray-800/60 rounded-[24px] sm:rounded-[28px] p-5 sm:p-8 shadow-2xl space-y-4 sm:space-y-5 w-full max-w-[620px] text-[12px] sm:text-[13px] font-sans tracking-wide text-gray-400 leading-6 sm:leading-7">
            
            <div className="text-gray-600 text-[10px] font-mono">
              &lt;p&gt;
            </div>

            <h3 className="text-xl sm:text-[25px] font-medium text-[#00adb5] font-mono">
              Hello!
            </h3>

            <p className="font-light leading-6 sm:leading-8">
              My name is <span className="text-[#00adb5]">Md Enjamul Haque Shihab</span>, and I am a passionate
              <span className="text-[#00adb5]"> Full-Stack Developer</span> with a strong interest in building
              modern <span className="text-[#00adb5]">websites</span> and
              <span className="text-[#00adb5]"> cross-platform mobile applications</span>.
              I work with <span className="text-[#00adb5]">HTML</span>,
              <span className="text-[#00adb5]"> CSS</span>,
              <span className="text-[#00adb5]"> JavaScript</span>,
              <span className="text-[#00adb5]"> React</span>,
              <span className="text-[#00adb5]"> Next.js</span>,
              <span className="text-[#00adb5]"> Flutter</span>,
              <span className="text-[#00adb5]"> Dart</span>,
              <span className="text-[#00adb5]"> Python</span>, and
              <span className="text-[#00adb5]"> Django</span> to build responsive,
              user-friendly, and high-performance applications.
            </p>

            <p className="font-light leading-6 sm:leading-8">
              I enjoy solving real-world problems through clean, efficient, and maintainable
              code. As a continuous learner, I am always exploring new technologies and
              improving my development skills to become a better software engineer every day.
            </p>

            <p className="font-light leading-6 sm:leading-8">
              Beyond coding, I enjoy learning about emerging technologies, building personal
              projects, and challenging myself with new ideas that expand my knowledge and
              creativity. My goal is to create innovative digital solutions that provide
              meaningful value and exceptional user experiences.
            </p>

            <div className="text-gray-600 text-[10px] font-mono">
              &lt;/p&gt;
            </div>

          </div>
        </div>

        {/* ৫. ডানপাশের ইমেজ কার্ড (মোবাইলে নিচে চলে যাবে এবং রেসপন্সিভলি স্কেল হবে) */}
        <div className="w-full lg:col-span-5 flex justify-center lg:justify-end relative mt-4 lg:mt-0">
          <div className="relative rounded-[24px] sm:rounded-[36px] overflow-hidden w-full max-w-[320px] sm:max-w-[400px] lg:w-[430px] aspect-square shadow-[0_30px_70px_rgba(0,173,181,.18)] border border-gray-800/40">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/40 z-10 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop" 
              alt="Developer Workspace" 
              className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05]"
            />
          </div>
        </div>

      </div>
    </div>
  );
}