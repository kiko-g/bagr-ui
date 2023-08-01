import React from "react"
import { Layout } from "@/components/Layout"
import { ComponentShowcase } from "../../components/ComponentShowcase"
import {
  AlertSimple,
  AlertCloseableIcon,
  AlertSimpleChildren,
  AlertCloseableIconHeadlineChildren,
} from "@/components/alerts"

export default function Alerts() {
  const [collapseAll, setCollapseAll] = React.useState(false)
  const components = [
    {
      name: "Simple",
      path: "alerts/AlertSimple.tsx",
      component: (
        <div className="flex w-full max-w-full flex-col items-center gap-3 xl:max-w-xl">
          <AlertSimple
            type="info"
            headline="Information"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec aliquet dui. Nulla facilisi."
          />
          <AlertSimple
            type="success"
            headline="Success"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec aliquet dui. Nulla facilisi."
          />
          <AlertSimple
            type="warning"
            headline="Warning"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec aliquet dui. Nulla facilisi."
          />
          <AlertSimple
            type="error"
            headline="Something went wrong"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec aliquet dui. Nulla facilisi."
          />
        </div>
      ),
    },
    {
      name: "Simple w/ Children",
      path: "alerts/AlertSimple.tsx",
      component: (
        <div className="flex w-full max-w-full flex-col items-center gap-3 xl:max-w-xl">
          <AlertSimpleChildren type="info" headline="Information">
            <ul className="mt-1 list-inside list-disc">
              <li>Fact 1</li>
              <li>Fact 2</li>
              <li>Fact 3</li>
            </ul>
          </AlertSimpleChildren>
          <AlertSimpleChildren type="success" headline="Success">
            <ul className="mt-1 list-inside list-disc">
              <li>Fact 1</li>
              <li>Fact 2</li>
              <li>Fact 3</li>
            </ul>
          </AlertSimpleChildren>
          <AlertSimpleChildren type="warning" headline="Warning">
            <ul className="mt-1 list-inside list-disc">
              <li>Fact 1</li>
              <li>Fact 2</li>
              <li>Fact 3</li>
            </ul>
          </AlertSimpleChildren>
          <AlertSimpleChildren type="error" headline="Error">
            <ul className="mt-1 list-inside list-disc">
              <li>Fact 1</li>
              <li>Fact 2</li>
              <li>Fact 3</li>
            </ul>
          </AlertSimpleChildren>
        </div>
      ),
    },
    {
      name: "Icon and Closeable",
      path: "alerts/AlertCloseable.tsx",
      component: (
        <div className="flex w-full max-w-full flex-col items-center gap-3 xl:max-w-xl">
          <AlertCloseableIcon type="info" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <AlertCloseableIcon type="success" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <AlertCloseableIcon type="warning" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <AlertCloseableIcon type="error" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </div>
      ),
    },
    {
      name: "Headline, Icon and Closeable w/ Children",
      path: "alerts/AlertCloseable.tsx",
      component: (
        <div className="flex w-full max-w-full flex-col items-center gap-3 xl:max-w-xl">
          <AlertCloseableIconHeadlineChildren type="info" headline="Information">
            <ul className="mt-1 list-inside list-disc">
              <li>Fact 1</li>
              <li>Fact 2</li>
              <li>Fact 3</li>
            </ul>
          </AlertCloseableIconHeadlineChildren>
          <AlertCloseableIconHeadlineChildren type="success" headline="Success">
            <ul className="mt-1 list-inside list-disc">
              <li>Fact 1</li>
              <li>Fact 2</li>
              <li>Fact 3</li>
            </ul>
          </AlertCloseableIconHeadlineChildren>
          <AlertCloseableIconHeadlineChildren type="warning" headline="Warning">
            <ul className="mt-1 list-inside list-disc">
              <li>Fact 1</li>
              <li>Fact 2</li>
              <li>Fact 3</li>
            </ul>
          </AlertCloseableIconHeadlineChildren>
          <AlertCloseableIconHeadlineChildren type="error" headline="Error">
            <ul className="mt-1 list-inside list-disc">
              <li>Fact 1</li>
              <li>Fact 2</li>
              <li>Fact 3</li>
            </ul>
          </AlertCloseableIconHeadlineChildren>
        </div>
      ),
    },
  ]

  return (
    <Layout location="Alerts" sidebar>
      <section className="mb-24 w-full py-6 lg:py-8 xl:py-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter lg:text-4xl">Alerts Components</h2>

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
