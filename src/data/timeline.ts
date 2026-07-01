import { Rocket, Trophy, Globe, Lightbulb, BadgeCheck, Users, Handshake, type LucideIcon, User } from 'lucide-react'

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

/**
 * Kategori timeline untuk filtering dan grouping
 */
export type TimelineCategory = 
  | 'milestone'      // Pencapaian utama perusahaan
  | 'achievement'    // Penghargaan & sertifikasi
  | 'partnership'    // Kemitraan strategis
  | 'expansion'      // Ekspansi produk/pasar
  | 'technology'     // Peluncuran teknologi baru

/**
 * Tahun-tahun penting dalam timeline
 */
export type TimelineYear = '2017' | '2018' | '2019' | '2020' | '2021' | '2022' | '2023' | '2024' | '2025'

/**
 * Quarter dalam setahun
 */
export type TimelineQuarter = 'Q1' | 'Q2' | 'Q3' | 'Q4'

/**
 * Interface untuk setiap item timeline
 */
export interface TimelineItem {
  /** Tahun kejadian */
  year: TimelineYear | string
  
  /** Quarter kejadian (opsional, beberapa event tidak spesifik quarter) */
  quarter?: TimelineQuarter
  
  /** Judul event */
  title: string
  
  /** Deskripsi detail event */
  desc: string
  
  /** Apakah ini milestone penting (untuk styling highlight) */
  highlight?: boolean
  
  /** Icon Lucide React */
  icon: LucideIcon
  
  /** Kategori event untuk filtering */
  category?: TimelineCategory
  
  /** Tags tambahan untuk label (misal: "International", "Partnership") */
  tags?: string[]
  
  /** URL opsional untuk detail lebih lanjut */
  link?: string
}

/**
 * Interface untuk statistik timeline
 */
export interface TimelineStats {
  totalEvents: number
  highlightedEvents: number
  yearRange: { start: string; end: string }
  yearsActive: number
  categoryCount: Record<TimelineCategory, number>
}

/**
 * Interface untuk filter timeline
 */
export interface TimelineFilter {
  year?: TimelineYear | string
  category?: TimelineCategory
  highlightedOnly?: boolean
  searchQuery?: string
}

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * Label untuk setiap kategori timeline
 */
export const TIMELINE_CATEGORY_LABELS: Record<TimelineCategory, string> = {
  milestone: 'Milestone',
  achievement: 'Prestasi',
  partnership: 'Kemitraan',
  expansion: 'Ekspansi',
  technology: 'Teknologi'
}

/**
 * Warna untuk setiap kategori timeline
 */
export const TIMELINE_CATEGORY_COLORS: Record<TimelineCategory, { bg: string; text: string; border: string }> = {
  milestone: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200' },
  achievement: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200' },
  partnership: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
  expansion: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
  technology: { bg: 'bg-rose-100', text: 'text-rose-700', border: 'border-rose-200' }
}

// ============================================================================
// TIMELINE DATA
// ============================================================================

/**
 * Data timeline utama - Perjalanan 8 tahun Authentic Guards
 */
export const timelineData: TimelineItem[] = [
  { 
    year: '2017',
    quarter: 'Q2',
    title: 'Berdiri',
    desc: 'PT. Autentikasi Garda Teknologi didirikan dengan visi menjadi pelopor sistem anti-counterfeit pertama di Indonesia dan Asia Pasifik.', 
    highlight: true,
    icon: Rocket,
    category: 'milestone',
    tags: ['Pendiri', 'Bandung']
  },
  { 
    year: '2017',
    quarter: 'Q3',
    title: 'Top 100 Startup Asia Pacific',
    desc: 'Meraih penghargaan Top 100 Startup Asia Pacific di Echelon Asia Summit, membuktikan potensi teknologi kami di kancah internasional.', 
    highlight: true,
    icon: Trophy,
    category: 'achievement',
    tags: ['International', 'Award']
  },
  {
    year: '2017',
    quarter: 'Q4',
    title: 'Alumni VIISA',
    desc: 'Menjadi bagian dari Vietnam Innovative Startup Accelerator (VIISA) 2017, program akselerator startup terkemuka di Asia Tenggara.',
    icon: Globe,
    category: 'achievement',
    tags: ['Accelerator', 'Vietnam']
  },
  {
    year: '2018',
    quarter: 'Q1',
    title: 'Alumni Indigo Creative Nation',
    desc: 'Bergabung dengan Indigo Creative Nation 2018, program inkubasi bisnis dari Telkom Group untuk mengembangkan produk dan layanan.',
    icon: Lightbulb,
    category: 'partnership',
    tags: ['Telkom Group', 'Incubator']
  },
  { 
    year: '2018',
    quarter: 'Q2',
    title: 'Ekspansi Produk',
    desc: 'Meluncurkan teknologi kode AG dengan 5 lapis keamanan, terintegrasi dengan database real-time berstandar ISO/IEC 27000:2016.', 
    highlight: true,
    icon: Lightbulb,
    category: 'technology',
    tags: ['5 Lapis Keamanan', 'ISO 27000']
  },
  {
    year: '2019',
    quarter: 'Q2',
    title: 'Adopsi Standar ISO 18004:2015',
    desc: 'Mengadopsi standar internasional ISO/IEC 18004:2015 sebagai rujukan spesifikasi teknis dalam pengembangan QR code Authentic Guards.',
    icon: BadgeCheck,
    highlight: true,
    category: 'achievement',
    tags: ['Licensed', 'International Standard']
  },
  { 
    year: '2020',
    quarter: 'Q1',
    title: 'Proposal Global & 100+ Brand',
    desc: 'Merilis Proposal Global 2020 dengan teknologi 5 lapis keamanan. Mencapai milestone 100+ brand partner dari berbagai industri.',
    highlight: true,
    icon: Users,
    category: 'milestone',
    tags: ['100+ Brand', 'Global Proposal']
  },
  {
    year: '2020',
    quarter: 'Q2',
    title: 'Kemitraan Strategis Telkom',
    desc: 'Menjadi mitra strategis Telkom Indonesia untuk infrastruktur cloud dan konektivitas digital, memperkuat fondasi teknologi.',
    icon: Handshake,
    category: 'partnership',
    tags: ['Telkom Indonesia', 'Cloud Infrastructure']
  },
  { 
    year: '2025',
    title: '500+ Brand & Regional',
    desc: 'Memperluas jangkauan ke seluruh Asia Pasifik dengan lebih dari 500 brand partner aktif di berbagai industri.', 
    highlight: true,
    icon: Globe,
    category: 'expansion',
    tags: ['500+ Brand', 'Asia Pasifik']
  },
]

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Mendapatkan data timeline lengkap
 */
export const getTimelineData = (): TimelineItem[] => {
  return timelineData
}

/**
 * Mendapatkan hanya milestone yang di-highlight
 */
export const getHighlightedMilestones = (): TimelineItem[] => {
  return timelineData.filter(item => item.highlight)
}

/**
 * Filter timeline berdasarkan tahun
 */
export const getTimelineByYear = (year: TimelineYear | string): TimelineItem[] => {
  return timelineData.filter(item => item.year === year)
}

/**
 * Filter timeline berdasarkan kategori
 */
export const getTimelineByCategory = (category: TimelineCategory): TimelineItem[] => {
  return timelineData.filter(item => item.category === category)
}

/**
 * Filter timeline dengan multiple criteria
 */
export const filterTimeline = (filter: TimelineFilter): TimelineItem[] => {
  return timelineData.filter(item => {
    if (filter.year && item.year !== filter.year) return false
    if (filter.category && item.category !== filter.category) return false
    if (filter.highlightedOnly && !item.highlight) return false
    if (filter.searchQuery) {
      const query = filter.searchQuery.toLowerCase()
      const searchableText = `${item.title} ${item.desc} ${item.tags?.join(' ') || ''}`.toLowerCase()
      if (!searchableText.includes(query)) return false
    }
    return true
  })
}

/**
 * Mendapatkan daftar tahun unik dari timeline
 */
export const getUniqueYears = (): string[] => {
  const years = new Set(timelineData.map(item => item.year))
  return Array.from(years).sort()
}

/**
 * Mendapatkan daftar kategori yang digunakan
 */
export const getUsedCategories = (): TimelineCategory[] => {
  const categories = new Set(
    timelineData
      .map(item => item.category)
      .filter((cat): cat is TimelineCategory => cat !== undefined)
  )
  return Array.from(categories)
}

/**
 * Menghitung statistik timeline
 */
export const getTimelineStats = (): TimelineStats => {
  const categoryCount = {
    milestone: 0,
    achievement: 0,
    partnership: 0,
    expansion: 0,
    technology: 0
  }

  timelineData.forEach(item => {
    if (item.category) {
      categoryCount[item.category]++
    }
  })

  const years = getUniqueYears()
  
  return {
    totalEvents: timelineData.length,
    highlightedEvents: timelineData.filter(item => item.highlight).length,
    yearRange: {
      start: years[0],
      end: years[years.length - 1]
    },
    yearsActive: years.length,
    categoryCount
  }
}

/**
 * Format label waktu untuk ditampilkan (misal: "2017 Q2")
 */
export const formatTimelineLabel = (item: TimelineItem): string => {
  return item.quarter ? `${item.year} ${item.quarter}` : item.year
}

/**
 * Mendapatkan item timeline berikutnya
 */
export const getNextTimelineItem = (currentIndex: number): TimelineItem | null => {
  return timelineData[currentIndex + 1] || null
}

/**
 * Mendapatkan item timeline sebelumnya
 */
export const getPreviousTimelineItem = (currentIndex: number): TimelineItem | null => {
  return timelineData[currentIndex - 1] || null
}

/**
 * Group timeline items by year
 */
export const groupTimelineByYear = (): Record<string, TimelineItem[]> => {
  return timelineData.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = []
    }
    acc[item.year].push(item)
    return acc
  }, {} as Record<string, TimelineItem[]>)
}

/**
 * Group timeline items by category
 */
export const groupTimelineByCategory = (): Record<TimelineCategory, TimelineItem[]> => {
  const grouped = {} as Record<TimelineCategory, TimelineItem[]>
  
  timelineData.forEach(item => {
    if (item.category) {
      if (!grouped[item.category]) {
        grouped[item.category] = []
      }
      grouped[item.category].push(item)
    }
  })
  
  return grouped
}

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

/*
// Contoh penggunaan di component React:

import { 
  getTimelineData, 
  getHighlightedMilestones, 
  getTimelineStats,
  filterTimeline,
  formatTimelineLabel,
  TIMELINE_CATEGORY_LABELS,
  TIMELINE_CATEGORY_COLORS
} from './timelineData'

function TimelineComponent() {
  const allTimeline = getTimelineData()
  const milestones = getHighlightedMilestones()
  const stats = getTimelineStats()
  
  // Filter example
  const techEvents = filterTimeline({ category: 'technology' })
  const year2017Events = filterTimeline({ year: '2017' })
  
  return (
    <div>
      <p>Total Events: {stats.totalEvents}</p>
      <p>Years Active: {stats.yearsActive}</p>
      
      {allTimeline.map((item, idx) => (
        <div key={idx}>
          <h3>{formatTimelineLabel(item)}</h3>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
          
          {item.category && (
            <span className={`${TIMELINE_CATEGORY_COLORS[item.category].bg} ${TIMELINE_CATEGORY_COLORS[item.category].text}`}>
              {TIMELINE_CATEGORY_LABELS[item.category]}
            </span>
          )}
          
          {item.tags?.map((tag, tagIdx) => (
            <span key={tagIdx}>{tag}</span>
          ))}
        </div>
      ))}
    </div>
  )
}
*/