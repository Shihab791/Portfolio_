// src/app/components/Skills.js
export default function Skills() {
  const skillsList = [
    { 
      name: "HTML", 
      color: "bg-[#e34f26]", 
      textColor: "text-[#e34f26]", 
      icon: (
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625 11.233.002.242-2.625H5.414l.719 8.125h7.91l-.281 3.125-2.756.75-2.756-.75-.188-2.125H5.383l.363 4.125 6.254 1.75 6.254-1.75.672-7.5H8.531z"/>
        </svg>
      ) 
    },
    { 
      name: "CSS", 
      color: "bg-[#1572b6]", 
      textColor: "text-[#1572b6]", 
      icon: (
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm5.09 8.719L6.25 5.625h11.5l-.25 2.812H9.281l.25 2.813h7.656l-.656 7.188-4.531 1.25-4.531-1.25-.281-3.219h2.813l.156 1.563 1.844.5.156-.031 1.844-.5.281-3.125H6.844l-.25-2.813z"/>
        </svg>
      ) 
    },
    { 
      name: "JS", 
      color: "bg-[#f7df1e]", 
      textColor: "text-[#f7df1e]", 
      icon: (
        <svg className="w-8 h-8 fill-black" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.285-.105-.527-.046-.72.15-.645.96-.84 1.516-.765.555.075 1.05.375 1.35.795.225-.33.66-.915.66-.915-.375-.555-1.02-1.005-1.89-1.14-.9-.135-2.04.075-2.595 1.005-.39.66-.3 1.62.256 2.16.69.675 2.145.945 2.76 1.275.585.3 1.05.645 1.005 1.305-.045.72-.78 1.155-1.635 1.08-.75-.075-1.275-.45-1.635-.9-.225.39-.75 1.275-.75 1.275.54.75 1.38 1.2 2.64 1.29 1.44.09 2.535-.525 2.745-1.92zm-8.25-4.726v-1.125h-1.635v5.865c0 .9-.09 1.8-.765 2.295-.495.36-1.17.45-1.815.405-.99-.075-1.605-.585-1.92-1.23.255-.42.795-1.29.795-1.29.21.36.465.645.885.72.3.06.63-.015.75-.3.12-.285.12-.765.12-1.23v-5.43h1.635v-.015h1.95z"/>
        </svg>
      ) 
    },
    { 
      name: "REACT", 
      color: "bg-[#20232a]", 
      textColor: "text-[#61dafb]", 
      icon: (
        <svg className="w-9 h-9 fill-[#61dafb] animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24">
          <path d="M12 8.444c-1.964 0-3.556 1.592-3.556 3.556S10.036 15.556 12 15.556 15.556 13.964 15.556 12 13.964 8.444 12 8.444zm11.756 2.72c-.172-1.558-.992-3.054-2.316-4.226a12.822 12.822 0 00-4.04-2.392 9.062 9.062 0 00-2.458-.574 6.848 6.848 0 00-1.884-.04c-.378.04-.75.114-1.116.22C11.666 4.226 11.396 4.346 11.162 4.5a8.766 8.766 0 00-3.142 3.864 12.89 12.89 0 00-1.226 4.582c-.056.634-.046 1.274.032 1.906.074.61.22 1.206.434 1.782.464 1.24 1.254 2.33 2.296 3.162.972.776 2.128 1.312 3.376 1.564 1.124.226 2.28.168 3.382-.17a12.792 12.792 0 004.576-2.586c1.352-1.204 2.174-2.766 2.324-4.394a4.426 4.426 0 00-.098-1.748zM12 21.334c-4.47 0-8.232-2.146-9.61-5.188 1.378-3.042 5.14-5.186 9.61-5.186s8.232 2.144 9.61 5.186c-1.378 3.042-5.14 5.188-9.61 5.188z"/>
        </svg>
      ) 
    },
    { 
      name: "NEXT.JS", 
      color: "bg-[#000000] border border-gray-700", 
      textColor: "text-white", 
      icon: (
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0zm5.062 17.656l-4.906-6.313V16.88h-1.688V7.12h1.688l4.78 6.125V7.12h1.688v10.536h-1.562z"/>
        </svg>
      ) 
    },
    { 
      name: "FLUTTER", 
      color: "bg-[#02569B]", 
      textColor: "text-[#02569B]", 
      icon: (
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M14.314 0L2.3 12 6 15.7 21.684 0H14.314zm3.673 12L9.673 20.3l3.713 3.7L21.7 12h-3.713z"/>
        </svg>
      ) 
    },
    { 
      name: "DART", 
      color: "bg-[#0175C2]", 
      textColor: "text-[#0175C2]", 
      icon: (
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M4.1 6.1l7.4-7.4c.6-.6 1.6-.6 2.2 0l4.3 4.3 2.1-2.1c.3-.3.8-.3 1.1 0l2.7 2.7c.3.3.3.8 0 1.1l-2.1 2.1 4.3 4.3c.6.6.6 1.6 0 2.2l-7.4 7.4c-.6.6-1.6.6-2.2 0L4.1 8.3c-.6-.6-.6-1.6 0-2.2zM2 13.5l1.5-1.5 8.5 8.5-1.5 1.5c-.3.3-.8.3-1.1 0L2.3 14.6c-.4-.3-.4-.8-.3-1.1zm18.5-4l-8.5-8.5 1.5-1.5c.3-.3.8-.3 1.1 0l9.1 9.1c.3.3.3.8 0 1.1l-1.5 1.5-.7-1.7z"/>
        </svg>
      ) 
    },
    { 
      name: "PYTHON", 
      color: "bg-[#3776AB]", 
      textColor: "text-[#3776AB]", 
      icon: (
        <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
          <path d="M11.927 0C5.36 0 5.518 2.844 5.518 2.844l.069 2.927h5.733c1.942 0 3.513 1.488 3.513 3.328v3.454h1.765s5.395-.623 5.395-5.32c0-4.697-4.47-7.233-10.066-7.233zm-4.11 5.706c-.482 0-.874.39-.874.874 0 .483.392.875.874.875.483 0 .875-.392.875-.875 0-.484-.392-.874-.875-.874zm4.11 3.597H6.162s-5.395.623-5.395 5.32c0 4.698 4.47 7.233 10.066 7.233 6.567 0 6.408-2.844 6.408-2.844l-.069-2.927H11.44c-1.942 0-3.513-1.488-3.513-3.328V9.303zm4.11 6.502c.482 0 .874.392.874.875 0 .482-.392.874-.874.874-.483 0-.875-.392-.875-.874 0-.483.392-.875.875-.875z"/>
        </svg>
      ) 
    },
    { 
      name: "DJANGO", 
      color: "bg-[#092E20]", 
      textColor: "text-[#00ff88]", 
      icon: (
        <svg className="w-8 h-8 fill-[#00ff88]" viewBox="0 0 24 24">
          <path d="M12.213 6.3c-.636 0-1.127.185-1.474.554-.347.37-.534.908-.56 1.615h2.008c-.013-.485-.118-.849-.318-1.092-.2-.243-.49-.364-.868-.364-.027 0 0 0 .212-.713zM11.956 0c.937 0 1.83.13 2.68.39a8.916 8.916 0 0 1 2.316 1.077 10.635 10.635 0 0 1 1.764 1.649c.5.57.904 1.18 1.21 1.83a15.82 15.82 0 0 1 .843 1.9c.2.6.34 1.168.423 1.705.083.536.124 1.01.124 1.424 0 1.258-.235 2.4-.707 3.424a8.318 8.318 0 0 1-1.983 2.76 9.4 9.4 0 0 1-3.003 1.835c-1.157.433-2.396.65-3.717.65-1.258 0-2.428-.2-3.512-.6-.24-.09-.49-.2-.733-.314l.792-2.102c.247.126.51.24.792.343.896.333 1.84.5 2.83.5 1.707 0 3.033-.455 3.978-1.365.945-.91 1.417-2.228 1.417-3.955V11.2h-3.328c-.97 0-1.78.298-2.43 1.34h-.233V8.892h6v2.308h.017V8.508c0-1.04-.24-1.847-.723-2.42a2.6 2.6 0 0 0-2.02-.857c-1.146 0-2.067.436-2.76 1.307-.694.872-1.053 2.1-1.078 3.687h4.093v2.164H.538V10.23h3.804V1.89h2.384v2.545C7.456 3.047 8.163 1.99 8.845 1.27a5.558 5.558 0 0 1 3.11-1.27z"/>
        </svg>
      ) 
    },
  ];

  const codeLines = Array(35).fill([
    "if (this.$element.find('.next, .prev').length && $.support.transition) {",
    "  this.$element.trigger($.support.transition.end)",
    "  this.cycle(true)",
    "}",
    "clearInterval(this.interval)",
    "this.interval = null",
    "return this",
    "var $active = this.$element.find('.item.active')",
    "var $next = $active[direction]()",
    "if (!$next.length) {",
    "  if (!this.options.wrap) return",
    "  $next = this.$element.find('.item')[fallback]()",
    "}"
  ]).flat().join("\n");

  return (
    <div className="min-h-screen bg-[#1f242c] text-white font-mono flex flex-col items-center justify-center relative px-4 sm:px-8 md:px-16 py-20 overflow-hidden select-none">
      
      {/* Background Code Matrix */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none z-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 h-full px-4 md:px-8 text-[10px] md:text-[11px] leading-relaxed select-none">
          <pre className="overflow-hidden whitespace-pre-wrap">{codeLines}</pre>
          <pre className="hidden md:block overflow-hidden whitespace-pre-wrap">{codeLines}</pre>
          <pre className="hidden md:block overflow-hidden whitespace-pre-wrap">{codeLines}</pre>
        </div>
      </div>

      {/* সেকশনের নিচে কোড ট্রানজিশন গ্রেডিয়েন্ট */}
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

      {/* বড় নিয়ন কোড আইকন */}
      <div className="mt-6 sm:mt-8 z-10 text-[#00adb5] text-5xl sm:text-7xl font-light tracking-tighter drop-shadow-[0_0_6px_#00adb5] animate-pulse">
        &lt;/&gt;
      </div>

      {/* Title */}
      <div className="text-center mt-3 sm:mt-4 z-10">
        <h2 className="text-4xl sm:text-[54px] font-bold tracking-wider text-white leading-none">Skills</h2>
        <div className="w-16 sm:w-20 h-[3px] bg-[#00adb5] mx-auto mt-2 rounded-full relative shadow-[0_0_8px_#00adb5]">
          <div className="w-1.5 h-1.5 bg-[#00adb5] rounded-full absolute -left-1 -top-[1.5px]"></div>
          <div className="w-1.5 h-1.5 bg-[#00adb5] rounded-full absolute -right-1 -top-[1.5px]"></div>
        </div>
      </div>

      <p className="text-gray-400 text-[10px] sm:text-[11px] tracking-wide mt-3 text-center max-w-xs sm:max-w-xl z-10 px-4">
        I am striving to never stop learning and improving
      </p>

      {/* Cards Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 sm:mt-12 z-10 w-full max-w-[360px] sm:max-w-none justify-center px-4">
        <div className="w-full sm:w-[165px] h-[72px] bg-[#a8f5f8] border-t-4 border-[#00adb5] rounded-lg p-2 shadow-xl text-center flex flex-col items-center justify-center">
          <svg className="w-[18px] h-[18px] text-black/80 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <h4 className="text-[11px] font-bold text-black font-sans leading-tight">Web Development</h4>
          <p className="text-[7px] font-bold text-black/60 uppercase font-sans tracking-tighter mt-0.5">HTML • CSS • JS • REACT</p>
        </div>

        <div className="w-full sm:w-[165px] h-[72px] bg-[#a8f5f8] border-t-4 border-[#00adb5] rounded-lg p-2 shadow-xl text-center flex flex-col items-center justify-center">
          <svg className="w-[18px] h-[18px] text-black/80 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="3.5" />
          </svg>
          <h4 className="text-[11px] font-bold text-black font-sans leading-tight">App Development</h4>
          <p className="text-[7px] font-bold text-black/60 uppercase font-sans tracking-tighter mt-0.5">iOS • Android</p>
        </div>
      </div>

      {/* ৯টি স্কিলের সম্পূর্ণ রেসপন্সিভ গ্রিড ম্যাপিং */}
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-x-3 sm:gap-x-5 gap-y-8 sm:gap-y-10 max-w-5xl mt-12 sm:mt-16 z-10 px-4 justify-items-center w-full">
        {skillsList.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center space-y-2 sm:space-y-3 group cursor-pointer w-full max-w-[75px]">
            <div className={`w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] ${skill.color} rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.4)] transition-all duration-300 transform group-hover:scale-110 relative`}>
              <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] flex items-center justify-center">
                {skill.icon}
              </div>
            </div>
            <span className={`text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest uppercase ${skill.textColor} pt-1 text-center truncate w-full`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* সেকশনের নিচে ড্যাশড কানেক্টর লাইন */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="h-12 sm:h-16 border-l-2 border-dashed border-[#00adb5]/50 relative">
          <div className="w-1.5 h-1.5 bg-[#00adb5] rotate-45 absolute -bottom-1 -left-[4px] shadow-[0_0_8px_#00adb5]"></div>
        </div>
      </div>

    </div>
  );
}