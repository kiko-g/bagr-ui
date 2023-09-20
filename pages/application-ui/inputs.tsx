import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { InputCheckbox, InputSimple } from "@/components/application-ui/inputs"

export default function Inputs() {
  const base = "application-ui/inputs"

  return (
    <ComponentTypePage
      title="Inputs"
      components={[
        {
          name: "Simple",
          path: `${base}/InputSimple.tsx`,
          component: <InputSimple />,
        },
        {
          name: "Checkbox",
          path: `${base}/InputCheckbox.tsx`,
          component: <InputCheckbox />,
        },
      ]}
    />
  )
}
