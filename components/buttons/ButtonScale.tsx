import React from "react"

type Props = {}

export function ButtonScale({}: Props) {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="rounded bg-primary-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:scale-125 hover:bg-primary-900 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-secondary-800/50 dark:hover:bg-secondary-800"
    >
      Button
    </button>
  )
}
