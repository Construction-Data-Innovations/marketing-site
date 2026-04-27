import { useState } from "react"
import { WaitingListModal } from "./waiting-list-modal"
import { cn } from "@/lib/utils"

interface WaitlistIslandProps {
  buttonText?: string
  buttonClassName?: string
  variant?: "primary" | "secondary"
}

export default function WaitlistIsland({
  buttonText = "Join the Waiting List",
  buttonClassName = "",
  variant = "primary",
}: WaitlistIslandProps) {
  const [open, setOpen] = useState(false)

  const baseClasses =
    variant === "primary"
      ? "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 shadow-xs"
      : "bg-secondary text-secondary-foreground shadow-xs hover:bg-black hover:text-white"

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-500 cursor-pointer", baseClasses, buttonClassName)}
      >
        {buttonText}
      </button>
      <WaitingListModal open={open} onOpenChange={setOpen} />
    </>
  )
}
