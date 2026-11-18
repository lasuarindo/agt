import HeroAbout from '@/components/about/HeroAbout'
import OurStorySection from '@/components/about/OurStorySection'
import MissionVisionSection from '@/components/about/MissionVisionSection'
import CoreValuesSection from '@/components/about/CoreValuesSection'
import DetailedTimelineSection from '@/components/about/DetailedTimelineSection'
import ImpactSection from '@/components/about/ImpactSection'
import OfficeSection from '@/components/about/OfficeSection'
import { TeamOverviewSection } from '@/components/OverviewTeamSection'
import AwardsCertificationsOverviewSection from '@/components/OverviewAwardsCertification'
import { MediaCoverageSimpleOverviewSection } from '@/components/OverviewMediaCoverageSection'
import AboutJoinUsCTA from '@/components/AboutJoinUs'

export default function AboutPage() {
  return (
    <>
      <HeroAbout />
      <OurStorySection />
      <MissionVisionSection />
      <CoreValuesSection />
      <DetailedTimelineSection />
      <ImpactSection />
      <TeamOverviewSection />
      <OfficeSection />
      <AwardsCertificationsOverviewSection navigateDetail={true} />
      <MediaCoverageSimpleOverviewSection />
      <AboutJoinUsCTA variant='home' />
    </>
  )
}
