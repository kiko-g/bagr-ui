import React from "react"
import classNames from "classnames" // npm i classnames

type Props = {
  text: string
  headline: string
  type: "success" | "info" | "warning" | "error"
}

export function AlertSimple({ text, headline, type = "info" }: Props) {
  return (
    <div
      className={classNames(
        "flex flex-col rounded border-l-4 py-3 pl-3 pr-2",
        type === "info" ? "border-sky-600 bg-sky-50 dark:bg-sky-600/20" : "",
        type === "error" ? "border-rose-600 bg-rose-50 dark:bg-rose-600/20" : "",
        type === "warning" ? "border-amber-600 bg-amber-50 dark:bg-amber-600/20" : "",
        type === "success" ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-600/20" : "",
      )}
    >
      <h4
        className={classNames(
          "mb-1 font-semibold",
          type === "info" ? "text-sky-700 dark:text-sky-500" : "",
          type === "error" ? "text-rose-700 dark:text-rose-500" : "",
          type === "warning" ? "text-amber-700 dark:text-amber-500" : "",
          type === "success" ? "text-emerald-700 dark:text-emerald-500" : "",
        )}
      >
        {headline}
      </h4>

      <div
        className={classNames(
          "text-xs font-normal lg:text-sm",
          type === "info" ? "text-sky-600 dark:text-sky-50" : "",
          type === "error" ? "text-rose-600 dark:text-rose-50" : "",
          type === "warning" ? "text-amber-600 dark:text-amber-50" : "",
          type === "success" ? "text-emerald-600 dark:text-emerald-50" : "",
        )}
      >
        {text}
      </div>
    </div>
  )
}
