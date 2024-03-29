import React from "react"
import classNames from "classnames"
import { CheckIcon, ClipboardIcon } from "@heroicons/react/24/outline"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { Inter_Tight } from "next/font/google"

const inter = Inter_Tight({ subsets: ["latin"] })

type Props = {
  code: string
  language: string
}

export function CodeShowcaseDirect({ code, language }: Props) {
  return (
    <div className={classNames(inter.className, "group relative mb-4 max-w-7xl overflow-x-scroll rounded-xl")}>
      {/* Controls */}
      <div className="absolute right-3 top-3 z-20 flex items-center justify-end gap-2 font-sans">
        {code === "" ? null : <CopyCodeButton text={code} />}
      </div>

      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        customStyle={{
          backgroundColor: "#0e131f",
          borderRadius: "0.75rem",
          maxHeight: "200px",
          margin: "0",
        }}
      >
        {code}
      </SyntaxHighlighter>
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

  return (
    <button
      onClick={copyToClipboard}
      disabled={isCopied}
      className={classNames(
        "flex items-center justify-start gap-1.5 rounded px-3 py-2 text-xs shadow-sm transition disabled:cursor-not-allowed",
        isCopied
          ? "bg-teal-600 text-white"
          : "bg-[#3e424c] text-white hover:bg-blue-600/80 hover:text-white dark:bg-white/10 dark:hover:bg-blue-500/60",
      )}
    >
      <span className="hidden xl:flex">{isCopied ? "Copied" : "Copy"}</span>
      {isCopied ? <CheckIcon className="h-4 w-4" /> : <ClipboardIcon className="h-4 w-4" />}
    </button>
  )
}
