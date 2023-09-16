import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SelectSingle, SelectMultiple } from "@/components/selects"

export default function Selects() {
  return (
    <ComponentTypePage
      title="Selects"
      components={[
        {
          name: "Single",
          path: "selects/SelectSingle.tsx",
          component: <SelectSingle />,
        },
        {
          name: "Multiple",
          path: "selects/SelectMultiple.tsx",
          component: <SelectMultiple />,
        },
      ]}
    />
  )
}
