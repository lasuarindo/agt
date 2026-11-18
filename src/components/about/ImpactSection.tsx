import { motion } from 'motion/react'
import { Shield, BadgeCheck, Building2, Calendar, Database, AlertTriangle } from 'lucide-react'

export default function ImpactSection() {
  // Disesuaikan dengan angka-angka dari proposal
  const impacts = [
    {
      icon: <Database className="w-6 h-6" />,
      value: '100M',
      label: 'Kode / Hari',
      desc: 'Kapasitas produksi maksimum kode AG'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: '5',
      label: 'Lapis Keamanan',
      desc: 'Proteksi sinergis per produk'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      value: '15x',
      label: 'Limit Verifikasi',
      desc: 'Batas pengecekan per kode'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      value: 'Terpercaya',
      label: 'Brand Partner',
      desc: 'Dari berbagai industri di Asia Pasifik'
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      value: 'ISO',
      label: '27000:2016',
      desc: 'Standar pengamanan informasi cloud database'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      value: '8+',
      label: 'Tahun Berkiprah',
      desc: 'Sejak 2017 hingga sekarang'
    }
  ]

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
          <p className="text-[#E8D09E] font-bold tracking-widest uppercase text-xs">Dampak Kami</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Angka yang <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E8D09E] to-[#C5A059]">Berbicara</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Dampak nyata yang kami berikan untuk industri dan konsumen di Asia Pasifik.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {impacts.map((impact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-[#E8D09E]/30 transition-all group text-center"
            >
              <div className="w-12 h-12 bg-[#E8D09E]/20 text-[#E8D09E] rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                {impact.icon}
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
                {impact.value}
              </p>
              <p className="text-sm font-bold text-[#E8D09E] mb-1">{impact.label}</p>
              <p className="text-xs text-gray-400">{impact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
