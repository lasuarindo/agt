import HeroSectionCorporate from '@/components/home/HeroSectionCorporate'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import TechnologySection from '@/components/home/TechnologySection'
import StatsSection from '@/components/home/StatsSection'
import { SupportersSimpleOverviewSection } from '@/components/OverviewSupportersSection'
import ClientsOverviewSection from '@/components/OverviewClientsSection'
import AwardsCertificationsOverviewSection from '@/components/OverviewAwardsCertification'
import InvestorsOverviewSection from '@/components/OverviewInvestorSection'
import { MediaCoverageSimpleOverviewSection } from '@/components/OverviewMediaCoverageSection'
import AboutJoinUsCTA from '@/components/AboutJoinUs'

export default function HomePage() {
  return (
    <>
      <HeroSectionCorporate />
      <SupportersSimpleOverviewSection />
      <AboutSection />
      <ClientsOverviewSection />
      <ServicesSection />
      <TechnologySection />
      <StatsSection />
      <AwardsCertificationsOverviewSection />
      <InvestorsOverviewSection />
      <MediaCoverageSimpleOverviewSection />
      <AboutJoinUsCTA variant='about' />
    </>
  )
}
