import { motion } from 'motion/react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import Marquee from 'react-fast-marquee'

// ============================================================================
// PARTNERS MARQUEE - Brand yang Mengimplementasikan Teknologi AuthenticGuards
// ============================================================================
export default function PartnersMarquee() {
  const partners = [
    { name: 'PharmaCare', industry: 'Farmasi & Kesehatan', since: '2022' },
    { name: 'LuxBrand', industry: 'Luxury Goods', since: '2023' },
    { name: 'JuiceNation', industry: 'F&B / Vaping', since: '2019' },
    { name: 'VaporIndo', industry: 'Lifestyle', since: '2019' },
    { name: 'FashionID', industry: 'Fashion & Apparel', since: '2020' },
    { name: 'BeautyLab', industry: 'Kosmetik & Perawatan', since: '2020' },
    { name: 'SportMax', industry: 'Sportswear & Sneakers', since: '2021' },
    { name: 'TechGuard', industry: 'Elektronik & Gadget', since: '2022' },
    { name: 'PharmaCare', industry: 'Farmasi & Kesehatan', since: '2022' },
    { name: 'LuxBrand', industry: 'Luxury Goods', since: '2023' },
    { name: 'JuiceNation', industry: 'F&B / Vaping', since: '2019' },
    { name: 'VaporIndo', industry: 'Lifestyle', since: '2019' }
  ]
  
  
  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header - Konteks Implementasi Teknologi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 space-y-3"
        >
          <p className="text-[#8C6F3D] font-bold tracking-widest uppercase text-xs">Mitra Implementasi</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
            Brand yang Melindungi Produknya Bersama Kami
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Mereka telah mengimplementasikan teknologi autentikasi AuthenticGuards untuk melindungi produk dan membangun kepercayaan konsumen.
          </p>
        </motion.div>
        
        <Marquee>
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="shrink-0 flex items-center gap-3 bg-[#FAF8F5] border border-[#E8D09E]/30 rounded-2xl px-5 py-3.5 hover:border-[#C5A059]/50 hover:shadow-md transition-all"
            >
              
              <div className="w-11 h-11 bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-xl flex items-center justify-center shrink-0">
                <span className="text-[#E8D09E] font-extrabold text-base">{partner.name.charAt(0)}</span>
              </div>
              
              
              <div>
                <p className="font-bold text-[#1A1A1A] text-sm leading-tight">{partner.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{partner.industry}</p>
              </div>

              
              <div className="hidden md:flex flex-col items-center pl-3 ml-1 border-l border-[#E8D09E]/40">
                <span className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Since</span>
                <span className="text-xs font-bold text-[#8C6F3D]">{partner.since}</span>
              </div>
            </div>
          ))}
        </Marquee>
        
        {/* <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatType: 'loop' }}
            className="flex gap-4 md:gap-6 whitespace-nowrap"
          >
            {[...partners, ...partners].map((partner, idx) => (
              <div
                key={idx}
                className="shrink-0 flex items-center gap-3 bg-[#FAF8F5] border border-[#E8D09E]/30 rounded-2xl px-5 py-3.5 hover:border-[#C5A059]/50 hover:shadow-md transition-all"
              >
                
                <div className="w-11 h-11 bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-[#E8D09E] font-extrabold text-base">{partner.name.charAt(0)}</span>
                </div>
                
                
                <div>
                  <p className="font-bold text-[#1A1A1A] text-sm leading-tight">{partner.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{partner.industry}</p>
                </div>

                
                <div className="hidden md:flex flex-col items-center pl-3 ml-1 border-l border-[#E8D09E]/40">
                  <span className="text-[9px] text-gray-400 uppercase tracking-wider font-bold">Since</span>
                  <span className="text-xs font-bold text-[#8C6F3D]">{partner.since}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div> */}

        {/* Bottom CTA - subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-500">
            Bergabunglah dengan <span className="font-bold text-[#1A1A1A]">500+ brand</span> yang telah melindungi produknya.{' '}
            <Link 
              to="/contact" 
              className="text-[#8C6F3D] font-semibold hover:text-[#6b5530] transition-colors inline-flex items-center gap-1"
            >
              Mulai sekarang
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}