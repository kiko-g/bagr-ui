import {
  Bars3Icon,
  EyeDropperIcon,
  FlagIcon,
  HomeIcon,
  MegaphoneIcon,
  RectangleStackIcon,
  SwatchIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline"
import classNames from "classnames"
import { Inter, Lexend } from "next/font/google"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { GithubIcon, LoadingIcon, SidebarIcon, SwitchIcon } from "./icons"
import { ButtonIcon } from "./icons/ButtonIcon"

const inter = Inter({ subsets: ["latin"] })
const lexend = Lexend({ subsets: ["latin"] })

const links = [
  {
    label: "Francisco Gonçalves",
    href: "https://github.com/kiko-g",
    content: <Image src="/profile.svg" alt="author" width={24} height={24} className="rounded-full" />,
    shown: false,
  },
  {
    label: "Github Repository",
    href: "https://github.com/kiko-g/bagr-ui",
    content: <GithubIcon className="h-5 w-5" />,
    shown: true,
  },
]

const generalNav = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
    shown: true,
  },
  {
    name: "Config",
    href: "/config",
    icon: WrenchIcon,
    shown: true,
  },
]

const applicationUiNav = [
  {
    name: "Alerts",
    href: "/ui/alerts",
    icon: MegaphoneIcon,
    shown: true,
  },
  {
    name: "Badges",
    href: "/ui/badges",
    icon: FlagIcon,
    shown: true,
  },
  {
    name: "Buttons",
    href: "/ui/buttons",
    icon: ButtonIcon,
    shown: true,
  },
  {
    name: "Button Groups",
    href: "/ui/button-groups",
    icon: SwatchIcon,
    shown: true,
  },
  {
    name: "Loading",
    href: "/ui/loading",
    icon: LoadingIcon,
    shown: true,
  },
  {
    name: "Navbars",
    href: "/ui/navbars",
    icon: Bars3Icon,
    shown: true,
  },
  {
    name: "Selects",
    href: "/ui/selects",
    icon: EyeDropperIcon,
    shown: true,
  },
  {
    name: "Sidebars",
    href: "/ui/sidebars",
    icon: SidebarIcon,
    shown: true,
  },
  {
    name: "Switches",
    href: "/ui/switches",
    icon: SwitchIcon,
    shown: true,
  },
]

const marketingNav = [
  {
    name: "CTA Sections",
    href: "/ui/ctas",
    icon: RectangleStackIcon,
    shown: true,
  },
]

type Props = {
  children: React.ReactNode
  location?: string
  sidebar?: boolean
}

export function Layout({ children, location = "Unknown", sidebar = false }: Props) {
  return (
    <>
      <Seo title={location} />
      <main className={classNames(inter.className, "mx-auto flex min-h-screen max-w-[100vw] flex-col")}>
        <Header />
        {sidebar ? (
          <div className="flex flex-1">
            <Sidebar location={location} />
            <article className="flex max-w-full flex-1 flex-col items-start justify-start px-6 xl:px-12">
              {children}
            </article>
          </div>
        ) : (
          <article className="flex max-w-full flex-1 flex-col items-start justify-start px-6 xl:px-12">
            {children}
          </article>
        )}
        <Footer />
      </main>
    </>
  )
}

function Seo({ title }: { title: string }) {
  const siteTitle = `BagrUI`
  const author = `kikogoncalves`
  const description = `Reusable UI Components with React, Typescript, and TailwindCSS.`

  const meta = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: siteTitle,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author || ``,
    },
    {
      name: `twitter:title`,
      content: siteTitle,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ]

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      {meta.map((meta, metaIdx) => (
        <meta key={`meta-tag-${metaIdx}`} name={meta.name} content={meta.content} />
      ))}
    </Head>
  )
}

function DarkModeSwitch() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none")
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none")
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle("dark")

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button type="button" onClick={toggleMode} aria-label="Toggle dark mode" className="group">
      {/* Sun */}
      <svg
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={classNames(
          "h-6 w-6 transition dark:hidden",
          "fill-white",
          "stroke-orange-500",
          "[@media(prefers-color-scheme:dark)]:fill-orange-400",
          "[@media(prefers-color-scheme:dark)]:stroke-orange-400",
          "group-hover:opacity-80",
          "[@media(prefers-color-scheme:dark)]:group-hover:opacity-80",
        )}
      >
        <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
        <path
          d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
          fill="none"
        ></path>
      </svg>

      {/* Moon */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={classNames(
          "hidden h-6 w-6 transition dark:block",
          "stroke-blue-50",
          "[@media(prefers-color-scheme:dark)]:fill-blue-400",
          "[@media(prefers-color-scheme:dark)]:stroke-blue-400",
          "group-hover:opacity-80",
          "[@media(prefers-color-scheme:dark)]:group-hover:opacity-80",
        )}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
        />
      </svg>
    </button>
  )
}

function Header() {
  return (
    <header className="max-w-8xl sticky top-0 z-30 mx-auto h-[72px] w-full bg-gray-50 bg-opacity-90 backdrop-blur backdrop-filter dark:bg-gray-900 dark:bg-opacity-80 xl:px-8">
      <div className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-3 hover:opacity-80">
          <Image src="/bagr-ui.svg" alt="BagrUI" width={36} height={36}></Image>
          <h1
            className={classNames(
              lexend.className,
              "text-xl font-bold lowercase tracking-wide text-teal-600 dark:bg-transparent dark:text-white",
            )}
          >
            Bagr.UI
          </h1>
        </Link>

        {/* Links */}
        <ul className="flex items-center justify-center gap-1 lg:gap-3">
          {links
            .filter(({ shown }) => shown === true)
            .map(({ href, label, content }) => (
              <li
                key={`${href}${label}`}
                className="text-gray-800 opacity-50 transition hover:opacity-100 dark:text-gray-300"
              >
                <span className="sr-only">{label}</span>
                <Link href={href} target="_blank">
                  {content}
                </Link>
              </li>
            ))}
          <DarkModeSwitch />
        </ul>
      </div>
    </header>
  )
}

function Sidebar({ location }: { location: string }) {
  return (
    <aside className="hidden min-w-full shrink-0 flex-col space-y-4 self-stretch overflow-y-scroll bg-opacity-80 p-5 lg:flex lg:min-w-min">
      <ul className="flex w-full flex-col border-b pb-4">
        {generalNav
          .filter((item) => item.shown !== false)
          .map((item, itemIdx) => {
            const isActive = location.toLowerCase() === item.name.toLowerCase()
            return (
              <li key={`nav-${itemIdx}`}>
                <SidebarItem
                  name={item.name}
                  href={item.href}
                  isActive={isActive}
                  icon={<item.icon className="h-5 w-5" />}
                />
              </li>
            )
          })}
      </ul>

      <div>
        <p className="mb-2 text-sm font-bold">Application UI</p>
        <ul className="flex w-full flex-col pb-4 pl-2">
          {applicationUiNav
            .filter((item) => item.shown !== false)
            .map((item, itemIdx) => {
              const isActive = location.toLowerCase() === item.name.toLowerCase()
              return (
                <li key={`nav-${itemIdx}`}>
                  <SidebarItem
                    name={item.name}
                    href={item.href}
                    isActive={isActive}
                    icon={<item.icon className="h-5 w-5" />}
                  />
                </li>
              )
            })}
        </ul>
      </div>

      <div>
        <p className="mb-2 text-sm font-bold">Marketing</p>
        <ul className="flex w-full flex-col pb-4 pl-2">
          {marketingNav
            .filter((item) => item.shown !== false)
            .map((item, itemIdx) => {
              const isActive = location.toLowerCase() === item.name.toLowerCase()
              return (
                <li key={`nav-${itemIdx}`}>
                  <SidebarItem
                    name={item.name}
                    href={item.href}
                    isActive={isActive}
                    icon={<item.icon className="h-5 w-5" />}
                  />
                </li>
              )
            })}
        </ul>
      </div>
    </aside>
  )
}

function SidebarItem({
  name,
  href,
  isActive,
  icon,
}: {
  name: string
  href: string
  isActive: boolean
  icon: React.ReactNode
}) {
  return (
    <Link
      title={name}
      href={href}
      className={classNames(
        isActive
          ? "border-primary bg-primary/10 text-black hover:opacity-80 dark:border-secondary dark:bg-secondary/5 dark:text-white"
          : "border-gray-300 hover:bg-slate-500/10 dark:border-white/10 dark:hover:bg-slate-600/30",
        "flex cursor-pointer items-center justify-start gap-2 rounded-r border-l py-1 pl-3 pr-3 text-sm transition ease-in-out lg:pr-10",
      )}
    >
      <span className="hidden lg:block">{name}</span>
    </Link>
  )
}

function Footer() {
  return (
    <footer className="max-w-8xl mx-auto flex w-full items-center justify-between space-x-2 bg-gray-700 px-4 py-4 pt-4 dark:bg-gray-900 sm:px-6 lg:px-8 lg:py-8 lg:pt-8">
      <p className="text-sm font-semibold uppercase leading-5 tracking-wide text-gray-300 dark:text-gray-400">
        by{" "}
        <Link
          target="_blank"
          href="https://github.com/kiko-g"
          className="inline-flex items-center gap-2 text-white hover:underline hover:opacity-80 dark:text-gray-300"
        >
          <span className="font-bold">Francisco Gonçalves</span>
          <Image src="/profile.svg" alt="author" width={24} height={24} className="rounded-full" />
        </Link>
      </p>

      <div></div>
    </footer>
  )
}
