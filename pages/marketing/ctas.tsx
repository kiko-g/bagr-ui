import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { BlurredCTA, HoverDivCTA } from "@/components/marketing/ctas"

export default function CTAs() {
  const base = "marketing/ctas"

  return (
    <ComponentTypePage
      title="CTA"
      components={[
        { name: "Blurred", path: `${base}/BlurredCTA.tsx`, component: <BlurredCTA /> },
        { name: "Div Pop on Hover", path: `${base}/HoverDivCTA.tsx`, component: <HoverDivCTA /> },
      ]}
    />
  )
}
