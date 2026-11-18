import {
  Newspaper,
  Radio,
  Tv,
  Mic2,
  FileText,
  Award,
  Globe,
  TrendingUp,
  Star,
  ExternalLink,
  type LucideIcon
} from 'lucide-react'
import { logodev } from '@/utils/image'
import type { TFunction } from 'i18next'

// ============================================================================
// TYPES
// ============================================================================
export type CoverageCategory =
  | 'news'              // Berita
  | 'interview'         // Wawancara
  | 'podcast'           // Podcast
  | 'video'             // Video/TV
  | 'press-release'     // Press Release
  | 'award'             // Penghargaan
  | 'magazine'          // Majalah
  | 'other'             // Lainnya
  
export type CoverageLanguage = 'id' | 'en' | 'zh' | 'other'
  
export type MediaCoverage = {
  // Required - Minimal info yang harus ada
  id: string
  outlet: string              // Nama media (wajib)
  
  // Optional - Bisa ada atau tidak
  title?: string              // Judul artikel (optional)
  url?: string                // Link artikel (optional)
  date?: string               // Tanggal (optional)
  year?: string               // Tahun saja (optional, alternatif dari date)
  
  // Media Info
  outletLogo?: string         // Logo media
  outletUrl?: string          // Website media
  
  // Content (optional)
  category?: CoverageCategory
  language?: CoverageLanguage | string
  description?: string
  quote?: string
  author?: string
  
  // Display (optional)
  featured?: boolean
  gradient?: string
  icon?: LucideIcon
  
  // Notes internal (tidak ditampilkan)
  notes?: string
}


// ============================================================================
// HELPER - Category Label
// ============================================================================
export const getCoverageCategoryLabel = (category?: CoverageCategory): string => {
  const map: Record<CoverageCategory, string> = {
    'news': 'Berita',
    'interview': 'Wawancara',
    'podcast': 'Podcast',
    'video': 'Video',
    'press-release': 'Press Release',
    'award': 'Penghargaan',
    'magazine': 'Majalah',
    'other': 'Liputan'
  }
  return map[category || 'other'] || 'Liputan'
}


// ============================================================================
// HELPER - Category Icon
// ============================================================================
export const getCoverageIcon = (category?: CoverageCategory): LucideIcon => {
  const map: Record<CoverageCategory, LucideIcon> = {
    'news': Newspaper,
    'interview': Mic2,
    'podcast': Radio,
    'video': Tv,
    'press-release': FileText,
    'award': Award,
    'magazine': FileText,
    'other': Globe
  }
  return map[category || 'other'] || Globe
}


// ============================================================================
// HELPER - Category Gradient
// ============================================================================
export const getCoverageGradient = (category?: CoverageCategory): string => {
  const map: Record<CoverageCategory, string> = {
    'news': 'from-blue-500 to-blue-700',
    'interview': 'from-purple-500 to-pink-500',
    'podcast': 'from-rose-500 to-rose-700',
    'video': 'from-red-500 to-red-700',
    'press-release': 'from-emerald-500 to-emerald-700',
    'award': 'from-[#C5A059] to-[#8C6F3D]',
    'magazine': 'from-indigo-500 to-indigo-700',
    'other': 'from-gray-500 to-gray-700'
  }
  return map[category || 'other'] || 'from-gray-500 to-gray-700'
}

// ============================================================================
// HELPER - Category Badge Style
// ============================================================================
export const getCoverageBadgeStyle = (category?: CoverageCategory): string => {
  const map: Record<CoverageCategory, string> = {
    'news': 'bg-blue-100 text-blue-700 border-blue-200',
    'interview': 'bg-purple-100 text-purple-700 border-purple-200',
    'podcast': 'bg-rose-100 text-rose-700 border-rose-200',
    'video': 'bg-red-100 text-red-700 border-red-200',
    'press-release': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'award': 'bg-[#E8D09E]/30 text-[#8C6F3D] border-[#E8D09E]/40',
    'magazine': 'bg-indigo-100 text-indigo-700 border-indigo-200',
    'other': 'bg-gray-100 text-gray-700 border-gray-200'
  }
  return map[category || 'other'] || ''
}

// ============================================================================
// HELPER - Language Label
// ============================================================================
export const getCoverageLanguageLabel = (language?: CoverageLanguage): string => {
  const map: Record<CoverageLanguage, string> = {
    'id': 'ID',
    'en': 'EN',
    'zh': '中文',
    'other': 'INT'
  }
  return map[language || 'id'] || 'ID'
}

// ============================================================================
// HELPER - Format Date
// ============================================================================
export const formatCoverageDate = (coverage: MediaCoverage): string => {
  if (coverage.year) return coverage.year
  if (coverage.date) {
    if (coverage.date.includes('-')) {
      const d = new Date(coverage.date)
      return d.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    return coverage.date
  }
  return 'Tanggal tidak tersedia'
}

// ============================================================================
// HELPER - Get Display Title
// ============================================================================
export const getDisplayTitle = (coverage: MediaCoverage): string => {
  if (coverage.title) return coverage.title
  return `Liputan ${coverage.outlet}`
}

// ============================================================================
// HELPER - Utility Functions
// ============================================================================

/**
 * Filter coverage by category
 */
export const filterCoverageByCategory = (
  coverages: MediaCoverage[],
  category: CoverageCategory
): MediaCoverage[] => {
  return coverages.filter(c => c.category === category)
}

// ============================================================================
// HELPER - Utility Functions
// ============================================================================

export const getFeaturedCoverage = (coverages: MediaCoverage[]): MediaCoverage[] => {
  return coverages.filter(c => c.featured)
}

export const sortCoverageByDate = (
  coverages: MediaCoverage[],
  order: 'asc' | 'desc' = 'desc'
): MediaCoverage[] => {
  return [...coverages].sort((a, b) => {
    const dateA = new Date(a.date || a.year || '0').getTime()
    const dateB = new Date(b.date || b.year || '0').getTime()
    return order === 'desc' ? dateB - dateA : dateA - dateB
  })
}

export const getUniqueOutlets = (coverages: MediaCoverage[]): string[] => {
  return [...new Set(coverages.map(c => c.outlet))]
}

/**
 * Get unique categories from coverage
 */
export const getUniqueCoverageCategories = (coverages: MediaCoverage[]): CoverageCategory[] => {
  return [...new Set(coverages.map(c => c.category || 'other'))] as CoverageCategory[]
}

/**
 * Get coverage count by year
 */
export const getCoverageCountByYear = (coverages: MediaCoverage[]): Record<string, number> => {
  return coverages.reduce((acc, c) => {
    const year = c.date?.split('-')[0] || 'Unknown';
    acc[year] = (acc[year] || 0) + 1
    return acc
  }, {} as Record<string, number>)
}

// ============================================================================
// MEDIA COVERAGE DATA - AuthenticGuards (Flexible)
// ============================================================================
export const MediaCoverageData: MediaCoverage[] = [
  // Dengan data lengkap
  {
    id: 'tech-in-asia',
    outlet: 'Tech in Asia',
    outletLogo: logodev('techinasia.com'),
    outletUrl: 'https://techinasia.com',
    title: 'AuthenticGuards: Startup Anti-Counterfeit yang Solusi Teknologi Autentikasi Produk',
    url: 'https://techinasia.com/authenticguards-anti-counterfeit-solution',
    date: '2017-09-15',
    category: 'news',
    language: 'en',
    description: 'Tech in Asia meliput inovasi AuthenticGuards dalam menghadirkan solusi autentikasi produk.',
    featured: true,
    gradient: 'from-blue-500 to-blue-700'
  },
  
  // Hanya info dasar (tanpa link artikel)
  {
    id: 'e27',
    outlet: 'e27',
    outletLogo: '',
    outletUrl: 'https://e27.co',
    title: 'Indonesian Startup AuthenticGuards Tackles Product Counterfeiting',
    year: '2018',
    category: 'news',
    language: 'en',
    featured: true,
    gradient: 'from-gray-700 to-gray-900',
    notes: 'Artikel tidak ditemukan, hanya ada di proposal'
  },
  
  // Minimal data
  {
    id: 'dailysocial',
    outlet: 'DailySocial',
    outletLogo: logodev('dailysocial.id'),
    title: 'AuthenticGuards Kembangkan Solusi Autentikasi Produk',
    year: '2018',
    category: 'news',
    language: 'id',
    featured: true
  },
  
  // Tanpa title, hanya outlet
  {
    id: 'kompas',
    outlet: 'Kompas.com',
    outletLogo: logodev('kompas.com'),
    outletUrl: 'https://kompas.com',
    year: '2019',
    category: 'news',
    language: 'id',
    description: 'Kompas.com memberitakan tentang upaya AuthenticGuards membantu UMKM.',
    featured: true
  },
  
  // Video feature tanpa link
  {
    id: 'metrotv',
    outlet: 'MetroTV News',
    outletLogo: logodev('metrotvnews.com'),
    title: 'Startup Lokal Kembangkan Teknologi Autentikasi Produk',
    year: '2020',
    category: 'video',
    language: 'id',
    notes: 'Liputan TV, tidak ada link online'
  },
  
  // Award announcement
  {
    id: 'globe',
    outlet: 'The Jakarta Globe',
    outletLogo: logodev('thejakartaglobe.id'),
    title: 'AuthenticGuards Receives Recognition for Anti-Counterfeit Innovation',
    year: '2020',
    category: 'award',
    language: 'en',
    featured: true
  },
  
  // Press release
  {
    id: 'republika',
    outlet: 'Republika.co.id',
    outletLogo: '',
    year: '2020',
    category: 'press-release',
    language: 'id'
  },
  
  // Hanya outlet dan tahun
  {
    id: 'pikiran-rakyat',
    outlet: 'Pikiran Rakyat',
    outletLogo: logodev('pikiran-rakyat.com'),
    year: '2021',
    category: 'news',
    language: 'id'
  },
  
  // Dengan quote
  {
    id: 'detiknews',
    outlet: 'detikNews',
    outletLogo: logodev('detik.com'),
    title: 'AuthenticGuards Raih Penghargaan Startup Inovatif 2021',
    year: '2021',
    category: 'award',
    language: 'id',
    quote: 'Inovasi dalam autentikasi produk bukan hanya tentang teknologi, tapi tentang melindungi kepercayaan konsumen.',
    featured: true
  }
]

// ============================================================================
// I18N HELPERS - Translate display fields (keeps outlet/logos/links)
// ============================================================================

/**
 * Translate display fields of every coverage (title, description, quote).
 * `outlet`, `date`, `year`, `category`, `language`, `url` stay as-is.
 */
export const getMediaCoverageData = (t: TFunction): MediaCoverage[] =>
  MediaCoverageData.map(c => {
    const key = `data/media-coverage:${c.id}`
    return {
      ...c,
      title: c.title ? t(`${key}.title`, { defaultValue: c.title }) : c.title,
      description: c.description ? t(`${key}.description`, { defaultValue: c.description }) : c.description,
      quote: c.quote ? t(`${key}.quote`, { defaultValue: c.quote }) : c.quote
    }
  })