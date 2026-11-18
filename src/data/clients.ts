import { logodev } from '@/utils/image';
import {
  ShieldCheck,
  Utensils,
  Shirt,
  Sparkles,
  Laptop,
  Heart,
  Coffee,
  Gem,
  type LucideIcon,
  WavesVertical,
  Tags,
  Car,
  GraduationCap,
  Briefcase
} from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================
export type ClientCategory =
  | 'fnb'             // F&B
  | 'vaporize'        // Vaping
  | 'fashion'         // Fashion, Apparel, Sportswear
  | 'beauty'          // Kosmetik, Perawatan
  | 'tech'            // Elektronik, Gadget
  | 'health'          // Farmasi, Kesehatan
  | 'lifestyle'       // Lifestyle, Luxury Goods
  | 'automotive'      // Otomotif
  | 'education'       // Pendidikan
  | 'custom'          // Lainnya
  | 'merchandise'
  
export type ClientCategoryDetail = {
  id: ClientCategory | 'all'
  label: string
  description?: string
}

export type Client = {
  id: string
  name: string
  industry: string
  category?: ClientCategory
  since: string
  description?: string
  logo?: string
  website?: string
  location?: string
  gradient?: string
}

// ============================================================================
// HELPER - Category Label
// ============================================================================
export const getClientCategoryLabel = (category?: ClientCategory): string => {
  const map: Record<ClientCategory, string> = {
    'fnb': 'F&B',
    'vaporize': 'Vaporize',
    'fashion': 'Fashion',
    'beauty': 'Kecantikan',
    'tech': 'Teknologi',
    'health': 'Kesehatan',
    'lifestyle': 'Lifestyle',
    'automotive': 'Otomotif',
    'education': 'Pendidikan',
    'merchandise': 'Merchandise',
    'custom': 'Lainnya'
  }
  return map[category || 'custom'] || 'Lainnya'
}

// ============================================================================
// HELPER - Category Icon
// ============================================================================
export const getClientIcon = (category?: ClientCategory): LucideIcon => {
  const map: Record<ClientCategory, LucideIcon> = {
    'fnb': Utensils,
    'vaporize': WavesVertical,
    'fashion': Shirt,
    'beauty': Sparkles,
    'tech': Laptop,
    'health': Heart,
    'lifestyle': Coffee,
    'automotive': Car,
    'education': GraduationCap,
    'merchandise': Tags,
    'custom': Briefcase
  }
  return map[category || 'custom'] || Briefcase
}

// ============================================================================
// HELPER - Category Gradient
// ============================================================================
export const getClientGradient = (category?: ClientCategory): string => {
  const map: Record<ClientCategory, string> = {
    'fnb': 'from-orange-500 to-red-600',
    'vaporize': 'from-violet-500 to-purple-600',
    'fashion': 'from-pink-500 to-purple-600',
    'beauty': 'from-rose-400 to-pink-500',
    'tech': 'from-blue-500 to-indigo-600',
    'health': 'from-emerald-500 to-teal-600',
    'lifestyle': 'from-amber-500 to-orange-600',
    'automotive': 'from-slate-600 to-gray-800',
    'education': 'from-cyan-500 to-blue-600',
    'merchandise': 'from-yellow-500 to-amber-600',
    'custom': 'from-gray-500 to-gray-700'
  }
  return map[category || 'custom'] || 'from-gray-500 to-gray-700'
}

// ============================================================================
// HELPER - Category Badge Style
// ============================================================================
export const getClientBadgeStyle = (category?: ClientCategory): string => {
  const map: Record<ClientCategory, string> = {
    'fnb': 'bg-orange-100 text-orange-700 border-orange-200',
    'vaporize': 'bg-violet-100 text-violet-700 border-violet-200',
    'fashion': 'bg-pink-100 text-pink-700 border-pink-200',
    'beauty': 'bg-rose-100 text-rose-700 border-rose-200',
    'tech': 'bg-blue-100 text-blue-700 border-blue-200',
    'health': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'lifestyle': 'bg-amber-100 text-amber-700 border-amber-200',
    'automotive': 'bg-slate-100 text-slate-700 border-slate-200',
    'education': 'bg-cyan-100 text-cyan-700 border-cyan-200',
    'merchandise': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'custom': 'bg-gray-100 text-gray-700 border-gray-200'
  }
  return map[category || 'custom'] || 'bg-gray-100 text-gray-700 border-gray-200'
}

// ============================================================================
// HELPER - Category Background
// ============================================================================
export const getClientBgColor = (category?: ClientCategory): string => {
  const map: Record<ClientCategory, string> = {
    'fnb': 'bg-orange-50',
    'vaporize': 'bg-violet-50',
    'fashion': 'bg-pink-50',
    'beauty': 'bg-rose-50',
    'tech': 'bg-blue-50',
    'health': 'bg-emerald-50',
    'lifestyle': 'bg-amber-50',
    'automotive': 'bg-slate-50',
    'education': 'bg-cyan-50',
    'merchandise': 'bg-yellow-50',
    'custom': 'bg-gray-50'
  }
  return map[category || 'custom'] || 'bg-gray-50'
}

// ============================================================================
// HELPER - Category Text Color
// ============================================================================
export const getClientTextColor = (category?: ClientCategory): string => {
  const map: Record<ClientCategory, string> = {
    'fnb': 'text-orange-700',
    'vaporize': 'text-violet-700',
    'fashion': 'text-pink-700',
    'beauty': 'text-rose-700',
    'tech': 'text-blue-700',
    'health': 'text-emerald-700',
    'lifestyle': 'text-amber-700',
    'automotive': 'text-slate-700',
    'education': 'text-cyan-700',
    'merchandise': 'text-yellow-700',
    'custom': 'text-gray-700'
  }
  return map[category || 'custom'] || 'text-gray-700'
}

// ============================================================================
// HELPER - Category Border Color
// ============================================================================
export const getClientBorderColor = (category?: ClientCategory): string => {
  const map: Record<ClientCategory, string> = {
    'fnb': 'border-orange-200',
    'vaporize': 'border-violet-200',
    'fashion': 'border-pink-200',
    'beauty': 'border-rose-200',
    'tech': 'border-blue-200',
    'health': 'border-emerald-200',
    'lifestyle': 'border-amber-200',
    'automotive': 'border-slate-200',
    'education': 'border-cyan-200',
    'merchandise': 'border-yellow-200',
    'custom': 'border-gray-200'
  }
  return map[category || 'custom'] || 'border-gray-200'
}

// ============================================================================
// HELPER - Category Ring Color
// ============================================================================
export const getClientRingColor = (category?: ClientCategory): string => {
  const map: Record<ClientCategory, string> = {
    'fnb': 'ring-orange-500',
    'vaporize': 'ring-violet-500',
    'fashion': 'ring-pink-500',
    'beauty': 'ring-rose-500',
    'tech': 'ring-blue-500',
    'health': 'ring-emerald-500',
    'lifestyle': 'ring-amber-500',
    'automotive': 'ring-slate-500',
    'education': 'ring-cyan-500',
    'merchandise': 'ring-yellow-500',
    'custom': 'ring-gray-500'
  }
  return map[category || 'custom'] || 'ring-gray-500'
}




// ============================================================================
// HELPER - Utility Functions
// ============================================================================

/**
 * Filter clients by category
 */
export const filterClientsByCategory = (
  clients: Client[],
  category: ClientCategory | 'all'
): Client[] => {
  if (category === 'all') return clients
  return clients.filter(c => c.category === category)
}

/**
 * Sort clients by year (newest first)
 */
export const sortClientsByYear = (
  clients: Client[],
  order: 'asc' | 'desc' = 'desc'
): Client[] => {
  return [...clients].sort((a, b) => {
    const yearA = parseInt(a.since)
    const yearB = parseInt(b.since)
    return order === 'desc' ? yearB - yearA : yearA - yearB
  })
}

/**
 * Get unique categories from clients
 */
export const getUniqueClientCategories = (clients: Client[]): ClientCategory[] => {
  return [...new Set(clients.map(c => c.category || 'custom'))] as ClientCategory[]
}

/**
 * Get clients count by year
 */
export const getClientsCountByYear = (clients: Client[]): Record<string, number> => {
  return clients.reduce((acc, c) => {
    acc[c.since] = (acc[c.since] || 0) + 1
    return acc
  }, {} as Record<string, number>)
}

/**
 * Get clients count by category
 */
export const getClientsCountByCategory = (clients: Client[]): Record<ClientCategory, number> => {
  return clients.reduce((acc, c) => {
    const cat = c.category || 'custom'
    acc[cat] = (acc[cat] || 0) + 1
    return acc
  }, {} as Record<ClientCategory, number>)
}

/**
 * Get unique years from clients
 */
export const getUniqueClientYears = (clients: Client[]): string[] => {
  return [...new Set(clients.map(c => c.since))].sort((a, b) => parseInt(b) - parseInt(a))
}

// ============================================================================
// CLIENT CATEGORY DATA
// ============================================================================
export const ClientCategoryData: ClientCategoryDetail[] = [
  {
    id: 'all',
    label: 'Semua Industri',
    description: 'Tampilkan semua klien dari berbagai industri'
  },
  {
    id: 'fnb',
    label: 'F&B',
    description: 'Food & Beverage, vaping, minuman, dan kuliner'
  },
  {
    id: 'vaporize',
    label: 'Vaporize',
    description: 'Produk vaping dan rokok elektronik'
  },
  {
    id: 'fashion',
    label: 'Fashion',
    description: 'Pakaian, sepatu, aksesoris, dan sportswear'
  },
  {
    id: 'beauty',
    label: 'Kecantikan',
    description: 'Kosmetik, skincare, dan produk perawatan diri'
  },
  {
    id: 'tech',
    label: 'Teknologi',
    description: 'Gadget, elektronik, dan perangkat teknologi'
  },
  {
    id: 'health',
    label: 'Kesehatan',
    description: 'Obat-obatan, suplemen, dan produk kesehatan'
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle',
    description: 'Barang mewah, gaya hidup, dan produk premium'
  },
  {
    id: 'automotive',
    label: 'Otomotif',
    description: 'Kendaraan, spare parts, dan aksesoris otomotif'
  },
  {
    id: 'education',
    label: 'Pendidikan',
    description: 'Institusi pendidikan, kursus, dan pelatihan'
  },
  {
    id: 'merchandise',
    label: 'Merchandise',
    description: 'Produk merchandise dan promosi'
  },
  {
    id: 'custom',
    label: 'Industri Lainnya',
    description: 'Klien dari industri yang tidak termasuk dalam kategori di atas'
  }
]

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get category detail by id
 */
export const getClientCategoryById = (id: ClientCategory | 'all'): ClientCategoryDetail | undefined => {
  return ClientCategoryData.find(cat => cat.id === id)
}

/**
 * Get all category labels
 */
export const getAllCategoryLabels = (): string[] => {
  return ClientCategoryData.map(cat => cat.label)
}

/**
 * Get all category ids (excluding 'all')
 */
export const getAllCategoryIds = (): ClientCategory[] => {
  return ClientCategoryData
    .filter(cat => cat.id !== 'all')
    .map(cat => cat.id as ClientCategory)
}

export const getClientCategoryData = (id: ClientCategory | 'all'): ClientCategoryDetail | undefined => {
  return ClientCategoryData.find(item => item.id === id)
}

export const getClientCategoryOptions = () => {
  return ClientCategoryData.map(category => ({
    value: category.id,
    label: category.label,
    description: category.description
  }))
}

/**
 * Check if category exists
 */
export const isCategoryValid = (id: string): boolean => {
  return ClientCategoryData.some(cat => cat.id === id)
}

// ============================================================================
// CLIENTS DATA - AuthenticGuards
// ============================================================================
export const ClientsData: Client[] = [
  // ============================================================
  // FASHION
  // ============================================================
  {
    id: 'moruka',
    name: 'Moruka',
    industry: 'Fashion',
    category: 'fashion',
    since: '2019',
    description: 'Brand fashion dan apparel',
    location: '-',
    gradient: getClientGradient('fashion')
  },
  {
    id: 'sabichi',
    name: 'Sabichi',
    industry: 'Fashion',
    category: 'fashion',
    since: '2017',
    description: 'Brand fashion dan lifestyle',
    location: '-',
    gradient: getClientGradient('fashion')
  },
  {
    id: 'moneylaundry',
    name: 'Money Laundry',
    industry: 'Fashion',
    category: 'fashion',
    since: '2017',
    description: 'Brand fashion dan apparel',
    location: '-',
    gradient: getClientGradient('fashion')
  },

  // ============================================================
  // BEAUTY
  // ============================================================
  {
    id: 'byhers',
    name: 'BYHERS',
    industry: 'Kecantikan',
    category: 'beauty',
    since: '2020',
    description: 'Brand kosmetik dan perawatan diri',
    location: '-',
    gradient: getClientGradient('beauty')
  },
  {
    id: 'adeeva',
    name: 'Adeeva',
    industry: 'Kecantikan',
    category: 'beauty',
    since: '2019',
    description: 'Brand skincare dan perawatan kulit',
    location: '-',
    gradient: getClientGradient('beauty')
  },

  // ============================================================
  // TECHNOLOGY
  // ============================================================
  {
    id: 'merz',
    name: 'Merz',
    industry: 'Teknologi',
    category: 'tech',
    since: '-',
    description: 'Perusahaan teknologi dan perangkat medis',
    location: '-',
    logo: logodev('merzaesthetics.com'),
    gradient: getClientGradient('tech')
  },
  {
    id: 'ultherapy',
    name: 'Ultherapy',
    industry: 'Teknologi & Kesehatan',
    category: 'tech', // atau 'health'? Karena termasuk di kedua kategori
    since: '-',
    description: 'Teknologi perawatan kulit berbasis ultrasound',
    location: '-',
    logo: logodev('ultherapy.com'),
    gradient: getClientGradient('tech')
  },

  // ============================================================
  // HEALTH
  // ============================================================
  {
    id: 'ultherapy-health',
    name: 'Ultherapy',
    industry: 'Kesehatan',
    category: 'health',
    since: '-',
    description: 'Perawatan kesehatan dan estetika',
    location: '-',
    logo: logodev('ultherapy.com'),
    gradient: getClientGradient('health')
  },

  // ============================================================
  // MERCHANDISE
  // ============================================================
  {
    id: 'xtc',
    name: 'XTC Indonesia',
    industry: 'Merchandise',
    category: 'merchandise',
    since: '2019',
    description: 'Produk merchandise dan promosi',
    location: '-',
    gradient: getClientGradient('merchandise')
  },
  {
    id: '234sc',
    name: '234 SC',
    industry: 'Merchandise',
    category: 'merchandise',
    since: '2019',
    description: 'Produk merchandise dan koleksi',
    location: '-',
    gradient: getClientGradient('merchandise')
  },

  // ============================================================
  // VAPORIZE / VAPING
  // ============================================================
  {
    id: 'juicenation',
    name: 'JuiceNation',
    industry: 'Vaping',
    category: 'vaporize',
    since: '2019',
    description: 'Brand liquid vape dan aksesoris',
    location: '-',
    gradient: getClientGradient('vaporize')
  },
]