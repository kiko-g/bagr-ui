import React from "react"
import Link from "next/link"
import classNames from "classnames"
import { Lexend } from "next/font/google"
import { Layout } from "@/components/Layout"
import { ReactIcon, TailwindIcon, TypescriptIcon } from "@/components/icons"

const lexend = Lexend({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout location="Home" sidebar>
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

type Section = {
  title: string
  link: string
  folder: string
  count: number | null
  description: string
}

function Sections() {
  const [sections, setSections] = React.useState<Section[]>([
    {
      title: "Alerts",
      link: "/ui/alerts",
      folder: "alerts",
      count: 4,
      description: "Customizable alerts to send information to the user with different icons, colors, and actions.",
    },
    {
      title: "Badges",
      link: "/ui/badges",
      folder: "badges",
      count: 1,
      description: "Small badges for signaling short pieces of information.",
    },
    {
      title: "Buttons",
      link: "/ui/buttons",
      folder: "buttons",
      count: 8,
      description: "Button components with different styles, animations and purposes.",
    },
    {
      title: "Button Groups",
      link: "/ui/button-groups",
      folder: "button-groups",
      count: 4,
      description: "Sections with multiple buttons with different layouts and functionalities.",
    },
    {
      title: "CTA Sections",
      link: "/ui/ctas",
      folder: "ctas",
      count: 2,
      description: "Diversely styled sections to appeal the user to click on them.",
    },
    {
      title: "Loading",
      link: "/ui/loading",
      folder: "loading",
      count: 2,
      description: "Components for informing the user that data is loading.",
    },
    {
      title: "Navbars",
      link: "/ui/navbars",
      folder: "navbars",
      count: 1,
      description: "Customizable and expansible top menu components.",
    },
    {
      title: "Selects",
      link: "/ui/selects",
      folder: "selects",
      count: 2,
      description: "Accessible and fancy dropdown components for selecting one or multiple options.",
    },
    {
      title: "Sidebars",
      link: "/ui/sidebars",
      folder: "sidebars",
      count: 2,
      description: "Customizable and expansible side menu components.",
    },
    {
      title: "Switches",
      link: "/ui/switches",
      folder: "switches",
      count: 2,
      description: "Toggle between two states with our customized switches with different styles and purposes.",
    },
  ])

  React.useEffect(() => {
    const indicesToFetch = sections.reduce((indices: number[], section: Section, index: number) => {
      if (section.count === null) indices.push(index)
      return indices
    }, [])

    if (indicesToFetch.length === 0) return

    const fetchCounts = async () => {
      const newSections = [...sections]
      await Promise.all(
        indicesToFetch.map(async (index) => {
          const section = sections[index]
          try {
            const data = await (await fetch(`/api/countFiles/${section.folder}`)).json()
            newSections[index] = { ...section, count: data.count }
          } catch (error) {
            console.error(error)
          }
        }),
      )
      setSections(newSections)
    }

    fetchCounts()
  }, [sections])

  return (
    <div className="mb-24">
      <p className="mb-4 max-w-4xl">
        Start exploring the types of components we have available and visit their individual pages where you can find
        the web components and their source code. Make sure you have checked out the{" "}
        <Link
          href="/config"
          className="font-bold underline hover:text-primary-900 hover:opacity-80 dark:hover:text-secondary"
        >
          <code>configuration</code>
        </Link>{" "}
        page. Your setup should be similar, otherwise some components might not work as expected in your project.
      </p>
      <ul className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4 xl:grid-cols-4 xl:gap-3">
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
  count: number | null
  description: string
  link: string
}

function SectionCard({ title, count, description, link }: SectionCardProps) {
  return (
    <Link
      href={link}
      className="flex flex-1 gap-4 rounded-md bg-slate-150 px-4 py-4 text-white transition group-hover:bg-gray-800 dark:bg-white/[0.03] dark:group-hover:bg-white/[0.07]"
    >
      <div className="dark:highlight-white/20 h-12 w-12 flex-none overflow-hidden rounded-full bg-gradient-to-br from-primary-500 to-primary-800 p-[0.1875rem] shadow ring-1 ring-gray-900/10 dark:bg-gradient-to-br dark:from-secondary-700 dark:to-secondary-900" />

      <div className="flex flex-col">
        <h5 className="mb-0 text-sm font-bold tracking-tighter text-primary-900 group-hover:text-white dark:text-secondary dark:group-hover:text-secondary lg:text-base lg:tracking-tight">
          {title}
        </h5>
        <p className="-mt-[2px] text-[0.7rem] font-medium text-slate-800 group-hover:text-white dark:text-gray-300 lg:text-xs">
          {count === null ? "Loading components..." : `${count} component${count === 1 ? "" : "s"}`}
        </p>
        <p className="mt-0.5 text-xs tracking-tighter text-slate-600 group-hover:text-gray-100 dark:text-gray-200 lg:text-xs">
          {description}
        </p>
      </div>
    </Link>
  )
}
