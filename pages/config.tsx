import React from "react"
import clsx from "clsx"
import Link from "next/link"
import { Lexend } from "next/font/google"
import { Layout } from "@/components/Layout"
import { CodeShowcaseDirect } from "@/components/CodeShowcaseDirect"
import { CodeShowcaseFromAPI } from "@/components/CodeShowcaseFromAPI"

const lexend = Lexend({ subsets: ["latin"] })

export default function Config() {
  const npmPackages = [
    {
      name: "clsx",
      description: "A simple JavaScript utility for conditionally joining clsx together.",
    },
    {
      name: "@heroicons/react",
      description: "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
    },
    {
      name: "@headlessui/react",
      description:
        "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
    },
    {
      name: "@tailwindcss/typography",
      description:
        "This plugin gives you full control over your content’s typography by adding a new prose class that you can add to any parent element.",
    },
  ]

  return (
    <Layout location="Config" sidebar>
      <section className="w-full border-b border-gray-300 pb-2 pt-4 dark:border-white/10 lg:pb-3 lg:pt-6 xl:pb-5 xl:pt-10">
        <h2 className={clsx(lexend.className, "mb-3 text-xl font-semibold tracking-tighter lg:text-4xl")}>
          Configuration
        </h2>
        <p className="max-w-3xl">
          This page covers the configuration of the tech stack, packages and tools used so that you can use our
          components to there full potential.
        </p>
      </section>

      <section className="w-full border-b border-gray-300 pb-2 pt-4 dark:border-white/10 lg:pb-3 lg:pt-6 xl:pb-5 xl:pt-10">
        <h2 className={clsx(lexend.className, "mb-3 text-lg font-semibold tracking-tighter lg:text-3xl")}>
          Getting Started
        </h2>
        <p className="mb-3 max-w-5xl">
          A good starting point for this tech stack is to use Next.js, which is very popular and uses React, TypeScript
          and Tailwind CSS by default. We advise you to try it and you can{" "}
          <Link
            target="_blank"
            href="https://nextjs.org/docs"
            className="font-bold underline hover:text-primary-900 hover:opacity-80 dark:hover:text-secondary"
          >
            get started with the framework here
          </Link>
          .
        </p>
        <div className="py-6">
          <p className="mb-2">Here is a nice TLDR of the installation to get you started:</p>
          <CodeShowcaseDirect code="npx create-next-app@latest" language="bash" />
        </div>
      </section>

      <section className="w-full border-b border-gray-300 pb-2 pt-4 dark:border-white/10 lg:pb-3 lg:pt-6 xl:pb-5 xl:pt-10">
        <h2 className={clsx(lexend.className, "mb-3 text-lg font-semibold tracking-tighter lg:text-3xl")}>
          Package Installation
        </h2>
        <p className="mb-3 max-w-5xl">
          Our components make use of a few npm packages. Make sure you install them to not deal with any warnings when
          copying your code.
        </p>

        <div className="space-y-2 border-b border-gray-300 py-6 dark:border-white/10">
          {npmPackages.map((npmPackage, npmPackageIdx) => (
            <div key={`npm-package-${npmPackageIdx}`}>
              <p className="mb-2">{npmPackage.description}</p>
              <CodeShowcaseDirect code={`npm i ${npmPackage.name}`} language="bash" />
            </div>
          ))}
        </div>

        <div className="py-6">
          <p className="mb-2">Or you can copy and install them all at once:</p>
          <CodeShowcaseDirect
            code={`npm i ${npmPackages.map((npmPackage) => npmPackage.name).join(" ")}`}
            language="bash"
          />
        </div>
      </section>

      <section className="mb-24 w-full pb-2 pt-4 lg:pb-3 lg:pt-6 xl:pb-5 xl:pt-10">
        <h2 className={clsx(lexend.className, "mb-3 text-lg font-semibold tracking-tighter lg:text-3xl")}>
          Tailwind Config File
        </h2>
        <p className="mb-3 max-w-5xl">
          This site uses a custom Tailwind config that extends the default Tailwind config. Copy our config to your{" "}
          <code className="font-bold text-primary-900 dark:text-secondary">tailwind.config.js</code> file that should be
          in the root of your project.
        </p>
        <div className="w-full rounded-xl">
          <CodeShowcaseFromAPI route="api/tailwind" language="javascript" />
        </div>
      </section>
    </Layout>
  )
}
