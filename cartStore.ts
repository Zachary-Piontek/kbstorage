import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
    id: string;
    name: string;
    price: number;
    images: string[];
    description: string;
    quantity: number;
};

type CartStore = {
    isOpen: boolean;
    cart: CartItem[];
};

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            isOpen: false,
            cart: [],
        }),
        {
            name: "cart-store",
        }
    )
)