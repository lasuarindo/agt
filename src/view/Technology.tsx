import { useState } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  Shield,
  ShieldCheck,
  QrCode,
  Fingerprint,
  Zap,
  CheckCircle2,
  ArrowRight,
  Globe,
  Package,
  Sparkles,
  Lock,
  Eye,
  Smartphone,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  TrendingUp,
  Clock,
  BadgeCheck,
  Layers,
  Server,
  Database,
  Cpu,
  Wifi,
  Key,
  ScanLine,
  BarChart3,
  LineChart,
  Bell,
  FileCheck,
  Search,
  ArrowUpRight,
  Handshake,
  Code2,
  Boxes,
  Activity,
  Users,
  // Tambahan icon untuk 5 lapis keamanan & marking
  ShieldAlert,
  Hash,
  Timer,
  AlertTriangle,
  Sticker,
  Printer,
  Tag,
  Nfc,
  Compass
} from 'lucide-react'

// ============================================================================
// HERO TECHNOLOGY SECTION
// ============================================================================
function HeroTechnology() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#E8D09E]/20" />
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
          <Cpu className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Teknologi Kami</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
        >
          Sistem Anti-Pemalsuan <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
            Authentic Guards®
          </span>
          <br className="hidden md:block" />
          Terdepan di Indonesia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
        >
          Teknologi anti-pemalsuan pertama di Indonesia yang membantu produsen dan konsumen bekerja sama
          mengidentifikasi dan menghentikan aktivitas pemalsuan. Menggabungkan <strong className="text-[#1A1A1A]">algoritma AG 3 lapis</strong>,
          <strong className="text-[#1A1A1A]"> hash MD5</strong>, dan standar <strong className="text-[#1A1A1A]">ISO/IEC 27000:2016</strong> untuk proteksi supply chain yang tak tertandingi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">ISO/IEC 27000:2016</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">100M+ Kode / Hari</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">ISO/IEC 18004:2015</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// CORE TECHNOLOGY - 5 Lapis Keamanan (warna brand gold/brown)
// ============================================================================
function CoreTechnologySection() {
  // PERUBAHAN: Semua warna disesuaikan ke brand color (gold/brown) dengan variasi shade
  const layers = [
    {
      num: '01',
      icon: <Server className="w-6 h-6" />,
      title: 'Keamanan Server',
      subtitle: 'Server Security Layer',
      desc: 'Server dilindungi oleh pelindung multi-lapisan yang membantu melindungi aplikasi dari eksploit web umum yang dapat mempengaruhi ketersediaan aplikasi atau memakan sumber daya secara berlebih.',
      specs: [
        { label: 'Proteksi', value: 'Multi-Layer Shield' },
        { label: 'Standar', value: 'ISO/IEC 27000:2016' },
        { label: 'Monitoring', value: '24/7 Active' },
        { label: 'Tingkat Keamanan', value: 'Sangat Tinggi' }
      ],
      // Brand color: primary dark
      gradient: 'from-[#8C6F3D]/10 to-[#C5A059]/5',
      iconBg: 'bg-[#E8D09E]/40',
      iconColor: 'text-[#8C6F3D]',
      accentBorder: 'border-[#E8D09E]/40'
    },
    {
      num: '02',
      icon: <Hash className="w-6 h-6" />,
      title: 'Kode Algoritma AG',
      subtitle: 'Algorithm Security Layer',
      desc: 'Kode keamanan 3 lapis yang diproduksi dengan kombinasi kompleks: kata kunci personalisasi, digit alfanumerik unik, dan matriks timestamp unix dalam milidetik. Setiap kode memiliki data personalisasi yang unik.',
      specs: [
        { label: 'Lapisan 1', value: 'Kata Kunci Personalisasi' },
        { label: 'Lapisan 2', value: 'Digit Alfanumerik Unik' },
        { label: 'Lapisan 3', value: 'Timestamp Unix (ms)' },
        { label: 'Format', value: '13 Digit Kompleks' }
      ],
      // Brand color: medium gold
      gradient: 'from-[#C5A059]/15 to-[#E8D09E]/5',
      iconBg: 'bg-[#C5A059]/20',
      iconColor: 'text-[#6b5530]',
      accentBorder: 'border-[#C5A059]/30'
    },
    {
      num: '03',
      icon: <Lock className="w-6 h-6" />,
      title: 'MD5 Hash Integrity',
      subtitle: 'Integrity Layer',
      desc: 'Kode AG di-hash menggunakan algoritma MD5 untuk menghasilkan unique identifier 32-karakter hex yang tidak dapat di-reverse. Setiap kode memiliki data personalisasi unik yang menjamin integritas dan keaslian produk.',
      specs: [
        { label: 'Algoritma', value: 'MD5 Hash Function' },
        { label: 'Output', value: '32-char Hex Digest' },
        { label: 'Fungsi', value: 'Integrity Verification' },
        { label: 'Standar QR', value: 'ISO 18004:2015' }
      ],
      // Brand color: darker brown
      gradient: 'from-[#6b5530]/10 to-[#8C6F3D]/5',
      iconBg: 'bg-[#8C6F3D]/20',
      iconColor: 'text-[#5a4a2a]',
      accentBorder: 'border-[#8C6F3D]/30'
    },
    {
      num: '04',
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Kepekaan Verifikasi QR',
      subtitle: 'Verification Sensitivity Layer',
      desc: 'Untuk mengurangi penipuan dan duplikasi kode, kode AG memiliki batasan pengecekan sampai 15 kali. Jika pengecekan telah mencapai limit tanpa validasi, sistem otomatis memberhentikan kode untuk penyelidikan.',
      specs: [
        { label: 'Batas Verifikasi', value: '15 Kali / Kode' },
        { label: 'Auto-Suspend', value: 'Aktif Saat Limit' },
        { label: 'Deteksi', value: 'Anomali Otomatis' },
        { label: 'Investigasi', value: 'Real-time Flagging' }
      ],
      // Brand color: darkest brown
      gradient: 'from-[#5a4a2a]/10 to-[#6b5530]/5',
      iconBg: 'bg-[#6b5530]/20',
      iconColor: 'text-[#5a4a2a]',
      accentBorder: 'border-[#6b5530]/30'
    },
    {
      num: '05',
      icon: <ShieldAlert className="w-6 h-6" />,
      title: 'Pelepasan Label',
      subtitle: 'Tamper-Evident Layer',
      desc: 'Cara sederhana mengurangi penipuan duplikasi kode QR. Ketika kode yang terlampir pada produk terbuka/terlepas, maka kode QR tidak bisa digunakan lagi dan dianggap tidak sah atau kadaluarsa.',
      specs: [
        { label: 'Tipe', value: 'Tamper-Evident' },
        { label: 'Status', value: 'Void Saat Terbuka' },
        { label: 'Fungsi', value: 'Anti-Transfer' },
        { label: 'Validitas', value: 'Sekali Pakai' }
      ],
      // Brand color: light gold
      gradient: 'from-[#E8D09E]/30 to-[#FAF8F5]',
      iconBg: 'bg-[#E8D09E]/50',
      iconColor: 'text-[#8C6F3D]',
      accentBorder: 'border-[#E8D09E]/60'
    }
  ]

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
            <Shield className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Core Technology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            5 Lapis <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059]">Keamanan</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Lima lapisan keamanan yang bekerja sinergis untuk menciptakan proteksi yang hampir mustahil ditembus oleh pemalsu.
          </p>
        </motion.div>

        <div className="space-y-6">
          {layers.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative bg-white rounded-3xl border ${layer.accentBorder} hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-8 md:p-10`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${layer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 ${layer.iconBg} ${layer.iconColor} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {layer.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-extrabold text-[#8C6F3D] bg-[#E8D09E]/20 px-2.5 py-1 rounded-md tracking-wider">
                          LAYER {layer.num}
                        </span>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          {layer.subtitle}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">
                        {layer.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {layer.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 p-5">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                      Spesifikasi Teknis
                    </p>
                    <div className="space-y-3">
                      {layer.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                          <span className="text-xs text-gray-500 font-medium">{spec.label}</span>
                          <span className="text-sm font-bold text-[#1A1A1A]">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface MarkingOption {
  icon: React.ReactNode
  title: string
  desc: string
  status: 'active' | 'coming-soon'
  gradient?: string
  iconBg?: string
  iconColor?: string
  accentBorder?: string
  note?: string  // ✅ Optional - hanya untuk status 'coming-soon'
}

// ============================================================================
// MARKING DEVELOPMENT SECTION (warna brand + NFC & Printing sebagai Coming Soon)
// ============================================================================
function MarkingDevelopmentSection() {
  const markingOptions: MarkingOption[] = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Hologram dengan QR',
      desc: 'Kombinasi hologram premium dengan kode QR untuk lapisan keamanan ganda yang sulit dipalsukan.',
      status: 'active',
      gradient: 'from-[#8C6F3D]/10 to-[#C5A059]/5',
      iconBg: 'bg-[#E8D09E]/40',
      iconColor: 'text-[#8C6F3D]',
      accentBorder: 'border-[#E8D09E]/40'
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: 'Label Tafeta dengan QR',
      desc: 'Label tafeta berkualitas tinggi dengan kode QR terintegrasi, cocok untuk industri fashion dan tekstil.',
      status: 'active',
      gradient: 'from-[#C5A059]/15 to-[#E8D09E]/5',
      iconBg: 'bg-[#C5A059]/20',
      iconColor: 'text-[#6b5530]',
      accentBorder: 'border-[#C5A059]/30'
    },
    // {
    //   icon: <Nfc className="w-6 h-6" />,
    //   title: 'Sticker ber-NFC',
    //   desc: 'Verifikasi instan via tap & go dengan teknologi NFC. Cukup mendekatkan smartphone ke sticker.',
    //   status: 'coming-soon',
    //   note: 'Masih dalam tahap penelitian & perencanaan'
    // },
    // {
    //   icon: <Printer className="w-6 h-6" />,
    //   title: 'Printing QR pada Kemasan',
    //   desc: 'Pencetakan QR langsung pada kemasan produk dengan integrasi driver printer klien.',
    //   status: 'coming-soon',
    //   note: 'Dalam tahap penyesuaian infrastruktur'
    // }
  ]

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Package className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Marking Development</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Solusi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059]">Penandaan</span> Kami
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Authentic Guards menyediakan solusi marking untuk berbagai industri. Dua layanan aktif, dua lainnya sedang dikembangkan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {markingOptions.map((option, idx) => {
            const isComingSoon = option.status === 'coming-soon'

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative rounded-3xl overflow-hidden p-8 transition-all duration-300 ${
                  isComingSoon
                    ? 'bg-white border border-dashed border-gray-300 opacity-80 hover:opacity-100 hover:border-[#E8D09E]/60'
                    : `bg-white border ${option.accentBorder} hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl`
                }`}
              >
                {/* Coming Soon Badge */}
                {isComingSoon && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <Compass className="w-3 h-3" />
                    <span>Coming Soon</span>
                  </div>
                )}

                {/* Active Badge */}
                {!isComingSoon && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#E8D09E]/20 text-[#8C6F3D] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Tersedia</span>
                  </div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${isComingSoon ? 'from-gray-100 to-gray-50' : option.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 ${isComingSoon ? 'bg-gray-100 text-gray-500' : `${option.iconBg} ${option.iconColor}`} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {option.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isComingSoon ? 'text-gray-500' : 'text-[#1A1A1A]'}`}>
                    {option.title}
                  </h3>
                  <p className={`leading-relaxed ${isComingSoon ? 'text-sm text-gray-400 italic' : 'text-gray-600'}`}>
                    {option.desc}
                  </p>

                  {isComingSoon && 'note' in option && option.note && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-400 italic flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        {option.note}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            * Tertarik dengan solusi yang sedang dikembangkan?{' '}
            <Link to="/contact" className="text-[#8C6F3D] font-semibold hover:text-[#C5A059] transition-colors">
              Hubungi kami
            </Link>{' '}
            untuk informasi lebih lanjut.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// TECHNOLOGY STACK - Detailed Components (warna brand gold/brown)
// ============================================================================
function TechnologyStackSection() {
  // PERUBAHAN: Semua warna disesuaikan ke brand color
  const technologies = [
    {
      id: 'database',
      icon: <Database className="w-6 h-6" />,
      title: 'Cloud Database AG',
      subtitle: 'Data Infrastructure',
      desc: 'Cloud database dengan standar pengamanan informasi maksimum ISO/IEC 27000:2016 untuk menyimpan kode AG yang telah di-hash.',
      features: [
        'Kapasitas 100M kode per hari',
        'Standar ISO/IEC 27000:2016',
        'Cloud-based storage',
        'Multi-region availability'
      ],
      stats: [
        { value: '100M+', label: 'Kode / Hari' },
        { value: 'ISO', label: '27000:2016' }
      ],
      gradient: 'from-[#8C6F3D]/10 to-[#C5A059]/5',
      iconBg: 'bg-[#E8D09E]/40',
      iconColor: 'text-[#8C6F3D]',
      accentBorder: 'border-[#E8D09E]/40',
      size: 'large'
    },
    {
      id: 'hash-integrity',
      icon: <Lock className="w-6 h-6" />,
      title: 'MD5 Hash Integrity',
      desc: 'Verifikasi integritas kode AG menggunakan fungsi hash MD5. Setiap kode menghasilkan fingerprint digital unik yang menjamin keaslian dan mencegah manipulasi data.',
      features: [
        'MD5 hash function (checksum)',
        '32-character hex digest output',
        'One-way integrity verification',
        'Internal system validation only'
      ],
      gradient: 'from-[#C5A059]/15 to-[#E8D09E]/5',
      iconBg: 'bg-[#C5A059]/20',
      iconColor: 'text-[#6b5530]',
      accentBorder: 'border-[#C5A059]/30',
      size: 'small'
    },
    {
      id: 'qr-standard',
      icon: <QrCode className="w-6 h-6" />,
      title: 'QR Code Standar Internasional',
      subtitle: 'ISO/IEC 18004:2015',
      desc: 'Sistem QR code Authentic Guards dibangun berdasarkan spesifikasi ISO/IEC 18004:2015, menjamin interoperabilitas penuh dengan smartphone dan scanner QR standar di pasaran.',
      features: [
        'Berdasarkan spesifikasi ISO/IEC 18004:2015',
        'Interoperable dengan QR reader standar',
        'Ukuran fleksibel 0.18 - 1.5 cm',
        'Error correction Level Q (25%)'
      ],
      gradient: 'from-[#6b5530]/10 to-[#8C6F3D]/5',
      iconBg: 'bg-[#8C6F3D]/20',
      iconColor: 'text-[#5a4a2a]',
      accentBorder: 'border-[#8C6F3D]/30',
      size: 'small'
    },
    {
      id: 'analytics',
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics Engine',
      subtitle: 'Business Intelligence',
      desc: 'Penemuan, interpretasi, dan komunikasi pola yang berarti pada data. Menganalisa bagaimana kode dihasilkan, didistribusikan, dan digunakan.',
      features: [
        'Code generation analytics',
        'Distribution tracking',
        'Usage pattern analysis',
        'Custom reporting'
      ],
      stats: [
        { value: 'Real-time', label: 'Analytics' },
        { value: '24/7', label: 'Monitoring' }
      ],
      gradient: 'from-[#E8D09E]/30 to-[#FAF8F5]',
      iconBg: 'bg-[#E8D09E]/50',
      iconColor: 'text-[#8C6F3D]',
      accentBorder: 'border-[#E8D09E]/60',
      size: 'large'
    }
  ]

  /* [COMING SOON - BELUM ADA DI PROPOSAL 2020]
     Teknologi di bawah ini belum disebutkan di proposal Authentic Guards 2020,
     namun tetap bisa digunakan untuk rancangan pengembangan kedepan.
     Teknologi ini akan diaktifkan ketika fitur-fitur berikut sudah tersedia:
     - RESTful API & GraphQL dengan OAuth 2.0
     - Mobile SDK native (iOS & Android) dengan biometric authentication
  */
  // const upcomingTechnologies = [...]

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Server className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Technology Stack</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Infrastruktur <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059]">Enterprise-Grade</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Dibangun dengan standar ISO/IEC 27000:2016 untuk memastikan performa, keamanan, dan skalabilitas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {technologies.map((tech, idx) => {
            const isLarge = tech.size === 'large'

            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative bg-white rounded-3xl border ${tech.accentBorder} hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isLarge ? 'md:col-span-2 p-8 md:p-10' : 'p-6 md:p-8'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 ${tech.iconBg} ${tech.iconColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                        {tech.icon}
                      </div>
                      <div>
                        {'subtitle' in tech && tech.subtitle && (
                          <span className="text-[10px] font-bold text-[#8C6F3D] uppercase tracking-widest mb-1 block">
                            {tech.subtitle}
                          </span>
                        )}
                        <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-bold text-[#1A1A1A] mb-2`}>
                          {tech.title}
                        </h3>
                      </div>
                    </div>

                    {isLarge && (
                      <div className="hidden md:flex items-center gap-1.5 bg-[#E8D09E]/20 text-[#8C6F3D] px-3 py-1.5 rounded-full text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Core</span>
                      </div>
                    )}
                  </div>

                  <p className={`text-gray-600 leading-relaxed mb-6 ${isLarge ? 'text-base' : 'text-sm'}`}>
                    {tech.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {tech.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {'stats' in tech && tech.stats && isLarge && (
                    <div className="grid grid-cols-2 gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
                      {tech.stats.map((stat, sIdx) => (
                        <div key={sIdx} className="text-center">
                          <p className="text-2xl font-extrabold text-[#1A1A1A] mb-1">{stat.value}</p>
                          <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// HOW IT WORKS - Verification Flow (disesuaikan dengan proposal)
// ============================================================================
function VerificationFlowSection() {
  const steps = [
    {
      num: '01',
      icon: <ScanLine className="w-6 h-6" />,
      title: 'Scan QR Code',
      desc: 'Konsumen mengarahkan kamera smartphone ke QR code pada label produk.',
      detail: 'QR code dibaca dan divalidasi formatnya sebelum dikirim ke server untuk verifikasi.',
      duration: '< 1 detik'
    },
    {
      num: '02',
      icon: <Server className="w-6 h-6" />,
      title: 'Verifikasi Server',
      desc: 'Sistem memverifikasi kecocokan hash MD5 kode AG dengan database real-time.',
      detail: 'Fingerprint digital dicocokkan, status pelepasan label dicek, dan limit verifikasi dihitung secara instan.',
      duration: '< 100ms'
    },
    {
      num: '03',
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Cek Batas Verifikasi',
      desc: 'Sistem menghitung jumlah pengecekan (maksimal 15 kali) untuk mendeteksi duplikasi.',
      detail: 'Jika limit tercapai tanpa validasi, kode otomatis diberhentikan untuk penyelidikan.',
      duration: 'Instan'
    },
    {
      num: '04',
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Hasil Verifikasi',
      desc: 'Hasil verifikasi ditampilkan instan dengan status keaslian produk.',
      detail: 'Menampilkan status keaslian, informasi produk, brand, dan riwayat verifikasi.',
      duration: 'Instan'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A1A1A] to-[#2a2a2a] relative overflow-hidden">
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
            <Zap className="w-4 h-4 text-[#E8D09E]" />
            <span className="text-xs font-bold text-[#E8D09E] uppercase tracking-widest">Verification Flow</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Alur Verifikasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D09E] to-[#C5A059]">4 Langkah</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Proses verifikasi yang cepat, mudah, dan aman untuk konsumen Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-[#E8D09E]/30 transition-all"
            >
              <div className="absolute top-4 right-4 text-5xl font-extrabold text-white/5 group-hover:text-[#E8D09E]/10 transition-colors">
                {step.num}
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#E8D09E]/20 text-[#E8D09E] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#E8D09E] bg-[#E8D09E]/20 px-2 py-0.5 rounded">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">{step.desc}</p>
                <p className="text-xs text-gray-500 leading-relaxed pt-3 border-t border-white/10">{step.detail}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-20">
                  <ArrowRight className="w-6 h-6 text-[#C5A059]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4">
            <Clock className="w-5 h-5 text-[#E8D09E]" />
            <div className="text-left">
              <p className="text-xs text-gray-400 uppercase tracking-wider">Total Waktu Verifikasi</p>
              <p className="text-2xl font-extrabold text-white">Kurang dari 5 Detik</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// SECURITY & COMPLIANCE SECTION (warna brand gold/brown)
// ============================================================================
function SecurityComplianceSection() {
  // PERUBAHAN: Hanya ISO/IEC 27000:2016 dan ISO/IEC 18004:2015 (sesuai proposal)
  const certifications = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: 'ISO/IEC 27000:2016',
      desc: 'Standar pengamanan informasi maksimum yang diterapkan pada cloud database Authentic Guards.',
      bg: 'bg-[#E8D09E]/40',
      text: 'text-[#8C6F3D]'
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: 'ISO/IEC 18004:2015',
      desc: 'Sistem QR code kami dikembangkan dengan mengacu pada standar internasional ISO/IEC 18004:2015 (QR Code Bar Code Symbology Specification) sebagai rujukan teknis, memastikan interoperabilitas dengan pembaca QR standar di seluruh dunia.',
      bg: 'bg-[#C5A059]/20',
      text: 'text-[#6b5530]'
    }
  ]
  
  /* [COMING SOON - BELUM ADA DI PROPOSAL 2020]
     Sertifikasi di bawah ini belum disebutkan di proposal Authentic Guards 2020,
     namun merupakan standar industri yang bisa ditambahkan untuk rancangan kedepan.
     Aktifkan ketika sertifikasi berikut sudah diperoleh:
     - GDPR Compliant (untuk ekspansi ke Eropa)
     - SOC 2 Type II (audit independen keamanan data)
     - PCI DSS (jika ada pemrosesan data kartu pembayaran)
  */
  // const upcomingCertifications = [...]

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:sticky lg:top-32"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full mb-4">
                <Shield className="w-4 h-4 text-[#8C6F3D]" />
                <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Security & Compliance</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-4">
                Standar Keamanan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059]">
                  Kelas Dunia
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Kami berkomitmen pada standar keamanan dan privasi tertinggi. Cloud database kami
                tersertifikasi ISO/IEC 27000:2016 untuk pengamanan informasi maksimum.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-6 text-white">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#E8D09E] rounded-xl flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Multi-Layer Server Protection</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Server dilindungi pelindung multi-lapisan dari eksploit web umum yang dapat
                    mempengaruhi ketersediaan aplikasi atau memakan sumber daya secara berlebih.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex gap-4 p-5 bg-[#FAF8F5] rounded-2xl border border-gray-100 hover:border-[#E8D09E]/40 hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 ${cert.bg} ${cert.text} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{cert.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* [COMING SOON] Placeholder untuk sertifikasi mendatang */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group flex gap-4 p-5 bg-[#FAF8F5]/50 rounded-2xl border border-dashed border-[#E8D09E]/40"
            >
              <div className="w-12 h-12 bg-gray-100 text-gray-400 rounded-xl flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#1A1A1A] mb-1">Sertifikasi Tambahan</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  GDPR, SOC 2 Type II, PCI DSS — segera hadir untuk rancangan pengembangan kedepan.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PERFORMANCE METRICS SECTION (sudah brand color, dipertahankan)
// ============================================================================
function PerformanceMetricsSection() {
  const metrics = [
    {
      icon: <Database className="w-6 h-6" />,
      value: '100',
      suffix: 'M',
      label: 'Kode / Hari',
      desc: 'Kapasitas produksi maksimum kode AG per hari'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      value: '15',
      suffix: 'x',
      label: 'Limit Verifikasi',
      desc: 'Batas pengecekan per kode untuk cegah duplikasi'
    },
    {
      icon: <Hash className="w-6 h-6" />,
      value: '32',
      suffix: 'char',
      label: 'MD5 Hex Digest',
      desc: 'Verifikasi integritas data menggunakan algoritma hash MD5'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      value: '5',
      suffix: '',
      label: 'Lapis Keamanan',
      desc: 'Lapisan proteksi sinergis pada setiap produk'
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      value: '25',
      suffix: '%',
      label: 'Error Correction',
      desc: 'Koreksi kesalahan Level Q pada QR code'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      value: 'ISO',
      suffix: '',
      label: '27000:2016',
      desc: 'Standar pengamanan informasi cloud database'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <TrendingUp className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Performance Metrics</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Performa yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059]">Terbukti</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Angka-angka yang menunjukkan komitmen kami terhadap kualitas dan kehandalan sistem.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-white rounded-3xl p-6 border border-[#E8D09E]/30 hover:border-[#C5A059]/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#E8D09E]/30 text-[#8C6F3D] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {metric.icon}
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-1 tracking-tight">
                {metric.value} <span className="text-[#8C6F3D]">{metric.suffix}</span>
              </p>
              <p className="text-sm font-bold text-[#8C6F3D] mb-2">{metric.label}</p>
              <p className="text-xs text-gray-500">{metric.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// INTEGRATION CAPABILITIES SECTION (sudah brand color, dipertahankan)
// ============================================================================
function IntegrationSection() {
  const integrations = [
    {
      icon: <Printer className="w-5 h-5" />,
      title: 'Printer Driver Integration',
      desc: 'Platform komunikasi yang menghubungkan Authentic Guards dengan driver printer klien untuk pengiriman kode QR pencetakan label.'
    },
    {
      icon: <Boxes className="w-5 h-5" />,
      title: 'Batch & Packing System',
      desc: 'Modul pengaman dokumen dan pengaturan batch agar siap untuk dicetak, dikemas, dan dikirimkan.'
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: 'Quality Control',
      desc: 'Pengecekan kualitas produk cetak dari kecacatan dan kesalahan dengan prosedur pelaporan terstandar.'
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Reporting Module',
      desc: 'Data yang dapat disaring berdasarkan kode AG, nomor batch, tanggal, dan diekspor ke format dokumentasi apapun.'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'User Roles Management',
      desc: 'Hak istimewa pengguna berbeda untuk mengakses dan memproses sistem Authentic Guards dan modul.'
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: 'History Logs',
      desc: 'Mencatat aktivitas dari dan ke sistem, mulai dari turunan kode, distribusi, sampai proses pengiriman.'
    }
  ]

  /* [COMING SOON - BELUM ADA DI PROPOSAL 2020]
     Fitur integrasi di bawah ini belum disebutkan di proposal Authentic Guards 2020,
     namun merupakan standar industri modern yang bisa ditambahkan untuk rancangan kedepan.
     Aktifkan ketika fitur-fitur berikut sudah dikembangkan:
     - RESTful API dengan dokumentasi lengkap & SDK
     - Mobile SDK native (iOS & Android)
     - Web Widget embeddable
     - ERP Integration (SAP, Oracle)
     - Webhook Support untuk real-time notifications
  */
  // const upcomingIntegrations = [...]

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full mb-4">
                <Code2 className="w-4 h-4 text-[#8C6F3D]" />
                <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Integration</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-4">
                Integrasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059]">End-to-End</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Sistem kami dirancang untuk integrasi yang mulus dengan infrastruktur existing Anda,
                dari produksi kode hingga pencetakan label pada kemasan produk.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">AG System Flow</span>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 font-mono text-sm">
                  <p className="text-gray-400 mb-2">// AG Backend → Client Print</p>
                  <p className="text-[#C5A059]">AG Codes <span className="text-gray-500">→</span> <span className="text-[#E8D09E]">Batch & Pack</span></p>
                  <p className="text-[#C5A059]">Print Driver <span className="text-gray-500">→</span> <span className="text-[#E8D09E]">QR Label</span></p>
                  <p className="text-gray-500 text-xs mt-3">Quality Control: Active</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">Capacity</p>
                    <p className="text-sm font-bold text-white">100M / Day</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider">Standard</p>
                    <p className="text-sm font-bold text-white">ISO 27000</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {integrations.map((integration, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group flex gap-3 p-4 bg-[#FAF8F5] rounded-2xl border border-gray-100 hover:border-[#E8D09E]/40 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-[#E8D09E]/30 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {integration.icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{integration.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{integration.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
      q: "Apa itu sistem 5 lapis keamanan AuthenticGuards?",
      a: "Sistem keamanan berlapis kami terdiri dari: (1) Keamanan Server — proteksi multi-layer berstandar ISO/IEC 27000:2016, (2) Kode Algoritma AG — 3 lapis (kata kunci personalisasi, digit alfanumerik, timestamp unix), (3) MD5 Hash Integrity — verifikasi integritas 32-char hex, (4) Kepekaan Verifikasi QR — batas 15 kali pengecekan per kode, (5) Pelepasan Label — tamper-evident, kode void saat label terbuka."
    },
    {
      q: "Apa itu kode AG dan bagaimana cara kerjanya?",
      a: "Kode AG (Authentic Guards) adalah kode keamanan 13 digit yang diproduksi dengan algoritma 3 lapis: kata kunci personalisasi brand, digit alfanumerik unik, dan matriks timestamp unix dalam milidetik. Setiap kode di-hash MD5 menjadi identifier 32-karakter hex yang tidak dapat di-reverse, lalu diintegrasikan ke QR code berstandar ISO/IEC 18004:2015."
    },
    {
      q: "Berapa lama waktu respons verifikasi produk?",
      a: "Sistem menggunakan 5 lapis keamanan: keamanan server multi-lapisan, algoritma AG 3 lapis, hash MD5 untuk integritas data, kepekaan verifikasi QR (limit 15x), dan pelepasan label. Ketika label terbuka/terlepas, kode QR otomatis tidak valid. Setiap upaya duplikasi akan terdeteksi oleh sistem."
    },
    {
      q: "Bagaimana sistem mencegah duplikasi dan penyalahgunaan kode?",
      a: "Setiap kode AG memiliki batas verifikasi hingga 15 kali. Jika limit tercapai tanpa validasi, sistem otomatis men-suspend kode untuk investigasi. Selain itu, label tamper-evident membuat kode void saat label dilepas — mencegah transfer kode ke produk palsu."
    },
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
            Pertanyaan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059]">Teknis</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Jawaban untuk pertanyaan yang sering ditanyakan tentang teknologi Authentic Guards.
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
function TechnologyCTA() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-8 md:p-16 text-white text-center shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8C6F3D]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full">
              <Handshake className="w-4 h-4 text-[#E8D09E]" />
              <span className="text-xs font-bold text-[#E8D09E] tracking-wider uppercase">Demo Teknologi</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Lindungi Merek Anda <br className="hidden md:block" />
              dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D09E] to-[#C5A059]">Authentic Guards®</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Jadwalkan demo pribadi dengan tim kami dan saksikan langsung bagaimana teknologi
              anti-pemalsuan kami dapat melindungi brand Anda dari aktivitas pemalsuan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-[#C5A059] text-[#1A1A1A] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#E8D09E] transition-all duration-300 shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5"
              >
                <span>Jadwalkan Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#core"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <Search className="w-5 h-5" />
                <span>Pelajari Detail</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                Demo Gratis
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                Konsultasi Teknis
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                Custom Marking Solution
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
export default function TechnologyPage() {
  return (
    <>
      <HeroTechnology />
      <CoreTechnologySection />
      <MarkingDevelopmentSection />
      <TechnologyStackSection />
      <VerificationFlowSection />
      <SecurityComplianceSection />
      <PerformanceMetricsSection />
      <IntegrationSection />
      <FAQSection />
      {/* <TechnologyCTA /> */}
    </>
  )
}