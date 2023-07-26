import React from "react"

type Props = {}

export function ButtonSimple({}: Props) {
  function myFunction() {
    console.log("click")
  }

  return (
    <button
      onClick={myFunction}
      className="rounded bg-blue-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-500 focus:ring"
    >
      Button
    </button>
  )
}
