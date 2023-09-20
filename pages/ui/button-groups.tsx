import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import {
  ButtonGroupJoined,
  ButtonGroupJoinedVertical,
  ButtonGroupSimple,
  ButtonGroupSplit,
} from "@/components/button-groups"

export default function ButtonGroups() {
  return (
    <ComponentTypePage
      title="Button Groups"
      components={[
        { name: "Simple", path: "button-groups/ButtonGroupSimple.tsx", component: <ButtonGroupSimple /> },
        { name: "Joined", path: "button-groups/ButtonGroupJoined.tsx", component: <ButtonGroupJoined /> },
        {
          name: "Joined Vertical",
          path: "button-groups/ButtonGroupJoinedVertical.tsx",
          component: <ButtonGroupJoinedVertical />,
        },
        { name: "Split", path: "button-groups/ButtonGroupSplit.tsx", component: <ButtonGroupSplit /> },
      ]}
    />
  )
}
