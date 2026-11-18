import { motion } from 'motion/react'
import { Target, Eye, Sparkles, CheckCircle2 } from 'lucide-react'

export default function MissionVisionSection() {
  // PERUBAHAN: Semua warna disesuaikan ke brand color (gold/brown) dengan variasi shade
  const items = [
    {
      icon: <Target className="w-7 h-7" />,
      title: "Misi Kami",
      subtitle: "Our Mission",
      content: "Menyediakan teknologi autentikasi yang terjangkau, akurat, dan mudah diadopsi oleh brand di seluruh Asia Pasifik dengan standar ISO/IEC 27000:2016. Kami berkomitmen untuk terus berinovasi dalam memerangi produk palsu dan melindungi konsumen.",
      points: [
        "Mengembangkan teknologi 5 lapis keamanan terdepan",
        "Memberikan layanan customer support 24/7",
        "Membangun ekosistem perdagangan yang aman",
        "Memberdayakan brand lokal dan internasional"
      ],
      // Brand color: primary dark
      gradient: "from-[#8C6F3D]/10 to-[#C5A059]/5",
      iconBg: "bg-[#E8D09E]/40",
      iconColor: "text-[#8C6F3D]",
      accentBorder: "border-[#E8D09E]/40"
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Visi Kami",
      subtitle: "Our Vision",
      content: "Menjadi standar global dalam sistem anti-counterfeit yang melindungi produk dan konsumen di seluruh dunia. Kami bercita-cita untuk menciptakan dunia di mana setiap produk dapat diverifikasi keasliannya dengan mudah.",
      points: [
        "Menjadi pemimpin pasar anti-counterfeit di Asia",
        "Ekspansi ke pasar global dalam 5 tahun ke depan",
        "Mengembangkan standar autentikasi internasional",
        "Menciptakan dampak positif bagi masyarakat"
      ],
      // Brand color: medium gold
      gradient: "from-[#C5A059]/15 to-[#E8D09E]/5",
      iconBg: "bg-[#C5A059]/20",
      iconColor: "text-[#6b5530]",
      accentBorder: "border-[#C5A059]/30"
    }
  ]
  
  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#E8D09E]/40 px-4 py-2 rounded-full">
            <Target className="w-4 h-4 text-[#8C6F3D]" />
            <span className="text-xs font-bold text-[#8C6F3D] uppercase tracking-widest">Arah & Tujuan</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
            Misi & <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">Visi</span> Kami
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Panduan yang mengarahkan setiap langkah dan keputusan kami dalam membangun masa depan autentikasi produk.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative bg-white rounded-3xl border ${item.accentBorder} hover:border-[#C5A059]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden p-8 md:p-10`}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Header dengan Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 ${item.iconBg} ${item.iconColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#8C6F3D] uppercase tracking-widest mb-1 block">
                        {item.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-[#1A1A1A]">{item.title}</h3>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center gap-1.5 bg-[#E8D09E]/20 text-[#8C6F3D] px-3 py-1.5 rounded-full text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Core</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">{item.content}</p>
                
                <div className="space-y-3">
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      {/* PERUBAHAN: CheckCircle2 dari emerald-500 ke brand color */}
                      <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
