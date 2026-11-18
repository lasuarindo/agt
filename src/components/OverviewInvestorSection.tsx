import { motion } from 'motion/react'
import { TrendingUp, Award, ArrowRight, Building2 } from 'lucide-react'
import { Link } from 'react-router'
import { 
  getInvestorsData, 
  getInvestorGradient, 
  getInvestorTypeLabel,
  type Investor 
} from '@/data/investors'
import { useTranslation } from 'react-i18next'

// ============================================================================
// INVESTORS SECTION - Adaptive (Placeholder or Real Data)
// ============================================================================
export default function InvestorsOverviewSection() {
  const { t } = useTranslation('overview')
  const investors = getInvestorsData(t)
  const hasInvestors = investors.length > 0
  const placeholderSlots = 6
  
  const renderRestPlacholder = placeholderSlots - investors.length
  
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-linear-to-b from-[#E8D09E]/8 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <TrendingUp className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              {t('investors.badge')}
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
            {hasInvestors 
              ? t('investors.titleWith')
              : t('investors.titleWithout')
            }
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {hasInvestors
              ? t('investors.descWith')
              : t('investors.descWithout')
            }
          </p>
        </motion.div>

        {/* Investors Grid - Conditional Rendering */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {hasInvestors && (
            // REAL DATA MODE
            <>
              {investors.map((investor, idx) => (
                <InvestorCard key={investor.id} investor={investor} idx={idx} />
              ))}
            </>
            )}
          {renderRestPlacholder > 0 && (
            <>
              {Array.from({ length: renderRestPlacholder }).map((_, idx) => (
                <PlaceholderCard key={idx} idx={idx} />
              ))}
            </>
          )}
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8D09E]/30 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#E8D09E]/20 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-[#8C6F3D]" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#1A1A1A]">
                  {hasInvestors ? t('investors.ctaTitleWith') : t('investors.ctaTitleWithout')}
                </p>
                <p className="text-xs text-gray-500">
                  {hasInvestors
                    ? t('investors.ctaDescWith')
                    : t('investors.ctaDescWithout')
                  }
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#8C6F3D] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>{t('investors.ctaButton')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// INVESTOR CARD - Real Data
// ============================================================================
function InvestorCard({ investor, idx }: { investor: Investor; idx: number }) {
  const { t } = useTranslation('overview')
  const gradient = investor.gradient || getInvestorGradient(investor.type)
  const typeLabel = getInvestorTypeLabel(investor.type, t)

  return (
    <motion.a
      key={investor.id}
      href={investor.website || '#'}
      target={investor.website ? '_blank' : undefined}
      rel={investor.website ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="group relative aspect-square bg-white rounded-2xl border border-gray-100 hover:border-[#E8D09E]/50 shadow-sm hover:shadow-lg flex flex-col items-center justify-center p-4 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Hover Glow */}
      <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-500 pointer-events-none`} />

      {/* Logo with fallback */}
      <div className="relative mb-3">
        {investor.logo ? (
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0 bg-white border border-gray-100 overflow-hidden">
            <img 
              src={investor.logo} 
              alt={`${investor.name} logo`}
              className="w-full h-full object-contain p-2"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const parent = e.currentTarget.parentElement
                if (parent) {
                  parent.innerHTML = `<span class="text-white font-extrabold text-2xl">${investor.initial}</span>`
                  parent.className = `w-16 h-16 bg-linear-to-br ${gradient} rounded-2xl flex items-center justify-center`
                }
              }}
            />
          </div>
        ) : (
          <div className={`w-16 h-16 bg-linear-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0`}>
            <span className="text-white font-extrabold text-2xl">{investor.initial}</span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-xs font-bold text-[#1A1A1A] text-center mb-1 truncate w-full group-hover:text-[#8C6F3D] transition-colors">
        {investor.name}
      </h3>

      {/* Type Badge */}
      <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wide text-center">
        {typeLabel}
      </p>

      {/* Investment Stage (if available) */}
      {investor.investmentStage && (
        <div className="mt-2 px-2 py-0.5 bg-[#E8D09E]/20 rounded-full">
          <span className="text-[9px] font-bold text-[#8C6F3D]">
            {investor.investmentStage}
          </span>
        </div>
      )}
    </motion.a>
  )
}

// ============================================================================
// PLACEHOLDER CARD - Coming Soon
// ============================================================================
function PlaceholderCard({ idx }: { idx: number }) {
  const { t } = useTranslation('overview')
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="group relative aspect-square bg-[#FAF8F5] rounded-2xl border-2 border-dashed border-[#E8D09E]/40 hover:border-[#C5A059]/60 flex flex-col items-center justify-center p-4 transition-all duration-300 hover:shadow-md hover:bg-white"
    >
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#E8D09E]/20 transition-colors shadow-sm">
        <TrendingUp className="w-6 h-6 text-[#E8D09E] group-hover:text-[#C5A059] transition-colors" />
      </div>
      
      <p className="text-xs font-semibold text-gray-400 text-center group-hover:text-[#8C6F3D] transition-colors">
        {t('investors.comingSoon')}
      </p>
    </motion.div>
  )
}