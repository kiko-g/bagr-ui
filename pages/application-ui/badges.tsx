import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { BadgeSimple } from "@/components/application-ui/badges"

export default function Badges() {
  const base = "application-ui/badges"

  return (
    <ComponentTypePage
      title="Badges"
      components={[
        {
          name: "Simple",
          path: `${base}/BadgeSimple.tsx`,
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
