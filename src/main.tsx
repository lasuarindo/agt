import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { ShieldCheck } from 'lucide-react'
import { router } from '@/router/routes'
import '@/i18n'
import './index.css'
// import App from './App.tsx'

function InitialLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#E8D09E] border-t-[#8C6F3D] rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-[#8C6F3D]" />
        </div>
      </div>
      <p className="mt-6 text-sm font-semibold text-[#8C6F3D] animate-pulse tracking-wide">
        Memuat AuthenticGuards...
      </p>
    </div>
  )
}

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <style>{`
      @import url('https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/index.css');
      body { font-family: 'Inter', sans-serif; background-color: #FAFAFA; }
      html { scroll-behavior: smooth; }
      
      input[type="password"]::-ms-reveal {
        display: none;
      }
    `}</style>
    <Suspense fallback={<InitialLoading />}>
      <RouterProvider router={router} />
    </Suspense>
    {/* <App /> */}
  </StrictMode>,
)
