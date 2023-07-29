import React from "react"

type Props = {}

export function ButtonSimpleBorder({}: Props) {
  function myFunction() {
    console.log("click")
  }

  return (
    <button
      onClick={myFunction}
      className="rounded border border-pink-500 bg-pink-400/50 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-pink-500 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:border-rose-500 dark:bg-rose-500/25 dark:hover:bg-rose-500"
    >
      Button
    </button>
  )
}
