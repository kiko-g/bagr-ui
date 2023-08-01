import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { BadgeSimple } from "@/components/badges"

export default function Badges() {
  return (
    <ComponentTypePage
      title="Badges"
      components={[
        {
          name: "Simple",
          path: "badges/BadgeSimple.tsx",
          component: (
            <div className="flex w-full max-w-full flex-col items-center gap-3 xl:max-w-xl">
              <BadgeSimple />
            </div>
          ),
        },
      ]}
    />
  )
}
