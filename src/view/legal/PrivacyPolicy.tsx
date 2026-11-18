import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  Shield, ShieldCheck, Lock, Eye, Database, Users, Globe,
  Mail, Phone, MapPin, FileText, CheckCircle2, AlertCircle,
  ArrowRight, Clock, Server, UserCheck, Cookie, Baby,
  RefreshCw, MessageCircle, ChevronRight, Sparkles, BookOpen,
  HelpCircle, X, Fingerprint, MapPin as MapPinIcon
} from 'lucide-react'
import { getHQOffice } from '@/data/offices' 

// ============================================================================
// PRIVACY POLICY DATA - Terpusat untuk kemudahan maintenance
// TODO: Pindahkan ke file terpisah (e.g., /data/privacy-policy.ts) 
//       atau ambil dari CMS/backend untuk update dinamis
// ============================================================================
const PRIVACY_POLICY_DATA = {
  meta: {
    lastUpdated: '22 Juni 2026',
    version: '2.0',
    company: 'PT. Autentikasi Garda Teknologi',
    compliance: 'ISO 27001 Compliant',
    region: 'Asia Pasifik',
    legalReference: 'UU PDP No. 27 Tahun 2022'
  },

  // ==========================================================================
  // TABLE OF CONTENTS
  // ==========================================================================
  tableOfContents: [
    { id: 'pendahuluan', label: 'Pendahuluan', icon: 'BookOpen' },
    { id: 'informasi-yang-dikumpulkan', label: 'Informasi yang Kami Kumpulkan', icon: 'Database' },
    { id: 'penggunaan-informasi', label: 'Bagaimana Kami Menggunakan Informasi', icon: 'Eye' },
    { id: 'berbagi-informasi', label: 'Berbagi Informasi dengan Pihak Ketiga', icon: 'Users' },
    { id: 'keamanan-data', label: 'Keamanan Data', icon: 'Lock' },
    { id: 'retensi-data', label: 'Retensi Data', icon: 'Server' },
    { id: 'hak-anda', label: 'Hak Anda', icon: 'UserCheck' },
    { id: 'cookies', label: 'Cookies & Teknologi Serupa', icon: 'Cookie' },
    { id: 'anak-di-bawah-umur', label: 'Anak di Bawah Umur', icon: 'Baby' },
    { id: 'perubahan-kebijakan', label: 'Perubahan Kebijakan', icon: 'RefreshCw' },
    { id: 'kontak-kami', label: 'Hubungi Kami', icon: 'MessageCircle' }
  ],

  // ==========================================================================
  // SECTION 1: PENDAHULUAN
  // ==========================================================================
  pendahuluan: {
    title: 'Pendahuluan',
    icon: 'BookOpen',
    paragraphs: [
      {
        type: 'text',
        content: 'Selamat datang di <strong>AuthenticGuards</strong>, sebuah layanan yang dioperasikan oleh <strong>PT. Autentikasi Garda Teknologi</strong> ("kami", "milik kami", atau "perusahaan"). Kami berkomitmen untuk melindungi privasi dan keamanan informasi pribadi Anda.'
      },
      {
        type: 'text',
        content: 'Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda ketika Anda menggunakan layanan autentikasi produk kami, termasuk tetapi tidak terbatas pada:'
      },
      {
        type: 'list',
        items: [
          'Website dan aplikasi mobile AuthenticGuards',
          'Layanan verifikasi produk melalui QR code dan scratch PIN',
          'Sistem klaim kepemilikan produk',
          'Dashboard analytics untuk brand partner',
          // 'API dan integrasi sistem'
        ]
      },
      {
        type: 'text',
        content: `Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini. Kebijakan ini berlaku untuk seluruh wilayah operasional kami di Asia Pasifik.`
      }
    ],
    callout: {
      type: 'info',
      title: 'Catatan Penting',
      content: 'Kebijakan ini merupakan bagian integral dari <Link to="/term-condition">Syarat & Ketentuan</Link> kami. Jika ada konflik antara kedua dokumen, Kebijakan Privasi ini yang akan berlaku untuk hal-hal yang berkaitan dengan privasi dan data pribadi.'
    }
  },

  // ==========================================================================
  // SECTION 2: INFORMASI YANG DIKUMPULKAN
  // ==========================================================================
  informasiYangDikumpulkan: {
    title: 'Informasi yang Kami Kumpulkan',
    icon: 'Database',
    intro: 'Kami mengumpulkan berbagai jenis informasi untuk menyediakan dan meningkatkan layanan kami. Informasi ini dikategorikan sebagai berikut:',
    categories: [
      {
        title: 'A. Informasi Pribadi',
        icon: 'Users',
        items: [
          { icon: 'Users', title: 'Data Identitas', desc: 'Nama lengkap, username, alamat email, nomor telepon, tanggal lahir' },
          { icon: 'MapPin', title: 'Data Alamat', desc: 'Alamat rumah/kantor untuk pengiriman dan verifikasi' },
          { icon: 'FileText', title: 'Data Perusahaan', desc: 'Nama perusahaan, jabatan, dan informasi bisnis untuk klien B2B' },
          { icon: 'Lock', title: 'Data Autentikasi', desc: 'Password (terenkripsi), PIN verifikasi, dan data keamanan akun' }
        ]
      },
      {
        title: 'B. Informasi Teknis',
        icon: 'Globe',
        items: [
          { icon: 'Globe', title: 'Data Perangkat', desc: 'Tipe perangkat, sistem operasi, browser, dan identifier unik' },
          { icon: 'MapPin', title: 'Data Lokasi (GPS)', desc: 'Koordinat geografis saat verifikasi produk (dengan izin)' },
          { icon: 'Server', title: 'Data Log', desc: 'IP address, waktu akses, halaman yang dikunjungi, dan aktivitas' },
          { icon: 'Cookie', title: 'Cookies', desc: 'Data cookies dan teknologi pelacakan serupa (lihat bagian Cookies)' }
        ]
      },
      {
        title: 'C. Data Verifikasi Produk',
        icon: 'Shield',
        items: [
          { icon: 'ShieldCheck', title: 'Kode Produk', desc: 'Kode unik produk yang diverifikasi (QR code, scratch PIN)' },
          { icon: 'Clock', title: 'Waktu Verifikasi', desc: 'Timestamp kapan produk diverifikasi' },
          { icon: 'MapPin', title: 'Lokasi Verifikasi', desc: 'Lokasi geografis saat verifikasi dilakukan' },
          { icon: 'CheckCircle2', title: 'Status Verifikasi', desc: 'Hasil verifikasi (original, sudah diklaim, dll)' }
        ]
      }
    ],
    callout: {
      type: 'warning',
      title: 'Data yang TIDAK Kami Kumpulkan',
      content: 'Kami <strong>tidak</strong> mengumpulkan informasi sensitif seperti data kartu kredit, informasi kesehatan, data biometrik, atau informasi lain yang diatur secara khusus oleh undang-undang perlindungan data.'
    }
  },

  // ==========================================================================
  // SECTION 3: PENGGUNAAN INFORMASI
  // ==========================================================================
  penggunaanInformasi: {
    title: 'Bagaimana Kami Menggunakan Informasi',
    icon: 'Eye',
    intro: 'Kami menggunakan informasi yang dikumpulkan untuk tujuan-tujuan berikut:',
    purposes: [
      { icon: 'ShieldCheck', title: 'Verifikasi Produk', desc: 'Memverifikasi keaslian produk dan mencegah pemalsuan' },
      { icon: 'Users', title: 'Manajemen Akun', desc: 'Membuat, mengelola, dan mengamankan akun pengguna' },
      { icon: 'MessageCircle', title: 'Komunikasi', desc: 'Mengirim notifikasi, update, dan respon terhadap pertanyaan' },
      { icon: 'Database', title: 'Analisis Data', desc: 'Menganalisis pola verifikasi untuk meningkatkan layanan' },
      { icon: 'Lock', title: 'Keamanan', desc: 'Mendeteksi dan mencegah aktivitas penipuan atau penyalahgunaan' },
      { icon: 'Globe', title: 'Kepatuhan Hukum', desc: 'Memenuhi kewajiban regulasi dan hukum yang berlaku' }
    ],
    callout: {
      type: 'success',
      title: 'Komitmen Kami',
      content: 'Kami <strong>tidak</strong> akan menggunakan informasi pribadi Anda untuk tujuan yang tidak berkaitan dengan layanan kami tanpa persetujuan eksplisit dari Anda.'
    }
  },

  // ==========================================================================
  // SECTION 4: BERBAGI INFORMASI
  // ==========================================================================
  berbagiInformasi: {
    title: 'Berbagi Informasi dengan Pihak Ketiga',
    icon: 'Users',
    intro: 'Kami hanya berbagi informasi pribadi Anda dalam situasi terbatas berikut:',
    scenarios: [
      { icon: 'ShieldCheck', title: 'Brand Partner', desc: 'Informasi klaim produk (nama, email) dibagikan kepada brand pemilik produk yang Anda klaim untuk aktivasi garansi dan dukungan purna jual.' },
      { icon: 'Server', title: 'Penyedia Layanan', desc: 'Pihak ketiga yang membantu operasional kami (cloud hosting, payment gateway, email service) dengan perjanjian kerahasiaan yang ketat.' },
      { icon: 'FileText', title: 'Kewajiban Hukum', desc: 'Jika diwajibkan oleh hukum, peraturan, atau perintah pengadilan yang sah.' },
      { icon: 'Lock', title: 'Perlindungan Hak', desc: 'Untuk melindungi hak, properti, atau keamanan AuthenticGuards, pengguna kami, atau publik.' }
    ],
    callout: {
      type: 'warning',
      title: 'Penting untuk Diketahui',
      content: 'Kami <strong>tidak</strong> menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga untuk tujuan pemasaran.'
    }
  },

  // ==========================================================================
  // SECTION 5: KEAMANAN DATA
  // ==========================================================================
  keamananData: {
    title: 'Keamanan Data',
    icon: 'Lock',
    intro: 'Keamanan data Anda adalah prioritas utama kami. Kami menerapkan langkah-langkah keamanan berlapis untuk melindungi informasi pribadi Anda:',
    standards: [
      { label: 'Enkripsi Data', value: 'AES-256 bit' },
      { label: 'Protokol Transfer', value: 'TLS 1.3' },
      { label: 'Sertifikasi', value: 'ISO 27001:2022' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Backup', value: 'Multi-region' },
      { label: 'Audit', value: 'Independen berkala' }
    ],
    additionalMeasures: [
      'Password di-hash dengan algoritma bcrypt',
      'Two-Factor Authentication (2FA) opsional',
      'Monitoring 24/7 untuk aktivitas mencurigakan',
      'Pembatasan akses data berbasis peran (RBAC)',
      'Penetration testing berkala oleh pihak ketiga',
      'Pelatihan keamanan rutin untuk seluruh tim'
    ],
    callout: {
      type: 'info',
      title: 'Tanggung Jawab Bersama',
      content: 'Meskipun kami menerapkan langkah-langkah keamanan terbaik, tidak ada sistem yang 100% aman. Kami mendorong Anda untuk:',
      list: [
        'Menggunakan password yang kuat dan unik',
        'Mengaktifkan Two-Factor Authentication',
        'Tidak membagikan kredensial akun Anda',
        'Segera melaporkan aktivitas mencurigakan'
      ]
    }
  },

  // ==========================================================================
  // SECTION 6: RETENSI DATA
  // ==========================================================================
  retensiData: {
    title: 'Retensi Data',
    icon: 'Server',
    intro: 'Kami menyimpan informasi pribadi Anda selama diperlukan untuk memenuhi tujuan pengumpulan, kecuali jika periode retensi yang lebih panjang diperlukan atau diizinkan oleh hukum.',
    table: [
      { type: 'Data Akun Aktif', period: 'Selama akun aktif', basis: 'Kontrak' },
      { type: 'Data Verifikasi Produk', period: '5 tahun', basis: 'Regulasi & Audit' },
      { type: 'Data Klaim Garansi', period: 'Masa garansi + 2 tahun', basis: 'Kontrak' },
      { type: 'Data Log Sistem', period: '1 tahun', basis: 'Keamanan' },
      { type: 'Data Akun Terhapus', period: '30 hari (soft delete)', basis: 'Recovery' },
      { type: 'Data Keuangan', period: '7 tahun', basis: 'Pajak & Regulasi' }
    ],
    closing: 'Setelah periode retensi berakhir, data akan dihapus secara permanen atau dianonimkan sehingga tidak dapat dikaitkan kembali dengan Anda.'
  },

  // ==========================================================================
  // SECTION 7: HAK ANDA
  // ==========================================================================
  hakAnda: {
    title: 'Hak Anda',
    icon: 'UserCheck',
    intro: `Sesuai dengan <strong>Undang-Undang Pelindungan Data Pribadi (UU PDP) No. 27 Tahun 2022</strong> dan regulasi terkait, Anda memiliki hak-hak berikut:`,
    rights: [
      { icon: 'Eye', title: 'Hak Akses', desc: 'Memperoleh salinan data pribadi yang kami simpan tentang Anda' },
      { icon: 'RefreshCw', title: 'Hak Koreksi', desc: 'Memperbarui atau mengoreksi data yang tidak akurat atau tidak lengkap' },
      { icon: 'FileText', title: 'Hak Portabilitas', desc: 'Menerima data Anda dalam format yang dapat dibaca mesin' },
      { icon: 'AlertCircle', title: 'Hak Penghapusan', desc: 'Meminta penghapusan data pribadi Anda (right to be forgotten)' },
      { icon: 'Lock', title: 'Hak Pembatasan', desc: 'Meminta pembatasan pemrosesan data dalam situasi tertentu' },
      { icon: 'X', title: 'Hak Penolakan', desc: 'Menolak pemrosesan data untuk tujuan tertentu (misal: pemasaran)' },
      { icon: 'Users', title: 'Hak Menarik Persetujuan', desc: 'Menarik persetujuan yang telah diberikan kapan saja' },
      { icon: 'MessageCircle', title: 'Hak Mengajukan Keluhan', desc: 'Mengajukan keluhan ke otoritas perlindungan data yang berwenang' }
    ],
    callout: {
      type: 'info',
      title: 'Cara Menggunakan Hak Anda',
      content: 'Untuk menggunakan hak-hak di atas, silakan hubungi kami melalui:',
      contacts: [
        { type: 'email', value: getHQOffice().email, href: `mailto:${getHQOffice().email}` },
        { type: 'phone', value: getHQOffice().phoneDisplay, href: getHQOffice().phoneLink }
      ],
      responseTime: 'Kami akan merespon permintaan Anda dalam waktu <strong>maksimal 30 hari kerja</strong>.'
    }
  },

  // ==========================================================================
  // SECTION 8: COOKIES
  // ==========================================================================
  cookies: {
    title: 'Cookies & Teknologi Serupa',
    icon: 'Cookie',
    intro: 'Kami menggunakan cookies dan teknologi serupa untuk meningkatkan pengalaman Anda, menganalisis penggunaan layanan, dan menyediakan fitur tertentu.',
    types: [
      { type: 'Cookies Esensial', desc: 'Diperlukan untuk fungsi dasar website (login, keamanan, session). Tidak dapat dinonaktifkan.', required: true },
      { type: 'Cookies Fungsional', desc: 'Mengingat preferensi Anda (bahasa, region) untuk pengalaman yang dipersonalisasi.', required: false },
      { type: 'Cookies Analitik', desc: 'Membantu kami memahami bagaimana pengunjung berinteraksi dengan website kami.', required: false },
      { type: 'Cookies Performa', desc: 'Memantau performa website dan mengidentifikasi area yang perlu ditingkatkan.', required: false }
    ],
    closing: 'Anda dapat mengelola preferensi cookies melalui pengaturan browser Anda atau melalui panel pengaturan cookies di website kami. Namun, menonaktifkan cookies esensial dapat memengaruhi fungsionalitas website.'
  },

  // ==========================================================================
  // SECTION 9: ANAK DI BAWAH UMUR
  // ==========================================================================
  anakDiBawahUmur: {
    title: 'Anak di Bawah Umur',
    icon: 'Baby',
    paragraphs: [
      {
        type: 'text',
        content: 'Layanan kami ditujukan untuk pengguna berusia <strong>17 tahun ke atas</strong> atau usia dewasa menurut hukum yang berlaku di yurisdiksi masing-masing.'
      },
      {
        type: 'text',
        content: 'Kami <strong>tidak dengan sengaja</strong> mengumpulkan informasi pribadi dari anak di bawah usia tersebut. Jika Anda mengetahui atau mencurigai bahwa anak di bawah umur telah memberikan informasi pribadi kepada kami, silakan hubungi kami segera melalui informasi kontak di bawah.'
      },
      {
        type: 'text',
        content: 'Jika kami mengetahui bahwa kami telah mengumpulkan data pribadi dari anak di bawah umur tanpa verifikasi persetujuan orang tua, kami akan mengambil langkah-langkah untuk menghapus informasi tersebut secepatnya.'
      }
    ],
    callout: {
      type: 'warning',
      title: 'Tanggung Jawab Orang Tua',
      content: 'Orang tua atau wali disarankan untuk mengawasi aktivitas online anak-anak mereka dan membantu menegakkan kebijakan ini dengan mencegah anak di bawah umur untuk menggunakan layanan kami tanpa izin.'
    }
  },

  // ==========================================================================
  // SECTION 10: PERUBAHAN KEBIJAKAN
  // ==========================================================================
  perubahanKebijakan: {
    title: 'Perubahan Kebijakan',
    icon: 'RefreshCw',
    paragraphs: [
      {
        type: 'text',
        content: 'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau untuk alasan operasional, hukum, atau regulasi lainnya.'
      },
      {
        type: 'text',
        content: 'Ketika kami melakukan perubahan material, kami akan:'
      },
      {
        type: 'list',
        items: [
          'Memperbarui tanggal "Terakhir Diperbarui" di bagian atas halaman ini',
          'Memberitahu Anda melalui email atau notifikasi dalam aplikasi',
          'Menyediakan ringkasan perubahan yang signifikan',
          'Meminta persetujuan ulang jika diperlukan oleh hukum'
        ]
      },
      {
        type: 'text',
        content: 'Kami mendorong Anda untuk meninjau Kebijakan Privasi ini secara berkala untuk tetap terinformasi tentang bagaimana kami melindungi informasi Anda.'
      }
    ]
  },

  // ==========================================================================
  // SECTION 11: KONTAK KAMI
  // ==========================================================================
  kontakKami: {
    title: 'Hubungi Kami',
    icon: 'MessageCircle',
    intro: 'Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini atau praktik privasi kami, jangan ragu untuk menghubungi kami melalui:',
    contacts: [
      { icon: 'Mail', label: 'Email (Respon < 24 jam)', value: getHQOffice().email, href: `mailto:${getHQOffice().email}` },
      { icon: 'Phone', label: 'Telepon', value: getHQOffice().phoneDisplay, href: getHQOffice().phoneLink },
      { icon: 'MapPin', label: 'Alamat Kantor', value: getHQOffice().address, href: null }
    ],
    closing: 'Untuk permintaan terkait hak privasi (akses, koreksi, penghapusan data), silakan gunakan subjek email <strong>"Permintaan Hak Privasi"</strong> agar dapat diproses dengan cepat oleh tim kami.'
  }
}

// ============================================================================
// ICON MAPPING - Mapping string ke komponen Lucide
// ============================================================================
const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  UserCheck: <UserCheck className="w-5 h-5" />,
  Cookie: <Cookie className="w-5 h-5" />,
  Baby: <Baby className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
  MessageCircle: <MessageCircle className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  AlertCircle: <AlertCircle className="w-5 h-5" />,
  X: <X className="w-5 h-5" />,
  Mail: <Mail className="w-5 h-5" />,
  Phone: <Phone className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5" />
}

const getIcon = (iconName: string, size: 'sm' | 'md' | 'lg' = 'md') => {
  const sizeClass = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }
  const icon = iconMap[iconName]
  if (!icon) return <HelpCircle className={sizeClass[size]} />
  // Clone dengan size yang berbeda
  return icon
}

// ============================================================================
// HERO PRIVACY POLICY
// ============================================================================
function HeroPrivacyPolicy() {
  const { meta } = PRIVACY_POLICY_DATA

  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
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
          <Lock className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Kebijakan Privasi</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
        >
          Kebijakan <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
            Privasi
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
        >
          Kami menghargai privasi Anda. Kebijakan ini menjelaskan bagaimana {meta.company} mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">Terakhir Diperbarui: {meta.lastUpdated}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">Versi {meta.version}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold">{meta.compliance}</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// TABLE OF CONTENTS - Rendered dari data
// ============================================================================
function TableOfContents() {
  const { tableOfContents } = PRIVACY_POLICY_DATA

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-3"
    >
      <div className="sticky top-28 bg-white border border-[#E8D09E]/30 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-[#8C6F3D]" />
          <h3 className="font-bold text-[#1A1A1A]">Daftar Isi</h3>
        </div>
        <nav className="space-y-1">
          {tableOfContents.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-[#8C6F3D] hover:bg-[#FAF8F5] rounded-lg transition-all group"
            >
              <span className="text-[#8C6F3D]/60 group-hover:text-[#8C6F3D] transition-colors">
                {iconMap[section.icon]}
              </span>
              <span className="flex-1">{section.label}</span>
              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>
      </div>
    </motion.aside>
  )
}

// ============================================================================
// CALLTOUT BOX - Reusable component
// ============================================================================
function CalloutBox({ type = 'info', title, children }: {
  type?: 'info' | 'warning' | 'success'
  title?: string
  children: React.ReactNode
}) {
  const styles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: <AlertCircle className="w-5 h-5 text-blue-600" />,
      titleColor: 'text-blue-900',
      textColor: 'text-blue-800'
    },
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      icon: <AlertCircle className="w-5 h-5 text-amber-600" />,
      titleColor: 'text-amber-900',
      textColor: 'text-amber-800'
    },
    success: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      titleColor: 'text-emerald-900',
      textColor: 'text-emerald-800'
    }
  }

  const style = styles[type]

  return (
    <div className={`${style.bg} ${style.border} border rounded-2xl p-5 my-6`}>
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1">
          {title && (
            <h4 className={`font-bold ${style.titleColor} mb-2`}>{title}</h4>
          )}
          <div className={`text-sm ${style.textColor} leading-relaxed`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// DATA LIST - Reusable component
// ============================================================================
function DataList({ items }: { items: { icon: string; title: string; desc: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-3 p-4 bg-[#FAF8F5] rounded-xl border border-gray-100">
          <div className="w-8 h-8 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-lg flex items-center justify-center shrink-0">
            {iconMap[item.icon]}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{item.title}</h4>
            <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ============================================================================
// POLICY SECTION WRAPPER - Reusable
// ============================================================================
function PolicySection({ id, title, icon, children }: {
  id: string
  title: string
  icon: string
  children: React.ReactNode
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="scroll-mt-28"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
          {iconMap[icon]}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight">
          {title}
        </h2>
      </div>
      <div className="prose prose-gray max-w-none">
        {children}
      </div>
    </motion.section>
  )
}

// ============================================================================
// RICH TEXT RENDERER - Render content dengan HTML tags
// ============================================================================
function RichText({ content }: { content: string }) {
  // Handle <Link> tags khusus
  const processContent = (text: string) => {
    return text.replace(
      /<Link to="([^"]+)">([^<]+)<\/Link>/g,
      '<a href="$1" class="text-[#8C6F3D] font-semibold hover:underline">$2</a>'
    )
  }

  return (
    <span dangerouslySetInnerHTML={{ __html: processContent(content) }} />
  )
}

// ============================================================================
// SECTION RENDERERS - Render setiap section berdasarkan data
// ============================================================================

// Section 1: Pendahuluan
function PendahuluanRenderer() {
  const data = PRIVACY_POLICY_DATA.pendahuluan
  return (
    <PolicySection id="pendahuluan" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {data.paragraphs.map((para, idx) => {
          if (para.type === 'list' && para.items) {  // ✅ Tambah type guard
            return (
              <ul key={idx} className="list-disc list-inside space-y-2 ml-4">
                {para.items.map((item, iIdx) => (
                  <li key={iIdx}>{item}</li>
                ))}
              </ul>
            )
          }
          return <p key={idx}><RichText content={para.content || ''} /></p>  // ✅ Default value
        })}
      </div>
      {data.callout && (
        <CalloutBox type={data.callout.type as any} title={data.callout.title}>
          <RichText content={data.callout.content} />
        </CalloutBox>
      )}
    </PolicySection>
  )
}

// Section 2: Informasi yang Dikumpulkan
function InformasiDikumpulkanRenderer() {
  const data = PRIVACY_POLICY_DATA.informasiYangDikumpulkan
  return (
    <PolicySection id="informasi-yang-dikumpulkan" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>

      {data.categories.map((category, catIdx) => (
        <div key={catIdx}>
          <h3 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-4 flex items-center gap-2">
            {iconMap[category.icon]}
            {category.title}
          </h3>
          <DataList items={category.items} />
        </div>
      ))}

      {data.callout && (
        <CalloutBox type={data.callout.type as any} title={data.callout.title}>
          <RichText content={data.callout.content} />
        </CalloutBox>
      )}
    </PolicySection>
  )
}

// Section 3: Penggunaan Informasi
function PenggunaanInformasiRenderer() {
  const data = PRIVACY_POLICY_DATA.penggunaanInformasi
  return (
    <PolicySection id="penggunaan-informasi" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {data.purposes.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#E8D09E]/40 hover:shadow-sm transition-all">
            <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
              {iconMap[item.icon]}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {data.callout && (
        <CalloutBox type={data.callout.type as any} title={data.callout.title}>
          <RichText content={data.callout.content} />
        </CalloutBox>
      )}
    </PolicySection>
  )
}

// Section 4: Berbagi Informasi
function BerbagiInformasiRenderer() {
  const data = PRIVACY_POLICY_DATA.berbagiInformasi
  return (
    <PolicySection id="berbagi-informasi" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>

      <div className="space-y-4 my-6">
        {data.scenarios.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 p-5 bg-[#FAF8F5] rounded-2xl border border-gray-100">
            <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
              {iconMap[item.icon]}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {data.callout && (
        <CalloutBox type={data.callout.type as any} title={data.callout.title}>
          <RichText content={data.callout.content} />
        </CalloutBox>
      )}
    </PolicySection>
  )
}

// Section 5: Keamanan Data
function KeamananDataRenderer() {
  const data = PRIVACY_POLICY_DATA.keamananData
  return (
    <PolicySection id="keamanan-data" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>

      <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-2xl p-6 md:p-8 text-white my-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <ShieldCheck className="w-6 h-6 text-[#E8D09E]" />
            <h3 className="text-xl font-bold">Standar Keamanan Kami</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.standards.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-sm text-gray-300">{item.label}</span>
                <span className="text-sm font-bold text-[#E8D09E]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>Selain itu, kami juga menerapkan:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {data.additionalMeasures.map((measure, idx) => (
            <li key={idx}>{measure}</li>
          ))}
        </ul>
      </div>

      {data.callout && (
        <CalloutBox type={data.callout.type as any} title={data.callout.title}>
          <RichText content={data.callout.content} />
          {data.callout.list && (
            <ul className="list-disc list-inside mt-2 space-y-1">
              {data.callout.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </CalloutBox>
      )}
    </PolicySection>
  )
}

// Section 6: Retensi Data
function RetensiDataRenderer() {
  const data = PRIVACY_POLICY_DATA.retensiData
  return (
    <PolicySection id="retensi-data" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-[#FAF8F5]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Jenis Data</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Periode Retensi</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Dasar</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.table.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#FAF8F5] transition-colors">
                <td className="px-4 py-3 text-sm font-semibold text-[#1A1A1A]">{row.type}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{row.period}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{row.basis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.closing}</p>
      </div>
    </PolicySection>
  )
}

// Section 7: Hak Anda
function HakAndaRenderer() {
  const data = PRIVACY_POLICY_DATA.hakAnda
  return (
    <PolicySection id="hak-anda" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p><RichText content={data.intro} /></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {data.rights.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#E8D09E]/40 hover:shadow-sm transition-all">
            <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
              {iconMap[item.icon]}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {data.callout && (
        <CalloutBox type={data.callout.type as any} title={data.callout.title}>
          <RichText content={data.callout.content} />
          {data.callout.contacts && (
            <ul className="list-none mt-3 space-y-2">
              {data.callout.contacts.map((contact, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {contact.type === 'email' && <Mail className="w-4 h-4 text-[#8C6F3D]" />}
                  {contact.type === 'phone' && <Phone className="w-4 h-4 text-[#8C6F3D]" />}
                  <a href={contact.href} className="text-[#8C6F3D] font-semibold hover:underline">
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {data.callout.responseTime && (
            <p className="mt-3"><RichText content={data.callout.responseTime} /></p>
          )}
        </CalloutBox>
      )}
    </PolicySection>
  )
}

// Section 8: Cookies
function CookiesRenderer() {
  const data = PRIVACY_POLICY_DATA.cookies
  return (
    <PolicySection id="cookies" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>

      <h3 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-4">Jenis Cookies yang Kami Gunakan:</h3>

      <div className="space-y-4 my-6">
        {data.types.map((cookie, idx) => (
          <div key={idx} className="flex items-start gap-4 p-5 bg-[#FAF8F5] rounded-2xl border border-gray-100">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              cookie.required 
                ? 'bg-emerald-100 text-emerald-600' 
                : 'bg-[#E8D09E]/20 text-[#8C6F3D]'
            }`}>
              <Cookie className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-[#1A1A1A]">{cookie.type}</h4>
                {cookie.required && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded uppercase">
                    Wajib
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{cookie.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.closing}</p>
      </div>
    </PolicySection>
  )
}

// Section 9: Anak di Bawah Umur
function AnakDiBawahUmurRenderer() {
  const data = PRIVACY_POLICY_DATA.anakDiBawahUmur
  return (
    <PolicySection id="anak-di-bawah-umur" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {data.paragraphs.map((para, idx) => (
          <p key={idx}><RichText content={para.content} /></p>
        ))}
      </div>
      {data.callout && (
        <CalloutBox type={data.callout.type as any} title={data.callout.title}>
          <RichText content={data.callout.content} />
        </CalloutBox>
      )}
    </PolicySection>
  )
}

// Section 10: Perubahan Kebijakan
function PerubahanKebijakanRenderer() {
  const data = PRIVACY_POLICY_DATA.perubahanKebijakan
  return (
    <PolicySection id="perubahan-kebijakan" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {data.paragraphs.map((para, idx) => {
        if (para.type === 'list' && para.items) {  // ✅ Tambah type guard
          return (
            <ul key={idx} className="list-disc list-inside space-y-2 ml-4">
              {para.items.map((item, iIdx) => (
                <li key={iIdx}>{item}</li>
              ))}
            </ul>
          )
        }
        return <p key={idx}><RichText content={para.content || ''} /></p>  // ✅ Default value
      })}
      </div>
    </PolicySection>
  )
}

// Section 11: Kontak Kami
function KontakKamiRenderer() {
  const data = PRIVACY_POLICY_DATA.kontakKami
  return (
    <PolicySection id="kontak-kami" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>

      <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-2xl p-6 md:p-8 text-white my-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="w-6 h-6 text-[#E8D09E]" />
            <h3 className="text-xl font-bold">Tim Perlindungan Data</h3>
          </div>
          <div className="space-y-3">
            {data.contacts.map((contact, idx) => (
              contact.href ? (
                <a key={idx} href={contact.href} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-[#E8D09E] shrink-0">{iconMap[contact.icon]}</div>
                  <div>
                    <p className="text-xs text-gray-400">{contact.label}</p>
                    <p className="text-sm font-bold text-white">{contact.value}</p>
                  </div>
                </a>
              ) : (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-[#E8D09E] shrink-0">{iconMap[contact.icon]}</div>
                  <div>
                    <p className="text-xs text-gray-400">{contact.label}</p>
                    <p className="text-sm font-bold text-white">{contact.value}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>

      <div className="text-gray-600 leading-relaxed space-y-4">
        <p><RichText content={data.closing} /></p>
      </div>
    </PolicySection>
  )
}

// ============================================================================
// MAIN CONTENT - Compose semua section
// ============================================================================
function PrivacyPolicyContent() {
  const { meta } = PRIVACY_POLICY_DATA

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="lg:col-span-9 space-y-16"
    >
      <PendahuluanRenderer />
      <InformasiDikumpulkanRenderer />
      <PenggunaanInformasiRenderer />
      <BerbagiInformasiRenderer />
      <KeamananDataRenderer />
      <RetensiDataRenderer />
      <HakAndaRenderer />
      <CookiesRenderer />
      <AnakDiBawahUmurRenderer />
      <PerubahanKebijakanRenderer />
      <KontakKamiRenderer />

      {/* LAST UPDATED - dari data */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#FAF8F5] border border-[#E8D09E]/30 rounded-2xl p-6 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Clock className="w-5 h-5 text-[#8C6F3D]" />
          <p className="text-sm font-bold text-[#1A1A1A]">Dokumen Terakhir Diperbarui</p>
        </div>
        <p className="text-lg font-extrabold text-[#1A1A1A] mb-1">{meta.lastUpdated}</p>
        <p className="text-xs text-gray-500">Versi {meta.version} • {meta.company}</p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-gray-500 mb-4">Masih ada pertanyaan tentang privasi Anda?</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#8C6F3D] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <span>Hubungi Tim Kami</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroPrivacyPolicy />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <TableOfContents />
          <PrivacyPolicyContent />
        </div>
      </div>
    </>
  )
}