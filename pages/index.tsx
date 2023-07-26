import Layout from "@/components/Layout"
import classNames from "classnames"
import { Lexend } from "next/font/google"
import { ReactIcon, TailwindIcon, TypescriptIcon } from "@/components/icons"
import Link from "next/link"

const lexend = Lexend({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Sections />
    </Layout>
  )
}

function Hero() {
  return (
    <div className="max-w-3xl py-6 lg:py-12">
      <h2
        className={classNames(
          lexend.className,
          "text-xl font-bold tracking-tighter text-white lg:text-4xl lg:tracking-tight",
        )}
      >
        Reusable UI Components with{" "}
        <span className="inline-flex items-center justify-center gap-1 text-[#149eca] lg:gap-2">
          <ReactIcon className="inline-flex h-5 w-5 lg:h-8 lg:w-8" />
          <span>React</span>
        </span>
        {", "}
        <span className="inline-flex items-center justify-center gap-1 text-[#3178c6] lg:gap-2">
          <TypescriptIcon className="inline-flex h-5 w-5 lg:h-8 lg:w-8" />
          <span>Typescript</span>
        </span>
        {", and "}
        <span className="inline-flex items-center justify-center gap-1 text-[#38bdf8] lg:gap-2">
          <TailwindIcon className="inline-flex h-5 w-5 lg:h-8 lg:w-8" />
          <span>TailwindCSS</span>
        </span>
        {"."}
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
    <ul className="grid w-full grid-cols-1 gap-4 lg:grid-cols-4">
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
