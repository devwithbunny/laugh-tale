import { VscCompassDot } from "react-icons/vsc";

export default function GlassNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#000]border-b border-white/20 shadow-md px-[24px] pt-[16px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-white flex flex-row-reverse items-center gap-[10px] font-bold text-xl tracking-widest">
            <h1>Laugh Tale</h1>
            <VscCompassDot className="" />
          </div>
          <div className="hidden lg:flex space-x-6 text-white text-sm font-medium">
            <a href="#" className="hover:text-blue-300 transition">
              HOME
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              DESTINATIONS
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              HOW IT WORKS
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              COMMUNITY
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              PROFILE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
