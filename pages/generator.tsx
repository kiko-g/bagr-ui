import React from "react"
import clsx from "clsx"
import { Lexend } from "next/font/google"
import { Layout } from "@/components/Layout"

const lexend = Lexend({ subsets: ["latin"] })

export default function Generator() {
  const [firstColor, setFirstColor] = React.useState("#f0f9ff")
  const [secondColor, setSecondColor] = React.useState("#082f49")

  return (
    <Layout location="Generator" sidebar>
      <div className="my-1 max-w-full py-4 md:max-w-xl lg:max-w-2xl lg:py-6 xl:max-w-3xl">
        <h2
          className={clsx(
            lexend.className,
            "flex flex-wrap items-center text-lg font-bold tracking-tighter md:text-xl lg:text-2xl lg:tracking-tight xl:text-3xl 2xl:text-4xl",
          )}
        >
          Generator
        </h2>
        <p className="mb-3 max-w-5xl">Make use of our generator for colors and utilities for your websites.</p>
      </div>

      <ul className="mt-2 flex w-full flex-col gap-4 border-t border-gray-300 pt-4 dark:border-white/10">
        <li id="tailwindcss-palette">
          <h3
            className={clsx(
              lexend.className,
              "flex flex-wrap items-center text-base font-bold tracking-tighter md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl 2xl:text-3xl",
            )}
          >
            TailwindCSS Palette Generator
          </h3>

          <section className="mt-4 flex flex-col gap-4">
            {/* First Color Picker */}
            <div className="flex max-w-lg items-center gap-3">
              <input
                type="color"
                value={firstColor}
                onChange={(e) => setFirstColor(e.target.value)}
                className="h-12 cursor-pointer transition hover:opacity-80"
              />
              <input
                type="text"
                id="firstColor"
                name="firstColor"
                value={firstColor}
                onChange={(e) => setFirstColor(e.target.value)}
                placeholder="First Color"
                className="h-12 w-full border border-gray-300 bg-white px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-gray-400 hover:border-primary/80 hover:bg-primary/5 focus:border-primary focus:accent-primary focus:ring-0 focus:ring-primary focus:ring-offset-0 dark:border-gray-200/10 dark:bg-gray-100/5  dark:placeholder:text-gray-400 dark:hover:border-secondary/70 dark:hover:bg-secondary/5 dark:focus:border-secondary/80 dark:focus:ring-0 dark:focus:ring-secondary lg:px-3.5 lg:py-2.5 lg:text-sm"
              />
            </div>

            {/* Second Color Picker */}
            <div className="flex max-w-lg items-center gap-3">
              <input
                type="color"
                value={secondColor}
                onChange={(e) => setSecondColor(e.target.value)}
                className="h-12 cursor-pointer transition hover:opacity-80"
              />
              <input
                type="text"
                id="secondColor"
                name="secondColor"
                value={secondColor}
                onChange={(e) => setSecondColor(e.target.value)}
                placeholder="Second Color"
                className="h-12 w-full border border-gray-300 bg-white px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-gray-400 hover:border-primary/80 hover:bg-primary/5 focus:border-primary focus:accent-primary focus:ring-0 focus:ring-primary focus:ring-offset-0 dark:border-gray-200/10 dark:bg-gray-100/5  dark:placeholder:text-gray-400 dark:hover:border-secondary/70 dark:hover:bg-secondary/5 dark:focus:border-secondary/80 dark:focus:ring-0 dark:focus:ring-secondary lg:px-3.5 lg:py-2.5 lg:text-sm"
              />
            </div>

            <div className="flex w-full max-w-lg items-center justify-end">
              <button
                type="button"
                className="rounded bg-primary px-4 py-2 text-sm font-medium text-white shadow transition hover:opacity-80 dark:bg-secondary"
              >
                Generate Palette
              </button>
            </div>
          </section>
        </li>
      </ul>
    </Layout>
  )
}
