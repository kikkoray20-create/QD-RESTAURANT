import React from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      {/* Decorative Floating Elements - Positioned more intentionally */}
      <div className="absolute top-[15%] -right-20 w-[500px] h-[500px] z-10 hidden xl:block animate-pulse duration-[5000ms]">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" 
          alt="Premium Pizza" 
          className="w-full h-full object-cover rounded-full shadow-[0_0_100px_rgba(0,0,0,0.9)] border-[20px] border-[#111] hover:rotate-6 transition-transform duration-1000"
        />
      </div>
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] z-10 hidden xl:block animate-bounce duration-[8000ms]">
        <img 
          src="https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80" 
          alt="Golden Momos" 
          className="w-full h-full object-cover rounded-full shadow-[0_0_100px_rgba(0,0,0,0.9)] border-[15px] border-[#111] hover:-rotate-6 transition-transform duration-1000"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8 reveal active">
            <span className="h-px w-10 bg-[#FFB300]"></span>
            <h2 className="text-[#FFB300] font-black tracking-[0.4em] uppercase text-[10px] md:text-xs">
              THE LEGEND OF GTB NAGAR
            </h2>
          </div>
          
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-black text-white leading-[0.9] mb-10 reveal active delay-1 tracking-tighter uppercase">
            BEST <br/> QUALITY <br/> <span className="text-[#FFB300] text-glow">FOOD</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed mb-12 reveal active delay-2 font-medium">
            Experience the iconic taste that defined a generation of North Campus students. Legendery Tandoori Momos & more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 reveal active delay-3">
            <Link 
              to="/menu" 
              className="bg-[#FFB300] text-black px-12 py-5 rounded-full font-black text-xs tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(255,179,0,0.3)] text-center btn-hover-effect"
            >
              EXPLORE MENU
            </Link>
            <a 
              href={RESTAURANT_INFO.bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-black text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 text-center"
            >
              BOOK A TABLE
            </a>
          </div>

          <div className="mt-16 flex items-center gap-12 reveal active delay-3 opacity-60">
            <div>
              <div className="text-3xl font-black text-white leading-none">{RESTAURANT_INFO.rating} ★</div>
              <div className="text-[9px] font-bold tracking-widest text-gray-500 uppercase mt-2">Google Rating</div>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <div className="text-3xl font-black text-white leading-none">3.1K+</div>
              <div className="text-[9px] font-bold tracking-widest text-gray-500 uppercase mt-2">Reviews</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Centered Bottom Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>
    </div>
  );
};

export default Hero;