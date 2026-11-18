import { Link } from 'react-router'
import { motion } from 'motion/react'
import {
  CheckCircle2, ArrowRight, Package, Tag, Sparkles, Nfc, Printer
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ServicesSection() {
  const { t } = useTranslation('home')

  // Layanan aktif
  const activeServices = [
    {
      id: 'hologram',
      icon: <Sparkles className="w-7 h-7" />,
      title: t('servicesSection.svc1Title'),
      subtitle: t('servicesSection.svc1Subtitle'),
      desc: t('servicesSection.svc1Desc'),
      highlights: [
        { label: "Lapisan Keamanan", value: "Ganda" },
        { label: "Tingkat Kesulitan Palsu", value: "Sangat Tinggi" }
      ],
      industries: ["Farmasi", "Kosmetik", "Elektronik", "Minuman Keras"],
      gradient: "from-[#8C6F3D]/10 to-[#E8D09E]/5",
      iconBg: "bg-[#E8D09E]/30",
      iconColor: "text-[#8C6F3D]",
      accentBorder: "border-[#E8D09E]/40",
      size: "large",
      status: "active"
    },
    {
      id: 'tafeta',
      icon: <Tag className="w-6 h-6" />,
      title: t('servicesSection.svc2Title'),
      subtitle: t('servicesSection.svc2Subtitle'),
      desc: t('servicesSection.svc2Desc'),
      highlights: [
        { label: "Material", value: "Premium" },
        { label: "Industri", value: "Fashion & Tekstil" }
      ],
      industries: ["Fashion", "Apparel", "Footwear", "Accessories"],
      gradient: "from-[#C5A059]/10 to-[#E8D09E]/5",
      iconBg: "bg-[#E8D09E]/30",
      iconColor: "text-[#8C6F3D]",
      accentBorder: "border-[#E8D09E]/40",
      size: "large",
      status: "active"
    }
  ]

  // Layanan dalam pengembangan
  const upcomingServices = [
    {
      id: 'nfc',
      icon: <Nfc className="w-6 h-6" />,
      title: t('servicesSection.svc3Title'),
      subtitle: t('servicesSection.svc3Subtitle'),
      desc: t('servicesSection.svc3Desc'),
      industries: ["Luxury Goods", "Premium Brand", "Spirits", "Electronics"],
      status: "coming-soon",
      note: "Masih dalam tahap penelitian & perencanaan"
    },
    {
      id: 'printing',
      icon: <Printer className="w-6 h-6" />,
      title: t('servicesSection.svc4Title'),
      subtitle: t('servicesSection.svc4Subtitle'),
      desc: t('servicesSection.svc4Desc'),
      industries: ["FMCG", "Makanan", "Minuman", "Household"],
      status: "coming-soon",
      note: "Dalam tahap penyesuaian infrastruktur"
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Package className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('servicesSection.eyebrow')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('servicesSection.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('servicesSection.titleHighlight')}</span> {t('servicesSection.titlePost')}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            {t('servicesSection.subtitle')}
          </p>
        </motion.div>

        {/* Active Services - 2 Layanan Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {activeServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Card yang clickable - dibungkus Link */}
              <Link
                to={`/services#${service.id}`}
                className={`block bg-white rounded-3xl border ${service.accentBorder} hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-8 md:p-10`}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 ${service.iconBg} ${service.iconColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                        {service.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#8C6F3D] uppercase tracking-widest mb-1 block">
                          {service.subtitle}
                        </span>
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#8C6F3D] transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center gap-1.5 bg-[#E8D09E]/20 text-[#8C6F3D] px-3 py-1.5 rounded-full text-xs font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{t('servicesSection.available')}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 text-base">
                    {service.desc}
                  </p>

                  {service.highlights && (
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
                      {service.highlights.map((stat, sIdx) => (
                        <div key={sIdx} className="text-center">
                          <p className="text-2xl font-extrabold text-[#1A1A1A] mb-1">{stat.value}</p>
                          <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {service.industries && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((industry, iIdx) => (
                          <span
                            key={iIdx}
                            className="text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full group-hover:bg-[#E8D09E]/20 group-hover:text-[#8C6F3D] transition-colors"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Link - Lebih jelas sebagai ajakan klik */}
                  <div className="inline-flex items-center gap-2 text-[#8C6F3D] font-bold text-sm group-hover:gap-3 transition-all">
                    <span>{t('servicesSection.viewDetail')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 mb-6 max-w-xl mx-auto">
            {t('servicesSection.ctaDesc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* Secondary CTA - Eksplorasi Layanan */}
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#1A1A1A] px-6 py-3 rounded-xl font-bold hover:border-[#C5A059]/60 hover:bg-[#FAF8F5] transition-all duration-300 shadow-sm"
            >
              <Package className="w-4 h-4 text-[#8C6F3D]" />
              <span>{t('servicesSection.ctaSecondary')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {/* Primary CTA - Konsultasi */}
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#8C6F3D] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>{t('servicesSection.ctaPrimary')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}