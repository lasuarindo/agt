import { ScrollRestoration, Outlet } from 'react-router';
import HeaderMain from '@/layout/Header';
import FooterMain from '@/layout/Footer';
import AboutJoinUsCTA from '@/components/AboutJoinUs';



export default function LayoutMain() {
  return (
    <>
      <HeaderMain />
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      <FooterMain />
      
      <ScrollRestoration />
    </>
  );
}