import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'

const { useNavigationMock } = vi.hoisted(() => ({ useNavigationMock: vi.fn() }))

vi.mock('react-router', () => ({
  useNavigation: () => useNavigationMock(),
}))

import NavigationLoader from '@/layout/NavigationLoader'

describe('NavigationLoader', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    useNavigationMock.mockReset()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders nothing when idle', () => {
    useNavigationMock.mockReturnValue({ state: 'idle' })
    render(<NavigationLoader />)
    expect(screen.queryByTestId('navigation-loader')).not.toBeInTheDocument()
  })

  it('appears after the delay while loading', () => {
    useNavigationMock.mockReturnValue({ state: 'loading' })
    render(<NavigationLoader />)

    // Belum terlihat sebelum delay 150ms.
    expect(screen.queryByTestId('navigation-loader')).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(screen.getByTestId('navigation-loader')).toBeInTheDocument()
  })

  it('does not flash when navigation finishes before the delay', () => {
    useNavigationMock.mockReturnValue({ state: 'loading' })
    const { rerender } = render(<NavigationLoader />)

    act(() => {
      vi.advanceTimersByTime(100)
    })

    useNavigationMock.mockReturnValue({ state: 'idle' })
    rerender(<NavigationLoader />)

    act(() => {
      vi.advanceTimersByTime(200)
    })

    expect(screen.queryByTestId('navigation-loader')).not.toBeInTheDocument()
  })

  it('hides again once navigation becomes idle', () => {
    useNavigationMock.mockReturnValue({ state: 'loading' })
    const { rerender } = render(<NavigationLoader />)

    act(() => {
      vi.advanceTimersByTime(200)
    })
    expect(screen.getByTestId('navigation-loader')).toBeInTheDocument()

    useNavigationMock.mockReturnValue({ state: 'idle' })
    rerender(<NavigationLoader />)

    expect(screen.queryByTestId('navigation-loader')).not.toBeInTheDocument()
  })
})