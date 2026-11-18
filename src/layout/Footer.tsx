import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Award,
  ExternalLink,
  HelpCircle,
  BookOpen,
  FileText,
  MessageCircle,
  Shield,
  Lock,
  GlobeCheck,
  QrCode,
  Barcode,
  PenTool,
  FileBadge,
  type LucideIcon
} from 'lucide-react'
import appLogo from "/favicon.ico"
import { getHQOffice } from '@/data/offices'


export default function FooterMain() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Layanan',
      links: [
        { label: 'Sticker Hologram', href: '/services/hologram' },
        { label: 'Tafeta Label', href: '/services/tafeta' },
        // { label: 'Brand Protection', href: '/services#protection' },
        // { label: 'Supply Chain Security', href: '/services#supply' }
      ]
    },
    {
      title: 'Perusahaan',
      links: [
        { label: 'Tentang Kami', href: '/about' },
        { label: 'Teknologi', href: '/technology' },
        { label: 'Mitra Kami', href: '/partners' },
        // { label: 'Karir', href: '/contact' }
      ]
    },
    {
      title: 'Sumber Daya',
      links: [
        // { label: 'Pusat FAQ', href: '/faq', icon: <HelpCircle className="w-3 h-3" /> },
        // { label: 'Panduan Verifikasi', href: '/faq?category=verification', icon: <BookOpen className="w-3 h-3" /> },
        // { label: 'Dokumentasi API', href: '/faq?category=technology', icon: <FileText className="w-3 h-3" /> },
        // { label: 'Studi Kasus', href: '/partners', icon: <Award className="w-3 h-3" /> },
        // { label: 'Keamanan Data', href: '/faq?category=security', icon: <Shield className="w-3 h-3" /> },
        { label: 'ISO/IEC 27000', href: '^', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
        { label: 'ISO/IEC 18004', href: '^', icon: <QrCode className="w-3.5 h-3.5" /> },
        { label: 'GS1 Standards', href: '^', icon: <Barcode className="w-3.5 h-3.5" /> },
        { label: 'NIB 9120107221893', href: '^', icon: <PenTool className="w-3.5 h-3.5" /> },
        { label: 'HKI IDM000836339', href: '^', icon: <FileBadge className="w-3.5 h-3.5" /> }
      ]
    },
    {
      title: 'Bantuan',
      links: [
        { label: 'Hubungi Kami', href: '/contact', icon: <MessageCircle className="w-3 h-3" /> },
        { label: 'Kebijakan Privasi', href: '/privacy-policy', icon: <Lock className="w-3 h-3" /> },
        { label: 'Syarat & Ketentuan', href: '/term-condition', icon: <FileText className="w-3 h-3" /> },
        { label: 'Pusat FAQ', href: '/faq', icon: <HelpCircle className="w-3 h-3" /> },
        // { label: 'NIB', href: '#', icon: <PenTool className="w-3 h-3" /> },
        // { label: 'HIK', href: '#', icon: <ShieldCheck className="w-3 h-3" /> },
      ]
    }
  ]
  
  const officeHQ = getHQOffice()

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      label: 'Alamat',
      value: officeHQ.address,
      href: officeHQ.mapsUrl
    },
    {
      icon: <Phone className="w-4 h-4" />,
      label: 'Telepon',
      value: officeHQ.phoneDisplay,
      href: officeHQ.phoneLink
    },
    {
      icon: <Mail className="w-4 h-4" />,
      label: 'Email',
      value: officeHQ.email,
      href: `mailto:${officeHQ.email}`
    }
  ]

  const trustBadges = [
    { label: 'Since 2017', icon: <Award className="w-3.5 h-3.5" /> },
    // { label: '500+ Brand', icon: <Award className="w-3.5 h-3.5" /> },
    { label: 'Made in Indonesia', icon: <GlobeCheck className="w-3.5 h-3.5" /> }
  ]

  // Smooth scroll handler untuk anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.slice(1)
    const element = document.getElementById(targetId)
    
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Decorative Background - Subtle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-6">
              {/* Logo + Brand Name */}
              <Link to="/" className="inline-flex items-center gap-3 group">
                <div className="w-11 h-11 transition-transform duration-300 group-hover:scale-105">
                  <img src={appLogo} alt="AuthenticGuards Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <p className="font-extrabold text-white text-base leading-tight group-hover:text-[#E8D09E] transition-colors">
                    AuthenticGuards
                  </p>
                  <p className="text-[10px] text-[#E8D09E] font-semibold uppercase tracking-widest leading-tight">
                    Technology
                  </p>
                </div>
              </Link>

              <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                Sistem Anti-Counterfeit Pertama di Asia Pasifik. Melindungi produk dan membangun kepercayaan konsumen dengan teknologi autentikasi canggih sejak 2017.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {trustBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-gray-300"
                  >
                    <span className="text-[#E8D09E]">{badge.icon}</span>
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                {contactInfo.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-[#E8D09E] shrink-0 group-hover:bg-[#E8D09E]/10 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5 font-semibold">
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-300 group-hover:text-[#E8D09E] transition-colors leading-relaxed break-words">
                        {item.value}
                      </p>
                    </div>
                    {item.href.startsWith('http') && (
                      <ExternalLink className="w-3.5 h-3.5 text-gray-500 shrink-0 mt-1" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIdx) => {
                      const isPlain = link.href.startsWith('^');
                      const isAnchor = link.href.startsWith('#');
                      
                      const LinkContent = (
                        <>
                          {'icon' in link && link.icon && (
                            <span className="text-[#E8D09E]/60 group-hover:text-[#E8D09E] transition-colors">
                              {link.icon}
                            </span>
                          )}
                          <span>{link.label}</span>
                          {/* Ikon panah hanya muncul jika bukan teks biasa (Plain) */}
                          {!isPlain && (
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          )}
                        </>
                      );
                      
                      const baseClass = "flex items-center gap-1.5 w-full";
                      
                      return (
                        <li 
                          key={linkIdx} 
                          className="text-sm text-gray-400 hover:text-[#E8D09E] transition-colors duration-200 group"
                        >
                          {isPlain ? (
                            // Kondisi A: Hanya Teks Biasa (Bukan Link aktif)
                            <div className={`${baseClass} cursor-default`}>
                              {LinkContent}
                            </div>
                          ) : isAnchor ? (
                            // Kondisi B: Anchor Tag Internal (Smooth Scroll)
                            <a 
                              href={link.href} 
                              onClick={(e) => handleAnchorClick(e, link.href)} 
                              className={baseClass}
                            >
                              {LinkContent}
                            </a>
                          ) : (
                            // Kondisi C: Rute Navigasi Halaman Standar
                            <Link 
                              to={link.href} 
                              className={baseClass}
                            >
                              {LinkContent}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {currentYear} PT. Autentikasi Garda Teknologi. Hak cipta dilindungi.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E8D09E]" />
                <span>Pionir Anti-Counterfeit Asia Pasifik</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-white/10" />
              <div className="flex items-center gap-3">
                <Link to="/privacy-policy" className="hover:text-[#E8D09E] transition-colors">
                  Privasi
                </Link>
                <span className="text-white/20">•</span>
                <Link to="/term-condition" className="hover:text-[#E8D09E] transition-colors">
                  Ketentuan
                </Link>
                <span className="text-white/20">•</span>
                <Link to="/faq" className="hover:text-[#E8D09E] transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}