import React, { useMemo } from "react"
import { Layout } from "@/components/Layout"
import { ComponentShowcase } from "@/components/ComponentShowcase"
import { strIncludes } from "@/utils"

type ComponentCardType = {
  name: string
  path: string
  component: React.ReactNode
}

type Props = {
  title: string
  components: ComponentCardType[]
}

export function ComponentTypePage({ title, components }: Props) {
  const [search, setSearch] = React.useState("")
  const [collapseAll, setCollapseAll] = React.useState(false)

  const filteredComponents = useMemo(
    () => components.filter((item) => strIncludes(item.name, search)),
    [components, search],
  )

  return (
    <Layout location={title} sidebar>
      <section className="mb-36 w-full py-6 lg:py-8 xl:py-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter lg:text-4xl">{title}</h2>

        <div className="mb-4 flex items-center justify-end gap-x-4 border-b border-gray-200 px-2 py-2 dark:border-white/10">
          <button onClick={() => setCollapseAll((prev) => !prev)} className="text-sm hover:underline hover:opacity-80">
            {collapseAll ? "Open" : "Close"} All
          </button>
        </div>

        <div className="mb-4">
          <input
            type="search"
            id="searchComponent"
            name="searchComponent"
            placeholder="Search by component name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded border border-gray-300 bg-gray-50 px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-gray-400 hover:border-primary/80 hover:bg-primary/5 focus:border-primary focus:accent-primary focus:ring-0 focus:ring-primary focus:ring-offset-0 dark:border-gray-200/10 dark:bg-gray-100/5  dark:placeholder:text-gray-400 dark:hover:border-secondary/70 dark:hover:bg-secondary/5 dark:focus:border-secondary/80 dark:focus:ring-0 dark:focus:ring-secondary lg:px-3.5 lg:py-2.5 lg:text-sm"
          />
        </div>

        <ul className="grid grid-cols-1 gap-2 lg:gap-3 xl:grid-cols-1 xl:gap-4">
          {filteredComponents?.length > 0 ? (
            filteredComponents.map((button, buttonIx) => (
              <ComponentShowcase
                name={button.name}
                path={button.path}
                collapseAll={collapseAll}
                Component={button.component}
                key={`button-${buttonIx}-${button.name}`}
              />
            ))
          ) : (
            <div>
              <p>No components found.</p>
            </div>
          )}
        </ul>
      </section>
    </Layout>
  )
}
