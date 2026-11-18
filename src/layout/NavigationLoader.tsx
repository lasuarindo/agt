import { useEffect, useState } from 'react'
import { useNavigation } from 'react-router'
import { motion, useReducedMotion } from 'motion/react'

/**
 * Progress bar tipis yang muncul saat navigasi (termasuk pemuatan lazy chunk)
 * sedang berjalan. Ditunda 150ms agar tidak berkedip pada navigasi cepat/ter-cache.
 */
export default function NavigationLoader() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  const reduceMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      setVisible(false)
      return
    }
    const id = window.setTimeout(() => setVisible(true), 150)
    return () => window.clearTimeout(id)
  }, [isLoading])

  if (!visible) return null

  return (
    <div
      data-testid="navigation-loader"
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 overflow-hidden"
    >
      <motion.div
        className={`h-full rounded-r-full bg-linear-to-r from-[#8C6F3D] via-[#C5A059] to-[#E8D09E] shadow-[0_0_10px_rgba(197,160,89,0.6)] ${
          reduceMotion ? 'w-full' : 'w-1/3'
        }`}
        initial={reduceMotion ? { opacity: 0 } : { x: '-120%' }}
        animate={reduceMotion ? { opacity: 1 } : { x: '320%' }}
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : { duration: 1.1, repeat: Infinity, ease: 'easeInOut' }
        }
      />
    </div>
  )
}