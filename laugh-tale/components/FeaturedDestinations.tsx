import Link from "next/link";

export default function FeaturedDestinations() {
  return (
    <>
      <div className="min-h-screen items-center bg-[#000] px-[24px] py-[150px] flex flex-col gap-[20px]">
        <div className="text-center pb-[100px]">
          <h1 className="text-[40px] pb-[10px]">Featured Destinations</h1>
          <p className="opacity-[0.5]">
            START YOUR ADVENTURE AT THESE POPULAR LOCATIONS
          </p>
        </div>
        <div className="border w-full h-[400px] p-[20px] flex flex-col justify-between rounded-[6px]">
          <div className="flex justify-end">
            <p className="border inline-block px-[20px]">EPIC</p>
          </div>
          <div>
            <p className="font-bold text-[18px]">MT. ULAP</p>
            <p className="opacity-[0.5]">Benguet, Philippines</p>
          </div>
        </div>

        <div className="border w-full h-[400px] p-[20px] flex flex-col justify-between rounded-[6px]">
          <div className="flex justify-end">
            <p className="border inline-block px-[20px]">LEGENDARY</p>
          </div>
          <div>
            <p className="font-bold text-[18px]">MAYON VOLCANO</p>
            <p className="opacity-[0.5]">Albay, Philippines</p>
          </div>
        </div>

        <div className="border w-full h-[400px] p-[20px] flex flex-col justify-between rounded-[6px]">
          <div className="flex justify-end">
            <p className="border inline-block px-[20px]">RARE</p>
          </div>
          <div>
            <p className="font-bold text-[18px]">CHOCOLATE HILLS</p>
            <p className="opacity-[0.5]">Bohol, Philippines</p>
          </div>
        </div>

        <div className="pt-[20px]">
          <Link href="/HowItWorks">
            <button className="bg-[#6e40c9] hover:cursor-pointer   text-[16px] flex flex-row-reverse items-center gap-[10px] text-[#000] font-bold px-[12px] py-[6px] rounded-[6px]">
              VIEW ALL DESTINATIONS
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
