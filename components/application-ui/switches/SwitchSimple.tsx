import React from "react"
import classNames from "classnames"
import { Switch } from "@headlessui/react"
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline"

export function SwitchSimple() {
  const [isOn, setIsOn] = React.useState(false)

  function toggle() {
    setIsOn((prev) => !prev)
  }

  return (
    <Switch checked={isOn} onChange={toggle}>
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          "flex items-center justify-start gap-1.5 rounded px-3 py-2 text-sm text-white shadow-sm transition hover:opacity-80 disabled:cursor-not-allowed",
          isOn ? "bg-rose-600 dark:bg-rose-600/50" : "bg-primary-600 dark:bg-primary-500/60",
        )}
      >
        {isOn ? (
          <>
            <span className="hidden lg:inline-flex">Off</span>
            <XMarkIcon className="h-5 w-5" />
          </>
        ) : (
          <>
            <span className="hidden lg:inline-flex">On</span>
            <CheckIcon className="h-5 w-5" />
          </>
        )}
      </span>
    </Switch>
  )
}
