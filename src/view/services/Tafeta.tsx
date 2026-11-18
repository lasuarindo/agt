import { Link, useParams, Navigate } from 'react-router'
import { motion } from 'motion/react'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  QrCode,
  ShieldAlert,
  Database,
  Shield,
  Tag,
  Nfc,
  Printer,
  Package,
  Clock,
  Users,
  Building2,
  Globe,
  Award,
  BadgeCheck,
  FileCheck,
  Lightbulb,
  Target,
  Zap,
  Eye,
  Layers,
  TrendingUp,
  ChevronRight,
  Home,
  Calendar,
  Hash,
  Lock,
  AlertTriangle,
  Handshake,
  Search,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Tags,
  Smartphone,
  ChartColumn,
  Code2,
  Boxes,
  Bell,
  Compass,
  Shirt,
  Scissors,
  Palette,
  Droplet,
  Wind
} from 'lucide-react'

// ============================================================================
// SERVICE DATA - Label Tafeta dengan QR
// Disesuaikan dengan kondisi riil layanan Authentic Guards untuk fashion
// ============================================================================
const TAFETA_SERVICE_DATA = {
  id: 'tafeta',
  title: 'Label Tafeta dengan QR',
  subtitle: 'Fashion Solution',
  tagline: 'Autentikasi premium untuk industri fashion & tekstil',
  color: {
    primary: 'gold',
    gradient: 'from-[#8C6F3D] to-[#C5A059]',
    bg: 'bg-[#E8D09E]/30',
    text: 'text-[#8C6F3D]',
    border: 'border-[#E8D09E]/40',
    dark: 'from-[#8C6F3D] to-[#C5A059]'
  },
  hero: {
    badge: 'Fashion Solution',
    title: 'Label Tafeta dengan QR Code',
    subtitle: 'Solusi autentikasi khusus untuk industri fashion & tekstil',
    description: 'Label tafeta premium dengan kode QR terintegrasi yang dirancang khusus untuk industri fashion. Menggabungkan estetika produk dengan keamanan maksimal, tanpa mengorbankan kenyamanan pemakai.',
    stats: [
      { value: '100%', label: 'Custom Design' },
      { value: '50x+', label: 'Tahan Cuci' },
      { value: 'ISO', label: '18004:2015' }
    ]
  },
  overview: {
    title: 'Tentang Layanan Ini',
    description: [
      'Label Tafeta dengan QR adalah solusi autentikasi khusus kami untuk industri fashion dan tekstil. Setiap label diproduksi dari material tafeta premium berkualitas tinggi, dilengkapi dengan kode QR yang dicetak menggunakan teknologi high-resolution printing dengan standar ISO/IEC 18004:2015.',
      'Solusi ini dirancang untuk menjawab tantangan unik industri fashion: bagaimana memberikan proteksi maksimal terhadap produk dari pemalsuan, tanpa mengorbankan estetika, kenyamanan, dan nilai estetika produk. Label kami menyatu sempurna dengan desain produk, tahan terhadap pencucian berulang, dan tetap dapat diverifikasi dengan mudah oleh konsumen.'
    ],
    highlights: [
      'Material tafeta premium berkualitas tinggi',
      'Tahan hingga 50+ kali pencucian',
      'QR code dengan printing high-resolution',
      'Fully customizable sesuai brand identity',
      'Nyaman dikenakan dan tidak mengganggu produk',
      'Terintegrasi dengan database real-time AG'
    ]
  },
  features: [
    {
      icon: 'Shirt',
      title: 'Material Tafeta Premium',
      description: 'Dibuat dari material tafeta berkualitas tinggi yang lembut, tahan lama, dan nyaman dikenakan. Material ini telah diuji untuk memastikan ketahanan terhadap berbagai kondisi penggunaan produk fashion.',
      details: [
        'Material tafeta premium grade',
        'Lembut dan nyaman di kulit',
        'Tahan terhadap gesekan',
        'Tidak mudah luntur'
      ]
    },
    {
      icon: 'Droplet',
      title: 'Ketahanan Cuci Superior',
      description: 'Label dirancang untuk bertahan hingga 50+ kali pencucian tanpa degradasi kualitas. Teknologi printing khusus memastikan QR code tetap terbaca dengan jelas meski setelah pencucian berulang.',
      details: [
        'Tahan 50+ kali pencucian',
        'Water-resistant printing',
        'Warna tidak luntur',
        'QR tetap terbaca jelas'
      ]
    },
    {
      icon: 'QrCode',
      title: 'QR Code High-Resolution',
      description: 'QR code dicetak dengan teknologi high-resolution printing yang menghasilkan kode yang tajam, jelas, dan mudah discan. Memenuhi standar ISO/IEC 18004:2015 untuk interoperabilitas maksimal.',
      details: [
        'High-resolution printing',
        'ISO/IEC 18004:2015 standard',
        'Error correction Level Q (25%)',
        'Mudah discan smartphone'
      ]
    },
    {
      icon: 'Palette',
      title: 'Fully Customizable Design',
      description: 'Desain label fully customizable sesuai brand identity Anda. Mulai dari ukuran, bentuk, warna, hingga integrasi dengan logo dan elemen desain produk. Tim desain kami akan bekerja sama untuk menciptakan label yang sempurna.',
      details: [
        'Custom ukuran & bentuk',
        'Full color printing',
        'Integrasi logo brand',
        'Desain eksklusif per brand'
      ]
    }
  ],
  specifications: {
    title: 'Spesifikasi Teknis',
    items: [
      { label: 'Material', value: 'Tafeta Premium Grade' },
      { label: 'Standar QR Code', value: 'ISO/IEC 18004:2015' },
      { label: 'Ukuran Label', value: 'Custom (2cm - 10cm)' },
      { label: 'Ketahanan Cuci', value: '50+ kali pencucian' },
      { label: 'Teknologi Printing', value: 'High-Resolution' },
      { label: 'Ketahanan Warna', value: 'Anti-Fade, Anti-Bleed' },
      { label: 'Database Standard', value: 'ISO/IEC 27000:2016' },
      { label: 'Error Correction', value: 'Level Q (25%)' },
      { label: 'Response Time', value: '< 100ms' },
      { label: 'Verifikasi Limit', value: '15x per code' }
    ]
  },
  implementation: {
    title: 'Alur Implementasi',
    description: 'Proses implementasi yang terstruktur untuk memastikan kualitas dan kesuksesan setiap proyek label fashion.',
    steps: [
      {
        num: '01',
        title: 'Konsultasi & Analisis',
        description: 'Diskusi mendalam untuk memahami kebutuhan spesifik brand fashion Anda, jenis produk, target pasar, dan tingkat keamanan yang dibutuhkan.',
        duration: '1-2 hari',
        icon: 'Handshake'
      },
      {
        num: '02',
        title: 'Desain & Prototyping',
        description: 'Tim desain membuat mockup label sesuai brand identity dan karakteristik produk fashion. Prototype diproduksi untuk approval sebelum produksi massal.',
        duration: '3-5 hari',
        icon: 'Lightbulb'
      },
      {
        num: '03',
        title: 'Produksi Kode AG',
        description: 'Sistem menghasilkan kode AG unik dengan algoritma 3 lapis, di-hash MD5, dan disimpan di cloud database berstandar ISO/IEC 27000:2016.',
        duration: '1-2 hari',
        icon: 'Hash'
      },
      {
        num: '04',
        title: 'Produksi Label Tafeta',
        description: 'Label tafeta diproduksi dengan teknologi high-resolution printing, dilengkapi QR code dan fitur keamanan sesuai spesifikasi. Material diuji untuk ketahanan cuci.',
        duration: '5-7 hari',
        icon: 'Shirt'
      },
      {
        num: '05',
        title: 'Quality Control',
        description: 'Pengecekan kualitas label dari kecacatan printing, ketahanan material, dan fungsi QR code. Label yang tidak lolos QC akan dimusnahkan dengan prosedur terstandar.',
        duration: '1-2 hari',
        icon: 'FileCheck'
      },
      {
        num: '06',
        title: 'Pengiriman & Implementasi',
        description: 'Label dikirim ke klien dengan dokumentasi lengkap. Tim kami membantu proses aplikasi label pada produk fashion dan training penggunaan sistem.',
        duration: '2-3 hari',
        icon: 'Package'
      }
    ]
  },
  useCases: {
    title: 'Industri Fashion yang Cocok',
    description: 'Solusi ini ideal untuk berbagai segmen industri fashion yang membutuhkan proteksi terhadap produk dari pemalsuan.',
    industries: [
      {
        icon: 'Award',
        name: 'Fashion Premium & Designer',
        description: 'Brand fashion premium, designer lokal, dan label eksklusif yang rentan terhadap pemalsuan.',
        examples: ['Tas Designer', 'Pakaian Premium', 'Aksesoris Fashion']
      },
      {
        icon: 'Shirt',
        name: 'Apparel & Clothing',
        description: 'Brand pakaian, kaos, jaket, dan produk apparel lainnya yang membutuhkan label autentikasi.',
        examples: ['Kaos Branded', 'Jaket', 'Kemeja']
      },
      {
        icon: 'Tag',
        name: 'Footwear & Sneakers',
        description: 'Brand sepatu, sneakers, dan alas kaki yang sering menjadi target pemalsuan.',
        examples: ['Sneakers Original', 'Sepatu Branded', 'Sandal Premium']
      },
      {
        icon: 'Scissors',
        name: 'Accessories & Textile',
        description: 'Produk aksesoris fashion, tekstil rumah tangga, dan produk tekstil lainnya.',
        examples: ['Topi', 'Syal', 'Tekstil Rumah Tangga']
      }
    ]
  },
  benefits: {
    title: 'Keuntungan untuk Brand Fashion Anda',
    items: [
      {
        icon: 'Shield',
        title: 'Proteksi Produk Fashion',
        description: 'Lapisan keamanan yang terintegrasi langsung dengan produk, sulit dipalsukan tanpa merusak estetika.'
      },
      {
        icon: 'Users',
        title: 'Meningkatkan Kepercayaan Konsumen',
        description: 'Konsumen dapat memverifikasi keaslian produk fashion dengan mudah via smartphone sebelum membeli.'
      },
      {
        icon: 'TrendingUp',
        title: 'ROI Tinggi untuk Brand Fashion',
        description: 'Penurunan produk palsu dan peningkatan penjualan produk asli secara signifikan.'
      },
      {
        icon: 'Eye',
        title: 'Monitoring Aktivitas Verifikasi',
        description: 'Pencatatan aktivitas verifikasi untuk analisis pola pembelian dan deteksi anomali.'
      },
      {
        icon: 'Globe',
        title: 'Standar Internasional',
        description: 'Menggunakan standar ISO/IEC 18004:2015 dan ISO/IEC 27000:2016 yang diakui global.'
      },
      {
        icon: 'Target',
        title: 'Fully Customizable',
        description: 'Desain label fully customizable sesuai brand identity dan karakteristik produk fashion Anda.'
      }
    ]
  },
  gallery: {
    title: 'Visual Preview',
    description: 'Contoh visual produk fashion dengan label tafeta QR (dokumentasi akan segera dilengkapi)',
    items: [
      { title: 'Label Tafeta Premium', description: 'Contoh label tafeta dengan QR code terintegrasi', placeholder: <Tags className='w-12 h-12 opacity-60' /> },
      { title: 'Aplikasi pada Pakaian', description: 'Label diaplikasikan pada produk fashion', placeholder: <Shirt className='w-12 h-12 opacity-60' /> },
      { title: 'Verifikasi via Smartphone', description: 'Konsumen memverifikasi produk fashion dengan scan QR', placeholder: <Smartphone className='w-12 h-12 opacity-60' /> },
      { title: 'Monitoring Aktivitas', description: 'Pencatatan aktivitas verifikasi real-time', placeholder: <ChartColumn className='w-12 h-12 opacity-60' /> }
    ]
  },
  faq: {
    title: 'Pertanyaan Umum',
    items: [
      {
        q: 'Berapa minimum order untuk label tafeta?',
        a: 'Minimum order quantity (MOQ) bervariasi tergantung kompleksitas desain dan ukuran label. Untuk informasi detail dan penawaran terbaik, silakan hubungi tim sales kami untuk konsultasi langsung.'
      },
      {
        q: 'Berapa lama waktu produksi label tafeta?',
        a: 'Waktu produksi standar adalah ±14 hari kerja setelah desain di-approve, sesuai dengan ketentuan layanan kami. Untuk kebutuhan khusus, timeline dapat didiskusikan lebih lanjut dengan tim kami.'
      },
      {
        q: 'Apakah label tafeta tahan terhadap pencucian?',
        a: 'Ya, label tafeta kami dirancang untuk bertahan hingga 50+ kali pencucian tanpa degradasi kualitas. Material dan teknologi printing khusus memastikan QR code tetap terbaca dengan jelas.'
      },
      {
        q: 'Apakah desain label bisa fully custom?',
        a: 'Tentu! Tim desain kami akan bekerja sama dengan Anda untuk membuat label custom sesuai brand identity. Mulai dari ukuran, bentuk, warna, hingga integrasi dengan logo dan elemen desain produk fashion.'
      },
      {
        q: 'Bagaimana jika ada label yang cacat produksi?',
        a: 'Kami akan mengkompensasi label baru jika ada kecacatan sampai 2.5% dari total produksi. Laporan kode cacat dilakukan per bulan oleh klien dengan melampirkan surat pemberitahuan dan bukti.'
      },
      {
        q: 'Apakah label nyaman dikenakan?',
        a: 'Ya, material tafeta premium kami sangat lembut dan nyaman di kulit. Label dirancang untuk tidak mengganggu kenyamanan pemakai produk fashion, bahkan untuk produk yang bersentuhan langsung dengan kulit.'
      },
      {
        q: 'Apakah ada solusi lain selain label tafeta?',
        a: 'Ya, kami juga menyediakan Hologram dengan QR untuk berbagai industri. Untuk solusi teknologi lainnya seperti NFC, saat ini masih dalam tahap penelitian dan pengembangan. Silakan hubungi tim kami untuk informasi lebih lanjut.'
      }
    ]
  },
  pricing: {
    title: 'Paket & Investasi',
    description: 'Setiap proyek fashion memiliki kebutuhan yang unik. Kami menawarkan solusi fleksibel yang disesuaikan dengan skala brand, volume produksi, dan tingkat keamanan yang Anda butuhkan.',
    note: 'Harga final akan diberikan setelah konsultasi dan analisis kebutuhan. Semua penawaran belum termasuk PPN.',
    packages: [
      {
        name: 'Starter',
        description: 'Untuk brand fashion emerging yang baru memulai proteksi produk',
        price: 'Custom',
        priceUnit: '',
        pricePeriod: '',
        priceNote: 'Sesuai kebutuhan',
        popular: false,
        features: [
          { text: 'Volume produksi disesuaikan', included: true },
          { text: 'Desain label standar', included: true },
          { text: 'QR code dengan database real-time', included: true },
          { text: 'Verifikasi via web browser', included: true },
          { text: 'Basic activity logging', included: true },
          { text: 'Email support (jam kerja)', included: true },
          { text: 'Custom design', included: false },
          { text: 'API integration', included: false },
          { text: 'Dedicated account manager', included: false }
        ],
        cta: 'Mulai Konsultasi',
        highlight: 'Cocok untuk Brand Emerging'
      },
      {
        name: 'Business',
        description: 'Untuk brand fashion menengah yang membutuhkan solusi lebih komprehensif',
        price: 'Custom',
        priceUnit: '',
        pricePeriod: '',
        priceNote: 'Sesuai kebutuhan',
        popular: true,
        features: [
          { text: 'Volume produksi menengah-besar', included: true },
          { text: 'Custom design label unlimited', included: true },
          { text: 'QR code + Material premium', included: true },
          { text: 'Verifikasi via web & mobile', included: true },
          { text: 'Advanced activity analytics', included: true },
          { text: 'Priority support', included: true },
          { text: 'Basic API integration', included: true },
          { text: 'Monthly performance report', included: true },
          { text: 'Dedicated account manager', included: false }
        ],
        cta: 'Pilih Paket Ini',
        highlight: 'Paling Populer'
      },
      {
        name: 'Enterprise',
        description: 'Untuk brand fashion besar dengan kebutuhan khusus',
        price: 'Custom',
        priceUnit: '',
        pricePeriod: '',
        priceNote: 'Sesuai kebutuhan',
        popular: false,
        features: [
          { text: 'Volume produksi besar', included: true },
          { text: 'Full customization label & material', included: true },
          { text: 'Multi-layer security', included: true },
          { text: 'Enterprise analytics & reporting', included: true },
          { text: 'Dedicated support + SLA', included: true },
          { text: 'Custom MOQ sesuai kebutuhan', included: true },
          { text: 'Full API integration', included: true },
          { text: 'Dedicated account manager', included: true },
          { text: 'On-site training & implementation', included: true }
        ],
        cta: 'Hubungi Sales',
        highlight: 'Solusi Premium'
      }
    ],
    addons: [
      {
        title: 'Desain Label Custom',
        description: 'Desain label eksklusif sesuai brand identity fashion Anda',
        price: 'Harga bervariasi',
        icon: 'Palette'
      },
      {
        title: 'Material Premium Upgrade',
        description: 'Upgrade ke material tafeta grade tertinggi untuk produk luxury',
        price: 'Harga bervariasi',
        icon: 'Shirt'
      },
      {
        title: 'White-Label Mobile App',
        description: 'Aplikasi verifikasi dengan branding perusahaan fashion Anda',
        price: 'Harga bervariasi',
        icon: 'Smartphone'
      },
      // {
      //   title: 'API Integration Package',
      //   description: 'Integrasi penuh dengan sistem e-commerce atau ERP Anda',
      //   price: 'Harga bervariasi',
      //   icon: 'Code2'
      // }
    ]
  },
  customSolution: {
    title: 'Butuh Solusi yang Benar-Benar Custom?',
    description: 'Kami memahami bahwa setiap brand fashion memiliki kebutuhan unik. Tim kami siap merancang solusi autentikasi yang disesuaikan 100% dengan kebutuhan bisnis fashion Anda.',
    features: [
      {
        icon: 'Target',
        title: 'Custom Security Level',
        desc: 'Tentukan sendiri tingkat keamanan sesuai risiko produk fashion Anda'
      },
      {
        icon: 'Palette',
        title: 'Full Brand Integration',
        desc: 'Integrasi penuh dengan brand identity dan packaging fashion Anda'
      },
      {
        icon: 'Boxes',
        title: 'Volume Flexibility',
        desc: 'Penyesuaian volume produksi sesuai kebutuhan musiman fashion'
      },
      {
        icon: 'Globe',
        title: 'Multi-Region Support',
        desc: 'Dukungan untuk distribusi fashion di berbagai wilayah'
      }
    ],
    process: [
      'Konsultasi mendalam dengan tim expert kami',
      'Analisis kebutuhan & risk assessment',
      'Proposal solusi custom dalam 3-5 hari kerja',
      'Prototyping & testing material',
      'Implementasi & monitoring berkelanjutan'
    ]
  }
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroDetailSection({ data }: { data: typeof TAFETA_SERVICE_DATA }) {
  const { hero, color } = data

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#E8D09E]/40" />
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[700px] h-[700px] bg-[#C5A059]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[600px] h-[600px] bg-[#8C6F3D]/40 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 26, 26, 1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-[#C5A059]/40 px-5 py-2.5 rounded-full shadow-sm mb-8"
        >
          <div className="flex items-center gap-1.5">
            <Shirt className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">{hero.badge}</span>
          </div>
          <span className="w-px h-4 bg-[#C5A059]/30" />
          <p className="text-sm text-[#1A1A1A] font-semibold">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl text-[#8C6F3D] font-semibold">{hero.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
            {hero.title.split(' ').slice(0, 2).join(' ')}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
              {hero.title.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p className="sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {hero.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#8C6F3D] transition-all duration-300 shadow-lg"
          >
            <span>Konsultasi Gratis</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#1A1A1A] px-6 py-3 rounded-xl font-bold hover:border-[#C5A059]/40 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Services</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600"
        >
          {hero.stats.map((stat, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              <span className="font-extrabold text-[#1A1A1A]">{stat.value}</span> {stat.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// OVERVIEW SECTION
// ============================================================================
function OverviewSection({ data }: { data: typeof TAFETA_SERVICE_DATA }) {
  const { overview, color } = data

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <p className={`text-xs font-bold ${color.text} uppercase tracking-widest mb-3`}>Overview</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-6">
                {overview.title}
              </h2>
            </div>

            <div className="space-y-4">
              {overview.description.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className={`${color.bg} rounded-3xl p-6 border ${color.border} sticky top-24`}>
              <h4 className="font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <CheckCircle2 className={`w-5 h-5 ${color.text}`} />
                Highlight Utama
              </h4>
              <div className="space-y-3">
                {overview.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className={`w-1.5 h-1.5 ${color.text.replace('text-', 'bg-')} rounded-full mt-2 shrink-0`} />
                    <span className="text-sm text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FEATURES SECTION
// ============================================================================
function FeaturesSection({ data }: { data: typeof TAFETA_SERVICE_DATA }) {
  const { features, color } = data

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Shirt: <Shirt className="w-6 h-6" />,
      Droplet: <Droplet className="w-6 h-6" />,
      QrCode: <QrCode className="w-6 h-6" />,
      Palette: <Palette className="w-6 h-6" />
    }
    return icons[iconName] || <Shirt className="w-6 h-6" />
  }

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
          <p className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>Fitur Unggulan</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Fitur <span className={`text-transparent bg-clip-text bg-linear-to-r ${color.gradient}`}>Detail</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Setiap fitur dirancang khusus untuk memberikan proteksi maksimal bagi produk fashion Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white rounded-3xl border border-gray-100 hover:border-[#E8D09E]/40 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 ${color.bg} ${color.text} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(feature.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Detail Teknis</p>
                <div className="grid grid-cols-2 gap-2">
                  {feature.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${color.text} shrink-0`} />
                      <span className="text-xs text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// SPECIFICATIONS SECTION
// ============================================================================
function SpecificationsSection({ data }: { data: typeof TAFETA_SERVICE_DATA }) {
  const { specifications, color } = data

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <p className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>Technical Specs</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {specifications.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#FAF8F5] rounded-3xl border border-[#E8D09E]/30 overflow-hidden"
        >
          {specifications.items.map((spec, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-5 ${
                idx !== specifications.items.length - 1 ? 'border-b border-gray-100' : ''
              } hover:bg-white transition-colors`}
            >
              <span className="text-sm font-medium text-gray-600">{spec.label}</span>
              <span className="text-sm font-bold text-[#1A1A1A]">{spec.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// IMPLEMENTATION FLOW SECTION
// ============================================================================
function ImplementationSection({ data }: { data: typeof TAFETA_SERVICE_DATA }) {
  const { implementation, color } = data

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Handshake: <Handshake className="w-6 h-6" />,
      Lightbulb: <Lightbulb className="w-6 h-6" />,
      Hash: <Hash className="w-6 h-6" />,
      Shirt: <Shirt className="w-6 h-6" />,
      FileCheck: <FileCheck className="w-6 h-6" />,
      Package: <Package className="w-6 h-6" />
    }
    return icons[iconName] || <CheckCircle2 className="w-6 h-6" />
  }

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
          <p className="text-[#E8D09E] font-bold tracking-widest uppercase text-xs">Implementation</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {implementation.title}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {implementation.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {implementation.steps.map((step, idx) => (
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
                  {getIcon(step.icon)}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#E8D09E] bg-[#E8D09E]/20 px-2 py-0.5 rounded">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// USE CASES / INDUSTRIES SECTION
// ============================================================================
function UseCasesSection({ data }: { data: typeof TAFETA_SERVICE_DATA }) {
  const { useCases, color } = data

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Award: <Award className="w-6 h-6" />,
      Shirt: <Shirt className="w-6 h-6" />,
      Tag: <Tag className="w-6 h-6" />,
      Scissors: <Scissors className="w-6 h-6" />
    }
    return icons[iconName] || <Shirt className="w-6 h-6" />
  }

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <p className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>Industri Fashion</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {useCases.title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {useCases.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-[#FAF8F5] rounded-3xl border border-gray-100 hover:border-[#E8D09E]/40 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 ${color.bg} ${color.text} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(industry.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{industry.description}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                {/* <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Contoh Produk</p> */}
                <div className="flex flex-wrap gap-2">
                  {industry.examples.map((example, eIdx) => (
                    <span
                      key={eIdx}
                      className="text-xs font-semibold text-gray-600 bg-white px-3 py-1.5 rounded-full border border-gray-100"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// BENEFITS SECTION
// ============================================================================
function BenefitsSection({ data }: { data: typeof TAFETA_SERVICE_DATA }) {
  const { benefits, color } = data

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Shield: <Shield className="w-6 h-6" />,
      Users: <Users className="w-6 h-6" />,
      TrendingUp: <TrendingUp className="w-6 h-6" />,
      Eye: <Eye className="w-6 h-6" />,
      Globe: <Globe className="w-6 h-6" />,
      Target: <Target className="w-6 h-6" />
    }
    return icons[iconName] || <CheckCircle2 className="w-6 h-6" />
  }

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
          <p className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>Benefits</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {benefits.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.items.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-white rounded-3xl border border-gray-100 hover:border-[#E8D09E]/40 shadow-sm hover:shadow-lg transition-all duration-300 p-6"
            >
              <div className={`w-12 h-12 ${color.bg} ${color.text} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {getIcon(benefit.icon)}
              </div>
              <h3 className="font-bold text-[#1A1A1A] mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// GALLERY SECTION (DUMMY - placeholder untuk foto asli)
// ============================================================================
function GallerySection({ data }: { data: typeof TAFETA_SERVICE_DATA }) {
  const { gallery, color } = data

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <p className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>Gallery</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {gallery.title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {gallery.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative aspect-square bg-linear-to-br from-[#FAF8F5] to-white rounded-2xl border-2 border-dashed border-[#E8D09E]/40 hover:border-[#C5A059]/60 flex flex-col items-center justify-center p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="text-6xl mb-3 opacity-60">{item.placeholder}</div>
              <h4 className="font-bold text-[#1A1A1A] text-center mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500 text-center">{item.description}</p>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2 py-0.5 rounded">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            * Gallery akan segera dilengkapi dengan foto produk asli dan dokumentasi implementasi
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// PRICING SECTION
// ============================================================================
function PricingSection({ data }: { data: typeof TAFETA_SERVICE_DATA }) {
  const { pricing, color } = data

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <span className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>Pricing Plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {pricing.title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {pricing.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {pricing.packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative bg-white rounded-3xl border ${
                pkg.popular ? 'border-[#C5A059] shadow-2xl' : 'border-gray-100 shadow-sm'
              } hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                pkg.popular ? 'md:-translate-y-4' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-linear-to-r from-[#C5A059] to-[#8C6F3D] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-md">
                  ⭐ {pkg.highlight}
                </div>
              )}

              <div className={`p-8 pb-6 ${pkg.popular ? 'bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] text-white' : 'bg-white'}`}>
                {!pkg.popular && pkg.highlight && (
                  <span className="inline-block text-xs font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-3 py-1 rounded-full mb-3">
                    {pkg.highlight}
                  </span>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-[#1A1A1A]'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-6 ${pkg.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                  {pkg.description}
                </p>

                <div className="mb-6">
                  {pkg.price === 'Custom' ? (
                    <div>
                      <p className={`text-4xl font-extrabold ${pkg.popular ? 'text-[#E8D09E]' : 'text-[#1A1A1A]'}`}>
                        Custom
                      </p>
                      <p className={`text-xs mt-1 ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                        {pkg.priceNote}
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className={`text-xs ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                        {pkg.priceNote}
                      </span>
                    </div>
                  )}

                  {pkg.price !== 'Custom' && (
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className={`text-sm ${pkg.popular ? 'text-gray-300' : 'text-gray-600'}`}>Rp</span>
                      <span className={`text-5xl font-extrabold tracking-tight ${pkg.popular ? 'text-white' : 'text-[#1A1A1A]'}`}>
                        {pkg.price}
                      </span>
                      <span className={`text-lg font-bold ${pkg.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                        {pkg.priceUnit}
                      </span>
                      <span className={`text-sm ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                        {pkg.pricePeriod}
                      </span>
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#C5A059] text-[#1A1A1A] hover:bg-[#E8D09E] shadow-lg hover:shadow-[#C5A059]/30'
                      : 'bg-[#1A1A1A] text-white hover:bg-[#8C6F3D]'
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="p-8 pt-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Yang Anda Dapatkan:
                </p>
                <div className="space-y-3">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      {feature.included ? (
                        <CheckCircle2 className={`w-5 h-5 ${color.text} shrink-0 mt-0.5`} />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-200 shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {pricing.addons && pricing.addons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl border border-[#E8D09E]/30 p-8 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Layanan Tambahan (Add-ons)</h3>
                <p className="text-gray-500">Tingkatkan paket Anda dengan fitur tambahan sesuai kebutuhan</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pricing.addons.map((addon, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-[#FAF8F5] rounded-2xl hover:bg-[#E8D09E]/10 transition-colors"
                  >
                    <div className={`w-12 h-12 ${color.bg} ${color.text} rounded-xl flex items-center justify-center shrink-0`}>
                      {addon.icon === 'Palette' && <Palette className="w-6 h-6" />}
                      {addon.icon === 'Shirt' && <Shirt className="w-6 h-6" />}
                      {addon.icon === 'Smartphone' && <Smartphone className="w-6 h-6" />}
                      {addon.icon === 'Code2' && <Code2 className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#1A1A1A] mb-1">{addon.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{addon.description}</p>
                      <p className={`text-sm font-bold ${color.text}`}>{addon.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            * {pricing.note}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// CUSTOM SOLUTION SECTION
// ============================================================================
function CustomSolutionSection({ data }: { data: typeof TAFETA_SERVICE_DATA }) {
  const { customSolution, color } = data

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Target: <Target className="w-6 h-6" />,
      Palette: <Palette className="w-6 h-6" />,
      Boxes: <Boxes className="w-6 h-6" />,
      Globe: <Globe className="w-6 h-6" />
    }
    return icons[iconName] || <CheckCircle2 className="w-6 h-6" />
  }

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#E8D09E]/20 border border-[#E8D09E]/40 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-[#8C6F3D]" />
              <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Custom Solution</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight">
              {customSolution.title}
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              {customSolution.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {customSolution.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-3 p-4 bg-[#FAF8F5] rounded-2xl border border-gray-100 hover:border-[#E8D09E]/40 transition-all"
                >
                  <div className={`w-10 h-10 ${color.bg} ${color.text} rounded-xl flex items-center justify-center shrink-0`}>
                    {getIcon(feature.icon)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-1 text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#8C6F3D] transition-all duration-300 shadow-lg"
            >
              <span>Request Custom Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">Proses Custom</span>
                </div>

                <h3 className="text-2xl font-bold mb-6">Bagaimana Kami Bekerja</h3>

                <div className="space-y-4">
                  {customSolution.process.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#E8D09E] rounded-full flex items-center justify-center font-bold shrink-0">
                          {idx + 1}
                        </div>
                        {idx < customSolution.process.length - 1 && (
                          <div className="w-0.5 h-8 bg-[#E8D09E]/20 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pt-2">
                        <p className="text-sm text-gray-300 leading-relaxed">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-2xl font-extrabold text-[#E8D09E] mb-1">3-5</p>
                      <p className="text-xs text-gray-400">Hari Kerja untuk Proposal</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-2xl font-extrabold text-[#E8D09E] mb-1">24/7</p>
                      <p className="text-xs text-gray-400">Dukungan Dedicated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FAQ SECTION
// ============================================================================
function FAQDetailSection({ data }: { data: typeof TAFETA_SERVICE_DATA }) {
  const { faq, color } = data
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <p className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>FAQ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {faq.title}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faq.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#FAF8F5] rounded-2xl border border-gray-100 overflow-hidden hover:border-[#E8D09E]/40 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <h3 className="font-bold text-[#1A1A1A] text-base md:text-lg pr-4">
                  {item.q}
                </h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  openIndex === idx
                    ? 'bg-[#C5A059] text-white rotate-180'
                    : 'bg-white text-[#8C6F3D]'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 pt-0">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// RELATED SERVICES SECTION - Disesuaikan dengan kondisi riil
// ============================================================================
function RelatedServicesSection() {
  const relatedServices = [
    {
      id: 'hologram',
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Hologram dengan QR',
      subtitle: 'Premium Security',
      desc: 'Kombinasi hologram premium dengan kode QR untuk lapisan keamanan ganda.',
      gradient: 'from-[#8C6F3D]/10 to-[#E8D09E]/5',
      iconBg: 'bg-[#E8D09E]/30',
      iconColor: 'text-[#8C6F3D]',
      accentBorder: 'border-[#E8D09E]/40',
      status: 'active'
    },
    {
      id: 'nfc',
      icon: <Nfc className="w-6 h-6" />,
      title: 'Sticker ber-NFC',
      subtitle: 'Smart Technology',
      desc: 'Verifikasi instan via tap & go dengan teknologi NFC. Saat ini masih dalam tahap penelitian.',
      gradient: 'from-gray-100 to-gray-50',
      iconBg: 'bg-gray-200',
      iconColor: 'text-gray-500',
      accentBorder: 'border-dashed border-gray-300',
      status: 'coming-soon'
    },
    {
      id: 'printing',
      icon: <Printer className="w-6 h-6" />,
      title: 'Printing QR pada Kemasan',
      subtitle: 'Direct Integration',
      desc: 'Pencetakan QR langsung pada kemasan dengan integrasi driver printer. Dalam tahap perencanaan.',
      gradient: 'from-gray-100 to-gray-50',
      iconBg: 'bg-gray-200',
      iconColor: 'text-gray-500',
      accentBorder: 'border-dashed border-gray-300',
      status: 'coming-soon'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <p className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Related Services</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Layanan{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              Lainnya
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Solusi marking lain yang tersedia atau sedang kami kembangkan untuk memenuhi berbagai kebutuhan brand Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((service, idx) => {
            const isComingSoon = service.status === 'coming-soon'

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-300 p-6 ${
                  isComingSoon
                    ? `bg-white border ${service.accentBorder} opacity-80`
                    : 'bg-white border border-gray-100 hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl'
                }`}
              >
                {isComingSoon && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <Compass className="w-3 h-3" />
                    <span>Coming Soon</span>
                  </div>
                )}

                {isComingSoon ? (
                  <div className="block">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${service.iconBg} ${service.iconColor} rounded-xl flex items-center justify-center shrink-0`}>
                        {service.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                          {service.subtitle}
                        </span>
                        <h3 className="text-lg font-bold text-gray-400">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed mb-4 italic">
                      {service.desc}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Akan segera tersedia</span>
                    </div>
                  </div>
                ) : (
                  <Link to={`/services/${service.id}`} className="block">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${service.iconBg} ${service.iconColor} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#8C6F3D] uppercase tracking-widest mb-1 block">
                          {service.subtitle}
                        </span>
                        <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#8C6F3D] transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.desc}</p>

                    <div className="inline-flex items-center gap-2 text-[#8C6F3D] font-bold text-sm group-hover:gap-3 transition-all">
                      <span>Pelajari Lebih Lanjut</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
// MAIN PAGE
// ============================================================================
import React from 'react'
import AboutJoinUsCTA from '@/components/AboutJoinUs'

export default function ServiceTafetaDetailPage() {
  const data = TAFETA_SERVICE_DATA

  return (
    <>
      <HeroDetailSection data={data} />
      <OverviewSection data={data} />
      <FeaturesSection data={data} />
      <SpecificationsSection data={data} />
      <ImplementationSection data={data} />
      <UseCasesSection data={data} />
      <BenefitsSection data={data} />
      <GallerySection data={data} />
      <PricingSection data={data} />
      <CustomSolutionSection data={data} />
      <FAQDetailSection data={data} />
      <RelatedServicesSection />
    </>
  )
}