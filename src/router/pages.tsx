// import { createBrowserRouter } from "react-router";
import { lazyPage } from '@/router/lazy';

// import HomePage from '@/view/Home';
// import AboutPage from '@/view/About';
// import ServicesPage from '@/view/Services';
// import TechnologyPage from '@/view/Technology';
// import PartnersPage from '@/view/Partners';
// import ContactPage from '@/view/Contact';
// import FAQPage from '@/view/FAQ';
// import PrivacyPolicyPage from '@/view/PrivacyPolicy';
// import TermsPage from '@/view/TermConditions';

const HomePage              = lazyPage(() => import("@/view/Home"));
const AboutPage             = lazyPage(() => import('@/view/About'));
const ServicesPage = lazyPage(() => import("@/view/Services"));
const TechnologyPage = lazyPage(() => import("@/view/Technology"));
const PartnersPage = lazyPage(() => import("@/view/Partners"));
const ContactPage           = lazyPage(() => import('@/view/Contact'));
const FAQPage = lazyPage(() => import("@/view/FAQ"));
const PrivacyPolicyPage = lazyPage(() => import("@/view/legal/PrivacyPolicy"));
const TermsPage = lazyPage(() => import("@/view/legal/TermConditions"));

const OurTeamPage = lazyPage(() => import('@/view/about/OurTeam'));
const OurClientsPage = lazyPage(() => import('@/view/partners/OurClients'));
const AwardsPage = lazyPage(() => import('@/view/about/Awards'));
const ServiceHologramDetailPage = lazyPage(() => import('@/view/services/Hologram'));
const ServiceTafetaDetailPage = lazyPage(() => import('@/view/services/Tafeta'));
const NotFoundPage = lazyPage(() => import('@/view/NotFound'));



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
  ServiceTafetaDetailPage,
  NotFoundPage
}
