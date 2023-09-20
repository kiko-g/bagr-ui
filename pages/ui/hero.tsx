import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { HeroGridNav } from "@/components/hero"

export default function CTAs() {
  return (
    <ComponentTypePage
      title="Hero Sections"
      components={[{ name: "Navigation Grid", path: "hero/HeroGridNav.tsx", component: <HeroGridNav /> }]}
    />
  )
}
