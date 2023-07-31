import React from "react"

type Props = {}

export function HoverDivCTA({}: Props) {
  const presentationSectionHeader = "Presentation Section Header"
  const presentationSectionSubeader = "Presentation Section Subheader"
  const presentationSectionDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempus id, ultrices in dolor. Sed iaculis, leo ut porta faucibus, urna turpis rutrum risus, nec mollis arcu nunc sed ex.`

  return (
    <a href="#" className="group relative block max-w-md bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Random Image from Unsplash"
        src="https://source.unsplash.com/random/800x600"
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-30"
      />

      <div className="relative p-8">
        <p className="dark:text-tertiary text-sm font-bold uppercase tracking-widest text-secondary text-teal-500 dark:text-rose-600">
          {presentationSectionHeader}
        </p>
        <p className="text-2xl font-bold text-white">{presentationSectionSubeader}</p>
        <div className="mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{presentationSectionDescription}</p>
          </div>
        </div>
      </div>
    </a>
  )
}
