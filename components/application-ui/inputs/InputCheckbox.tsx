import React, { useEffect, useRef } from "react"

type InputCheckboxProps = {
  labelText?: string
  checked?: boolean
  isIntermediate?: boolean
  onChange?: () => void
}

export function InputCheckbox({ labelText, checked, isIntermediate = false, onChange }: InputCheckboxProps) {
  const checkboxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = isIntermediate
    }
  }, [isIntermediate])

  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        ref={checkboxRef}
        type="checkbox"
        className="cursor-pointer rounded border border-gray-300 bg-white px-2.5 py-2.5 font-normal text-primary placeholder:font-normal placeholder:text-gray-400 checked:bg-primary indeterminate:bg-primary hover:border-primary/80 hover:bg-primary/5 focus:border-primary focus:accent-primary focus:ring-0 focus:ring-primary focus:ring-offset-0 dark:border-gray-200/10 dark:bg-gray-100/5 dark:text-secondary dark:placeholder:text-gray-500 dark:checked:bg-secondary dark:indeterminate:bg-secondary dark:hover:border-secondary/70 dark:hover:bg-secondary/50 dark:focus:border-secondary/80 dark:focus:ring-0 dark:focus:ring-secondary"
        {...(checked !== undefined && { checked })}
        {...(onChange && { onChange })}
      />
      <span className="ml-2">{labelText || "Label"}</span>
    </label>
  )
}
