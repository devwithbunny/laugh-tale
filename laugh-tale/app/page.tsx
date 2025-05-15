import FeaturedDestinations from "@/components/FeaturedDestinations";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import JoinCommunity from "@/components/JoinCommunity";
import NavBar from "@/components/NavBar";

import WalletConnect from "@/components/WalletConnect";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <HowItWorks />
      <FeaturedDestinations />
      <JoinCommunity />
    </>
  );
}
