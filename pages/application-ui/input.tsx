import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { InputSimple } from "@/components/application-ui/input"

export default function Inputs() {
  const base = "application-ui/input"

  return (
    <ComponentTypePage
      title="Input"
      components={[
        {
          name: "Simple",
          path: `${base}/InputSimple.tsx`,
          component: <InputSimple />,
        },
      ]}
    />
  )
}
