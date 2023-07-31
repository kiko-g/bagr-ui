import React from "react"

export function ButtonTranslate() {
  function myFunction() {
    // your onClick code here
  }

  return (
    <button
      onClick={myFunction}
      className="group flex w-full items-center justify-center gap-x-1 rounded bg-primary-700 px-8 py-3 text-sm font-medium text-white shadow transition hover:-translate-y-2 hover:bg-primary-900 dark:bg-secondary-800/50 dark:text-white dark:hover:bg-secondary-800 sm:w-auto lg:gap-x-2"
    >
      <span>Button</span>
    </button>
  )
}
