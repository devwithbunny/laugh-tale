import Link from "next/link";
import { GiBoatFishing } from "react-icons/gi";

export default function Hero() {
  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-[#000] px-[24px] pt-[16px]">
      <div className="flex flex-col text-center justify-center items-center">
        <div className="pb-[20px] flex flex-col items-center">
          <h1 className="text-[50px] font-extrabold mb-[6px]">LAUGH TALE</h1>
          <div className="border-b-[1px] opacity-[0.5] w-1/2 "></div>
        </div>
        <div>
          <p className="text-[16px] pb-[20px]">
            COLLECT UNIQUE NFTs BY EXPLORING THE WORLD'S MOST AMAZING
            DESTINATIONS
          </p>
        </div>
        <div>
          <Link href="/HowItWorks">
            <button className="bg-[#6e40c9] hover:cursor-pointer   text-[16px] flex flex-row-reverse items-center gap-[10px] text-[#000] font-bold px-[12px] py-[6px] rounded-[6px]">
              <GiBoatFishing className="text-[24px]" />
              BEGIN JOURNEY
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
