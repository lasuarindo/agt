import {
  // Linkedin,
  // Twitter,
  Mail,
  Globe,
  Award,
  GraduationCap,
  Briefcase,
  type LucideIcon
} from 'lucide-react'


// ============================================================================
// TYPES
// ============================================================================
export type TeamRole =
  | 'c-level'           // CEO, CTO, COO, CFO
  | 'director'          // Director level
  | 'head'              // Head of Department
  | 'manager'           // Manager level
  | 'lead'              // Team Lead
  | 'specialist'        // Specialist
  | 'custom'            // Custom role

export type SocialLink = {
  // platform: 'linkedin' | 'twitter' | 'email' | 'website'
  platform: 'email' | 'website'
  url: string
  icon?: LucideIcon
}

export type TeamMember = {
  id: string
  name: string
  role: string
  department?: string
  category?: TeamRole
  initial: string
  gradient?: string
  photo?: string
  bio: string
  experience?: string
  education?: string
  expertise?: string[]
  social?: SocialLink[]
  featured?: boolean
  joinYear?: string
}

// ============================================================================
// HELPER - Category Label
// ============================================================================
export const getTeamCategoryLabel = (category?: TeamRole): string => {
  const map: Record<TeamRole, string> = {
    'c-level': 'C-Level',
    'director': 'Director',
    'head': 'Head',
    'manager': 'Manager',
    'lead': 'Lead',
    'specialist': 'Specialist',
    'custom': 'Team'
  }
  return map[category || 'custom'] || 'Team'
}

// ============================================================================
// HELPER - Gradient per Category
// ============================================================================
export const getTeamGradient = (category?: TeamRole): string => {
  const map: Record<TeamRole, string> = {
    'c-level': 'from-[#C5A059] to-[#8C6F3D]',
    'director': 'from-blue-500 to-blue-700',
    'head': 'from-purple-500 to-purple-700',
    'manager': 'from-emerald-500 to-emerald-700',
    'lead': 'from-rose-500 to-rose-700',
    'specialist': 'from-indigo-500 to-indigo-700',
    'custom': 'from-gray-500 to-gray-700'
  }
  return map[category || 'custom'] || 'from-gray-500 to-gray-700'
}

// ============================================================================
// HELPER - Social Icon
// ============================================================================
export const getSocialIcon = (platform: SocialLink['platform']): LucideIcon => {
  const map: Record<SocialLink['platform'], LucideIcon> = {
    // 'linkedin': Linkedin,
    // 'twitter': Twitter,
    'email': Mail,
    'website': Globe
  }
  return map[platform] || Globe
}

// ============================================================================
// HELPER - Utility Functions
// ============================================================================

/**
 * Get featured team members only
 */
export const getFeaturedTeam = (team: TeamMember[]): TeamMember[] => {
  return team.filter(m => m.featured)
}

/**
 * Filter team by category
 */
export const filterTeamByCategory = (
  team: TeamMember[],
  category: TeamRole
): TeamMember[] => {
  return team.filter(m => m.category === category)
}

/**
 * Filter team by department
 */
export const filterTeamByDepartment = (
  team: TeamMember[],
  department: string
): TeamMember[] => {
  return team.filter(m => m.department?.toLowerCase() === department.toLowerCase())
}

/**
 * Get unique departments
 */
export const getUniqueDepartments = (team: TeamMember[]): string[] => {
  return [...new Set(team.map(m => m.department).filter(Boolean))] as string[]
}

/**
 * Get unique categories
 */
export const getUniqueCategories = (team: TeamMember[]): TeamRole[] => {
  return [...new Set(team.map(m => m.category || 'custom'))] as TeamRole[]
}

// ============================================================================
// TEAM DATA - AuthenticGuards
// ============================================================================
export const TeamData: TeamMember[] = [
  {
    id: 'ryan-othink',
    name: 'Ryan Othink',
    role: 'Co-Founder & CEO',
    department: 'Executive',
    category: 'c-level',
    initial: 'RO',
    gradient: 'from-[#C5A059] to-[#8C6F3D]',
    bio: 'Visioner dengan 17+ tahun pengalaman di e-commerce, pengembangan bisnis digital, dan desain interaksi. Memiliki berbagai lini bisnis dari fashion, properti, hingga digital marketing dengan basis klien yang kuat di Indonesia.',
    experience: '17+ tahun di entrepreneur & digital business',
    education: 'Manajemen Komunikasi & Bisnis',
    expertise: ['E-Commerce', 'Digital Business', 'Interaction Design', 'Digital Marketing'],
    social: [],
    featured: true,
    joinYear: '2017'
  },
  {
    id: 'riman-budiman',
    name: 'Riman Budiman',
    role: 'Co-Founder & CTO',
    department: 'Technology',
    category: 'c-level',
    initial: 'RB',
    gradient: 'from-[#C5A059] to-[#8C6F3D]',
    bio: 'Berpengalaman hidup di dua benua dengan pola pikir bisnis out of the box. 12+ tahun membangun software house dengan keahlian mendalam di teknologi dan manajerial perusahaan.',
    experience: '12+ tahun di software development & management',
    education: 'Web Design & Multimedia',
    expertise: ['Software Development', 'Technology Management', 'Business Strategy'],
    social: [],
    featured: true,
    joinYear: '2017'
  },
  {
    id: 'tommy-pratomo',
    name: 'Tommy Pratomo',
    role: 'Co-Founder & CMO',
    department: 'Marketing & Communication',
    category: 'c-level',
    initial: 'TP',
    gradient: 'from-[#C5A059] to-[#8C6F3D]',
    bio: 'Latar belakang pendidikan internasional (Indonesia, Singapura, Inggris). 15+ tahun di manajemen komunikasi properti dan pemasaran untuk perusahaan multinasional seperti Plaza Indonesia Realty, Grup Bakrie, Grup Lippo, dan Colliers International.',
    experience: '15+ tahun di corporate communication & property marketing',
    education: 'International Education (ID, SG, UK)',
    expertise: ['Corporate Communication', 'Property Marketing', 'Strategic Management'],
    social: [],
    featured: true,
    joinYear: '2017'
  },
  {
    id: 'fauzi-ramdhani',
    name: 'Fauzi Ramdhani',
    role: 'Co-Founder & COO',
    department: 'Operations & Finance',
    category: 'c-level',
    initial: 'FR',
    gradient: 'from-[#C5A059] to-[#8C6F3D]',
    bio: '7 tahun pengalaman di perbankan dalam manajemen pengembangan program dan portofolio cabang. Fokus pada cashflow, perencanaan bisnis, dan pengelolaan operasional bisnis di industri olahraga sepak bola.',
    experience: '7+ tahun di banking & business operations',
    education: 'Ilmu Ekonomi & Manajemen',
    expertise: ['Business Operations', 'Financial Planning', 'Cashflow Management'],
    social: [],
    featured: true,
    joinYear: '2017'
  }
]