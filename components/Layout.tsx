import React from "react"
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
}

export default function Layout({ children }: Props) {
  return (
    <main
      className={classNames(inter.className, "flex min-h-screen w-screen flex-col bg-gray-900")}
    >
      <Header />
      <article className="max-w-8xl flex flex-1 flex-col items-start justify-start px-4 xl:px-8">
        {children}
      </article>
      <Footer />
    </main>
  )
}

type HeaderProps = {}

function Header({}: HeaderProps) {
  return (
    <div className="firefox:bg-opacity-90 sticky top-0 z-30 h-[72px] bg-gray-900 bg-opacity-50 backdrop-blur backdrop-filter">
      <header className="max-w-8xl mx-auto xl:px-8">
        <div className="flex items-center justify-between border-b border-gray-700 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
          {/* Logo */}
          <span className="flex items-center justify-center gap-3">
            <Image src="/bagr-ui.svg" alt="BagrUI" width={36} height={36}></Image>
            <h1
              className={classNames(
                lexend.className,
                "text-xl font-medium lowercase tracking-wide text-white",
              )}
            >
              Bagr.UI
            </h1>
          </span>

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
    </div>
  )
}

type FooterProps = {}

function Footer({}: FooterProps) {
  return (
    <div className="max-w-8xl mx-auto w-full">
      <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8 lg:py-8">
        <footer className="flex items-center justify-between space-x-2 border-t border-gray-700 pt-4 lg:pt-8">
          <p className="text-sm font-semibold uppercase leading-5 tracking-wide text-gray-400">
            by{" "}
            <Link
              target="_blank"
              href="https://github.com/kiko-g"
              className="inline-flex items-center gap-2 hover:underline hover:opacity-80"
            >
              <span className="font-bold text-white">Francisco Gonçalves</span>
              <Image
                src="/profile.svg"
                alt="author"
                width={24}
                height={24}
                className="rounded-full"
              />
            </Link>
          </p>

          <div></div>
        </footer>
      </div>
    </div>
  )
}
