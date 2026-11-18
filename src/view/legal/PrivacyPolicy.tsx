import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'
import {
  Shield, ShieldCheck, Lock, Eye, Database, Users, Globe,
  Mail, Phone, MapPin, FileText, CheckCircle2, AlertCircle,
  ArrowRight, Clock, Server, UserCheck, Cookie, Baby,
  RefreshCw, MessageCircle, ChevronRight, Sparkles, BookOpen,
  HelpCircle, X, Fingerprint, MapPin as MapPinIcon
} from 'lucide-react'
import { getHQOffice } from '@/data/offices' 

// ============================================================================
// DATA BUILDER - Locale JSON + inject dynamic office contacts
// ============================================================================
const getPrivacyData = (t: TFunction) => {
  const office = getHQOffice()
  const data = t('data', { returnObjects: true }) as any

  data.hakAnda.callout.contacts = [
    { type: 'email', value: office.email, href: `mailto:${office.email}` },
    { type: 'phone', value: office.phoneDisplay, href: office.phoneLink }
  ]
  data.kontakKami.contacts = [
    { icon: 'Mail', label: data.kontakKami.contactLabels[0], value: office.email, href: `mailto:${office.email}` },
    { icon: 'Phone', label: data.kontakKami.contactLabels[1], value: office.phoneDisplay, href: office.phoneLink },
    { icon: 'MapPin', label: data.kontakKami.contactLabels[2], value: office.address, href: null }
  ]
  return data
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

// ============================================================================
// HERO PRIVACY POLICY
// ============================================================================
function HeroPrivacyPolicy() {
  const { t } = useTranslation('privacy')
  const { meta } = getPrivacyData(t)
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
          <Lock className="w-4 h-4 text-[#C5A059]" />
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
            <span className="font-semibold">{ui.lastUpdatedLabel} {meta.lastUpdated}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{ui.versionLabel} {meta.version}</span>
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
// TABLE OF CONTENTS
// ============================================================================
function TableOfContents() {
  const { t } = useTranslation('privacy')
  const { tableOfContents } = getPrivacyData(t)
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
// CALLOUT BOX
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
// DATA LIST
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
// POLICY SECTION WRAPPER
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
// RICH TEXT RENDERER
// ============================================================================
function RichText({ content }: { content: string }) {
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
// SECTION RENDERERS
// ============================================================================
function PendahuluanRenderer() {
  const { t } = useTranslation('privacy')
  const data = getPrivacyData(t).pendahuluan
  return (
    <PolicySection id="pendahuluan" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {data.paragraphs.map((para: any, idx: number) => {
          if (para.type === 'list' && para.items) {
            return (
              <ul key={idx} className="list-disc list-inside space-y-2 ml-4">
                {para.items.map((item: string, iIdx: number) => (
                  <li key={iIdx}>{item}</li>
                ))}
              </ul>
            )
          }
          return <p key={idx}><RichText content={para.content || ''} /></p>
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

function InformasiDikumpulkanRenderer() {
  const { t } = useTranslation('privacy')
  const data = getPrivacyData(t).informasiYangDikumpulkan
  return (
    <PolicySection id="informasi-yang-dikumpulkan" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>

      {data.categories.map((category: any, catIdx: number) => (
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

function PenggunaanInformasiRenderer() {
  const { t } = useTranslation('privacy')
  const data = getPrivacyData(t).penggunaanInformasi
  return (
    <PolicySection id="penggunaan-informasi" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {data.purposes.map((item: any, idx: number) => (
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

function BerbagiInformasiRenderer() {
  const { t } = useTranslation('privacy')
  const data = getPrivacyData(t).berbagiInformasi
  return (
    <PolicySection id="berbagi-informasi" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>

      <div className="space-y-4 my-6">
        {data.scenarios.map((item: any, idx: number) => (
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

function KeamananDataRenderer() {
  const { t } = useTranslation('privacy')
  const data = getPrivacyData(t).keamananData
  const ui = t('ui', { returnObjects: true }) as Record<string, string>
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
            <h3 className="text-xl font-bold">{ui.securityStandardsTitle}</h3>
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
        <p>{ui.securityAdditional}</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          {data.additionalMeasures.map((measure: string, idx: number) => (
            <li key={idx}>{measure}</li>
          ))}
        </ul>
      </div>

      {data.callout && (
        <CalloutBox type={data.callout.type as any} title={data.callout.title}>
          <RichText content={data.callout.content} />
          {data.callout.list && (
            <ul className="list-disc list-inside mt-2 space-y-1">
              {data.callout.list.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </CalloutBox>
      )}
    </PolicySection>
  )
}

function RetensiDataRenderer() {
  const { t } = useTranslation('privacy')
  const data = getPrivacyData(t).retensiData
  const th = data.tableHeaders
  return (
    <PolicySection id="retensi-data" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-[#FAF8F5]">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">{th.type}</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">{th.period}</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">{th.basis}</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.table.map((row: any, idx: number) => (
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

function HakAndaRenderer() {
  const { t } = useTranslation('privacy')
  const data = getPrivacyData(t).hakAnda
  return (
    <PolicySection id="hak-anda" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p><RichText content={data.intro} /></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        {data.rights.map((item: any, idx: number) => (
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
              {data.callout.contacts.map((contact: any, idx: number) => (
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

function CookiesRenderer() {
  const { t } = useTranslation('privacy')
  const data = getPrivacyData(t).cookies
  const ui = t('ui', { returnObjects: true }) as Record<string, string>
  return (
    <PolicySection id="cookies" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        <p>{data.intro}</p>
      </div>

      <h3 className="text-xl font-bold text-[#1A1A1A] mt-8 mb-4">{ui.cookiesTitle}</h3>

      <div className="space-y-4 my-6">
        {data.types.map((cookie: any, idx: number) => (
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
                    {ui.cookiesRequired}
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

function AnakDiBawahUmurRenderer() {
  const { t } = useTranslation('privacy')
  const data = getPrivacyData(t).anakDiBawahUmur
  return (
    <PolicySection id="anak-di-bawah-umur" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {data.paragraphs.map((para: any, idx: number) => (
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

function PerubahanKebijakanRenderer() {
  const { t } = useTranslation('privacy')
  const data = getPrivacyData(t).perubahanKebijakan
  return (
    <PolicySection id="perubahan-kebijakan" title={data.title} icon={data.icon}>
      <div className="text-gray-600 leading-relaxed space-y-4">
        {data.paragraphs.map((para: any, idx: number) => {
          if (para.type === 'list' && para.items) {
            return (
              <ul key={idx} className="list-disc list-inside space-y-2 ml-4">
                {para.items.map((item: string, iIdx: number) => (
                  <li key={iIdx}>{item}</li>
                ))}
              </ul>
            )
          }
          return <p key={idx}><RichText content={para.content || ''} /></p>
        })}
      </div>
    </PolicySection>
  )
}

function KontakKamiRenderer() {
  const { t } = useTranslation('privacy')
  const data = getPrivacyData(t).kontakKami
  const ui = t('ui', { returnObjects: true }) as Record<string, string>
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
            <h3 className="text-xl font-bold">{ui.contactTeamTitle}</h3>
          </div>
          <div className="space-y-3">
            {data.contacts.map((contact: any, idx: number) => (
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
// MAIN CONTENT
// ============================================================================
function PrivacyPolicyContent() {
  const { t } = useTranslation('privacy')
  const { meta } = getPrivacyData(t)
  const ui = t('ui', { returnObjects: true }) as Record<string, string>

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

      {/* LAST UPDATED */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#FAF8F5] border border-[#E8D09E]/30 rounded-2xl p-6 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Clock className="w-5 h-5 text-[#8C6F3D]" />
          <p className="text-sm font-bold text-[#1A1A1A]">{ui.lastDocTitle}</p>
        </div>
        <p className="text-lg font-extrabold text-[#1A1A1A] mb-1">{meta.lastUpdated}</p>
        <p className="text-xs text-gray-500">{t('ui.versionSuffix', { version: meta.version, company: meta.company })}</p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-gray-500 mb-4">{ui.ctaText}</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#8C6F3D] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <span>{ui.ctaButton}</span>
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