import React from "react"

type Props = {}

export function ButtonSimpleBorder({}: Props) {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="rounded border border-rose-500 bg-rose-500/50 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-rose-500 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:border-blue-500 dark:bg-blue-500/25 dark:hover:bg-blue-500"
    >
      Button
    </button>
  )
}
