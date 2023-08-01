import React from "react"
import classNames from "classnames" // npm i classnames

type Props = {
  headline: string
  children?: React.ReactNode
  type: "success" | "info" | "warning" | "error"
}

export function AlertSimpleChildren({ headline, children, type = "info" }: Props) {
  return (
    <div
      className={classNames(
        "flex w-full min-w-[20rem] flex-col rounded border-l-4 px-4 py-4",
        type === "info" ? "border-sky-600 bg-sky-50 dark:bg-sky-600/20" : "",
        type === "error" ? "border-rose-600 bg-rose-50 dark:bg-rose-600/20" : "",
        type === "warning" ? "border-amber-600 bg-amber-50 dark:bg-amber-600/20" : "",
        type === "success" ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-600/20" : "",
      )}
    >
      <h4
        className={classNames(
          "mb-0 font-semibold",
          type === "info" ? "text-sky-800 dark:text-sky-500" : "",
          type === "error" ? "text-rose-800 dark:text-rose-500" : "",
          type === "warning" ? "text-amber-800 dark:text-amber-500" : "",
          type === "success" ? "text-emerald-800 dark:text-emerald-500" : "",
        )}
      >
        {headline}
      </h4>
      <div
        className={classNames(
          "text-sm font-normal",
          type === "info" ? "text-sky-600 dark:text-sky-50" : "",
          type === "error" ? "text-rose-600 dark:text-rose-50" : "",
          type === "warning" ? "text-amber-600 dark:text-amber-50" : "",
          type === "success" ? "text-emerald-600 dark:text-emerald-50" : "",
        )}
      >
        {children}
      </div>
    </div>
  )
}
