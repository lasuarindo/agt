import { logodev } from '@/utils/image'

import {
  Server,
  Rocket,
  GraduationCap,
  Shield,
  Code2,
  Users,
  Globe,
  Lightbulb,
  Target,
  Award,
  type LucideIcon
} from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================
export type SupporterCategory =
  | 'technology'     // Technology partner
  | 'incubator'      // Business incubator
  | 'accelerator'    // Startup accelerator
  | 'government'     // Government support
  | 'enterprise'     // Enterprise client
  | 'investment'     // Investor
  | 'media'          // Media partner
  | 'custom'         // Custom category

export type Contribution = {
  icon?: LucideIcon
  title: string
  description?: string
}

export type Supporter = {
  id: string
  name: string
  tagline: string
  initial: string
  gradient: string
  logo?: string
  category?: SupporterCategory
  since?: string
  description?: string
  contributions?: Contribution[]
  accentBorder?: string
  iconBg?: string
  iconColor?: string
  website?: string
  featured?: boolean
}

// ============================================================================
// HELPER - Category Label
// ============================================================================
export const getSupporterCategoryLabel = (category?: SupporterCategory): string => {
  const map: Record<SupporterCategory, string> = {
    technology: 'Technology Partner',
    incubator: 'Business Incubator',
    accelerator: 'Startup Accelerator',
    government: 'Government Support',
    enterprise: 'Enterprise Partner',
    investment: 'Investor',
    media: 'Media Partner',
    custom: 'Partner'
  }
  return map[category || 'custom'] || 'Partner'
}

// ============================================================================
// HELPER - Accent Border per Category
// ============================================================================
export const getSupporterAccentBorder = (category?: SupporterCategory): string => {
  const map: Record<SupporterCategory, string> = {
    technology: 'border-blue-200',
    incubator: 'border-purple-200',
    accelerator: 'border-amber-200',
    government: 'border-red-200',
    enterprise: 'border-emerald-200',
    investment: 'border-indigo-200',
    media: 'border-rose-200',
    custom: 'border-gray-200'
  }
  return map[category || 'custom'] || 'border-gray-200'
}

// ============================================================================
// HELPER - Icon Styling per Category
// ============================================================================
export const getSupporterIconStyle = (category?: SupporterCategory): { bg: string; color: string } => {
  const map: Record<SupporterCategory, { bg: string; color: string }> = {
    technology: { bg: 'bg-blue-100', color: 'text-blue-600' },
    incubator: { bg: 'bg-purple-100', color: 'text-purple-600' },
    accelerator: { bg: 'bg-amber-100', color: 'text-amber-600' },
    government: { bg: 'bg-red-100', color: 'text-red-600' },
    enterprise: { bg: 'bg-emerald-100', color: 'text-emerald-600' },
    investment: { bg: 'bg-indigo-100', color: 'text-indigo-600' },
    media: { bg: 'bg-rose-100', color: 'text-rose-600' },
    custom: { bg: 'bg-gray-100', color: 'text-gray-600' }
  }
  return map[category || 'custom'] || { bg: 'bg-gray-100', color: 'text-gray-600' }
}

// ============================================================================
// HELPER - Default Icon per Category
// ============================================================================
export const getSupporterIcon = (category?: SupporterCategory): LucideIcon => {
  const map: Record<SupporterCategory, LucideIcon> = {
    technology: Server,
    incubator: GraduationCap,
    accelerator: Rocket,
    government: Shield,
    enterprise: Users,
    investment: Target,
    media: Globe,
    custom: Award
  }
  return map[category || 'custom'] || Award
}

// ============================================================================
// HELPER - Utility Functions
// ============================================================================

/**
 * Filter supporters by category
 */
export const filterSupportersByCategory = (
  supporters: Supporter[],
  category: SupporterCategory
): Supporter[] => {
  return supporters.filter(s => s.category === category)
}

/**
 * Get featured supporters only
 */
export const getFeaturedSupporters = (supporters: Supporter[]): Supporter[] => {
  return supporters.filter(s => s.featured)
}

/**
 * Sort supporters by year (newest first)
 */
export const sortSupportersByYear = (
  supporters: Supporter[],
  order: 'asc' | 'desc' = 'desc'
): Supporter[] => {
  return [...supporters].sort((a, b) => {
    const yearA = parseInt(a.since || '0')
    const yearB = parseInt(b.since || '0')
    return order === 'desc' ? yearB - yearA : yearA - yearB
  })
}

/**
 * Get unique categories from supporters
 */
export const getUniqueSupporterCategories = (supporters: Supporter[]): SupporterCategory[] => {
  return [...new Set(supporters.map(s => s.category || 'custom'))] as SupporterCategory[]
}

// ============================================================================
// SUPPORTERS DATA - AuthenticGuards
// ============================================================================
export const SupportersData: Supporter[] = [
  {
    id: 'telkom-indonesia',
    name: 'Telkom Indonesia',
    tagline: 'Technology Partner',
    initial: 'T',
    gradient: 'from-blue-500 to-blue-700',
    logo: logodev('telkom.co.id'),
    category: 'technology',
    since: '2018',
    description: 'Telkom Indonesia sebagai BUMN telekomunikasi terbesar mendukung pengembangan infrastruktur teknologi dan konektivitas untuk solusi autentikasi produk kami.',
    contributions: [
      {
        icon: Server,
        title: 'Infrastruktur Cloud',
        description: 'Penyediaan server & bandwidth'
      },
      {
        icon: Globe,
        title: 'Jaringan Nasional',
        description: 'Konektivitas ke seluruh Indonesia'
      },
      {
        icon: Shield,
        title: 'Keamanan Data',
        description: 'Standar keamanan enterprise-grade'
      },
      {
        icon: Users,
        title: 'Akses Pasar',
        description: 'Jaringan 150M+ pelanggan'
      }
    ],
    accentBorder: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    website: 'https://telkom.co.id',
    featured: true
  },
  {
    id: 'indigo-creative-nation',
    name: 'Indigo Creative Nation',
    tagline: 'Business Incubator',
    initial: 'I',
    gradient: 'from-purple-500 to-pink-500',
    logo: logodev('indigo.id'),
    category: 'incubator',
    since: '2018',
    description: 'Program inkubasi dari Telkom Group yang membantu pengembangan bisnis startup kreatif Indonesia melalui mentoring, networking, dan akses pendanaan.',
    contributions: [
      {
        icon: GraduationCap,
        title: 'Mentoring Bisnis',
        description: 'Bimbingan dari para expert'
      },
      {
        icon: Lightbulb,
        title: 'Innovation Lab',
        description: 'Akses fasilitas R&D'
      },
      {
        icon: Users,
        title: 'Networking',
        description: 'Koneksi ke 500+ startup'
      },
      {
        icon: Target,
        title: 'Market Access',
        description: 'Bantuan go-to-market strategy'
      }
    ],
    accentBorder: 'border-purple-200',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    website: 'https://indigo.id',
    featured: true
  },
  {
    id: 'viisa-accelerator',
    name: 'VIISA',
    tagline: 'Startup Accelerator',
    initial: 'V',
    gradient: 'from-[#1A1F71] to-[#F7B600]',
    logo: logodev('viisa.vn'),
    category: 'accelerator',
    since: '2017',
    description: 'Vietnam Innovative Startup Accelerator - program akselerator internasional yang membantu ekspansi regional dan akses ke pasar Asia Tenggara.',
    contributions: [
      {
        icon: Rocket,
        title: 'Akselerasi Bisnis',
        description: 'Program intensif 6 bulan'
      },
      {
        icon: Globe,
        title: 'Ekspansi ASEAN',
        description: 'Akses ke 5 negara Asia Tenggara'
      },
      {
        icon: Target,
        title: 'Investment Ready',
        description: 'Persiapan untuk funding round'
      },
      {
        icon: Award,
        title: 'Global Exposure',
        description: 'Demo day internasional'
      }
    ],
    accentBorder: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    website: 'https://viisa.vn',
    featured: true
  }
]


