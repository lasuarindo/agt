import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ShieldCheck, CheckCircle2, ArrowRight, BadgeCheck, Award } from 'lucide-react'

export default function HeroSectionProposal2020() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 w-full text-center">
        {/* Pioneer Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-[#C5A059]/40 px-5 py-2.5 rounded-full shadow-sm mb-8"
        >
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">Since 2017</span>
          </div>
          <div className="w-px h-4 bg-[#C5A059]/30" />
          <p className="text-sm text-[#1A1A1A] font-semibold">
            The First Anti-Counterfeit <span className="text-[#8C6F3D]">in Indonesia</span>
          </p>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 mb-8"
        >
          <p className="text-[#8C6F3D] font-bold tracking-widest uppercase text-sm">
            Lindungi Merek Anda dengan AuthenticGuards®
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
            Sistem Anti-Pemalsuan
            {' '}<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
              5 Lapis Keamanan
            </span>
            {' '}<br className="hidden md:block" />
            untuk Brand Anda
          </h1>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Teknologi autentikasi yang membantu <strong className="text-[#1A1A1A]">produsen dan konsumen</strong> bekerja sama mengidentifikasi dan menghentikan aktivitas pemalsuan. Menggabungkan <strong className="text-[#1A1A1A]">algoritma AG 3 lapis</strong>, <strong className="text-[#1A1A1A]">enkripsi MD5</strong>, dan standar <strong className="text-[#1A1A1A]">ISO/IEC 27000:2016</strong> untuk proteksi supply chain yang tak tertandingi.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#8C6F3D] transition-all duration-300 shadow-lg shadow-[#1A1A1A]/10 hover:shadow-[#8C6F3D]/30 hover:-translate-y-0.5"
          >
            <span>Konsultasi Gratis</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200 text-[#1A1A1A] px-8 py-4 rounded-xl font-bold text-lg hover:border-[#C5A059]/40 transition-all duration-300 shadow-sm"
          >
            <span>Lihat Solusi Kami</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Inline Stats - Disesuaikan dengan proposal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600"
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-extrabold text-[#1A1A1A]">ISO/IEC 27000:2016</span>
          </span>
          <span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-extrabold text-[#1A1A1A]">100M+ Kode/Hari</span>
          </span>
          <span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-1.5">
            <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-extrabold text-[#1A1A1A]">ISO 18004:2015</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}
