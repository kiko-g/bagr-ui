import React from "react"

type Props = {}

export function ButtonGroupSimple({}: Props) {
  function myFunctionA() {
    // your onClick code here
  }

  function myFunctionB() {
    // your onClick code here
  }

  function myFunctionC() {
    // your onClick code here
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={myFunctionA}
        className="rounded bg-blue-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-blue-600/30 dark:hover:bg-blue-600"
      >
        Button A
      </button>

      <button
        onClick={myFunctionB}
        className="rounded bg-rose-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-rose-600/30 dark:hover:bg-rose-600"
      >
        Button B
      </button>

      <button
        onClick={myFunctionC}
        className="rounded bg-teal-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-teal-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-teal-600/30 dark:hover:bg-teal-600"
      >
        Button C
      </button>
    </div>
  )
}
