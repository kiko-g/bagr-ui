import React, { Fragment, useEffect, useState } from "react"
import Link from "next/link"
import clsx from "clsx"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Inter_Tight } from "next/font/google"
import { GithubIcon } from "./icons/GithubIcon"
import { Disclosure, DisclosureButton, DisclosurePanel, Switch, Transition } from "@headlessui/react"
import {
  CheckIcon,
  ChevronDownIcon,
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
  Component: React.ReactNode
}

export function ComponentShowcase({ name, path, Component }: Props) {
  const [code, setCode] = useState<string>("")
  const [isOpen, setIsOpen] = useState(true)
  const [isCodeVisible, setIsCodeVisible] = useState(false)

  useEffect(() => {
    fetch(`/api/code?filepath=${encodeURIComponent(path)}`)
      .then((response) => response.text())
      .then((data) => setCode(data))
      .catch((error) => {
        console.error("Failed to fetch component code.")
      })
  }, [path])

  return (
    <li className="flex flex-col" id={name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
      <Disclosure defaultOpen={isOpen}>
        <DisclosureButton
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-between gap-x-1.5 bg-slate-100 px-3.5 py-2.5 font-normal transition duration-100 hover:bg-slate-200 dark:bg-black/20 dark:hover:bg-black/30"
        >
          <span>{name}</span>
          <ChevronDownIcon className={clsx("h-4 w-4", isOpen ? "rotate-0" : "rotate-180")} />
        </DisclosureButton>

        <DisclosurePanel className="relative mb-8">
          <div className="absolute right-4 top-4 z-10 flex items-center justify-end gap-2.5">
            <CopyCodeButton text={code} />
            <ChangeViewModeButton
              isCodeVisible={isCodeVisible}
              toggleShowCode={() => setIsCodeVisible(true)}
              toggleShowPreview={() => setIsCodeVisible(false)}
            />
          </div>

          <div className="absolute bottom-4 left-4 z-10 flex items-center justify-end gap-2">
            <LinkToGithubButton path={path} />
          </div>

          {isCodeVisible ? (
            <SyntaxHighlighter
              language="tsx"
              showLineNumbers
              style={coldarkDark}
              customStyle={{
                margin: "0",
                minHeight: "300px",
                lineHeight: "1.25",
                fontSize: "0.9rem",
                backgroundColor: "#192030",
                borderRadius: "0",
              }}
            >
              {code}
            </SyntaxHighlighter>
          ) : (
            <div className="flex w-full items-center justify-center rounded-b bg-slate-150 px-8 py-32 dark:bg-black/20">
              {Component}
            </div>
          )}
        </DisclosurePanel>
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
        setTimeout(() => setIsCopied(false), 3000)
      })
      .catch(() => console.error("Failed to copy code to clipboard."))
  }, [text])

  if (!text) return null

  return (
    <button
      onClick={copyToClipboard}
      disabled={isCopied}
      className={clsx(
        "flex items-center justify-start gap-1.5 rounded-full border-0 px-4 py-3 text-xs shadow-sm transition disabled:cursor-not-allowed",
        isCopied
          ? "bg-teal-600 text-white"
          : "bg-black/70 text-white hover:bg-blue-600/80 hover:text-white dark:bg-black/50 dark:hover:bg-blue-500/60",
      )}
    >
      {isCopied ? <CheckIcon className="h-4 w-4" /> : <ClipboardIcon className="h-4 w-4" />}
    </button>
  )
}

function ChangeViewModeButton({
  isCodeVisible,
  toggleShowCode,
  toggleShowPreview,
}: {
  isCodeVisible: boolean
  toggleShowCode: () => void
  toggleShowPreview: () => void
}) {
  return (
    <div className="flex items-center justify-start gap-1.5 rounded-full border-0 bg-black/70 px-1.5 py-1.5 text-xs text-white shadow-sm transition disabled:cursor-not-allowed dark:bg-black/50">
      <button
        onClick={toggleShowPreview}
        className={clsx(
          "inline-flex rounded-full px-2.5 py-1.5 text-xs",
          isCodeVisible ? "hover:bg-white/20 dark:hover:bg-white/10" : "bg-white/30 dark:bg-white/20",
        )}
      >
        Preview
      </button>
      <button
        onClick={toggleShowCode}
        className={clsx(
          "inline-flex rounded-full px-2.5 py-1.5 text-xs",
          isCodeVisible ? "bg-white/30 dark:bg-white/20" : "hover:bg-white/10",
        )}
      >
        Code
      </button>
    </div>
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
