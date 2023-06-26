"use client";

import { AddCartType } from "@/app/types/AddCartType";
import { useCartStore } from "../../../../cartStore";
import { useState } from "react";

export default function AddCart({
  id,
  name,
  image,
  unit_amount,
  quantity,
}: AddCartType) {
  const cartStore = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAddStorage = () => {
    cartStore.addStorage({ id, name, image, unit_amount, quantity });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleAddStorage}
      disabled={added}
      className="bg-amber-200 hover:bg-amber-300 text-amber-900 font-bold py-2 px-4 rounded-full"
    >
      {!added && <span>Add to cart</span>}
      {added && <span>Added!</span>}
    </button>
  );
}
