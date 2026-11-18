import { motion } from 'motion/react'
import { Users, Sparkles, ArrowUpRight, User } from 'lucide-react'
import { Link } from 'react-router'
import { 
  TeamData, 
  getTeamGradient, 
  getFeaturedTeam,
  type TeamMember 
} from '@/data/team'
import { useTranslation } from 'react-i18next'

// ============================================================================
// TEAM OVERVIEW SECTION - Visual Card Grid
// ============================================================================
export function TeamOverviewSection() {
  const { t } = useTranslation('overview')
  const featuredTeam = getFeaturedTeam(TeamData)
  const totalTeam = TeamData.length

  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Users className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              {t('team.badge')}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('team.titlePre')}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              {t('team.titleHighlight')}
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </motion.div>

        {/* Team Grid - Visual Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {featuredTeam.map((member, idx) => {
            const gradient = member.gradient || getTeamGradient(member.category)

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-[#FAF8F5] hover:bg-white border border-gray-100 hover:border-[#E8D09E]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
                  {member.photo ? (
                    <img 
                      src={member.photo} 
                      alt={`${member.name} Photo`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.classList.add('bg-linear-to-br', ...gradient.split(' '))
                          parent.innerHTML = `<span class="text-5xl font-extrabold text-white">${member.initial}</span>`
                        }
                      }}
                    />
                  ) : (
                    <User size={48} color="gray" className="group-hover:scale-105 transition-transform duration-500" />
                    // <img 
                    //   src={`https://images.unsplash.com/photo-${idx === 0 ? '1560250097-0b93528c311a' : idx === 1 ? '1573496359142-b8d87734a5a2' : idx === 2 ? '1472099645785-5658abf4ff4e' : '1580489944761-15a19d654956'}?auto=format&fit=crop&w=400&q=80`}
                    //   alt={member.name}
                    //   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    // />
                  )}

                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-linear-to-t ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>

                {/* Info - Compact */}
                <div className="p-4 text-center">
                  <h3 className="text-sm md:text-base font-bold text-[#1A1A1A] mb-0.5 truncate">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm font-medium text-[#8C6F3D] truncate">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Modern CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link
            to="/about/our-team"
            className="group relative block bg-linear-to-br from-[#FAF8F5] via-white to-[#FAF8F5] rounded-3xl p-8 md:p-10 border border-[#E8D09E]/30 hover:border-[#C5A059]/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#C5A059]/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-[#C5A059]/20 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-[#E8D09E]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Left: Icon & Stats */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="relative">
                  <div className="w-16 h-16 bg-linear-to-br from-[#C5A059] to-[#8C6F3D] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white border-2 border-[#C5A059] rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059] mb-1">
                    {totalTeam}+
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {t('team.statLabel')}
                  </div>
                </div>
              </div>

              {/* Middle: Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#8C6F3D] transition-colors">
                  {t('team.ctaTitle')}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t('team.ctaDesc')}
                </p>
              </div>

              {/* Right: Arrow Indicator */}
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#1A1A1A] group-hover:bg-[#C5A059] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* Bottom Stats (Mobile) */}
            <div className="md:hidden mt-6 pt-6 border-t border-[#E8D09E]/20 flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-[#8C6F3D]">{totalTeam}+</div>
                <div className="text-xs text-gray-500">{t('team.mobileTeam')}</div>
              </div>
              <div className="w-px h-8 bg-[#E8D09E]/30" />
              <div className="text-center">
                <div className="text-2xl font-extrabold text-[#8C6F3D]">6</div>
                <div className="text-xs text-gray-500">{t('team.mobileDepartments')}</div>
              </div>
              <div className="w-px h-8 bg-[#E8D09E]/30" />
              <div className="text-center">
                <div className="text-2xl font-extrabold text-[#8C6F3D]">5</div>
                <div className="text-xs text-gray-500">{t('team.mobileCountries')}</div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}