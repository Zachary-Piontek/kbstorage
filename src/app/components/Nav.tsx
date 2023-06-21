"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Nav({ user }: Session & { user: any }) {
  return (
    <nav className="flex justify-between">
      <h1 className="text-3xl text-center">auth user navbar</h1>
      <ul className="flex flex-col items-center">
        <li>Storages</li>
        {/* check if user is logged in */}
        {!user && (
          <li className="bg-amber-300 text-black rounded-sm">
            <button onClick={() => signIn()}>sign in</button>
          </li>
        )}
        {user && (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
}
