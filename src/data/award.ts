import {
  Trophy,
  Award,
  BadgeCheck,
  Medal,
  Star,
  Crown,
  Gem,
  Target,
  Rocket,
  Shield,
  Globe,
  type LucideIcon,
  
} from 'lucide-react'
import type { TFunction } from 'i18next'

// ============================================================================
// TYPES
// ============================================================================
export type AwardCategory =
  | 'startup'       // Kompetisi startup / accelerator
  | 'certification' // Sertifikasi resmi
  | 'achievement'   // Penghargaan prestasi
  | 'partnership'   // Kemitraan strategis
  | 'innovation'    // Inovasi teknologi
  | 'recognition'   // Pengakuan industri
  | 'custom'        // Kategori custom

export type Award = {
  id?: string
  year: string
  title: string
  organizer: string
  category?: AwardCategory
  description?: string
  icon?: LucideIcon
  gradient?: string
  url?: string
  featured?: boolean
}

// ============================================================================
// HELPER - Icon per Kategori
// ============================================================================
export const getAwardIcon = (category?: AwardCategory): LucideIcon => {
  const map: Record<AwardCategory, LucideIcon> = {
    startup: Rocket,
    certification: BadgeCheck,
    achievement: Trophy,
    partnership: Target,
    innovation: Star,
    recognition: Crown,
    custom: Award
  }
  return map[category || 'custom'] || Award
}

// ============================================================================
// HELPER - Gradient per Kategori
// ============================================================================
export const getAwardGradient = (category?: AwardCategory): string => {
  const map: Record<AwardCategory, string> = {
    startup: 'from-amber-400 to-amber-600',
    certification: 'from-blue-500 to-blue-700',
    achievement: 'from-[#C5A059] to-[#8C6F3D]',
    partnership: 'from-emerald-500 to-emerald-700',
    innovation: 'from-purple-500 to-purple-700',
    recognition: 'from-rose-500 to-rose-700',
    custom: 'from-gray-500 to-gray-700'
  }
  return map[category || 'custom'] || ''
}

// ============================================================================
// HELPER - Badge Style per Kategori
// ============================================================================
export const getAwardBadgeStyle = (category?: AwardCategory): string => {
  const map: Record<AwardCategory, string> = {
    startup: 'bg-amber-100 text-amber-700 border-amber-200',
    certification: 'bg-blue-100 text-blue-700 border-blue-200',
    achievement: 'bg-[#E8D09E]/30 text-[#8C6F3D] border-[#E8D09E]/40',
    partnership: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    innovation: 'bg-purple-100 text-purple-700 border-purple-200',
    recognition: 'bg-rose-100 text-rose-700 border-rose-200',
    custom: 'bg-gray-100 text-gray-700 border-gray-200'
  }
  return map[category || 'custom'] || ''
}

// ============================================================================
// HELPER - Category Label (Human-readable)
// ============================================================================
export const getAwardCategoryLabel = (category?: AwardCategory): string => {
  const map: Record<AwardCategory, string> = {
    startup: 'Startup',
    certification: 'Sertifikasi',
    achievement: 'Prestasi',
    partnership: 'Kemitraan',
    innovation: 'Inovasi',
    recognition: 'Pengakuan',
    custom: 'Lainnya'
  }
  return map[category || 'custom'] || 'Lainnya'
}

// ============================================================================
// HELPER - Utility Functions
// ============================================================================

/**
 * Sort awards by year (newest first by default)
 */
export const sortAwardsByYear = (
  awards: Award[],
  order: 'asc' | 'desc' = 'desc'
): Award[] => {
  return [...awards].sort((a, b) => {
    const yearA = parseInt(a.year)
    const yearB = parseInt(b.year)
    return order === 'desc' ? yearB - yearA : yearA - yearB
  })
}

/**
 * Group awards by year
 */
export const groupAwardsByYear = (
  awards: Award[]
): Record<string, Award[]> => {
  return awards.reduce((acc, award) => {
    if (!acc[award.year]) {
      acc[award.year] = []
    }
    acc[award.year].push(award)
    return acc
  }, {} as Record<string, Award[]>)
}

/**
 * Filter awards by year
 */
export const filterAwardsByYear = (
  awards: Award[],
  year: string
): Award[] => {
  return awards.filter(award => award.year === year)
}

/**
 * Filter awards by category
 */
export const filterAwardsByCategory = (
  awards: Award[],
  category: AwardCategory
): Award[] => {
  return awards.filter(award => award.category === category)
}

/**
 * Get featured awards only
 */
export const getFeaturedAwards = (awards: Award[]): Award[] => {
  return awards.filter(award => award.featured)
}

/**
 * Get unique years from awards
 */
export const getUniqueYears = (awards: Award[]): string[] => {
  return [...new Set(awards.map(a => a.year))].sort((a, b) => parseInt(b) - parseInt(a))
}

/**
 * Get unique categories from awards
 */
export const getUniqueCategories = (awards: Award[]): AwardCategory[] => {
  return [...new Set(awards.map(a => a.category || 'custom'))] as AwardCategory[]
}

// ============================================================================
// AWARDS DATA - AuthenticGuards
// ============================================================================
export const AwardsData: Award[] = [
  {
    id: 'award-2017-echelon',
    year: '2017',
    title: 'Top 100 Startup Asia Pacific',
    organizer: 'Echelon Asia Summit',
    category: 'achievement',
    description: 'Dipilih sebagai salah satu dari 100 startup paling menjanjikan di kawasan Asia Pacific, membuktikan validasi teknologi di kancah internasional.',
    icon: Trophy,
    gradient: 'from-amber-400 to-amber-600',
    featured: true
  },
  {
    id: 'achievement-2018-indigo',
    year: '2018',
    title: 'Alumni Indigo Creative Nation',
    organizer: 'Telkom Group',
    category: 'achievement',
    description: 'Lulus dari program inkubasi bisnis Telkom Group, menandai kesiapan produk dan layanan untuk diluncurkan ke pasar yang lebih luas.',
    icon: BadgeCheck,
    gradient: 'from-blue-500 to-blue-700',
    featured: false
  },
  {
    id: 'achievement-2018-viisa',
    year: '2018',
    title: 'Alumni Vietnam Innovative Startup Accelerator',
    organizer: 'Vietnam Innovative Startup Accelerator (VIISA)',
    category: 'achievement',
    description: 'Menyelesaikan program akselerator startup internasional yang prestisius di Vietnam, memperluas jaringan dan wawasan bisnis di tingkat Asia Tenggara.',
    icon: Globe,
    gradient: 'from-[#C5A059] to-[#8C6F3D]',
    featured: false
  },
  {
    id: 'certification-2019-iso',
    year: '2019',
    title: 'Adopsi Standar ISO/IEC 18004:2015',
    organizer: 'International Organization for Standardization',
    category: 'certification',
    description: 'Mengadopsi standar internasional sebagai rujukan spesifikasi teknis utama dalam pengembangan QR code Authentic Guards.',
    icon: Award,
    gradient: 'from-emerald-500 to-emerald-700',
    featured: true
  }
  
  // {
  //   id: 'award-2019-innovation',
  //   year: '2019',
  //   title: 'Best Anti-Counterfeiting Innovation',
  //   organizer: 'Indonesia Technology Awards',
  //   category: 'innovation',
  //   description: 'Penghargaan untuk inovasi terbaik dalam teknologi anti-pemalsuan produk.',
  //   icon: Star,
  //   gradient: 'from-purple-500 to-purple-700',
  //   featured: false
  // },
  // {
  //   id: 'award-2020-partnership',
  //   year: '2020',
  //   title: 'Strategic Partnership Award',
  //   organizer: 'ASEAN Business Forum',
  //   category: 'partnership',
  //   description: 'Pengakuan atas kemitraan strategis lintas negara di kawasan ASEAN.',
  //   icon: Target,
  //   gradient: 'from-emerald-500 to-emerald-700',
  //   featured: false
  // },
  // {
  //   id: 'award-2022-recognition',
  //   year: '2022',
  //   title: 'Top Security Solution Provider',
  //   organizer: 'Tech in Asia',
  //   category: 'recognition',
  //   description: 'Diakui sebagai penyedia solusi keamanan produk terkemuka di Indonesia.',
  //   icon: Crown,
  //   gradient: 'from-rose-500 to-rose-700',
  //   featured: true
  // }
]

// ============================================================================
// I18N HELPERS - Translate display fields (keeps structure/icons/gradients)
// ============================================================================

/**
 * Translate display fields of every award (title, description).
 * `organizer`, `year`, `category`, `gradient`, `icon` stay as-is.
 */
export const getAwardsData = (t: TFunction): Award[] =>
  AwardsData.map(a => {
    if (!a.id) return a
    const key = `data/awards:${a.id}`
    return {
      ...a,
      title: t(`${key}.title`, { defaultValue: a.title }),
      description: a.description ? t(`${key}.description`, { defaultValue: a.description }) : a.description
    }
  })