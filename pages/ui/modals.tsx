import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ModalSimple } from "@/components/modals"

export default function Modals() {
  return (
    <ComponentTypePage
      title="Modals"
      components={[{ name: "Simple", path: "modals/ModalSimple.tsx", component: <ModalSimple /> }]}
    />
  )
}
