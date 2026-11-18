import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { getHQOffice } from '@/data/offices'

export default function OfficeSection() {
  const { t } = useTranslation('about')
  const office = getHQOffice()
  
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
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
              <p className="text-[#8C6F3D] font-bold tracking-widest uppercase text-xs mb-3">{t('office.eyebrow')}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-4">
                {t('office.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('office.titleHighlight')}</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t('office.desc', { city: office.city, country: office.countryName })}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-[#E8D09E]/30 shadow-sm">
                <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{t('office.addressLabel')}</p>
                  <p className="text-sm font-semibold text-[#1A1A1A]">
                    {office.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-[#E8D09E]/30 shadow-sm">
                <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{t('office.phoneLabel')}</p>
                  <a href={office.phoneLink} className="text-sm font-semibold text-[#1A1A1A] hover:text-[#8C6F3D] transition-colors">
                    {office.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-white rounded-2xl border border-[#E8D09E]/30 shadow-sm">
                <div className="w-10 h-10 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{t('office.emailLabel')}</p>
                  <a href={`mailto:${office.email}`} className="text-sm font-semibold text-[#1A1A1A] hover:text-[#8C6F3D] transition-colors">
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-linear-to-br from-[#E8D09E] to-[#C5A059] rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">{t('office.mapTitle')}</p>
                      <p className="text-white font-bold">{office.city}, {office.countryName}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className='h-4'></div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-3">
                      <div className='h-4'></div>
                    </div>
                  </div>
                </div>

                <a
                  href={office.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#C5A059] text-[#1A1A1A] px-6 py-3 rounded-xl font-bold hover:bg-[#E8D09E] transition-all duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{t('office.mapLink')}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}