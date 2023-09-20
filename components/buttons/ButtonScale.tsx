import React from "react"

type Props = {}

export function ButtonScale({}: Props) {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="rounded bg-rose-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:scale-125 hover:bg-rose-600 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-blue-500/50 dark:hover:bg-blue-500"
    >
      Button
    </button>
  )
}
