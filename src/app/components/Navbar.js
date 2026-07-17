import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    // ১. রেসপন্সিভ প্যাডিং সহ আপডেট করা <nav>
    <nav className="bg-[#232931] px-3 sm:px-4 md:px-6 py-3 flex items-center justify-between text-white font-mono">
      
      {/* 2. রেসপন্সিভ লোগো এবং টেক্সট */}
      <div className="flex items-center space-x-1 sm:space-x-2 font-bold tracking-wide flex-shrink-0">
        <span className="text-[#00adb5] text-base sm:text-lg">&lt;C/&gt;</span>
        <span className="text-[10px] sm:text-sm md:text-base lg:text-xl whitespace-nowrap">
          Md Enzamul Haque Shihab
        </span>
      </div>

      {/* 3. Right Side Wrapper */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-6 flex-shrink">
        
        {/* 4. Menu (মোবাইলে Home/Projects লুকিয়ে যাবে) */}
        <div className="hidden md:flex items-center space-x-6 text-[15px]">
          <Link
            href="/"
            className="text-[#00adb5] hover:opacity-80 transition-opacity"
          >
            Home
          </Link>

          <Link
  href="/#projects"
  className="text-[#eeeeee] hover:text-[#00adb5] transition-colors"
>
  Projects
</Link>
        </div>

        {/* 5. Search Bar (Responsive) */}
        <div className="relative flex items-center">
          <input
            type="text"
            className="
              bg-white
              text-black
              rounded-full
              h-6 sm:h-7
              w-16 sm:w-24 md:w-32 lg:w-44
              pl-3
              pr-7
              text-[10px]
              focus:outline-none
            "
          />
          <Search
            className="
              absolute
              right-2
              w-3 h-3
              sm:w-4 sm:h-4
              text-gray-500
              pointer-events-none
            "
          />
        </div>

        {/* 6. Social Media Wrapper */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-5 whitespace-nowrap text-[14px] text-[#eeeeee]">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/md__enjamul__haque__shihab?igsh=YTk4bHBlNTJiaHlj&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 sm:space-x-1.5 hover:text-[#00adb5] transition-colors"
          >
            {/* 7. প্রতিটি Icon এর জন্য রেসপন্সিভ ক্লাস */}
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-[#00adb5]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            {/* 8. টেক্সট মোবাইলে লুকিয়ে রাখা হয়েছে */}
            <span className="hidden lg:inline">Instagram</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shihabxyz?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 sm:space-x-1.5 hover:text-[#00adb5] transition-colors"
          >
            {/* 7. প্রতিটি Icon এর জন্য রেসপন্সিভ ক্লাস */}
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-[#00adb5]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.88v1.91h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V22h-3v-7.1c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.75V22h-3V8z"/>
            </svg>
            {/* 8. টেক্সট মোবাইলে লুকিয়ে রাখা হয়েছে */}
            <span className="hidden lg:inline">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Shihab791"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 sm:space-x-1.5 hover:text-[#00adb5] transition-colors"
          >
            {/* 7. প্রতিটি Icon এর জন্য রেসপন্সিভ ক্লাস */}
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-[#00adb5]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span className="hidden lg:inline">GitHub</span>
          </a>

        </div>
      </div>
    </nav>
  );
}