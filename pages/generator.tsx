import React from "react"
import clsx from "clsx"
import { Lexend } from "next/font/google"
import { Layout } from "@/components/Layout"

const lexend = Lexend({ subsets: ["latin"] })

export default function Generator() {
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
        </li>
      </ul>
    </Layout>
  )
}
