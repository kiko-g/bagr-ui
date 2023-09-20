import React from "react"

type Props = {}

export function ButtonOutline({}: Props) {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="rounded border border-rose-500 bg-rose-500/5 px-4 py-2.5 text-sm font-normal text-rose-500 shadow-sm transition hover:bg-rose-500 hover:text-white focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:border-blue-500 dark:bg-blue-500/5 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white"
    >
      Button
    </button>
  )
}
