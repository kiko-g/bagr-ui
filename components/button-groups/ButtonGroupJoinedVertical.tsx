import React from "react"

type Props = {}

export function ButtonGroupJoinedVertical({}: Props) {
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
    <div className="flex flex-col items-center justify-center gap-0">
      <button
        onClick={myFunctionA}
        className="w-full rounded-t bg-gray-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-sky-600/30 dark:hover:bg-sky-600"
      >
        Button A
      </button>

      <button
        onClick={myFunctionB}
        className="w-full rounded-none bg-gray-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-sky-600/30 dark:hover:bg-sky-600"
      >
        Button B
      </button>

      <button
        onClick={myFunctionC}
        className="w-full rounded-b bg-gray-600 px-3.5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-sky-600/30 dark:hover:bg-sky-600"
      >
        Button C
      </button>
    </div>
  )
}
