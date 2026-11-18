import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  Shield,
  ShieldCheck,
  Tag,
  Layers,
  Lock,
  Eye,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Package,
  QrCode,
  Fingerprint,
  TrendingUp,
  Smartphone,
  BarChart3,
  AlertTriangle,
  Clock,
  Users,
  Building2,
  Globe,
  Award,
  ChevronDown,
  ChevronRight,
  Target,
  Lightbulb,
  Handshake,
  FileCheck,
  ScanLine,
  Database,
  Bell,
  LineChart,
  Truck,
  Factory,
  Boxes,
  Search,
  // Tambahan icon untuk layanan baru & customer features
  Nfc,
  Printer,
  Hash,
  BadgeCheck,
  MapPin,
  ShoppingBag,
  Heart,
  Megaphone,
  ShieldAlert,
  ArrowUpRight,
  BellRing,
  Calendar,
  Compass
} from 'lucide-react'

// ============================================================================
// HERO SERVICES SECTION (disesuaikan dengan proposal)
// ============================================================================
function HeroServices() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#E8D09E]/20" />
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[700px] h-[700px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[600px] h-[600px] bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 26, 26, 1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#C5A059]/40 px-4 py-2 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Layanan Kami</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
        >
          Solusi Marking <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
            Anti-Pemalsuan
          </span>
          <br className="hidden md:block" />
          untuk Berbagai Industri
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
        >
          Authentic Guards menyediakan solusi marking (penanda) untuk berbagai macam industri dengan 4 opsi media utama:
          Label Tafeta, Sticker ber-NFC, Hologram dengan QR, dan Printing QR pada Kemasan — terintegrasi penuh dengan sistem AG.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            {/* Disesuaikan: 4 marking options sesuai proposal */}
            <span className="font-semibold">2 Opsi Marking</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">Customizable</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            {/* Disesuaikan: ISO/IEC 18004:2015 Licensed */}
            <span className="font-semibold">ISO 18004:2015</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// SERVICES OVERVIEW - Hanya 2 layanan aktif (Hologram & Tafeta)
// ============================================================================
function ServicesOverview() {
  // Disesuaikan: Hanya 2 layanan aktif sesuai kondisi saat ini
  const services = [
    {
      id: 'hologram',
      icon: <Sparkles className="w-7 h-7" />,
      title: "Hologram dengan QR",
      subtitle: "Premium Security",
      desc: "Kombinasi hologram premium dengan kode QR untuk lapisan keamanan ganda yang sulit dipalsukan. Solusi flagship kami untuk proteksi maksimal produk premium.",
      highlights: [
        { label: "Lapisan Keamanan", value: "Ganda" },
        { label: "Tingkat Kesulitan Palsu", value: "Sangat Tinggi" }
      ],
      industries: ["Farmasi", "Kosmetik", "Elektronik", "Minuman Keras"],
      gradient: "from-[#E8D09E]/20 to-[#C5A059]/5",
      iconBg: "bg-[#E8D09E]/30",
      iconColor: "text-[#8C6F3D]",
      accentBorder: "border-[#E8D09E]/40"
    },
    {
      id: 'tafeta',
      icon: <Tag className="w-7 h-7" />,
      title: "Label Tafeta dengan QR",
      subtitle: "Fashion Solution",
      desc: "Label tafeta berkualitas tinggi dengan kode QR terintegrasi, dirancang khusus untuk industri fashion dan tekstil tanpa mengorbankan estetika.",
      highlights: [
        { label: "Material", value: "Premium" },
        { label: "Industri", value: "Fashion & Tekstil" }
      ],
      industries: ["Fashion", "Apparel", "Footwear", "Accessories"],
      gradient: "from-[#8C6F3D]/10 to-[#C5A059]/5",
      iconBg: "bg-[#C5A059]/20",
      iconColor: "text-[#6b5530]",
      accentBorder: "border-[#C5A059]/30"
    }
  ]

  /* ==========================================================================
   * [COMING SOON - NFC Sticker]
   * Layanan Sticker ber-NFC saat ini masih dalam tahap perencanaan internal
   * dan belum memasuki fase pengembangan. Section ini di-comment out untuk
   * menjaga akurasi informasi yang ditampilkan kepada publik.
   * 
   * Aktifkan kembali ketika:
   * - Riset pasar & teknologi NFC telah selesai
   * - Prototipe produk telah dibuat dan divalidasi
   * - Keputusan go/no-go telah diambil oleh manajemen
   * 
   * Konsep yang direncanakan:
   * - Teknologi NFC untuk verifikasi tap & go
   * - Chip NFC dengan unique ID anti-clone
   * - Kompatibel dengan semua smartphone modern
   * - Target industri: Luxury Goods, Premium Brand, Spirits, Electronics
   * ========================================================================== */
  // const nfcService = {
  //   id: 'nfc',
  //   icon: <Nfc className="w-7 h-7" />,
  //   title: "Sticker ber-NFC",
  //   subtitle: "Smart Technology",
  //   desc: "Sticker dengan teknologi NFC untuk memudahkan pengaplikasian marking dan verifikasi instan via smartphone.",
  //   highlights: [
  //     { label: "Teknologi", value: "NFC Enabled" },
  //     { label: "Verifikasi", value: "Tap & Go" }
  //   ],
  //   industries: ["Luxury Goods", "Premium Brand", "Spirits", "Electronics"],
  //   gradient: "from-[#6b5530]/10 to-[#8C6F3D]/5",
  //   iconBg: "bg-[#8C6F3D]/20",
  //   iconColor: "text-[#6b5530]",
  //   accentBorder: "border-[#8C6F3D]/30"
  // }

  /* ==========================================================================
   * [NOT AVAILABLE - Printing QR pada Kemasan]
   * Layanan Printing QR langsung pada kemasan saat ini belum dapat kami
   * sediakan karena kendala teknis dan infrastruktur yang masih dalam
   * tahap penyesuaian.
   * 
   * Aktifkan kembali ketika:
   * - Infrastruktur printing support telah siap
   * - Driver printer klien telah teruji integrasinya
   * - Quality control system untuk direct printing telah divalidasi
   * 
   * Konsep yang direncanakan:
   * - Integrasi driver printer klien
   * - Batch & packing system
   * - Quality control terstandar
   * - Kapasitas hingga 100M kode/hari
   * ========================================================================== */
  // const printingService = {
  //   id: 'printing',
  //   icon: <Printer className="w-7 h-7" />,
  //   title: "Printing QR pada Kemasan",
  //   subtitle: "Direct Integration",
  //   desc: "Pencetakan QR langsung pada kemasan produk dengan driver printer klien yang terintegrasi penuh.",
  //   highlights: [
  //     { label: "Integrasi", value: "Driver Printer" },
  //     { label: "Kapasitas", value: "100M/hari" }
  //   ],
  //   industries: ["FMCG", "Makanan", "Minuman", "Household"],
  //   gradient: "from-[#5a4a2a]/10 to-[#6b5530]/5",
  //   iconBg: "bg-[#6b5530]/20",
  //   iconColor: "text-[#5a4a2a]",
  //   accentBorder: "border-[#6b5530]/30"
  // }

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Package className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Marking Development</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Solusi <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">Penandaan</span> Kami
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Dua layanan marking utama yang telah terintegrasi penuh dengan sistem Authentic Guards, dirancang untuk berbagai kebutuhan industri.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <motion.a
              key={service.id}
              href={`#${service.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative bg-white rounded-3xl border ${service.accentBorder} hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-8 md:p-10 cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 ${service.iconBg} ${service.iconColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                      {service.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#8C6F3D] uppercase tracking-widest mb-1 block">
                        {service.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-1.5 bg-[#E8D09E]/20 text-[#8C6F3D] px-3 py-1.5 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Detail</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  {service.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
                  {service.highlights.map((stat, sIdx) => (
                    <div key={sIdx} className="text-center">
                      <p className="text-2xl font-extrabold text-[#1A1A1A] mb-1">{stat.value}</p>
                      <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Cocok untuk:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((industry, iIdx) => (
                      <span
                        key={iIdx}
                        className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Coming Soon Notice */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-linear-to-r from-[#FAF8F5] to-white rounded-2xl border border-dashed border-[#E8D09E]/60 p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-[#E8D09E]/30 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#1A1A1A] mb-1">Layanan Lainnya dalam Pengembangan</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kami sedang mengembangkan solusi marking tambahan seperti <strong className="text-[#8C6F3D]">Sticker ber-NFC</strong> untuk memperluas pilihan bagi klien kami.
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

// ============================================================================
// DETAIL SECTION: Hologram dengan QR (Pewarnaan disesuaikan ke brand gold/brown)
// ============================================================================
function HologramDetail() {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Hologram Premium Multi-Layer",
      desc: "Teknologi hologram dengan efek visual yang sulit ditiru, memberikan lapisan keamanan fisik pertama."
    },
    {
      icon: <QrCode className="w-5 h-5" />,
      title: "QR Code Terintegrasi",
      desc: "QR code unik berbasis standar ISO/IEC 18004:2015 yang terhubung ke database AG, memungkinkan verifikasi keaslian produk secara real-time."
    },
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Tamper-Evident",
      desc: "Label dirancang untuk menunjukkan tanda-tanda pembukaan, mencegah transfer kode ke produk lain."
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Verifikasi Real-time",
      desc: "Setiap scan langsung divalidasi ke cloud database AG dengan standar ISO/IEC 27000:2016."
    }
  ]

  const benefits = [
    "Kombinasi keamanan fisik (hologram) + digital (QR)",
    "Verifikasi mudah oleh konsumen via smartphone",
    "Terintegrasi dengan 5 lapis keamanan AG",
    "Sulit dipalsukan — 2 lapisan proteksi",
    "Custom design sesuai brand identity",
    "Cocok untuk produk premium & high-value"
  ]

  return (
    <section id="hologram" className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden scroll-mt-20">
      {/* PERUBAHAN: Background blur ke brand color */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* PERUBAHAN: Badge ke brand color */}
            <div className="inline-flex items-center gap-2 bg-[#E8D09E]/30 border border-[#E8D09E]/50 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-[#8C6F3D]" />
              <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Premium Security</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight">
              Hologram <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">dengan QR</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Kombinasi hologram premium dengan kode QR untuk lapisan keamanan ganda. Hologram memberikan proteksi fisik yang sulit dipalsukan, sementara QR code terintegrasi dengan sistem verifikasi digital Authentic Guards.
            </p>

            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  /* PERUBAHAN: Hover border ke brand color */
                  className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#E8D09E]/60 hover:shadow-sm transition-all"
                >
                  {/* PERUBAHAN: Icon bg ke brand color */}
                  <div className="w-10 h-10 bg-[#E8D09E]/30 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Visual Card */}
            <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* PERUBAHAN: Glow ke brand color */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">Example Verification</span>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    {/* PERUBAHAN: Icon gradient ke brand color */}
                    <div className="w-12 h-12 bg-linear-to-br from-[#C5A059] to-[#8C6F3D] rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Produk Terverifikasi</p>
                      <p className="text-white font-bold">Hologram + QR Code</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-xl p-3">
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">Kode AG</p>
                      {/* PERUBAHAN: Text ke brand color */}
                      <p className="text-sm font-mono font-bold text-[#E8D09E]">AG-7J1DG</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">Status</p>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                        <p className="text-sm font-bold text-[#E8D09E]">Original</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E8D09E]/30 shadow-sm">
              <h4 className="font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                {/* PERUBAHAN: Icon color ke brand color */}
                <CheckCircle2 className="w-5 h-5 text-[#8C6F3D]" />
                Keuntungan Utama
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2">
                    {/* PERUBAHAN: Dot ke brand color */}
                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2 shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA Button - PERUBAHAN: ke brand color */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: features.length * 0.1 }}
            >
              <Link
                to="/services/hologram"
                className="group flex gap-4 p-4 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#8C6F3D] transition-all duration-300 shadow-lg hover:shadow-[#8C6F3D]/30 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Pelajari Lebih Lanjut</h4>
                  <p className="text-sm leading-relaxed">Lihat contoh produk, panduan implementasi, dan spesifikasi teknis hologram premium kami.</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// DETAIL SECTION: Label Tafeta dengan QR (sudah brand color, sedikit refinement)
// ============================================================================
function TafetaLabelDetail() {
  const features = [
    {
      icon: <Tag className="w-5 h-5" />,
      title: "Material Tafeta Premium",
      desc: "Label tafeta berkualitas tinggi yang tahan lama, nyaman dikenakan, dan cocok untuk produk fashion."
    },
    {
      icon: <QrCode className="w-5 h-5" />,
      title: "QR Code Terintegrasi",
      desc: "QR code dicetak langsung pada label dengan teknologi high-resolution printing, standar ISO 18004:2015."
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Integrasi dengan Desain Label",
      desc: "QR code menyatu dengan desain label secara estetis, tidak mengganggu tampilan produk."
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Fully Customizable",
      desc: "Desain label fully customizable sesuai brand identity, ukuran, dan kebutuhan produk."
    }
  ]

  return (
    <section id="tafeta" className="py-16 md:py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#E8D09E]/20 border border-[#E8D09E]/40 px-4 py-2 rounded-full">
              <Tag className="w-4 h-4 text-[#8C6F3D]" />
              <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Fashion Solution</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight">
              Label <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">Tafeta dengan QR</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Label tafeta berkualitas tinggi dengan kode QR terintegrasi, dirancang khusus untuk industri fashion dan tekstil. Memberikan autentikasi produk tanpa mengorbankan estetika dan kenyamanan.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 p-4 bg-[#FAF8F5] rounded-2xl border border-gray-100 hover:border-[#E8D09E]/40 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-[#E8D09E]/30 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-2xl p-6 text-white">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#E8D09E] rounded-xl flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Kenapa Label Tafeta?</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Produk fashion sering menjadi target pemalsuan. Label tafeta dengan QR memberikan lapisan keamanan yang terintegrasi langsung dengan produk, tanpa mengorbankan estetika dan kenyamanan pemakai.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-1 space-y-6"
          >
            <div className="bg-linear-to-br from-[#FAF8F5] to-white rounded-3xl p-8 border border-[#E8D09E]/30 shadow-sm">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#E8D09E]/30 text-[#8C6F3D] rounded-xl flex items-center justify-center">
                      <Tag className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Spesifikasi</p>
                      <p className="font-bold text-[#1A1A1A]">Label Tafeta Premium</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: "Material", value: "Tafeta Premium" },
                      { label: "Printing", value: "High-Resolution" },
                      { label: "Ukuran", value: "Custom" },
                      { label: "Integrasi", value: "QR Code AG" }
                    ].map((spec, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-[#FAF8F5] rounded-lg">
                        <span className="text-xs text-gray-500 font-medium">{spec.label}</span>
                        <span className="text-sm font-bold text-[#1A1A1A]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-linear-to-br from-[#C5A059] to-[#8C6F3D] rounded-2xl p-5 text-white">
                    <p className="text-3xl font-extrabold mb-1">100%</p>
                    <p className="text-xs text-white/80 uppercase tracking-wider">Custom Design</p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-[#E8D09E]/30">
                    <p className="text-3xl font-extrabold text-[#1A1A1A] mb-1">ISO</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">18004:2015</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: features.length * 0.1 }}
            >
              <Link
                to="/services/tafeta"
                className="group flex gap-4 p-4 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#8C6F3D] transition-all duration-300 shadow-lg hover:shadow-[#8C6F3D]/30 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Lihat Detail Lengkap</h4>
                  <p className="text-sm leading-relaxed">Jelajahi galeri desain label, material premium, dan solusi untuk industri fashion Anda.</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// function NfcComingSoonSection() {
//   return (
//     <section id="nfc" className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden scroll-mt-20">
//       {/* Background decoration - subtle brand colors */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

//       {/* Blueprint grid pattern - mencerminkan fase perancangan */}
//       <div
//         className="absolute inset-0 opacity-[0.04] pointer-events-none"
//         style={{
//           backgroundImage: `linear-gradient(rgba(140, 111, 61, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(140, 111, 61, 1) 1px, transparent 1px)`,
//           backgroundSize: '40px 40px'
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-4 md:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="relative bg-white rounded-3xl border border-[#E8D09E]/30 shadow-sm overflow-hidden"
//         >
//           {/* Top Research Phase Strip */}
//           <div className="bg-linear-to-r from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A] px-6 py-3 flex items-center justify-center gap-3 relative overflow-hidden">
//             <div className="absolute inset-0 opacity-20" style={{
//               backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(232, 208, 158, 0.1) 10px, rgba(232, 208, 158, 0.1) 20px)`
//             }} />
//             <div className="relative flex items-center gap-2">
//               <Lightbulb className="w-4 h-4 text-[#E8D09E]" />
//               <span className="text-sm font-bold text-[#E8D09E] uppercase tracking-widest">Research & Planning Phase</span>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
//             {/* Left Content */}
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-2 bg-[#E8D09E]/20 border border-[#E8D09E]/40 px-4 py-2 rounded-full">
//                 <Compass className="w-4 h-4 text-[#8C6F3D]" />
//                 <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Future Innovation</span>
//               </div>

//               <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight">
//                 Sticker{' '}
//                 <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
//                   ber-NFC
//                 </span>
//               </h2>

//               <p className="text-gray-600 leading-relaxed text-lg">
//                 Kami sedang <strong className="text-[#1A1A1A]">merancang dan meneliti</strong> solusi verifikasi modern dengan teknologi NFC. Konsep ini akan menghadirkan pengalaman verifikasi paling intuitif — cukup mendekatkan smartphone ke sticker, tanpa perlu scan QR.
//               </p>

//               {/* Planned Features - dengan label "Planned" */}
//               <div className="space-y-3 pt-2">
//                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Fitur yang Direncanakan:</p>
//                 {[
//                   { icon: <Nfc className="w-4 h-4" />, text: "Tap & Go Verification" },
//                   { icon: <Shield className="w-4 h-4" />, text: "Chip NFC dengan Unique ID Anti-Clone" },
//                   { icon: <Smartphone className="w-4 h-4" />, text: "Kompatibel dengan semua smartphone modern" }
//                 ].map((item, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, x: -10 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.2 + idx * 0.1 }}
//                     className="flex items-center gap-3 p-3 bg-[#FAF8F5] rounded-xl border border-gray-100 border-dashed"
//                   >
//                     <div className="w-8 h-8 bg-[#E8D09E]/30 text-[#8C6F3D] rounded-lg flex items-center justify-center shrink-0">
//                       {item.icon}
//                     </div>
//                     <span className="text-sm font-medium text-gray-700">{item.text}</span>
//                     <span className="ml-auto text-[10px] font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2 py-0.5 rounded uppercase tracking-wider">
//                       Planned
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Disclaimer */}
//               <div className="pt-4 border-t border-gray-100">
//                 <p className="text-xs text-gray-500 italic leading-relaxed">
//                   * Konsep ini masih dalam tahap penelitian dan perancangan. Fitur final dapat berubah sesuai hasil riset dan kelayakan teknis.
//                 </p>
//               </div>
//             </div>

//             {/* Right - Visual Research Card */}
//             <div className="relative">
//               <div className="relative bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-8 text-white shadow-xl overflow-hidden h-full flex flex-col">
//                 <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl" />

//                 {/* Blueprint grid overlay */}
//                 <div
//                   className="absolute inset-0 opacity-[0.05] pointer-events-none"
//                   style={{
//                     backgroundImage: `linear-gradient(rgba(232, 208, 158, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 208, 158, 1) 1px, transparent 1px)`,
//                     backgroundSize: '30px 30px'
//                   }}
//                 />

//                 <div className="relative z-10 flex-1 flex flex-col">
//                   {/* NFC Icon Big - dengan sketch feel */}
//                   <div className="flex justify-center mb-6">
//                     <div className="relative">
//                       <div className="w-24 h-24 bg-linear-to-br from-[#C5A059] to-[#8C6F3D] rounded-3xl flex items-center justify-center shadow-2xl relative">
//                         <Compass className="w-12 h-12 text-white" />
//                       </div>
//                       {/* Dashed ring - mencerminkan fase planning */}
//                       <div className="absolute inset-[-8px] border-2 border-dashed border-[#E8D09E]/40 rounded-[28px] animate-[spin_20s_linear_infinite]" />
//                       <div className="absolute inset-[-16px] border border-dotted border-[#E8D09E]/20 rounded-[36px]" />
//                     </div>
//                   </div>

//                   <div className="text-center mb-6">
//                     <p className="text-xs text-[#E8D09E] uppercase tracking-widest mb-2">Fase Saat Ini</p>
//                     <p className="text-2xl font-extrabold text-white">Research & Concept</p>
//                   </div>

//                   {/* Roadmap - bukan progress bar */}
//                   <div className="space-y-3 mb-6">
//                     <div className="flex items-center justify-between text-xs">
//                       <span className="text-gray-400">Roadmap Pengembangan</span>
//                       <span className="text-[#E8D09E] font-bold">TBA</span>
//                     </div>

//                     {/* Milestone list */}
//                     <div className="space-y-2">
//                       {[
//                         { label: 'Riset Pasar & Teknologi', status: 'active' },
//                         { label: 'Konseptualisasi', status: 'active' },
//                         { label: 'Perancangan Arsitektur', status: 'upcoming' },
//                         { label: 'Prototyping', status: 'upcoming' },
//                         { label: 'Testing & Validasi', status: 'upcoming' },
//                         { label: 'Peluncuran', status: 'upcoming' }
//                       ].map((milestone, idx) => (
//                         <div key={idx} className="flex items-center gap-3">
//                           <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
//                             milestone.status === 'active'
//                               ? 'bg-linear-to-br from-[#C5A059] to-[#8C6F3D]'
//                               : 'bg-white/5 border border-white/20'
//                           }`}>
//                             {milestone.status === 'active' ? (
//                               <CheckCircle2 className="w-3.5 h-3.5 text-white" />
//                             ) : (
//                               <div className="w-1.5 h-1.5 bg-white/30 rounded-full" />
//                             )}
//                           </div>
//                           <span className={`text-xs flex-1 ${
//                             milestone.status === 'active' ? 'text-white font-semibold' : 'text-gray-500'
//                           }`}>
//                             {milestone.label}
//                           </span>
//                           {milestone.status === 'active' && (
//                             <span className="text-[10px] font-bold text-[#E8D09E] bg-[#E8D09E]/10 px-2 py-0.5 rounded">
//                               Active
//                             </span>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* CTA */}
//                   <div className="mt-auto space-y-3">
//                     <Link
//                       to="/contact"
//                       className="group w-full flex items-center justify-center gap-2 bg-linear-to-r from-[#C5A059] to-[#8C6F3D] text-white px-5 py-3 rounded-xl font-bold hover:shadow-[#C5A059]/30 transition-all duration-300"
//                     >
//                       <BellRing className="w-4 h-4" />
//                       <span>Daftar Early Adopter</span>
//                     </Link>
//                     <p className="text-[10px] text-gray-400 text-center">
//                       Jadilah yang pertama mengetahui ketika konsep ini siap diwujudkan
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Badge */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 className="absolute -top-3 -right-3 bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] text-[#E8D09E] px-4 py-2 rounded-full text-xs font-bold shadow-xl flex items-center gap-1.5 z-20 border border-[#E8D09E]/30"
//               >
//                 <Lightbulb className="w-3.5 h-3.5" />
//                 <span>Research Phase</span>
//               </motion.div>
//             </div>
//           </div>

//           {/* Bottom Note */}
//           <div className="bg-[#FAF8F5] border-t border-[#E8D09E]/30 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
//             <div className="flex items-center gap-2 text-sm text-gray-600">
//               <Compass className="w-4 h-4 text-[#8C6F3D]" />
//               <span>
//                 Tertarik menjadi <strong className="text-[#8C6F3D]">early adopter</strong>? Berikan masukan Anda untuk membantu kami menyempurnakan konsep ini.
//               </span>
//             </div>
//             <Link
//               to="/contact"
//               className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8C6F3D] hover:text-[#C5A059] transition-colors"
//             >
//               <span>Bagikan Masukan</span>
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

/* ============================================================================
 * [COMING SOON - BELUM ADA DI PROPOSAL 2020]
 * Section Brand Protection & Supply Chain Security belum disebutkan secara
 * eksplisit di proposal Authentic Guards 2020 sebagai layanan terpisah.
 * Namun kedua konsep ini merupakan pengembangan natural dari fitur yang ada:
 * - Brand Protection: berkembang dari "Fitur Pelanggan & Klien" (Perlindungan Pendapatan)
 * - Supply Chain Security: berkembang dari "Platform track & trace"
 * Aktifkan kedua section ini ketika fitur berikut sudah dikembangkan:
 * - Real-time Monitoring Dashboard
 * - Alert System Otomatis
 * - End-to-End Supply Chain Tracking
 * - Distributor Verification
 * ============================================================================ */
// function BrandProtectionDetail() {
//   const features = [
//     { icon: <Eye className="w-5 h-5" />, title: "Real-time Monitoring", desc: "Dashboard monitoring 24/7 untuk mendeteksi aktivitas mencurigakan secara instan." },
//     { icon: <BarChart3 className="w-5 h-5" />, title: "Analytics Dashboard", desc: "Analitik komprehensif untuk memahami pola verifikasi dan potensi pemalsuan." },
//     { icon: <Bell className="w-5 h-5" />, title: "Alert System Otomatis", desc: "Notifikasi real-time saat terdeteksi aktivitas yang mencurigakan atau anomali." },
//     { icon: <FileCheck className="w-5 h-5" />, title: "Legal Support", desc: "Dukungan hukum untuk tindakan terhadap pemalsu berdasarkan data yang terkumpul." }
//   ]
//   // ... (implementasi lengkap tersedia untuk rancangan kedepan)
// }

// function SupplyChainDetail() {
//   const features = [
//     { icon: <Truck className="w-5 h-5" />, title: "End-to-End Tracking", desc: "Lacak perjalanan produk dari pabrik hingga ke tangan konsumen dengan presisi." },
//     { icon: <Users className="w-5 h-5" />, title: "Distributor Verification", desc: "Verifikasi setiap titik distribusi untuk memastikan produk tidak dibelokkan." },
//     { icon: <LineChart className="w-5 h-5" />, title: "Audit Trail Lengkap", desc: "Catatan audit yang komprehensif untuk setiap pergerakan produk dalam rantai pasok." },
//     { icon: <FileCheck className="w-5 h-5" />, title: "Compliance Report", desc: "Laporan kepatuhan otomatis untuk memenuhi regulasi industri dan standar internasional." }
//   ]
//   // ... (implementasi lengkap tersedia untuk rancangan kedepan)
// }

// ============================================================================
// CUSTOMER FEATURES SECTION - Warna disesuaikan dengan brand color
// ============================================================================
function CustomerFeaturesSection() {
  // Disesuaikan dari proposal: "Fitur Pelanggan & Klien" (halaman 10)
  // PERUBAHAN: Semua warna diganti dengan variasi brand color (gold/brown)
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Kenali Pelanggan",
      desc: "Dapatkan demografi dan analitik terperincin tentang pelanggan yang membeli produk Anda.",
      color: "primary"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Dipromosikan",
      desc: "Klien baru kami akan sering ditampilkan pada media sosial kami yang dilihat ribuan pengguna.",
      color: "secondary"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Garansi Kepuasan Pelanggan",
      desc: "Pelanggan mendapatkan kepuasan lebih tinggi karena hanya membeli produk asli Anda.",
      color: "accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Mudah Melacak",
      desc: "Platform track & trace memudahkan Anda melihat pergerakan barang secara terperinci kapanpun.",
      color: "deep"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Perlindungan Pendapatan",
      desc: "Kami melindungi produk Anda dari pemalsuan dan mencegah kerugian keuangan yang besar.",
      color: "primary"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Marketing Media Social",
      desc: "Kepedulian merek yang lebih tinggi karena pelanggan akan berbagi di akun media sosial mereka.",
      color: "secondary"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Alat Promosi Informasi Produk",
      desc: "Rincian produk Anda akan ditemukan oleh pelanggan yang menggunakan aplikasi kami.",
      color: "accent"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Notifikasi Pelanggan",
      desc: "Fitur notification memudahkan Anda agar pelanggan kembali dan membeli produk Anda.",
      color: "deep"
    }
  ]

  // PERUBAHAN: Color map menggunakan variasi brand color (gold/brown)
  const colorMap = {
    primary: { 
      bg: 'bg-[#E8D09E]', 
      text: 'text-[#8C6F3D]',
      hover: 'hover:bg-[#E8D09E]/50'
    },
    secondary: { 
      bg: 'bg-[#C5A059]', 
      text: 'text-[#6b5530]',
      hover: 'hover:bg-[#C5A059]/30'
    },
    accent: { 
      bg: 'bg-[#8C6F3D]', 
      text: 'text-[#5a4a2a]',
      hover: 'hover:bg-[#8C6F3D]/30'
    },
    deep: { 
      bg: 'bg-[#E8D09E]', 
      text: 'text-[#8C6F3D]',
      hover: 'hover:bg-[#E8D09E]/60'
    }
  }
  
  // const colorMap = {
  //   primary: { 
  //     bg: 'bg-[#E8D09E]',        // Light gold lebih opaque
  //     text: 'text-[#8C6F3D]',        // Dark brown - kontras jelas
  //     hover: 'hover:bg-[#E8D09E]/80'
  //   },
  //   secondary: { 
  //     bg: 'bg-[#C5A059]',        // Medium gold lebih opaque
  //     text: 'text-[#5a4a2a]',        // Darker brown - kontras kuat
  //     hover: 'hover:bg-[#C5A059]/70'
  //   },
  //   accent: { 
  //     bg: 'bg-[#8C6F3D]',        // Dark brown bg
  //     text: 'text-[#E8D09E]',        // Light gold - INVERTED untuk kontras maksimal
  //     hover: 'hover:bg-[#8C6F3D]/70'
  //   },
  //   deep: { 
  //     bg: 'bg-[#F5EFE6]',           // Cream solid (tidak transparan)
  //     text: 'text-[#6b5530]',        // Medium-dark brown - kontras bagus
  //     hover: 'hover:bg-[#E8D09E]/80'
  //   }
  // }

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-[#E8D09E]" />
            <span className="text-xs font-bold text-[#E8D09E] uppercase tracking-widest">Customer Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Keuntungan <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E8D09E] to-[#C5A059]">Bagi Anda</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Dengan menjadi klien kami, Anda akan mendapatkan banyak keuntungan yang menjamin Return on Investment (ROI).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => {
            const colors = colorMap[feature.color as keyof typeof colorMap] || colorMap['primary']
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-[#E8D09E]/30 transition-all"
              >
                <div className="relative z-10">
                  <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ROI Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-linear-to-r from-[#C5A059]/20 to-[#8C6F3D]/20 backdrop-blur-sm border border-[#E8D09E]/30 rounded-3xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Jaminan Return on Investment</h3>
              <p className="text-gray-300">Meningkatnya penjualan barang asli, penurunan produk palsu, dan retensi pelanggan yang tinggi.</p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-[#C5A059] text-[#1A1A1A] px-6 py-3 rounded-xl font-bold hover:bg-[#E8D09E] transition-all shrink-0"
            >
              <span>Konsultasi ROI</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// PROCESS SECTION
// ============================================================================
// function ProcessSection() {
//   // Disesuaikan dengan "Proses Sistem AG" dari proposal
//   const steps = [
//     {
//       num: "01",
//       icon: <Handshake className="w-6 h-6" />,
//       title: "Koordinasi Produksi",
//       desc: "Authentic Guards sejalan dengan Klien untuk berkoordinasi tentang produksi label 5 hari sebelum produksi/pencetakan.",
//       duration: "5 hari sebelum"
//     },
//     {
//       num: "02",
//       icon: <Printer className="w-6 h-6" />,
//       title: "Platform Komunikasi",
//       desc: "Mendirikan platform komunikasi dengan klien untuk mengirim Kode QR percetakan label dengan menghubungkan AG dengan driver printer klien.",
//       duration: "Integrasi"
//     },
//     {
//       num: "03",
//       icon: <FileCheck className="w-6 h-6" />,
//       title: "Quality Control",
//       desc: "Klien mengecek kualitas produk cetak dari kecacatan dan kesalahan yang nantinya akan dicatat dan dilaporkan.",
//       duration: "Terstandar"
//     },
//     {
//       num: "04",
//       icon: <Package className="w-6 h-6" />,
//       title: "Batch & Packing",
//       desc: "Klien menerima produk cetak yang berhasil melewati kontrol kualitas dan mengemasnya ke dalam batch dan kotak.",
//       duration: "Finalisasi"
//     }
//   ]

//   return (
//     <section className="py-16 md:py-24 bg-white relative">
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-16 space-y-4"
//         >
//           <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
//             <Zap className="w-4 h-4 text-[#8C6F3D]" />
//             <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Proses Kami</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
//             Alur Kerja <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">Terstandar</span>
//           </h2>
//           <p className="text-gray-500 text-lg leading-relaxed">
//             Proses implementasi yang terstruktur untuk memastikan kualitas dan kesuksesan setiap proyek.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {steps.map((step, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.5, delay: idx * 0.1 }}
//               className="group relative bg-[#FAF8F5] border border-gray-100 rounded-3xl p-6 hover:border-[#E8D09E]/40 hover:shadow-md transition-all"
//             >
//               <div className="absolute top-4 right-4 text-5xl font-extrabold text-gray-200/50 group-hover:text-[#E8D09E]/30 transition-colors">
//                 {step.num}
//               </div>

//               <div className="relative z-10">
//                 <div className="w-12 h-12 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                   {step.icon}
//                 </div>

//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="text-xs font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2 py-0.5 rounded">
//                     {step.duration}
//                   </span>
//                 </div>

//                 <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{step.title}</h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Support Services */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
//         >
//           {[
//             { icon: <Lightbulb className="w-5 h-5" />, title: "Pengembangan & Integrasi Aplikasi", desc: "Teknologi terkini dengan standar tertinggi." },
//             { icon: <Factory className="w-5 h-5" />, title: "Instalasi & Konfigurasi Perangkat Keras", desc: "Solusi IT paling lengkap untuk bisnis apapun." },
//             { icon: <Users className="w-5 h-5" />, title: "Pelatihan & Dukungan Platform", desc: "Tersedia 24/7 untuk menjawab pertanyaan pasca instalasi." }
//           ].map((service, idx) => (
//             <div key={idx} className="flex gap-4 p-5 bg-[#FAF8F5] rounded-2xl border border-gray-100">
//               <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
//                 {service.icon}
//               </div>
//               <div>
//                 <h4 className="font-bold text-[#1A1A1A] mb-1 text-sm">{service.title}</h4>
//                 <p className="text-xs text-gray-600 leading-relaxed">{service.desc}</p>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }


// ============================================================================
// PROCESS SECTION - Alur Implementasi (AG handle produksi & pengiriman)
// ============================================================================
function ProcessSection() {
  // Disesuaikan: AG yang handle produksi, klien hanya terima hasil jadi
  const steps = [
    {
      num: "01",
      icon: <Handshake className="w-6 h-6" />,
      title: "Konsultasi & Pendaftaran",
      desc: "Klien menghubungi tim kami untuk konsultasi kebutuhan. Setelah kesepakatan, klien mendaftar dan melengkapi data brand untuk proses selanjutnya.",
      duration: "1-2 hari",
      highlight: true
    },
    {
      num: "02",
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Desain & Personalisasi",
      desc: "Tim desain kami membuat mockup label sesuai brand identity klien. Setiap detail mulai dari pattern, warna, hingga ukuran disesuaikan dengan kebutuhan produk.",
      duration: "3-5 hari"
    },
    {
      num: "03",
      icon: <Sparkles className="w-6 h-6" />,
      title: "Produksi Kode & Label",
      desc: "Sistem AG menghasilkan kode unik dengan algoritma 3 lapis, kemudian diproduksi menjadi label hologram/tafeta dengan teknologi multi-layer dan fitur tamper-evident.",
      duration: "5-7 hari",
      highlight: true
    },
    {
      num: "04",
      icon: <FileCheck className="w-6 h-6" />,
      title: "Quality Control",
      desc: "Tim QC kami melakukan pengecekan menyeluruh terhadap kualitas cetak, fungsi QR code, dan integritas hologram. Label yang tidak lolos QC akan dimusnahkan dengan prosedur terstandar.",
      duration: "1-2 hari"
    },
    {
      num: "05",
      icon: <Boxes className="w-6 h-6" />,
      title: "Batching & Packing",
      desc: "Label yang lolos QC dikemas secara sistematis ke dalam batch dan kotak dengan dokumentasi lengkap, termasuk nomor batch dan sertifikat keaslian.",
      duration: "1 hari"
    },
    {
      num: "06",
      icon: <Package className="w-6 h-6" />,
      title: "Pengiriman ke Klien",
      desc: "Batch label dikirim langsung ke lokasi klien dengan pengemasan aman. Klien menerima produk siap pakai beserta panduan implementasi dan akses ke dashboard monitoring.",
      duration: "1-2 hari",
      highlight: true
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Zap className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Alur Implementasi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Dari Konsultasi hingga <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">Pengiriman</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Kami menangani seluruh proses produksi — Anda cukup fokus pada bisnis. Total estimasi waktu <strong className="text-[#8C6F3D]">±14 hari kerja</strong> dari konsultasi hingga label siap digunakan.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#C5A059] via-[#E8D09E] to-transparent" />

          <div className="space-y-6 lg:space-y-12">
            {steps.map((step, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex items-start gap-6 lg:gap-0 ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 lg:left-1/2 lg:-translate-x-1/2 w-12 h-12 bg-white border-2 ${
                    step.highlight ? 'border-[#C5A059] scale-110' : 'border-[#E8D09E]/50'
                  } rounded-xl flex items-center justify-center ${
                    step.highlight ? 'text-[#8C6F3D]' : 'text-gray-400'
                  } shadow-md z-10`}>
                    {step.icon}
                  </div>

                  {/* Content Card */}
                  <div className={`pl-20 lg:pl-0 lg:w-1/2 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className={`bg-white rounded-2xl p-6 border ${
                      step.highlight ? 'border-[#E8D09E]/50 shadow-lg' : 'border-gray-100 shadow-sm'
                    } hover:shadow-xl transition-shadow`}>
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs font-extrabold text-[#C5A059] bg-[#E8D09E]/20 px-2.5 py-1 rounded-md tracking-wider">
                          TAHAP {step.num}
                        </span>
                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                          {step.duration}
                        </span>
                        {step.highlight && (
                          <span className="text-[10px] font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Milestone
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Support Services - Konten aman yang memang tersedia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
              Dukungan <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">Berkelanjutan</span>
            </h3>
            <p className="text-gray-500">Layanan pendukung yang kami sediakan untuk memastikan kesuksesan implementasi Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <Handshake className="w-5 h-5" />,
                title: "Konsultasi Gratis",
                desc: "Diskusi tanpa biaya untuk memahami kebutuhan autentikasi brand Anda sebelum memulai kerjasama."
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Dukungan Teknis",
                desc: "Tim kami siap membantu penggunaan sistem verifikasi dan dashboard monitoring kapan pun dibutuhkan."
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: "Panduan Implementasi",
                desc: "Dokumentasi lengkap dan panduan cara mengaplikasikan label pada produk Anda dengan benar."
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex gap-4 p-5 bg-[#FAF8F5] rounded-2xl border border-gray-100 hover:border-[#E8D09E]/40 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-[#E8D09E]/30 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] mb-1 text-sm">{service.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-linear-to-r from-[#FAF8F5] to-white rounded-2xl border border-dashed border-[#E8D09E]/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E8D09E]/30 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A] text-sm">Total Estimasi Waktu</p>
                <p className="text-xs text-gray-600">±14 hari kerja dari konsultasi hingga pengiriman</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8C6F3D] hover:text-[#C5A059] transition-colors shrink-0"
            >
              <span>Mulai Konsultasi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// FAQ SECTION (disesuaikan dengan proposal)
// ============================================================================
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = [
    {
      q: "Apa saja opsi marking yang tersedia dari Authentic Guards?",
      a: "Authentic Guards menyediakan 4 solusi marking untuk berbagai industri: Label Tafeta dengan QR (untuk fashion & tekstil), Sticker ber-NFC (untuk verifikasi tap & go), Hologram dengan QR (keamanan ganda), dan Printing QR pada Kemasan (integrasi driver printer klien)."
    },
    {
      q: "Berapa kapasitas produksi kode AG?",
      a: "Sistem kami memiliki kapasitas produksi maksimum 100 juta kode AG per hari, disimpan di cloud database dengan standar pengamanan informasi ISO/IEC 27000:2016."
    },
    {
      q: "Standar apa yang digunakan untuk QR Code Authentic Guards?",
      a: "Kami menggunakan ISO/IEC 18004:2015 sebagai rujukan spesifikasi teknis dalam pengembangan QR code. Standar ini menjamin interoperabilitas dengan pembaca QR standar, sementara fitur autentikasi multi-layer (seperti algoritma AG dan database real-time) merupakan pengembangan proprietary kami."
    },
    {
      q: "Bagaimana prosedur jika ada kode cacat?",
      a: "Kami akan mengkompensasi kode baru jika ada kecacatan sampai 2.5% dari total produksi. Laporan kode cacat dilakukan per bulan oleh klien dengan melampirkan surat pemberitahuan dan bukti, lalu tim QC akan men-stempel pita kustom dengan catatan afkir."
    },
    {
      q: "Berapa jangka waktu untuk setiap pengembangan dan instalasi?",
      a: "Jangka waktu untuk tiap pengembangan, instalasi, proses, dan konfigurasi adalah 14 hari kerja. Koordinasi produksi label dilakukan 5 hari sebelum produksi/pencetakan label."
    },
    {
      q: "Bagaimana sistem komunikasi dengan printer klien?",
      a: "Authentic Guards mendirikan platform komunikasi dengan klien untuk mengirim Kode QR percetakan label dengan menghubungkan sistem AG dengan driver printer klien. Kami juga melindungi data dengan enkripsi untuk menghindari kehilangan data selama distribusi."
    },
    {
      q: "Apakah layanan ini bisa di-custom sesuai kebutuhan brand saya?",
      a: "Tentu! Semua layanan marking kami fully customizable. Mulai dari desain visual, ukuran, material, hingga integrasi sistem yang sesuai dengan kebutuhan industri dan brand Anda."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Search className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Pertanyaan <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">Umum</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Jawaban untuk pertanyaan yang sering ditanyakan tentang layanan kami.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#E8D09E]/40 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <h3 className="font-bold text-[#1A1A1A] text-base md:text-lg pr-4">
                  {faq.q}
                </h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  openIndex === idx
                    ? 'bg-[#C5A059] text-white rotate-180'
                    : 'bg-[#FAF8F5] text-[#8C6F3D]'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0">
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {faq.a}
                        </p>
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
// CTA SECTION
// ============================================================================
function ServicesCTA() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8C6F3D]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full">
              <Handshake className="w-4 h-4 text-[#E8D09E]" />
              <span className="text-xs font-bold text-[#E8D09E] tracking-wider uppercase">Konsultasi Gratis</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Siap Melindungi <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E8D09E] to-[#C5A059]">
                Brand Anda?
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Tim kami siap membantu Anda menemukan solusi marking yang tepat sesuai kebutuhan industri dan budget Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#C5A059] text-[#1A1A1A] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#E8D09E] transition-all duration-300 shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5"
              >
                <span>Mulai Konsultasi</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#hologram"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <Search className="w-5 h-5" />
                <span>Lihat Detail</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Konsultasi Gratis
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Custom Solution
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Dukungan 24/7
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function ServicesPage() {
  const location = useLocation()
  
  // useEffect(() => {
  //   console.log(window.navigator.userAgent)
  //   console.log(window.navigator.platform)
  //   console.log(window.navigator.vendor)
  //   console.log(window.navigator.appVersion)
  //   console.log(window.navigator.appCodeName)
  //   console.log(window.navigator.appName)
  //   console.log(window.navigator.language)
  //   console.log(window.navigator.languages)
    
  // }, [])
  
  return (
    <>
      <HeroServices />
      <ServicesOverview />
      <HologramDetail />
      <TafetaLabelDetail />
      {/* <NfcComingSoonSection /> */}
      <CustomerFeaturesSection />
      <ProcessSection />
      <FAQSection />
      {/* <ServicesCTA /> */}
    </>
  )
}