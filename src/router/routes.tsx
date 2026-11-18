import { createBrowserRouter, redirect } from 'react-router'
import LayoutMain from '@/layout/Layout'

import { 
  HomePage, AboutPage, ServicesPage, TechnologyPage, PartnersPage, ContactPage,
  FAQPage, PrivacyPolicyPage, TermsPage, OurTeamPage, OurClientsPage, AwardsPage,
  ServiceHologramDetailPage, ServiceTafetaDetailPage
} from '@/router/pages'

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
        path: '/privacy-policy',
        element: <PrivacyPolicyPage />
      },
      {
        path: '/term-condition',
        element: <TermsPage />
      },
      
      
      {
        path: '*',
        loader: () => {
          throw redirect('/');
        }
      }
    ]
  }
]);