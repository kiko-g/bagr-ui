import React, { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import clsx from "clsx"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Inter_Tight } from "next/font/google"
import { GithubIcon } from "./icons/GithubIcon"
import { Disclosure, Switch, Transition } from "@headlessui/react"
import {
  CheckIcon,
  ClipboardIcon,
  CodeBracketIcon,
  MinusIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline"

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
          className={clsx(
            inter.className,
            isOpen
              ? "bg-slate-800 text-white dark:bg-secondary"
              : "font-normal hover:text-primary dark:hover:text-secondary",
            "flex items-center justify-between gap-x-1.5 px-3.5 py-2.5 transition-all ease-in-out",
          )}
        >
          <span>{name}</span>
          {isOpen ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}
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
          <Disclosure.Panel className={clsx("relative", isOpen ? "mb-8" : "mb-0")}>
            <div className="absolute right-4 top-4 z-10 flex items-center justify-end gap-2">
              <CopyCodeButton text={code} />
              <ChangeViewModeButton isCodeVisible={isCodeVisible} toggle={() => setIsCodeVisible((prev) => !prev)} />
            </div>

            <div className="absolute bottom-4 left-4 z-10 flex items-center justify-end gap-2">
              <LinkToGithubButton path={path} />
            </div>

            <Transition
              show={isCodeVisible}
              enter="transition-all duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <SyntaxHighlighter
                language="tsx"
                showLineNumbers
                style={coldarkDark}
                customStyle={{
                  margin: "0",
                  minHeight: "300px",
                  backgroundColor: "#192030",
                  borderRadius: "0",
                }}
              >
                {code}
              </SyntaxHighlighter>
            </Transition>

            <Transition
              show={!isCodeVisible}
              enter="transition-all duration-150"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all duration-75"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="flex w-full items-center justify-center rounded-b bg-slate-150 px-8 py-16 dark:bg-black/20">
                {Component}
              </div>
            </Transition>
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

  if (!text) return null

  return (
    <button
      onClick={copyToClipboard}
      disabled={isCopied}
      className={clsx(
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
        className={clsx(
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
      className="flex items-center justify-start gap-2 rounded bg-white px-2 py-2 text-gray-900 shadow-sm transition hover:opacity-80 disabled:cursor-not-allowed"
    >
      <GithubIcon className="h-4 w-4" />
      <span className="text-xs">View on Github</span>
    </Link>
  )
}

function ChangeBackgroundButton({ isDarkBackground, toggle }: { isDarkBackground: boolean; toggle: () => void }) {
  return (
    <Switch checked={isDarkBackground} onChange={toggle}>
      <span className="sr-only">Use setting</span>
      <span
        className={clsx(
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
