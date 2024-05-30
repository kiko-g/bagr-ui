import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import { Lexend } from "next/font/google"
import { DarkModeSwitch } from "./DarkModeSwitch"
import { links } from "@/utils/data"

const lexend = Lexend({ subsets: ["latin"] })

export function Header() {
  return (
    <header className="max-w-8xl border-dimmed sticky top-0 z-30 mx-auto mb-2 h-[60px] w-full border-b bg-gray-50 bg-opacity-40 backdrop-blur-sm backdrop-filter dark:bg-gray-900 dark:bg-opacity-40 xl:px-6">
      <div className="flex items-center justify-between px-3 py-3 sm:px-4 lg:px-6 xl:px-0">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center justify-center gap-1 hover:opacity-80">
            <Image src="/logo.svg" alt="BagrUI" width={36} height={36}></Image>
            <h1
              className={clsx(
                lexend.className,
                "inline-flex text-xl font-bold text-gray-800 dark:bg-transparent dark:text-white",
              )}
            >
              BagrUI
            </h1>
          </Link>
          <span className="inline-flex items-center rounded-sm border border-amber-400 bg-amber-400 px-1 py-0.5 text-xs font-bold uppercase text-amber-950">
            Beta
          </span>
        </div>

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
