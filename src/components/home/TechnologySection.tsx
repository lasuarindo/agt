import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  ArrowRight, Sparkles, Lock, BadgeCheck, Server, Database, Hash, AlertTriangle, ShieldAlert
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function TechnologySection() {
  const { t } = useTranslation('home')

  const features = [
    {
      id: 'server-security',
      icon: <Server className="w-7 h-7" />,
      title: t('technologySection.feat1Title'),
      subtitle: t('technologySection.feat1Subtitle'),
      desc: t('technologySection.feat1Desc'),
      highlights: [
        { label: t('technologySection.feat1Hl1Label'), value: t('technologySection.feat1Hl1Value') },
        { label: t('technologySection.feat1Hl2Label'), value: t('technologySection.feat1Hl2Value') }
      ],
      gradient: "from-[#8C6F3D]/10 to-[#C5A059]/5",
      iconBg: "bg-[#E8D09E]/40",
      iconColor: "text-[#8C6F3D]",
      accentBorder: "border-[#E8D09E]/40",
      size: "large"
    },
    {
      id: 'ag-algorithm',
      icon: <Hash className="w-6 h-6" />,
      title: t('technologySection.feat2Title'),
      subtitle: t('technologySection.feat2Subtitle'),
      desc: t('technologySection.feat2Desc'),
      gradient: "from-[#C5A059]/15 to-[#E8D09E]/5",
      iconBg: "bg-[#C5A059]/20",
      iconColor: "text-[#6b5530]",
      accentBorder: "border-[#C5A059]/30",
      size: "small"
    },
    {
      id: 'md5-hash',
      icon: <Lock className="w-6 h-6" />,
      title: t('technologySection.feat3Title'),
      subtitle: t('technologySection.feat3Subtitle'),
      desc: t('technologySection.feat3Desc'),
      gradient: "from-[#6b5530]/10 to-[#8C6F3D]/5",
      iconBg: "bg-[#8C6F3D]/20",
      iconColor: "text-[#5a4a2a]",
      accentBorder: "border-[#8C6F3D]/30",
      size: "small"
    },
    {
      id: 'verification-limit',
      icon: <AlertTriangle className="w-6 h-6" />,
      title: t('technologySection.feat4Title'),
      subtitle: t('technologySection.feat4Subtitle'),
      desc: t('technologySection.feat4Desc'),
      gradient: "from-[#5a4a2a]/10 to-[#6b5530]/5",
      iconBg: "bg-[#6b5530]/20",
      iconColor: "text-[#5a4a2a]",
      accentBorder: "border-[#6b5530]/30",
      size: "small"
    },
    {
      id: 'tamper-evident',
      icon: <ShieldAlert className="w-6 h-6" />,
      title: t('technologySection.feat5Title'),
      subtitle: t('technologySection.feat5Subtitle'),
      desc: t('technologySection.feat5Desc'),
      gradient: "from-[#E8D09E]/30 to-[#FAF8F5]",
      iconBg: "bg-[#E8D09E]/50",
      iconColor: "text-[#8C6F3D]",
      accentBorder: "border-[#E8D09E]/60",
      size: "small"
    },
    {
      id: 'iso-standard',
      icon: <BadgeCheck className="w-7 h-7" />,
      title: t('technologySection.feat6Title'),
      subtitle: t('technologySection.feat6Subtitle'),
      desc: t('technologySection.feat6Desc'),
      highlights: [
        { label: t('technologySection.feat6Hl1Label'), value: t('technologySection.feat6Hl1Value') },
        { label: t('technologySection.feat6Hl2Label'), value: t('technologySection.feat6Hl2Value') }
      ],
      gradient: "from-[#C5A059]/10 to-[#E8D09E]/5",
      iconBg: "bg-[#E8D09E]/30",
      iconColor: "text-[#8C6F3D]",
      accentBorder: "border-[#E8D09E]/40",
      size: "large"
    }
  ]

  return (
    <section id="technology" className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Server className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('technologySection.eyebrow')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('technologySection.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('technologySection.titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('technologySection.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, idx) => {
            const isLarge = feature.size === 'large'

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative bg-white rounded-3xl border ${feature.accentBorder} hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isLarge ? 'md:col-span-2 p-8 md:p-10' : 'p-6 md:p-8'
                }`}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 ${feature.iconBg} ${feature.iconColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                        {feature.icon}
                      </div>
                      <div>
                        {'subtitle' in feature && feature.subtitle && (
                          <span className="text-[10px] font-bold text-[#8C6F3D] uppercase tracking-widest mb-1 block">
                            {feature.subtitle}
                          </span>
                        )}
                        <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-bold text-[#1A1A1A] mb-2`}>
                          {feature.title}
                        </h3>
                      </div>
                    </div>

                    {isLarge && (
                      <div className="hidden md:flex items-center gap-1.5 bg-[#E8D09E]/20 text-[#8C6F3D] px-3 py-1.5 rounded-full text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{t('technologySection.featured')}</span>
                      </div>
                    )}
                  </div>

                  <p className={`text-gray-600 leading-relaxed mb-6 ${isLarge ? 'text-base' : 'text-sm'}`}>
                    {feature.desc}
                  </p>

                  {'highlights' in feature && feature.highlights && isLarge && (
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
                      {feature.highlights.map((stat, sIdx) => (
                        <div key={sIdx} className="text-center">
                          <p className="text-2xl font-extrabold text-[#1A1A1A] mb-1">{stat.value}</p>
                          <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    to="/technology"
                    className="inline-flex items-center gap-2 text-[#8C6F3D] font-bold text-sm hover:text-[#6b5530] transition-colors group/link"
                  >
                    <span>{t('technologySection.learnMore')}</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}