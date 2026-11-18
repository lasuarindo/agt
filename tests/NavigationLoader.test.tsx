import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'

const { loadingStore } = vi.hoisted(() => {
  let pending = 0
  const listeners = new Set<() => void>()
  return {
    loadingStore: {
      subscribe(cb: () => void) {
        listeners.add(cb)
        return () => {
          listeners.delete(cb)
        }
      },
      getSnapshot() {
        return pending
      },
      set(v: number) {
        pending = v
        listeners.forEach((l) => l())
      },
    },
  }
})

vi.mock('@/router/lazy', () => ({ lazyLoading: loadingStore }))

import NavigationLoader from '@/layout/NavigationLoader'

const MIN_VISIBLE_MS = 400

describe('NavigationLoader', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    loadingStore.set(0)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders nothing when no page chunk is loading', () => {
    render(<NavigationLoader />)
    expect(screen.queryByTestId('navigation-loader')).not.toBeInTheDocument()
  })

  it('appears while a page chunk is loading', () => {
    render(<NavigationLoader />)
    act(() => {
      loadingStore.set(1)
    })

    expect(screen.getByTestId('navigation-loader')).toBeInTheDocument()
    expect(screen.getByText('Memuat halaman...')).toBeInTheDocument()
  })

  it('keeps the overlay for the minimum duration after loading finishes', () => {
    render(<NavigationLoader />)
    act(() => {
      loadingStore.set(1)
    })
    act(() => {
      vi.advanceTimersByTime(100)
    })

    act(() => {
      loadingStore.set(0)
    })

    // Masih terlihat tepat setelah chunk selesai.
    expect(screen.getByTestId('navigation-loader')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(MIN_VISIBLE_MS)
    })
    expect(screen.queryByTestId('navigation-loader')).not.toBeInTheDocument()
  })

  it('hides right away when loading took longer than the minimum', () => {
    render(<NavigationLoader />)
    act(() => {
      loadingStore.set(1)
    })
    act(() => {
      vi.advanceTimersByTime(MIN_VISIBLE_MS + 100)
    })

    act(() => {
      loadingStore.set(0)
    })

    expect(screen.queryByTestId('navigation-loader')).not.toBeInTheDocument()
  })
})