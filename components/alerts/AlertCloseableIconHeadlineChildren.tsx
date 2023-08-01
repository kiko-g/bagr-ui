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
  headline: string
  children?: React.ReactNode
  type: "success" | "info" | "warning" | "error"
}

export function AlertCloseableIconHeadlineChildren({ children, headline, type = "info" }: Props) {
  const [show, setShow] = React.useState(true)

  function closeAlert() {
    setShow(false)
  }

  return show ? (
    <div
      className={classNames(
        "flex w-full max-w-full flex-col items-start gap-1 rounded border-l-4 py-3 pl-3 pr-2 lg:min-w-[20rem]",
        type === "info" ? "border-sky-600 bg-sky-50 dark:bg-sky-600/20" : "",
        type === "error" ? "border-rose-600 bg-rose-50 dark:bg-rose-600/20" : "",
        type === "warning" ? "border-amber-600 bg-amber-50 dark:bg-amber-600/20" : "",
        type === "success" ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-600/20" : "",
      )}
    >
      <div className="flex w-full items-center justify-between gap-2">
        <div
          className={classNames(
            "flex items-center gap-1",
            type === "info" ? "text-sky-700 dark:text-sky-500" : "",
            type === "error" ? "text-rose-700 dark:text-rose-500" : "",
            type === "warning" ? "text-amber-700 dark:text-amber-400" : "",
            type === "success" ? "text-emerald-700 dark:text-emerald-400" : "",
          )}
        >
          <span className="flex-1">
            {type === "info" && <InformationCircleIcon className="h-4 w-4" />}
            {type === "error" && <ExclamationCircleIcon className="h-4 w-4" />}
            {type === "warning" && <ExclamationTriangleIcon className="h-4 w-4" />}
            {type === "success" && <CheckBadgeIcon className="h-4 w-4" />}
          </span>
          <h4 className="mb-0 font-semibold">{headline}</h4>
        </div>

        <button
          onClick={closeAlert}
          className="ml-1 rounded p-0.5 text-gray-700 hover:bg-white/80 dark:text-white dark:hover:bg-white/20 lg:ml-2 lg:p-1"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>

      <div
        className={classNames(
          "text-xs font-normal lg:text-sm",
          type === "info" ? "text-sky-600 dark:text-sky-50" : "",
          type === "error" ? "text-rose-600 dark:text-rose-50" : "",
          type === "warning" ? "text-amber-600 dark:text-amber-50" : "",
          type === "success" ? "text-emerald-600 dark:text-emerald-50" : "",
        )}
      >
        {children}
      </div>
    </div>
  ) : null
}
