import { GiSupersonicArrow } from "react-icons/gi";

export default function HowItWorks() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#000] w-full px-[24px]">
        <div className="text-center pb-[50px]">
          <h1 className="text-[40px] font-extrabold pb-[10px]">HOW IT WORKS</h1>
          <p className="opacity-[0.5]">
            COLLECT UNIQUE NFTs BY VISITING AMAZING DESTINATIONS AROUND THE
            WORLD
          </p>
        </div>
        <div className="w-full flex flex-col gap-[20px] pb-[30px]">
          <div className="border w-full h-[300px] flex flex-col items-center text-center justify-center p-[10px] rounded-[10px]">
            <h1 className="pb-[20px] text-[50px] font-extrabold text-[#6e40c9]">
              1
            </h1>
            <p className="pb-[20px] text-[20px] font-extrabold ">
              DISCOVER DESTINATIONS
            </p>
            <p className="opacity-[0.5]">
              Browse our curated list of iconic locations from mountains to
              cultural sites.
            </p>
          </div>

          <div className="border w-full h-[300px] flex flex-col items-center text-center justify-center p-[10px] rounded-[10px]">
            <h1 className="pb-[20px] text-[50px] font-extrabold text-[#6e40c9]">
              2
            </h1>
            <p className="pb-[20px] text-[20px] font-extrabold">
              SCAN QR CODES
            </p>
            <p className="opacity-[0.5]">
              Visit the location and scan the unique QR code to claim your NFT.
            </p>
          </div>

          <div className="border w-full h-[300px] flex flex-col items-center text-center justify-center p-[10px] rounded-[10px]">
            <h1 className="pb-[20px] text-[50px] font-extrabold text-[#6e40c9]">
              3
            </h1>
            <p className="pb-[20px] text-[20px] font-extrabold">
              BUILD YOUR COLLECTION
            </p>
            <p className="opacity-[0.5]">
              Showcase your adventures with a growing collection of travel NFTs.
            </p>
          </div>
        </div>

        <div>
          <button className="bg-[#6e40c9] hover:cursor-pointer text-[16px] flex flex-row-reverse items-center gap-[10px] text-[#000] font-bold px-[12px] py-[6px] rounded-[6px]">
            <GiSupersonicArrow />
            LEARN MORE
          </button>
        </div>
      </div>
    </>
  );
}
