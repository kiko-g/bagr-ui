import React from "react"
import classNames from "classnames"
import { Disclosure, Switch, Transition } from "@headlessui/react"
import {
  CheckIcon,
  ChevronDownIcon,
  ClipboardIcon,
  CodeBracketIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { JetBrains_Mono, Lexend } from "next/font/google"

const lexend = Lexend({ subsets: ["latin"] })
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] })

type Props = {
  name: string
  path: string
  collapseAll?: boolean
  Component: React.ElementType
}

export function ComponentShowcase({ name, path, collapseAll = false, Component }: Props) {
  const [code, setCode] = React.useState<string>("")
  const [isOpen, setIsOpen] = React.useState(!collapseAll)
  const [isCodeVisible, setIsCodeVisible] = React.useState(false)

  React.useEffect(() => {
    setIsOpen(!collapseAll)
  }, [collapseAll])

  React.useEffect(() => {
    fetch(`/api/code?filepath=${encodeURIComponent(path)}`)
      .then((response) => response.text())
      .then((data) => setCode(data))
      .catch((error) => {
        console.error("Failed to fetch component code.")
      })
  }, [path])

  return (
    <li className="flex flex-col">
      {/* Header */}
      <Disclosure defaultOpen={isOpen}>
        <Disclosure.Button
          onClick={() => setIsOpen((prev) => !prev)}
          className={classNames(
            isOpen ? "rounded-t-xl" : "rounded-xl",
            "mx-2 flex items-center gap-x-1.5 bg-gray-800 px-4 py-2.5 text-white shadow-xl transition hover:bg-primary-900 dark:bg-secondary-900/20 dark:hover:bg-secondary-900/60",
          )}
        >
          <span className={classNames(lexend.className, "text-left text-lg font-medium tracking-tight lg:text-lg")}>
            {name}
          </span>
          <ChevronDownIcon className="h-5 w-5" />
        </Disclosure.Button>

        <Transition
          show={isOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="mb-8 px-2">
            <div className="group relative">
              {/* Controls */}
              <div className="absolute right-4 top-4 flex items-center justify-end gap-2">
                {code === "" ? null : <CopyCodeButton text={code} />}
                <ViewComponentButton isCodeVisible={isCodeVisible} action={() => setIsCodeVisible(false)} />
                <ViewCodeButton isCodeVisible={isCodeVisible} action={() => setIsCodeVisible(true)} />
              </div>
            </div>

            {/* Showcase */}
            {isCodeVisible ? (
              code === "" ? (
                <div className="flex w-full items-center justify-center rounded-b-xl bg-[#1E2937] px-8 py-24 shadow dark:bg-black/10">
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="-ml-1 mr-3 h-12 w-12 animate-spin text-primary dark:text-secondary"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </div>
              ) : (
                <div className={classNames(jetBrainsMono.className)}>
                  <SyntaxHighlighter
                    language="tsx"
                    wrapLongLines
                    showLineNumbers
                    style={coldarkDark}
                    customStyle={{
                      whiteSpace: "pre-wrap",
                      borderRadius: "0 0 0.75rem 0.75rem",
                      minHeight: "400px",
                      maxHeight: "600px",
                      margin: "0",
                    }}
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              )
            ) : (
              <div className="flex w-full items-center justify-center rounded-b-xl bg-gray-700 px-8 py-24 shadow dark:bg-black/40">
                <Component />
              </div>
            )}
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </li>
  )
}

function CopyCodeButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = React.useState(false)

  const copyToClipboard = React.useCallback(() => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 4000)
      })
      .catch(() => console.error("Failed to copy code to clipboard."))
  }, [text])

  return (
    <button
      onClick={copyToClipboard}
      disabled={isCopied}
      className={classNames(
        "flex items-center justify-start gap-1.5 rounded px-3 py-2 text-xs shadow-sm transition disabled:cursor-not-allowed",
        isCopied
          ? "bg-teal-600 text-white"
          : "bg-black/30 text-white hover:bg-blue-600/80 hover:text-white dark:bg-black/40 dark:hover:bg-blue-500/60",
      )}
    >
      <span>{isCopied ? "Copied" : "Copy"}</span>
      {isCopied ? <CheckIcon className="h-4 w-4" /> : <ClipboardIcon className="h-4 w-4" />}
    </button>
  )
}

function ViewComponentButton({ isCodeVisible, action }: { isCodeVisible: boolean; action: () => void }) {
  return (
    <button
      onClick={action}
      className={classNames(
        "flex items-center justify-start gap-1.5 rounded px-3 py-2 text-xs text-white shadow-sm transition hover:text-white disabled:cursor-not-allowed",
        isCodeVisible
          ? "bg-black/30 hover:bg-blue-600/80 dark:bg-black/40 dark:hover:bg-blue-500/60"
          : "bg-blue-600/80 text-white hover:opacity-80 dark:bg-blue-500/60 dark:hover:opacity-80",
      )}
    >
      <span className="hidden lg:inline-flex">Preview</span>
      <ViewfinderCircleIcon className="h-4 w-4" />
    </button>
  )
}

function ViewCodeButton({ isCodeVisible, action }: { isCodeVisible: boolean; action: () => void }) {
  return (
    <button
      onClick={action}
      className={classNames(
        "flex items-center justify-start gap-1.5 rounded px-3 py-2 text-xs text-white shadow-sm transition hover:text-white disabled:cursor-not-allowed",
        isCodeVisible
          ? "bg-blue-600/80 text-white hover:opacity-80 dark:bg-blue-500/60 dark:hover:opacity-80"
          : "bg-black/30 hover:bg-blue-600/80 dark:bg-black/40 dark:hover:bg-blue-500/60",
      )}
    >
      <span className="hidden lg:inline-flex">Code</span>
      <CodeBracketIcon className="h-4 w-4" />
    </button>
  )
}
