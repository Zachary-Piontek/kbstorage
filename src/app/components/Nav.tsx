"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Nav({ user }: Session & { user: any }) {
  return (
    <nav className="flex justify-between items-center border-b-2 border-amber-400 bg">
      <Link href="/">
        <h1 className="text-5xl text-center m-1">KB Storage 🏢</h1>
      </Link>
      <ul className="flex flex-col items-center gap-1 m-1">
        <li>User</li>
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
