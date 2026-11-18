import { useState } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation('technology')
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
          <Cpu className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('hero.eyebrow')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
        >
          {t('hero.titleLine1')} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
            {t('hero.titleHighlight')}
          </span>
          <br className="hidden md:block" />
          {t('hero.titleLine2')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
        >
          {t('hero.desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">{t('hero.stat1')}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">{t('hero.stat2')}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">{t('hero.stat3')}</span>
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
  const { t } = useTranslation('technology')
  const layerIcons = [
    <Server className="w-6 h-6" />,
    <Hash className="w-6 h-6" />,
    <Lock className="w-6 h-6" />,
    <AlertTriangle className="w-6 h-6" />,
    <ShieldAlert className="w-6 h-6" />
  ]
  const layerStyles = [
    { gradient: 'from-[#8C6F3D]/10 to-[#C5A059]/5', iconBg: 'bg-[#E8D09E]/40', iconColor: 'text-[#8C6F3D]', accentBorder: 'border-[#E8D09E]/40' },
    { gradient: 'from-[#C5A059]/15 to-[#E8D09E]/5', iconBg: 'bg-[#C5A059]/20', iconColor: 'text-[#6b5530]', accentBorder: 'border-[#C5A059]/30' },
    { gradient: 'from-[#6b5530]/10 to-[#8C6F3D]/5', iconBg: 'bg-[#8C6F3D]/20', iconColor: 'text-[#5a4a2a]', accentBorder: 'border-[#8C6F3D]/30' },
    { gradient: 'from-[#5a4a2a]/10 to-[#6b5530]/5', iconBg: 'bg-[#6b5530]/20', iconColor: 'text-[#5a4a2a]', accentBorder: 'border-[#6b5530]/30' },
    { gradient: 'from-[#E8D09E]/30 to-[#FAF8F5]', iconBg: 'bg-[#E8D09E]/50', iconColor: 'text-[#8C6F3D]', accentBorder: 'border-[#E8D09E]/60' }
  ]
  const layers = (t('core.layers', { returnObjects: true }) as { title: string; subtitle: string; desc: string; specs: { label: string; value: string }[] }[])
    .map((layer, idx) => ({ ...layer, ...layerStyles[idx], icon: layerIcons[idx], num: String(idx + 1).padStart(2, '0') }))

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
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('core.eyebrow')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('core.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('core.titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('core.subtitle')}
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
              <div className={`absolute inset-0 bg-linear-to-br ${layer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 ${layer.iconBg} ${layer.iconColor} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {layer.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-extrabold text-[#8C6F3D] bg-[#E8D09E]/20 px-2.5 py-1 rounded-md tracking-wider">
                          {t('core.layerPrefix')} {layer.num}
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
                      {t('core.specTitle')}
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
  note?: string
}

// ============================================================================
// MARKING DEVELOPMENT SECTION
// ============================================================================
function MarkingDevelopmentSection() {
  const { t } = useTranslation('technology')
  const markingOptions: MarkingOption[] = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t('marking.options.0.title'),
      desc: t('marking.options.0.desc'),
      status: 'active',
      gradient: 'from-[#8C6F3D]/10 to-[#C5A059]/5',
      iconBg: 'bg-[#E8D09E]/40',
      iconColor: 'text-[#8C6F3D]',
      accentBorder: 'border-[#E8D09E]/40'
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: t('marking.options.1.title'),
      desc: t('marking.options.1.desc'),
      status: 'active',
      gradient: 'from-[#C5A059]/15 to-[#E8D09E]/5',
      iconBg: 'bg-[#C5A059]/20',
      iconColor: 'text-[#6b5530]',
      accentBorder: 'border-[#C5A059]/30'
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
            <Package className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('marking.eyebrow')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('marking.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('marking.titleHighlight')}</span> {t('marking.titlePost')}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('marking.subtitle')}
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
                {isComingSoon && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <Compass className="w-3 h-3" />
                    <span>{t('marking.comingSoon')}</span>
                  </div>
                )}

                {!isComingSoon && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#E8D09E]/20 text-[#8C6F3D] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{t('marking.available')}</span>
                  </div>
                )}

                <div className={`absolute inset-0 bg-linear-to-br ${isComingSoon ? 'from-gray-100 to-gray-50' : option.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

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
            * {t('marking.notePrefix')}{' '}
            <Link to="/contact" className="text-[#8C6F3D] font-semibold hover:text-[#C5A059] transition-colors">
              {t('marking.noteContact')}
            </Link>{' '}
            {t('marking.noteSuffix')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// TECHNOLOGY STACK
// ============================================================================
function TechnologyStackSection() {
  const { t } = useTranslation('technology')
  const techIcons = [
    <Database className="w-6 h-6" />,
    <Lock className="w-6 h-6" />,
    <QrCode className="w-6 h-6" />,
    <BarChart3 className="w-6 h-6" />
  ]
  const techStyles = [
    { gradient: 'from-[#8C6F3D]/10 to-[#C5A059]/5', iconBg: 'bg-[#E8D09E]/40', iconColor: 'text-[#8C6F3D]', accentBorder: 'border-[#E8D09E]/40', size: 'large' },
    { gradient: 'from-[#C5A059]/15 to-[#E8D09E]/5', iconBg: 'bg-[#C5A059]/20', iconColor: 'text-[#6b5530]', accentBorder: 'border-[#C5A059]/30', size: 'small' },
    { gradient: 'from-[#6b5530]/10 to-[#8C6F3D]/5', iconBg: 'bg-[#8C6F3D]/20', iconColor: 'text-[#5a4a2a]', accentBorder: 'border-[#8C6F3D]/30', size: 'small' },
    { gradient: 'from-[#E8D09E]/30 to-[#FAF8F5]', iconBg: 'bg-[#E8D09E]/50', iconColor: 'text-[#8C6F3D]', accentBorder: 'border-[#E8D09E]/60', size: 'large' }
  ]
  const technologies = (t('stack.technologies', { returnObjects: true }) as { title: string; subtitle?: string; desc: string; features?: string[]; stats?: { value: string; label: string }[] }[])
    .map((tech, idx) => ({ ...tech, ...techStyles[idx], icon: techIcons[idx] }))

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
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('stack.eyebrow')}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('stack.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('stack.titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('stack.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {technologies.map((tech, idx) => {
            const isLarge = tech.size === 'large'

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative bg-white rounded-3xl border ${tech.accentBorder} hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isLarge ? 'md:col-span-2 p-8 md:p-10' : 'p-6 md:p-8'
                }`}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

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
                        <span>{t('stack.core')}</span>
                      </div>
                    )}
                  </div>

                  <p className={`text-gray-600 leading-relaxed mb-6 ${isLarge ? 'text-base' : 'text-sm'}`}>
                    {tech.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {(tech.features || []).map((feature, fIdx) => (
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
// HOW IT WORKS - Verification Flow
// ============================================================================
function VerificationFlowSection() {
  const { t } = useTranslation('technology')
  const stepIcons = [
    <ScanLine className="w-6 h-6" />,
    <Server className="w-6 h-6" />,
    <AlertTriangle className="w-6 h-6" />,
    <CheckCircle2 className="w-6 h-6" />
  ]
  const steps = (t('verification.steps', { returnObjects: true }) as { title: string; desc: string; detail: string; duration: string }[])
    .map((step, idx) => ({ ...step, icon: stepIcons[idx], num: String(idx + 1).padStart(2, '0') }))

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
            <Zap className="w-4 h-4 text-[#E8D09E]" />
            <span className="text-xs font-bold text-[#E8D09E] uppercase tracking-widest">{t('verification.eyebrow')}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('verification.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E8D09E] to-[#C5A059]">{t('verification.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t('verification.subtitle')}
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
              <p className="text-xs text-gray-400 uppercase tracking-wider">{t('verification.totalLabel')}</p>
              <p className="text-2xl font-extrabold text-white">{t('verification.totalValue')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// SECURITY & COMPLIANCE SECTION
// ============================================================================
function SecurityComplianceSection() {
  const { t } = useTranslation('technology')
  const certIcons = [
    <BadgeCheck className="w-6 h-6" />,
    <QrCode className="w-6 h-6" />
  ]
  const certStyles = [
    { bg: 'bg-[#E8D09E]/40', text: 'text-[#8C6F3D]' },
    { bg: 'bg-[#C5A059]/20', text: 'text-[#6b5530]' }
  ]
  const certifications = (t('security.certs', { returnObjects: true }) as { title: string; desc: string }[])
    .map((cert, idx) => ({ ...cert, icon: certIcons[idx], ...certStyles[idx] }))

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
                <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('security.eyebrow')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-4">
                {t('security.titlePre')} <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
                  {t('security.titleHighlight')}
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('security.desc')}
              </p>
            </div>

            <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-6 text-white">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#E8D09E] rounded-xl flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">{t('security.protectionTitle')}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {t('security.protectionDesc')}
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
                <h3 className="font-bold text-[#1A1A1A] mb-1">{t('security.additionalTitle')}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t('security.additionalDesc')}
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
// PERFORMANCE METRICS SECTION
// ============================================================================
function PerformanceMetricsSection() {
  const { t } = useTranslation('technology')
  const metricIcons = [
    <Database className="w-6 h-6" />,
    <Zap className="w-6 h-6" />,
    <Hash className="w-6 h-6" />,
    <Layers className="w-6 h-6" />,
    <QrCode className="w-6 h-6" />,
    <ShieldCheck className="w-6 h-6" />
  ]
  const metricValues = [
    { value: '100', suffix: 'M' },
    { value: '15', suffix: 'x' },
    { value: '32', suffix: 'char' },
    { value: '5', suffix: '' },
    { value: '25', suffix: '%' },
    { value: 'ISO', suffix: '' }
  ]
  const metrics = (t('performance.metrics', { returnObjects: true }) as { label: string; desc: string }[])
    .map((m, idx) => ({ ...m, ...metricValues[idx], icon: metricIcons[idx] }))

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
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('performance.eyebrow')}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('performance.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('performance.titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('performance.subtitle')}
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
// INTEGRATION CAPABILITIES SECTION
// ============================================================================
function IntegrationSection() {
  const { t } = useTranslation('technology')
  const integrationIcons = [
    <Printer className="w-5 h-5" />,
    <Boxes className="w-5 h-5" />,
    <FileCheck className="w-5 h-5" />,
    <BarChart3 className="w-5 h-5" />,
    <Users className="w-5 h-5" />,
    <Activity className="w-5 h-5" />
  ]
  const integrations = (t('integration.integrations', { returnObjects: true }) as { title: string; desc: string }[])
    .map((it, idx) => ({ ...it, icon: integrationIcons[idx] }))

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
                <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('integration.eyebrow')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-4">
                {t('integration.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('integration.titleHighlight')}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('integration.desc')}
              </p>
            </div>

            <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">{t('integration.flow')}</span>
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
// FAQ SECTION
// ============================================================================
function FAQSection() {
  const { t } = useTranslation('technology')
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = t('faq.items', { returnObjects: true }) as { q: string; a: string }[]

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
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('faq.eyebrow')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('faq.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('faq.titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('faq.subtitle')}
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
// function TechnologyCTA() { ... }

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
    </>
  )
}