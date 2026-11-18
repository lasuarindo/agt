import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router'
import {
  ArrowLeft,
  Search,
  Filter,
  X,
  Building2,
  Globe,
  Calendar,
  CheckCircle2,
  Sparkles,
  Briefcase,
  MapPin,
  Users
} from 'lucide-react'
import {
  ClientsData,
  ClientCategoryData,
  getClientCategoryLabel,
  getClientGradient,
  getClientBadgeStyle,
  filterClientsByCategory,
  getUniqueClientCategories,
  sortClientsByYear,
  type Client,
  type ClientCategory
} from '@/data/clients'
import AboutJoinUsCTA from '@/components/AboutJoinUs'
import { useTranslation } from 'react-i18next'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" }
}

// ============================================================================
// CLIENT DETAIL MODAL
// ============================================================================
function ClientDetailModal({
  client,
  onClose
}: {
  client: Client
  onClose: () => void
}) {
  const gradient = client.gradient || getClientGradient(client.category)
  const badgeStyle = getClientBadgeStyle(client.category)
  const categoryLabel = getClientCategoryLabel(client.category)
  const { t } = useTranslation('ourclients')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 md:p-4 md:backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white shadow-2xl size-full md:rounded-3xl md:max-w-3xl md:w-full md:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header with Gradient */}
        <div className={`relative h-56 md:h-64 bg-linear-to-br ${gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

          {/* Logo/Initial */}
          <div className="absolute bottom-6 left-6 md:left-8 flex items-end gap-4">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl shrink-0">
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain p-3 rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              ) : (
                <span className="text-3xl font-extrabold text-[#1A1A1A]">
                  {client.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="pb-2">
              <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-1">
                <CheckCircle2 className="w-3 h-3" />
                {t('modal.verified')}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-md">
                {client.name}
              </h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8D09E]/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{t('modal.category')}</h4>
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeStyle}`}>
                    {categoryLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Industry */}
            <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8D09E]/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{t('modal.industry')}</h4>
                  <p className="text-sm text-gray-600">{client.industry}</p>
                </div>
              </div>
            </div>

            {/* Since */}
            <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8D09E]/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{t('modal.since')}</h4>
                  <p className="text-sm text-gray-600">{client.since}</p>
                </div>
              </div>
            </div>

            {/* Location */}
            {client.location && (
              <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8D09E]/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{t('modal.location')}</h4>
                    <p className="text-sm text-gray-600">{client.location}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          {client.description && (
            <div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#8C6F3D]" />
                {t('modal.about')}
              </h3>
              <p className="text-gray-600 leading-relaxed">{client.description}</p>
            </div>
          )}

          {/* Website CTA */}
          {client.website && (
            <a
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#2a2a2a] transition-all duration-300 group"
            >
              <Globe className="w-4 h-4" />
              <span>{t('modal.website')}</span>
              <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// HERO SECTION - Clean Style (matching OurTeam)
// ============================================================================
function HeroClients() {
  const { t } = useTranslation('ourclients')
  const totalClients = ClientsData.length
  const totalCategories = getUniqueClientCategories(ClientsData).length

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
          <Building2 className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
            {t('hero.badge')}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
        >
          {t('hero.titlePre')}{' '}
          <br className="hidden md:block" />
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

        {/* Quick Stats - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">{t('hero.statClients', { n: totalClients })}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">{t('hero.statCategories', { n: totalCategories })}</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// CLIENTS GRID SECTION - Main Focus (matching TeamGridSection)
// ============================================================================
function ClientsGridSection() {
  const { t } = useTranslation('ourclients')
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [sortBy, setSortBy] = useState<'name' | 'year'>('year')
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)

  // Get unique categories for filter pills
  const categories = new Set(getUniqueClientCategories(ClientsData))
  const categoryData = ClientCategoryData.filter(
    v => v.id === 'all' || categories.has(v.id as ClientCategory)
  )

  // Filter & Search clients
  const filteredClients = useMemo(() => {
    let result = filterClientsByCategory(ClientsData, activeFilter as ClientCategory | 'all')

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(client =>
        client.name.toLowerCase().includes(query) ||
        client.industry.toLowerCase().includes(query) ||
        client.description?.toLowerCase().includes(query)
      )
    }

    // Sort
    if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    } else {
      result = sortClientsByYear(result, 'desc')
    }

    return result
  }, [activeFilter, searchQuery, sortBy])

  return (
    <>
      <motion.section
        className="py-16 md:py-24 bg-white relative"
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              {/* Left: Title */}
              <div>
                <div className="inline-flex items-center gap-2 text-[#8C6F3D] mb-3">
                  <Building2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {t('grid.eyebrow')}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-2">
                  {t('grid.titlePre')}{' '}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
                    {t('grid.titleHighlight')}
                  </span>
                </h2>
                <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
                  {t('grid.subtitle')}
                </p>
              </div>

              {/* Right: Results Count */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-[#8C6F3D]">
                    {filteredClients.length}
                  </div>
                  <div className="text-xs text-gray-500">{t('grid.resultsLabel')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Search & Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 space-y-4"
          >
            {/* Search & Sort Row */}
            <div className="flex flex-col md:flex-row gap-3">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('grid.searchPlaceholder')}
                  className="w-full pl-11 pr-10 py-2.5 rounded-full border border-gray-200 focus:border-[#8C6F3D] focus:ring-2 focus:ring-[#E8D09E]/50 outline-none transition-all bg-white text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <X className="w-3 h-3 text-gray-500" />
                  </button>
                )}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'year')}
                className="px-4 py-2.5 rounded-full border border-gray-200 focus:border-[#8C6F3D] focus:ring-2 focus:ring-[#E8D09E]/50 outline-none transition-all bg-white text-sm font-medium hover:border-[#E8D09E]/50"
              >
                <option value="year">{t('grid.sortNewest')}</option>
                <option value="name">{t('grid.sortName')}</option>
              </select>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 shrink-0 mr-1">
                <Filter className="w-4 h-4 text-[#8C6F3D]" />
                <span className="text-xs">{t('grid.filterLabel')}</span>
              </div>
              {categoryData.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-[#1A1A1A] text-white shadow-md'
                      : 'bg-[#FAF8F5] text-gray-600 hover:bg-[#E8D09E]/20 hover:text-[#8C6F3D]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}

              {/* Reset Button */}
              {(activeFilter !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveFilter('all')
                    setSearchQuery('')
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-[#E8D09E]/20 text-[#8C6F3D] text-xs font-bold hover:bg-[#E8D09E]/30 transition-colors ml-auto"
                >
                  {t('grid.reset')}
                </button>
              )}
            </div>

            {/* Active Filters Display */}
            {(activeFilter !== 'all' || searchQuery) && (
              <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-500">{t('grid.activeLabel')}</span>
                {activeFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2.5 py-1 rounded-full">
                    {getClientCategoryLabel(activeFilter as ClientCategory)}
                    <button
                      onClick={() => setActiveFilter('all')}
                      className="hover:text-[#6b5530] ml-0.5"
                    >
                      ×
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2.5 py-1 rounded-full">
                    "{searchQuery}"
                    <button
                      onClick={() => setSearchQuery('')}
                      className="hover:text-[#6b5530] ml-0.5"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}
          </motion.div>

          {/* Clients Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${searchQuery}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            >
              {filteredClients.map((client, idx) => (
                <ClientCard
                  key={client.id}
                  client={client}
                  idx={idx}
                  onClick={() => setSelectedClient(client)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredClients.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-[#FAF8F5] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-[#8C6F3D]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                {t('grid.emptyTitle')}
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                {t('grid.emptyDesc')}
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all')
                  setSearchQuery('')
                }}
                className="inline-flex items-center gap-2 bg-[#C5A059] text-[#1A1A1A] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#E8D09E] transition-all duration-300"
              >
                <span>{t('grid.reset')}</span>
              </button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedClient && (
          <ClientDetailModal
            client={selectedClient}
            onClose={() => setSelectedClient(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

// ============================================================================
// CLIENT CARD - Clean Visual Style (matching TeamCard)
// ============================================================================
function ClientCard({
  client,
  idx,
  onClick
}: {
  client: Client
  idx: number
  onClick: () => void
}) {
  const gradient = client.gradient || getClientGradient(client.category)
  const badgeStyle = getClientBadgeStyle(client.category)
  const categoryLabel = getClientCategoryLabel(client.category)
  const { t } = useTranslation('ourclients')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.03 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-[#FAF8F5] hover:bg-white border border-gray-100 hover:border-[#E8D09E]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
    >
      {/* Logo/Initial Container */}
      <div className={`relative aspect-square overflow-hidden bg-linear-to-br ${gradient} flex items-center justify-center`}>
        {client.logo ? (
          <img
            src={client.logo}
            alt={client.name}
            className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.currentTarget
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = `<span class="text-5xl font-extrabold text-white">${client.name.charAt(0)}</span>`
              }
            }}
          />
        ) : (
          <span className="text-5xl font-extrabold text-white group-hover:scale-110 transition-transform duration-500">
            {client.name.charAt(0)}
          </span>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="text-xs font-bold text-[#1A1A1A]">{t('grid.viewDetail')}</span>
          </div>
        </div>
      </div>

      {/* Info - Compact */}
      <div className="p-4 text-center">
        <h3 className="text-sm md:text-base font-bold text-[#1A1A1A] mb-1 truncate group-hover:text-[#8C6F3D] transition-colors">
          {client.name}
        </h3>
        <span className={`inline-block text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${badgeStyle} mb-1`}>
          {categoryLabel}
        </span>
        <p className="text-xs text-gray-500 truncate">{client.industry}</p>
      </div>
    </motion.div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function OurClientsPage() {
  return (
    <>
      <HeroClients />
      <ClientsGridSection />
      <AboutJoinUsCTA variant="about" />
    </>
  )
}