// import { AwardsData, getAwardIcon } from '@/data/award';
// import { motion } from 'motion/react';
// import { Trophy } from 'lucide-react';

// export default function AwardsCertificationsSection() {
//   return (
//     <section className="py-16 md:py-24 bg-white relative overflow-hidden">
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-[#E8D09E]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
//       <div className="relative max-w-7xl mx-auto px-4 md:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 space-y-3"
//         >
//           <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
//             <Trophy className="w-4 h-4 text-[#8C6F3D]" />
//             <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Penghargaan & Sertifikasi</span>
//           </div>
          
//           <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
//             Diakui oleh <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">Industri</span>
//           </h2>
//           <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
//             Berbagai penghargaan dan sertifikasi yang kami terima sebagai komitmen terhadap inovasi dan kualitas layanan.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {AwardsData.map((award, idx) => (
//             <motion.div
//               key={award.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               // transition={{ duration: 0.5 }}
//               transition={{ duration: 0.5, delay: idx * 0.08 }}
//               className="group relative bg-linear-to-br from-[#FAF8F5] to-white rounded-2xl p-6 border border-gray-100 hover:border-[#E8D09E]/50 hover:shadow-lg transition-all duration-300"
//             >
//               <div className="flex items-start gap-4">
//                 <div className={`w-14 h-14 bg-linear-to-br ${award.gradient} rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
//                   <award.icon />
//                 </div>
                
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-2 mb-1.5">
//                     <span className="text-xs font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2 py-0.5 rounded">
//                       {award.year}
//                     </span>
//                   </div>
                  
//                   <h3 className="font-bold text-[#1A1A1A] text-base mb-1 group-hover:text-[#8C6F3D] transition-colors">
//                     {award.title}
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     {award.organizer}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import { motion } from 'motion/react'
import { Link } from 'react-router'
import { Trophy, Star, Award as AwardIcon, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react'
import { AwardsData, getAwardIcon, type Award } from '@/data/award'

// ============================================================================
// AWARDS & CERTIFICATIONS SECTION
// ============================================================================
export default function AwardsCertificationsOverviewSection({ navigateDetail = false }: { navigateDetail?: boolean }) {
  // Pisahkan featured dan regular awards
  const featuredAwards = AwardsData.filter(a => a.featured)
  const regularAwards = AwardsData.filter(a => !a.featured)
  const mainFeatured = featuredAwards[0] // Hero card
  
  // Featured sisanya digabung dengan regular awards
  const remainingFeatured = featuredAwards.slice(1)
  const allRegularAwards = [...remainingFeatured, ...regularAwards]

  // Stats calculation
  const uniqueYears = [...new Set(AwardsData.map(a => a.year))].length
  const firstYear = AwardsData.map(a => parseInt(a.year)).sort((a, b) => a - b)[0]
  const currentYear = new Date().getFullYear()
  const yearsOfExcellence = currentYear - firstYear + 1

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-[#E8D09E]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* ================================================================== */}
        {/* HEADER */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Trophy className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">
              Penghargaan & Sertifikasi
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Diakui oleh{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
              Industri
            </span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Berbagai penghargaan dan sertifikasi yang kami terima sebagai komitmen terhadap inovasi dan kualitas layanan.
          </p>
        </motion.div>

        {/* ================================================================== */}
        {/* FEATURED HERO CARD */}
        {/* ================================================================== */}
        {mainFeatured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            {/* Wrap dengan Link jika navigateDetail aktif */}
            {navigateDetail ? (
              <Link to="/about/awards" className="block group">
                <HeroCardContent mainFeatured={mainFeatured} />
              </Link>
            ) : (
              <div className="group">
                <HeroCardContent mainFeatured={mainFeatured} />
              </div>
            )}
          </motion.div>
        )}

        {/* ================================================================== */}
        {/* REGULAR AWARDS GRID (Termasuk Featured Sisanya) */}
        {/* ================================================================== */}
        {allRegularAwards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
            {allRegularAwards.map((award, idx) => {
              const Icon = award.icon || getAwardIcon(award.category)
              const isFeatured = award.featured
              
              return (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                    isFeatured
                      ? 'bg-linear-to-br from-[#FAF8F5] to-white border-[#E8D09E]/50 hover:border-[#C5A059]/60 hover:shadow-xl shadow-md'
                      : 'bg-linear-to-br from-[#FAF8F5] to-white border-gray-100 hover:border-[#E8D09E]/50 hover:shadow-xl'
                  }`}
                >
                  {/* Featured Glow Effect */}
                  {isFeatured && (
                    <div className="absolute inset-0 bg-linear-to-br from-[#C5A059]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  )}

                  {/* Hover Glow untuk semua */}
                  <div className={`absolute inset-0 bg-linear-to-br ${award.gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className="shrink-0">
                      <div className={`relative w-14 h-14 bg-linear-to-br ${award.gradient} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-6 h-6" />
                        {/* Featured Star Badge */}
                        {isFeatured && (
                          <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                            <Star className="w-3 h-3 text-white fill-current" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Badges Row */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-bold text-[#8C6F3D] bg-[#E8D09E]/20 px-2 py-0.5 rounded">
                          {award.year}
                        </span>
                        {award.category && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            {award.category}
                          </span>
                        )}
                        {/* Featured Tag */}
                        {isFeatured && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-linear-to-r from-amber-100 to-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            <Star className="w-2.5 h-2.5 fill-current" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className={`font-bold text-base mb-1 leading-snug transition-colors ${
                        isFeatured 
                          ? 'text-[#1A1A1A] group-hover:text-[#8C6F3D]' 
                          : 'text-[#1A1A1A] group-hover:text-[#8C6F3D]'
                      }`}>
                        {award.title}
                      </h3>

                      {/* Organizer */}
                      <p className="text-sm text-[#8C6F3D] font-semibold mb-2">
                        {award.organizer}
                      </p>

                      {/* Description */}
                      {award.description && (
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* ================================================================== */}
        {/* STATS FOOTER */}
        {/* ================================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-3 md:gap-4"
        >
          <div className="bg-[#FAF8F5] rounded-2xl p-4 md:p-5 border border-[#E8D09E]/30 text-center hover:border-[#C5A059]/40 transition-colors">
            <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059] mb-1">
              {AwardsData.length}+
            </div>
            <div className="text-xs md:text-sm text-gray-600 font-medium">
              Penghargaan
            </div>
          </div>

          <div className="bg-[#FAF8F5] rounded-2xl p-4 md:p-5 border border-[#E8D09E]/30 text-center hover:border-[#C5A059]/40 transition-colors">
            <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059] mb-1">
              {uniqueYears}+
            </div>
            <div className="text-xs md:text-sm text-gray-600 font-medium">
              Tahun Berprestasi
            </div>
          </div>

          <div className="bg-[#FAF8F5] rounded-2xl p-4 md:p-5 border border-[#E8D09E]/30 text-center hover:border-[#C5A059]/40 transition-colors">
            <div className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059] mb-1">
              {yearsOfExcellence}+
            </div>
            <div className="text-xs md:text-sm text-gray-600 font-medium">
              Tahun Pengalaman
            </div>
          </div>
        </motion.div>

        {/* ================================================================== */}
        {/* NAVIGATE DETAIL CTA - Muncul hanya jika navigateDetail = true */}
        {/* ================================================================== */}
        {navigateDetail && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              to="/about/awards"
              className="group inline-flex items-center justify-center gap-3 bg-linear-to-r from-[#1A1A1A] to-[#2a2a2a] text-white px-8 py-4 rounded-xl font-bold hover:from-[#8C6F3D] hover:to-[#C5A059] transition-all duration-300 shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5"
            >
              <Trophy className="w-5 h-5 text-[#E8D09E]" />
              <span>Lihat Semua Penghargaan & Detail</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-3 text-xs text-gray-500">
              Jelajahi daftar lengkap penghargaan, sertifikasi, dan pencapaian kami
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// ============================================================================
// HERO CARD CONTENT - Extracted untuk reusability dengan/ tanpa Link wrapper
// ============================================================================
function HeroCardContent({ mainFeatured }: { mainFeatured: Award }) {
  return (
    <div className="relative bg-linear-to-br from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A] rounded-3xl p-6 md:p-10 text-white shadow-2xl overflow-hidden border border-[#C5A059]/20 hover:border-[#C5A059]/40 transition-all duration-500">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C5A059]/20 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8C6F3D]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(232, 208, 158, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 208, 158, 1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Navigate Indicator - muncul di pojok kanan atas */}
      <div className="absolute top-4 right-4 z-20 hidden md:flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-xs font-bold text-[#E8D09E] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Lihat Detail</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Icon */}
        <div className="shrink-0">
          <div className={`relative w-20 h-20 md:w-24 md:h-24 bg-linear-to-br ${mainFeatured.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500`}>
            {mainFeatured.icon && (
              <mainFeatured.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
            )}
            {/* Glow Ring */}
            <div className={`absolute inset-0 bg-linear-to-br ${mainFeatured.gradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity`} />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#E8D09E]/20 text-[#E8D09E] px-3 py-1 rounded-full border border-[#E8D09E]/30">
              <Sparkles className="w-3 h-3" />
              {mainFeatured.year}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              <Star className="w-3 h-3 fill-current" />
              Featured Award
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight tracking-tight">
            {mainFeatured.title}
          </h3>

          {/* Organizer */}
          <p className="text-[#E8D09E] font-semibold text-sm md:text-base mb-3">
            oleh {mainFeatured.organizer}
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
            {mainFeatured.description}
          </p>
        </div>
      </div>
    </div>
  )
}