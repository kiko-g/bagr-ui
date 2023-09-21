import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { AlertCustom } from "@/components/application-ui/alerts"

export default function Alerts() {
  const base = "application-ui/alerts"

  return (
    <ComponentTypePage
      title="Alerts"
      components={[
        {
          name: "Customizable",
          path: `${base}/AlertCustom.tsx`,
          component: (
            <div className="w-full space-y-16">
              <div className="flex w-full flex-col items-start gap-3">
                <p className="-mb-2 font-medium">Rounded and Border</p>
                <AlertCustom type="info" rounded border>
                  Content of your information alert provided through children.
                </AlertCustom>
                <AlertCustom type="success" rounded border>
                  Content of your success alert provided through children.
                </AlertCustom>
                <AlertCustom type="warning" rounded border>
                  Content of your warning alert provided through children.
                </AlertCustom>
                <AlertCustom type="error" rounded border>
                  Content of your error alert provided through children.
                </AlertCustom>
                <AlertCustom rounded border>
                  Content of your alert provided through children.
                </AlertCustom>
              </div>

              <div className="flex w-full flex-col items-start gap-3">
                <p className="-mb-2 font-medium">Accent & Closeable</p>
                <AlertCustom type="info" accent closeable>
                  Content of your information alert provided through children.
                </AlertCustom>
                <AlertCustom type="success" accent closeable>
                  Content of your success alert provided through children.
                </AlertCustom>
                <AlertCustom type="warning" accent closeable>
                  Content of your warning alert provided through children.
                </AlertCustom>
                <AlertCustom type="error" accent closeable>
                  Content of your error alert provided through children.
                </AlertCustom>
                <AlertCustom accent closeable>
                  Content of your alert provided through children.
                </AlertCustom>
              </div>

              <div className="flex w-full flex-col items-start gap-3">
                <p className="-mb-2 font-medium">Filled, Rounded & Closeable</p>
                <AlertCustom type="info" filled rounded closeable>
                  Content of your information alert provided through children.
                </AlertCustom>
                <AlertCustom type="success" filled rounded closeable>
                  Content of your success alert provided through children.
                </AlertCustom>
                <AlertCustom type="warning" filled rounded closeable>
                  Content of your warning alert provided through children.
                </AlertCustom>
                <AlertCustom type="error" filled rounded closeable>
                  Content of your error alert provided through children.
                </AlertCustom>
                <AlertCustom filled rounded closeable>
                  Content of your alert provided through children.
                </AlertCustom>
              </div>

              <div className="flex w-full flex-col items-start gap-3">
                <p className="-mb-2 font-medium">Accent, Closeable & Long Children</p>
                <AlertCustom type="info" rounded>
                  <p>Content of your information alert provided through children.</p>
                  <ul className="list-inside list-disc">
                    <li>Apples</li>
                    <li>Bananas</li>
                    <li>Cherries</li>
                  </ul>
                  <blockquote className="italic">Blockquote showcase content</blockquote>
                </AlertCustom>
                <AlertCustom type="success" rounded>
                  <p>Content of your success alert provided through children.</p>
                  <ul className="list-inside list-disc">
                    <li>Apples</li>
                    <li>Bananas</li>
                    <li>Cherries</li>
                  </ul>
                  <blockquote className="italic">Blockquote showcase content</blockquote>
                </AlertCustom>
                <AlertCustom type="warning" rounded>
                  <p>Content of your warning alert provided through children.</p>
                  <ul className="list-inside list-disc">
                    <li>Apples</li>
                    <li>Bananas</li>
                    <li>Cherries</li>
                  </ul>
                  <blockquote className="italic">Blockquote showcase content</blockquote>
                </AlertCustom>
                <AlertCustom type="error" rounded>
                  <p>Content of your error alert provided through children.</p>
                  <ul className="list-inside list-disc">
                    <li>Apples</li>
                    <li>Bananas</li>
                    <li>Cherries</li>
                  </ul>
                  <blockquote className="italic">Blockquote showcase content</blockquote>
                </AlertCustom>
                <AlertCustom>
                  <p>Content of your alert provided through children.</p>
                  <ul className="list-inside list-disc">
                    <li>Apples</li>
                    <li>Bananas</li>
                    <li>Cherries</li>
                  </ul>
                  <blockquote className="italic">Blockquote showcase content</blockquote>
                </AlertCustom>
              </div>
            </div>
          ),
        },
      ]}
    />
  )
}
