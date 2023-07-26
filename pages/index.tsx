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
    <div className="max-w-3xl py-8 lg:py-16">
      <h2
        className={classNames(
          lexend.className,
          "text-xl font-bold tracking-tighter text-white lg:text-4xl lg:tracking-tight",
        )}
      >
        Resuable UI Components with{" "}
        <span className="inline-flex items-center justify-center gap-1 text-[#149eca] lg:gap-2">
          <ReactIcon className="inline-flex h-5 w-5 lg:h-8 lg:w-8" />
          <span>React</span>
        </span>
        {", "}
        <span className="inline-flex items-center justify-center gap-1 text-[#3178c6] lg:gap-2">
          <TypescriptIcon className="inline-flex h-5 w-5 lg:h-8 lg:w-8" />
          <span>Typescript</span>
        </span>
        {", and "}
        <span className="inline-flex items-center justify-center gap-1 text-[#38bdf8] lg:gap-2">
          <TailwindIcon className="inline-flex h-5 w-5 lg:h-8 lg:w-8" />
          <span>TailwindCSS</span>
        </span>
        {"."}
      </h2>
    </div>
  )
}
