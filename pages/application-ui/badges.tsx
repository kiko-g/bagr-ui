import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { BadgeError, BadgeSimple, BadgeSuccess, BadgeOutline } from "@/components/application-ui/badges"

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
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-xl">
              <BadgeSimple />
            </div>
          ),
        },
        {
          name: "Outline",
          path: `${base}/BadgeOutline.tsx`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-xl">
              <BadgeOutline />
            </div>
          ),
        },
        {
          name: "Success",
          path: `${base}/BadgeSuccess.tsx`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-xl">
              <BadgeSuccess />
            </div>
          ),
        },
        {
          name: "Error",
          path: `${base}/BadgeError.tsx`,
          component: (
            <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-center gap-3 xl:max-w-xl">
              <BadgeError />
            </div>
          ),
        },
      ]}
    />
  )
}
