import React from "react"
import { Layout } from "@/components/Layout"
import { CodeShowcase } from "../components/CodeShowcase"

export default function Tailwind() {
  return (
    <Layout location="Tailwind" sidebar>
      <section className="w-full py-4 lg:py-6 xl:py-10">
        <h2 className="mb-3 text-xl font-semibold tracking-tighter lg:text-4xl">Tailwind Config File</h2>
        <p className="max-w-3xl">
          This site uses a custom Tailwind config that extends the default Tailwind config. Copy our config to your{" "}
          <code className="font-bold text-primary-900 dark:text-secondary">tailwind.config.js</code> file that should be
          in the rrot of your project.
        </p>
      </section>

      <div className="mb-24 w-full rounded-xl">
        <CodeShowcase route="api/tailwind" />
      </div>
    </Layout>
  )
}
