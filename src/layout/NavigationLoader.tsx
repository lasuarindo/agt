import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ShieldCheck } from 'lucide-react'
import { lazyLoading } from '@/router/lazy'

// Tampilkan overlay minimal selama ini agar tidak berkedip pada navigasi cepat.
const MIN_VISIBLE_MS = 400

/**
 * Overlay loader saat perpindahan halaman (termasuk pemuatan lazy chunk).
 * Bergaya sama dengan loader inisialisasi (spinner + teks) dan menutupi layar
 * selama navigasi berlangsung. Root Suspense tetap dipakai untuk load awal.
 */
export default function NavigationLoader() {
  const pending = useSyncExternalStore(lazyLoading.subscribe, lazyLoading.getSnapshot)
  const isLoading = pending > 0
  const reduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const visibleRef = useRef(false)
  const loadingRef = useRef(false)
  const minElapsedRef = useRef(false)
  const minTimerRef = useRef<number | null>(null)

  useEffect(() => {
    if (isLoading) {
      loadingRef.current = true
      if (visibleRef.current) return

      visibleRef.current = true
      setVisible(true)
      minElapsedRef.current = false

      if (minTimerRef.current !== null) window.clearTimeout(minTimerRef.current)
      minTimerRef.current = window.setTimeout(() => {
        minElapsedRef.current = true
        minTimerRef.current = null
        if (!loadingRef.current) {
          visibleRef.current = false
          setVisible(false)
        }
      }, MIN_VISIBLE_MS)
      return
    }

    // Navigasi selesai: sembunyikan jika sudah memenuhi durasi minimum.
    loadingRef.current = false
    if (!visibleRef.current) return
    if (minElapsedRef.current) {
      visibleRef.current = false
      setVisible(false)
    }
    // Jika belum, biarkan minTimer yang menyembunyikan saat durasi tercapai.
  }, [isLoading])

  useEffect(
    () => () => {
      if (minTimerRef.current !== null) window.clearTimeout(minTimerRef.current)
    },
    [],
  )

  if (!visible) return null

  return (
    <motion.div
      data-testid="navigation-loader"
      role="status"
      aria-live="polite"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.15 }}
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-[#FAFAFA]/95 backdrop-blur-sm"
    >
      <div className="relative" aria-hidden="true">
        <div
          className={`w-16 h-16 border-4 border-[#E8D09E] border-t-[#8C6F3D] rounded-full ${
            reduceMotion ? '' : 'animate-spin'
          }`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-[#8C6F3D]" />
        </div>
      </div>
      <p
        className={`mt-6 text-sm font-semibold text-[#8C6F3D] tracking-wide ${
          reduceMotion ? '' : 'animate-pulse'
        }`}
      >
        Memuat halaman...
      </p>
    </motion.div>
  )
}