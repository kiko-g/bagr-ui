import { useState } from "react"

export function InputCheckbox() {
  const [checked, setChecked] = useState(false)

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      className="cursor-pointer rounded border border-gray-300 bg-white px-2.5 py-2.5 font-normal text-blue-500 transition placeholder:font-normal placeholder:text-gray-400 checked:bg-blue-500 hover:border-blue-500/80 hover:bg-blue-500/5 checked:hover:opacity-80 focus:border-blue-500 focus:accent-blue-500 focus:ring-0 focus:ring-blue-500 focus:ring-offset-0 dark:border-gray-200/10 dark:bg-gray-100/5 dark:text-blue-500 dark:placeholder:text-gray-500 dark:checked:bg-blue-500 dark:hover:border-blue-500/70 dark:hover:bg-blue-500/50 dark:focus:border-blue-500/80 dark:focus:ring-0 dark:focus:ring-blue-500"
    />
  )
}
