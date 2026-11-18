import { motion } from 'motion/react'
import { Eye, Target } from 'lucide-react'
import { getHighlightedMilestones } from '@/data/timeline'

export default function AboutSection() {
  const timelineData = getHighlightedMilestones()

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:sticky lg:top-32"
          >
            <div>
              <p className="text-[#8C6F3D] font-bold tracking-widest uppercase text-xs mb-3">Tentang Kami</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-4">
                Delapan Tahun <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">
                  Melindungi Keaslian
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Sejak 2017, AuthenticGuards Technology berkomitmen untuk memberantas produk palsu dan membangun ekosistem perdagangan yang aman di Asia Pasifik dengan teknologi 5 lapis keamanan.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <Target className="w-5 h-5" />,
                  title: "Misi Kami",
                  desc: "Menyediakan teknologi autentikasi yang terjangkau, akurat, dan mudah diadopsi oleh brand di seluruh Asia Pasifik dengan standar ISO/IEC 27000:2016."
                },
                {
                  icon: <Eye className="w-5 h-5" />,
                  title: "Visi Kami",
                  desc: "Menjadi standar global dalam sistem anti-counterfeit yang melindungi produk dan konsumen di seluruh dunia."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#E8D09E]/30 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 bg-[#E8D09E]/20 text-[#8C6F3D] rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#C5A059] via-[#E8D09E] to-transparent" />

            <div className="space-y-6">
              {timelineData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-[#C5A059] rounded-xl flex items-center justify-center text-[#8C6F3D] shadow-md z-10">
                    <item.icon className='w-5 h-5' />
                  </div>

                  <div className="bg-white rounded-2xl p-5 border border-[#E8D09E]/30 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-extrabold text-[#C5A059] bg-[#E8D09E]/20 px-2.5 py-1 rounded-md tracking-wider">
                        {item.year}
                      </span>
                      <h3 className="font-bold text-[#1A1A1A]">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
