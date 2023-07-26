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
      className={classNames(inter.className, "w-screen flex min-h-screen flex-col bg-gray-900")}
    >
      <Header />
      <article className="flex flex-col items-start justify-start flex-1 max-w-8xl px-8 xl:px-8">
        {children}
      </article>
      <Footer />
    </main>
  )
}

type HeaderProps = {}

function Header({}: HeaderProps) {
  return (
    <div className="sticky top-0 z-30 h-[72px] bg-gray-900 bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90">
      <header className="mx-auto max-w-8xl xl:px-8">
        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
          {/* Logo */}
          <span className="flex items-center justify-center gap-3">
            <Image src="/bagr-ui.svg" alt="BagrUI" width={36} height={36}></Image>
            <h2
              className={classNames(
                lexend.className,
                "font-medium text-xl lowercase tracking-wide text-white",
              )}
            >
              Bagr.UI
            </h2>
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
      <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <footer className="flex items-center justify-between space-x-2 border-t border-gray-800 pt-10">
          <p className="text-sm font-semibold uppercase leading-5 tracking-wide text-gray-400">
            by{" "}
            <Link
              className="inline-flex items-center gap-2 hover:opacity-80 hover:underline"
              href="https://github.com/kiko-g"
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
