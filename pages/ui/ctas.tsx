import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { BlurredCTA, HoverDivCTA } from "@/components/ctas"

export default function CTAs() {
  return (
    <ComponentTypePage
      title="CTA Sections"
      components={[
        { name: "Blurred", path: "ctas/BlurredCTA.tsx", component: <BlurredCTA /> },
        { name: "Div Pop on Hover", path: "ctas/HoverDivCTA.tsx", component: <HoverDivCTA /> },
      ]}
    />
  )
}
