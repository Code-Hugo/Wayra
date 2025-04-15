import type { ReactNode } from "react"
import { Header } from "@/components/layout/header"
import { LegalFooter } from "@/components/layout/legal-footer"

interface LayoutShellProps {
  children: ReactNode
}

export function LayoutShell({ children }: LayoutShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-12 max-w-6xl">{children}</main>
      <LegalFooter />
    </div>
  )
}
