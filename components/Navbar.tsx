
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RESTAURANT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MENU', path: '/menu' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'CONTACTS', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[60] transition-all duration-500 ${scrolled ? 'bg-black/95 py-3 shadow-2xl backdrop-blur-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#FFB300] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg">
               <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">QD's</span>
              <span className="text-[9px] tracking-[0.3em] font-bold text-gray-400">RESTAURANT</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-black tracking-widest transition-all hover:text-[#FFB300] relative group/link ${
                  location.pathname === link.path ? 'text-[#FFB300]' : 'text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFB300] transition-all duration-300 group-hover/link:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <a
              href={RESTAURANT_INFO.swiggyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFB300] text-black px-6 py-2.5 rounded-full text-xs font-black tracking-widest hover:bg-white transition-all btn-hover-effect"
            >
              ORDER ONLINE
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 relative z-50 focus:outline-none"
          >
            <div className="w-8 h-5 flex flex-col justify-between overflow-hidden">
              <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-[2px] bg-[#FFB300] transition-all duration-300 ${isMobileMenuOpen ? '-translate-x-full opacity-0' : ''}`}></span>
              <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 mobile-nav-overlay bg-[#0A0A0A] flex flex-col justify-center items-center ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="space-y-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-3xl font-black tracking-tighter transition-all ${
                location.pathname === link.path ? 'text-[#FFB300]' : 'text-white hover:text-[#FFB300]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-10">
            <a
              href={RESTAURANT_INFO.swiggyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFB300] text-black px-12 py-4 rounded-full text-sm font-black tracking-widest shadow-2xl"
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
