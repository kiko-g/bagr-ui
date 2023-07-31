import React from "react"

type Props = {}

export function ButtonGroupJoined({}: Props) {
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
    <div className="flex items-center">
      <button
        onClick={myFunctionA}
        className="rounded-l bg-gray-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-600 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-sky-600/30 dark:hover:bg-sky-600"
      >
        Button A
      </button>

      <button
        onClick={myFunctionB}
        className="bg-gray-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-600 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-sky-600/30 dark:hover:bg-sky-600"
      >
        Button B
      </button>

      <button
        onClick={myFunctionC}
        className="rounded-r bg-gray-700 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-600 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-sky-600/30 dark:hover:bg-sky-600"
      >
        Button C
      </button>
    </div>
  )
}
