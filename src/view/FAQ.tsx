import { useState, useMemo, useEffect } from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  Search,
  ChevronDown,
  HelpCircle,
  Shield,
  ShieldCheck,
  Tag,
  Layers,
  Lock,
  Eye,
  Zap,
  CheckCircle2,
  ArrowRight,
  Globe,
  Users,
  Building2,
  Package,
  Sparkles,
  Smartphone,
  MapPin,
  Mail,
  Phone,
  Clock,
  BadgeCheck,
  ScanLine,
  Calendar,
  Award,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  FileText,
  BookOpen,
  AlertCircle,
  TrendingUp,
  Code2,
  Database,
  Fingerprint,
  QrCode,
  CreditCard,
  Handshake,
  HeadphonesIcon,
  ArrowUpRight
} from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================
interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  popular?: boolean
  lastUpdated?: string
  relatedLinks?: { label: string; href: string }[]
}

interface FAQCategory {
  id: string
  label: string
  icon: React.ReactNode
  color: string
  bgColor: string
  borderColor: string
  count: number
}

// ============================================================================
// FAQ DATA
// ============================================================================
const faqData: FAQItem[] = [
  // ===== TENTANG KAMI =====
  {
    id: 'about-1',
    category: 'about',
    popular: true,
    question: 'Apa itu AuthenticGuards?',
    answer: 'AuthenticGuards adalah layanan anti-counterfeit yang dioperasikan oleh PT. Autentikasi Garda Teknologi — pelopor sistem autentikasi produk pertama di Asia Pasifik sejak 2017. Kami menyediakan solusi marking terintegrasi dengan kode AG, QR code unik, scratch PIN, dan database real-time berstandar ISO/IEC 27000:2016 untuk melindungi brand dan konsumen.',
    lastUpdated: '2026-06-27',
    relatedLinks: [
      { label: 'Tentang Kami', href: '/about' },
      { label: 'Layanan Kami', href: '/services' }
    ]
  },
  {
    id: 'about-2',
    category: 'about',
    question: 'Siapa saja yang bisa menggunakan layanan AuthenticGuards?',
    answer: 'Layanan kami dirancang untuk brand, produsen, distributor, dan retailer dari berbagai industri — F&B, fashion & apparel, kecantikan, teknologi, kesehatan, lifestyle, otomotif, hingga pendidikan. Baik brand emerging maupun enterprise dapat menggunakan solusi kami sesuai skala bisnis mereka.',
    relatedLinks: [
      { label: 'Lihat Klien Kami', href: '/partners/our-client' },
      { label: 'Hubungi Tim Sales', href: '/contact' }
    ]
  },
  {
    id: 'about-3',
    category: 'about',
    question: 'Di mana lokasi kantor AuthenticGuards?',
    answer: 'Kantor pusat kami berlokasi di District 8 SCBD, Revenue Tower, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan 12190. Kami juga memiliki kantor cabang di Jl. Tamblong No.46, Bandung 40112, serta kantor regional di Vision Exchange, 2 Venture Drive, Singapore 608526. Jam operasional: Senin–Kamis 09:00–17:00, Jumat 09:00–16:30.',
    lastUpdated: '2026-06-27',
    relatedLinks: [
      { label: 'Hubungi Kami', href: '/contact' }
    ]
  },
  {
    "id": "about-4",
    "category": "about",
    "question": "Apa saja pencapaian AuthenticGuards?",
    "answer": "Sejak berdiri di Bandung pada 2017, kami meraih Top 100 Startup Asia Pacific (Echelon Asia Summit), alumni VIISA Vietnam, alumni Indigo Creative Nation (Telkom Group), kemitraan strategis Telkom Indonesia, adopsi ISO/IEC 18004:2015, dan telah dipercaya oleh berbagai brand terkemuka di Asia Pasifik.",
    "relatedLinks": [
      { "label": "Penghargaan Kami", "href": "/about/awards" },
      { "label": "Timeline Perusahaan", "href": "/about" }
    ]
  },
  {
    id: 'about-5',
    category: 'about',
    question: 'Di mana saya bisa melihat tim, investor, dan supporter AuthenticGuards?',
    answer: 'Profil tim leadership tersedia di halaman Our Team. Informasi investor, supporter, media coverage, serta penghargaan & sertifikasi juga ditampilkan di halaman Tentang Kami dan Partners sebagai referensi kredibilitas perusahaan.',
    relatedLinks: [
      { label: 'Tim Kami', href: '/about/our-team' },
      { label: 'Halaman Partners', href: '/partners' }
    ]
  },

  // ===== LAYANAN & PRODUK =====
  {
    id: 'service-1',
    category: 'services',
    popular: true,
    question: 'Apa saja layanan marking yang ditawarkan AuthenticGuards?',
    answer: 'Saat ini kami menyediakan 2 layanan marking aktif: (1) Hologram dengan QR — solusi flagship dengan lapisan keamanan ganda untuk produk premium, dan (2) Label Tafeta dengan QR — label tekstil untuk industri fashion & apparel. Solusi NFC Sticker dan Printing QR pada kemasan masih dalam tahap penelitian & pengembangan.',
    relatedLinks: [
      { label: 'Semua Layanan', href: '/services' },
      { label: 'Hologram dengan QR', href: '/services/hologram' },
      { label: 'Label Tafeta', href: '/services/tafeta' }
    ]
  },
  {
    id: 'service-2',
    category: 'services',
    question: 'Bagaimana cara kerja Hologram dengan QR?',
    answer: 'Setiap label hologram premium dilengkapi QR code unik yang terhubung ke database real-time. Konsumen scan QR via smartphone untuk memverifikasi keaslian produk dalam hitungan detik. Label juga memiliki fitur tamper-evident — kode menjadi tidak sah setelah label dilepas. Setiap kode AG memiliki batas verifikasi hingga 15 kali.',
    lastUpdated: '2026-06-27',
    relatedLinks: [
      { label: 'Detail Hologram', href: '/services/hologram' },
      { label: 'Teknologi Kami', href: '/technology' }
    ]
  },
  {
    id: 'service-3',
    category: 'services',
    question: 'Apakah Label Tafeta tahan terhadap pencucian?',
    answer: 'Ya, Label Tafeta kami dirancang tahan hingga 50+ kali pencucian tanpa degradasi kualitas. Material premium dan teknologi high-resolution printing memastikan QR code tetap terbaca jelas. Desain label fully customizable sesuai brand identity produk fashion Anda.',
    relatedLinks: [
      { label: 'Detail Label Tafeta', href: '/services/tafeta' }
    ]
  },
  {
    id: 'service-4',
    category: 'services',
    question: 'Apakah tersedia solusi NFC atau printing QR pada kemasan?',
    answer: 'Sticker ber-NFC dan Printing QR langsung pada kemasan saat ini belum tersedia untuk publik — masih dalam tahap perencanaan dan penelitian internal. Untuk kebutuhan marking saat ini, kami merekomendasikan Hologram dengan QR atau Label Tafeta dengan QR. Hubungi tim kami untuk konsultasi solusi terbaik.',
    relatedLinks: [
      { label: 'Layanan Aktif', href: '/services' },
      { label: 'Hubungi Kami', href: '/contact' }
    ]
  },

  // ===== TEKNOLOGI =====
  {
    id: 'tech-1',
    category: 'technology',
    popular: true,
    question: 'Apa itu sistem 5 lapis keamanan AuthenticGuards?',
    answer: 'Sistem keamanan berlapis kami terdiri dari: (1) Keamanan Server — proteksi multi-layer berstandar ISO/IEC 27000:2016, (2) Kode Algoritma AG — 3 lapis (kata kunci personalisasi, digit alfanumerik, timestamp unix), (3) MD5 Hash Integrity — verifikasi integritas 32-char hex, (4) Kepekaan Verifikasi QR — batas 15 kali pengecekan per kode, (5) Pelepasan Label — tamper-evident, kode void saat label terbuka.',
    relatedLinks: [
      { label: 'Pelajari Teknologi', href: '/technology' }
    ]
  },
  {
    id: 'tech-2',
    category: 'technology',
    question: 'Apa itu kode AG dan bagaimana cara kerjanya?',
    answer: 'Kode AG (Authentic Guards) adalah kode keamanan 13 digit yang diproduksi dengan algoritma 3 lapis: kata kunci personalisasi brand, digit alfanumerik unik, dan matriks timestamp unix dalam milidetik. Setiap kode di-hash MD5 menjadi identifier 32-karakter hex yang tidak dapat di-reverse, lalu diintegrasikan ke QR code berstandar ISO/IEC 18004:2015.',
    lastUpdated: '2026-06-27',
    relatedLinks: [
      { label: 'Detail Teknologi', href: '/technology' }
    ]
  },
  {
    id: 'tech-3',
    category: 'technology',
    question: 'Berapa lama waktu respons verifikasi produk?',
    answer: 'Sistem kami memiliki response time kurang dari 100ms per verifikasi. Infrastruktur cloud didukung kemitraan strategis Telkom Indonesia, mampu memproses 100 juta+ kode per hari dengan monitoring server aktif 24/7.',
    relatedLinks: [
      { label: 'Teknologi & Performa', href: '/technology' }
    ]
  },
  {
    id: 'tech-4',
    category: 'technology',
    question: 'Bagaimana sistem mencegah duplikasi dan penyalahgunaan kode?',
    answer: 'Setiap kode AG memiliki batas verifikasi hingga 15 kali. Jika limit tercapai tanpa validasi, sistem otomatis men-suspend kode untuk investigasi. Selain itu, label tamper-evident membuat kode void saat label dilepas — mencegah transfer kode ke produk palsu.',
    relatedLinks: [
      { label: '5 Lapis Keamanan', href: '/technology' }
    ]
  },

  // ===== KEAMANAN & PRIVASI =====
  {
    id: 'security-1',
    category: 'security',
    popular: true,
    question: 'Apakah data saya aman di AuthenticGuards?',
    answer: 'Keamanan data adalah prioritas utama kami. Database berstandar ISO/IEC 27000:2016, server dilindungi multi-layer shield dengan monitoring 24/7, dan kami compliant dengan ISO 27001 serta UU PDP No. 27 Tahun 2022. Data tidak dibagikan ke pihak ketiga tanpa persetujuan.',
    relatedLinks: [
      { label: 'Kebijakan Privasi', href: '/privacy-policy' },
      { label: 'Teknologi Keamanan', href: '/technology' }
    ]
  },
  {
    id: 'security-2',
    category: 'security',
    question: 'Apakah AuthenticGuards compliant dengan UU PDP Indonesia?',
    answer: 'Ya, kami beroperasi sesuai UU Perlindungan Data Pribadi (UU PDP) No. 27 Tahun 2022. Kebijakan Privasi kami mencakup hak akses data, hak koreksi, dan hak penghapusan data pribadi. Untuk pertanyaan terkait data pribadi, hubungi info@authenticguards.com.',
    relatedLinks: [
      { label: 'Kebijakan Privasi', href: '/privacy-policy' },
      { label: 'Syarat & Ketentuan', href: '/term-condition' }
    ]
  },
  {
    id: 'security-3',
    category: 'security',
    question: 'Berapa lama data verifikasi disimpan?',
    answer: 'Retensi data verifikasi dan informasi pribadi diatur sesuai Kebijakan Privasi kami dan kebutuhan audit brand partner. Detail lengkap tentang periode penyimpanan dan prosedur penghapusan data tercantum di bagian Retensi Data pada halaman Kebijakan Privasi.',
    relatedLinks: [
      { label: 'Kebijakan Privasi', href: '/privacy-policy' }
    ]
  },

  // ===== VERIFIKASI PRODUK (Untuk Konsumen) =====
  {
    id: 'verify-1',
    category: 'verification',
    popular: true,
    question: 'Bagaimana cara memverifikasi keaslian produk?',
    answer: 'Verifikasi produk AuthenticGuards sangat mudah: (1) Buka kamera smartphone dan scan QR code pada label produk (hologram atau tafeta), (2) Browser akan membuka halaman verifikasi, (3) Sistem mengecek kode AG di database real-time, (4) Status keaslian produk ditampilkan secara instan — biasanya kurang dari 15 detik.',
    lastUpdated: '2026-06-27',
    relatedLinks: [
      { label: 'Cara Kerja Teknologi', href: '/technology' },
      { label: 'Detail Layanan Hologram', href: '/services/hologram' }
    ]
  },
  {
    id: 'verify-2',
    category: 'verification',
    question: 'Apa yang harus dilakukan jika QR code tidak bisa discan?',
    answer: 'Jika QR code tidak bisa discan: (1) Pastikan pencahayaan cukup dan kamera dalam fokus, (2) Bersihkan permukaan QR code dari kotoran atau goresan, (3) Coba input kode secara manual jika tersedia di halaman verifikasi. Jika masih bermasalah, hubungi customer service brand atau tim AuthenticGuards via halaman kontak.',
    relatedLinks: [
      { label: 'Hubungi Support', href: '/contact' }
    ]
  },
  {
    id: 'verify-3',
    category: 'verification',
    question: 'Apa artinya jika kode sudah mencapai batas verifikasi?',
    answer: 'Setiap kode AG memiliki batas verifikasi hingga 15 kali. Jika limit tercapai, sistem otomatis men-suspend kode untuk investigasi — ini bisa mengindikasikan upaya duplikasi atau pemalsuan. Jika Anda yakin produk asli dan belum pernah diverifikasi sebelumnya, segera hubungi brand atau tim AuthenticGuards.',
    relatedLinks: [
      { label: 'Laporkan Produk Mencurigakan', href: '/contact' }
    ]
  },
  {
    id: 'verify-4',
    category: 'verification',
    question: 'Apakah saya perlu internet untuk verifikasi?',
    answer: 'Ya, koneksi internet diperlukan karena verifikasi mengakses database real-time AuthenticGuards. Proses sangat ringan (beberapa KB data) sehingga bisa dilakukan bahkan dengan koneksi mobile yang lambat.',
    relatedLinks: [
      { label: 'Teknologi Kami', href: '/technology' }
    ]
  },

  // ===== KEMITRAAN & KLIEN =====
  {
    id: 'partners-1',
    category: 'partners',
    popular: true,
    question: 'Industri apa saja yang dilayani AuthenticGuards?',
    answer: 'Kami melayani berbagai industri: F&B & minuman, fashion & apparel, kecantikan & kosmetik, teknologi & elektronik, kesehatan & farmasi, lifestyle & luxury goods, otomotif, hingga pendidikan. Daftar lengkap brand partner dapat dilihat di halaman Our Clients.',
    relatedLinks: [
      { label: 'Daftar Klien', href: '/partners/our-client' },
      { label: 'Halaman Partners', href: '/partners' }
    ]
  },
  {
    id: 'partners-2',
    category: 'partners',
    question: 'Bagaimana cara menjadi brand partner AuthenticGuards?',
    answer: 'Hubungi tim kami melalui halaman Contact untuk konsultasi gratis. Proses dimulai dengan analisis kebutuhan brand, desain & prototyping label, produksi kode AG, quality control, hingga pengiriman dan training implementasi — total ±14 hari kerja setelah desain di-approve.',
    relatedLinks: [
      { label: 'Hubungi Tim Sales', href: '/contact' },
      { label: 'Alur Implementasi', href: '/services/hologram' }
    ]
  },
  {
    id: 'partners-3',
    category: 'partners',
    question: 'Apakah AuthenticGuards didukung investor dan partner strategis?',
    answer: 'Ya, AuthenticGuards didukung oleh investor dan partner strategis termasuk Telkom Group (Indigo Creative Nation), serta kemitraan infrastruktur cloud dengan Telkom Indonesia. Informasi investor, supporter, dan media coverage tersedia di halaman About dan Partners.',
    relatedLinks: [
      { label: 'Tentang Kami', href: '/about' },
      { label: 'Partners', href: '/partners' }
    ]
  },

  // ===== PRICING & IMPLEMENTASI =====
  {
    id: 'pricing-1',
    category: 'pricing',
    popular: true,
    question: 'Berapa biaya layanan AuthenticGuards?',
    answer: 'Pricing fleksibel dan disesuaikan kebutuhan bisnis Anda. Faktor penentu: volume label, jenis layanan (Hologram atau Tafeta), kompleksitas desain, dan fitur tambahan (custom design, API integration, dedicated account manager). Kami menawarkan paket Starter, Business, dan Enterprise — semua dengan harga custom setelah konsultasi.',
    relatedLinks: [
      { label: 'Konsultasi Gratis', href: '/contact' },
      { label: 'Paket Hologram', href: '/services/hologram' }
    ]
  },
  {
    id: 'pricing-2',
    category: 'pricing',
    question: 'Berapa lama waktu produksi dan implementasi?',
    answer: 'Waktu produksi standar ±14 hari kerja setelah desain di-approve. Alur implementasi: konsultasi (1-2 hari) → desain & prototyping (3-5 hari) → produksi kode AG (1-2 hari) → produksi label (5-7 hari) → quality control (1-2 hari) → pengiriman & training (2-3 hari). Timeline dapat disesuaikan untuk kebutuhan khusus.',
    relatedLinks: [
      { label: 'Proses Implementasi', href: '/services/hologram' }
    ]
  },
  {
    id: 'pricing-3',
    category: 'pricing',
    question: 'Apakah ada minimum order quantity (MOQ)?',
    answer: 'MOQ bervariasi tergantung kompleksitas desain dan ukuran label. Untuk informasi detail MOQ dan penawaran terbaik, silakan hubungi tim sales kami untuk konsultasi langsung — kami akan menyesuaikan solusi dengan skala bisnis Anda.',
    relatedLinks: [
      { label: 'Hubungi Sales', href: '/contact' }
    ]
  },
  {
    id: 'pricing-4',
    category: 'pricing',
    question: 'Apa yang terjadi jika ada label cacat produksi?',
    answer: 'Kami mengkompensasi label baru jika ada kecacatan produksi hingga 2,5% dari total produksi. Laporan kode cacat dilakukan per bulan oleh klien dengan melampirkan surat pemberitahuan dan bukti, kemudian tim QC akan memproses penggantian sesuai prosedur standar.',
    relatedLinks: [
      { label: 'Detail Layanan', href: '/services' },
      { label: 'Hubungi Kami', href: '/contact' }
    ]
  }
]

// ============================================================================
// CATEGORIES
// ============================================================================
const categories: FAQCategory[] = [
  {
    id: 'all',
    label: 'Semua',
    icon: <HelpCircle className="w-4 h-4" />,
    color: 'text-[#8C6F3D]',
    bgColor: 'bg-[#E8D09E]/20',
    borderColor: 'border-[#E8D09E]/40',
    count: faqData.length
  },
  {
    id: 'about',
    label: 'Tentang Kami',
    icon: <Building2 className="w-4 h-4" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-200',
    count: faqData.filter(f => f.category === 'about').length
  },
  {
    id: 'services',
    label: 'Layanan',
    icon: <Package className="w-4 h-4" />,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    borderColor: 'border-emerald-200',
    count: faqData.filter(f => f.category === 'services').length
  },
  {
    id: 'technology',
    label: 'Teknologi',
    icon: <Code2 className="w-4 h-4" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-200',
    count: faqData.filter(f => f.category === 'technology').length
  },
  {
    id: 'security',
    label: 'Keamanan',
    icon: <Shield className="w-4 h-4" />,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    borderColor: 'border-rose-200',
    count: faqData.filter(f => f.category === 'security').length
  },
  {
    id: 'verification',
    label: 'Verifikasi',
    icon: <ScanLine className="w-4 h-4" />,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    borderColor: 'border-amber-200',
    count: faqData.filter(f => f.category === 'verification').length
  },
  {
    id: 'partners',
    label: 'Kemitraan',
    icon: <Handshake className="w-4 h-4" />,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
    borderColor: 'border-teal-200',
    count: faqData.filter(f => f.category === 'partners').length
  },
  {
    id: 'pricing',
    label: 'Pricing',
    icon: <CreditCard className="w-4 h-4" />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-200',
    count: faqData.filter(f => f.category === 'pricing').length
  }
]

// ============================================================================
// HERO FAQ SECTION
// ============================================================================
function HeroFAQSection({ searchQuery, setSearchQuery }: { 
  searchQuery: string
  setSearchQuery: (query: string) => void 
}) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#E8D09E]/20" />
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[700px] h-[700px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[600px] h-[600px] bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 26, 26, 1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#C5A059]/40 px-4 py-2 rounded-full mb-6"
        >
          <HelpCircle className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Pusat Bantuan</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
        >
          Ada yang Bisa <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
            Kami Bantu?
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan marking, teknologi 5 lapis keamanan, verifikasi produk, dan kemitraan AuthenticGuards.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pertanyaan... (contoh: hologram, verifikasi, MOQ, tafeta)"
              className="w-full pl-14 pr-14 py-5 bg-white border-2 border-[#E8D09E]/40 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:border-[#C5A059] focus:ring-4 focus:ring-[#E8D09E]/20 outline-none transition-all shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <AlertCircle className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-8 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{faqData.length}+ Pertanyaan</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{categories.length - 1} Kategori</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">Update Berkala</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// CATEGORY FILTER
// ============================================================================
function CategoryFilter({ 
  activeCategory, 
  setActiveCategory 
}: { 
  activeCategory: string
  setActiveCategory: (category: string) => void 
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    const category = searchParams.get('category') ?? null;
    if (category && categories.find(v => v.id === category)) {
      setActiveCategory(category);
    } 
    
    else if (!category || category === 'all') {
      setActiveCategory('all');
    }
  }, [searchParams]);
  
  const handleCategoryClick = (categoryId: string) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (categoryId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', categoryId);
    }
    
    setSearchParams(newParams, { 
      replace: true, 
      preventScrollReset: true 
    });
  }
  
  return (
    <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8D09E]/30 py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#1A1A1A] text-white shadow-md'
                  : 'bg-[#FAF8F5] text-gray-600 hover:bg-[#E8D09E]/20 hover:text-[#8C6F3D]'
              }`}
            >
              <span className={activeCategory === category.id ? 'text-[#E8D09E]' : category.color}>
                {category.icon}
              </span>
              <span>{category.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-md ${
                activeCategory === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white text-gray-500'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// POPULAR FAQ SECTION
// ============================================================================
function PopularFAQSection({ 
  faqs, 
  openItems, 
  toggleItem,
  handleFeedback
}: { 
  faqs: FAQItem[]
  openItems: Set<string>
  toggleItem: (id: string) => void
  handleFeedback: (id: string, helpful: boolean) => void
}) {
  const popularFaqs = faqs.filter(f => f.popular).slice(0, 3)
  
  if (popularFaqs.length === 0) return null

  return (
    <section className="py-12 md:py-16 bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
            <TrendingUp className="w-4 h-4 text-[#E8D09E]" />
            <span className="text-xs font-bold text-[#E8D09E] uppercase tracking-widest">Paling Sering Ditanyakan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Pertanyaan <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E8D09E] to-[#C5A059]">Populer</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {popularFaqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#E8D09E]/30 transition-all"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#E8D09E] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[#E8D09E] bg-[#E8D09E]/20 px-2 py-0.5 rounded uppercase tracking-wider">
                        Populer
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white pr-4">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  openItems.has(faq.id)
                    ? 'bg-[#C5A059] text-white rotate-180'
                    : 'bg-white/10 text-[#E8D09E]'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {openItems.has(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="pl-14 pt-4 border-t border-white/10">
                        <p className="text-sm text-gray-300 leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        
                        {faq.relatedLinks && (
                          <div className="flex flex-wrap gap-2">
                            {faq.relatedLinks.map((link, lIdx) => (
                              <Link
                                key={lIdx}
                                to={link.href}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8D09E] hover:text-[#C5A059] bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all"
                              >
                                <span>{link.label}</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FAQ ACCORDION
// ============================================================================
function FAQAccordion({ 
  faqs, 
  openItems, 
  toggleItem,
  handleFeedback
}: { 
  faqs: FAQItem[]
  openItems: Set<string>
  toggleItem: (id: string) => void
  handleFeedback: (id: string, helpful: boolean) => void
}) {
  // Group FAQs by category
  const groupedFaqs = useMemo(() => {
    const groups: Record<string, FAQItem[]> = {}
    faqs.forEach(faq => {
      if (!groups[faq.category]) {
        groups[faq.category] = []
      }
      groups[faq.category].push(faq)
    })
    return groups
  }, [faqs])

  if (faqs.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Search className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Tidak Ada Hasil</h3>
        <p className="text-gray-500 mb-6">
          Kami tidak menemukan pertanyaan yang cocok dengan pencarian Anda.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#8C6F3D] transition-all"
        >
          <span>Hubungi Tim Kami</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      {Object.entries(groupedFaqs).map(([categoryId, categoryFaqs]) => {
        const category = categories.find(c => c.id === categoryId)
        if (!category) return null

        return (
          <motion.div
            key={categoryId}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 ${category.bgColor} ${category.color} rounded-xl flex items-center justify-center`}>
                {category.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A]">{category.label}</h2>
                <p className="text-sm text-gray-500">{categoryFaqs.length} pertanyaan</p>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-3">
              {categoryFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#E8D09E]/40 hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-start justify-between gap-4 p-5 text-left group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {faq.popular && (
                          <span className="text-[10px] font-bold text-[#C5A059] bg-[#E8D09E]/20 px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Populer
                          </span>
                        )}
                        {faq.lastUpdated && (
                          <span className="text-[10px] text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            Diperbarui {new Date(faq.lastUpdated).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-[#1A1A1A] text-base md:text-lg pr-4 group-hover:text-[#8C6F3D] transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      openItems.has(faq.id)
                        ? 'bg-[#C5A059] text-white rotate-180'
                        : 'bg-[#FAF8F5] text-[#8C6F3D]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openItems.has(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                              {faq.answer}
                            </p>

                            {/* Related Links */}
                            {faq.relatedLinks && faq.relatedLinks.length > 0 && (
                              <div className="mb-4">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                  Artikel Terkait:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {faq.relatedLinks.map((link, lIdx) => (
                                    <Link
                                      key={lIdx}
                                      to={link.href}
                                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6F3D] hover:text-[#6b5530] bg-[#FAF8F5] hover:bg-[#E8D09E]/20 px-3 py-1.5 rounded-lg transition-all"
                                    >
                                      <span>{link.label}</span>
                                      <ArrowRight className="w-3 h-3" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Feedback */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <p className="text-xs text-gray-500">Apakah ini membantu?</p>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleFeedback(faq.id, true)}
                                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-emerald-600 bg-gray-50 hover:bg-emerald-50 px-3 py-1.5 rounded-lg transition-all"
                                >
                                  <ThumbsUp className="w-3.5 h-3.5" />
                                  <span>Ya</span>
                                </button>
                                <button
                                  onClick={() => handleFeedback(faq.id, false)}
                                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-red-600 bg-gray-50 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-all"
                                >
                                  <ThumbsDown className="w-3.5 h-3.5" />
                                  <span>Tidak</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

// ============================================================================
// STILL HAVE QUESTIONS SECTION
// ============================================================================
// function StillHaveQuestionsSection() {
//   const contactOptions = [
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: 'Telepon',
//       desc: 'Senin - Jumat, 09:00 - 17:00',
//       value: '+62 812-2220-1649',
//       href: 'tel:+6281222201649',
//       color: 'emerald'
//     },
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: 'Email',
//       desc: 'Respon dalam 1x24 jam',
//       value: 'info@authenticguards.com',
//       href: 'mailto:info@authenticguards.com',
//       color: 'blue'
//     },
//     {
//       icon: <MessageCircle className="w-6 h-6" />,
//       title: 'Live Chat',
//       desc: 'Tersedia 24/7',
//       value: 'Mulai Chat',
//       href: '/contact',
//       color: 'purple'
//     }
//   ]

//   const colorMap: Record<string, { bg: string; text: string; border: string }> = {
//     emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
//     blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
//     purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' }
//   }

//   return (
//     <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative max-w-5xl mx-auto px-4 md:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 space-y-4"
//         >
//           <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
//             <HeadphonesIcon className="w-4 h-4 text-[#8C6F3D]" />
//             <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Masih Ada Pertanyaan?</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
//             Tim Kami Siap <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">Membantu</span>
//           </h2>
//           <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
//             Jika Anda tidak menemukan jawaban yang dicari, jangan ragu untuk menghubungi tim support kami.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//           {contactOptions.map((option, idx) => {
//             const colors = colorMap[option.color]
//             return (
//               <motion.a
//                 key={idx}
//                 href={option.href}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className={`group bg-white rounded-3xl p-6 border border-gray-100 hover:border-[#C5A059]/50 hover:shadow-xl transition-all duration-300`}
//               >
//                 <div className={`w-14 h-14 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
//                   {option.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{option.title}</h3>
//                 <p className="text-sm text-gray-500 mb-3">{option.desc}</p>
//                 <p className={`text-sm font-bold ${colors.text} flex items-center gap-2 group-hover:gap-3 transition-all`}>
//                   <span>{option.value}</span>
//                   <ArrowRight className="w-4 h-4" />
//                 </p>
//               </motion.a>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

function StillHaveQuestionsSection() {
  const contactOptions = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Hubungi via Telepon',
      desc: 'Bicara langsung dengan tim kami pada jam operasional',
      cta: 'Lihat Nomor Telepon',
      color: 'emerald'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Kirim Email',
      desc: 'Untuk pertanyaan detail, partnership, atau dokumen resmi',
      cta: 'Lihat Alamat Email',
      color: 'blue'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat & WhatsApp',
      desc: 'Respon cepat untuk pertanyaan umum dan bantuan teknis',
      cta: 'Mulai Chat Sekarang',
      color: 'purple'
    }
  ]

  const colorMap: Record<string, { bg: string; text: string }> = {
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' }
  }

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <HeadphonesIcon className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              Masih Ada Pertanyaan?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Tim Kami Siap{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              Membantu
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Pilih cara komunikasi yang paling nyaman untuk Anda. Semua channel tersedia di halaman kontak kami.
          </p>
        </motion.div>

        {/* Contact Options Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {contactOptions.map((option, idx) => {
            const colors = colorMap[option.color]
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to="/contact"
                  className="group bg-white rounded-3xl p-6 border border-gray-100 hover:border-[#C5A059]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div className={`w-14 h-14 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {option.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-1 group-hover:text-[#8C6F3D] transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {option.desc}
                    </p>
                  </div>
                  
                  <div className={`text-sm font-bold ${colors.text} flex items-center gap-2 group-hover:gap-3 transition-all pt-4 border-t border-gray-100`}>
                    <span>{option.cta}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div> */}

        {/* Primary CTA - Big Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-linear-to-r from-[#8C6F3D] to-[#C5A059] text-white px-8 py-4 rounded-2xl font-bold text-base hover:shadow-xl hover:shadow-[#C5A059]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Hubungi Tim Kami</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            Respon dalam <span className="font-bold text-[#8C6F3D]">1x24 jam kerja</span> • Konsultasi gratis
          </p>
        </motion.div>
      </div>
    </section>
  )
}



// ============================================================================
// RELATED RESOURCES SECTION
// ============================================================================
function RelatedResourcesSection() {
  const resources = [
    {
      icon: <ScanLine className="w-6 h-6" />,
      title: 'Teknologi Kami',
      desc: 'Pelajari sistem 5 lapis keamanan dan kode AG AuthenticGuards',
      href: '/technology',
      color: 'amber'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Layanan Hologram',
      desc: 'Detail solusi hologram premium dengan QR code terintegrasi',
      href: '/services/hologram',
      color: 'purple'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Klien Kami',
      desc: 'Brand partner dari berbagai industri yang mempercayai AuthenticGuards',
      href: '/partners/our-client',
      color: 'emerald'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Kebijakan Privasi',
      desc: 'Informasi perlindungan data pribadi sesuai UU PDP Indonesia',
      href: '/privacy-policy',
      color: 'blue'
    }
  ]

  const colorMap: Record<string, { bg: string; text: string }> = {
    amber: { bg: 'bg-amber-100', text: 'text-amber-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' }
  }

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <BookOpen className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Sumber Daya</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Pelajari Lebih <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">Lanjut</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Dokumentasi, panduan, dan sumber daya lainnya untuk membantu Anda memahami layanan kami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {resources.map((resource, idx) => {
            const colors = colorMap[resource.color]
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Link
                  to={resource.href}
                  className="group bg-[#FAF8F5] hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#E8D09E]/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                >
                  <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#8C6F3D] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {resource.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#8C6F3D] group-hover:gap-3 transition-all">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    let filtered = faqData

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [searchQuery, activeCategory])

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleFeedback = (id: string, helpful: boolean) => {
    // In production, send this to your analytics/feedback system
    console.log(`FAQ ${id} feedback: ${helpful ? 'helpful' : 'not helpful'}`)
    // You could show a toast notification here
  }

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/index.css');
        body { font-family: 'Inter', sans-serif; background-color: #FAFAFA; }
        html { scroll-behavior: smooth; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <HeroFAQSection 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <CategoryFilter 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* Show popular FAQs only when no search and category is 'all' */}
      {!searchQuery && activeCategory === 'all' && (
        <PopularFAQSection 
          faqs={faqData}
          openItems={openItems}
          toggleItem={toggleItem}
          handleFeedback={handleFeedback}
        />
      )}

      {/* Main FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Search Results Header */}
          {(searchQuery || activeCategory !== 'all') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-1">
                    {searchQuery ? 'Hasil Pencarian' : categories.find(c => c.id === activeCategory)?.label}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {filteredFaqs.length} pertanyaan ditemukan
                    {searchQuery && <span className="font-semibold text-[#8C6F3D]"> untuk "{searchQuery}"</span>}
                  </p>
                </div>
                {(searchQuery || activeCategory !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setActiveCategory('all')
                    }}
                    className="text-sm font-semibold text-[#8C6F3D] hover:text-[#6b5530] flex items-center gap-1"
                  >
                    <span>Reset Filter</span>
                    <AlertCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          )}

          <FAQAccordion 
            faqs={filteredFaqs}
            openItems={openItems}
            toggleItem={toggleItem}
            handleFeedback={handleFeedback}
          />
        </div>
      </section>

      <StillHaveQuestionsSection />
      <RelatedResourcesSection />
    </>
  )
}