import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  FileText, Shield, ShieldCheck, Lock, Users, Globe,
  Mail, Phone, MapPin, CheckCircle2, AlertCircle,
  ArrowRight, Clock, Server, UserCheck, RefreshCw,
  MessageCircle, ChevronRight, Sparkles, BookOpen,
  HelpCircle, Scale, CreditCard, Package, Code2,
  AlertTriangle, Building2, Handshake, XCircle,
  Gavel, FileCheck, BadgeCheck, Eye, BarChart3,
  Bell, LineChart, Truck, Factory, Boxes, Target,
  Layers, Fingerprint, Database, QrCode, Tag
} from 'lucide-react'

import { getHQOffice } from '@/data/offices'

// ============================================================================
// TERMS & CONDITIONS DATA - Terpusat untuk kemudahan maintenance & lokalisasi
// Property names dalam Bahasa Inggris untuk lokalisasi yang lebih mudah
// TODO: Pindahkan ke file terpisah (e.g., /data/terms-conditions.ts)
//       atau ambil dari CMS/backend untuk update dinamis
// ============================================================================
const TERMS_CONDITIONS_DATA = {
  meta: {
    effectiveDate: '22 Juni 2026',
    version: '2.0',
    jurisdiction: 'Indonesia',
    company: 'PT. Autentikasi Garda Teknologi',
    brandName: 'AuthenticGuards'
  },

  // ==========================================================================
  // TABLE OF CONTENTS
  // ==========================================================================
  tableOfContents: [
    { id: 'introduction', label: 'Pendahuluan', icon: 'BookOpen' },
    { id: 'definitions', label: 'Definisi', icon: 'FileText' },
    { id: 'services', label: 'Layanan Kami', icon: 'Package' },
    { id: 'accountRegistration', label: 'Pendaftaran Akun', icon: 'UserCheck' },
    { id: 'userObligations', label: 'Kewajiban Pengguna', icon: 'CheckCircle2' },
    { id: 'intellectualProperty', label: 'Hak Kekayaan Intelektual', icon: 'Shield' },
    { id: 'paymentPricing', label: 'Pembayaran & Harga', icon: 'CreditCard' },
    { id: 'liabilityLimitations', label: 'Batasan Tanggung Jawab', icon: 'AlertTriangle' },
    { id: 'indemnification', label: 'Indemnifikasi', icon: 'Handshake' },
    { id: 'serviceTermination', label: 'Penghentian Layanan', icon: 'XCircle' },
    { id: 'disputeResolution', label: 'Penyelesaian Sengketa', icon: 'Gavel' },
    { id: 'governingLaw', label: 'Hukum yang Berlaku', icon: 'Scale' },
    { id: 'changesToTerms', label: 'Perubahan Syarat', icon: 'RefreshCw' },
    { id: 'contactUs', label: 'Hubungi Kami', icon: 'MessageCircle' }
  ],

  // ==========================================================================
  // SECTION 1: INTRODUCTION
  // ==========================================================================
  introduction: {
    title: 'Pendahuluan',
    icon: 'BookOpen',
    paragraphs: [
      {
        type: 'text',
        content: 'Selamat datang di <strong>AuthenticGuards</strong>, sebuah platform layanan yang dioperasikan oleh <strong>PT. Autentikasi Garda Teknologi</strong> ("kami", "milik kami", atau "perusahaan"), sebuah perseroan terbatas yang didirikan berdasarkan hukum Republik Indonesia.'
      },
      {
        type: 'text',
        content: 'Syarat dan Ketentuan ini ("Syarat") merupakan perjanjian hukum yang mengikat antara Anda ("Pengguna", "Anda", atau "Klien") dengan PT. Autentikasi Garda Teknologi terkait penggunaan layanan autentikasi produk yang kami sediakan melalui website, aplikasi mobile, API, dan platform terkait (secara kolektif disebut "Layanan").'
      }
    ],
    callout: {
      type: 'important',
      title: 'PENTING: Baca dengan Seksama',
      content: 'Dengan mendaftar, mengakses, atau menggunakan Layanan kami, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini, serta <Link to="/privacy-policy">Kebijakan Privasi</Link> kami. Jika Anda tidak menyetujui Syarat ini, Anda tidak diperkenankan menggunakan Layanan kami.'
    },
    scope: {
      intro: 'Syarat ini berlaku untuk seluruh pengguna Layanan kami, termasuk namun tidak terbatas pada:',
      items: [
        'Brand owner dan produsen yang menggunakan layanan autentikasi produk',
        'Distributor dan retailer yang menggunakan sistem tracking',
        'Konsumen yang melakukan verifikasi produk',
        'Pengguna yang mendaftar akun AuthenticGuards',
        'Developer yang menggunakan API kami'
      ]
    }
  },

  // ==========================================================================
  // SECTION 2: DEFINITIONS
  // ==========================================================================
  definitions: {
    title: 'Definisi',
    icon: 'FileText',
    intro: 'Untuk keperluan Syarat dan Ketentuan ini, istilah-istilah berikut memiliki makna sebagaimana didefinisikan di bawah ini:',
    terms: [
      { term: 'Layanan', definition: 'Seluruh produk, fitur, dan fungsi yang disediakan oleh AuthenticGuards termasuk sticker hologram, garment label, sistem verifikasi, dashboard analytics, dan API.' },
      { term: 'Pengguna', definition: 'Setiap individu atau entitas hukum yang mendaftar dan/atau menggunakan Layanan kami, baik sebagai brand owner, distributor, maupun konsumen.' },
      { term: 'Produk', definition: 'Barang fisik yang dilabeli dengan teknologi autentikasi AuthenticGuards (QR code, scratch PIN, hologram).' },
      { term: 'Verifikasi', definition: 'Proses validasi keaslian produk melalui scan QR code dan input scratch PIN.' },
      { term: 'Klaim', definition: 'Proses pendaftaran kepemilikan produk oleh konsumen untuk mengaktifkan garansi dan manfaat.' },
      { term: 'Dashboard', definition: 'Antarmuka web-based untuk monitoring dan analytics yang disediakan untuk brand owner.' },
      { term: 'API', definition: 'Application Programming Interface yang memungkinkan integrasi sistem eksternal dengan Layanan kami.' },
      { term: 'Data Verifikasi', definition: 'Informasi yang tercatat saat verifikasi produk dilakukan, termasuk waktu, lokasi, dan status.' }
    ]
  },

  // ==========================================================================
  // SECTION 3: OUR SERVICES
  // ==========================================================================
  services: {
    title: 'Layanan Kami',
    icon: 'Package',
    intro: 'AuthenticGuards menyediakan berbagai layanan autentikasi dan perlindungan produk, termasuk namun tidak terbatas pada:',
    items: [
      { icon: 'ShieldCheck', title: 'Sticker Hologram', description: 'Label autentikasi dengan teknologi hologram premium, QR code unik, dan scratch PIN 6 digit.' },
      { icon: 'Package', title: 'Garment Label', description: 'Label tekstil khusus untuk industri fashion dengan integrasi teknologi autentikasi.' },
      { icon: 'Shield', title: 'Brand Protection', description: 'Sistem monitoring real-time untuk mendeteksi aktivitas pemalsuan dan anomali.' },
      { icon: 'Lock', title: 'Supply Chain Security', description: 'Tracking end-to-end dari pabrik hingga ke tangan konsumen.' },
      { icon: 'Code2', title: 'API Integration', description: 'RESTful API dan GraphQL untuk integrasi dengan sistem existing klien.' },
      { icon: 'Building2', title: 'Dashboard Analytics', description: 'Platform web-based untuk monitoring dan analisis data verifikasi.' }
    ],
    callout: {
      type: 'info',
      title: 'Cakupan Layanan',
      content: 'Kami berhak untuk memodifikasi, menangguhkan, atau menghentikan sebagian atau seluruh Layanan kapan saja, dengan atau tanpa pemberitahuan sebelumnya, untuk keperluan pemeliharaan, peningkatan, atau alasan lainnya. Kami akan berusaha memberikan pemberitahuan yang wajar apabila perubahan tersebut berdampak signifikan pada Layanan yang sedang Anda gunakan.'
    }
  },

  // ==========================================================================
  // SECTION 4: ACCOUNT REGISTRATION
  // ==========================================================================
  accountRegistration: {
    title: 'Pendaftaran Akun',
    icon: 'UserCheck',
    intro: 'Untuk mengakses fitur-fitur tertentu dari Layanan kami, Anda diminta untuk membuat akun. Dalam proses pendaftaran, Anda setuju untuk:',
    requirements: [
      'Memberikan informasi yang akurat, lengkap, dan terkini sesuai formulir pendaftaran',
      'Menjaga kerahasiaan password dan kredensial akun Anda',
      'Segera memberitahukan kami tentang setiap penggunaan tidak sah atas akun Anda',
      'Memastikan bahwa Anda berusia minimal 17 tahun atau telah mendapatkan persetujuan orang tua/wali',
      'Bertanggung jawab penuh atas seluruh aktivitas yang terjadi di bawah akun Anda'
    ],
    callout: {
      type: 'warning',
      title: 'Keamanan Akun',
      content: 'Anda bertanggung jawab penuh untuk menjaga kerahasiaan password dan semua aktivitas yang terjadi di bawah akun Anda. Kami tidak akan bertanggung jawab atas kerugian atau kerusakan yang timbul akibat kegagalan Anda mematuhi kewajiban keamanan ini. Segera hubungi kami jika Anda mencurigai adanya penggunaan tidak sah atas akun Anda.'
    },
    terminationConditions: {
      intro: 'Kami berhak untuk menolak pendaftaran, menangguhkan, atau menghentikan akun Anda apabila:',
      items: [
        'Informasi yang diberikan tidak akurat, menyesatkan, atau tidak lengkap',
        'Anda melanggar ketentuan dalam Syarat dan Ketentuan ini',
        'Aktivitas akun Anda terindikasi fraudulent atau melanggar hukum',
        'Anda tidak menggunakan Layanan selama periode yang berkepanjangan',
        'Diperlukan untuk memenuhi kewajiban hukum atau regulasi'
      ]
    }
  },

  // ==========================================================================
  // SECTION 5: USER OBLIGATIONS
  // ==========================================================================
  userObligations: {
    title: 'Kewajiban Pengguna',
    icon: 'CheckCircle2',
    intro: 'Dalam menggunakan Layanan kami, Anda setuju untuk tidak:',
    prohibitedActions: [
      'Menggunakan Layanan untuk tujuan ilegal atau tidak sah',
      'Melanggar hukum dan regulasi yang berlaku di yurisdiksi Anda',
      'Menyalin, memodifikasi, atau mendistribusikan teknologi autentikasi kami tanpa izin',
      'Mencoba untuk membobol, reverse-engineer, atau mengakses sistem kami secara tidak sah',
      'Mengunggah atau mentransmisikan virus, malware, atau kode berbahaya lainnya',
      'Menggunakan Layanan untuk mengirim spam atau komunikasi yang tidak diminta',
      'Menyebarkan informasi palsu atau menyesatkan tentang produk atau Layanan',
      'Melanggar hak kekayaan intelektual kami atau pihak ketiga',
      'Menggunakan Layanan untuk memalsukan atau memalsukan produk',
      'Memberikan data palsu saat melakukan verifikasi atau klaim produk'
    ],
    callout: {
      type: 'important',
      title: 'Pelanggaran Ketentuan',
      content: 'Setiap pelanggaran terhadap ketentuan di atas dapat mengakibatkan penangguhan atau penghentian akun Anda secara permanen, serta potensi tindakan hukum sesuai peraturan perundang-undangan yang berlaku. Kami juga berhak melaporkan aktivitas ilegal kepada pihak berwajib.'
    }
  },

  // ==========================================================================
  // SECTION 6: INTELLECTUAL PROPERTY
  // ==========================================================================
  intellectualProperty: {
    title: 'Hak Kekayaan Intelektual',
    icon: 'Shield',
    intro: 'Seluruh konten, teknologi, desain, logo, merek dagang, dan kekayaan intelektual lainnya yang terkait dengan Layanan AuthenticGuards merupakan milik eksklusif PT. Autentikasi Garda Teknologi atau pemberi lisensi kami, dan dilindungi oleh:',
    protections: [
      'Undang-Undang No. 28 Tahun 2014 tentang Hak Cipta',
      'Undang-Undang No. 20 Tahun 2016 tentang Merek dan Indikasi Geografis',
      'Undang-Undang No. 13 Tahun 2016 tentang Paten',
      'Peraturan perundang-undangan lainnya yang berlaku'
    ],
    standards: [
      { label: 'Teknologi Hologram', value: 'Paten & Rahasia Dagang' },
      { label: 'Sistem Verifikasi', value: 'Hak Cipta' },
      { label: 'Brand AuthenticGuards', value: 'Merek Dagang Terdaftar' },
      { label: 'Source Code', value: 'Hak Cipta & Rahasia Dagang' }
    ],
    restrictions: {
      intro: 'Kecuali secara tegas diizinkan dalam Syarat ini atau dengan persetujuan tertulis dari kami, Anda tidak diperkenankan untuk:',
      items: [
        'Menggunakan, menyalin, atau mendistribusikan materi berhak cipta kami',
        'Menggunakan merek dagang kami tanpa izin tertulis',
        'Melakukan reverse engineering, dekompilasi, atau membongkar teknologi kami',
        'Membuat karya turunan berdasarkan Layanan kami',
        'Menghapus atau mengubah informasi hak cipta atau kepemilikan lainnya'
      ]
    }
  },

  // ==========================================================================
  // SECTION 7: PAYMENT & PRICING
  // ==========================================================================
  paymentPricing: {
    title: 'Pembayaran & Harga',
    icon: 'CreditCard',
    intro: 'Untuk layanan berbayar, ketentuan pembayaran berlaku sebagai berikut:',
    table: [
      { aspect: 'Harga', terms: 'Disepakati dalam kontrak terpisah berdasarkan volume, jenis layanan, dan durasi kerjasama' },
      { aspect: 'Mata Uang', terms: 'Seluruh pembayaran dalam Rupiah (IDR) kecuali disepakati lain secara tertulis' },
      { aspect: 'Metode Pembayaran', terms: 'Transfer bank, virtual account, atau metode lain yang disetujui' },
      { aspect: 'Jatuh Tempo', terms: 'Sesuai ketentuan dalam kontrak atau invoice yang diterbitkan' },
      { aspect: 'Pajak', terms: 'Harga belum termasuk PPN dan pajak lainnya yang berlaku' },
      { aspect: 'Keterlambatan', terms: 'Keterlambatan pembayaran dikenakan denda 0.5% per bulan dari outstanding amount' }
    ],
    callout: {
      type: 'info',
      title: 'Konsultasi Harga',
      content: 'Untuk informasi harga dan penawaran khusus, silakan hubungi tim sales kami melalui <a href="mailto:sales@authenticguards.com" class="font-semibold hover:underline">sales@authenticguards.com</a> atau kunjungi halaman <Link to="/contact">Kontak</Link>.'
    },
    priceChange: 'Kami berhak untuk mengubah harga layanan dengan pemberitahuan tertulis minimal 30 hari sebelum perubahan berlaku. Untuk kontrak jangka panjang, perubahan harga akan mengikuti ketentuan yang disepakati dalam kontrak.'
  },

  // ==========================================================================
  // SECTION 8: LIABILITY LIMITATIONS
  // ==========================================================================
  liabilityLimitations: {
    title: 'Batasan Tanggung Jawab',
    icon: 'AlertTriangle',
    intro: 'SEJAUH DIIZINKAN OLEH HUKUM YANG BERLAKU, AUTHENTICGUARDS DAN AFILIASINYA TIDAK BERTANGGUNG JAWAB ATAS:',
    exclusions: [
      'Kerugian tidak langsung, insidental, khusus, atau konsekuensial',
      'Kehilangan keuntungan, pendapatan, atau bisnis',
      'Kehilangan data atau gangguan bisnis',
      'Kerusakan yang timbul dari penggunaan atau ketidakmampuan menggunakan Layanan',
      'Tindakan atau kelalaian pihak ketiga',
      'Force majeure (bencana alam, perang, kerusuhan, pandemi, dll)',
      'Kegagalan sistem yang di luar kendali wajar kami'
    ],
    callout: {
      type: 'warning',
      title: 'Batas Maksimum Tanggung Jawab',
      content: 'Dalam hal kami tetap dianggap bertanggung jawab berdasarkan hukum yang berlaku, total tanggung jawab kami kepada Anda untuk seluruh klaim yang timbul dari atau terkait dengan Syarat ini atau Layanan kami, tidak akan melebihi jumlah yang telah Anda bayarkan kepada kami dalam 12 (dua belas) bulan terakhir sebelum timbulnya klaim tersebut.'
    },
    exceptions: {
      intro: 'Ketentuan di atas tidak membatasi tanggung jawab kami untuk:',
      items: [
        'Kecelakaan pribadi atau kematian yang disebabkan oleh kelalaian kami',
        'Penipuan atau pernyataan palsu yang disengaja',
        'Pelanggaran hak kekayaan intelektual yang disengaja',
        'Kewajiban yang tidak dapat dikecualikan berdasarkan hukum yang berlaku'
      ]
    }
  },

  // ==========================================================================
  // SECTION 9: INDEMNIFICATION
  // ==========================================================================
  indemnification: {
    title: 'Indemnifikasi',
    icon: 'Handshake',
    intro: 'Anda setuju untuk mengindemnifikasi, membela, dan membebaskan PT. Autentikasi Garda Teknologi, afiliasi, direktur, pejabat, karyawan, dan agen kami dari dan terhadap setiap dan seluruh klaim, tuntutan, kewajiban, kerugian, liabilitas, biaya, dan pengeluaran (termasuk biaya hukum yang wajar) yang timbul dari atau terkait dengan:',
    items: [
      'Penggunaan Layanan oleh Anda',
      'Pelanggaran Syarat dan Ketentuan ini oleh Anda',
      'Pelanggaran hak pihak ketiga oleh Anda',
      'Informasi palsu atau tidak akurat yang Anda berikan',
      'Kelalaian atau misconduct Anda',
      'Produk Anda yang dilabeli dengan teknologi kami (untuk brand owner)'
    ],
    callout: {
      type: 'info',
      title: 'Hak untuk Mengambil Alih Pertahanan',
      content: 'Kami berhak, atas biaya kami sendiri, untuk mengambil alih pertahanan eksklusif dan kontrol atas setiap masalah yang dikenakan indemnifikasi oleh Anda, dan dalam hal tersebut, Anda setuju untuk bekerja sama dengan kami dalam mengejar setiap pembelaan yang tersedia.'
    }
  },

  // ==========================================================================
  // SECTION 10: SERVICE TERMINATION
  // ==========================================================================
  serviceTermination: {
    title: 'Penghentian Layanan',
    icon: 'XCircle',
    intro: 'Perjanjian ini akan tetap berlaku hingga dihentikan oleh Anda atau kami sesuai ketentuan berikut:',
    byUser: {
      title: 'Penghentian oleh Anda',
      icon: 'UserCheck',
      items: [
        'Dapat menutup akun kapan saja melalui pengaturan akun',
        'Untuk layanan berbayar, ikuti prosedur dalam kontrak',
        'Pemberitahuan tertulis 30 hari untuk kontrak enterprise'
      ]
    },
    byCompany: {
      title: 'Penghentian oleh Kami',
      icon: 'Building2',
      items: [
        'Pelanggaran material terhadap Syarat ini',
        'Aktivitas ilegal atau fraudulent',
        'Tidak aktif selama 12+ bulan (untuk akun gratis)',
        'Kewajiban hukum atau regulasi'
      ]
    },
    callout: {
      type: 'warning',
      title: 'Efek Penghentian',
      content: 'Setelah penghentian, hak Anda untuk menggunakan Layanan akan segera berakhir. Ketentuan yang secara wajar dimaksudkan untuk bertahan setelah penghentian akan tetap berlaku, termasuk namun tidak terbatas pada: ketentuan kepemilikan, batasan tanggung jawab, indemnifikasi, dan ketentuan sengketa.'
    }
  },

  // ==========================================================================
  // SECTION 11: DISPUTE RESOLUTION
  // ==========================================================================
  disputeResolution: {
    title: 'Penyelesaian Sengketa',
    icon: 'Gavel',
    intro: 'Setiap sengketa yang timbul dari atau terkait dengan Syarat dan Ketentuan ini akan diselesaikan melalui tahapan berikut:',
    steps: [
      { step: '1', title: 'Negosiasi Langsung', description: 'Para pihak akan berusaha menyelesaikan sengketa secara musyawarah dalam waktu 30 hari sejak pemberitahuan sengketa.', color: 'emerald' },
      { step: '2', title: 'Mediasi', description: 'Jika negosiasi gagal, sengketa akan dimediasi oleh mediator independen yang disepakati bersama.', color: 'blue' },
      { step: '3', title: 'Arbitrase atau Pengadilan', description: 'Jika mediasi tidak berhasil, sengketa akan diselesaikan melalui arbitrase BANI atau Pengadilan Negeri Bandung.', color: 'purple' }
    ],
    callout: {
      type: 'info',
      title: 'Bahasa Penyelesaian Sengketa',
      content: 'Seluruh proses penyelesaian sengketa akan dilakukan dalam Bahasa Indonesia, kecuali disepakati lain secara tertulis oleh para pihak.'
    }
  },

  // ==========================================================================
  // SECTION 12: GOVERNING LAW
  // ==========================================================================
  governingLaw: {
    title: 'Hukum yang Berlaku',
    icon: 'Scale',
    paragraphs: [
      'Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia, tanpa memperhatikan prinsip konflik hukum.',
      'Para pihak sepakat untuk memilih domisili hukum yang tetap di Kantor Kepaniteraan Pengadilan Negeri Bandung, untuk setiap sengketa yang tidak dapat diselesaikan melalui arbitrase.'
    ],
    regulations: [
      'UU No. 27/2022 - Pelindungan Data Pribadi',
      'UU No. 11/2008 - ITE (sebagaimana diubah)',
      'UU No. 8/1999 - Perlindungan Konsumen',
      'UU No. 20/2016 - Merek dan Indikasi Geografis',
      'UU No. 13/2016 - Paten',
      'UU No. 28/2014 - Hak Cipta',
      'UU No. 40/2007 - Perseroan Terbatas',
      'KUHPerdata - Hukum Perjanjian'
    ]
  },

  // ==========================================================================
  // SECTION 13: CHANGES TO TERMS
  // ==========================================================================
  changesToTerms: {
    title: 'Perubahan Syarat',
    icon: 'RefreshCw',
    intro: 'Kami berhak untuk merevisi Syarat dan Ketentuan ini dari waktu ke waktu sesuai kebutuhan bisnis, perubahan regulasi, atau alasan lainnya. Apabila terjadi perubahan material, kami akan:',
    procedures: [
      'Memberitahukan kepada Anda melalui email atau notifikasi dalam aplikasi minimal 30 hari sebelum perubahan berlaku',
      'Memperbarui tanggal "Terakhir Diperbarui" di bagian atas halaman ini',
      'Menyediakan ringkasan perubahan yang signifikan',
      'Meminta persetujuan ulang Anda jika diperlukan oleh hukum'
    ],
    callout: {
      type: 'info',
      title: 'Persetujuan Anda',
      content: 'Dengan terus menggunakan Layanan setelah perubahan berlaku, Anda dianggap telah menyetujui Syarat yang telah direvisi. Jika Anda tidak menyetujui perubahan tersebut, Anda harus menghentikan penggunaan Layanan.'
    },
    closing: 'Kami mendorong Anda untuk meninjau Syarat ini secara berkala untuk tetap terinformasi tentang ketentuan yang berlaku.'
  },

  // ==========================================================================
  // SECTION 14: CONTACT US
  // ==========================================================================
  contactUs: {
    title: 'Hubungi Kami',
    icon: 'MessageCircle',
    intro: 'Jika Anda memiliki pertanyaan, kekhawatiran, atau memerlukan klarifikasi terkait Syarat dan Ketentuan ini, silakan hubungi kami melalui:',
    teamTitle: 'Tim Legal & Compliance',
    contacts: [
      { type: 'email', label: 'Email (Respon < 2x24 jam)', value: getHQOffice().email, href: `mailto:${getHQOffice().email}` },
      { type: 'phone', label: 'Telepon', value: getHQOffice().phoneDisplay, href: getHQOffice().phoneLink },
      { type: 'address', label: 'Alamat Kantor', value: getHQOffice().address, href: null }
    ],
    subjectLine: 'Permintaan Legal'
  },

  // ==========================================================================
  // LAST UPDATED & CTA
  // ==========================================================================
  lastUpdated: {
    label: 'Dokumen Terakhir Diperbarui',
    date: '22 Juni 2026',
    version: 'Versi 2.0',
    company: 'PT. Autentikasi Garda Teknologi'
  },
  cta: {
    question: 'Masih ada pertanyaan tentang Syarat & Ketentuan?',
    buttonText: 'Hubungi Tim Kami',
    link: '/contact'
  }
}

// ============================================================================
// ICON MAPPING - Mapping string ke komponen Lucide
// ============================================================================
const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-4 h-4" />,
  FileText: <FileText className="w-4 h-4" />,
  Package: <Package className="w-4 h-4" />,
  UserCheck: <UserCheck className="w-4 h-4" />,
  CheckCircle2: <CheckCircle2 className="w-4 h-4" />,
  Shield: <Shield className="w-4 h-4" />,
  CreditCard: <CreditCard className="w-4 h-4" />,
  AlertTriangle: <AlertTriangle className="w-4 h-4" />,
  Handshake: <Handshake className="w-4 h-4" />,
  XCircle: <XCircle className="w-4 h-4" />,
  Gavel: <Gavel className="w-4 h-4" />,
  Scale: <Scale className="w-4 h-4" />,
  RefreshCw: <RefreshCw className="w-4 h-4" />,
  MessageCircle: <MessageCircle className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  Lock: <Lock className="w-4 h-4" />,
  Code2: <Code2 className="w-4 h-4" />,
  Building2: <Building2 className="w-4 h-4" />,
  Mail: <Mail className="w-4 h-4" />,
  Phone: <Phone className="w-4 h-4" />,
  MapPin: <MapPin className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  FileCheck: <FileCheck className="w-4 h-4" />,
  BadgeCheck: <BadgeCheck className="w-4 h-4" />,
  AlertCircle: <AlertCircle className="w-4 h-4" />,
  Eye: <Eye className="w-4 h-4" />,
  BarChart3: <BarChart3 className="w-4 h-4" />,
  Bell: <Bell className="w-4 h-4" />,
  Truck: <Truck className="w-4 h-4" />,
  Factory: <Factory className="w-4 h-4" />,
  Boxes: <Boxes className="w-4 h-4" />,
  Target: <Target className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  QrCode: <QrCode className="w-4 h-4" />,
  Tag: <Tag className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Users: <Users className="w-4 h-4" />
}

const getIcon = (iconName: string, size: 'sm' | 'md' | 'lg' = 'md') => {
  const sizeClass = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' }
  const icon = iconMap[iconName]
  if (!icon) return <HelpCircle className={sizeClass[size]} />
  return icon
}

// ============================================================================
// HERO TERMS & CONDITIONS
// ============================================================================
function HeroTerms() {
  const { meta } = TERMS_CONDITIONS_DATA

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
          <FileText className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Syarat & Ketentuan</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
        >
          Syarat & <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
            Ketentuan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
        >
          Syarat dan ketentuan ini mengatur penggunaan layanan {meta.company}. Dengan menggunakan layanan kami, Anda menyetujui seluruh ketentuan yang tertera di bawah ini.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">Berlaku Sejak: {meta.effectiveDate}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">Versi {meta.version}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">Hukum {meta.jurisdiction}</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// TABLE OF CONTENTS
// ============================================================================
function TableOfContents() {
  const { tableOfContents } = TERMS_CONDITIONS_DATA

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
// SECTION WRAPPER COMPONENT
// ============================================================================
function TermsSection({ id, title, icon, children }: {
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
// CALLOUT BOX COMPONENT
// ============================================================================
function CalloutBox({ type = 'info', title, children }: {
  type?: 'info' | 'warning' | 'success' | 'important'
  title?: string
  children: React.ReactNode
}) {
  const styles = {
    info: { bg: 'bg-blue-50', border: 'border-blue-200', icon: <AlertCircle className="w-5 h-5 text-blue-600" />, titleColor: 'text-blue-900', textColor: 'text-blue-800' },
    warning: { bg: 'bg-amber-50', border: 'border-amber-200', icon: <AlertTriangle className="w-5 h-5 text-amber-600" />, titleColor: 'text-amber-900', textColor: 'text-amber-800' },
    success: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />, titleColor: 'text-emerald-900', textColor: 'text-emerald-800' },
    important: { bg: 'bg-red-50', border: 'border-red-200', icon: <AlertCircle className="w-5 h-5 text-red-600" />, titleColor: 'text-red-900', textColor: 'text-red-800' }
  }
  const style = styles[type]

  return (
    <div className={`${style.bg} ${style.border} border rounded-2xl p-5 my-6`}>
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1">
          {title && <h4 className={`font-bold ${style.titleColor} mb-2`}>{title}</h4>}
          <div className={`text-sm ${style.textColor} leading-relaxed`}>{children}</div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// NUMBERED LIST COMPONENT
// ============================================================================
function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal list-inside space-y-2 ml-4 my-4">
      {items.map((item, idx) => (
        <li key={idx} className="text-gray-600 leading-relaxed">{item}</li>
      ))}
    </ol>
  )
}

// ============================================================================
// RICH TEXT RENDERER - Render content dengan HTML tags
// ============================================================================
function RichText({ content }: { content: string }) {
  const processContent = (text: string) => {
    return text.replace(
      /<Link to="([^"]+)">([^<]+)<\/Link>/g,
      '<a href="$1" class="text-[#8C6F3D] font-semibold hover:underline">$2</a>'
    )
  }
  return <span dangerouslySetInnerHTML={{ __html: processContent(content) }} />
}

// ============================================================================
// SECTION RENDERERS
// ============================================================================

// Section 1: Introduction
function IntroductionRenderer() {
  const data = TERMS_CONDITIONS_DATA.introduction
  return (
    <TermsSection id="introduction" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {data.paragraphs.map((para, idx) => (
          <p key={idx}><RichText content={para.content} /></p>
        ))}
      </div>
      <CalloutBox type={data.callout.type as any} title={data.callout.title}>
        <RichText content={data.callout.content} />
      </CalloutBox>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.scope.intro}</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {data.scope.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </TermsSection>
  )
}

// Section 2: Definitions
function DefinitionsRenderer() {
  const data = TERMS_CONDITIONS_DATA.definitions
  return (
    <TermsSection id="definitions" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        {data.terms.map((item, idx) => (
          <div key={idx} className="p-4 bg-[#FAF8F5] rounded-xl border border-gray-100">
            <h4 className="font-bold text-[#1A1A1A] mb-2">{item.term}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{item.definition}</p>
          </div>
        ))}
      </div>
    </TermsSection>
  )
}

// Section 3: Services
function ServicesRenderer() {
  const data = TERMS_CONDITIONS_DATA.services
  return (
    <TermsSection id="services" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {data.items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-[#E8D09E]/40 hover:shadow-sm transition-all">
            <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
              {iconMap[item.icon]}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <CalloutBox type={data.callout.type as any} title={data.callout.title}>
        <p>{data.callout.content}</p>
      </CalloutBox>
    </TermsSection>
  )
}

// Section 4: Account Registration
function AccountRegistrationRenderer() {
  const data = TERMS_CONDITIONS_DATA.accountRegistration
  return (
    <TermsSection id="accountRegistration" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <NumberedList items={data.requirements} />
      <CalloutBox type={data.callout.type as any} title={data.callout.title}>
        <p>{data.callout.content}</p>
      </CalloutBox>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.terminationConditions.intro}</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {data.terminationConditions.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </TermsSection>
  )
}

// Section 5: User Obligations
function UserObligationsRenderer() {
  const data = TERMS_CONDITIONS_DATA.userObligations
  return (
    <TermsSection id="userObligations" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="space-y-3 my-6">
        {data.prohibitedActions.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 p-3 bg-red-50/50 rounded-xl border border-red-100">
            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>
      <CalloutBox type={data.callout.type as any} title={data.callout.title}>
        <p>{data.callout.content}</p>
      </CalloutBox>
    </TermsSection>
  )
}

// Section 6: Intellectual Property
function IntellectualPropertyRenderer() {
  const data = TERMS_CONDITIONS_DATA.intellectualProperty
  return (
    <TermsSection id="intellectualProperty" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {data.protections.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-2xl p-6 md:p-8 text-white my-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <BadgeCheck className="w-6 h-6 text-[#E8D09E]" />
            <h3 className="text-xl font-bold">Perlindungan HKI Kami</h3>
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
        <p>{data.restrictions.intro}</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {data.restrictions.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </TermsSection>
  )
}

// Section 7: Payment & Pricing
function PaymentPricingRenderer() {
  const data = TERMS_CONDITIONS_DATA.paymentPricing
  return (
    <TermsSection id="paymentPricing" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-[#FAF8F5]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Aspek</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Ketentuan</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.table.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#FAF8F5] transition-colors">
                <td className="px-4 py-3 text-sm font-semibold text-[#1A1A1A]">{row.aspect}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{row.terms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CalloutBox type={data.callout.type as any} title={data.callout.title}>
        <RichText content={data.callout.content} />
      </CalloutBox>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.priceChange}</p>
      </div>
    </TermsSection>
  )
}

// Section 8: Liability Limitations
function LiabilityLimitationsRenderer() {
  const data = TERMS_CONDITIONS_DATA.liabilityLimitations
  return (
    <TermsSection id="liabilityLimitations" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="space-y-3 my-6">
        {data.exclusions.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 p-3 bg-amber-50/50 rounded-xl border border-amber-100">
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>
      <CalloutBox type={data.callout.type as any} title={data.callout.title}>
        <p>{data.callout.content}</p>
      </CalloutBox>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.exceptions.intro}</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {data.exceptions.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </TermsSection>
  )
}

// Section 9: Indemnification
function IndemnificationRenderer() {
  const data = TERMS_CONDITIONS_DATA.indemnification
  return (
    <TermsSection id="indemnification" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <NumberedList items={data.items} />
      <CalloutBox type={data.callout.type as any} title={data.callout.title}>
        <p>{data.callout.content}</p>
      </CalloutBox>
    </TermsSection>
  )
}

// Section 10: Service Termination
function ServiceTerminationRenderer() {
  const data = TERMS_CONDITIONS_DATA.serviceTermination
  return (
    <TermsSection id="serviceTermination" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="p-5 bg-white border border-gray-200 rounded-2xl">
          <h4 className="font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
            {iconMap[data.byUser.icon]}
            {data.byUser.title}
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {data.byUser.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5 bg-white border border-gray-200 rounded-2xl">
          <h4 className="font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
            {iconMap[data.byCompany.icon]}
            {data.byCompany.title}
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {data.byCompany.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CalloutBox type={data.callout.type as any} title={data.callout.title}>
        <p>{data.callout.content}</p>
      </CalloutBox>
    </TermsSection>
  )
}

// Section 11: Dispute Resolution
function DisputeResolutionRenderer() {
  const data = TERMS_CONDITIONS_DATA.disputeResolution
  return (
    <TermsSection id="disputeResolution" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="space-y-4 my-6">
        {data.steps.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 p-5 bg-[#FAF8F5] rounded-2xl border border-gray-100">
            <div className={`w-12 h-12 bg-${item.color}-100 text-${item.color}-600 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-lg`}>
              {item.step}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-[#1A1A1A] mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <CalloutBox type={data.callout.type as any} title={data.callout.title}>
        <p>{data.callout.content}</p>
      </CalloutBox>
    </TermsSection>
  )
}

// Section 12: Governing Law
function GoverningLawRenderer() {
  const data = TERMS_CONDITIONS_DATA.governingLaw
  return (
    <TermsSection id="governingLaw" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {data.paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
      <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-2xl p-6 md:p-8 text-white my-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <Scale className="w-6 h-6 text-[#E8D09E]" />
            <h3 className="text-xl font-bold">Regulasi yang Relevan</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.regulations.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 bg-white/5 rounded-xl border border-white/10">
                <FileCheck className="w-4 h-4 text-[#E8D09E] shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TermsSection>
  )
}

// Section 13: Changes to Terms
function ChangesToTermsRenderer() {
  const data = TERMS_CONDITIONS_DATA.changesToTerms
  return (
    <TermsSection id="changesToTerms" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <NumberedList items={data.procedures} />
      <CalloutBox type={data.callout.type as any} title={data.callout.title}>
        <p>{data.callout.content}</p>
      </CalloutBox>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.closing}</p>
      </div>
    </TermsSection>
  )
}

// Section 14: Contact Us
function ContactUsRenderer() {
  const data = TERMS_CONDITIONS_DATA.contactUs
  return (
    <TermsSection id="contactUs" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-2xl p-6 md:p-8 text-white my-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <Sparkles className="w-6 h-6 text-[#E8D09E]" />
            <h3 className="text-xl font-bold">{data.teamTitle}</h3>
          </div>
          <div className="space-y-3">
            {data.contacts.map((contact, idx) => (
              contact.href ? (
                <a key={idx} href={contact.href} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  {iconMap[contact.type]}
                  <div>
                    <p className="text-xs text-gray-400">{contact.label}</p>
                    <p className="text-sm font-bold text-white">{contact.value}</p>
                  </div>
                </a>
              ) : (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  {iconMap[contact.type]}
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
        <p>
          Untuk permintaan terkait legal atau compliance, silakan gunakan subjek email <strong className="text-[#1A1A1A]">"{data.subjectLine}"</strong> agar dapat diproses dengan cepat oleh tim kami.
        </p>
      </div>
    </TermsSection>
  )
}

// ============================================================================
// MAIN CONTENT
// ============================================================================
function TermsContent() {
  const { lastUpdated, cta } = TERMS_CONDITIONS_DATA

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="lg:col-span-9 space-y-16"
    >
      <IntroductionRenderer />
      <DefinitionsRenderer />
      <ServicesRenderer />
      <AccountRegistrationRenderer />
      <UserObligationsRenderer />
      <IntellectualPropertyRenderer />
      <PaymentPricingRenderer />
      <LiabilityLimitationsRenderer />
      <IndemnificationRenderer />
      <ServiceTerminationRenderer />
      <DisputeResolutionRenderer />
      <GoverningLawRenderer />
      <ChangesToTermsRenderer />
      <ContactUsRenderer />

      {/* LAST UPDATED */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#FAF8F5] border border-[#E8D09E]/30 rounded-2xl p-6 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Clock className="w-5 h-5 text-[#8C6F3D]" />
          <p className="text-sm font-bold text-[#1A1A1A]">{lastUpdated.label}</p>
        </div>
        <p className="text-lg font-extrabold text-[#1A1A1A] mb-1">{lastUpdated.date}</p>
        <p className="text-xs text-gray-500">{lastUpdated.version} • {lastUpdated.company}</p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-gray-500 mb-4">{cta.question}</p>
        <Link
          to={cta.link}
          className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#8C6F3D] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <span>{cta.buttonText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function TermsPage() {
  return (
    <>
      <HeroTerms />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <TableOfContents />
          <TermsContent />
        </div>
      </div>
    </>
  )
}