import React from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"

export function BadgeError() {
  return (
    <div className="inline-flex items-center justify-center gap-0.5 rounded bg-rose-700 px-2 py-1 text-white dark:bg-rose-600/50 dark:text-white lg:gap-1.5">
      <div className="text-sm">Error</div>
      <XMarkIcon className="h-5 w-5" />
    </div>
  )
}
