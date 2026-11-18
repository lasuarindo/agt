import { ShieldCheck } from 'lucide-react'

/**
 * Fallback untuk Suspense di sekitar <Outlet /> (load awal / konten route).
 * Bergaya sama dengan loader inisialisasi di main.tsx.
 */
export default function RouteLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FAFAFA]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#E8D09E] border-t-[#8C6F3D] rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-[#8C6F3D]" />
        </div>
      </div>
      <p className="mt-6 text-sm font-semibold text-[#8C6F3D] animate-pulse tracking-wide">
        Memuat halaman...
      </p>
    </div>
  )
}