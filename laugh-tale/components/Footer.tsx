import Link from "next/link";
import { VscCompassDot } from "react-icons/vsc";

export default function Footer() {
  return (
    <>
      <footer className="w-full   flex justify-center items-center bg-[#000] px-[24px] ">
        <div className="border-t py-[80px] w-full flex flex-col gap-[20px] pb-[100px]">
          <div>
            <div className="flex items-center gap-[10px] pb-[10px]">
              <VscCompassDot className="" />
              <h1 className="text-[20px] font-bold">Laugh Tale</h1>
            </div>

            <p className="opacity-[0.5]">
              Collect NFTs by exploring the world's most amazing destinations.
            </p>
          </div>
          <div>
            <h1 className="font-bold pb-[10px]">Explore</h1>
            <Link href="">
              <p className="opacity-[0.5] hover:opacity-100">Destinations</p>
            </Link>
            <Link href="">
              <p className="opacity-[0.5] hover:opacity-100">How It Works</p>
            </Link>
            <Link href="">
              <p className="opacity-[0.5] hover:opacity-100">Community </p>
            </Link>
          </div>
          <div>
            <h1 className="font-bold pb-[10px]">Account</h1>
            <Link href="">
              <p className="opacity-[0.5] hover:opacity-100">Sign In</p>
            </Link>
            <Link href="">
              <p className="opacity-[0.5] hover:opacity-100">Register</p>
            </Link>
            <Link href="">
              <p className="opacity-[0.5] hover:opacity-100">My Collection </p>
            </Link>
          </div>
          <div>
            <h1 className="font-bold pb-[10px]">Legal</h1>
            <Link href="">
              <p className="opacity-[0.5] hover:opacity-100">Privacy Policy</p>
            </Link>
            <Link href="">
              <p className="opacity-[0.5] hover:opacity-100">
                Terms of Service
              </p>
            </Link>
            <Link href="">
              <p className="opacity-[0.5] hover:opacity-100">Contact Us </p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
