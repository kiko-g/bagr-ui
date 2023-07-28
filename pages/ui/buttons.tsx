import React from "react"
import { Layout } from "@/components/Layout"
import { ComponentShowcase } from "../../components/ComponentShowcase"
import {
  ButtonSimple,
  ButtonFill,
  ButtonTranslate,
  ButtonSimpleBorder,
  ButtonScale,
  ButtonRotate,
} from "@/components/buttons"

export default function Buttons() {
  const buttons = [
    { name: "Simple", path: "buttons/ButtonSimple", component: ButtonSimple },
    { name: "Simple w/ Border", path: "buttons/ButtonSimpleBorder", component: ButtonSimpleBorder },
    { name: "Fill Animation", path: "buttons/ButtonFill", component: ButtonFill },
    { name: "Scale Animation", path: "buttons/ButtonScale", component: ButtonScale },
    { name: "Rotate Animation", path: "buttons/ButtonRotate", component: ButtonRotate },
    { name: "Translate Animation", path: "buttons/ButtonTranslate", component: ButtonTranslate },
  ]

  return (
    <Layout location="Buttons">
      <section className="mb-24 w-full py-6 lg:py-8 xl:py-12">
        <h2 className="mb-8 border-b border-gray-200 pb-4 text-xl font-semibold tracking-tighter dark:border-gray-800 lg:text-4xl">
          Button Components
        </h2>

        <ul className="flex flex-col space-y-6 lg:space-y-8 xl:space-y-12">
          {buttons.map((button, buttonIx) => (
            <ComponentShowcase
              name={button.name}
              path={button.path}
              Component={button.component}
              key={`button-${buttonIx}-${button.name}`}
            />
          ))}
        </ul>
      </section>
    </Layout>
  )
}
