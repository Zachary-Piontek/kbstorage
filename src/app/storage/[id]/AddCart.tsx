"use client";

import { AddCartType } from "@/app/types/AddCartType";
import { useCartStore } from "../../../../cartStore";

export default function AddCart({
  id,
  name,
  image,
  unit_amount,
  quantity,
}: AddCartType) {
  const cartStore = useCartStore();

  return (
    <button
      onClick={() =>
        cartStore.addStorage({ id, image, name, unit_amount, quantity })
      }
      className="bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold py-2 px-4 rounded-full"
    >
      Add to cart
    </button>
  );
}
