import { AddCartType } from "@/app/types/AddCartType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartStore = {
    isOpen: boolean;
    cart: AddCartType[];
    toggleCart: () => void;
    addStorage: (item: AddCartType) => void;
    removeStorage: (item: AddCartType) => void;
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
        }),
        removeStorage: (item) => set((state) => {
            const existingItem = state.cart.find((cartItem) => cartItem.id === item.id)
            if (existingItem && existingItem.quantity! > 1) {
                const updatedCart = state.cart.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, quantity: cartItem.quantity - 1 }
                    }
                    return cartItem
                })
                return { cart: updatedCart }
            } else {
                const filteredCart = state.cart.filter((cartItem) => cartItem.id !== item.id)
                return { cart: filteredCart }
            }
        }
        )
    }),
        {
            name: "cart-store",
        }
    )
)