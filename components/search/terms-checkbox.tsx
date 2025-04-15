"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"

interface TermsCheckboxProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export function TermsCheckbox({ checked, onCheckedChange }: TermsCheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="border-black/20 data-[state=checked]:bg-black data-[state=checked]:border-black"
      />
      <Label htmlFor="terms" className="text-xs text-black/60 leading-tight cursor-pointer">
        I agree to the{" "}
        <Link href="/terms" className="underline hover:text-black transition-colors">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline hover:text-black transition-colors">
          Privacy Policy
        </Link>
      </Label>
    </div>
  )
}
