// import MainLayout from '@/layout/LayoutMain';
// import Skeleton_Home from '@/components/skeleton/home';
// import MainLayout from '@/layout/LayoutMain';
// import ScanLayout from '@/layout/LayoutScanner';
// import { 
//   Home, AboutPage, ContactPage, HelpPage, PrivacyPolicyPage, TermsPage,
//   ScanHome, ScanCameraPage, ScanSearchPage, ScanResultPage,
//   ErrorPage 
// } from '@/router/app';
// import AccountRegisterPage from '@/view/account/Register'
// import ClaimLandingPage from '@/view/claim/Home';
// import { createBrowserRouter } from "react-router";

import { createBrowserRouter } from 'react-router'
import LayoutMain from '@/layout/Layout'

import { 
  HomePage, AboutPage, ServicesPage, TechnologyPage, PartnersPage, ContactPage,
  FAQPage, PrivacyPolicyPage, TermsPage, OurTeamPage, OurClientsPage, AwardsPage,
  ServiceHologramDetailPage, ServiceTafetaDetailPage
} from '@/router/app'

export const router = createBrowserRouter([ 
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        index: true,
        path: '',
        element: <HomePage />
      },
      {
        path: '/about',
        children: [
          {
            index: true,
            path: '',
            element: <AboutPage />
          },
          {
            path: 'our-team',
            element: <OurTeamPage />
          },
          {
            path: 'awards',
            element: <AwardsPage />
          }
        ]
      },
      {
        path: '/services',
        children: [
          {
            path: '',
            index: true,
            element: <ServicesPage />
          },
          {
            path: 'hologram',
            element: <ServiceHologramDetailPage />
          },
          {
            path: 'tafeta',
            element: <ServiceTafetaDetailPage />
          }
        ],
      },
      {
        path: '/technology',
        element: <TechnologyPage />
      },
      {
        path: '/partners',
        children: [
          {
            index: true,
            path: '',
            element: <PartnersPage />
          },
          {
            path: 'our-client',
            element: <OurClientsPage />
          }
        ],
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/faq',
        element: <FAQPage />
      },
      {
        path: '/legal',
        children: [
          {
            path: 'privacy-policy',
            element: <PrivacyPolicyPage />
          },
          {
            path: 'term-condition',
            element: <TermsPage />
          }
        ]
      },
      {
        path: '/privacy-policy',
        loader: () => {
          
        },
        element: <PrivacyPolicyPage />
      },
      {
        path: '/term-condition',
        loader: () => {
          
        },
        element: <TermsPage />
      }
    ]
  }
]);