import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import type { ComponentType } from 'react'
import i18n from '@/i18n'
import HeroSection from '@/components/home/HeroSection'
import HeroSectionNew from '@/components/home/HeroSectionNew'
import HeroSectionNew_ from '@/components/home/HeroSectionNew_'
import HeroSectionNew__ from '@/components/home/HeroSectionNew__'
import HeroSectionNewFinal from '@/components/home/HeroSectionNewFinal'
import HeroSectionSimple from '@/components/home/HeroSectionSimple'
import HeroSectionProposal2020 from '@/components/home/HeroSectionProposal2020'

const variants: Array<{ name: string; Comp: ComponentType; expected: string }> = [
  { name: 'HeroSection', Comp: HeroSection, expected: 'Sistem Anti-Counterfeit Pertama' },
  { name: 'HeroSectionNew', Comp: HeroSectionNew, expected: 'Standar Baru Autentikasi' },
  { name: 'HeroSectionNew_', Comp: HeroSectionNew_, expected: 'Lindungi Merek Anda dari' },
  { name: 'HeroSectionNew__', Comp: HeroSectionNew__, expected: 'Melindungi Produk' },
  { name: 'HeroSectionNewFinal', Comp: HeroSectionNewFinal, expected: 'Lindungi Merek Anda dari' },
  { name: 'HeroSectionSimple', Comp: HeroSectionSimple, expected: 'Lindungi Merek Anda dari' },
  { name: 'HeroSectionProposal2020', Comp: HeroSectionProposal2020, expected: 'Sistem Anti-Pemalsuan' },
]

describe('Home hero variants (i18n)', () => {
  afterEach(() => {
    cleanup()
    void i18n.changeLanguage('id')
  })

  it.each(variants)('$name renders translated copy without raw keys', async ({ Comp, expected }) => {
    await i18n.changeLanguage('id')
    const { container } = render(
      <MemoryRouter>
        <Comp />
      </MemoryRouter>,
    )

    expect(container.textContent).toContain(expected)
    expect(container.textContent).not.toContain('heroVariants.')
  })

  it('HeroSectionSimple renders English copy when the language is en', async () => {
    await i18n.changeLanguage('en')
    const { container } = render(
      <MemoryRouter>
        <HeroSectionSimple />
      </MemoryRouter>,
    )

    expect(container.textContent).toContain('Protect Your Brand from')
    expect(container.textContent).not.toContain('heroVariants.')
  })
})