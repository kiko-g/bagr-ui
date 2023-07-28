import React from "react"
import classNames from "classnames"
import { Lexend } from "next/font/google"
import { Switch } from "@headlessui/react"
import {
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
  Component: React.ElementType
}

export function ComponentShowcase({ name, path, Component }: Props) {
  const [isCodeVisible, setIsCodeVisible] = React.useState(false)

  function toggleCodeVisibility() {
    setIsCodeVisible((prev) => !prev)
  }

  return (
    <li className="flex flex-col space-y-3">
      {/* Header */}
      <h4 className="text-lg font-medium tracking-tighter text-white lg:text-xl">{name}</h4>

      {/* Controls */}
      <div className="flex items-center justify-between gap-3">
        {/* Left Side Controls */}
        <div>
          <CopyCode />
        </div>

        {/* Right Side Controls */}
        <div>
          <ViewCodeSwitch
            isCodeVisible={isCodeVisible}
            toggleCodeVisibility={toggleCodeVisibility}
          />
        </div>
      </div>

      {/* Showcase */}
      <div className="flex w-full items-center justify-center bg-white/5 px-8 py-16">
        <Component />
      </div>
    </li>
  )
}

function CopyCode() {
  const [isCopied, setIsCopied] = React.useState(false)

  return (
    <button
      className={classNames(
        "flex items-center justify-start gap-1.5 px-3 py-2 text-sm text-white shadow-sm transition",
        isCopied ? "bg-emerald-500/50 hover:bg-emerald-500/60" : "bg-white/10 hover:bg-pink-400/50",
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
  isCodeVisible: boolean
  toggleCodeVisibility: () => void
}

function ViewCodeSwitch({ isCodeVisible, toggleCodeVisibility }: ViewCodeSwitchProps) {
  return (
    <Switch.Group>
      <Switch
        checked={isCodeVisible}
        onChange={toggleCodeVisibility}
        className={classNames(
          isCodeVisible ? "bg-blue-600" : "bg-rose-600/40",
          "relative inline-flex h-[34px] w-[62px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent px-[1px] py-[2px] transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75",
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={classNames(
            isCodeVisible ? "translate-x-7" : "translate-x-0",
            "pointer-events-none flex h-7 w-7 transform items-center justify-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
          )}
        >
          {isCodeVisible ? (
            <ViewfinderCircleIcon className="h-5 w-5" />
          ) : (
            <CodeBracketIcon className="h-5 w-5" />
          )}
        </span>
      </Switch>
    </Switch.Group>
  )
}
