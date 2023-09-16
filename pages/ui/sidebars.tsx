import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SidebarSections, SidebarSimple } from "@/components/sidebars"

export default function Sidebars() {
  return (
    <ComponentTypePage
      title="Sidebars"
      components={[
        { name: "Simple", path: "ctas/SidebarSimple.tsx", component: <SidebarSimple location="Home" /> },
        {
          name: "Simple w/ Sections",
          path: "sidebars/SidebarSections.tsx",
          component: <SidebarSections location="Home" />,
        },
      ]}
    />
  )
}
