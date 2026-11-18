// import { createBrowserRouter } from "react-router";
import { lazy } from 'react';

// import HomePage from '@/view/Home';
// import AboutPage from '@/view/About';
// import ServicesPage from '@/view/Services';
// import TechnologyPage from '@/view/Technology';
// import PartnersPage from '@/view/Partners';
// import ContactPage from '@/view/Contact';
// import FAQPage from '@/view/FAQ';
// import PrivacyPolicyPage from '@/view/PrivacyPolicy';
// import TermsPage from '@/view/TermConditions';

const HomePage              = lazy(() => import("@/view/Home"));
const AboutPage             = lazy(() => import('@/view/About'));
const ServicesPage = lazy(() => import("@/view/Services"));
const TechnologyPage = lazy(() => import("@/view/Technology"));
const PartnersPage = lazy(() => import("@/view/Partners"));
const ContactPage           = lazy(() => import('@/view/Contact'));
const FAQPage = lazy(() => import("@/view/FAQ"));
const PrivacyPolicyPage = lazy(() => import("@/view/legal/PrivacyPolicy"));
const TermsPage = lazy(() => import("@/view/legal/TermConditions"));

const OurTeamPage = lazy(() => import('@/view/about/OurTeam'));
const OurClientsPage = lazy(() => import('@/view/partners/OurClients'));
const AwardsPage = lazy(() => import('@/view/about/Awards'));
const ServiceHologramDetailPage = lazy(() => import('@/view/services/Hologram'));
const ServiceTafetaDetailPage = lazy(() => import('@/view/services/Tafeta'));



// import Home                 from "@/view/Home"
// import AboutPage            from '@/view/About';
// import ContactPage          from '@/view/Contact';
// import HelpPage             from '@/view/Help';
// import PrivacyPolicyPage    from '@/view/PrivacyPolicy';
// import TermsPage            from '@/view/TermCondition';
// // import Scan                 from '@/view/scanner/Scan'
// import ScanHome             from '@/view/scanner/Home';
// import ScanCameraPage       from '@/view/scanner/Camera';
// import ScanSearchPage       from '@/view/scanner/Search';
// import ScanResultPage       from '@/view/scanner/Result';
// import ErrorPage            from '@/view/error/Error'


export { 
  HomePage,
  AboutPage,
  ServicesPage,
  TechnologyPage,
  PartnersPage,
  ContactPage,
  FAQPage,
  PrivacyPolicyPage,
  TermsPage,
  OurTeamPage,
  OurClientsPage,
  AwardsPage,
  ServiceHologramDetailPage,
  ServiceTafetaDetailPage
}
