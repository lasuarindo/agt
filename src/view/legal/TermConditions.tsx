import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'
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
// DATA BUILDER - Locale JSON + inject dynamic office contacts
// ============================================================================
const getTermsData = (t: TFunction) => {
  const office = getHQOffice()
  const data = t('data', { returnObjects: true }) as any
  const labels = data.contactUs.contactLabels as string[]
  data.contactUs.contacts = [
    { type: 'email', label: labels[0], value: office.email, href: `mailto:${office.email}` },
    { type: 'phone', label: labels[1], value: office.phoneDisplay, href: office.phoneLink },
    { type: 'address', label: labels[2], value: office.address, href: null }
  ]
  return data
}

// ============================================================================
// ICON MAPPING
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

// ============================================================================
// HERO TERMS & CONDITIONS
// ============================================================================
function HeroTerms() {
  const { t } = useTranslation('terms')
  const { meta } = getTermsData(t)
  const ui = t('ui', { returnObjects: true }) as Record<string, string>

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
          <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{ui.heroBadge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
        >
          {ui.heroTitlePre} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
            {ui.heroTitleHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
        >
          {t('ui.heroDesc', { company: meta.company })}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{ui.effectiveLabel} {meta.effectiveDate}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{ui.versionLabel} {meta.version}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{ui.lawLabel} {meta.jurisdiction}</span>
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
  const { t } = useTranslation('terms')
  const { tableOfContents } = getTermsData(t)
  const ui = t('ui', { returnObjects: true }) as Record<string, string>

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
          <h3 className="font-bold text-[#1A1A1A]">{ui.tocTitle}</h3>
        </div>
        <nav className="space-y-1">
          {tableOfContents.map((section: any) => (
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
// SECTION WRAPPER
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
// CALLOUT BOX
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
// NUMBERED LIST
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
// RICH TEXT RENDERER
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
function IntroductionRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).introduction
  return (
    <TermsSection id="introduction" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {data.paragraphs.map((para: any, idx: number) => (
          <p key={idx}><RichText content={para.content} /></p>
        ))}
      </div>
      <CalloutBox type={data.callout.type as any} title={data.callout.title}>
        <RichText content={data.callout.content} />
      </CalloutBox>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.scope.intro}</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {data.scope.items.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </TermsSection>
  )
}

function DefinitionsRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).definitions
  return (
    <TermsSection id="definitions" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
        {data.terms.map((item: any, idx: number) => (
          <div key={idx} className="p-4 bg-[#FAF8F5] rounded-xl border border-gray-100">
            <h4 className="font-bold text-[#1A1A1A] mb-2">{item.term}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{item.definition}</p>
          </div>
        ))}
      </div>
    </TermsSection>
  )
}

function ServicesRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).services
  return (
    <TermsSection id="services" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {data.items.map((item: any, idx: number) => (
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

function AccountRegistrationRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).accountRegistration
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
          {data.terminationConditions.items.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </TermsSection>
  )
}

function UserObligationsRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).userObligations
  return (
    <TermsSection id="userObligations" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="space-y-3 my-6">
        {data.prohibitedActions.map((item: string, idx: number) => (
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

function IntellectualPropertyRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).intellectualProperty
  const ui = t('ui', { returnObjects: true }) as Record<string, string>
  return (
    <TermsSection id="intellectualProperty" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {data.protections.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-2xl p-6 md:p-8 text-white my-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <BadgeCheck className="w-6 h-6 text-[#E8D09E]" />
            <h3 className="text-xl font-bold">{ui.ipTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.standards.map((item: any, idx: number) => (
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
          {data.restrictions.items.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </TermsSection>
  )
}

function PaymentPricingRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).paymentPricing
  const th = data.tableHeaders
  return (
    <TermsSection id="paymentPricing" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="overflow-x-auto my-6">
        <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-[#FAF8F5]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">{th.aspect}</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">{th.terms}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.table.map((row: any, idx: number) => (
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

function LiabilityLimitationsRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).liabilityLimitations
  return (
    <TermsSection id="liabilityLimitations" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="space-y-3 my-6">
        {data.exclusions.map((item: string, idx: number) => (
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
          {data.exceptions.items.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </TermsSection>
  )
}

function IndemnificationRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).indemnification
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

function ServiceTerminationRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).serviceTermination
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
            {data.byUser.items.map((item: string, idx: number) => (
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
            {data.byCompany.items.map((item: string, idx: number) => (
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

function DisputeResolutionRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).disputeResolution
  return (
    <TermsSection id="disputeResolution" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>
      <div className="space-y-4 my-6">
        {data.steps.map((item: any, idx: number) => (
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

function GoverningLawRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).governingLaw
  const ui = t('ui', { returnObjects: true }) as Record<string, string>
  return (
    <TermsSection id="governingLaw" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {data.paragraphs.map((para: string, idx: number) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
      <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-2xl p-6 md:p-8 text-white my-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-5">
            <Scale className="w-6 h-6 text-[#E8D09E]" />
            <h3 className="text-xl font-bold">{ui.regulationsTitle}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.regulations.map((item: string, idx: number) => (
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

function ChangesToTermsRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).changesToTerms
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

function ContactUsRenderer() {
  const { t } = useTranslation('terms')
  const data = getTermsData(t).contactUs
  const typeIcon = (type: string) => iconMap[type === 'email' ? 'Mail' : type === 'phone' ? 'Phone' : 'MapPin']
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
            {data.contacts.map((contact: any, idx: number) => (
              contact.href ? (
                <a key={idx} href={contact.href} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  {typeIcon(contact.type)}
                  <div>
                    <p className="text-xs text-gray-400">{contact.label}</p>
                    <p className="text-sm font-bold text-white">{contact.value}</p>
                  </div>
                </a>
              ) : (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                  {typeIcon(contact.type)}
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
          <RichText content={t('ui.contactSubject', { subject: data.subjectLine })} />
        </p>
      </div>
    </TermsSection>
  )
}

// ============================================================================
// MAIN CONTENT
// ============================================================================
function TermsContent() {
  const { t } = useTranslation('terms')
  const { lastUpdated, cta } = getTermsData(t)

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