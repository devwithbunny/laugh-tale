"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function SimpleWalletConnect() {
  const [account, setAccount] = useState<string | null>(null);

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User rejected wallet connection");
      }
    } else {
      alert("MetaMask is not installed");
    }
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        setAccount(accounts[0] || null);
      });
    }
  }, []);

  return (
    <div>
      {account ? (
        <p className="text-amber-300 text-6xl">Connected: {account}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-[#000] hover:cursor-pointer border p-[10px] rounded-[10px]"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
