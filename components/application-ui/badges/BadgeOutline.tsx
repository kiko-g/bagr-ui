import React from "react"

export function BadgeOutline() {
  return (
    <div className="inline-flex items-center justify-center gap-0.5 rounded-full border border-blue-500 bg-blue-500/10 px-2 py-1 text-gray-900 dark:border-blue-400 dark:bg-blue-400/30 dark:text-white lg:gap-1.5">
      <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
      <div className="text-sm">Outline</div>
    </div>
  )
}
