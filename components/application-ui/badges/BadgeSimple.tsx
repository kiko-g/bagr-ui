import React from "react"
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline"

export function BadgeSimple() {
  return (
    <div className="inline-flex items-center justify-center gap-0.5 rounded bg-slate-500 px-2 py-1 text-white dark:bg-slate-300/30 dark:text-white lg:gap-1.5">
      <div className="text-xs lg:text-sm">Badge</div>
      <ArrowTrendingUpIcon className="h-4 w-4" />
    </div>
  )
}
