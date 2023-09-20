import React from "react"
import classNames from "classnames"
import { Inter, Lexend } from "next/font/google"

import { Seo } from "./layout/Seo"
import { Header } from "./layout/Header"
import { Footer } from "./layout/Footer"
import { Sidebar } from "./layout/Sidebar"

const inter = Inter({ subsets: ["latin"] })

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
