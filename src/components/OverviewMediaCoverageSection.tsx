import { motion } from 'motion/react'
import { Newspaper, Star, ExternalLink, Calendar, Quote, Sparkles, ArrowRight, Globe } from 'lucide-react'
import { 
  MediaCoverageData, 
  getCoverageIcon, 
  getCoverageGradient,
  getCoverageBadgeStyle,
  getCoverageCategoryLabel,
  getCoverageLanguageLabel,
  formatCoverageDate,
  getDisplayTitle,
  getUniqueOutlets,
  sortCoverageByDate,
  type MediaCoverage,
  type CoverageLanguage
} from '@/data/media-coverage'

// ============================================================================
// MEDIA COVERAGE SECTION
// ============================================================================
export default function MediaCoverageOverviewSection() {
  // Pisahkan featured dan regular
  const featuredCoverages = MediaCoverageData.filter(c => c.featured)
  const regularCoverages = MediaCoverageData.filter(c => !c.featured)
  const mainFeatured = featuredCoverages[0]
  const remainingFeatured = featuredCoverages.slice(1)
  const allRegularCoverages = [...remainingFeatured, ...regularCoverages]

  // Stats - Handle optional date/year
  const uniqueOutlets = [...new Set(MediaCoverageData.map(c => c.outlet))].length
  const totalCoverage = MediaCoverageData.length
  const yearsCovered = [...new Set(MediaCoverageData.map(c => {
    if (c.year) return c.year
    if (c.date) return c.date.split('-')[0]
    return null
  }).filter(Boolean))].length

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-[#E8D09E]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* ================================================================== */}
        {/* HEADER */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Newspaper className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              Liputan Media
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Pernah{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              Diliput Media
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Berbagai media terkemuka yang telah meliput perjalanan dan inovasi AuthenticGuards dalam industri autentikasi produk.
          </p>
        </motion.div>

        {/* ================================================================== */}
        {/* FEATURED HERO CARD */}
        {/* ================================================================== */}
        {mainFeatured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            {mainFeatured.url ? (
              <a
                href={mainFeatured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-linear-to-br from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A] rounded-3xl p-6 md:p-10 text-white shadow-2xl overflow-hidden border border-[#C5A059]/20 hover:border-[#C5A059]/40 transition-all duration-500 block"
              >
                <FeaturedCardContent coverage={mainFeatured} />
              </a>
            ) : (
              <div className="group relative bg-linear-to-br from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A] rounded-3xl p-6 md:p-10 text-white shadow-2xl overflow-hidden border border-[#C5A059]/20">
                <FeaturedCardContent coverage={mainFeatured} />
              </div>
            )}
          </motion.div>
        )}

        {/* ================================================================== */}
        {/* REGULAR COVERAGE GRID */}
        {/* ================================================================== */}
        {allRegularCoverages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            {allRegularCoverages.map((coverage, idx) => {
              const Icon = coverage.icon || getCoverageIcon(coverage.category)
              const gradient = coverage.gradient || getCoverageGradient(coverage.category)
              const badgeStyle = getCoverageBadgeStyle(coverage.category)
              const categoryLabel = getCoverageCategoryLabel(coverage.category)
              const languageLabel = coverage.language 
                ? getCoverageLanguageLabel(coverage.language as CoverageLanguage) 
                : 'Unknown'
              const isFeatured = coverage.featured
              const displayTitle = getDisplayTitle(coverage)
              const displayDate = formatCoverageDate(coverage)

              const CardContent = (
                <>
                  {/* Featured Glow Effect */}
                  {isFeatured && (
                    <div className="absolute inset-0 bg-linear-to-br from-[#C5A059]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  )}

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative flex items-start gap-4">
                    {/* Outlet Logo */}
                    <div className="shrink-0">
                      <div className={`relative w-14 h-14 bg-linear-to-br ${gradient} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 overflow-hidden bg-white border border-gray-100`}>
                        {coverage.outletLogo ? (
                          <img 
                            src={coverage.outletLogo} 
                            alt={coverage.outlet}
                            className="w-full h-full object-contain p-2"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                              const parent = e.currentTarget.parentElement
                              if (parent) {
                                parent.innerHTML = `<span class="text-white font-extrabold text-xl">${coverage.outlet.charAt(0)}</span>`
                                parent.className = `w-14 h-14 bg-linear-to-br ${gradient} rounded-xl flex items-center justify-center`
                              }
                            }}
                          />
                        ) : (
                          <span className="text-white font-extrabold text-xl">{coverage.outlet.charAt(0)}</span>
                        )}
                        {/* Featured Star Badge */}
                        {isFeatured && (
                          <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                            <Star className="w-3 h-3 text-white fill-current" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Badges Row */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {displayDate && displayDate !== 'Tanggal tidak tersedia' && (
                          <span className="text-xs font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2 py-0.5 rounded">
                            {displayDate}
                          </span>
                        )}
                        {coverage.category && (
                          <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeStyle}`}>
                            <Icon className="w-2.5 h-2.5" />
                            {categoryLabel}
                          </span>
                        )}
                        {coverage.language && (
                          <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            {languageLabel}
                          </span>
                        )}
                        {isFeatured && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-linear-to-r from-amber-100 to-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            <Star className="w-2.5 h-2.5 fill-current" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Outlet */}
                      <p className="text-xs font-bold text-[#8C6F3D] uppercase tracking-wide mb-1">
                        {coverage.outlet}
                      </p>

                      {/* Title */}
                      <h3 className="font-bold text-[#1A1A1A] text-base mb-2 group-hover:text-[#8C6F3D] transition-colors leading-snug line-clamp-2">
                        {displayTitle}
                      </h3>

                      {/* Description */}
                      {coverage.description && (
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-2">
                          {coverage.description}
                        </p>
                      )}

                      {/* Read More Link - Only if URL exists */}
                      {coverage.url && (
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#8C6F3D] group-hover:text-[#6b5530] transition-colors">
                          <span>Baca Selengkapnya</span>
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )

              // Conditional rendering: clickable if URL exists
              if (coverage.url) {
                return (
                  <motion.a
                    key={coverage.id}
                    href={coverage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 block ${
                      isFeatured
                        ? 'bg-linear-to-br from-[#FAF8F5] to-white border-[#E8D09E]/50 hover:border-[#C5A059]/60 hover:shadow-xl shadow-md'
                        : 'bg-linear-to-br from-[#FAF8F5] to-white border-gray-100 hover:border-[#E8D09E]/50 hover:shadow-xl'
                    }`}
                  >
                    {CardContent}
                  </motion.a>
                )
              }

              return (
                <motion.div
                  key={coverage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`group relative rounded-2xl p-6 border transition-all duration-300 ${
                    isFeatured
                      ? 'bg-linear-to-br from-[#FAF8F5] to-white border-[#E8D09E]/50 shadow-md'
                      : 'bg-linear-to-br from-[#FAF8F5] to-white border-gray-100'
                  }`}
                >
                  {CardContent}
                </motion.div>
              )
            })}
          </div>
        )}

        {/* ================================================================== */}
        {/* STATS FOOTER */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-3 md:gap-4"
        >
          <div className="bg-[#FAF8F5] rounded-2xl p-4 md:p-5 border border-[#E8D09E]/30 text-center hover:border-[#C5A059]/40 transition-colors">
            <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059] mb-1">
              {totalCoverage}+
            </div>
            <div className="text-xs md:text-sm text-gray-600 font-medium">
              Liputan Media
            </div>
          </div>

          <div className="bg-[#FAF8F5] rounded-2xl p-4 md:p-5 border border-[#E8D09E]/30 text-center hover:border-[#C5A059]/40 transition-colors">
            <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059] mb-1">
              {uniqueOutlets}+
            </div>
            <div className="text-xs md:text-sm text-gray-600 font-medium">
              Media Partner
            </div>
          </div>

          <div className="bg-[#FAF8F5] rounded-2xl p-4 md:p-5 border border-[#E8D09E]/30 text-center hover:border-[#C5A059]/40 transition-colors">
            <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059] mb-1">
              {yearsCovered}+
            </div>
            <div className="text-xs md:text-sm text-gray-600 font-medium">
              Tahun Diliput
            </div>
          </div>
        </motion.div>

        {/* ================================================================== */}
        {/* PRESS KIT CTA */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#E8D09E]" />
                  <h4 className="font-bold">Untuk Media & Pers</h4>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Tertarik meliput AuthenticGuards? Unduh press kit kami atau hubungi tim media relations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="/press-kit"
                  className="inline-flex items-center justify-center gap-2 bg-[#C5A059] text-[#1A1A1A] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#E8D09E] transition-all duration-300 whitespace-nowrap"
                >
                  <span>Download Press Kit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:media@authenticguards.com"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-white/20 transition-all duration-300 whitespace-nowrap"
                >
                  <span>Hubungi Media</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// FEATURED CARD CONTENT - Extracted Component
// ============================================================================
function FeaturedCardContent({ coverage }: { coverage: MediaCoverage }) {
  const gradient = coverage.gradient || getCoverageGradient(coverage.category)
  const displayTitle = getDisplayTitle(coverage)
  const displayDate = formatCoverageDate(coverage)

  return (
    <>
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
        {/* Outlet Logo */}
        <div className="shrink-0">
          <div className={`relative w-20 h-20 md:w-24 md:h-24 bg-linear-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500 overflow-hidden bg-white`}>
            {coverage.outletLogo ? (
              <img 
                src={coverage.outletLogo} 
                alt={coverage.outlet}
                className="w-full h-full object-contain p-3"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.innerHTML = `<span class="text-white font-extrabold text-2xl">${coverage.outlet.charAt(0)}</span>`
                    parent.className = `w-20 h-20 md:w-24 md:h-24 bg-linear-to-br ${gradient} rounded-2xl flex items-center justify-center`
                  }
                }}
              />
            ) : (
              <span className="text-white font-extrabold text-2xl">{coverage.outlet.charAt(0)}</span>
            )}
            {/* Glow Ring */}
            <div className={`absolute inset-0 bg-linear-to-br ${gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {displayDate && displayDate !== 'Tanggal tidak tersedia' && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#E8D09E]/20 text-[#E8D09E] px-3 py-1 rounded-full border border-[#E8D09E]/30">
                <Calendar className="w-3 h-3" />
                {displayDate}
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              <Star className="w-3 h-3 fill-current" />
              Featured
            </span>
            <span className="text-xs font-bold text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              {coverage.outlet}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight tracking-tight group-hover:text-[#E8D09E] transition-colors">
            {displayTitle}
          </h3>

          {/* Description */}
          {coverage.description && (
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mb-4">
              {coverage.description}
            </p>
          )}

          {/* Quote */}
          {coverage.quote && (
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 max-w-2xl">
              <Quote className="w-5 h-5 text-[#E8D09E] shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300 italic leading-relaxed">
                "{coverage.quote}"
              </p>
            </div>
          )}
        </div>

        {/* External Link Indicator - Only if URL exists */}
        {coverage.url && (
          <div className="hidden md:flex items-center shrink-0 self-center">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all duration-300">
              <ExternalLink className="w-5 h-5 text-white group-hover:text-[#1A1A1A] transition-colors" />
            </div>
          </div>
        )}
      </div>
    </>
  )
}


// ============================================================================
// VARIANT 1: SIMPLE / LOGO GRID (Compact)
// Cocok untuk: Section kecil di Home/About, tidak terlalu menonjol
// ============================================================================
export function MediaCoverageSimpleOverviewSection() {
  const coverages = sortCoverageByDate(MediaCoverageData)
  const uniqueOutlets = getUniqueOutlets(MediaCoverageData).length

  return (
    <section className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest mb-2">
            Diliput Oleh
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
            Media Partner Kami
          </h2>
        </motion.div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {coverages.map((coverage, idx) => {
            const gradient = coverage.gradient || getCoverageGradient(coverage.category)
            const displayTitle = getDisplayTitle(coverage)

            const CardContent = (
              <div className="relative flex flex-col items-center text-center gap-3">
                {/* Logo */}
                <div className="relative">
                  {coverage.outletLogo ? (
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0 bg-white border border-gray-100 overflow-hidden">
                      <img 
                        src={coverage.outletLogo} 
                        alt={coverage.outlet}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const parent = e.currentTarget.parentElement
                          if (parent) {
                            parent.innerHTML = `<span class="text-white font-extrabold text-2xl">${coverage.outlet.charAt(0)}</span>`
                            parent.className = `w-16 h-16 bg-linear-to-br ${gradient} rounded-2xl flex items-center justify-center`
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 bg-linear-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                      <span className="text-white font-extrabold text-2xl">{coverage.outlet.charAt(0)}</span>
                    </div>
                  )}

                  {/* Featured Badge */}
                  {coverage.featured && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                  )}

                  {/* External Link Indicator */}
                  {coverage.url && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white border border-gray-200 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <ExternalLink className="w-3 h-3 text-[#8C6F3D]" />
                    </div>
                  )}
                </div>

                {/* Name & Year */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-bold text-[#1A1A1A] mb-0.5 truncate group-hover:text-[#8C6F3D] transition-colors">
                    {coverage.outlet}
                  </h3>
                  <p className="text-[10px] font-medium text-gray-500">
                    {coverage.year || (coverage.date ? coverage.date.split('-')[0] : '')}
                  </p>
                </div>
              </div>
            )

            return coverage.url ? (
              <motion.a
                key={coverage.id}
                href={coverage.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-linear-to-br from-white to-[#FAF8F5] rounded-2xl p-4 border border-gray-100 hover:border-[#E8D09E]/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                title={displayTitle}
              >
                {CardContent}
              </motion.a>
            ) : (
              <motion.div
                key={coverage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-linear-to-br from-white to-[#FAF8F5] rounded-2xl p-4 border border-gray-100 shadow-sm"
                title={displayTitle}
              >
                {CardContent}
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{uniqueOutlets}+ Media Terpercaya</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// VARIANT 2: TIMELINE (Per Tahun)
// Cocok untuk: About page, menunjukkan journey liputan
// ============================================================================
export function MediaCoverageTimelineOverviewSection() {
  // Group by year
  const groupedByYear = MediaCoverageData.reduce((acc, coverage) => {
    const year = coverage.year || (coverage.date ? coverage.date.split('-')[0] : 'Unknown')
    if (!acc[year]) acc[year] = []
    acc[year].push(coverage)
    return acc
  }, {} as Record<string, MediaCoverage[]>)

  const years = Object.keys(groupedByYear).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-[#E8D09E]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Newspaper className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              Perjalanan Liputan
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Dari Tahun ke{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              Tahun
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Jejak liputan media yang mendokumentasikan perjalanan AuthenticGuards.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#E8D09E] via-[#C5A059] to-transparent md:-translate-x-1/2" />

          {years.map((year, yearIdx) => (
            <div key={year} className="relative mb-12 last:mb-0">
              {/* Year Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: yearIdx * 0.1 }}
                className="relative flex items-center justify-start md:justify-center mb-6"
              >
                <div className="relative z-10 w-16 h-16 bg-linear-to-br from-[#C5A059] to-[#8C6F3D] rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-xl border-4 border-white">
                  {year}
                </div>
              </motion.div>

              {/* Coverages for this year */}
              <div className="space-y-4 ml-20 md:ml-0 md:grid md:grid-cols-2 md:gap-6">
                {groupedByYear[year].map((coverage, idx) => {
                  const Icon = coverage.icon || getCoverageIcon(coverage.category)
                  const gradient = coverage.gradient || getCoverageGradient(coverage.category)
                  const badgeStyle = getCoverageBadgeStyle(coverage.category)
                  const categoryLabel = getCoverageCategoryLabel(coverage.category)
                  const displayTitle = getDisplayTitle(coverage)

                  const CardContent = (
                    <div className="relative flex items-start gap-4">
                      {/* Outlet Logo */}
                      <div className="shrink-0">
                        <div className={`relative w-14 h-14 bg-linear-to-br ${gradient} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 overflow-hidden bg-white border border-gray-100`}>
                          {coverage.outletLogo ? (
                            <img 
                              src={coverage.outletLogo} 
                              alt={coverage.outlet}
                              className="w-full h-full object-contain p-2"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none'
                                const parent = e.currentTarget.parentElement
                                if (parent) {
                                  parent.innerHTML = `<span class="text-white font-extrabold text-xl">${coverage.outlet.charAt(0)}</span>`
                                  parent.className = `w-14 h-14 bg-linear-to-br ${gradient} rounded-xl flex items-center justify-center`
                                }
                              }}
                            />
                          ) : (
                            <span className="text-white font-extrabold text-xl">{coverage.outlet.charAt(0)}</span>
                          )}
                          {coverage.featured && (
                            <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                              <Star className="w-3 h-3 text-white fill-current" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          {coverage.category && (
                            <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeStyle}`}>
                              <Icon className="w-2.5 h-2.5" />
                              {categoryLabel}
                            </span>
                          )}
                          {coverage.featured && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-linear-to-r from-amber-100 to-amber-50 px-2 py-0.5 rounded border border-amber-200">
                              <Star className="w-2.5 h-2.5 fill-current" />
                              Featured
                            </span>
                          )}
                        </div>

                        <p className="text-xs font-bold text-[#8C6F3D] uppercase tracking-wide mb-1">
                          {coverage.outlet}
                        </p>

                        <h3 className="font-bold text-[#1A1A1A] text-sm mb-1 group-hover:text-[#8C6F3D] transition-colors leading-snug line-clamp-2">
                          {displayTitle}
                        </h3>

                        {coverage.description && (
                          <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                            {coverage.description}
                          </p>
                        )}

                        {coverage.url && (
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#8C6F3D] mt-2">
                            <span>Baca</span>
                            <ExternalLink className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    </div>
                  )

                  const cardClass = `group relative rounded-2xl p-5 border transition-all duration-300 ${
                    coverage.featured
                      ? 'bg-linear-to-br from-[#FAF8F5] to-white border-[#E8D09E]/50 shadow-md'
                      : 'bg-white border-gray-100 hover:border-[#E8D09E]/50 hover:shadow-md'
                  }`

                  return coverage.url ? (
                    <motion.a
                      key={coverage.id}
                      href={coverage.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`${cardClass} block hover:-translate-y-1`}
                    >
                      {CardContent}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={coverage.id}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={cardClass}
                    >
                      {CardContent}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// VARIANT 4: LIST DETAIL (Vertical)
// Cocok untuk: Page khusus media/press
// ============================================================================
export function MediaCoverageListOverviewSection() {
  const coverages = sortCoverageByDate(MediaCoverageData)

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Newspaper className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              Arsip Liputan
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Daftar{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              Liputan Media
            </span>
          </h2>
        </motion.div>

        {/* List */}
        <div className="space-y-3">
          {coverages.map((coverage, idx) => {
            const Icon = coverage.icon || getCoverageIcon(coverage.category)
            const gradient = coverage.gradient || getCoverageGradient(coverage.category)
            const badgeStyle = getCoverageBadgeStyle(coverage.category)
            const categoryLabel = getCoverageCategoryLabel(coverage.category)
            const displayTitle = getDisplayTitle(coverage)
            const displayDate = formatCoverageDate(coverage)

            const CardContent = (
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="shrink-0">
                  <div className={`relative w-14 h-14 bg-linear-to-br ${gradient} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 overflow-hidden bg-white border border-gray-100`}>
                    {coverage.outletLogo ? (
                      <img 
                        src={coverage.outletLogo} 
                        alt={coverage.outlet}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const parent = e.currentTarget.parentElement
                          if (parent) {
                            parent.innerHTML = `<span class="text-white font-extrabold text-xl">${coverage.outlet.charAt(0)}</span>`
                            parent.className = `w-14 h-14 bg-linear-to-br ${gradient} rounded-xl flex items-center justify-center`
                          }
                        }}
                      />
                    ) : (
                      <span className="text-white font-extrabold text-xl">{coverage.outlet.charAt(0)}</span>
                    )}
                    {coverage.featured && (
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-xs font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2 py-0.5 rounded">
                      {displayDate}
                    </span>
                    {coverage.category && (
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${badgeStyle}`}>
                        <Icon className="w-2.5 h-2.5" />
                        {categoryLabel}
                      </span>
                    )}
                    {coverage.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-linear-to-r from-amber-100 to-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <Star className="w-2.5 h-2.5 fill-current" />
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-bold text-[#8C6F3D] uppercase tracking-wide mb-1">
                    {coverage.outlet}
                  </p>

                  <h3 className="font-bold text-[#1A1A1A] text-base mb-1 group-hover:text-[#8C6F3D] transition-colors leading-snug">
                    {displayTitle}
                  </h3>

                  {coverage.description && (
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {coverage.description}
                    </p>
                  )}

                  {coverage.quote && (
                    <div className="flex items-start gap-2 mt-2 p-2 bg-[#FAF8F5] rounded-lg border border-[#E8D09E]/20">
                      <Quote className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600 italic line-clamp-1">
                        "{coverage.quote}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Arrow */}
                {coverage.url && (
                  <div className="shrink-0 self-center">
                    <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8D09E]/30 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-[#8C6F3D] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                )}
              </div>
            )

            return coverage.url ? (
              <motion.a
                key={coverage.id}
                href={coverage.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group block bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#E8D09E]/50 hover:shadow-md transition-all duration-300"
              >
                {CardContent}
              </motion.a>
            ) : (
              <motion.div
                key={coverage.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-5 border border-gray-100"
              >
                {CardContent}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}