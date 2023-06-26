"use client";

import Image from "next/image";
import { useCartStore } from "../../../cartStore";
import formatPrice from "../util/PriceFormat";

export default function Cart() {
  const cartStore = useCartStore();

  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bg-amber-800/20"
    >
      {/* stopPropagation prevents the click event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event. */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-amber-200 absolute top-0 right-0 w-1/4 h-screen p-12 overflow-y-scroll text-black border-4 border-amber-800"
      >
        <h1 className="bg-amber-300 border-2 border-amber-400 text-2xl font-bold underline text-center">
          Cart list
        </h1>
        {cartStore.cart.map((item) => (
          <div key={item.id} className="flex items-center p-4">
            <Image
              className="rounded-md h-24"
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
            />
            <div className="m-2">
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>{item.unit_amount && formatPrice(item.unit_amount)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
