import Layout from "@/components/Layout"
import classNames from "classnames"
import { Lexend } from "next/font/google"
import { ReactIcon, TailwindIcon, TypescriptIcon } from "@/components/icons"

const lexend = Lexend({ subsets: ["latin"] })

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

function Hero() {
  return (
    <div className="max-w-3xl py-12 lg:py-16">
      <h1 className={classNames(lexend.className, "text-white font-bold text-4xl tracking-tight")}>
        Resuable UI Components with{" "}
        <span className="text-[#149eca] inline-flex gap-2 items-center justify-center">
          <ReactIcon className="h-8 w-8 inline-flex" />
          <span>React</span>
        </span>
        {", "}
        <span className="text-[#3178c6] inline-flex gap-2 items-center justify-center">
          <TypescriptIcon className="h-8 w-8 inline-flex mt-1" />
          <span>Typescript</span>
        </span>
        {", "}
        <span className="text-[#38bdf8] inline-flex gap-2 items-center justify-center">
          <TailwindIcon className="h-8 w-8 inline-flex" />
          <span>TailwindCSS</span>
        </span>
        {"."}
      </h1>
    </div>
  )
}
