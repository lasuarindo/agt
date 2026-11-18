import { Suspense } from 'react';
import { ScrollRestoration, Outlet, useLocation } from 'react-router';
import HeaderMain from '@/layout/Header';
import FooterMain from '@/layout/Footer';
import RouteLoading from '@/layout/RouteLoading';
import AboutJoinUsCTA from '@/components/AboutJoinUs';



export default function LayoutMain() {
  const location = useLocation();

  return (
    <>
      <HeaderMain />
      
      <main className="flex-1" key={location.pathname}>
        <Suspense fallback={<RouteLoading />}>
          <Outlet />
        </Suspense>
      </main>
      
      <FooterMain />
      
      <ScrollRestoration />
    </>
  );
}