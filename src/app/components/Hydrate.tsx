"use client";

import { ReactNode, useState, useEffect } from "react";

// need this component for cart to work on client side and server side rendering errors for hydration
export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return <>{isHydrated ? <>{children}</> : <div>loading...</div>}</>;
}
