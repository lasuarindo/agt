import { motion } from 'motion/react'
import { Handshake, ArrowRight, ShieldCheck, CheckCircle2, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'

// ============================================================================
// TYPES
// ============================================================================
type CTAVariant = 'default' | 'home' | 'about' | 'partner'

type CTAContent = {
  badgeIcon: LucideIcon
  badgeText: string
  titleLine1: string
  titleLine2: string
  description: string
  primaryCta: {
    text: string
    to: string
  }
  secondaryCta: {
    text: string
    to: string
    icon: LucideIcon
  }
  benefits: string[]
}

type AboutJoinUsCTAProps = {
  variant?: CTAVariant
  customContent?: Partial<CTAContent>
}

// ============================================================================
// VARIANT CONTENT (text from i18n, icons & links in code)
// ============================================================================
const primaryLinks: Record<CTAVariant, string> = {
  default: '/contact',
  home: '/contact',
  about: '/contact',
  partner: '/partner-registration'
}

const secondaryLinks: Record<CTAVariant, string> = {
  default: '/services',
  home: '/services',
  about: '/about',
  partner: '/partners'
}

const getVariantContent = (t: TFunction, variant: CTAVariant, customContent?: Partial<CTAContent>): CTAContent => {
  const base: CTAContent = {
    badgeIcon: Handshake,
    badgeText: t(`aboutJoinUs.${variant}.badgeText`),
    titleLine1: t(`aboutJoinUs.${variant}.titleLine1`),
    titleLine2: t(`aboutJoinUs.${variant}.titleLine2`),
    description: t(`aboutJoinUs.${variant}.description`),
    primaryCta: { text: t(`aboutJoinUs.${variant}.primaryCtaText`), to: primaryLinks[variant] },
    secondaryCta: { text: t(`aboutJoinUs.${variant}.secondaryCtaText`), to: secondaryLinks[variant], icon: ShieldCheck },
    benefits: t(`aboutJoinUs.${variant}.benefits`, { returnObjects: true }) as string[]
  }
  return { ...base, ...customContent }
}

// ============================================================================
// COMPONENT
// ============================================================================
export default function AboutJoinUsCTA({ 
  variant = 'default',
  customContent 
}: AboutJoinUsCTAProps = {}) {
  const { t } = useTranslation('common')
  const content: CTAContent = getVariantContent(t, variant, customContent)

  const BadgeIcon = content.badgeIcon
  const SecondaryIcon = content.secondaryCta.icon

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-[#1A1A1A] to-[#2a2a2a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C6F3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full">
            <BadgeIcon className="w-4 h-4 text-[#E8D09E]" />
            <span className="text-xs font-bold text-[#E8D09E] tracking-wider uppercase">
              {content.badgeText}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            {content.titleLine1} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E8D09E] to-[#C5A059]">
              {content.titleLine2}
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            {content.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to={content.primaryCta.to}
              className="group inline-flex items-center justify-center gap-3 bg-[#C5A059] text-[#1A1A1A] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#E8D09E] transition-all duration-300 shadow-lg hover:shadow-[#C5A059]/30 hover:-translate-y-0.5"
            >
              <span>{content.primaryCta.text}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={content.secondaryCta.to}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
            >
              <SecondaryIcon className="w-5 h-5" />
              <span>{content.secondaryCta.text}</span>
            </Link>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 text-xs text-gray-400">
            {content.benefits.map((benefit, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {benefit}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}