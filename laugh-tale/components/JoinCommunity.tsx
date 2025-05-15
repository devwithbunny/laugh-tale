import Link from "next/link";

export default function JoinCommunity() {
  return (
    <>
      <div className="min-h-screen bg-[#000] px-[24px]">
        <div className="flex flex-col gap-[40px]">
          {/* left part */}
          <div className="flex flex-col gap-[40px]">
            <h1 className="text-[32px]">Join Our Community of Explorers</h1>
            <p className="opacity-[0.5]">
              Connect with fellow adventurers, share your journeys, and discover
              new destinations together. The Laugh Tale community is growing
              every day with explorers from around the world.
            </p>
            <Link href="/HowItWorks">
              <button className="bg-[#6e40c9] hover:cursor-pointer   text-[16px] flex flex-row-reverse items-center gap-[10px] text-[#000] font-bold px-[12px] py-[6px] rounded-[6px]">
                Join Nakamas
              </button>
            </Link>
          </div>

          {/* right part */}
          <div className="flex flex-col gap-[10px] pb-[20px] w-full">
            {/* Row 1 */}
            <div className="flex gap-[10px] w-full">
              <div className="border w-full h-[160px] rounded-[10px]">
                Box 1
              </div>
              <div className="border w-full h-[160px] rounded-[10px]">
                Box 2
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-[10px] w-full">
              <div className="border w-full h-[160px] rounded-[10px]">
                Box 3
              </div>
              <div className="border w-full h-[160px] rounded-[10px]">
                Box 4
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
