import {
  ShieldCheck,
  Utensils,
  Shirt,
  Sparkles,
  Laptop,
  Heart,
  Coffee,
  Gem,
  type LucideIcon
} from 'lucide-react'

// ============================================================================
// TYPES
// ============================================================================
export type ClientCategory =
  | 'fb'              // F&B, Vaping, Minuman
  | 'fashion'         // Fashion, Apparel, Sportswear
  | 'beauty'          // Kosmetik, Perawatan
  | 'tech'            // Elektronik, Gadget
  | 'health'          // Farmasi, Kesehatan
  | 'lifestyle'       // Lifestyle, Luxury Goods
  | 'automotive'      // Otomotif
  | 'education'       // Pendidikan
  | 'custom'          // Lainnya
  
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
    'fb': 'F&B',
    'fashion': 'Fashion',
    'beauty': 'Kecantikan',
    'tech': 'Teknologi',
    'health': 'Kesehatan',
    'lifestyle': 'Lifestyle',
    'automotive': 'Otomotif',
    'education': 'Pendidikan',
    'custom': 'Lainnya'
  }
  return map[category || 'custom'] || 'Lainnya'
}

// ============================================================================
// HELPER - Category Icon
// ============================================================================
export const getClientIcon = (category?: ClientCategory): LucideIcon => {
  const map: Record<ClientCategory, LucideIcon> = {
    'fb': Utensils,
    'fashion': Shirt,
    'beauty': Sparkles,
    'tech': Laptop,
    'health': Heart,
    'lifestyle': Coffee,
    'automotive': ShieldCheck,
    'education': ShieldCheck,
    'custom': ShieldCheck
  }
  return map[category || 'custom'] || ShieldCheck
}

// ============================================================================
// HELPER - Category Gradient
// ============================================================================
export const getClientGradient = (category?: ClientCategory): string => {
  const map: Record<ClientCategory, string> = {
    'fb': 'from-orange-500 to-red-600',
    'fashion': 'from-pink-500 to-purple-600',
    'beauty': 'from-rose-400 to-pink-500',
    'tech': 'from-blue-500 to-indigo-600',
    'health': 'from-emerald-500 to-teal-600',
    'lifestyle': 'from-amber-500 to-orange-600',
    'automotive': 'from-slate-600 to-gray-800',
    'education': 'from-cyan-500 to-blue-600',
    'custom': 'from-gray-500 to-gray-700'
  }
  return map[category || 'custom'] || 'from-gray-500 to-gray-700'
}

// ============================================================================
// HELPER - Category Badge Style
// ============================================================================
export const getClientBadgeStyle = (category?: ClientCategory): string => {
  const map: Record<ClientCategory, string> = {
    'fb': 'bg-orange-100 text-orange-700 border-orange-200',
    'fashion': 'bg-pink-100 text-pink-700 border-pink-200',
    'beauty': 'bg-rose-100 text-rose-700 border-rose-200',
    'tech': 'bg-blue-100 text-blue-700 border-blue-200',
    'health': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'lifestyle': 'bg-amber-100 text-amber-700 border-amber-200',
    'automotive': 'bg-slate-100 text-slate-700 border-slate-200',
    'education': 'bg-cyan-100 text-cyan-700 border-cyan-200',
    'custom': 'bg-gray-100 text-gray-700 border-gray-200'
  }
  return map[category || 'custom'] || ''
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
    id: 'fb',
    label: 'F&B',
    description: 'Food & Beverage, vaping, minuman, dan kuliner'
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
  {
    id: 'juicenation',
    name: 'JuiceNation',
    industry: 'F&B & Vaping',
    category: 'fb',
    since: '2019',
    description: 'Brand minuman dan vaping terkemuka yang mengimplementasikan autentikasi produk untuk melindungi konsumen dari produk palsu.',
    location: 'Jakarta, Indonesia',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    id: 'vaporindo',
    name: 'VaporIndo',
    industry: 'Lifestyle & Vaping',
    category: 'lifestyle',
    since: '2019',
    description: 'Platform lifestyle dan vaping yang menggunakan teknologi autentikasi untuk memastikan keaslian produk.',
    location: 'Surabaya, Indonesia',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 'fashionid',
    name: 'FashionID',
    industry: 'Fashion & Apparel',
    category: 'fashion',
    since: '2020',
    description: 'E-commerce fashion yang mengintegrasikan sistem autentikasi untuk melindungi brand dan konsumen dari barang palsu.',
    location: 'Bandung, Indonesia',
    gradient: 'from-pink-500 to-purple-600'
  },
  {
    id: 'beautylab',
    name: 'BeautyLab',
    industry: 'Kosmetik & Perawatan',
    category: 'beauty',
    since: '2020',
    description: 'Brand kosmetik premium yang menggunakan teknologi autentikasi untuk menjamin keaslian produk kecantikan.',
    location: 'Jakarta, Indonesia',
    gradient: 'from-rose-400 to-pink-500'
  },
  {
    id: 'sportmax',
    name: 'SportMax',
    industry: 'Sportswear & Sneakers',
    category: 'fashion',
    since: '2021',
    description: 'Retailer sportswear dan sneakers yang mengimplementasikan verifikasi produk untuk melindungi konsumen.',
    location: 'Yogyakarta, Indonesia',
    gradient: 'from-pink-500 to-purple-600'
  },
  {
    id: 'techguard',
    name: 'TechGuard',
    industry: 'Elektronik & Gadget',
    category: 'tech',
    since: '2022',
    description: 'Distributor elektronik yang menggunakan teknologi autentikasi untuk memastikan keaslian gadget dan aksesoris.',
    location: 'Tangerang, Indonesia',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'pharmacare',
    name: 'PharmaCare',
    industry: 'Farmasi & Kesehatan',
    category: 'health',
    since: '2022',
    description: 'Perusahaan farmasi yang mengimplementasikan sistem autentikasi untuk melindungi produk kesehatan dari pemalsuan.',
    location: 'Semarang, Indonesia',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'luxbrand',
    name: 'LuxBrand',
    industry: 'Luxury Goods',
    category: 'lifestyle',
    since: '2023',
    description: 'Brand luxury goods yang menggunakan teknologi autentikasi premium untuk menjaga eksklusivitas dan keaslian produk.',
    location: 'Bali, Indonesia',
    gradient: 'from-amber-500 to-orange-600'
  }
]