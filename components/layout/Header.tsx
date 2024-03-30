import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import { Lexend } from "next/font/google"
import { DarkModeSwitch } from "./DarkModeSwitch"
import { links } from "@/utils/data"

const lexend = Lexend({ subsets: ["latin"] })

export function Header() {
  return (
    <header className="max-w-8xl sticky top-0 z-30 mx-auto h-[72px] w-full bg-gray-50 bg-opacity-90 backdrop-blur backdrop-filter dark:bg-gray-900 dark:bg-opacity-80 xl:px-8">
      <div className="flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-3 hover:opacity-80">
          <Image src="/logo.svg" alt="BagrUI" width={36} height={36}></Image>
          <h1
            className={clsx(
              lexend.className,
              "text-xl font-bold lowercase text-teal-700 dark:bg-transparent dark:text-white",
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
