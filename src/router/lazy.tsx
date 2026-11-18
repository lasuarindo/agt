import { lazy, type ComponentType } from 'react'

type PageModule = { default: ComponentType<any> }

// Penghitung sederhana berapa banyak chunk halaman yang sedang diambil.
// React Router tidak melacak React.lazy pada navigation.state, jadi loader
// navigasi memantau counter ini.
let pending = 0
const listeners = new Set<() => void>()

const emit = () => {
  // Tunda notifikasi agar tidak setState saat render komponen lain.
  queueMicrotask(() => {
    for (const listener of listeners) listener()
  })
}

export const lazyLoading = {
  subscribe(listener: () => void) {
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
    }
  },
  getSnapshot() {
    return pending
  },
}

/**
 * React.lazy + pelacakan pemuatan. Setiap kali chunk halaman diambil,
 * `pending` naik, lalu turun kembali setelah selesai (berhasil/gagal).
 */
export function lazyPage(loader: () => Promise<PageModule>) {
  return lazy(() => {
    pending += 1
    emit()
    return loader().finally(() => {
      pending = Math.max(0, pending - 1)
      emit()
    })
  })
}