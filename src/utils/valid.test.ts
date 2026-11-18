import { describe, it, expect } from 'vitest'
import { isValidLocale } from '@/utils/valid'

describe('isValidLocale', () => {
  it('returns true for a valid locale', () => {
    expect(isValidLocale('en-US')).toBe(true)
  })

  it('returns false for an empty string', () => {
    expect(isValidLocale('')).toBe(false)
  })

  it('returns false for a whitespace-only string', () => {
    expect(isValidLocale('   ')).toBe(false)
  })

  it('returns false for an invalid locale', () => {
    expect(isValidLocale('en_US')).toBe(false)
  })
})