import { motion } from 'motion/react'
import {
  Lightbulb, Users, Globe, Award, Trophy, BadgeCheck, Rocket, Zap, Handshake
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { timelineData } from '@/data/timeline'

export default function DetailedTimelineSection() {
  const { t } = useTranslation('about')
  // const timeline = [
  //   {
  //     year: '2017',
  //     quarter: 'Q2',
  //     title: 'Pendirian Perusahaan',
  //     desc: 'PT. Autentikasi Garda Teknologi resmi didirikan di Bandung oleh tim yang terdiri dari para ahli teknologi dan bisnis dengan visi menjadi pelopor sistem anti-counterfeit di Asia Pasifik.',
  //     icon: <Rocket className="w-5 h-5" />,
  //     highlight: true
  //   }
  // ]
  
  const timeline = timelineData

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
          <p className="text-[#8C6F3D] font-bold tracking-widest uppercase text-xs">{t('timeline.eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('timeline.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('timeline.titleHighlight')}</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('timeline.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-linear-to-b from-[#C5A059] via-[#E8D09E] to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`absolute left-6 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-white border-2 ${
                    item.highlight ? 'border-[#C5A059]' : 'border-[#E8D09E]/50'
                  } rounded-xl flex items-center justify-center ${
                    item.highlight ? 'text-[#8C6F3D]' : 'text-gray-400'
                  } shadow-md z-10 ${item.highlight ? 'scale-110' : ''}`}>
                    <item.icon className='w-5 h-5' />
                  </div>

                  <div className={`pl-20 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className={`bg-white rounded-2xl p-5 border ${
                      item.highlight ? 'border-[#E8D09E]/50 shadow-md' : 'border-gray-100 shadow-sm'
                    } hover:shadow-lg transition-shadow`}>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-extrabold text-[#C5A059] bg-[#E8D09E]/20 px-2.5 py-1 rounded-md tracking-wider">
                          {item.year} {item.quarter}
                        </span>
                        {item.highlight && (
                          <span className="text-[10px] font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {t('timeline.milestone')}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}