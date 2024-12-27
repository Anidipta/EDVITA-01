// src/components/ClientProvider.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function ClientProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}