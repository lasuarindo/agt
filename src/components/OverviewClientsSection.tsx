import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  ShieldCheck,
  Calendar,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router'
import { 
  getClientsData, 
  getClientIcon, 
  getClientGradient,
  getClientBadgeStyle,
  getClientCategoryLabel,
  filterClientsByCategory,
  sortClientsByYear,
  getUniqueClientCategories,
  getClientCategories,
  getClientCategoryById,
  type Client,
  type ClientCategory,
  getClientBgColor
} from '@/data/clients'
import { useTranslation } from 'react-i18next'

// ============================================================================
// CLIENTS SECTION - Stats dihilangkan
// ============================================================================
export default function ClientsOverviewSection() {
  const { t } = useTranslation('overview')
  const [activeFilter, setActiveFilter] = useState<string>('all')
  
  const clients = getClientsData(t)

  // Get unique categories untuk filter pills
  const categories = new Set(getUniqueClientCategories(clients));
  const categoryData = getClientCategories(t).filter(v => v.id === 'all' || categories.has(v.id))
  
  // Filter clients
  const filteredClients = filterClientsByCategory(
    clients, 
    activeFilter as ClientCategory | 'all'
  )
  
  
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-[#E8D09E]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <ShieldCheck className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">{t('clients.badge')}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            {t('clients.titlePre')} <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">{t('clients.titleHighlight')}</span> {t('clients.titlePost')}
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {t('clients.desc')}
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categoryData.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#1A1A1A] text-white shadow-md'
                  : 'bg-[#FAF8F5] text-gray-600 hover:bg-[#E8D09E]/20 hover:text-[#8C6F3D]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Clients Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="wait">
            {filteredClients.map((client, idx) => (
              <motion.div
                key={client.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="group relative bg-linear-to-br from-[#FAF8F5] to-white rounded-2xl p-5 border border-gray-100 hover:border-[#E8D09E]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div 
                    className="w-12 h-12 bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] overflow-hidden rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        className="w-full h-full object-contain"
                        ></img>
                    ) : (
                      <span className="text-[#E8D09E] font-extrabold text-lg">{client.name.charAt(0)}</span>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#1A1A1A] text-base mb-1 truncate group-hover:text-[#8C6F3D] transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{client.industry}</p>
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span className="font-semibold">{t('clients.since')} {client.since}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 mb-4">
          {t('clients.ctaDesc')}
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#8C6F3D] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>{t('clients.ctaButton')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}