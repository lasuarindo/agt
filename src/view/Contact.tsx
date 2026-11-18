import { useState } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Handshake,
  Building2,
  Users,
  Newspaper,
  HeadphonesIcon,
  HelpCircle,
  ChevronDown,
  AlertCircle,
  Loader2,
  ExternalLink,
  Calendar,
  Briefcase,
  Award,
  Check
} from 'lucide-react'
import {
  OfficesData,
  getSocialIcon,
  getSocialColor,
  type OfficeProps,
  type SocialMedia
} from '@/data/offices'

// ============================================================================
// HELPERS
// ============================================================================
const getCurrentDay = () => {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  return days[new Date().getDay()]
}

// ============================================================================
// HERO CONTACT SECTION
// ============================================================================
function HeroContact() {
  const { t } = useTranslation('contact')
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
          <MessageCircle className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
            {t('hero.eyebrow')}
          </span>
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
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
        >
          {t('hero.desc')}
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{t('hero.stat1')}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">
              {t('hero.statOffices', { n: OfficesData.length })}
            </span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{t('hero.stat3')}</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// OFFICE SELECTOR SECTION - BARU (Multi-Office)
// ============================================================================
function OfficeSelectSection({
  activeOffice,
  setActiveOffice
}: {
  activeOffice: OfficeProps
  setActiveOffice: (office: OfficeProps) => void
}) {
  const { t } = useTranslation('contact')
  const [isSelect, setIsSelect] = useState<boolean>(false)

  const selectOffice = (id: string) => {
    const find = OfficesData.find(o => o.id === id)
    if (find) {
      setActiveOffice(find)
      setIsSelect(false)
    }
  }

  const getTypeLabel = (type: OfficeProps['type']) => {
    return t(`officeSelect.type.${type}`)
  }

  const getTypeBadgeClass = (type: OfficeProps['type']) => {
    switch (type) {
      case 'hq':
        return 'bg-[#E8D09E]/30 text-[#8C6F3D]'
      case 'regional':
        return 'bg-blue-100 text-blue-700'
      case 'branch':
        return 'bg-purple-100 text-purple-700'
      default:
        return 'bg-gray-100 text-gray-500'
    }
  }

  const getTypeIconClass = (type: OfficeProps['type']) => {
    switch (type) {
      case 'hq':
        return 'bg-linear-to-br from-[#E8D09E] to-[#C5A059] text-white shadow-md'
      case 'regional':
        return 'bg-blue-100 text-blue-700'
      case 'branch':
        return 'bg-purple-100 text-purple-700'
      default:
        return 'bg-[#E8D09E]/20 text-[#8C6F3D]'
    }
  }

  return (
    <motion.section
      className="py-16 md:py-24 bg-[#FAF8F5] relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full shadow-sm">
            <MapPin className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              {t('officeSelect.eyebrow')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('officeSelect.titlePre')}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              {t('officeSelect.titleHighlight')}
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('officeSelect.subtitle')}
          </p>
        </div>

        {/* Selector Card */}
        <div className="bg-white rounded-3xl p-4 md:p-5 border border-[#E8D09E]/30 shadow-sm relative">
          <div className="flex items-center gap-4 pr-14">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${getTypeIconClass(activeOffice.type)}`}>
              <Building2 className="w-6 h-6" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] truncate">
                  {activeOffice.city}
                </h3>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 ${getTypeBadgeClass(activeOffice.type)}`}>
                  {getTypeLabel(activeOffice.type)}
                </span>
              </div>
              <p className="text-sm text-gray-500 truncate">
                {activeOffice.countryName} • {activeOffice.address.split('\n')[0]}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-xl border border-gray-200 hover:border-[#C5A059]/40 hover:bg-[#FAF8F5] transition-all cursor-pointer group"
            onClick={() => setIsSelect(!isSelect)}
          >
            <ChevronDown className={`w-5 h-5 text-gray-600 group-hover:text-[#8C6F3D] transition-transform duration-300 ${isSelect ? 'rotate-180' : 'rotate-0'}`} />
          </button>

          <AnimatePresence>
            {isSelect && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-40"
                  onClick={() => setIsSelect(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-4 top-full mt-2 z-50 w-[calc(100%-2rem)] max-w-md bg-white rounded-2xl border border-[#E8D09E]/30 shadow-2xl overflow-hidden"
                >
                  <div className="px-4 py-3 bg-[#FAF8F5] border-b border-[#E8D09E]/20">
                    <p className="text-xs font-bold text-[#8C6F3D] uppercase tracking-wider">
                      {t('officeSelect.pickerTitle', { n: OfficesData.length })}
                    </p>
                  </div>

                  <div className="max-h-[360px] overflow-y-auto">
                    {OfficesData.map(office => {
                      const isActive = office.id === activeOffice.id
                      const isHQ = office.type === 'hq'
                      const firstLineAddress = office.address.split('\n')[0]

                      return (
                        <button
                          key={office.id}
                          onClick={() => selectOffice(office.id)}
                          className={`w-full px-4 py-3 text-left transition-all border-b border-gray-100 last:border-b-0 group/item ${
                            isActive ? 'bg-[#FAF8F5]' : 'hover:bg-[#FAF8F5]/50'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg shrink-0 ${
                              isHQ
                                ? 'bg-linear-to-br from-[#E8D09E] to-[#C5A059] text-white'
                                : isActive
                                  ? 'bg-[#E8D09E]/20 text-[#8C6F3D]'
                                  : 'bg-gray-100 text-gray-600'
                            }`}>
                              <Building2 className="w-4 h-4" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <h4 className={`text-sm font-bold truncate ${
                                  isActive ? 'text-[#1A1A1A]' : 'text-gray-700 group-hover/item:text-[#1A1A1A]'
                                }`}>
                                  {office.city}
                                </h4>
                                <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${getTypeBadgeClass(office.type)}`}>
                                  {getTypeLabel(office.type)}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 truncate">
                                {firstLineAddress}
                              </p>
                            </div>

                            {isActive && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="p-1 bg-emerald-100 rounded-full shrink-0"
                              >
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              </motion.div>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}

// ============================================================================
// OFFICE CONTACT CARDS - Dinamis berdasarkan kantor terpilih
// ============================================================================
function OfficeSelectedContactSection({ activeOffice }: { activeOffice: OfficeProps }) {
  const { t } = useTranslation('contact')
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeOffice.id + '-contact'}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4 md:px-8 -mt-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Phone Card */}
          <a
            href={activeOffice.phoneLink}
            className="group bg-white rounded-3xl p-6 border border-[#E8D09E]/30 shadow-sm hover:shadow-xl hover:border-[#C5A059]/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex flex-col h-full">
              <div className="w-12 h-12 bg-[#E8D09E]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E8D09E]/30 transition-colors">
                <Phone className="w-6 h-6 text-[#8C6F3D]" />
              </div>
              <div className="flex-1 mb-4">
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">{t('contactCards.phoneTitle')}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t('contactCards.phoneDesc')}
                </p>
              </div>
              <p className="text-base font-bold text-[#1A1A1A] mb-3">
                {activeOffice.phoneDisplay}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-[#8C6F3D] group-hover:text-[#6b5530]">
                <span>{t('contactCards.phoneCta')}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${activeOffice.email}`}
            className="group bg-white rounded-3xl p-6 border border-[#E8D09E]/30 shadow-sm hover:shadow-xl hover:border-[#C5A059]/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex flex-col h-full">
              <div className="w-12 h-12 bg-[#E8D09E]/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E8D09E]/30 transition-colors">
                <Mail className="w-6 h-6 text-[#8C6F3D]" />
              </div>
              <div className="flex-1 mb-4">
                <h4 className="text-lg font-bold text-[#1A1A1A] mb-2">{t('contactCards.emailTitle')}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t('contactCards.emailDesc')}
                </p>
              </div>
              <p className="text-base font-bold text-[#1A1A1A] mb-3 truncate">
                {activeOffice.email}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-[#8C6F3D] group-hover:text-[#6b5530]">
                <span>{t('contactCards.emailCta')}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

// ============================================================================
// CONTACT FORM SECTION
// ============================================================================
function ContactFormSection({ activeOffice }: { activeOffice: OfficeProps }) {
  const { t } = useTranslation('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    category: 'general',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const categories = [
    { value: 'general', label: t('form.categories.0.label'), icon: <HelpCircle className="w-4 h-4" /> },
    { value: 'sales', label: t('form.categories.1.label'), icon: <Handshake className="w-4 h-4" /> },
    { value: 'support', label: t('form.categories.2.label'), icon: <HeadphonesIcon className="w-4 h-4" /> },
    { value: 'enterprise', label: t('form.categories.3.label'), icon: <Building2 className="w-4 h-4" /> },
    { value: 'media', label: t('form.categories.4.label'), icon: <Newspaper className="w-4 h-4" /> }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitStatus('success')
    setIsSubmitting(false)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        category: 'general',
        subject: '',
        message: ''
      })
      setSubmitStatus('idle')
    }, 3000)
  }

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full mb-4">
                <Send className="w-4 h-4 text-[#8C6F3D]" />
                <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
                  {t('form.eyebrow')}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-4">
                {t('form.titleTop')} <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
                  {t('form.titleHighlight')}
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('form.desc', { city: activeOffice.city })}
              </p>
            </div>

            {/* Response Time Card */}
            <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {t('form.activeTeam')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{t('form.responseTitle')}</h3>
                <div className="space-y-3">
                  {(t('form.response', { returnObjects: true }) as { label: string; time: string }[]).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                      <span className="text-sm text-gray-300">{item.label}</span>
                      <span className="text-sm font-bold text-[#E8D09E]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E8D09E]/30 shadow-sm">
              <h4 className="font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                {t('form.guaranteeTitle')}
              </h4>
              <div className="space-y-3">
                {(t('form.guarantee', { returnObjects: true }) as string[]).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-[#FAF8F5] border border-[#E8D09E]/30 rounded-3xl p-6 md:p-10 shadow-sm">
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mb-6"
                  >
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-start gap-4">
                      <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-900 mb-1">{t('form.successTitle')}</h4>
                        <p className="text-sm text-emerald-800 leading-relaxed">
                          {t('form.successDesc', { city: activeOffice.city })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Category Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">
                    {t('form.categoryLabel')} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, category: cat.value }))}
                        className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all ${
                          formData.category === cat.value
                            ? 'border-[#C5A059] bg-[#E8D09E]/10 text-[#8C6F3D]'
                            : 'border-gray-200 hover:border-[#E8D09E]/50 text-gray-600 bg-white'
                        }`}
                      >
                        {cat.icon}
                        <span className="text-xs font-semibold text-center">{cat.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                      {t('form.nameLabel')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8C6F3D] focus:ring-2 focus:ring-[#E8D09E]/50 outline-none transition-all bg-white"
                      placeholder={t('form.namePlaceholder')}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      {t('form.emailLabel')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8C6F3D] focus:ring-2 focus:ring-[#E8D09E]/50 outline-none transition-all bg-white"
                      placeholder={t('form.emailPlaceholder')}
                    />
                  </div>
                </div>

                {/* Company & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-sm font-semibold text-gray-700">
                      {t('form.companyLabel')}
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8C6F3D] focus:ring-2 focus:ring-[#E8D09E]/50 outline-none transition-all bg-white"
                      placeholder={t('form.companyPlaceholder')}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      {t('form.phoneLabel')}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8C6F3D] focus:ring-2 focus:ring-[#E8D09E]/50 outline-none transition-all bg-white"
                      placeholder={t('form.phonePlaceholder')}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                    {t('form.subjectLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8C6F3D] focus:ring-2 focus:ring-[#E8D09E]/50 outline-none transition-all bg-white"
                    placeholder={t('form.subjectPlaceholder')}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                    {t('form.messageLabel')} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8C6F3D] focus:ring-2 focus:ring-[#E8D09E]/50 outline-none transition-all bg-white resize-none"
                    placeholder={t('form.messagePlaceholder')}
                  />
                  <p className="text-xs text-gray-500 text-right">
                    {t('form.charCount', { n: formData.message.length })}
                  </p>
                </div>

                {/* Privacy Notice */}
                <div className="flex items-start gap-2 p-4 bg-white rounded-xl border border-[#E8D09E]/30">
                  <ShieldCheck className="w-4 h-4 text-[#8C6F3D] shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t('form.privacyPrefix')}{' '}
                    <Link to="/privacy-policy" className="text-[#8C6F3D] font-semibold hover:underline">
                      {t('form.privacyLink')}
                    </Link>{' '}
                    {t('form.privacySuffix')}
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] text-white font-bold py-4 rounded-xl hover:bg-[#8C6F3D] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-[#8C6F3D]/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t('form.sending')}</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{t('form.sent')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('form.submit', { city: activeOffice.city })}</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


// ============================================================================
// OFFICE DETAIL SECTION - Dinamis (Map + Hours + Holidays + Visit CTA)
// ============================================================================
function OfficeSelectedDetailSection({ activeOffice }: { activeOffice: OfficeProps }) {
  const { t } = useTranslation('contact')
  const currentDay = getCurrentDay()

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
            <MapPin className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              {t('detail.eyebrow')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('detail.titlePre')}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              {t('detail.titleHighlight', { city: activeOffice.city })}
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('detail.subtitle', { city: activeOffice.city })}
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeOffice.id + '-detail'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {/* Map Placeholder */}
            <motion.div
              key={activeOffice.id + '-map'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative rounded-3xl overflow-hidden shadow-xl min-h-[400px] bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a]"
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(rgba(232, 208, 158, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 208, 158, 0.3) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-[#E8D09E]/20 rounded-2xl flex items-center justify-center mb-4 border border-[#E8D09E]/30">
                  <MapPin className="w-10 h-10 text-[#E8D09E]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {activeOffice.label} - {activeOffice.city}
                </h3>
                <p className="text-sm text-gray-400 mb-6 max-w-sm whitespace-pre-line leading-relaxed">
                  {activeOffice.address}
                </p>
                <a
                  href={activeOffice.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C5A059] text-[#1A1A1A] px-6 py-3 rounded-xl font-bold hover:bg-[#E8D09E] transition-all duration-300"
                >
                  <span>{t('detail.mapCta')}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Office Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Jam Operasional */}
              <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E8D09E]/30 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">{t('detail.hoursTitle')}</h4>
                    {activeOffice.timezone && (
                      <p className="text-xs text-gray-500 mt-0.5">{activeOffice.timezone}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-1.5 text-sm">
                  {activeOffice.operatingHours.map((item, idx) => {
                    const isToday =
                      item.day.toLowerCase().includes(currentDay.toLowerCase()) ||
                      (currentDay === 'Sabtu' && item.day.toLowerCase().includes('sabtu')) ||
                      (currentDay === 'Minggu' && item.day.toLowerCase().includes('minggu'))
                    return (
                      <div
                        key={idx}
                        className={`flex justify-between items-center py-2 px-3 rounded-lg ${
                          isToday ? 'bg-white border border-[#E8D09E]/40' : ''
                        }`}
                      >
                        <span className={`text-gray-600 ${isToday ? 'font-semibold text-[#8C6F3D]' : ''}`}>
                          {item.day}
                          {isToday && (
                            <span className="ml-2 text-[10px] bg-[#C5A059] text-white px-1.5 py-0.5 rounded-full">
                              {t('detail.today')}
                            </span>
                          )}
                        </span>
                        <span className={`font-semibold ${item.isClosed ? 'text-red-500' : 'text-[#1A1A1A]'}`}>
                          {item.hours}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Hari Libur */}
              <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#E8D09E]/30 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[#1A1A1A]">{t('detail.holidaysTitle')}</h4>
                </div>
                <div className="space-y-2 mb-3">
                  {activeOffice.holidays.map((holiday, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      <span>{holiday}</span>
                    </div>
                  ))}
                </div>
                {activeOffice.notes && (
                  <div className="flex items-start gap-2 text-xs text-gray-600 bg-white border border-[#E8D09E]/30 rounded-xl p-3">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#8C6F3D]" />
                    <span className="leading-relaxed">{activeOffice.notes}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Kunjungan Bisnis */}
            <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-[#E8D09E]" />
                    <h4 className="font-bold">{t('detail.visitTitle')}</h4>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {t('detail.visitDesc', { city: activeOffice.city })}
                  </p>
                </div>
                <a
                  href={`mailto:${activeOffice.email}?subject=Permintaan%20Kunjungan%20Kantor%20${activeOffice.city}`}
                  className="inline-flex items-center gap-2 bg-[#C5A059] text-[#1A1A1A] px-6 py-3 rounded-xl font-bold hover:bg-[#E8D09E] transition-all duration-300 whitespace-nowrap"
                >
                  <span>{t('detail.visitCta')}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

// ============================================================================
// SOCIAL MEDIA SECTION - Dinamis per kantor
// ============================================================================
function OfficeSelectedSocialSection({ activeOffice }: { activeOffice: OfficeProps }) {
  const { t } = useTranslation('contact')
  if (!activeOffice.socialMedia || activeOffice.socialMedia.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 md:p-10 border border-[#E8D09E]/30 shadow-sm"
        >
          <div className="flex items-start gap-3 mb-6">
            <div className="p-2.5 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
                {t('social.title', { city: activeOffice.city })}
              </h3>
              <p className="text-sm text-gray-500">
                {t('social.subtitle', { city: activeOffice.city })}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {activeOffice.socialMedia.map((social: SocialMedia, idx: number) => {
              const Icon = getSocialIcon(social.platform)
              const colorClass = getSocialColor(social.platform)
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-2.5 px-4 py-3 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${colorClass}`}
                  title={social.label || social.username}
                >
                  <div className="p-1.5 bg-white rounded-lg shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold truncate max-w-[140px]">
                    {social.username}
                  </span>
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// FAQ SECTION
// ============================================================================
function FAQSection() {
  const { t } = useTranslation('contact')
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = t('faq.items', { returnObjects: true }) as { q: string; a: string }[]

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <HelpCircle className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('faq.eyebrow')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('faq.titlePre')}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              {t('faq.titleHighlight')}
            </span>
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
              className="bg-[#FAF8F5] rounded-2xl border border-gray-100 overflow-hidden hover:border-[#E8D09E]/40 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <h3 className="font-bold text-[#1A1A1A] text-base md:text-lg pr-4">{faq.q}</h3>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    openIndex === idx
                      ? 'bg-[#C5A059] text-white rotate-180'
                      : 'bg-white text-[#8C6F3D]'
                  }`}
                >
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
                        <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
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
export default function ContactPage() {
  const [activeOffice, setActiveOffice] = useState<OfficeProps>(OfficesData[0])

  return (
    <>
      <HeroContact />
      <OfficeSelectSection
        activeOffice={activeOffice}
        setActiveOffice={setActiveOffice}
      />
      <OfficeSelectedContactSection activeOffice={activeOffice} />
      <OfficeSelectedDetailSection activeOffice={activeOffice} />
      <OfficeSelectedSocialSection activeOffice={activeOffice} />
      <div id="contact-form">
        <ContactFormSection activeOffice={activeOffice} />
      </div>
      <FAQSection />
    </>
  )
}