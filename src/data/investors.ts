import {
  TrendingUp,
  Building2,
  Users,
  Globe,
  Target,
  Award,
  type LucideIcon
} from 'lucide-react'
import { logodev } from '@/utils/image'

// ============================================================================
// TYPES
// ============================================================================
export type InvestorType =
  | 'venture-capital'    // VC firm
  | 'angel'              // Angel investor
  | 'corporate'          // Corporate investor
  | 'government'         // Government fund
  | 'strategic'          // Strategic investor
  | 'family-office'      // Family office
  | 'custom'             // Custom type

export type Investor = {
  id: string
  name: string
  tagline: string
  initial: string
  gradient: string
  logo?: string
  type?: InvestorType
  since?: string
  description?: string
  investmentStage?: string // Seed, Series A, B, etc.
  website?: string
  featured?: boolean
}

// ============================================================================
// HELPER - Type Label
// ============================================================================
export const getInvestorTypeLabel = (type?: InvestorType): string => {
  const map: Record<InvestorType, string> = {
    'venture-capital': 'Venture Capital',
    'angel': 'Angel Investor',
    'corporate': 'Corporate Investor',
    'government': 'Government Fund',
    'strategic': 'Strategic Investor',
    'family-office': 'Family Office',
    'custom': 'Investor'
  }
  return map[type || 'custom'] || 'Investor'
}

// ============================================================================
// HELPER - Gradient per Type
// ============================================================================
export const getInvestorGradient = (type?: InvestorType): string => {
  const map: Record<InvestorType, string> = {
    'venture-capital': 'from-blue-500 to-blue-700',
    'angel': 'from-purple-500 to-pink-500',
    'corporate': 'from-emerald-500 to-emerald-700',
    'government': 'from-red-500 to-red-700',
    'strategic': 'from-[#C5A059] to-[#8C6F3D]',
    'family-office': 'from-indigo-500 to-indigo-700',
    'custom': 'from-gray-500 to-gray-700'
  }
  return map[type || 'custom'] || 'from-gray-500 to-gray-700'
}

// ============================================================================
// HELPER - Icon per Type
// ============================================================================
export const getInvestorIcon = (type?: InvestorType): LucideIcon => {
  const map: Record<InvestorType, LucideIcon> = {
    'venture-capital': TrendingUp,
    'angel': Users,
    'corporate': Building2,
    'government': Globe,
    'strategic': Target,
    'family-office': Award,
    'custom': TrendingUp
  }
  return map[type || 'custom'] || TrendingUp
}

// ============================================================================
// HELPER - Utility Functions
// ============================================================================

/**
 * Filter investors by type
 */
export const filterInvestorsByType = (
  investors: Investor[],
  type: InvestorType
): Investor[] => {
  return investors.filter(i => i.type === type)
}

/**
 * Get featured investors only
 */
export const getFeaturedInvestors = (investors: Investor[]): Investor[] => {
  return investors.filter(i => i.featured)
}

/**
 * Sort investors by year (newest first)
 */
export const sortInvestorsByYear = (
  investors: Investor[],
  order: 'asc' | 'desc' = 'desc'
): Investor[] => {
  return [...investors].sort((a, b) => {
    const yearA = parseInt(a.since || '0')
    const yearB = parseInt(b.since || '0')
    return order === 'desc' ? yearB - yearA : yearA - yearB
  })
}

/**
 * Get unique types from investors
 */
export const getUniqueInvestorTypes = (investors: Investor[]): InvestorType[] => {
  return [...new Set(investors.map(i => i.type || 'custom'))] as InvestorType[]
}

// ============================================================================
// INVESTORS DATA - AuthenticGuards
// ============================================================================
// Saat ini kosong - akan diisi ketika ada investor real
// export const InvestorsData: Investor[] = [
//   // Contoh data (uncomment dan edit ketika ada investor):
//   // {
//   //   id: 'east-ventures',
//   //   name: 'East Ventures',
//   //   tagline: 'Venture Capital',
//   //   initial: 'E',
//   //   gradient: 'from-blue-500 to-blue-700',
//   //   logo: 'https://logo.clearbit.com/eastventures.com',
//   //   type: 'venture-capital',
//   //   since: '2023',
//   //   description: 'Venture capital firm fokus pada startup early-stage di Asia Tenggara.',
//   //   investmentStage: 'Seed Round',
//   //   website: 'https://eastventures.com',
//   //   featured: true
//   // },
//   // {
//   //   id: 'angel-investor-1',
//   //   name: 'John Doe',
//   //   tagline: 'Angel Investor',
//   //   initial: 'J',
//   //   gradient: 'from-purple-500 to-pink-500',
//   //   type: 'angel',
//   //   since: '2022',
//   //   description: 'Serial entrepreneur dan investor di bidang teknologi.',
//   //   investmentStage: 'Pre-Seed',
//   //   featured: false
//   // }
  
// ]


export const InvestorsData: Investor[] = [
  {
    id: 'backer-kadin-jabar',
    name: 'KADIN Jawa Barat',
    tagline: 'Kamar Dagang dan Industri Provinsi Jawa Barat',
    initial: 'KJ',
    gradient: 'from-blue-600 to-blue-800',
    type: 'strategic', // Sesuaikan dengan InvestorType
    since: '2017',
    description: 'Induk organisasi dunia usaha yang memayungi pelaku usaha di Jawa Barat, memberikan legitimasi, advokasi, dan perluasan jaringan bisnis yang strategis.',
    website: 'https://kadinprovjabar.id',
    featured: true,
    logo: logodev('kadinjabar.or.id')
  },
  {
    id: 'backer-hipmi-jabar',
    name: 'HIPMI Jawa Barat',
    tagline: 'Himpunan Pengusaha Muda Indonesia',
    initial: 'HJ',
    gradient: 'from-red-500 to-red-700',
    type: 'strategic',
    since: '2017',
    description: 'Wadah pengembangan kewirausahaan, jejaring bisnis, dan inovasi bagi pengusaha muda, yang mendukung pertumbuhan startup teknologi di tingkat daerah.',
    website: 'https://hipmijabar.org',
    featured: true,
    logo: logodev('hipmijabar.com')
  },
  {
    id: 'backer-ardin-jabar',
    name: 'ARDIN Jawa Barat',
    tagline: 'Asosiasi Perusahaan Perdagangan & Distributor',
    initial: 'AJ',
    gradient: 'from-emerald-600 to-emerald-800',
    type: 'strategic',
    since: '2018',
    description: 'Mitra strategis dalam penguatan ekosistem distribusi dan perdagangan barang, mendukung integrasi solusi keamanan produk ke dalam rantai pasok regional.',
    website: 'https://ardinjabar.or.id',
    featured: false
  },
]