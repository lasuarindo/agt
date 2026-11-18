import { motion } from 'motion/react'
import { Shield, Award, Rocket, Quote, Database } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'

export default function OurStorySection() {
  const { t } = useTranslation('about')

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-[#8C6F3D] font-bold tracking-widest uppercase text-xs mb-3">{t('story.eyebrow')}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-4">
                {t('story.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('story.titleHighlight')}</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {t('story.p1')}
              </p>
              <p>
                <Trans i18nKey="story.p2" ns="about" components={{ strong: <strong className="text-[#1A1A1A]" />, em: <em /> }} />
              </p>
              <p>
                <Trans i18nKey="story.p3" ns="about" components={{ strong: <strong className="text-[#1A1A1A]" /> }} />
              </p>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-3 bg-[#FAF8F5] border border-[#E8D09E]/40 rounded-2xl p-4">
                <Quote className="w-8 h-8 text-[#C5A059] shrink-0" />
                <p className="text-sm italic text-gray-700">
                  {t('story.quote')}
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-2 ml-12">
                — <strong>{t('story.quoteAuthor')}</strong>, {t('story.quoteRole')}
              </p>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-6 text-white shadow-xl">
                  <Rocket className="w-8 h-8 text-[#E8D09E] mb-3" />
                  <p className="text-3xl font-extrabold mb-1">2017</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{t('story.statYearLabel')}</p>
                </div>
                <div className="bg-white border border-[#E8D09E]/30 rounded-3xl p-6 shadow-sm">
                  <Database className="w-8 h-8 text-[#8C6F3D] mb-3" />
                  <p className="text-3xl font-extrabold text-[#1A1A1A] mb-1">100M</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t('story.statCodeLabel')}</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white border border-[#E8D09E]/30 rounded-3xl p-6 shadow-sm">
                  <Shield className="w-8 h-8 text-[#8C6F3D] mb-3" />
                  <p className="text-3xl font-extrabold text-[#1A1A1A] mb-1">5</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t('story.statLayerLabel')}</p>
                </div>
                <div className="bg-linear-to-br from-[#C5A059] to-[#8C6F3D] rounded-3xl p-6 text-white shadow-xl">
                  <Award className="w-8 h-8 text-white mb-3" />
                  <p className="text-3xl font-extrabold mb-1">Top 100</p>
                  <p className="text-xs text-white/80 uppercase tracking-wider">{t('story.statTopLabel')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}