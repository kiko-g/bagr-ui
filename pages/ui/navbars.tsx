import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { NavbarSimple } from "@/components/navbars"

export default function Navbars() {
  return (
    <ComponentTypePage
      title="Navbars"
      components={[{ name: "Simple", path: "ctas/NavbarSimple.tsx", component: <NavbarSimple location="Home" /> }]}
    />
  )
}
