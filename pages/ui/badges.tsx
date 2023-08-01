import React from "react"
import { Layout } from "@/components/Layout"
import { ComponentShowcase } from "../../components/ComponentShowcase"
import { BadgeSimple } from "../../components/badges/BadgeSimple"

export default function Badges() {
  const [collapseAll, setCollapseAll] = React.useState(false)
  const components = [
    {
      name: "Simple",
      path: "badges/BadgeSimple.tsx",
      component: (
        <div className="flex w-full max-w-full flex-col items-center gap-3 xl:max-w-xl">
          <BadgeSimple />
        </div>
      ),
    },
  ]

  return (
    <Layout location="Badges" sidebar>
      <section className="mb-24 w-full py-6 lg:py-8 xl:py-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter lg:text-4xl">Badges Components</h2>

        <div className="mb-8 flex items-center justify-end gap-x-4 border-b border-gray-200 px-2 py-2 dark:border-gray-700">
          <button onClick={() => setCollapseAll((prev) => !prev)} className="text-sm hover:underline hover:opacity-80">
            {collapseAll ? "Open" : "Close"} All
          </button>
        </div>

        <ul className="grid grid-cols-1 gap-2 lg:gap-3 xl:grid-cols-1 xl:gap-4">
          {components.map((button, buttonIx) => (
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
