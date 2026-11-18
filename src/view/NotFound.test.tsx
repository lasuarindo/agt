import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import NotFound from '@/view/NotFound'

describe('NotFound page', () => {
  it('renders the 404 heading, message, and a link back home', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    )

    expect(screen.getByText('404')).toBeInTheDocument()
    expect(screen.getByText('Halaman Tidak Ditemukan')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /kembali ke beranda/i })).toBeInTheDocument()
  })
})