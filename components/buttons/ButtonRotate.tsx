import React from "react"

type Props = {}

export function ButtonRotate({}: Props) {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="rounded bg-pink-400 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-rotate-6 hover:bg-pink-500 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-rose-500/25 dark:hover:bg-rose-500"
    >
      Button
    </button>
  )
}
