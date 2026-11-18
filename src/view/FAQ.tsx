import { useState, useMemo, useEffect } from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
import {
  Search,
  ChevronDown,
  HelpCircle,
  Shield,
  ShieldCheck,
  Tag,
  Layers,
  Lock,
  Eye,
  Zap,
  CheckCircle2,
  ArrowRight,
  Globe,
  Users,
  Building2,
  Package,
  Sparkles,
  Smartphone,
  MapPin,
  Mail,
  Phone,
  Clock,
  BadgeCheck,
  ScanLine,
  Calendar,
  Award,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  FileText,
  BookOpen,
  AlertCircle,
  TrendingUp,
  Code2,
  Database,
  Fingerprint,
  QrCode,
  CreditCard,
  Handshake,
  HeadphonesIcon,
  ArrowUpRight
} from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================
interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  popular?: boolean
  lastUpdated?: string
  relatedLinks?: { label: string; href: string }[]
}

interface FAQCategory {
  id: string
  label: string
  icon: React.ReactNode
  color: string
  bgColor: string
  borderColor: string
  count: number
}

// ============================================================================
// CATEGORY BUILDER (labels from i18n, counts from data)
// ============================================================================
const buildCategories = (data: FAQItem[], t: (k: string) => string): FAQCategory[] => [
  {
    id: 'all',
    label: t('categories.all'),
    icon: <HelpCircle className="w-4 h-4" />,
    color: 'text-[#8C6F3D]',
    bgColor: 'bg-[#E8D09E]/20',
    borderColor: 'border-[#E8D09E]/40',
    count: data.length
  },
  {
    id: 'about',
    label: t('categories.about'),
    icon: <Building2 className="w-4 h-4" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-200',
    count: data.filter(f => f.category === 'about').length
  },
  {
    id: 'services',
    label: t('categories.services'),
    icon: <Package className="w-4 h-4" />,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    borderColor: 'border-emerald-200',
    count: data.filter(f => f.category === 'services').length
  },
  {
    id: 'technology',
    label: t('categories.technology'),
    icon: <Code2 className="w-4 h-4" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-200',
    count: data.filter(f => f.category === 'technology').length
  },
  {
    id: 'security',
    label: t('categories.security'),
    icon: <Shield className="w-4 h-4" />,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    borderColor: 'border-rose-200',
    count: data.filter(f => f.category === 'security').length
  },
  {
    id: 'verification',
    label: t('categories.verification'),
    icon: <ScanLine className="w-4 h-4" />,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    borderColor: 'border-amber-200',
    count: data.filter(f => f.category === 'verification').length
  },
  {
    id: 'partners',
    label: t('categories.partners'),
    icon: <Handshake className="w-4 h-4" />,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
    borderColor: 'border-teal-200',
    count: data.filter(f => f.category === 'partners').length
  },
  {
    id: 'pricing',
    label: t('categories.pricing'),
    icon: <CreditCard className="w-4 h-4" />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    borderColor: 'border-orange-200',
    count: data.filter(f => f.category === 'pricing').length
  }
]

// ============================================================================
// HERO FAQ SECTION
// ============================================================================
function HeroFAQSection({ searchQuery, setSearchQuery, faqCount, categoryCount }: { 
  searchQuery: string
  setSearchQuery: (query: string) => void 
  faqCount: number
  categoryCount: number
}) {
  const { t } = useTranslation('faq')
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#E8D09E]/20" />
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[700px] h-[700px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[600px] h-[600px] bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 26, 26, 1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#C5A059]/40 px-4 py-2 rounded-full mb-6"
        >
          <HelpCircle className="w-4 h-4 text-[#C5A059]" />
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
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {t('hero.desc')}
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('hero.searchPlaceholder')}
              className="w-full pl-14 pr-14 py-5 bg-white border-2 border-[#E8D09E]/40 rounded-2xl text-[#1A1A1A] placeholder-gray-400 focus:border-[#C5A059] focus:ring-4 focus:ring-[#E8D09E]/20 outline-none transition-all shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <AlertCircle className="w-4 h-4 text-gray-500" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-8 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{t('hero.statQuestions', { n: faqCount })}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{t('hero.statCategories', { n: categoryCount })}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{t('hero.statUpdate')}</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// CATEGORY FILTER
// ============================================================================
function CategoryFilter({ 
  activeCategory, 
  setActiveCategory,
  categories
}: { 
  activeCategory: string
  setActiveCategory: (category: string) => void 
  categories: FAQCategory[]
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    const category = searchParams.get('category') ?? null;
    if (category && categories.find(v => v.id === category)) {
      setActiveCategory(category);
    } 
    
    else if (!category || category === 'all') {
      setActiveCategory('all');
    }
  }, [searchParams]);
  
  const handleCategoryClick = (categoryId: string) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (categoryId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', categoryId);
    }
    
    setSearchParams(newParams, { 
      replace: true, 
      preventScrollReset: true 
    });
  }
  
  return (
    <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-[#E8D09E]/30 py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#1A1A1A] text-white shadow-md'
                  : 'bg-[#FAF8F5] text-gray-600 hover:bg-[#E8D09E]/20 hover:text-[#8C6F3D]'
              }`}
            >
              <span className={activeCategory === category.id ? 'text-[#E8D09E]' : category.color}>
                {category.icon}
              </span>
              <span>{category.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-md ${
                activeCategory === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white text-gray-500'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// POPULAR FAQ SECTION
// ============================================================================
function PopularFAQSection({ 
  faqs, 
  openItems, 
  toggleItem,
}: { 
  faqs: FAQItem[]
  openItems: Set<string>
  toggleItem: (id: string) => void
  handleFeedback: (id: string, helpful: boolean) => void
}) {
  const { t } = useTranslation('faq')
  const popularFaqs = faqs.filter(f => f.popular).slice(0, 3)
  
  if (popularFaqs.length === 0) return null

  return (
    <section className="py-12 md:py-16 bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
            <TrendingUp className="w-4 h-4 text-[#E8D09E]" />
            <span className="text-xs font-bold text-[#E8D09E] uppercase tracking-widest">{t('popular.eyebrow')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('popular.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E8D09E] to-[#C5A059]">{t('popular.titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {popularFaqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#E8D09E]/30 transition-all"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#E8D09E] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[#E8D09E] bg-[#E8D09E]/20 px-2 py-0.5 rounded uppercase tracking-wider">
                        {t('popular.itemBadge')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white pr-4">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  openItems.has(faq.id)
                    ? 'bg-[#C5A059] text-white rotate-180'
                    : 'bg-white/10 text-[#E8D09E]'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {openItems.has(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="pl-14 pt-4 border-t border-white/10">
                        <p className="text-sm text-gray-300 leading-relaxed mb-4">
                          {faq.answer}
                        </p>
                        
                        {faq.relatedLinks && (
                          <div className="flex flex-wrap gap-2">
                            {faq.relatedLinks.map((link, lIdx) => (
                              <Link
                                key={lIdx}
                                to={link.href}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8D09E] hover:text-[#C5A059] bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all"
                              >
                                <span>{link.label}</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            ))}
                          </div>
                        )}
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
// FAQ ACCORDION
// ============================================================================
function FAQAccordion({ 
  faqs, 
  openItems, 
  toggleItem,
  handleFeedback,
  categories
}: { 
  faqs: FAQItem[]
  openItems: Set<string>
  toggleItem: (id: string) => void
  handleFeedback: (id: string, helpful: boolean) => void
  categories: FAQCategory[]
}) {
  const { t, i18n } = useTranslation('faq')
  const locale = i18n.language === 'id' ? 'id-ID' : 'en-US'

  // Group FAQs by category
  const groupedFaqs = useMemo(() => {
    const groups: Record<string, FAQItem[]> = {}
    faqs.forEach(faq => {
      if (!groups[faq.category]) {
        groups[faq.category] = []
      }
      groups[faq.category].push(faq)
    })
    return groups
  }, [faqs])

  if (faqs.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Search className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{t('accordion.noResultsTitle')}</h3>
        <p className="text-gray-500 mb-6">
          {t('accordion.noResultsDesc')}
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#8C6F3D] transition-all"
        >
          <span>{t('accordion.contactCta')}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-10">
      {Object.entries(groupedFaqs).map(([categoryId, categoryFaqs]) => {
        const category = categories.find(c => c.id === categoryId)
        if (!category) return null

        return (
          <motion.div
            key={categoryId}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 ${category.bgColor} ${category.color} rounded-xl flex items-center justify-center`}>
                {category.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A]">{category.label}</h2>
                <p className="text-sm text-gray-500">{t('categoryCount', { n: categoryFaqs.length })}</p>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-3">
              {categoryFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#E8D09E]/40 hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-start justify-between gap-4 p-5 text-left group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {faq.popular && (
                          <span className="text-[10px] font-bold text-[#C5A059] bg-[#E8D09E]/20 px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {t('popular.itemBadge')}
                          </span>
                        )}
                        {faq.lastUpdated && (
                          <span className="text-[10px] text-gray-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {t('accordion.updatedPrefix')} {new Date(faq.lastUpdated).toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' })}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-[#1A1A1A] text-base md:text-lg pr-4 group-hover:text-[#8C6F3D] transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      openItems.has(faq.id)
                        ? 'bg-[#C5A059] text-white rotate-180'
                        : 'bg-[#FAF8F5] text-[#8C6F3D]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openItems.has(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                              {faq.answer}
                            </p>

                            {/* Related Links */}
                            {faq.relatedLinks && faq.relatedLinks.length > 0 && (
                              <div className="mb-4">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                  {t('accordion.relatedTitle')}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {faq.relatedLinks.map((link, lIdx) => (
                                    <Link
                                      key={lIdx}
                                      to={link.href}
                                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6F3D] hover:text-[#6b5530] bg-[#FAF8F5] hover:bg-[#E8D09E]/20 px-3 py-1.5 rounded-lg transition-all"
                                    >
                                      <span>{link.label}</span>
                                      <ArrowRight className="w-3 h-3" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Feedback */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <p className="text-xs text-gray-500">{t('accordion.helpful')}</p>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleFeedback(faq.id, true)}
                                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-emerald-600 bg-gray-50 hover:bg-emerald-50 px-3 py-1.5 rounded-lg transition-all"
                                >
                                  <ThumbsUp className="w-3.5 h-3.5" />
                                  <span>{t('accordion.yes')}</span>
                                </button>
                                <button
                                  onClick={() => handleFeedback(faq.id, false)}
                                  className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-red-600 bg-gray-50 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-all"
                                >
                                  <ThumbsDown className="w-3.5 h-3.5" />
                                  <span>{t('accordion.no')}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

// ============================================================================
// STILL HAVE QUESTIONS SECTION
// ============================================================================
function StillHaveQuestionsSection() {
  const { t } = useTranslation('faq')

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <HeadphonesIcon className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              {t('still.eyebrow')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('still.titlePre')}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              {t('still.titleHighlight')}
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            {t('still.subtitle')}
          </p>
        </motion.div>

        {/* Primary CTA - Big Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-linear-to-r from-[#8C6F3D] to-[#C5A059] text-white px-8 py-4 rounded-2xl font-bold text-base hover:shadow-xl hover:shadow-[#C5A059]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>{t('still.cta')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            {t('still.notePre')} <span className="font-bold text-[#8C6F3D]">{t('still.noteHighlight')}</span> {t('still.noteSuffix')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}



// ============================================================================
// RELATED RESOURCES SECTION
// ============================================================================
function RelatedResourcesSection() {
  const { t } = useTranslation('faq')
  const resourceIcons = [
    <ScanLine className="w-6 h-6" />,
    <Sparkles className="w-6 h-6" />,
    <Users className="w-6 h-6" />,
    <Shield className="w-6 h-6" />
  ]
  const resourceHrefs = ['/technology', '/services/hologram', '/partners/our-client', '/privacy-policy']
  const resourceColors = ['amber', 'purple', 'emerald', 'blue']
  const resources = (t('resources.items', { returnObjects: true }) as { title: string; desc: string }[])
    .map((r, idx) => ({ ...r, icon: resourceIcons[idx], href: resourceHrefs[idx], color: resourceColors[idx] }))

  const colorMap: Record<string, { bg: string; text: string }> = {
    amber: { bg: 'bg-amber-100', text: 'text-amber-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' }
  }

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <BookOpen className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('resources.eyebrow')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('resources.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('resources.titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            {t('resources.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {resources.map((resource, idx) => {
            const colors = colorMap[resource.color]
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <Link
                  to={resource.href}
                  className="group bg-[#FAF8F5] hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#E8D09E]/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                >
                  <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#8C6F3D] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {resource.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#8C6F3D] group-hover:gap-3 transition-all">
                    <span>{t('resources.cta')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


// ============================================================================
// MAIN PAGE
// ============================================================================
export default function FAQPage() {
  const { t } = useTranslation('faq')
  const faqData = t('faqData', { returnObjects: true }) as FAQItem[]
  const categories = useMemo(() => buildCategories(faqData, t), [faqData, t])

  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    let filtered = faqData

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [faqData, searchQuery, activeCategory])

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleFeedback = (id: string, helpful: boolean) => {
    // In production, send this to your analytics/feedback system
    console.log(`FAQ ${id} feedback: ${helpful ? 'helpful' : 'not helpful'}`)
  }

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/index.css');
        body { font-family: 'Inter', sans-serif; background-color: #FAFAFA; }
        html { scroll-behavior: smooth; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <HeroFAQSection 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        faqCount={faqData.length}
        categoryCount={categories.length - 1}
      />
      
      <CategoryFilter 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory}
        categories={categories}
      />

      {/* Show popular FAQs only when no search and category is 'all' */}
      {!searchQuery && activeCategory === 'all' && (
        <PopularFAQSection 
          faqs={faqData}
          openItems={openItems}
          toggleItem={toggleItem}
          handleFeedback={handleFeedback}
        />
      )}

      {/* Main FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Search Results Header */}
          {(searchQuery || activeCategory !== 'all') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-1">
                    {searchQuery ? t('searchResults.title') : categories.find(c => c.id === activeCategory)?.label}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {t('searchResults.count', { n: filteredFaqs.length })}
                    {searchQuery && <span className="font-semibold text-[#8C6F3D]"> {t('searchResults.forQuery', { query: searchQuery })}</span>}
                  </p>
                </div>
                {(searchQuery || activeCategory !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setActiveCategory('all')
                    }}
                    className="text-sm font-semibold text-[#8C6F3D] hover:text-[#6b5530] flex items-center gap-1"
                  >
                    <span>{t('searchResults.reset')}</span>
                    <AlertCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          )}

          <FAQAccordion 
            faqs={filteredFaqs}
            openItems={openItems}
            toggleItem={toggleItem}
            handleFeedback={handleFeedback}
            categories={categories}
          />
        </div>
      </section>

      <StillHaveQuestionsSection />
      <RelatedResourcesSection />
    </>
  )
}