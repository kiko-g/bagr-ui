import React from "react"
import Link from "next/link"
import Image from "next/image"
import classNames from "classnames"
import { Inter, Lexend } from "next/font/google"
import { GithubIcon } from "./icons"
import Head from "next/head"

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

export default function Layout({ children, location = "Unknown" }: Props) {
  return (
    <>
      <Seo title={location} />
      <main
        className={classNames(inter.className, "flex min-h-screen w-screen flex-col bg-gray-900")}
      >
        <Header />
        <article className="max-w-8xl flex flex-1 flex-col items-start justify-start px-4 xl:px-8">
          {children}
        </article>
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

type HeaderProps = {}

function Header({}: HeaderProps) {
  return (
    <header className="max-w-8xl firefox:bg-opacity-90 sticky top-0 z-30 mx-auto h-[72px] w-full bg-gray-900 bg-opacity-50 backdrop-blur backdrop-filter xl:px-8">
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-3 hover:opacity-80">
          <Image src="/bagr-ui.svg" alt="BagrUI" width={36} height={36}></Image>
          <h1
            className={classNames(
              lexend.className,
              "text-xl font-medium lowercase tracking-wide text-white",
            )}
          >
            Bagr.UI
          </h1>
        </Link>

        {/* Links */}
        <ul>
          {links.map(({ href, label, icon }) => (
            <li key={`${href}${label}`} className="text-gray-400 hover:text-white">
              <span className="sr-only">{label}</span>
              <Link href={href} className="text-gray-400 hover:text-white">
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

type FooterProps = {}

function Footer({}: FooterProps) {
  return (
    <footer className="max-w-8xl mx-auto flex w-full items-center justify-between space-x-2 border-t border-gray-700 px-4 py-4 pt-4 sm:px-6 lg:px-8 lg:py-8 lg:pt-8">
      <p className="text-sm font-semibold uppercase leading-5 tracking-wide text-gray-400">
        by{" "}
        <Link
          target="_blank"
          href="https://github.com/kiko-g"
          className="inline-flex items-center gap-2 hover:underline hover:opacity-80"
        >
          <span className="font-bold text-white">Francisco Gonçalves</span>
          <Image src="/profile.svg" alt="author" width={24} height={24} className="rounded-full" />
        </Link>
      </p>

      <div></div>
    </footer>
  )
}
