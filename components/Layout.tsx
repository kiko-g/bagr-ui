import React from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import classNames from "classnames"
import { Inter, Lexend } from "next/font/google"
import { GithubIcon } from "./icons"

const inter = Inter({ subsets: ["latin"] })
const lexend = Lexend({ subsets: ["latin"] })

const links = [
  {
    label: "Github Repository",
    href: "https://github.com/kiko-g/bagr-ui",
    icon: <GithubIcon className="h-5 w-5" />,
  },
]

type Props = {
  children: React.ReactNode
  location: string
}

export function Layout({ children, location = "Unknown" }: Props) {
  return (
    <>
      <Seo title={location} />
      <main className={classNames(inter.className, "flex min-h-screen w-screen flex-col")}>
        <Header />
        <article className="max-w-8xl flex flex-1 flex-col items-start justify-start px-4 xl:px-8">{children}</article>
        <Footer />
      </main>
    </>
  )
}

type SeoProps = {
  title: string
}

function Seo({ title }: SeoProps) {
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

type HeaderProps = {}

function Header({}: HeaderProps) {
  return (
    <header className="max-w-8xl sticky top-0 z-30 mx-auto h-[72px] w-full border-b border-gray-300 bg-opacity-80 backdrop-blur backdrop-filter dark:border-gray-800 xl:px-8">
      <div className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-3 hover:opacity-80">
          <Image src="/bagr-ui.svg" alt="BagrUI" width={36} height={36}></Image>
          <h1 className={classNames(lexend.className, "text-xl font-medium lowercase tracking-wide")}>Bagr.UI</h1>
        </Link>

        {/* Links */}
        <ul className="flex items-center justify-center gap-1 lg:gap-3">
          {links.map(({ href, label, icon }) => (
            <li key={`${href}${label}`} className="text-gray-400 hover:text-white">
              <span className="sr-only">{label}</span>
              <Link href={href} className="text-gray-400 hover:text-white">
                {icon}
              </Link>
            </li>
          ))}
          <DarkModeSwitch />
        </ul>
      </div>
    </header>
  )
}

type FooterProps = {}

function Footer({}: FooterProps) {
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
