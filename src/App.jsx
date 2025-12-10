import React, { useState } from "react";
import { createConfig, http, getAccount, connect, disconnect, readContract, writeContract, signMessage } from "@wagmi/core";
import { mainnet } from "viem/chains";
import { createPublicClient } from "viem";

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

export default function App() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const connectWallet = async () => {
    try {
      const result = await connect(config, { connector: "injected" });
      setAddress(result.accounts[0]);
      getBalance(result.accounts[0]);
    } catch (error) {
      console.error(error);
      alert("Failed to connect wallet");
    }
  };

  const getBalance = async (addr) => {
    try {
      const balance = await publicClient.getBalance({ address: addr });
      setBalance(Number(balance) / 1e18);
    } catch (error) {
      console.error(error);
    }
  };

  const sendEth = async () => {
    try {
      await writeContract(config, {
        address: to,
        value: BigInt(amount * 1e18),
      });
      alert("Transaction sent!");
    } catch (error) {
      console.error(error);
      alert("Transaction failed");
        }
