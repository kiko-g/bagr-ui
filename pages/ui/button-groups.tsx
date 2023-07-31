import React from "react"
import { Layout } from "@/components/Layout"
import { ComponentShowcase } from "../../components/ComponentShowcase"
import { ButtonGroupJoined, ButtonGroupJoinedVertical, ButtonGroupSimple } from "@/components/button-groups"

export default function ButtonGroups() {
  const buttons = [
    { name: "Simple Group", path: "button-groups/ButtonGroupSimple.tsx", component: ButtonGroupSimple },
    { name: "Joined Group", path: "button-groups/ButtonGroupJoined.tsx", component: ButtonGroupJoined },
    {
      name: "Joined Group Vertical",
      path: "button-groups/ButtonGroupJoinedVertical.tsx",
      component: ButtonGroupJoinedVertical,
    },
  ]

  const [collapseAll, setCollapseAll] = React.useState(false)
  const toggleCollapseAll = () => setCollapseAll((prev) => !prev)

  return (
    <Layout location="Button Groups" sidebar>
      <section className="mb-24 w-full py-6 lg:py-8 xl:py-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter lg:text-4xl">Button Components</h2>

        <div className="mb-8 flex items-center justify-end gap-x-4 border-b border-gray-200 px-2 py-2 dark:border-gray-700">
          <button onClick={toggleCollapseAll} className="text-sm hover:underline hover:opacity-80">
            {collapseAll ? "Open" : "Close"} All
          </button>
        </div>

        <ul className="grid grid-cols-1 gap-2 lg:gap-3 xl:grid-cols-1 xl:gap-4">
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
