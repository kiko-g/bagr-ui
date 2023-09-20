import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import {
  AlertSimple,
  AlertCloseableIcon,
  AlertSimpleChildren,
  AlertCloseableIconHeadlineChildren,
} from "@/components/application-ui/alerts"

export default function Alerts() {
  const base = "application-ui/alerts"

  return (
    <ComponentTypePage
      title="Alerts"
      components={[
        {
          name: "Simple",
          path: `${base}/AlertSimple.tsx`,
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
          path: `${base}/AlertSimpleChildren.tsx`,
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
          path: `${base}/AlertCloseableIcon.tsx`,
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
          path: `${base}/AlertCloseableIconHeadlineChildren.tsx`,
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
      ]}
    />
  )
}
