import { Link } from 'react-router'
import { motion } from 'motion/react'
import { ShieldAlert, ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation('notfound')

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center bg-[#FAF8F5] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-linear-to-b from-[#E8D09E]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="w-20 h-20 bg-linear-to-br from-[#C5A059] to-[#8C6F3D] rounded-3xl flex items-center justify-center shadow-lg mb-8">
          <ShieldAlert className="w-10 h-10 text-white" />
        </div>

        <p className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#8C6F3D] to-[#C5A059] tracking-tight">
          404
        </p>
        <h1 className="mt-4 text-2xl md:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
          {t('title')}
        </h1>
        <p className="mt-3 text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
          {t('description')}
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#8C6F3D] text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('backHome')}
        </Link>
      </motion.div>
    </section>
  )
}