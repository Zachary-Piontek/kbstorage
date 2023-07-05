"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import { useCartStore } from "../../../cartStore";
import Logo from "../../../public/logo-kb-min.png";

export default function Nav({ user }: Session & { user: any }) {
  const cartStore = useCartStore();

  return (
    <nav className="flex justify-between items-center border-b-2 border-amber-400 py-4">
      <Link href="/">
        <Image src={Logo} alt="Kastberg Logo" width={200} height={200} />
      </Link>
      <ul className="flex flex-col items-center gap-1 m-2">
        <div className="flex flex-col-2">
          <li
            onClick={() => cartStore.toggleCart()}
            className="flex items-center gap-4 text-3xl relative"
          >
            🛒
            <span className="bg-amber-400 text-black text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center absolute right-4 top-5">
              {cartStore.cart.length}
            </span>
          </li>
          {/* check if user is logged in */}
          {!user && (
            <li className="bg-amber-300 text-black rounded-sm">
              <button onClick={() => signIn()}>sign in</button>
            </li>
          )}
          {user && (
            <div className="m-4 flex flex-col items-center">
              <li>{user.name}</li>
              <li>
                <Image
                  src={user?.image}
                  alt={user.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </li>
              <li className="flex items-center justify-center bg-amber-300 text-black rounded-sm">
                <button onClick={() => signOut()}>sign out</button>
              </li>
            </div>
          )}
        </div>
      </ul>
      {cartStore.isOpen && <Cart />}
    </nav>
  );
}
