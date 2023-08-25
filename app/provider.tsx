"use client";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

interface Prop {
  children: React.ReactElement
}

export const Provider = ({ children }: Prop) => {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider 
      enableSystem={true} 
      attribute="class"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}