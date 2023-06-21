"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Nav({ user }: Session & { user: any }) {
  return (
    <nav>
      <h1 className="text-3xl text-center">auth user navbar</h1>
      <ul>
        <li>Storages</li>
        {/* check if user is logged in */}
        {!user && (
          <li>
            <button onClick={() => signIn()}>sign in</button>
          </li>
        )}
        {user && (
          <>
            <li>{user.name}</li>
            <li>
              <Image src={user?.image} alt={user.name} width={50} height={50} />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
