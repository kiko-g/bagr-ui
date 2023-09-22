import React, { useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { Disclosure, Switch, Transition } from "@headlessui/react"
import {
  CheckIcon,
  ChevronDownIcon,
  ClipboardIcon,
  CodeBracketIcon,
  MoonIcon,
  SunIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Inter_Tight } from "next/font/google"
import Link from "next/link"
import { GithubIcon } from "./icons/GithubIcon"

const inter = Inter_Tight({ subsets: ["latin"] })

type Props = {
  name: string
  path: string
  collapseAll?: boolean
  Component: React.ReactNode
}

export function ComponentShowcase({ name, path, collapseAll = false, Component }: Props) {
  const [code, setCode] = useState<string>("")
  const [isOpen, setIsOpen] = useState(!collapseAll)
  const [isCodeVisible, setIsCodeVisible] = useState(false)

  useEffect(() => {
    setIsOpen(!collapseAll)
  }, [collapseAll])

  useEffect(() => {
    fetch(`/api/code?filepath=${encodeURIComponent(path)}`)
      .then((response) => response.text())
      .then((data) => setCode(data))
      .catch((error) => {
        console.error("Failed to fetch component code.")
      })
  }, [path])

  return (
    <li className="flex flex-col">
      <Disclosure defaultOpen={isOpen}>
        <Disclosure.Button
          onClick={() => setIsOpen((prev) => !prev)}
          className={classNames(
            isOpen
              ? "rounded-t-xl bg-primary text-white hover:opacity-80 dark:bg-secondary/80"
              : "rounded-xl bg-primary/60 text-white hover:bg-primary dark:bg-secondary/20 dark:hover:bg-secondary/40",
            "flex items-center gap-x-1.5 px-4 py-2.5 shadow transition ease-in-out",
          )}
        >
          <span className={classNames(inter.className, "text-left text-sm font-medium tracking-tight lg:text-base")}>
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
          <Disclosure.Panel className="group relative mb-8">
            <div className="absolute right-4 top-4 z-10 flex items-center justify-end gap-2">
              <CopyCodeButton text={code} />
              <ChangeViewModeButton isCodeVisible={isCodeVisible} toggle={() => setIsCodeVisible((prev) => !prev)} />
              <LinkToGithubButton path={path} />
            </div>

            <Loading code={code} />

            <div className={classNames(isCodeVisible ? "rotate-in" : "hidden")}>
              <SyntaxHighlighter
                language="tsx"
                showLineNumbers
                style={coldarkDark}
                customStyle={{
                  margin: "0",
                  minHeight: "400px",
                  backgroundColor: "#192030",
                  borderRadius: "0 0 0.75rem 0.75rem",
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>

            <div
              className={classNames(
                isCodeVisible ? "hidden" : "",
                "flex w-full items-center justify-center rounded-b-xl bg-slate-150 px-8 py-24 dark:bg-black/20",
              )}
            >
              <div className={classNames(isCodeVisible ? "" : "rotate-out")}>{Component}</div>
            </div>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </li>
  )
}

function Loading({ code }: { code: string }) {
  if (code !== "") return

  return (
    <div className="flex w-full items-center justify-center rounded-b-xl bg-[#1E2937] px-8 py-24 shadow dark:bg-black/10">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="-ml-1 mr-3 h-12 w-12 animate-spin text-primary dark:text-secondary"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
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

  if (!text) return null

  return (
    <button
      onClick={copyToClipboard}
      disabled={isCopied}
      className={classNames(
        "flex items-center justify-start gap-1.5 rounded px-3 py-2 text-xs shadow-sm transition disabled:cursor-not-allowed",
        isCopied
          ? "bg-teal-600 text-white"
          : "bg-slate-700 text-white hover:bg-blue-600/80 hover:text-white dark:bg-white/10 dark:hover:bg-blue-500/60",
      )}
    >
      <span className="hidden xl:inline-flex">{isCopied ? "Copied" : "Copy"}</span>
      {isCopied ? <CheckIcon className="h-4 w-4" /> : <ClipboardIcon className="h-4 w-4" />}
    </button>
  )
}

function ChangeViewModeButton({ isCodeVisible, toggle }: { isCodeVisible: boolean; toggle: () => void }) {
  return (
    <Switch checked={isCodeVisible} onChange={toggle}>
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          "flex items-center justify-start gap-1.5 rounded px-3 py-2 text-xs text-white shadow-sm transition disabled:cursor-not-allowed",
          isCodeVisible
            ? "bg-blue-600/80 text-white hover:opacity-80 dark:bg-blue-500/60 dark:hover:opacity-80"
            : "bg-slate-700 hover:bg-blue-600/80 dark:bg-white/10 dark:hover:bg-blue-500/60",
        )}
      >
        {isCodeVisible ? (
          <>
            <span className="hidden xl:inline-flex">Preview</span>
            <ViewfinderCircleIcon className="h-4 w-4" />
          </>
        ) : (
          <>
            <span className="hidden xl:inline-flex">Code</span>
            <CodeBracketIcon className="h-4 w-4" />
          </>
        )}
      </span>
    </Switch>
  )
}

function LinkToGithubButton({ path }: { path: string }) {
  const branchName = "main"
  const href = `https://github.com/kiko-g/bagr-ui/blob/${branchName}/components/${path}`

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-start gap-1.5 rounded bg-slate-700 px-3 py-2 text-xs text-white shadow-sm transition hover:bg-blue-600/80 hover:text-white disabled:cursor-not-allowed dark:bg-white/10 dark:hover:bg-blue-500/60"
    >
      <span className="hidden xl:inline-flex">Github</span>
      <GithubIcon className="h-4 w-4" />
    </Link>
  )
}

function ChangeBackgroundButton({ isDarkBackground, toggle }: { isDarkBackground: boolean; toggle: () => void }) {
  return (
    <Switch checked={isDarkBackground} onChange={toggle}>
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          "flex items-center justify-start gap-1.5 rounded px-3 py-2 text-xs shadow-sm transition disabled:cursor-not-allowed",
          isDarkBackground
            ? "bg-blue-600/80 text-white hover:opacity-80 dark:bg-blue-500/60 dark:hover:opacity-80"
            : "bg-white/90 text-gray-800 hover:opacity-80",
        )}
      >
        {isDarkBackground ? (
          <>
            <span className="hidden lg:inline-flex">Dark</span>
            <MoonIcon className="h-4 w-4" />
          </>
        ) : (
          <>
            <span className="hidden lg:inline-flex">Light</span>
            <SunIcon className="h-4 w-4" />
          </>
        )}
      </span>
    </Switch>
  )
}
