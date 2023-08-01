import React from "react"
import classNames from "classnames" // npm i classnames
import {
  CheckBadgeIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

type Props = {
  text: string
  type: "success" | "info" | "warning" | "error"
}

export function AlertCloseableIcon({ text, type = "info" }: Props) {
  const [show, setShow] = React.useState(true)

  function closeAlert() {
    setShow(false)
  }

  return show ? (
    <div
      className={classNames(
        "flex items-center gap-2 rounded border-l-4 px-4 py-4",
        type === "info" ? "border-sky-600 bg-sky-50 dark:bg-sky-600/20" : "",
        type === "error" ? "border-rose-600 bg-rose-50 dark:bg-rose-600/20" : "",
        type === "warning" ? "border-amber-600 bg-amber-50 dark:bg-amber-600/20" : "",
        type === "success" ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-600/20" : "",
      )}
    >
      {type === "info" && <InformationCircleIcon className="h-4 w-4 text-sky-600 dark:text-sky-200" />}
      {type === "error" && <ExclamationCircleIcon className="h-4 w-4 text-rose-600 dark:text-rose-200" />}
      {type === "warning" && <ExclamationTriangleIcon className="h-4 w-4 text-amber-600 dark:text-amber-100" />}
      {type === "success" && <CheckBadgeIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-200" />}

      <p
        className={classNames(
          "text-sm font-normal",
          type === "info" ? "text-sky-600 dark:text-sky-200" : "",
          type === "error" ? "text-rose-600 dark:text-rose-200" : "",
          type === "warning" ? "text-amber-600 dark:text-amber-100" : "",
          type === "success" ? "text-emerald-600 dark:text-emerald-200" : "",
        )}
      >
        {text}
      </p>

      <button onClick={closeAlert} className="ml-2 rounded p-1 text-white hover:bg-white/50 dark:hover:bg-white/20">
        <XMarkIcon className="h-4 w-4" />
      </button>
    </div>
  ) : null
}
