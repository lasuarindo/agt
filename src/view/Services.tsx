import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation('services')
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
// SERVICES OVERVIEW - Hanya 2 layanan aktif (Hologram & Tafeta)
// ============================================================================
function ServicesOverview() {
  const { t } = useTranslation('services')
  const services = [
    {
      id: 'hologram',
      icon: <Sparkles className="w-7 h-7" />,
      title: t('overview.hologramTitle'),
      subtitle: t('overview.hologramSubtitle'),
      desc: t('overview.hologramDesc'),
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
      title: t('overview.tafetaTitle'),
      subtitle: t('overview.tafetaSubtitle'),
      desc: t('overview.tafetaDesc'),
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
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('overview.eyebrow')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('overview.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('overview.titleHighlight')}</span> {t('overview.titlePost')}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('overview.subtitle')}
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
                    <span>{t('overview.detail')}</span>
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
                    {t('overview.suitableFor')}
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
      </div>
    </section>
  )
}

// ============================================================================
// DETAIL SECTION: Hologram dengan QR (Pewarnaan disesuaikan ke brand gold/brown)
// ============================================================================
function HologramDetail() {
  const { t } = useTranslation('services')
  const features = t('hologram.features', { returnObjects: true }) as { title: string; desc: string }[]
  const benefits = t('hologram.benefits', { returnObjects: true }) as string[]
  const featureIcons = [
    <Sparkles className="w-5 h-5" />,
    <QrCode className="w-5 h-5" />,
    <ShieldAlert className="w-5 h-5" />,
    <Database className="w-5 h-5" />
  ]

  return (
    <section id="hologram" className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden scroll-mt-20">
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
            <div className="inline-flex items-center gap-2 bg-[#E8D09E]/30 border border-[#E8D09E]/50 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-[#8C6F3D]" />
              <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('hologram.badge')}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight">
              {t('hologram.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('hologram.titleHighlight')}</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              {t('hologram.desc')}
            </p>

            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#E8D09E]/60 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 bg-[#E8D09E]/30 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                    {featureIcons[idx]}
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
            <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-[#C5A059] rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">{t('hologram.exampleVerification')}</span>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-[#C5A059] to-[#8C6F3D] rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{t('hologram.verifiedProduct')}</p>
                      <p className="text-white font-bold">{t('hologram.productName')}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-xl p-3">
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">{t('hologram.codeLabel')}</p>
                      <p className="text-sm font-mono font-bold text-[#E8D09E]">AG-7J1DG</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider">{t('hologram.statusLabel')}</p>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                        <p className="text-sm font-bold text-[#E8D09E]">{t('hologram.original')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E8D09E]/30 shadow-sm">
              <h4 className="font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#8C6F3D]" />
                {t('hologram.benefitsTitle')}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2 shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

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
                  <h4 className="font-bold mb-1">{t('hologram.ctaTitle')}</h4>
                  <p className="text-sm leading-relaxed">{t('hologram.ctaDesc')}</p>
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
  const { t } = useTranslation('services')
  const features = t('tafeta.features', { returnObjects: true }) as { title: string; desc: string }[]
  const featureIcons = [
    <Tag className="w-5 h-5" />,
    <QrCode className="w-5 h-5" />,
    <Layers className="w-5 h-5" />,
    <Target className="w-5 h-5" />
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
              <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('tafeta.badge')}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight">
              {t('tafeta.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('tafeta.titleHighlight')}</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              {t('tafeta.desc')}
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
                    {featureIcons[idx]}
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
                  <h4 className="font-bold mb-2">{t('tafeta.whyTitle')}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {t('tafeta.whyDesc')}
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
                      <p className="text-xs text-gray-500">{t('tafeta.specTitle')}</p>
                      <p className="font-bold text-[#1A1A1A]">{t('tafeta.specName')}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: t('tafeta.specMaterial'), value: t('tafeta.specMaterialValue') },
                      { label: t('tafeta.specPrinting'), value: t('tafeta.specPrintingValue') },
                      { label: t('tafeta.specSize'), value: t('tafeta.specSizeValue') },
                      { label: t('tafeta.specIntegration'), value: t('tafeta.specIntegrationValue') }
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
                    <p className="text-xs text-white/80 uppercase tracking-wider">{t('tafeta.customDesign')}</p>
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
                  <h4 className="font-bold mb-1">{t('tafeta.ctaTitle')}</h4>
                  <p className="text-sm leading-relaxed">{t('tafeta.ctaDesc')}</p>
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
// CUSTOMER FEATURES SECTION - Warna disesuaikan dengan brand color
// ============================================================================
function CustomerFeaturesSection() {
  const { t } = useTranslation('services')
  const features = t('customerFeatures.features', { returnObjects: true }) as { title: string; desc: string }[]
  const featureIcons = [
    <Users className="w-6 h-6" />,
    <Megaphone className="w-6 h-6" />,
    <Heart className="w-6 h-6" />,
    <MapPin className="w-6 h-6" />,
    <ShieldCheck className="w-6 h-6" />,
    <Bell className="w-6 h-6" />,
    <Lightbulb className="w-6 h-6" />,
    <TrendingUp className="w-6 h-6" />
  ]

  const colorMap = {
    primary: { bg: 'bg-[#E8D09E]', text: 'text-[#8C6F3D]', hover: 'hover:bg-[#E8D09E]/50' },
    secondary: { bg: 'bg-[#C5A059]', text: 'text-[#6b5530]', hover: 'hover:bg-[#C5A059]/30' },
    accent: { bg: 'bg-[#8C6F3D]', text: 'text-[#5a4a2a]', hover: 'hover:bg-[#8C6F3D]/30' },
    deep: { bg: 'bg-[#E8D09E]', text: 'text-[#8C6F3D]', hover: 'hover:bg-[#E8D09E]/60' }
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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-[#E8D09E]" />
            <span className="text-xs font-bold text-[#E8D09E] uppercase tracking-widest">{t('customerFeatures.eyebrow')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('customerFeatures.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E8D09E] to-[#C5A059]">{t('customerFeatures.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t('customerFeatures.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => {
            const colors = colorMap[(['primary','secondary','accent','deep'] as const)[idx % 4]]
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
                    {featureIcons[idx]}
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
              <h3 className="text-2xl font-bold text-white mb-2">{t('customerFeatures.roiTitle')}</h3>
              <p className="text-gray-300">{t('customerFeatures.roiDesc')}</p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-[#C5A059] text-[#1A1A1A] px-6 py-3 rounded-xl font-bold hover:bg-[#E8D09E] transition-all shrink-0"
            >
              <span>{t('customerFeatures.roiCta')}</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// PROCESS SECTION - Alur Implementasi (AG handle produksi & pengiriman)
// ============================================================================
function ProcessSection() {
  const { t } = useTranslation('services')
  const steps = t('process.steps', { returnObjects: true }) as { title: string; desc: string; duration: string; highlight?: boolean }[]
  const support = t('process.support', { returnObjects: true }) as { title: string; desc: string }[]
  const stepIcons = [
    <Handshake className="w-6 h-6" />,
    <Lightbulb className="w-6 h-6" />,
    <Sparkles className="w-6 h-6" />,
    <FileCheck className="w-6 h-6" />,
    <Boxes className="w-6 h-6" />,
    <Package className="w-6 h-6" />
  ]
  const supportIcons = [
    <Handshake className="w-5 h-5" />,
    <Users className="w-5 h-5" />,
    <Lightbulb className="w-5 h-5" />
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
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('process.eyebrow')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('process.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('process.titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="relative max-w-5xl mx-auto">
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
                  <div className={`absolute left-6 lg:left-1/2 lg:-translate-x-1/2 w-12 h-12 bg-white border-2 ${
                    step.highlight ? 'border-[#C5A059] scale-110' : 'border-[#E8D09E]/50'
                  } rounded-xl flex items-center justify-center ${
                    step.highlight ? 'text-[#8C6F3D]' : 'text-gray-400'
                  } shadow-md z-10`}>
                    {stepIcons[idx]}
                  </div>

                  <div className={`pl-20 lg:pl-0 lg:w-1/2 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className={`bg-white rounded-2xl p-6 border ${
                      step.highlight ? 'border-[#E8D09E]/50 shadow-lg' : 'border-gray-100 shadow-sm'
                    } hover:shadow-xl transition-shadow`}>
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs font-extrabold text-[#C5A059] bg-[#E8D09E]/20 px-2.5 py-1 rounded-md tracking-wider">
                          {t('process.stagePrefix')} {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                          {step.duration}
                        </span>
                        {step.highlight && (
                          <span className="text-[10px] font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {t('process.milestone')}
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

        {/* Support Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
              {t('process.supportTitle')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('process.supportHighlight')}</span>
            </h3>
            <p className="text-gray-500">{t('process.supportSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {support.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex gap-4 p-5 bg-[#FAF8F5] rounded-2xl border border-gray-100 hover:border-[#E8D09E]/40 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-[#E8D09E]/30 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {supportIcons[idx]}
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
                <p className="font-bold text-[#1A1A1A] text-sm">{t('process.totalTimeLabel')}</p>
                <p className="text-xs text-gray-600">{t('process.totalTimeValue')}</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8C6F3D] hover:text-[#C5A059] transition-colors shrink-0"
            >
              <span>{t('process.startConsult')}</span>
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
  const { t } = useTranslation('services')
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
// MAIN PAGE
// ============================================================================
export default function ServicesPage() {
  const location = useLocation()

  return (
    <>
      <HeroServices />
      <ServicesOverview />
      <HologramDetail />
      <TafetaLabelDetail />
      <CustomerFeaturesSection />
      <ProcessSection />
      <FAQSection />
    </>
  )
}