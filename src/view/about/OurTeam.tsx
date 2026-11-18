import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router'
import {
  Users,
  Briefcase,
  Award,
  GraduationCap,
  Mail,
  Globe,
  ArrowRight,
  Filter,
  Sparkles,
  Target,
  Heart,
  Zap,
  X,
  User,
  // Linkedin,
  // Twitter
} from 'lucide-react'
import {
  getTeamData,
  getTeamGradient,
  getTeamCategoryLabel,
  getSocialIcon,
  getUniqueDepartments,
  getUniqueCategories,
  type TeamMember,
  type TeamRole
} from '@/data/team'
import AboutJoinUsCTA from '@/components/AboutJoinUs'
import { useTranslation } from 'react-i18next'

const heroImageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" }
}

// Dummy images untuk team members
const dummyImages = [
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
]

// ============================================================================
// TEAM DETAIL MODAL
// ============================================================================
function TeamDetailModal({ 
  member, 
  idx, 
  onClose 
}: { 
  member: TeamMember
  idx: number
  onClose: () => void 
}) {
  const gradient = member.gradient || getTeamGradient(member.category)
  const categoryLabel = getTeamCategoryLabel(member.category)
  const dummyImage = dummyImages[idx % dummyImages.length]
  const { t } = useTranslation('ourteam')

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
        className="relative bg-white shadow-2xl size-full md:rounded-3xl md:max-w-4xl md:w-full md:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header with Photo */}
        <div className={`relative h-64 md:h-80 bg-linear-to-br ${gradient} overflow-hidden flex items-center justify-center`}>
          {member.photo && (
            <img 
              src={member.photo} 
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Name & Role Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              <span className="text-xs font-bold uppercase tracking-wider">
                {categoryLabel}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
              {member.name}
            </h2>
            <p className="text-lg md:text-xl font-semibold text-white/90">
              {member.role}
            </p>
            {member.department && (
              <p className="text-sm text-white/70 mt-1">
                {member.department}
              </p>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Bio */}
          {member.bio && (
            <div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#8C6F3D]" />
                {t('modal.about')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </div>
          )}

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Experience */}
            {member.experience && (
              <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8D09E]/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{t('modal.experience')}</h4>
                    <p className="text-sm text-gray-600">{member.experience}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Education */}
            {member.education && (
              <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8D09E]/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{t('modal.education')}</h4>
                    <p className="text-sm text-gray-600">{member.education}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Join Year */}
            {member.joinYear && (
              <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8D09E]/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] text-sm mb-1">{t('modal.since')}</h4>
                    <p className="text-sm text-gray-600">{member.joinYear}</p>
                  </div>
                </div>
              </div>  
            )}
          </div>

          {/* Expertise */}
          {member.expertise && member.expertise.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#8C6F3D]" />
                {t('modal.expertise')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 bg-[#FAF8F5] border border-[#E8D09E]/30 rounded-full text-sm font-medium text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Social Links */}
          {member.social && member.social.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#8C6F3D]" />
                {t('modal.connections')}
              </h3>
              <div className="flex flex-wrap gap-3">
                {member.social.map((social, socialIdx) => {
                  const Icon = getSocialIcon(social.platform)
                  return (
                    <a
                      key={socialIdx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:border-[#E8D09E]/50 hover:shadow-md transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 text-gray-600 group-hover:text-[#8C6F3D] transition-colors" />
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-[#8C6F3D] transition-colors capitalize">
                        {social.platform}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// HERO SECTION
// ============================================================================
function HeroTeam() {
  const { t } = useTranslation('ourteam')
  const teamData = getTeamData(t)
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
          <Users className="w-4 h-4 text-[#C5A059]" />
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

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">{t('hero.statMembers', { n: teamData.length })}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">{t('hero.statDepartments', { n: getUniqueDepartments(teamData).length })}</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span className="font-semibold">{t('hero.statExperience')}</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// TEAM VALUES SECTION
// ============================================================================
function TeamValuesSection() {
  const { t } = useTranslation('ourteam')
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: t('values.items.0.title'),
      desc: t('values.items.0.desc'),
      gradient: 'from-rose-500/10 to-rose-500/[0.02]',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-600'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('values.items.1.title'),
      desc: t('values.items.1.desc'),
      gradient: 'from-amber-500/10 to-amber-500/[0.02]',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('values.items.2.title'),
      desc: t('values.items.2.desc'),
      gradient: 'from-emerald-500/10 to-emerald-500/[0.02]',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              {t('values.eyebrow')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('values.titlePre')}{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              {t('values.titleHighlight')}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white rounded-3xl border border-gray-100 hover:border-[#E8D09E]/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-8"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className={`w-14 h-14 ${value.iconBg} ${value.iconColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// TEAM FILTER & GRID SECTION
// ============================================================================
function TeamGridSection() {
  const { t } = useTranslation('ourteam')
  const teamData = getTeamData(t)
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedMember, setSelectedMember] = useState<{ member: TeamMember; idx: number } | null>(null)

  const departments = getUniqueDepartments(teamData)
  const categories = getUniqueCategories(teamData)

  const filteredTeam = useMemo(() => {
    return teamData.filter(member => {
      const matchDepartment = selectedDepartment === 'all' || member.department === selectedDepartment
      const matchCategory = selectedCategory === 'all' || member.category === selectedCategory
      return matchDepartment && matchCategory
    })
  }, [teamData, selectedDepartment, selectedCategory])

  return (
    <>
      <motion.section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header - Minimal & Clean */}
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
                  <Users className="w-4 h-4" />
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
                    {filteredTeam.length}
                  </div>
                  <div className="text-xs text-gray-500">{t('grid.resultsLabel')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Filter Bar - Inline & Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              {/* Filter Label */}
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 shrink-0">
                <Filter className="w-4 h-4 text-[#8C6F3D]" />
                <span>{t('grid.filterLabel')}</span>
              </div>

              {/* Filter Controls - Inline Pills */}
              <div className="flex flex-wrap items-center gap-2 flex-1">
                {/* Department Filter */}
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-2 rounded-full border border-gray-200 focus:border-[#8C6F3D] focus:ring-2 focus:ring-[#E8D09E]/50 outline-none transition-all bg-white text-sm font-medium hover:border-[#E8D09E]/50"
                >
                  <option value="all">{t('grid.deptAll')}</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-full border border-gray-200 focus:border-[#8C6F3D] focus:ring-2 focus:ring-[#E8D09E]/50 outline-none transition-all bg-white text-sm font-medium hover:border-[#E8D09E]/50"
                >
                  <option value="all">{t('grid.levelAll')}</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{getTeamCategoryLabel(cat)}</option>
                  ))}
                </select>

                {/* Reset Button */}
                {(selectedDepartment !== 'all' || selectedCategory !== 'all') && (
                  <button
                    onClick={() => {
                      setSelectedDepartment('all')
                      setSelectedCategory('all')
                    }}
                    className="px-4 py-2 rounded-full bg-[#E8D09E]/20 text-[#8C6F3D] text-sm font-bold hover:bg-[#E8D09E]/30 transition-colors"
                  >
                    {t('grid.reset')}
                  </button>
                )}
              </div>
            </div>

            {/* Active Filters Display */}
            {(selectedDepartment !== 'all' || selectedCategory !== 'all') && (
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gray-500">{t('grid.activeLabel')}</span>
                {selectedDepartment !== 'all' && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2.5 py-1 rounded-full">
                    {selectedDepartment}
                    <button
                      onClick={() => setSelectedDepartment('all')}
                      className="hover:text-[#6b5530] ml-0.5"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2.5 py-1 rounded-full">
                    {getTeamCategoryLabel(selectedCategory as TeamRole)}
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className="hover:text-[#6b5530] ml-0.5"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}
          </motion.div>

          {/* Team Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedDepartment}-${selectedCategory}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            >
              {filteredTeam.map((member, idx) => (
                <TeamCard 
                  key={member.id} 
                  member={member} 
                  idx={idx}
                  onClick={() => setSelectedMember({ member, idx })}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredTeam.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-[#FAF8F5] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-[#8C6F3D]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                {t('grid.emptyTitle')}
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                {t('grid.emptyDesc')}
              </p>
              <button
                onClick={() => {
                  setSelectedDepartment('all')
                  setSelectedCategory('all')
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
        {selectedMember && (
          <TeamDetailModal
            member={selectedMember.member}
            idx={selectedMember.idx}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

// ============================================================================
// TEAM CARD - Visual Full Image Style (Clickable)
// ============================================================================
function TeamCard({ 
  member, 
  idx,
  onClick 
}: { 
  member: TeamMember
  idx: number
  onClick: () => void
}) {
  const gradient = member.gradient || getTeamGradient(member.category)
  const dummyImage = dummyImages[idx % dummyImages.length]
  const { t } = useTranslation('ourteam')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-[#FAF8F5] hover:bg-white border border-gray-100 hover:border-[#E8D09E]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
        {member.photo ? (
          <img 
            src={member.photo} 
            alt={member.name}
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
          //   src={dummyImage}
          //   alt={member.name}
          //   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          // />
        )}

        {/* Gradient Overlay on Hover */}
        <div className={`absolute inset-0 bg-linear-to-t ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
        
        {/* View Detail Indicator */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <span className="text-xs font-bold text-[#1A1A1A]">{t('grid.viewDetail')}</span>
          </div>
        </div>
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
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function OurTeamPage() {
  return (
    <>
      <HeroTeam />
      <TeamValuesSection />
      <TeamGridSection />
      <AboutJoinUsCTA variant="about" />
    </>
  )
}