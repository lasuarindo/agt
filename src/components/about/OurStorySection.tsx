import { motion } from 'motion/react'
import { Shield, Award, Rocket, Quote, Database } from 'lucide-react'

export default function OurStorySection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
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
              <p className="text-[#8C6F3D] font-bold tracking-widest uppercase text-xs mb-3">Cerita Kami</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight tracking-tight mb-4">
                Bermula dari <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059]">Keprihatinan</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Pada tahun 2017, kami menyaksikan bagaimana produk palsu semakin merajalela di pasar Asia Pasifik. Menurut PBB, pasar pemalsuan berharga 250 Milyar Dollar per tahun dan terus bertumbuh, membentur pendapatan perusahaan dan merusak reputasi merek.
              </p>
              <p>
                <strong className="text-[#1A1A1A]">PT. Autentikasi Garda Teknologi</strong> didirikan dengan satu misi sederhana namun ambisius: <em>menciptakan sistem autentikasi yang terjangkau, akurat, dan mudah diadopsi oleh semua brand</em>.
              </p>
              <p>
                {/* Disesuaikan: fokus pada 5 lapis keamanan & algoritma AG, bukan scratch PIN */}
                Kami memulai perjalanan dengan teknologi <strong className="text-[#1A1A1A]">algoritma AG 3 lapis</strong> yang dienkripsi MD5 dan terintegrasi dengan database real-time berstandar <strong className="text-[#1A1A1A]">ISO/IEC 27000:2016</strong>. Inovasi ini menjadi game-changer bagi industri anti-counterfeit di Indonesia, dan perlahan meluas ke seluruh Asia Pasifik.
              </p>
            </div>

            <div className="pt-4">
              {/* Disesuaikan: kutipan dari Managing Director di proposal */}
              <div className="inline-flex items-center gap-3 bg-[#FAF8F5] border border-[#E8D09E]/40 rounded-2xl p-4">
                <Quote className="w-8 h-8 text-[#C5A059] shrink-0" />
                <p className="text-sm italic text-gray-700">
                  "Authentic Guards adalah cara paling sederhana untuk memvalidasi keaslian produk anda."
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-2 ml-12">
                — <strong>Ryan Othink</strong>, Managing Director
              </p>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] rounded-3xl p-6 text-white shadow-xl">
                  <Rocket className="w-8 h-8 text-[#E8D09E] mb-3" />
                  <p className="text-3xl font-extrabold mb-1">2017</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Tahun Berdiri</p>
                </div>
                <div className="bg-white border border-[#E8D09E]/30 rounded-3xl p-6 shadow-sm">
                  <Database className="w-8 h-8 text-[#8C6F3D] mb-3" />
                  {/* Disesuaikan: 100M kode/hari sesuai proposal */}
                  <p className="text-3xl font-extrabold text-[#1A1A1A] mb-1">100M</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Kode / Hari</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white border border-[#E8D09E]/30 rounded-3xl p-6 shadow-sm">
                  <Shield className="w-8 h-8 text-[#8C6F3D] mb-3" />
                  {/* Disesuaikan: 5 lapis keamanan sesuai proposal */}
                  <p className="text-3xl font-extrabold text-[#1A1A1A] mb-1">5</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Lapis Keamanan</p>
                </div>
                <div className="bg-linear-to-br from-[#C5A059] to-[#8C6F3D] rounded-3xl p-6 text-white shadow-xl">
                  <Award className="w-8 h-8 text-white mb-3" />
                  <p className="text-3xl font-extrabold mb-1">Top 100</p>
                  <p className="text-xs text-white/80 uppercase tracking-wider">Startup Asia Pacific</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
