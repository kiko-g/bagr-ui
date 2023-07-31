import React from "react"

type Props = {}

export function ButtonOutline({}: Props) {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="rounded border-2 border-primary-900 bg-transparent px-3.5 py-2.5 text-sm font-medium text-primary-700 shadow-sm transition hover:bg-primary-900 hover:text-white focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:border-secondary-800 dark:bg-transparent dark:text-secondary-700 dark:hover:bg-secondary-800 dark:hover:text-white"
    >
      Button
    </button>
  )
}
