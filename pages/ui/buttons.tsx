import Layout from "@/components/Layout"
import classNames from "classnames"
import { Lexend } from "next/font/google"
import { ButtonSimple } from "../../components/buttons"
import { ClipboardIcon, CodeBracketIcon } from "@heroicons/react/24/outline"

const lexend = Lexend({ subsets: ["latin"] })

export default function Buttons() {
  return (
    <Layout location="Buttons">
      <div className="w-full py-8">
        <h2
          className={classNames(
            lexend.className,
            "mb-8 w-min whitespace-nowrap border-b border-gray-800 pb-4 text-xl font-medium tracking-tighter text-white lg:text-4xl",
          )}
        >
          Button Components
        </h2>

        <h4
          className={classNames(
            lexend.className,
            "mb-4 text-lg font-medium tracking-tighter text-white lg:text-xl",
          )}
        >
          Simple
        </h4>

        <div className="mb-4 flex gap-3">
          <button className="flex items-center justify-start gap-1.5 rounded bg-slate-600 px-3 py-2 text-sm text-white shadow-sm transition hover:bg-slate-500">
            <span>Code</span>
            <CodeBracketIcon className="h-5 w-5" />
          </button>

          <button className="flex items-center justify-start gap-1.5 rounded bg-slate-600 px-3 py-2 text-sm text-white shadow-sm transition hover:bg-slate-500">
            <span>Copy</span>
            <ClipboardIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex w-full items-center justify-center rounded-xl border-2 border-white p-8">
          <ButtonSimple />
        </div>
      </div>
    </Layout>
  )
}
