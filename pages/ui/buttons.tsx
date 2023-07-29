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

  const [collapseAll, setCollapseAll] = React.useState(false)
  const toggleCollapseAll = () => setCollapseAll((prev) => !prev)

  return (
    <Layout location="Buttons">
      <section className="mb-24 w-full py-6 lg:py-8 xl:py-12">
        <h2 className="mb-4 pb-4 text-xl font-semibold tracking-tighter lg:text-4xl">
          Button Components
        </h2>

        <div className="mb-8 flex items-center justify-end gap-x-4 border-b border-gray-200 py-2 dark:border-gray-800">
          <button onClick={toggleCollapseAll} className="text-sm hover:underline hover:opacity-80">
            {collapseAll ? "Open" : "Close"} All
          </button>
        </div>

        <ul className="flex flex-col space-y-2 lg:space-y-3 xl:space-y-4">
          {buttons.map((button, buttonIx) => (
            <ComponentShowcase
              name={button.name}
              path={button.path}
              collapseAll={collapseAll}
              Component={button.component}
              key={`button-${buttonIx}-${button.name}`}
            />
          ))}
        </ul>
      </section>
    </Layout>
  )
}
