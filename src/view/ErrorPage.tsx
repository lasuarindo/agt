import { Link, isRouteErrorResponse, useRouteError } from 'react-router'
import { motion } from 'motion/react'
import { ShieldAlert, ArrowLeft, RefreshCw } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ErrorPage() {
  const error = useRouteError()
  const { t } = useTranslation('error')

  let title = t('title')
  let description = t('description')

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = '404'
      description = t('description')
    } else {
      description = error.statusText || description
    }
  } else if (error instanceof Error) {
    if (import.meta.env.DEV) {
      description = error.message
    }
  }

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
          {isRouteErrorResponse(error) ? error.status : 'Oops'}
        </p>
        <h1 className="mt-4 text-2xl md:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-gray-500 text-base md:text-lg leading-relaxed max-w-md">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#8C6F3D] text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('backHome')}
          </Link>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 border border-[#8C6F3D]/30 text-[#8C6F3D] hover:bg-[#8C6F3D]/10 px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            {t('retry')}
          </button>
        </div>
      </motion.div>
    </section>
  )
}
