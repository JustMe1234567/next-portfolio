"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";
import { pingAppwrite } from "@/lib/appwrite-client";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  React.useEffect(() => {
    pingAppwrite();
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}