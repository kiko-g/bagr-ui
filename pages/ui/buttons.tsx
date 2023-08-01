import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import {
  ButtonSimple,
  ButtonFill,
  ButtonTranslate,
  ButtonSimpleBorder,
  ButtonScale,
  ButtonRotate,
  ButtonOutline,
  ButtonSimpleIcon,
} from "@/components/buttons"

export default function Buttons() {
  return (
    <ComponentTypePage
      title="Buttons"
      components={[
        { name: "Simple", path: "buttons/ButtonSimple.tsx", component: <ButtonSimple /> },
        {
          name: "Simple w/ Border",
          path: "buttons/ButtonSimpleBorder.tsx",
          component: <ButtonSimpleBorder />,
        },
        {
          name: "Simple w/ Icon",
          path: "buttons/ButtonSimpleIcon.tsx",
          component: <ButtonSimpleIcon />,
        },
        { name: "Outline", path: "buttons/ButtonOutline.tsx", component: <ButtonOutline /> },
        { name: "Fill Animation", path: "buttons/ButtonFill.tsx", component: <ButtonFill /> },
        { name: "Scale Animation", path: "buttons/ButtonScale.tsx", component: <ButtonScale /> },
        { name: "Rotate Animation", path: "buttons/ButtonRotate.tsx", component: <ButtonRotate /> },
        {
          name: "Translate Animation",
          path: "buttons/ButtonTranslate.tsx",
          component: <ButtonTranslate />,
        },
      ]}
    />
  )
}
