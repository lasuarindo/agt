import { Rocket, Trophy, Globe, Lightbulb, BadgeCheck, Users, Handshake, Zap, type LucideIcon, User } from 'lucide-react'
import type { TFunction } from 'i18next'

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
 * Data timeline utama - Perjalanan Authentic Guards
 */
export const timelineData: TimelineItem[] = [
  { 
    year: '2017',
    quarter: 'Q2',
    title: 'Berdiri',
    desc: 'PT. Autentikasi Garda Teknologi didirikan dengan visi menjadi pelopor sistem anti-counterfeit dan keamanan produk terpercaya di Indonesia.', 
    highlight: true,
    icon: Rocket,
    category: 'milestone',
    tags: ['Pendiri', 'Bandung']
  },
  { 
    year: '2017',
    quarter: 'Q3',
    title: 'Top 100 Startup Asia Pacific',
    desc: 'Meraih penghargaan Top 100 Startup Asia Pacific di Echelon Asia Summit, membuktikan potensi dan validasi teknologi kami di kancah internasional.', 
    highlight: true,
    icon: Trophy,
    category: 'achievement',
    tags: ['International', 'Award', 'Echelon']
  },
  {
    year: '2017',
    quarter: 'Q3',
    title: 'Join Indigo',
    desc: 'Resmi bergabung dengan program Indigo Creative Nation dari Telkom Group sebagai langkah awal inkubasi bisnis dan pengembangan produk.',
    icon: Lightbulb,
    category: 'partnership',
    tags: ['Telkom Group', 'Incubator']
  },
  {
    year: '2017',
    quarter: 'Q4',
    title: 'Inkubasi Indigo',
    desc: 'Menjalani masa inkubasi intensif untuk mematangkan model bisnis, validasi pasar, dan pengembangan teknologi inti bersama para mentor ahli.',
    icon: Lightbulb,
    category: 'partnership',
    tags: ['Incubator', 'Development']
  },
  {
    year: '2018',
    quarter: 'Q3',
    title: 'Alumni Indigo Creative Nation',
    desc: 'Lulus dari program inkubasi Indigo Creative Nation dengan produk yang siap diluncurkan ke pasar, didukung oleh jaringan ekosistem yang kuat.',
    icon: BadgeCheck,
    highlight: true,
    category: 'achievement',
    tags: ['Graduate', 'Telkom Group']
  },
  {
    year: '2018',
    quarter: 'Q4',
    title: 'Alumni VIISA',
    desc: 'Menjadi bagian dari Vietnam Innovative Startup Accelerator (VIISA), memperluas jaringan, validasi, dan wawasan startup di tingkat Asia Tenggara.',
    icon: Globe,
    highlight: true,
    category: 'achievement',
    tags: ['Accelerator', 'Vietnam', 'ASEAN']
  },
  { 
    year: '2018',
    quarter: 'Q4',
    title: 'Ekspansi Produk',
    desc: 'Meluncurkan teknologi kode keamanan generasi terbaru yang terintegrasi dengan sistem database real-time untuk verifikasi keaslian produk yang lebih akurat.', 
    highlight: true,
    icon: Zap,
    category: 'technology',
    tags: ['Product Launch', 'Security', 'Real-time']
  },
  {
    year: '2019',
    quarter: 'Q2',
    title: 'Adopsi Standar ISO 18004:2015',
    desc: 'Mengadopsi standar internasional ISO/IEC 18004:2015 sebagai rujukan spesifikasi teknis utama dalam pengembangan QR code Authentic Guards.',
    icon: BadgeCheck,
    highlight: true,
    category: 'achievement',
    tags: ['Licensed', 'International Standard', 'ISO']
  }
]

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Mendapatkan data timeline lengkap (opsional translate via t).
 */
export const getTimelineData = (t?: TFunction): TimelineItem[] => {
  if (!t) return timelineData
  return timelineData.map((item, i) => {
    const key = `data/timeline:${i}`
    return {
      ...item,
      title: t(`${key}.title`, { defaultValue: item.title }),
      desc: t(`${key}.desc`, { defaultValue: item.desc })
    }
  })
}

/**
 * Mendapatkan hanya milestone yang di-highlight
 */
export const getHighlightedMilestones = (t?: TFunction): TimelineItem[] => {
  return getTimelineData(t).filter(item => item.highlight)
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