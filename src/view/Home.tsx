import HeroSectionCorporate from '@/components/home/HeroSectionCorporate'
// Alternatif hero (ganti <HeroSectionCorporate /> di bawah dengan salah satu ini):
// import HeroSection from '@/components/home/HeroSection'
// import HeroSectionNew from '@/components/home/HeroSectionNew'
// import HeroSectionNew_ from '@/components/home/HeroSectionNew_'
// import HeroSectionNew__ from '@/components/home/HeroSectionNew__'
// import HeroSectionNewFinal from '@/components/home/HeroSectionNewFinal'
// import HeroSectionSimple from '@/components/home/HeroSectionSimple'
// import HeroSectionProposal2020 from '@/components/home/HeroSectionProposal2020'
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
      {/* Alternatif hero:
      <HeroSection />
      <HeroSectionNew />
      <HeroSectionNew_ />
      <HeroSectionNew__ />
      <HeroSectionNewFinal />
      <HeroSectionSimple />
      <HeroSectionProposal2020 />
      */}
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
