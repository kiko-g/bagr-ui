import React from "react"
import { Menu } from "@headlessui/react" // npm install @headlessui/react
import { BuildingOfficeIcon, ChartBarIcon, ChevronDownIcon, CpuChipIcon } from "@heroicons/react/24/outline" // npm install @heroicons/react

type Props = {}

export function ButtonGroupSplit({}: Props) {
  function myFunction() {
    // your onClick code here
  }

  return (
    <div className="relative flex items-center justify-center text-sm font-medium shadow">
      <button
        onClick={myFunction}
        className="rounded-l bg-indigo-500 px-3.5 py-2.5 text-white transition hover:bg-indigo-700 focus:ring disabled:cursor-not-allowed disabled:opacity-25 dark:bg-indigo-500/60 dark:hover:bg-indigo-500"
      >
        Button A
      </button>
      <Menu>
        <Menu.Button className="h-full flex-1 self-stretch rounded-r bg-indigo-500 px-2 py-2.5 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-25 dark:bg-indigo-500/60 dark:hover:bg-indigo-500">
          <ChevronDownIcon className="h-5 w-5" />
        </Menu.Button>

        <Menu.Items className="absolute right-0 top-0 mt-12 flex w-full flex-col rounded bg-white py-0 shadow dark:bg-black/50">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`flex items-center gap-2 rounded-t px-2 py-2 text-xs ${
                  active && "bg-indigo-500 text-white"
                }`}
              >
                <BuildingOfficeIcon className="h-4 w-4" />
                <span>Option 1</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button className={`flex items-center gap-2 px-2 py-2 text-xs  ${active && "bg-indigo-500 text-white"}`}>
                <CpuChipIcon className="h-4 w-4" />
                <span>Option 2</span>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`flex items-center gap-2 rounded-b px-2 py-2 text-xs ${
                  active && "bg-indigo-500 text-white"
                }`}
              >
                <ChartBarIcon className="h-4 w-4" />
                <span>Option 3</span>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}
