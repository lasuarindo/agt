import React, { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
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
import AboutJoinUsCTA from '@/components/AboutJoinUs'

type ServiceData = any

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroDetailSection({ data }: { data: ServiceData }) {
  const { t } = useTranslation('tafeta')
  const { hero } = data

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
            <span>{t('ui.consultFree')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#1A1A1A] px-6 py-3 rounded-xl font-bold hover:border-[#C5A059]/40 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t('ui.backToServices')}</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600"
        >
          {hero.stats.map((stat: any, idx: number) => (
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
function OverviewSection({ data }: { data: ServiceData }) {
  const { t } = useTranslation('tafeta')
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
              <p className={`text-xs font-bold ${color.text} uppercase tracking-widest mb-3`}>{t('ui.overviewLabel')}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-6">
                {overview.title}
              </h2>
            </div>

            <div className="space-y-4">
              {overview.description.map((paragraph: string, idx: number) => (
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
                {t('ui.highlightsTitle')}
              </h4>
              <div className="space-y-3">
                {overview.highlights.map((highlight: string, idx: number) => (
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
function FeaturesSection({ data }: { data: ServiceData }) {
  const { t } = useTranslation('tafeta')
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
          <p className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>{t('ui.featuresEyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('ui.featuresTitlePre')} <span className={`text-transparent bg-clip-text bg-linear-to-r ${color.gradient}`}>{t('ui.featuresTitleHighlight')}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('ui.featuresSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature: any, idx: number) => (
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
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{t('ui.detailTech')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {feature.details.map((detail: string, dIdx: number) => (
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
function SpecificationsSection({ data }: { data: ServiceData }) {
  const { t } = useTranslation('tafeta')
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
          <p className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>{t('ui.specsEyebrow')}</p>
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
          {specifications.items.map((spec: any, idx: number) => (
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
function ImplementationSection({ data }: { data: ServiceData }) {
  const { t } = useTranslation('tafeta')
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
          <p className="text-[#E8D09E] font-bold tracking-widest uppercase text-xs">{t('ui.implementationEyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {implementation.title}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {implementation.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {implementation.steps.map((step: any, idx: number) => (
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
function UseCasesSection({ data }: { data: ServiceData }) {
  const { t } = useTranslation('tafeta')
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
          <p className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>{t('ui.industriesEyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {useCases.title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {useCases.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.industries.map((industry: any, idx: number) => (
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
                <div className="flex flex-wrap gap-2">
                  {industry.examples.map((example: string, eIdx: number) => (
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
function BenefitsSection({ data }: { data: ServiceData }) {
  const { t } = useTranslation('tafeta')
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
          <p className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>{t('ui.benefitsEyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {benefits.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.items.map((benefit: any, idx: number) => (
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
// GALLERY SECTION
// ============================================================================
function GallerySection({ data }: { data: ServiceData }) {
  const { t } = useTranslation('tafeta')
  const { gallery, color } = data
  const placeholders = [
    <Tags className="w-12 h-12 opacity-60" />,
    <Shirt className="w-12 h-12 opacity-60" />,
    <Smartphone className="w-12 h-12 opacity-60" />,
    <ChartColumn className="w-12 h-12 opacity-60" />
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
          <p className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>{t('ui.galleryEyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {gallery.title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {gallery.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.items.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative aspect-square bg-linear-to-br from-[#FAF8F5] to-white rounded-2xl border-2 border-dashed border-[#E8D09E]/40 hover:border-[#C5A059]/60 flex flex-col items-center justify-center p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="text-6xl mb-3 opacity-60">{placeholders[idx % placeholders.length]}</div>
              <h4 className="font-bold text-[#1A1A1A] text-center mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500 text-center">{item.description}</p>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2 py-0.5 rounded">
                  {t('ui.comingSoon')}
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
            {t('ui.galleryNote')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// PRICING SECTION
// ============================================================================
function PricingSection({ data }: { data: ServiceData }) {
  const { t } = useTranslation('tafeta')
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
            <span className={`text-xs font-bold ${color.text} uppercase tracking-widest`}>{t('ui.pricingBadge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {pricing.title}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {pricing.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {pricing.packages.map((pkg: any, idx: number) => (
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
                  <div>
                    <p className={`text-4xl font-extrabold ${pkg.popular ? 'text-[#E8D09E]' : 'text-[#1A1A1A]'}`}>
                      {pkg.price}
                    </p>
                    <p className={`text-xs mt-1 ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                      {pkg.priceNote}
                    </p>
                  </div>
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
                  {t('ui.whatYouGet')}
                </p>
                <div className="space-y-3">
                  {pkg.features.map((feature: any, fIdx: number) => (
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
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{t('ui.addonsTitle')}</h3>
                <p className="text-gray-500">{t('ui.addonsSubtitle')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pricing.addons.map((addon: any, idx: number) => (
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
            {t('ui.notePrefix')} {pricing.note}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// CUSTOM SOLUTION SECTION
// ============================================================================
function CustomSolutionSection({ data }: { data: ServiceData }) {
  const { t } = useTranslation('tafeta')
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
              <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('ui.customBadge')}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight">
              {customSolution.title}
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              {customSolution.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {customSolution.features.map((feature: any, idx: number) => (
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
              <span>{t('ui.customQuote')}</span>
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
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">{t('ui.processCustom')}</span>
                </div>

                <h3 className="text-2xl font-bold mb-6">{t('ui.howWeWork')}</h3>

                <div className="space-y-4">
                  {customSolution.process.map((step: string, idx: number) => (
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
                      <p className="text-xs text-gray-400">{t('ui.proposalDays')}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <p className="text-2xl font-extrabold text-[#E8D09E] mb-1">24/7</p>
                      <p className="text-xs text-gray-400">{t('ui.dedicatedSupport')}</p>
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
function FAQDetailSection({ data }: { data: ServiceData }) {
  const { t } = useTranslation('tafeta')
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
          {faq.items.map((item: any, idx: number) => (
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
// RELATED SERVICES SECTION
// ============================================================================
function RelatedServicesSection() {
  const { t } = useTranslation('tafeta')
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
          <p className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('ui.relatedEyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('ui.relatedTitlePre')}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              {t('ui.relatedTitleHighlight')}
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('ui.relatedSubtitle')}
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
                    <span>{t('ui.comingSoon')}</span>
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
                      <span>{t('ui.comingSoonNote')}</span>
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
                      <span>{t('ui.learnMore')}</span>
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
            {t('ui.relatedNotePrefix')}{' '}
            <Link to="/contact" className="text-[#8C6F3D] font-semibold hover:text-[#C5A059] transition-colors">
              {t('ui.relatedNoteContact')}
            </Link>{' '}
            {t('ui.relatedNoteSuffix')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function ServiceTafetaDetailPage() {
  const { t } = useTranslation('tafeta')
  const data = t('data', { returnObjects: true })

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