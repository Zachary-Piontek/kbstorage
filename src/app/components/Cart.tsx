"use client";

import Image from "next/image";
import { useCartStore } from "../../../cartStore";

export default function Cart() {
  const cartStore = useCartStore();

  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bg-amber-800/20"
    >
      <div className="bg-white absolute top-0 right-0 w-96 h-screen">
        <h1 className="text-2xl font-bold text-center text-black">
          Storage list
        </h1>
      </div>
    </div>
  );
}
