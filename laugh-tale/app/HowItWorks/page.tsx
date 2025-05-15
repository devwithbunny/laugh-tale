import NavBar from "@/components/NavBar";
import { PiCheckCircle } from "react-icons/pi";

export default function Hero() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-[#000] text-[#FEFEFE]">
        <div className="  pt-[120px] pb-[50px] px-[24px]">
          <h1 className="font-extrabold text-[30px] pb-[10px]">
            How Laugh Tale Works
          </h1>
          <p className="text-[16px]">
            Discover how to collect unique NFTs by exploring amazing
            destinations around the world
          </p>
        </div>

        {/* step 1 */}
        <div className="px-[24px] py-[40px] flex lg:flex-row flex-col  gap-[40px]">
          {/* left part */}
          <div className="flex flex-col gap-[24px]">
            <div>
              <p className="font-bold">Step 1</p>
            </div>
            <div>
              <p className="text-[32px] font-extrabold">
                Discover Amazing Destinations
              </p>
            </div>
            <div>
              <p className="text-[16px] opacity-[0.7]">
                Read reviews from other travelers Browse our curated list of
                travel spots from majestic mountains to vibrant cultural sites.
                Each destination has a unique NFT reward waiting to be claimed.
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center align-top justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px] " />
                <p>Explore destinations by region, type, or rarity</p>
              </div>
              <div className="flex items-center align-top justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px] " />
                <p>Read reviews from other travelers</p>
              </div>

              <div className="flex items-center  align-top  justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px]" />
                <p>Learn about the unique NFT available at each location</p>
              </div>
              <div className="flex items-center  align-top  justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px]" />
                <p>Plan your journey with detailed location information</p>
              </div>
            </div>
            <div>
              <button className="rounded-[10px] p-[10px]  bg-[#6e40c9] ">
                Browse Destinations
              </button>
            </div>
          </div>

          {/* right part */}
          <div className="border w-full h-[300px]">
            <img src="" alt="" />
          </div>
        </div>

        {/* step 2 */}
        <div className="px-[24px] py-[40px] flex lg:flex-row flex-col  gap-[40px]">
          {/* left part */}
          <div className="flex flex-col gap-[24px]">
            <div>
              <p className="font-bold">Step 2</p>
            </div>
            <div>
              <p className="text-[32px] font-extrabold">Visit the Location</p>
            </div>
            <div>
              <p className="text-[16px] opacity-[0.7]">
                Embark on your adventure to the destination of your choice.
                Whether it's hiking a mountain, exploring a cultural site, or
                relaxing on a beach, the journey is part of the experience.
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center align-top justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px] " />
                <p>Follow the provided directions to reach the destination</p>
              </div>

              <div className="flex items-center  align-top  justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px]" />
                <p>Enjoy the experience and take in the sights</p>
              </div>
              <div className="flex items-center  align-top  justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px]" />
                <p>Look for the designated NFT claiming spot</p>
              </div>
              <div className="flex items-center  align-top  justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px]" />
                <p>
                  Each location has a specific area where the QR code is placed
                </p>
              </div>
            </div>
            <div>
              <button className="rounded-[10px] p-[10px]  bg-[#6e40c9] ">
                Find Nearby Destinations
              </button>
            </div>
          </div>

          {/* right part */}
          <div className="border w-full h-[300px]">
            <img src="" alt="" />
          </div>
        </div>

        {/* step 3 */}
        <div className="px-[24px] py-[40px] flex lg:flex-row flex-col  gap-[40px]">
          {/* left part */}
          <div className="flex flex-col gap-[24px]">
            <div>
              <p className="font-bold">Step 3</p>
            </div>
            <div>
              <p className="text-[32px] font-extrabold">Scan the QR Code</p>
            </div>
            <div>
              <p className="text-[16px] opacity-[0.7]">
                Once you've reached the designated spot, scan the unique QR code
                with your smartphone to claim your NFT. The QR code verifies
                your physical presence at the location.
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-start align-top justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px] " />
                <p>Open the Laugh Tale app on your smartphone</p>
              </div>

              <div className="flex items-start  align-top  justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px]" />
                <p>Use the built-in QR scanner in the app</p>
              </div>
              <div className="flex items-start  align-top  justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px]" />
                <p>Point your camera at the QR code at the location</p>
              </div>
              <div className="flex items-start  align-top  justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px]" />
                <p>The app will verify your location and mint your NFT</p>
              </div>
            </div>
            <div>
              <button className="rounded-[10px] p-[10px]  bg-[#6e40c9]">
                Download the App
              </button>
            </div>
          </div>

          {/* right part */}
          <div className="border w-full h-[300px]">
            <img src="" alt="" />
          </div>
        </div>

        {/* step 4 */}
        <div className="px-[24px] py-[40px]  flex lg:flex-row flex-col  gap-[40px]">
          {/* left part */}
          <div className="flex flex-col gap-[24px]">
            <div>
              <p className="font-bold">Step 4</p>
            </div>
            <div>
              <p className="text-[32px] font-extrabold">
                Build Your Collection
              </p>
            </div>
            <div>
              <p className="text-[16px] opacity-[0.7]">
                Watch your NFT collection grow as you explore more destinations.
                Each NFT is a unique digital memento of your adventures, with
                varying levels of rarity and special attributes.
              </p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-start align-top justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px] " />
                <p>View your collected NFTs in your profile</p>
              </div>

              <div className="flex items-start  align-top  justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px]" />
                <p>Share your collection with friends and the community</p>
              </div>
              <div className="flex items-start  align-top  justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px]" />
                <p>Earn achievements based on your exploration patterns</p>
              </div>
              <div className="flex items-start  align-top  justify-start gap-[10px]">
                <PiCheckCircle className="text-[40px]" />
                <p>Unlock special rewards as your collection grows</p>
              </div>
            </div>
            <div>
              <button className="rounded-[10px] p-[10px]  bg-[#6e40c9]">
                Download the App
              </button>
            </div>
          </div>

          {/* right part */}
          <div className="border w-full h-[300px]">
            <img src="" alt="" />
          </div>
        </div>

        {/* FAQS */}

        <div className="px-[24px] py-[160px] flex flex-col gap-[20px]">
          <div>
            <h1 className="text-center text-[32px] pb-[20px]">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="border w-full h-[400px] flex flex-col justify-center p-[20px] gap-[20px]">
            <h1 className="font-bold text-[24px]">
              Do I need cryptocurrency to collect NFTs?
            </h1>
            <p className="opacity-[0.5]">
              No, Laugh Tale handles all the blockchain interactions for you.
              You can collect NFTs simply by visiting locations and scanning QR
              codes, without needing to own cryptocurrency or understand
              blockchain technology.
            </p>
          </div>

          <div className="border w-full h-[400px] flex flex-col justify-center p-[20px] gap-[20px]">
            <h1 className="font-bold text-[24px]">
              How do I prove I actually visited the location?
            </h1>
            <p className="opacity-[0.5]">
              Our QR codes are placed at specific locations and are designed to
              work only when you're physically present. The app uses a
              combination of the QR code and your device's GPS to verify your
              location.
            </p>
          </div>

          <div className="border w-full h-[400px] flex flex-col justify-center p-[20px] gap-[20px]">
            <h1 className="font-bold text-[24px]">
              Can I trade or sell my NFTs?
            </h1>
            <p className="opacity-[0.5]">
              Yes, all NFTs collected through Laugh Tale are yours to keep,
              trade, or sell. They exist on the blockchain and can be
              transferred to compatible wallets or marketplaces.
            </p>
          </div>

          <div className="border w-full h-[400px] flex flex-col justify-center p-[20px] gap-[20px]">
            <h1 className="font-bold text-[24px]">
              What if the QR code at a location is damaged or missing?
            </h1>
            <p className="opacity-[0.5]">
              If you encounter a damaged or missing QR code, you can report it
              through the app. Our team will verify your location through
              alternative means and issue your NFT if your visit is confirmed.
            </p>
          </div>

          <div className="border w-full h-[400px] flex flex-col justify-center p-[20px] gap-[20px]">
            <h1 className="font-bold text-[24px]">
              What if the QR code at a location is damaged or missing?
            </h1>
            <p className="opacity-[0.5]">
              If you encounter a damaged or missing QR code, you can report it
              through the app. Our team will verify your location through
              alternative means and issue your NFT if your visit is confirmed.
            </p>
          </div>

          <div className="border w-full h-[400px] flex flex-col justify-center p-[20px] gap-[20px]">
            <h1 className="font-bold text-[24px]">
              What if the QR code at a location is damaged or missing?
            </h1>
            <p className="opacity-[0.5]">
              If you encounter a damaged or missing QR code, you can report it
              through the app. Our team will verify your location through
              alternative means and issue your NFT if your visit is confirmed.
            </p>
          </div>

          <div className="border w-full h-[400px] flex flex-col justify-center p-[20px] gap-[20px]">
            <h1 className="font-bold text-[24px]">
              Are there new destinations added regularly?
            </h1>
            <p className="opacity-[0.5]">
              Yes, we're constantly expanding our network of destinations. We
              add new locations monthly, with special limited-time events and
              seasonal destinations throughout the year.
            </p>
          </div>

          <div className="border w-full h-[400px] flex flex-col justify-center p-[20px] gap-[20px]">
            <h1 className="font-bold text-[24px]">
              Can I suggest a new location to be added to Laugh Tale?
            </h1>
            <p className="opacity-[0.5]">
              We welcome suggestions from our community. You can submit location
              recommendations through the app or website, and if selected,
              you'll receive a special 'Discoverer' badge for that location.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
