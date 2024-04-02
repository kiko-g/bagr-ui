import React from "react"
import { CheckIcon } from "@heroicons/react/24/outline"

export function BadgeSuccess() {
  return (
    <div className="inline-flex items-center justify-center gap-0.5 rounded bg-teal-600 px-2 py-1 text-white dark:bg-teal-500/50 dark:text-white lg:gap-1.5">
      <div className="text-sm">Success</div>
      <CheckIcon className="h-5 w-5" />
    </div>
  )
}
