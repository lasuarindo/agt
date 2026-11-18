import { motion } from 'motion/react'
import {
  Shield, Heart, Lightbulb, Users, Globe, Sparkles, CheckCircle2, TrendingUp
} from 'lucide-react'

export default function CoreValuesSection() {
  // PERUBAHAN: Semua warna disesuaikan ke brand color (gold/brown) dengan variasi shade
  const values = [
    {
      id: 'integrity',
      icon: <Shield className="w-7 h-7" />,
      title: "Integritas",
      subtitle: "Foundation",
      desc: "Kami menjunjung tinggi kejujuran dan transparansi dalam setiap aspek bisnis kami. Setiap keputusan yang kami ambil didasarkan pada prinsip-prinsip etika yang kuat, memastikan kepercayaan dari para mitra dan konsumen.",
      points: [
        "Transparansi dalam setiap transaksi",
        "Komitmen terhadap etika bisnis",
        "Akuntabilitas penuh atas tindakan"
      ],
      // Brand color: primary dark (featured)
      gradient: "from-[#8C6F3D]/10 to-[#C5A059]/5",
      iconBg: "bg-[#E8D09E]/40",
      iconColor: "text-[#8C6F3D]",
      accentBorder: "border-[#E8D09E]/40",
      size: "full"
    },
    {
      id: 'innovation',
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Inovasi",
      subtitle: "Driving Force",
      desc: "Terus berinovasi dengan teknologi terdepan untuk melawan pemalsuan produk. Kami percaya bahwa inovasi adalah kunci untuk tetap relevan dan memberikan solusi terbaik bagi tantangan yang terus berkembang.",
      points: [
        "R&D berkelanjutan",
        "Adopsi teknologi terkini",
        "Solusi kreatif untuk masalah kompleks"
      ],
      // Brand color: medium gold (featured)
      gradient: "from-[#C5A059]/15 to-[#E8D09E]/5",
      iconBg: "bg-[#C5A059]/20",
      iconColor: "text-[#6b5530]",
      accentBorder: "border-[#C5A059]/30",
      size: "large"
    },
    {
      id: 'care',
      icon: <Heart className="w-6 h-6" />,
      title: "Kepedulian",
      desc: "Kami peduli pada konsumen, brand partner, dan masyarakat luas.",
      // Brand color: light gold
      gradient: "from-[#E8D09E]/30 to-[#FAF8F5]",
      iconBg: "bg-[#E8D09E]/50",
      iconColor: "text-[#8C6F3D]",
      accentBorder: "border-[#E8D09E]/60",
      size: "small"
    },
    {
      id: 'collaboration',
      icon: <Users className="w-6 h-6" />,
      title: "Kolaborasi",
      desc: "Bekerja sama dengan berbagai pihak untuk menciptakan ekosistem yang lebih aman.",
      // Brand color: darker brown
      gradient: "from-[#6b5530]/10 to-[#8C6F3D]/5",
      iconBg: "bg-[#6b5530]/20",
      iconColor: "text-[#5a4a2a]",
      accentBorder: "border-[#6b5530]/30",
      size: "small"
    },
    {
      id: 'excellence',
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Keunggulan",
      desc: "Berusaha memberikan layanan terbaik dengan standar kualitas tertinggi.",
      // Brand color: darkest brown
      gradient: "from-[#5a4a2a]/10 to-[#6b5530]/5",
      iconBg: "bg-[#5a4a2a]/15",
      iconColor: "text-[#5a4a2a]",
      accentBorder: "border-[#5a4a2a]/25",
      size: "small"
    },
    {
      id: 'impact',
      icon: <Globe className="w-6 h-6" />,
      title: "Dampak Global",
      desc: "Berkontribusi positif bagi masyarakat dan lingkungan di Asia Pasifik.",
      // Brand color: light variant
      gradient: "from-[#E8D09E]/20 to-[#FAF8F5]",
      iconBg: "bg-[#E8D09E]/30",
      iconColor: "text-[#8C6F3D]",
      accentBorder: "border-[#E8D09E]/40",
      size: "small"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Nilai-Nilai Kami</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Core <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">Values</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Enam nilai inti yang menjadi fondasi dalam setiap keputusan dan tindakan kami.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {values.map((value, idx) => {
            const isLarge = value.size === 'large'
            const isFull = value.size === 'full'
            
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group relative bg-white rounded-3xl border ${value.accentBorder} hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  isLarge || isFull ? (isFull ? 'md:col-span-3 p-8 md:p-10' : 'md:col-span-2 p-8 md:p-10') : 'p-6 md:p-8'
                }`}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 ${value.iconBg} ${value.iconColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                        {value.icon}
                      </div>
                      <div>
                        {'subtitle' in value && value.subtitle && (
                          <span className="text-[10px] font-bold text-[#8C6F3D] uppercase tracking-widest mb-1 block">
                            {value.subtitle}
                          </span>
                        )}
                        <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-bold text-[#1A1A1A]`}>
                          {value.title}
                        </h3>
                      </div>
                    </div>
                    
                    {(isLarge || isFull) && (
                      <div className="hidden md:flex items-center gap-1.5 bg-[#E8D09E]/20 text-[#8C6F3D] px-3 py-1.5 rounded-full text-xs font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className={`text-gray-600 leading-relaxed mb-6 ${(isLarge || isFull) ? 'text-base' : 'text-sm'}`}>
                    {value.desc}
                  </p>

                  {/* Points (Only for Large Cards) */}
                  {'points' in value && value.points && (isLarge || isFull) && (
                    <div className="space-y-2.5">
                      {value.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          {/* PERUBAHAN: CheckCircle2 dari emerald-500 ke brand color */}
                          <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
