import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from 'motion/react'

import appLogo from "/favicon.ico";

import GoogleTranslate, { LANGUAGES } from "next-google-translate-widget";
import "next-google-translate-widget/styles";

const LanguageSwitcher = () => {
  // Contoh: filter hanya menampilkan beberapa bahasa
  const selectedLangs = LANGUAGES.filter((lang) =>
    ["en", "id"].includes(lang.value)
  );
  
  return (
    <GoogleTranslate
      pageLanguage="id"
      languages={selectedLangs}
      menuAlign="right"
      onLanguageChange={(lang) => {
        document.documentElement.lang = lang;
      }}
    />
  );
}

const BrandLogo = () => (
  <Link to='/' className='inline-flex items-center gap-3 group'>
    <div className="size-10 transition-transform duration-300 group-hover:scale-105">
      <img src={appLogo} alt="AuthenticGuards Logo" className='size-full object-contain' />
    </div>
    <div className="flex flex-col">
      <h2 className='text-lg font-bold text-[#1A1A1A] leading-tight tracking-tight group-hover:text-[#8C6F3D] transition-colors duration-300'>
        AuthenticGuards
      </h2>
      <p className='text-xs font-medium text-[#8C6F3D] leading-tight'>
        Technology
      </p>
    </div>
  </Link>
);

interface NavLinkProps {
  label: string,
  href: string
}

export default function HeaderMain() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  
  const navLinks: NavLinkProps[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '/about' },
    { label: 'Layanan', href: '/services' },
    { label: 'Teknologi', href: '/technology' },
    { label: 'Mitra', href: '/partners' },
    { label: 'Kontak', href: '/contact' }
  ];
  
  function toggleMobileNav(show: boolean) {
    setIsMobileOpen(show);
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  // Smooth scroll untuk anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      toggleMobileNav(false);
    }
  }
  
  useEffect(() => {
    const handleResize = () => {
      toggleMobileNav(false);
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Close mobile menu on route change
  useEffect(() => {
    toggleMobileNav(false);
  }, [location.pathname])
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className='sticky top-0 bg-white/95 md:bg-white/80 md:backdrop-blur-md border-b border-[#E8D09E]/30 z-50'
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <BrandLogo />
        
        <div className="flex items-center gap-1">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className='px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#8C6F3D] rounded-lg hover:bg-[#FAF8F5] transition-all'
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  key={link.href} 
                  to={link.href}
                  className='px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#8C6F3D] rounded-lg hover:bg-[#FAF8F5] transition-all'
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
          
          <div className="z-0">
            <LanguageSwitcher />
          </div>
          
          {/* Mobile Fullscreen Menu */}
          <div className={`fixed inset-0 z-50 bg-white flex flex-col transition-all duration-300 ease-in-out h-screen w-screen lg:hidden ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <div className="flex items-center justify-between p-6 border-b border-[#E8D09E]/30">
              <BrandLogo />
              <button
                onClick={() => toggleMobileNav(false)}
                className='p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer'
                aria-label='Close Menu'
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className='flex-1 py-8 px-6 flex flex-col space-y-2 overflow-auto'>
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className='px-4 py-3 text-base font-semibold text-gray-700 hover:text-[#8C6F3D] rounded-lg hover:bg-[#FAF8F5] transition-all'
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link 
                    key={link.href} 
                    to={link.href}
                    className='px-4 py-3 text-base font-semibold text-gray-700 hover:text-[#8C6F3D] rounded-lg hover:bg-[#FAF8F5] transition-all'
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
            
            <div className="text-center text-xs text-gray-400 font-medium tracking-wide space-y-1 border-t border-[#E8D09E]/20 p-6 bg-[#FAF8F5]">
              <p>All Rights Reserved</p>
              <p>© {new Date().getFullYear()} PT. Autentikasi Garda Teknologi</p>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => toggleMobileNav(true)}
            className="lg:hidden p-2 text-[#1A1A1A] hover:bg-[#FAF8F5] rounded-lg"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
      </div>
    </motion.header>
  )
}