import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SwitchDarkMode, SwitchSimple } from "@/components/switches"

export default function Switches() {
  return (
    <ComponentTypePage
      title="Switches"
      components={[
        { name: "Simple", path: "switches/SwitchSimple.tsx", component: <SwitchSimple /> },
        { name: "Dark Mode", path: "switches/SwitchDarkMode.tsx", component: <SwitchDarkMode /> },
      ]}
    />
  )
}
