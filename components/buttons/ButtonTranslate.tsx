import React from "react"

export function ButtonTranslate() {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="group flex w-full items-center justify-center gap-x-1 rounded bg-pink-500/70 px-8 py-3 text-sm font-medium text-white shadow transition hover:-translate-y-2 hover:bg-pink-500 dark:bg-rose-500/25 dark:text-white dark:hover:bg-rose-500 sm:w-auto lg:gap-x-2"
    >
      <span>Button</span>
    </button>
  )
}
