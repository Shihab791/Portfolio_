// src/app/components/Skills.js
export default function Skills() {
  const skillsList = [
    { name: "HTML", color: "bg-[#e34f26]", textColor: "text-[#e34f26]", icon: "5" },
    { name: "CSS", color: "bg-[#1572b6]", textColor: "text-[#1572b6]", icon: "3" },
    { name: "JS", color: "bg-[#f7df1e]", textColor: "text-[#f7df1e]", icon: "JS" },
    { name: "REACT", color: "bg-[#61dafb]", textColor: "text-[#61dafb]", icon: "⚛" },
    { name: "NEXT.JS", color: "bg-[#000000] border border-gray-700", textColor: "text-white", icon: "N" },
    { name: "FLUTTER", color: "bg-[#02569B]", textColor: "text-[#02569B]", icon: "F" },
    { name: "DART", color: "bg-[#0175C2]", textColor: "text-[#0175C2]", icon: "D" },
    { name: "PYTHON", color: "bg-[#3776AB]", textColor: "text-[#3776AB]", icon: "Py" },
    { name: "DJANGO", color: "bg-[#092E20]", textColor: "text-[#00ff88]", icon: "Dj" }, // Django এক সারিতে এবং কালার উজ্জ্বল নিয়ন সবুজ
  ];

  const codeLines = Array(45).fill([
    "if (this.$element.find('.next, .prev').length && $.support.transition) {",
    "  this.$element.trigger($.support.transition.end)",
    "  this.cycle(true)",
    "}",
    "clearInterval(this.interval)",
    "this.interval = null",
    "return this",
    "Carousel.prototype.next = function () {",
    "  if (this.sliding) return",
    "  return this.slide('next')",
    "}",
    "var $active = this.$element.find('.item.active')",
    "var $next = $active[direction]()",
    "var isCycling = this.interval",
    "var direction = type == 'next' ? 'left' : 'right'",
    "var fallback  = type == 'next' ? 'first' : 'last'",
    "var that      = this",
    "if (!$next.length) {",
    "  if (!this.options.wrap) return",
    "  $next = this.$element.find('.item')[fallback]()",
    "}",
    "if ($next.hasClass('active')) return (this.sliding = false)",
    "var relatedTarget = $next[0]",
    "var slideEvent = $.Event('slide.bs.carousel', {",
    "  relatedTarget: relatedTarget,",
    "  direction: direction",
    "})",
    "this.$element.trigger(slideEvent)",
    "if (slideEvent.isDefaultPrevented()) return"
  ]).flat().join("\n");

  return (
    <div className="min-h-screen bg-[#1f242c] text-white font-mono flex flex-col items-center justify-center relative px-16 py-20 overflow-hidden select-none">
      
      {/* Background Code Matrix */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none z-0">
        <div className="grid grid-cols-3 gap-16 h-full px-8 text-[11px] leading-relaxed select-none">
          <pre className="overflow-hidden whitespace-pre-wrap">{codeLines}</pre>
          <pre className="overflow-hidden whitespace-pre-wrap">{codeLines}</pre>
          <pre className="overflow-hidden whitespace-pre-wrap">{codeLines}</pre>
        </div>
      </div>

      {/* সেকশনের নিচে কোড ট্রানজিশন গ্রেডিয়েন্ট */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1f242c] to-transparent z-10 pointer-events-none"></div>

      {/* টপ মাউস স্ক্রলার ইন্ডিকেটর */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <div className="w-[18px] h-[30px] border-2 border-[#00adb5] rounded-full flex justify-center pt-1 shadow-[0_0_8px_rgba(0,173,181,0.3)]">
          <div className="w-[2px] h-[5px] bg-[#00adb5] rounded-full animate-bounce"></div>
        </div>
        <div className="h-10 border-l-2 border-dashed border-gray-600/50 mt-1 relative">
          <div className="w-1.5 h-1.5 bg-white rotate-45 absolute -bottom-1 -left-[4px]"></div>
        </div>
      </div>

      {/* বড় নিয়ন কোড আইকন */}
      <div className="mt-8 z-10 text-[#00adb5] text-7xl font-light tracking-tighter drop-shadow-[0_0_6px_#00adb5] animate-pulse">
        &lt;/&gt;
      </div>

      {/* Title */}
      <div className="text-center mt-4 z-10">
        <h2 className="text-[54px] font-bold tracking-wider text-white leading-none">Skills</h2>
        <div className="w-20 h-[3px] bg-[#00adb5] mx-auto mt-2 rounded-full relative shadow-[0_0_8px_#00adb5]">
          <div className="w-1.5 h-1.5 bg-[#00adb5] rounded-full absolute -left-1 -top-[1.5px]"></div>
          <div className="w-1.5 h-1.5 bg-[#00adb5] rounded-full absolute -right-1 -top-[1.5px]"></div>
        </div>
      </div>

      <p className="text-gray-400 text-[11px] tracking-wide mt-2 text-center max-w-xl z-10">
        I am striving to never stop learning and improving
      </p>

      {/* Cards Section */}
      <div className="flex gap-6 mt-12 z-10">
        <div className="w-[165px] h-[72px] bg-[#a8f5f8] border-t-4 border-[#00adb5] rounded-lg p-2 shadow-xl text-center flex flex-col items-center justify-center">
          <svg className="w-[18px] h-[18px] text-black/80 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <h4 className="text-[11px] font-bold text-black font-sans leading-tight">Web Developement</h4>
          <p className="text-[7px] font-bold text-black/60 uppercase font-sans tracking-tighter">HTML • CSS • JS • REACT</p>
        </div>

        <div className="w-[165px] h-[72px] bg-[#a8f5f8] border-t-4 border-[#00adb5] rounded-lg p-2 shadow-xl text-center flex flex-col items-center justify-center">
          <svg className="w-[18px] h-[18px] text-black/80 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="3.5" />
          </svg>
          <h4 className="text-[11px] font-bold text-black font-sans leading-tight">App Developement</h4>
          <p className="text-[7px] font-bold text-black/60 uppercase font-sans tracking-tighter">iOS • Android</p>
        </div>
      </div>

      {/* ৯টি স্কিলের সম্পূর্ণ গ্রিড ম্যাপিং এবং ডার্ক শ্যাডো ইফেক্ট */}
      <div className="grid grid-cols-9 gap-x-4 gap-y-10 max-w-5xl mt-16 z-10 px-4 justify-items-center w-full">
        {skillsList.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center space-y-3 group cursor-pointer">
            <div className={`w-[75px] h-[75px] ${skill.color} rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,0,0,0.35)] transition-all duration-300 transform group-hover:scale-110 relative`}>
              <span className="text-white text-2xl font-extrabold tracking-tighter drop-shadow-md">
                {skill.icon}
              </span>
            </div>
            <span className={`text-[12px] font-bold tracking-widest uppercase ${skill.textColor} pt-1`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* সেকশনের নিচে সুন্দর ড্যাশড কানেক্টর লাইন */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="h-16 border-l-2 border-dashed border-[#00adb5]/50 relative">
          <div className="w-1.5 h-1.5 bg-[#00adb5] rotate-45 absolute -bottom-1 -left-[4px] shadow-[0_0_8px_#00adb5]"></div>
        </div>
      </div>

    </div>
  );
}