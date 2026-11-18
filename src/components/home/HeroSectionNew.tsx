import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ArrowRight, Award } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'

export default function HeroSectionNew() {
  const { t } = useTranslation('home')
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
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">{t('heroVariants.since')}</span>
          </div>
          <div className="w-px h-4 bg-[#C5A059]/30" />
          <p className="text-sm text-[#1A1A1A] font-semibold">
            {t('heroVariants.pioneerPrefix')} <span className="text-[#8C6F3D]">{t('heroVariants.pioneerRegion')}</span>
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
            {t('heroVariants.new.eyebrow')}
          </p>
          
          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.05] tracking-tight">
            Menghadirkan
            {' '} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
              Standar Baru
            </span> 
            {' '}
            <br className="hidden md:block" />
            dalam Autentikasi Produk
          </h1> */}
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1A1A1A] leading-[1.05] tracking-tight">
            {t('heroVariants.new.titlePre')}
            {' '} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
              {t('heroVariants.new.titleHighlight')}
            </span>
            {' '} <br className="hidden md:block" />
            {t('heroVariants.new.titlePost')}
          </h1>
          
          <p className="sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <Trans i18nKey="heroVariants.new.description" ns="home" components={{ strong: <strong className="text-[#1A1A1A]" /> }} />
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
            <span>{t('heroVariants.new.ctaPrimary')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md border border-gray-200 text-[#1A1A1A] px-8 py-4 rounded-xl font-bold text-lg hover:border-[#C5A059]/40 transition-all duration-300 shadow-sm"
          >
            <span>{t('heroVariants.new.ctaSecondary')}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Inline Stats - Minimal, tidak dalam card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600"
        >
          <span className="flex items-center gap-1.5">
            <span className="font-extrabold text-[#1A1A1A]">8+</span> {t('heroVariants.new.stat1Label')}
          </span>
          <span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-1.5">
            <span className="font-extrabold text-[#1A1A1A]">500+</span> {t('heroVariants.new.stat2Label')}
          </span>
          <span className="hidden sm:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-1.5">
            <span className="font-extrabold text-[#1A1A1A]">99.9%</span> {t('heroVariants.new.stat3Label')}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
