import React from "react"

export function ButtonSimple() {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="rounded bg-blue-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-600 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-blue-500/25 dark:hover:bg-blue-500"
    >
      Button
    </button>
  )
}
