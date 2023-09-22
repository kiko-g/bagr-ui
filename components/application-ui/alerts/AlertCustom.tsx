import React, { useState } from "react"
import classNames from "classnames"
import {
  ChatBubbleOvalLeftEllipsisIcon,
  CheckBadgeIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

type Props = {
  type?: "success" | "info" | "warning" | "error"
  children?: React.ReactNode
  rounded?: boolean
  border?: boolean
  accent?: boolean
  closeable?: boolean
  filled?: boolean
}

export function AlertCustom({
  type,
  children,
  rounded = false,
  border = false,
  accent = false,
  closeable = false,
  filled = false,
}: Props) {
  const [show, setShow] = useState(true)

  function closeAlert() {
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      className={classNames(
        "flex w-full items-center justify-start gap-3 py-3 pl-3",
        closeable ? "pr-3" : "pr-5",
        border && "border",
        accent && "border-l-4",
        rounded && "rounded",
        filled ? "text-white" : "",
        type === "info" &&
          (filled ? "bg-sky-600" : "border-sky-600 bg-sky-50 text-sky-700 dark:bg-sky-600/20 dark:text-sky-200"),
        type === "error" &&
          (filled ? "bg-rose-600" : "border-rose-600 bg-rose-50 text-rose-700 dark:bg-rose-600/20 dark:text-red-200"),
        type === "warning" &&
          (filled
            ? "bg-amber-600"
            : "border-amber-600 bg-amber-50 text-amber-700 dark:bg-amber-600/20 dark:text-yellow-200"),
        type === "success" &&
          (filled
            ? "bg-emerald-600"
            : "border-emerald-600 bg-emerald-50 text-emerald-700 dark:bg-emerald-600/20 dark:text-emerald-200"),
        type === undefined &&
          (filled
            ? "bg-slate-600"
            : "border-slate-600 bg-slate-50 text-slate-700 dark:bg-slate-600/20 dark:text-slate-200"),
      )}
    >
      <span className="mt-0.5 self-stretch">
        {type === "info" && <InformationCircleIcon className="h-5 w-5" />}
        {type === "error" && <ExclamationCircleIcon className="h-5 w-5" />}
        {type === "warning" && <ExclamationTriangleIcon className="h-5 w-5" />}
        {type === "success" && <CheckBadgeIcon className="h-5 w-5" />}
        {type === undefined && <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />}
      </span>

      <div className="flex-1">{children}</div>

      {closeable && (
        <button
          onClick={closeAlert}
          className={classNames(
            filled ? "text-white hover:bg-white/20" : "text-gray-700 hover:bg-gray-700/20 hover:text-white",
            "ml-1 rounded p-0.5 transition lg:ml-2 lg:p-1",
          )}
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
