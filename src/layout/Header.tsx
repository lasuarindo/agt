import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { ArrowRight, Menu, X, Globe, Check, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

import appLogo from "/favicon.ico";

import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: "id", label: "Bahasa Indonesia", short: "ID" },
  { code: "en", label: "English", short: "EN" },
] as const;

type LanguageCode = (typeof LANGUAGES)[number]["code"];

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLLIElement | null>>([]);
  const reduceMotion = useReducedMotion();

  const current = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];
  const currentIdx = Math.max(0, LANGUAGES.findIndex((l) => l.code === i18n.language));

  const selectLanguage = (code: LanguageCode) => {
    if (code !== i18n.language) {
      void i18n.changeLanguage(code);
    }
    setOpen(false);
    triggerRef.current?.focus();
  };

  const openMenu = (index: number = currentIdx) => {
    setActiveIndex(index);
    setOpen(true);
  };

  // Saat dibuka, pindahkan fokus ke opsi bahasa aktif.
  useEffect(() => {
    if (!open) return;
    optionRefs.current[activeIndex]?.focus();
    // Fokus hanya perlu diatur saat menu dibuka, bukan saat activeIndex berubah.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Tutup saat klik di luar.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const focusOption = (index: number) => {
    const next = (index + LANGUAGES.length) % LANGUAGES.length;
    setActiveIndex(next);
    optionRefs.current[next]?.focus();
  };

  const handleListKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        focusOption(activeIndex + 1);
        break;
      case "ArrowUp":
        e.preventDefault();
        focusOption(activeIndex - 1);
        break;
      case "Home":
        e.preventDefault();
        focusOption(0);
        break;
      case "End":
        e.preventDefault();
        focusOption(LANGUAGES.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        selectLanguage(LANGUAGES[activeIndex].code);
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        break;
    }
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      openMenu();
    }
  };

  const menuAnim = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: -6, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -6, scale: 0.98 },
      };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t("language")}: ${current.label}`}
        className="group inline-flex items-center gap-1.5 rounded-full border border-[#E8D09E]/50 bg-white/70 px-3 py-1.5 text-sm font-semibold text-[#1A1A1A] shadow-sm backdrop-blur-sm transition-colors hover:border-[#C5A059] hover:bg-[#FAF8F5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]/60"
      >
        <Globe className="h-4 w-4 text-[#8C6F3D]" aria-hidden="true" />
        <span className="uppercase tracking-wide">{current.short}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-[#8C6F3D] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={t("language")}
            tabIndex={-1}
            onKeyDown={handleListKeyDown}
            {...menuAnim}
            transition={{ duration: reduceMotion ? 0 : 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full z-[60] mt-2 min-w-[13rem] origin-top-right overflow-hidden rounded-2xl border border-[#E8D09E]/40 bg-white p-1.5 shadow-xl shadow-[#1A1A1A]/10"
          >
            {LANGUAGES.map((lang, i) => {
              const selected = lang.code === i18n.language;
              return (
                <li
                  key={lang.code}
                  ref={(el) => {
                    optionRefs.current[i] = el;
                  }}
                  role="option"
                  aria-selected={selected}
                  tabIndex={-1}
                  onClick={() => selectLanguage(lang.code)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex cursor-pointer select-none items-center gap-2 rounded-xl px-3 py-2 outline-none transition-colors focus:bg-[#FAF8F5] ${
                    selected ? "bg-[#FAF8F5]" : "hover:bg-[#FAF8F5]"
                  }`}
                >
                  <span className="flex-1 whitespace-nowrap text-left text-sm font-semibold text-[#1A1A1A]">
                    {lang.label}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C6F3D]">
                    {lang.short}
                  </span>
                  <Check
                    className={`h-4 w-4 text-[#8C6F3D] transition-opacity ${
                      selected ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
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
  const { t } = useTranslation('common')
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  
  const navLinks: NavLinkProps[] = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.technology'), href: '/technology' },
    { label: t('nav.partners'), href: '/partners' },
    { label: t('nav.contact'), href: '/contact' }
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
                aria-label={t('menu.close')}
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
              <p>{t('menu.rightsReserved')}</p>
              <p>{t('menu.copyright', { year: new Date().getFullYear() })}</p>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => toggleMobileNav(true)}
            className="lg:hidden p-2 text-[#1A1A1A] hover:bg-[#FAF8F5] rounded-lg"
            aria-label={t('menu.open')}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
      </div>
    </motion.header>
  )
}