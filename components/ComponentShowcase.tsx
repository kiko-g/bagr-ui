import React from "react"
import classNames from "classnames"
import { Lexend } from "next/font/google"
import { Disclosure, Switch, Transition } from "@headlessui/react"
import {
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  ClipboardIcon,
  CodeBracketIcon,
  ViewfinderCircleIcon,
} from "@heroicons/react/24/outline"

const lexend = Lexend({ subsets: ["latin"] })

type Props = {
  name: string
  path: string
  collapseAll?: boolean
  Component: React.ElementType
}

export function ComponentShowcase({ name, path, collapseAll = false, Component }: Props) {
  const [isCodeVisible, setIsCodeVisible] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(!collapseAll)

  function toggleCodeVisibility() {
    setIsCodeVisible((prev) => !prev)
  }

  React.useEffect(() => {
    setIsOpen(!collapseAll)
  }, [collapseAll])

  return (
    <li className="flex flex-col">
      {/* Header */}
      <Disclosure defaultOpen={isOpen}>
        <Disclosure.Button
          onClick={() => setIsOpen((prev) => !prev)}
          className={classNames(
            isOpen ? "" : "",
            "flex items-center gap-x-1.5 rounded px-2 py-1.5 transition hover:underline",
          )}
        >
          <span className="text-left text-lg font-medium tracking-tighter lg:text-xl">{name}</span>
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
          <Disclosure.Panel className="mb-8 mt-2 px-2">
            {/* Controls */}
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <CopyCodeButton text="Copied Text" />
              </div>
              <ViewCodeSwitch viewCode={isCodeVisible} toggle={toggleCodeVisibility} modern />
            </div>

            {/* Showcase */}
            <div className="flex w-full items-center justify-center bg-gray-900/5 px-8 py-16 shadow dark:bg-white/5">
              <Component />
            </div>
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </li>
  )
}

type CopyCodeButtonProps = {
  text: string
}

function CopyCodeButton({ text }: CopyCodeButtonProps) {
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
      className={classNames(
        "flex items-center justify-start gap-1.5 rounded px-3.5 py-2.5 text-sm shadow-sm transition",
        isCopied
          ? "bg-teal-600 text-white hover:opacity-80"
          : "bg-gray-900/5 hover:bg-slate-600 hover:text-white dark:bg-white/5 dark:hover:bg-blue-500/60",
      )}
    >
      <span>{isCopied ? "Copied" : "Copy"}</span>
      {isCopied ? (
        <ClipboardDocumentCheckIcon className="h-5 w-5" />
      ) : (
        <ClipboardDocumentIcon className="h-5 w-5" />
      )}
    </button>
  )
}

type ViewCodeSwitchProps = {
  viewCode: boolean
  toggle: () => void
  modern?: boolean
}

function ViewCodeSwitch({ viewCode, toggle, modern = true }: ViewCodeSwitchProps) {
  return modern ? (
    <Switch
      checked={viewCode}
      onChange={toggle}
      className="flex items-center justify-start rounded border-4 border-gray-900/5 bg-gray-900/5 text-sm shadow-sm transition dark:border-white/5 dark:bg-white/5"
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          "flex items-center gap-x-2 rounded-l px-3 py-2 transition",
          viewCode
            ? "bg-gray-900/5 hover:bg-slate-600/50 hover:text-white dark:bg-white/5 dark:hover:bg-slate-500/50"
            : "bg-slate-600 text-white hover:bg-slate-600/80 dark:bg-slate-600 dark:hover:bg-slate-500/40",
        )}
      >
        <span className="hidden lg:inline-flex">Preview</span>
        <ViewfinderCircleIcon className="h-5 w-5" />
      </span>
      <span
        className={classNames(
          "flex items-center gap-x-2 rounded-r px-3 py-2 transition",
          viewCode
            ? "bg-slate-600 text-white hover:bg-slate-600/80 dark:bg-slate-600 dark:hover:bg-slate-500/40"
            : "bg-gray-900/5 hover:bg-slate-600/50 hover:text-white dark:bg-white/5 dark:hover:bg-slate-500/50",
        )}
      >
        <span className="hidden lg:inline-flex">View Code</span>
        <CodeBracketIcon className="h-5 w-5" />
      </span>
    </Switch>
  ) : (
    <Switch
      checked={viewCode}
      onChange={toggle}
      className={classNames(
        viewCode ? "bg-blue-600" : "bg-blue-600/20 dark:bg-blue-600/30",
        "relative inline-flex h-[34px] w-[62px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent px-[1px] py-[2px] transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75",
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          viewCode ? "translate-x-7" : "translate-x-0",
          "pointer-events-none flex h-7 w-7 transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
        )}
      >
        {viewCode ? (
          <ViewfinderCircleIcon className="h-5 w-5 text-gray-800" />
        ) : (
          <CodeBracketIcon className="h-5 w-5 text-gray-800" />
        )}
      </span>
    </Switch>
  )
}
