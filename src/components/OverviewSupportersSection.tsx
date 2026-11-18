import { motion } from 'motion/react'
import { Handshake, Calendar, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react'
import { 
  SupportersData, 
  getSupportersData,
  getSupporterAccentBorder, 
  getSupporterIconStyle,
  getSupporterCategoryLabel,
  type Supporter 
} from '@/data/supporters'
import { useTranslation } from 'react-i18next'

// ============================================================================
// SUPPORTERS SECTION - Detail Version
// ============================================================================
export function SupportersOverviewSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Handshake className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              Mitra Strategis
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Kolaborasi{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              Strategis
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Partnership dengan perusahaan terkemuka yang memperkuat fondasi teknologi, inovasi, dan keamanan sistem kami.
          </p>
        </motion.div>

        {/* Partners List */}
        <div className="space-y-6">
          {SupportersData.map((partner, idx) => {
            const accentBorder = partner.accentBorder || getSupporterAccentBorder(partner.category)
            const iconStyle = partner.iconBg && partner.iconColor 
              ? { bg: partner.iconBg, color: partner.iconColor }
              : getSupporterIconStyle(partner.category)

            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative bg-white rounded-3xl border ${accentBorder} hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-8 md:p-10`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Logo + Basic Info */}
                  <div className="lg:col-span-4">
                    <div className="flex items-start gap-4 mb-6">
                      {/* Logo with fallback */}
                      {partner.logo ? (
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0 bg-white border border-gray-100 overflow-hidden">
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`}
                            className="w-full h-full object-contain p-2"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                              const parent = e.currentTarget.parentElement
                              if (parent) {
                                parent.innerHTML = `<span class="text-white font-extrabold text-2xl">${partner.initial}</span>`
                                parent.className = `w-16 h-16 bg-linear-to-br ${partner.gradient} rounded-2xl flex items-center justify-center`
                              }
                            }}
                          />
                        </div>
                      ) : (
                        <div className={`w-16 h-16 bg-linear-to-br ${partner.gradient} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                          <span className="text-white font-extrabold text-2xl">{partner.initial}</span>
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-[#8C6F3D] uppercase tracking-widest mb-1 block">
                          {partner.tagline}
                        </span>
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                          {partner.name}
                        </h3>
                        {partner.since && (
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Partner sejak {partner.since}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {partner.description && (
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {partner.description}
                      </p>
                    )}

                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C6F3D] hover:text-[#6b5530] transition-colors group/link"
                      >
                        <span>Kunjungi Website</span>
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>

                  {/* Right: Contributions */}
                  {partner.contributions && partner.contributions.length > 0 && (
                    <div className="lg:col-span-8">
                      <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-gray-100">
                        <h4 className="font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          Kontribusi Utama
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {partner.contributions.map((contribution, cIdx) => {
                            const Icon = contribution.icon
                            return (
                              <div 
                                key={cIdx} 
                                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-gray-100 hover:border-[#E8D09E]/40 transition-colors"
                              >
                                {Icon && (
                                  <div className={`w-8 h-8 ${iconStyle.bg} ${iconStyle.color} rounded-lg flex items-center justify-center shrink-0`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <span className="text-sm text-[#1A1A1A] font-semibold block mb-0.5">
                                    {contribution.title}
                                  </span>
                                  {contribution.description && (
                                    <span className="text-xs text-gray-500">
                                      {contribution.description}
                                    </span>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Standar Keamanan Global</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// SUPPORTERS SECTION - Simple Version (Logo + Name Only)
// ============================================================================
export function SupportersSimpleOverviewSection() {
  const { t } = useTranslation('overview')
  const supporters = getSupportersData(t)
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-linear-to-b from-[#E8D09E]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest mb-2">
            {t('supporters.eyebrow')}
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('supporters.title')}
          </h2>
        </motion.div>

        {/* Supporters Grid - Simple Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {supporters.map((supporter, idx) => (
            <motion.a
              key={supporter.id}
              href={supporter.website || '#'}
              target={supporter.website ? '_blank' : undefined}
              rel={supporter.website ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-linear-to-br from-white to-[#FAF8F5] rounded-2xl p-5 border border-gray-100 hover:border-[#E8D09E]/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-linear-to-br ${supporter.gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-500 pointer-events-none`} />

              <div className="relative flex flex-col items-center text-center gap-3">
                {/* Logo with fallback */}
                <div className="relative">
                  {supporter.logo ? (
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0 bg-white border border-gray-100 overflow-hidden">
                      <img 
                        src={supporter.logo} 
                        alt={`${supporter.name} logo`}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const parent = e.currentTarget.parentElement
                          if (parent) {
                            parent.innerHTML = `<span class="text-white font-extrabold text-2xl">${supporter.initial}</span>`
                            parent.className = `w-16 h-16 bg-linear-to-br ${supporter.gradient} rounded-2xl flex items-center justify-center`
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 bg-linear-to-br ${supporter.gradient} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                      <span className="text-white font-extrabold text-2xl">{supporter.initial}</span>
                    </div>
                  )}

                  {/* External Link Indicator */}
                  {supporter.website && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-white border border-gray-200 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <ExternalLink className="w-3 h-3 text-[#8C6F3D]" />
                    </div>
                  )}
                </div>

                {/* Name */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-[#1A1A1A] mb-0.5 truncate group-hover:text-[#8C6F3D] transition-colors">
                    {supporter.name}
                  </h3>
                  <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wide truncate">
                    {supporter.tagline}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer Badge */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5">
            <Handshake className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Berkolaborasi untuk Inovasi & Keamanan</span>
          </p>
        </motion.div> */}
      </div>
    </section>
  )
}

// ============================================================================
// SUPPORTERS SECTION - Ultra Minimal (Logo Grid)
// ============================================================================
export function SupportersMinimalOverviewSection() {
  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest mb-2">
            Didukung Oleh
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
            Mitra Strategis
          </h2>
        </motion.div>

        {/* Logo Grid - Minimal */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          {SupportersData.map((supporter, idx) => (
            <motion.a
              key={supporter.id}
              href={supporter.website || '#'}
              target={supporter.website ? '_blank' : undefined}
              rel={supporter.website ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative flex flex-col items-center gap-2"
              title={`${supporter.name} - ${supporter.tagline}`}
            >
              {/* Logo */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:shadow-lg group-hover:border-[#E8D09E]/50 transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
                {supporter.logo ? (
                  <img 
                    src={supporter.logo} 
                    alt={supporter.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const parent = e.currentTarget.parentElement
                      if (parent) {
                        parent.innerHTML = `<span class="text-white font-extrabold text-3xl">${supporter.initial}</span>`
                        parent.className = `w-full h-full bg-linear-to-br ${supporter.gradient} rounded-2xl flex items-center justify-center`
                      }
                    }}
                  />
                ) : (
                  <div className={`w-full h-full bg-linear-to-br ${supporter.gradient} rounded-2xl flex items-center justify-center`}>
                    <span className="text-white font-extrabold text-3xl">{supporter.initial}</span>
                  </div>
                )}
              </div>

              {/* Name (hidden on mobile, shown on hover) */}
              <span className="text-xs font-bold text-gray-600 group-hover:text-[#8C6F3D] transition-colors hidden md:block">
                {supporter.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}