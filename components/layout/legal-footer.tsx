import Link from "next/link"

export function LegalFooter() {
  return (
    <footer className="border-t border-black/5 py-8 mt-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-black/40">© {new Date().getFullYear()} Wayra Inc. All rights reserved.</div>
          <div className="flex flex-wrap gap-6 text-xs text-black/60">
            <Link href="/privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-black transition-colors">
              Terms of Use
            </Link>
            <Link href="/disclaimer" className="hover:text-black transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
        <div className="mt-4 text-xs text-black/40 text-center md:text-left">
          Wayra is an experimental tool. Suggestions may not reflect live pricing or availability.
        </div>
      </div>
    </footer>
  )
}
