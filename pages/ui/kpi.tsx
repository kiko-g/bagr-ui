import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { CircularProgressCard } from "@/components/kpi"

export default function KPIs() {
  return (
    <ComponentTypePage
      title="KPI"
      components={[
        {
          name: "Circular Progress Card",
          path: "hero/CircularProgressCard.tsx",
          component: <CircularProgressCard success={293} failed={94} />,
        },
      ]}
    />
  )
}
