'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.send(
      'service_xhgx2x2',    
      'template_8s7w8pj',   
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      },
      '-DVuMQv-F4tmP6Su-'     
    )
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        setStatus('error');
      });
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-mono flex flex-col justify-between relative overflow-hidden select-none">

      {/* সেকশনের উপরে ট্রানজিশন গ্রেডিয়েন্ট */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>

      {/* টপ কানেক্টর লাইন ও স্ক্রলার ইন্ডিকেটর */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="h-12 sm:h-16 border-l-2 border-dashed border-[#00adb5]/50 relative mb-1">
          <div className="w-1.5 h-1.5 bg-[#00adb5] rotate-45 absolute -top-1 -left-[4px] shadow-[0_0_8px_#00adb5]"></div>
        </div>
        <div className="w-[18px] h-[30px] border-2 border-[#00adb5] rounded-full flex justify-center pt-1 shadow-[0_0_8px_rgba(0,173,181,0.3)]">
          <div className="w-[2px] h-[5px] bg-[#00adb5] rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* মেইন কন্টেন্ট কন্টেইনার */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 py-20 sm:py-24 z-10 w-full max-w-4xl mx-auto mt-12 sm:mt-8">
        
        {/* Contact হেডিং (রেসপন্সিভ সাইজ করা হয়েছে) */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-[54px] font-bold tracking-wider text-[#00adb5] leading-none drop-shadow-[0_0_6px_#00adb5]">Contact</h2>
          <div className="w-16 sm:w-20 h-[3px] bg-[#00adb5] mx-auto mt-2 rounded-full relative shadow-[0_0_8px_#00adb5]">
            <div className="w-1.5 h-1.5 bg-[#00adb5] rounded-full absolute -left-1 -top-[1.5px]"></div>
            <div className="w-1.5 h-1.5 bg-[#00adb5] rounded-full absolute -right-1 -top-[1.5px]"></div>
          </div>
        </div>

        {/* সাবটাইটেল */}
        <p className="text-gray-400 text-[10px] sm:text-[11px] tracking-wide mt-3 text-center">
          I'm currently available
        </p>

        {/* কাস্টম "Send Me A Message" ব্যানার (মোবাইলে টেক্সট সাইজ অপ্টিমাইজড) */}
        <div className="mt-8 sm:mt-12 mb-8 sm:mb-10 border-2 border-[#00adb5] text-[#00adb5] font-bold text-sm sm:text-lg tracking-widest px-6 sm:px-10 py-2.5 sm:py-3 rounded-[20px_0px_20px_0px] shadow-[0_0_15px_rgba(0,173,181,0.15)] bg-transparent">
          Send Me A Message
        </div>

        {/* কন্ট্যাক্ট ফর্ম */}
        <form onSubmit={handleSubmit} className="w-full space-y-8 sm:space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 sm:gap-y-10">
            {/* Name Input */}
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] sm:text-[11px] text-[#00adb5] font-semibold tracking-wider">Your name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="bg-transparent border-b border-gray-600 focus:border-[#00adb5] text-[12px] text-white py-2 outline-none transition-colors duration-300 placeholder-gray-600"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] sm:text-[11px] text-[#00adb5] font-semibold tracking-wider">Your email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="bg-transparent border-b border-gray-600 focus:border-[#00adb5] text-[12px] text-white py-2 outline-none transition-colors duration-300 placeholder-gray-600"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="flex flex-col space-y-2 w-full">
            <label className="text-[10px] sm:text-[11px] text-[#00adb5] font-semibold tracking-wider">Your message *</label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your needs"
              required
              className="bg-transparent border-b border-gray-600 focus:border-[#00adb5] text-[12px] text-white py-2 outline-none transition-colors duration-300 placeholder-gray-600 w-full"
            />
          </div>

          {/* সাবমিট বাটন */}
          <div className="flex flex-col items-center gap-3 pt-2 sm:pt-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-[#00e5ff] text-black font-extrabold text-[12px] px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#00adb5] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.4)] group disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* স্ট্যাটাস মেসেজ */}
            {status === 'success' && (
              <p className="text-[#00ff88] text-[11px]">Message sent successfully! ✅</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-[11px]">Something went wrong. Try again. ❌</p>
            )}
          </div>
        </form>
      </div>

      {/* ফুটার সেকশন (প্যাডিং রেসপন্সিভ করা হয়েছে) */}
      <footer className="border-t border-gray-800/80 bg-[#111111]/60 py-6 px-4 sm:px-8 md:px-16 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 font-sans text-center md:text-left">
          
          {/* কপিরাইট */}
          <div>
            © 2026 Shihab. All rights reserved.
          </div>

          {/* পলিসি লিংকসমূহ */}
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>

          {/* সোশ্যাল মিডিয়া আইকনসমূহ */}
          <div className="flex items-center justify-center gap-4">
            {/* Instagram */}
            <a href="https://www.instagram.com/md__enjamul__haque__shihab?igsh=YTk4bHBlNTJiaHlj&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-transparent border border-gray-700 hover:border-[#00adb5] hover:text-[#00adb5] flex items-center justify-center transition-all duration-300 text-gray-400">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.181-.8.398-1.15.748-.35.35-.567.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.181.466.399.8.748 1.15.35.35.684.567 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058s2.987-.01 4.04-.058c.976-.045 1.505-.207 1.858-.344.466-.181.8-.398 1.15-.748.35-.35.567-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.987-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 4.594a5.604 5.604 0 110 11.208 5.604 5.604 0 010-11.208zM12 16a4 4 0 100-8 4 4 0 000 8zm5.884-8.884a1.31 1.31 0 100-2.622 1.31 1.31 0 000 2.622z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/shihabxyz?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-transparent border border-gray-700 hover:border-[#00adb5] hover:text-[#00adb5] flex items-center justify-center transition-all duration-300 text-gray-400">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com/Shihab791" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-transparent border border-gray-700 hover:border-[#00adb5] hover:text-[#00adb5] flex items-center justify-center transition-all duration-300 text-gray-400">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* ডিজাইনার ক্রেডিট */}
          <div>
            Design By <a href="https://github.com/Shihab791" target="_blank" rel="noopener noreferrer" className="text-[#00adb5] hover:underline">Shihab</a>
          </div>

        </div>
      </footer>

    </div>
  );
}