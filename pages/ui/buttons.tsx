import React from "react"
import { Layout } from "@/components/Layout"
import { ComponentShowcase } from "../../components/ComponentShowcase"
import { ButtonSimple, ButtonFill } from "@/components/buttons"

export default function Buttons() {
  const buttons = [
    { name: "Simple Button", path: "buttons/ButtonSimple", component: ButtonSimple },
    { name: "Fill Animation Button", path: "buttons/ButtonFill", component: ButtonFill },
  ]

  return (
    <Layout location="Buttons">
      <section className="mb-24 w-full py-6 lg:py-8 xl:py-12">
        <h2 className="mb-8 border-b border-gray-800 pb-4 text-xl font-semibold tracking-tighter text-white lg:text-4xl">
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
