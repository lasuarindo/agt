import { useMemo } from 'react'
import { motion } from 'motion/react'
import { Shield, Calendar, Database, AlertTriangle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import CountUp from '@/vendor/react-countup'
import { compactParts } from '@/utils/number'

export default function StatsSection() {
  const { t } = useTranslation('home')
  const stats = useMemo(() => {
    const rawStats = [
      { value: 100, suffix: 'M', label: t('statsSection.stat1Label'), icon: <Database className="w-6 h-6" />, desc: t('statsSection.stat1Desc') },
      { value: 5, suffix: '', label: t('statsSection.stat2Label'), icon: <Shield className="w-6 h-6" />, desc: t('statsSection.stat2Desc') },
      { value: 15, suffix: 'x', label: t('statsSection.stat3Label'), icon: <AlertTriangle className="w-6 h-6" />, desc: t('statsSection.stat3Desc') },
      { value: 8, suffix: '+', label: t('statsSection.stat4Label'), icon: <Calendar className="w-6 h-6" />, desc: t('statsSection.stat4Desc') }
    ];
    return rawStats.map(v => {
      if (v.value > 999) {
        const part = compactParts(v.value);
        return {
          ...v,
          value: part.value,
          suffix: `${part.compact}${v.suffix}`,
          decimal: +!Number.isInteger(v.value)
        }
      }
      return { ...v, decimal: +!Number.isInteger(v.value) }
    })
  }, [t]);

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <p className="text-[#E8D09E] font-bold tracking-widest uppercase text-xs">{t('statsSection.eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('statsSection.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E8D09E] to-[#C5A059]">{t('statsSection.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t('statsSection.subtitle')}
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
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-[#E8D09E]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-[#E8D09E]/20 text-[#E8D09E] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                <CountUp start={0} end={stat.value} suffix={stat.suffix} decimals={stat.decimal} />
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