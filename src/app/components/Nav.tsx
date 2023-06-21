"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";

export default function Nav() {
  return (
    <nav>
      <h1 className="text-3xl text-center">auth user navbar</h1>
    </nav>
  );
}
