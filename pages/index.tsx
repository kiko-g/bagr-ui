import React from "react"
import Link from "next/link"
import classNames from "classnames"
import { Lexend } from "next/font/google"
import { Layout } from "@/components/Layout"
import { ReactIcon, TailwindIcon, TypescriptIcon } from "@/components/icons"

const lexend = Lexend({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout location="Home">
      <Hero />
      <Sections />
    </Layout>
  )
}

function Hero() {
  return (
    <div className="my-1 max-w-full py-4 md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
      <h2
        className={classNames(
          lexend.className,
          "flex flex-wrap items-center text-lg font-bold tracking-tighter text-white md:text-xl lg:text-2xl lg:tracking-tight xl:text-3xl 2xl:text-4xl",
        )}
      >
        Reusable UI Components with
        <span>
          <ReactIcon className="ml-2 mr-1 inline-flex h-5 w-5 align-middle text-[#149eca] lg:h-7 lg:w-7" />
          <span className="text-[#149eca]">React</span>
          {", "}
        </span>
        <span>
          <TypescriptIcon className="ml-2.5 mr-1.5 inline-flex h-5 w-5 align-middle text-[#3178c6] lg:h-7 lg:w-7" />
          <span className="text-[#3178c6]">Typescript</span>
          {", and "}
        </span>
        <span>
          <TailwindIcon className="ml-2 mr-1.5 inline-flex h-5 w-5 align-middle text-[#38bdf8] lg:h-7 lg:w-7" />
          <span className="text-[#38bdf8]">TailwindCSS</span>
          <span>.</span>
        </span>
      </h2>
    </div>
  )
}

function Sections() {
  const sections = [
    {
      title: "Buttons",
      link: "/ui/buttons",
      count: 1,
      description: "A collection of buttons with different styles and functionalities.",
    },
  ]

  return (
    <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sections.map(({ title, count, description, link }) => (
        <li key={`showcase-${title}`} className="group flex w-full flex-col gap-1 rounded-md">
          <Link
            href={link}
            className="rounded-md bg-white/[0.03] px-4 py-4 group-hover:bg-white/[0.06]"
          >
            <div className="h-48 w-full rounded-md bg-gradient-to-br from-blue-500 to-blue-700 transition" />
            <h5 className="mt-3 text-sm font-bold tracking-tighter text-white lg:text-base lg:tracking-tight">
              {title}
            </h5>
            <p className="mt-1 text-xs text-gray-200 lg:text-sm">{description}</p>
            <p className="mt-1 text-[0.7rem] font-light text-gray-400 lg:text-xs">
              {count} components
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
