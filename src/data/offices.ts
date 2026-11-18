import { Globe } from 'lucide-react'
import { SiWhatsapp, SiInstagram, SiFacebook, SiX, SiTiktok, SiYoutube, SiTelegram } from '@icons-pack/react-simple-icons'
import type { TFunction } from 'i18next'


export type SocialPlatform = 
  | 'whatsapp' 
  | 'instagram' 
  | 'facebook' 
  | 'twitter' 
  | 'tiktok' 
  | 'youtube' 
  | 'telegram'
  | string // Flexible untuk platform baru di masa depan
  
export interface SocialMedia {
  platform: SocialPlatform
  username: string  // @username atau nomor
  url: string       // Link lengkap
  label?: string    // Custom label (opsional)
} 
  
export interface OperatingHours {
  day: string
  hours: string
  isClosed?: boolean
}

export interface OfficeProps {
  id: string
  type: 'hq' | 'branch' | 'regional'
  city: string
  country: string
  countryName: string
  label: string
  address: string
  email: string
  phone: string
  phoneDisplay: string
  phoneLink: string
  mapsUrl: string
  description: string
  timezone?: string
  
  operatingHours: OperatingHours[]
  holidays: string[]
  notes?: string
  
  socialMedia?: SocialMedia[]
}

export const OfficesData: OfficeProps[] = [
  {
    id: 'jakarta',
    type: 'hq',
    city: 'Jakarta',
    country: 'ID',
    countryName: 'Indonesia',
    label: 'Kantor Pusat',
    address: 'District 8 SCBD, Revenue Tower\nJl. Jend. Sudirman kav 52-53\nJakarta Selatan, 12190',
    email: 'info@authenticguards.com',
    phone: '+622139506110',
    phoneDisplay: '+62 21 3950 6110',
    phoneLink: 'tel:+622139506110',
    mapsUrl: 'https://maps.google.com/?q=District+8+SCBD+Revenue+Tower+Jakarta',
    description: 'Pusat operasi dan manajemen AuthenticGuards Indonesia',
    timezone: 'Asia/Jakarta',
    
    operatingHours: [
      { day: 'Senin - Kamis', hours: '09:00 - 17:00' },
      { day: 'Jumat', hours: '09:00 - 16:30' },
      { day: 'Sabtu - Minggu', hours: 'Tutup', isClosed: true }
    ],
    holidays: [
      'Hari libur nasional Indonesia',
      'Cuti bersama (pengumuman resmi pemerintah)'
    ],
    notes: 'Respon mungkin lebih lambat di hari libur dan akhir pekan',
    
    // 🆕 Social Media - Jakarta
    socialMedia: [
      // {
      //   platform: 'whatsapp',
      //   username: '+62 812-3456-7890',
      //   url: 'https://wa.me/6281234567890',
      //   label: 'WhatsApp Business'
      // },
      {
        platform: 'instagram',
        username: '@authenticguards',
        url: 'https://instagram.com/authenticguards'
      },
      // {
      //   platform: 'tiktok',
      //   username: '@authenticguards',
      //   url: 'https://tiktok.com/@authenticguards'
      // }
    ]
  },
  {
    id: 'bandung',
    type: 'branch',
    city: 'Bandung',
    country: 'ID',
    countryName: 'Indonesia',
    label: 'Kantor Cabang',
    address: 'Jl. Tamblong No.46\nKb. Pisang, Kec. Sumur Bandung\nKota Bandung, 40112',
    email: 'info@authenticguards.com',
    phone: '+62224204029',
    phoneDisplay: '+62 22 4204 029',
    phoneLink: 'tel:+62224204029',
    mapsUrl: 'https://maps.google.com/?q=Jl+Tamblong+No+46+Bandung',
    description: 'Kantor cabang untuk wilayah Jawa Barat',
    timezone: 'Asia/Jakarta',
    
    operatingHours: [
      { day: 'Senin - Kamis', hours: '09:00 - 17:00' },
      { day: 'Jumat', hours: '09:00 - 16:30' },
      { day: 'Sabtu - Minggu', hours: 'Tutup', isClosed: true }
    ],
    holidays: [
      'Hari libur nasional Indonesia',
      'Cuti bersama (pengumuman resmi pemerintah)'
    ],
    notes: 'Respon mungkin lebih lambat di hari libur dan akhir pekan',
    
    // 🆕 Social Media - Bandung (Lebih sedikit, fokus lokal)
    socialMedia: [
      // {
      //   platform: 'whatsapp',
      //   username: '+62 812-3456-7891',
      //   url: 'https://wa.me/6281234567891',
      //   label: 'WhatsApp Bandung'
      // },
      {
        platform: 'instagram',
        username: '@authenticguards',
        url: 'https://instagram.com/authenticguards'
      },
    ]
  },
  {
    id: 'singapore',
    type: 'regional',
    city: 'Singapore',
    country: 'SG',
    countryName: 'Singapore',
    label: 'Regional Office',
    address: 'Vision Exchange\n2 Venture Drive\nSingapore, 608526',
    email: 'info@authenticguards.info',
    phone: '+6569149000',
    phoneDisplay: '+65 6914 9000',
    phoneLink: 'tel:+6569149000',
    mapsUrl: 'https://maps.google.com/?q=Vision+Exchange+2+Venture+Drive+Singapore',
    description: 'Hub regional untuk kemitraan strategis di Asia Tenggara',
    timezone: 'Asia/Singapore',
    
    operatingHours: [
      { day: 'Monday - Friday', hours: '09:00 - 18:00' },
      { day: 'Saturday', hours: '10:00 - 14:00' },
      { day: 'Sunday & Public Holidays', hours: 'Closed', isClosed: true }
    ],
    holidays: [
      'Singapore public holidays',
      'Chinese New Year',
      'Hari Raya Puasa',
      'Deepavali',
      'Christmas Day'
    ],
    notes: 'Response may be slower during weekends and public holidays',
    
    // 🆕 Social Media - Singapore (International focus)
    socialMedia: [
      // {
      //   platform: 'whatsapp',
      //   username: '+65 6914 9001',
      //   url: 'https://wa.me/6569149001',
      //   label: 'WhatsApp SG'
      // },
      // {
      //   platform: 'twitter',
      //   username: '@AuthenticGuards',
      //   url: 'https://twitter.com/AuthenticGuards'
      // },
      {
        platform: 'instagram',
        username: '@authenticguards',
        url: 'https://instagram.com/authenticguards'
      },
    ]
  }
]

// Helper functions
export const getOfficeById = (id: string): OfficeProps | undefined => {
  return OfficesData.find(o => o.id === id)
}

export const getHQOffice = (): OfficeProps => {
  return OfficesData.find(o => o.type === 'hq') || OfficesData[0]
}

export const getOfficesByCountry = (country: string): OfficeProps[] => {
  return OfficesData.filter(o => o.country === country)
}


export const getOfficeCountry = () => {
  const seen = new Set();
  
  return OfficesData.filter(o => {
    if (seen.has(o.country)) return false;
    seen.add(o.country);
    return true;
  }).map(o => ({
    country: o.country,
    countryName: o.countryName,
  }));
}


// export const isOfficeOpen = (office: OfficeProps): boolean => {
//   const now = new Date()
//   const dayOfWeek = now.getDay() // 0 = Sunday, 6 = Saturday
  
//   // Cek weekend
//   if (dayOfWeek === 0 || dayOfWeek === 6) {
//     return false
//   }
  
//   // Cek jam operasional (simplified - bisa di-expand dengan timezone handling)
//   const hours = now.getHours()
//   return hours >= 9 && hours < 17
// }

// Helper untuk mendapatkan operating hours yang sedang aktif
export const getCurrentOperatingHours = (office: OfficeProps): OperatingHours | undefined => {
  const now = new Date()
  const dayOfWeek = now.getDay()
  
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return office.operatingHours.find(h => h.isClosed)
  }
  
  return office.operatingHours.find(h => !h.isClosed)
}

export const getSocialByPlatform = (
  office: OfficeProps, 
  platform: SocialPlatform
): SocialMedia | undefined => {
  return office.socialMedia?.find(s => s.platform === platform)
}

// Check if office has social media
export const hasSocialMedia = (office: OfficeProps): boolean => {
  return !!(office.socialMedia && office.socialMedia.length > 0)
}

// Get unique platforms across all offices
export const getAllPlatforms = (): SocialPlatform[] => {
  const platforms = new Set<SocialPlatform>()
  OfficesData.forEach(office => {
    office.socialMedia?.forEach(sm => platforms.add(sm.platform))
  })
  return Array.from(platforms)
}


// Icon mapping untuk setiap platform
export const getSocialIcon = (platform: SocialPlatform) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    whatsapp: SiWhatsapp,
    instagram: SiInstagram,
    facebook: SiFacebook,
    twitter: SiX,
    tiktok: SiTiktok, 
    youtube: SiYoutube,
    telegram: SiTelegram
  }
  return iconMap[platform] || Globe
}

// Color mapping untuk setiap platform
export const getSocialColor = (platform: SocialPlatform): string => {
  const colorMap: Record<string, string> = {
    whatsapp: 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100',
    instagram: 'bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100',
    facebook: 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100',
    twitter: 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100',
    tiktok: 'bg-gray-50 text-gray-800 border-gray-200 hover:bg-gray-100',
    youtube: 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100',
    telegram: 'bg-cyan-50 text-cyan-600 border-cyan-200 hover:bg-cyan-100'
  }
  return colorMap[platform] || 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
}

// ============================================================================
// I18N HELPERS - Translate display fields (keeps addresses/phones/emails)
// ============================================================================

/**
 * Translate display fields of every office (label, description, operating
 * hours, holidays, notes). `city`, `countryName`, `address`, `email`, `phone*`
 * and `mapsUrl` stay as-is.
 */
export const getOfficesData = (t: TFunction): OfficeProps[] =>
  OfficesData.map(o => {
    const key = `data/offices:${o.id}`
    return {
      ...o,
      label: t(`${key}.label`, { defaultValue: o.label }),
      description: t(`${key}.description`, { defaultValue: o.description }),
      operatingHours: o.operatingHours.map((h, i) => ({
        ...h,
        day: t(`${key}.operatingHours.${i}.day`, { defaultValue: h.day }),
        hours: t(`${key}.operatingHours.${i}.hours`, { defaultValue: h.hours })
      })),
      holidays: t(`${key}.holidays`, { returnObjects: true, defaultValue: o.holidays }) as string[],
      notes: o.notes ? t(`${key}.notes`, { defaultValue: o.notes }) : o.notes
    }
  })