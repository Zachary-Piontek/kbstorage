import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
    id: string;
    name: string;
    price: number;
    images?: string[];
    description?: string;
    quantity: number;
};

type CartStore = {
    isOpen: boolean;
    cart: CartItem[];
    toggleCart: () => void;
    addStorage: (item: CartItem) => void;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            isOpen: false,
            cart: [],
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
            addStorage: (item) => set((state) => {
                const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
                if (existingItem) {
                    const updatedCart = state.cart.map((cartItem) => {
                        if (cartItem.id === item.id) {
                            return { ...cartItem, quantity: cartItem.quantity + 1 }
                        }
                        return cartItem
                    })
                    return { cart: updatedCart }
            } else {
                return { cart: [...state.cart, { ...item, quantity: 1 }] }
            }
        })
    }),
        {
            name: "cart-store",
        }
    )
)