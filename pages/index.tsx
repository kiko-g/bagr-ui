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
    <div className="l:max-w-3xl my-1 max-w-full py-4 md:max-w-xl lg:max-w-2xl lg:py-6">
      <h2
        className={classNames(
          lexend.className,
          "flex flex-wrap items-center text-lg font-bold tracking-tighter md:text-xl lg:text-2xl lg:tracking-tight xl:text-3xl 2xl:text-4xl",
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
    <div>
      <p className="mb-3 max-w-4xl">
        Start exploring the types of components we have available and visit their individual pages
        where you can find the web components and their source code.
      </p>
      <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sections.map(({ title, count, description, link }) => (
          <li key={`showcase-${title}`} className="group flex w-full flex-col gap-1 rounded-md">
            <SectionCard title={title} count={count} description={description} link={link} />
          </li>
        ))}
      </ul>
    </div>
  )
}

type SectionCardProps = {
  title: string
  count: number
  description: string
  link: string
}

function SectionCard({ title, count, description, link }: SectionCardProps) {
  return (
    <Link
      href={link}
      className="flex gap-4 rounded-md bg-blue-900/10 px-4 py-4 text-white transition group-hover:bg-sky-950 dark:bg-white/[0.03] dark:group-hover:bg-white/[0.06]"
    >
      <div className="dark:highlight-white/20 h-16 w-16 flex-none overflow-hidden rounded-full bg-gradient-to-br from-teal-500 to-teal-700 p-[0.1875rem] shadow ring-1 ring-slate-900/10 dark:bg-gradient-to-br dark:from-teal-500 dark:to-teal-600" />

      <div className="flex flex-col">
        <h5 className="text-sm font-bold tracking-tighter text-teal-950 group-hover:text-white dark:text-teal-500 dark:group-hover:text-teal-500 lg:text-base lg:tracking-tight">
          {title}
        </h5>
        <p className="mt-1 text-xs text-gray-600 group-hover:text-gray-100 dark:text-gray-200 lg:text-sm">
          {description}
        </p>
        <p className="mt-1 text-[0.7rem] font-light text-gray-500 dark:text-gray-400 lg:text-xs">
          {count} component{count > 1 ? "s" : ""}
        </p>
      </div>
    </Link>
  )
}
