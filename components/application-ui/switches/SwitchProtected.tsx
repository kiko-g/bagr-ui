import React, { useState } from "react"
import classNames from "classnames"
import { Switch } from "@headlessui/react"

export function SwitchProtected() {
  const [isEnabled, setIsEnabled] = useState(true)

  function toggle() {
    // only prompt for code if switch is enabled
    if (isEnabled) {
      const userCode = window.prompt(`Please enter the code to toggle switch OFF (1234):`)
      const expectedCode = "1234"

      if (userCode === expectedCode) setIsEnabled(false)
      else alert("Incorrect code. Switch was not disabled.")
    } else {
      setIsEnabled(true)
    }
  }

  return (
    <Switch
      checked={isEnabled}
      onChange={toggle}
      className={classNames(
        isEnabled ? "bg-primary-600" : "bg-slate-600",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 dark:focus:ring-secondary",
      )}
    >
      <span className="sr-only">Toggle switch</span>
      <span
        aria-hidden="true"
        className={classNames(
          isEnabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
        )}
      />
    </Switch>
  )
}
