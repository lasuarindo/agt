import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router'
import {
  Trophy,
  Star,
  Award as AwardIcon,
  Sparkles,
  ArrowRight,
  Search,
  Filter,
  Calendar,
  BadgeCheck,
  Shield,
  Globe,
  TrendingUp,
  Target,
  Users,
  Lightbulb,
  Handshake,
  ChevronRight,
  X,
  CheckCircle2
} from 'lucide-react'
import { AwardsData, getAwardIcon, type Award } from '@/data/award'
import AboutJoinUsCTA from '@/components/AboutJoinUs'

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type AwardCategory = 'all' | 'achievement' | 'certification' | 'partnership' | 'innovation' | 'startup'
type FilterType = 'all' | 'featured' | 'recent'

interface FilterOption {
  id: AwardCategory
  label: string
  icon: React.ReactNode
  count: number
}

// ============================================================================
// HERO SECTION - Awards Page
// ============================================================================

function HeroAwardsPage() {
  const totalAwards = AwardsData.length
  const featuredCount = AwardsData.filter(a => a.featured).length
  const uniqueYears = [...new Set(AwardsData.map(a => a.year))].length

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#E8D09E]/20" />
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[700px] h-[700px] bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[600px] h-[600px] bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 26, 26, 1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#C5A059]/40 px-4 py-2 rounded-full mb-6"
        >
          <Trophy className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
            Penghargaan & Prestasi
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
        >
          Diakui oleh{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
            Industri
          </span>
          <br className="hidden md:block" />
          Nasional & Internasional
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
        >
          Perjalanan kami dalam menghadirkan inovasi autentikasi terbaik telah diakui melalui berbagai penghargaan bergengsi dari lembaga nasional dan internasional.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{totalAwards}+ Penghargaan</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{featuredCount} Featured</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">{uniqueYears}+ Tahun</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// STATS SECTION
// ============================================================================

function AwardsStatsSection() {
  const stats = useMemo(() => {
    const totalAwards = AwardsData.length
    const featuredCount = AwardsData.filter(a => a.featured).length
    const uniqueYears = [...new Set(AwardsData.map(a => a.year))].length
    const firstYear = Math.min(...AwardsData.map(a => parseInt(a.year)))
    const currentYear = new Date().getFullYear()
    const yearsOfExcellence = currentYear - firstYear + 1

    return [
      {
        icon: <Trophy className="w-6 h-6" />,
        value: totalAwards,
        suffix: '+',
        label: 'Total Penghargaan',
        desc: 'Dari berbagai kategori'
      },
      {
        icon: <Star className="w-6 h-6" />,
        value: featuredCount,
        suffix: '',
        label: 'Featured Awards',
        desc: 'Penghargaan unggulan'
      },
      {
        icon: <Calendar className="w-6 h-6" />,
        value: uniqueYears,
        suffix: '+',
        label: 'Tahun Berprestasi',
        desc: 'Konsistensi prestasi'
      },
      {
        icon: <TrendingUp className="w-6 h-6" />,
        value: yearsOfExcellence,
        suffix: '+',
        label: 'Tahun Pengalaman',
        desc: 'Sejak didirikan'
      }
    ]
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A1A1A] to-[#2a2a2a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <p className="text-[#E8D09E] font-bold tracking-widest uppercase text-xs">
            Pencapaian Kami
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Angka yang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D09E] to-[#C5A059]">
              Berbicara
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Delapan tahun dedikasi dalam menghadirkan solusi autentikasi terbaik di Asia Pasifik.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-[#E8D09E]/30 transition-all group text-center"
            >
              <div className="w-12 h-12 bg-[#E8D09E]/20 text-[#E8D09E] rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
                <span className="text-[#E8D09E]">{stat.suffix}</span>
              </p>
              <p className="text-sm font-bold text-[#E8D09E] mb-1">{stat.label}</p>
              <p className="text-xs text-gray-400">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FILTER & SEARCH SECTION
// ============================================================================

function AwardsFilterSection({
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery,
  showFeaturedOnly,
  setShowFeaturedOnly
}: {
  activeFilter: AwardCategory
  setActiveFilter: (filter: AwardCategory) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  showFeaturedOnly: boolean
  setShowFeaturedOnly: (show: boolean) => void
}) {
  const filterOptions: FilterOption[] = useMemo(() => {
    const categories: AwardCategory[] = ['all', 'achievement', 'certification', 'partnership', 'innovation', 'startup']
    
    return categories.map(cat => ({
      id: cat,
      label: cat === 'all' ? 'Semua' : cat.charAt(0).toUpperCase() + cat.slice(1),
      icon: cat === 'all' ? <Filter className="w-4 h-4" /> :
            cat === 'achievement' ? <Trophy className="w-4 h-4" /> :
            cat === 'certification' ? <BadgeCheck className="w-4 h-4" /> :
            cat === 'partnership' ? <Handshake className="w-4 h-4" /> :
            cat === 'innovation' ? <Lightbulb className="w-4 h-4" /> :
            <Sparkles className="w-4 h-4" />,
      count: cat === 'all' ? AwardsData.length : AwardsData.filter(a => a.category === cat).length
    }))
  }, [])

  return (
    <section className="py-8 bg-white border-b border-gray-100 top-20 z-30 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-4">
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#1A1A1A] text-white shadow-md'
                    : 'bg-[#FAF8F5] text-gray-600 hover:bg-[#E8D09E]/20 hover:text-[#8C6F3D]'
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeFilter === filter.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
            
            {/* Featured Toggle */}
            <button
              onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                showFeaturedOnly
                  ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-md'
                  : 'bg-[#FAF8F5] text-gray-600 hover:bg-amber-100 hover:text-amber-700'
              }`}
            >
              <Star className="w-4 h-4" />
              <span>Featured Only</span>
            </button>
          </div>

          {/* Featured Toggle */}
          {/* <button
            onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              showFeaturedOnly
                ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-md'
                : 'bg-[#FAF8F5] text-gray-600 hover:bg-amber-100 hover:text-amber-700'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Featured Only</span>
          </button> */}
          
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari penghargaan..."
              className="w-full pl-11 pr-10 py-2.5 rounded-xl border border-gray-200 focus:border-[#C5A059] focus:ring-2 focus:ring-[#E8D09E]/50 outline-none transition-all bg-gray-50 focus:bg-white text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-3 h-3 text-gray-600" />
              </button>
            )}
          </div>
          
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FEATURED AWARD HERO CARD
// ============================================================================

function FeaturedAwardCard({ award }: { award: Award }) {
  const Icon = award.icon || getAwardIcon(award.category)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <div className="group relative bg-gradient-to-br from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A] rounded-3xl p-6 md:p-10 text-white shadow-2xl overflow-hidden border border-[#C5A059]/20 hover:border-[#C5A059]/40 transition-all duration-500">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C5A059]/20 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8C6F3D]/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(232, 208, 158, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 208, 158, 1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Icon */}
          <div className="shrink-0">
            <div className={`relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${award.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500`}>
              <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
              {/* Glow Ring */}
              <div className={`absolute inset-0 bg-gradient-to-br ${award.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#E8D09E]/20 text-[#E8D09E] px-3 py-1 rounded-full border border-[#E8D09E]/30">
                <Sparkles className="w-3 h-3" />
                {award.year}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                <Star className="w-3 h-3 fill-current" />
                Featured Award
              </span>
              {award.category && (
                <span className="text-xs font-bold text-gray-400 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  {award.category}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight tracking-tight">
              {award.title}
            </h3>

            {/* Organizer */}
            <p className="text-[#E8D09E] font-semibold text-sm md:text-base mb-3">
              oleh {award.organizer}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
              {award.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ============================================================================
// AWARDS GRID SECTION
// ============================================================================

function AwardsGridSection({ awards }: { awards: Award[] }) {
  if (awards.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Tidak ada penghargaan ditemukan</h3>
        <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian Anda</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <AnimatePresence mode="popLayout">
        {awards.map((award, idx) => {
          const Icon = award.icon || getAwardIcon(award.category)
          const isFeatured = award.featured
          
          return (
            <motion.div
              key={award.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                isFeatured
                  ? 'bg-gradient-to-br from-[#FAF8F5] to-white border-[#E8D09E]/50 hover:border-[#C5A059]/60 hover:shadow-xl shadow-md'
                  : 'bg-gradient-to-br from-[#FAF8F5] to-white border-gray-100 hover:border-[#E8D09E]/50 hover:shadow-xl'
              }`}
            >
              {/* Featured Glow Effect */}
              {isFeatured && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}

              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-500 pointer-events-none`} />

              <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0">
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${award.gradient} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-6 h-6" />
                    {/* Featured Star Badge */}
                    {isFeatured && (
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Badges Row */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2 py-0.5 rounded">
                      {award.year}
                    </span>
                    {award.category && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        {award.category}
                      </span>
                    )}
                    {/* Featured Tag */}
                    {isFeatured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-gradient-to-r from-amber-100 to-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <Star className="w-2.5 h-2.5 fill-current" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-base mb-1 leading-snug transition-colors ${
                    isFeatured 
                      ? 'text-[#1A1A1A] group-hover:text-[#8C6F3D]' 
                      : 'text-[#1A1A1A] group-hover:text-[#8C6F3D]'
                  }`}>
                    {award.title}
                  </h3>

                  {/* Organizer */}
                  <p className="text-sm text-[#8C6F3D] font-semibold mb-2">
                    {award.organizer}
                  </p>

                  {/* Description */}
                  {award.description && (
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {award.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

// ============================================================================
// TIMELINE SECTION
// ============================================================================

function AwardsTimelineSection() {
  const timelineByYear = useMemo(() => {
    const grouped: Record<string, Award[]> = {}
    
    AwardsData.forEach(award => {
      if (!grouped[award.year]) {
        grouped[award.year] = []
      }
      grouped[award.year].push(award)
    })

    return Object.entries(grouped)
      .sort(([a], [b]) => parseInt(b) - parseInt(a)) // Sort descending
  }, [])

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Calendar className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              Perjalanan Prestasi
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Timeline{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059]">
              Penghargaan
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Jejak prestasi kami dari tahun ke tahun dalam menghadirkan solusi autentikasi terbaik.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C5A059] via-[#E8D09E] to-transparent" />

          <div className="space-y-12">
            {timelineByYear.map(([year, awards], yearIdx) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: yearIdx * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  yearIdx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-white border-2 border-[#C5A059] rounded-xl flex items-center justify-center text-[#8C6F3D] shadow-md z-10 scale-110">
                  <Trophy className="w-5 h-5" />
                </div>

                {/* Content Card */}
                <div className={`pl-20 md:pl-0 md:w-1/2 ${yearIdx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 border border-[#E8D09E]/50 shadow-md hover:shadow-lg transition-shadow">
                    {/* Year Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm font-extrabold text-[#C5A059] bg-[#E8D09E]/20 px-3 py-1 rounded-md tracking-wider">
                        {year}
                      </span>
                      <span className="text-xs font-bold text-gray-500">
                        {awards.length} Penghargaan
                      </span>
                    </div>

                    {/* Awards List */}
                    <div className="space-y-3">
                      {awards.map((award, awardIdx) => {
                        const Icon = award.icon || getAwardIcon(award.category)
                        
                        return (
                          <div
                            key={award.id}
                            className="flex items-start gap-3 p-3 bg-[#FAF8F5] rounded-xl hover:bg-[#E8D09E]/10 transition-colors"
                          >
                            <div className={`w-10 h-10 bg-gradient-to-br ${award.gradient} rounded-lg flex items-center justify-center text-white shrink-0`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-[#1A1A1A] text-sm mb-0.5">
                                {award.title}
                              </h4>
                              <p className="text-xs text-[#8C6F3D] font-semibold">
                                {award.organizer}
                              </p>
                            </div>
                            {award.featured && (
                              <Star className="w-4 h-4 text-amber-500 fill-current shrink-0" />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CERTIFICATIONS SECTION
// ============================================================================
function CertificationsSection() {
  const certifications = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: 'ISO/IEC 27000:2016',
      desc: 'Standar pengamanan informasi maksimum yang diterapkan pada cloud database Authentic Guards.',
      color: 'emerald'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'ISO/IEC 18004:2015',
      desc: 'Sistem QR code kami dikembangkan dengan mengacu pada standar internasional ISO/IEC 18004:2015 sebagai rujukan teknis, memastikan interoperabilitas dengan pembaca QR standar.',
      color: 'purple'
    }
  ]

  const colorMap = {
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' }
  }

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:sticky lg:top-32"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full mb-4">
                <Shield className="w-4 h-4 text-[#8C6F3D]" />
                <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
                  Sertifikasi Resmi
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-4">
                Standar Keamanan{' '}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059]">
                  Kelas Dunia
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Kami berkomitmen pada standar keamanan dan privasi tertinggi. Semua sistem dan proses kami diaudit secara independen dan tersertifikasi oleh lembaga internasional.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-6 text-white">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#E8D09E] rounded-xl flex items-center justify-center shrink-0">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Licensed Standards</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Kami memiliki lisensi resmi untuk standar internasional yang digunakan dalam sistem kami, menjamin kualitas dan interoperabilitas global.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {certifications.map((cert, idx) => {
              const colors = colorMap[cert.color as keyof typeof colorMap]
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`group flex gap-4 p-5 bg-[#FAF8F5] rounded-2xl border border-gray-100 hover:border-[#E8D09E]/40 hover:shadow-md transition-all`}
                >
                  <div className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">{cert.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{cert.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function AwardsPage() {
  const [activeFilter, setActiveFilter] = useState<AwardCategory>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  // Filter awards
  const filteredAwards = useMemo(() => {
    let filtered = AwardsData

    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(a => a.category === activeFilter)
    }

    // Filter by featured
    if (showFeaturedOnly) {
      filtered = filtered.filter(a => a.featured)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(a =>
        a.title.toLowerCase().includes(query) ||
        a.organizer.toLowerCase().includes(query) ||
        a.description?.toLowerCase().includes(query) ||
        a.year.includes(query) ||
        a.category?.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [activeFilter, searchQuery, showFeaturedOnly])

  // Get main featured award
  const mainFeatured = filteredAwards.find(a => a.featured) || AwardsData.find(a => a.featured)

  return (
    <>
      <HeroAwardsPage />
      <AwardsStatsSection />
      <AwardsFilterSection
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showFeaturedOnly={showFeaturedOnly}
        setShowFeaturedOnly={setShowFeaturedOnly}
      />
      
      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Featured Award */}
          {mainFeatured && !showFeaturedOnly && activeFilter === 'all' && !searchQuery && (
            <FeaturedAwardCard award={mainFeatured} />
          )}

          {/* Awards Grid */}
          <AwardsGridSection awards={filteredAwards} />
        </div>
      </section>

      <AwardsTimelineSection />
      <CertificationsSection />
      <AboutJoinUsCTA />
    </>
  )
}