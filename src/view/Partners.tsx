import { useState } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  Shield,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Globe,
  Users,
  Building2,
  Sparkles,
  Calendar,
  TrendingUp,
  Award,
  Handshake,
  Lightbulb,
  Rocket,
  Target,
  Eye,
  Heart,
  Zap,
  Lock,
  Package,
  Tag,
  Layers,
  QrCode,
  Fingerprint,
  Smartphone,
  BarChart3,
  Database,
  Code2,
  Activity,
  Bell,
  FileCheck,
  Search,
  Trophy,
  BadgeCheck,
  Star,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react'

import { logodev } from '@/utils/image'
import AboutJoinUsCTA from '@/components/AboutJoinUs'
import { SupportersSimpleOverviewSection } from '@/components/OverviewSupportersSection'
import { MediaCoverageSimpleOverviewSection } from '@/components/OverviewMediaCoverageSection'

import { 
  ClientsData, 
  getClientIcon, 
  getClientGradient,
  getClientBadgeStyle,
  getClientCategoryLabel,
  filterClientsByCategory,
  sortClientsByYear,
  getUniqueClientCategories,
  ClientCategoryData,
  getClientCategoryById,
  type Client,
  type ClientCategory
} from '@/data/clients'

// ============================================================================
// HERO PARTNER SECTION
// ============================================================================
function HeroPartner() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F5EFE6] to-[#E8D09E]/20" />
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
          <Handshake className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Ekosistem Partner</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6"
        >
          Bersama Membangun <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] via-[#C5A059] to-[#8C6F3D]">
            Ekosistem Aman
          </span>
          <br className="hidden md:block" />
          di Asia Pasifik
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8"
        >
          Kami berkolaborasi dengan berbagai pihak strategis, brand terkemuka, dan investor visioner untuk menciptakan ekosistem autentikasi yang komprehensif dan berkelanjutan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-600"
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">3 Mitra Strategis</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">500+ Brand Partner</span>
          </span>
          <span className="hidden md:inline w-1 h-1 bg-gray-300 rounded-full" />
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#8C6F3D]" />
            <span className="font-semibold">15+ Industri</span>
          </span>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// CLIENTS SECTION
// ============================================================================
// function ClientsSection() {
//   const [activeFilter, setActiveFilter] = useState<string>('all')
  
//   // Get unique categories untuk filter pills
//   const categories = new Set(getUniqueClientCategories(ClientsData));
//   const categoryData = ClientCategoryData.filter(v => v.id === 'all' || categories.has(v.id))
  
//   // Filter clients
//   const filteredClients = filterClientsByCategory(
//     ClientsData, 
//     activeFilter as ClientCategory | 'all'
//   )

//   return (
//     <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#E8D09E]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto px-4 md:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 space-y-4"
//         >
//           <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
//             <ShieldCheck className="w-4 h-4 text-[#8C6F3D]" />
//             <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Brand Partner</span>
//           </div>
          
//           <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
//             500+ Brand yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059]">Percaya</span>
//           </h2>
//           <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
//             Brand-brand terkemuka dari berbagai industri telah mengimplementasikan teknologi autentikasi AuthenticGuards.
//           </p>
//         </motion.div>

//         {/* Filter Pills */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-2 mb-10"
//         >
//           {categoryData.map((filter) => (
//             <button
//               key={filter.id}
//               onClick={() => setActiveFilter(filter.id)}
//               className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
//                 activeFilter === filter.id
//                   ? 'bg-[#1A1A1A] text-white shadow-md'
//                   : 'bg-[#FAF8F5] text-gray-600 hover:bg-[#E8D09E]/20 hover:text-[#8C6F3D]'
//               }`}
//             >
//               {filter.label}
//             </button>
//           ))}
//         </motion.div>

//         {/* Clients Grid */}
//         <motion.div 
//           layout
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
//         >
//           <AnimatePresence mode="wait">
//             {/* {filteredClients.map((client, idx) => ( */}
//             {filteredClients.map((client, idx) => (
//               <motion.div
//                 key={client.name}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.3, delay: idx * 0.05 }}
//                 className="group relative bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#E8D09E]/50 hover:shadow-lg transition-all duration-300"
//               >
//                 <div className="flex items-start gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
//                     <span className="text-[#E8D09E] font-extrabold text-lg">{client.name.charAt(0)}</span>
//                   </div>
                  
//                   <div className="flex-1 min-w-0">
//                     <h3 className="font-bold text-[#1A1A1A] text-base mb-1 truncate group-hover:text-[#8C6F3D] transition-colors">
//                       {client.name}
//                     </h3>
//                     <p className="text-xs text-gray-500 mb-2">{client.industry}</p>
//                     <div className="flex items-center gap-3 text-[10px] text-gray-400">
//                       <div className="flex items-center gap-1">
//                         <Calendar className="w-3 h-3" />
//                         <span className="font-semibold">Sejak {client.since}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Package className="w-3 h-3" />
//                         <span className="font-semibold">{client.products}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <CheckCircle2 className="w-4 h-4 text-emerald-500" />
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Stats Summary */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
//         >
//           {[
//             { value: '500+', label: 'Total Brand' },
//             { value: '15+', label: 'Industri' },
//             { value: '8+', label: 'Tahun Kerjasama' },
//             { value: '99%', label: 'Kepuasan Klien' }
//           ].map((stat, idx) => (
//             <div key={idx} className="text-center p-4 bg-white rounded-xl border border-gray-100">
//               <p className="text-2xl font-extrabold text-[#1A1A1A] mb-1">{stat.value}</p>
//               <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }

function ClientsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  
  // Get unique categories untuk filter pills
  const categories = new Set(getUniqueClientCategories(ClientsData));
  const categoryData = ClientCategoryData.filter(v => v.id === 'all' || categories.has(v.id))
  
  // Filter clients
  const filteredClients = filterClientsByCategory(
    ClientsData, 
    activeFilter as ClientCategory | 'all'
  )

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#E8D09E]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <ShieldCheck className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Brand Partner</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            500+ Brand yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059]">Percaya</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Brand-brand terkemuka dari berbagai industri telah mengimplementasikan teknologi autentikasi AuthenticGuards.
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
                key={client.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#E8D09E]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#E8D09E] font-extrabold text-lg">{client.name.charAt(0)}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#1A1A1A] text-base mb-1 truncate group-hover:text-[#8C6F3D] transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{client.industry}</p>
                    <div className="flex items-center gap-3 text-[10px] text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span className="font-semibold">Sejak {client.since}</span>
                      </div>
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

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '500+', label: 'Total Brand' },
            { value: '15+', label: 'Industri' },
            { value: '8+', label: 'Tahun Kerjasama' },
            { value: '99%', label: 'Kepuasan Klien' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white rounded-xl border border-gray-100">
              <p className="text-2xl font-extrabold text-[#1A1A1A] mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA - Lihat Semua Client */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Link
            to="/partners/our-client"
            className="group relative block bg-gradient-to-br from-[#FAF8F5] via-white to-[#FAF8F5] rounded-3xl p-8 md:p-10 border border-[#E8D09E]/30 hover:border-[#C5A059]/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#C5A059]/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-[#C5A059]/20 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#E8D09E]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Left: Icon & Stats */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#C5A059] to-[#8C6F3D] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white border-2 border-[#C5A059] rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059] mb-1">
                    500+
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    Brand Partner
                  </div>
                </div>
              </div>

              {/* Middle: Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#8C6F3D] transition-colors">
                  Jelajahi Lebih Banyak Brand Partner Kami
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Temukan cerita sukses dari ratusan brand yang telah mempercayakan perlindungan produk mereka kepada AuthenticGuards. Lihat daftar lengkap klien kami dari berbagai industri.
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
                <div className="text-2xl font-extrabold text-[#8C6F3D]">500+</div>
                <div className="text-xs text-gray-500">Brand</div>
              </div>
              <div className="w-px h-8 bg-[#E8D09E]/30" />
              <div className="text-center">
                <div className="text-2xl font-extrabold text-[#8C6F3D]">15+</div>
                <div className="text-xs text-gray-500">Industri</div>
              </div>
              <div className="w-px h-8 bg-[#E8D09E]/30" />
              <div className="text-center">
                <div className="text-2xl font-extrabold text-[#8C6F3D]">8+</div>
                <div className="text-xs text-gray-500">Tahun</div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// INVESTORS SECTION
// ============================================================================
function InvestorsSection() {
  const investorSlots = [1, 2, 3, 4, 5, 6]

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#E8D09E]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <TrendingUp className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Investor & Backer</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Didukung oleh <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6F3D] to-[#C5A059]">Investor</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Kami bangga didukung oleh para investor dan backer yang percaya pada visi kami untuk merevolusi industri anti-counterfeit di Asia Pasifik.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {investorSlots.map((slot, idx) => (
            <motion.div
              key={slot}
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
                Coming Soon
              </p>
            </motion.div>
          ))}
        </div>

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
                <p className="text-sm font-bold text-[#1A1A1A]">Tertarik Berinvestasi?</p>
                <p className="text-xs text-gray-500">Bergabunglah dalam perjalanan kami merevolusi industri anti-counterfeit</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#8C6F3D] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Hubungi Tim Kami</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============================================================================
// BECOME A PARTNER CTA
// ============================================================================
// function AboutJoinUsCTA() {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A1A1A] to-[#2a2a2a] relative overflow-hidden">
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full">
//             <Handshake className="w-4 h-4 text-[#E8D09E]" />
//             <span className="text-xs font-bold text-[#E8D09E] tracking-wider uppercase">Bergabung Bersama Kami</span>
//           </div>

//           <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
//             Siap Menjadi Bagian dari <br className="hidden md:block" />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8D09E] to-[#C5A059]">
//               Ekosistem Kami?
//             </span>
//           </h2>

//           <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
//             Baik sebagai mitra strategis, brand partner, atau investor, kami selalu terbuka untuk kolaborasi yang saling menguntungkan.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
//             <Link
//               to="/contact"
//               className="group inline-flex items-center justify-center gap-3 bg-[#C5A059] text-[#1A1A1A] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#E8D09E] transition-all duration-300 shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5"
//             >
//               <span>Hubungi Tim Kami</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <Link
//               to="/services"
//               className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
//             >
//               <ShieldCheck className="w-5 h-5" />
//               <span>Lihat Layanan</span>
//             </Link>
//           </div>

//           <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 text-xs text-gray-400">
//             <span className="flex items-center gap-1.5">
//               <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
//               Konsultasi Gratis
//             </span>
//             <span className="flex items-center gap-1.5">
//               <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
//               Custom Solution
//             </span>
//             <span className="flex items-center gap-1.5">
//               <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
//               Dukungan 24/7
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function PartnersPage() {
  return (
    <>
      <HeroPartner />
      <SupportersSimpleOverviewSection />
      <ClientsSection />
      <InvestorsSection />
      <MediaCoverageSimpleOverviewSection />
      <AboutJoinUsCTA />
    </>
  )
}