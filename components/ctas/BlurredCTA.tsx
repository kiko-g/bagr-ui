import React from "react"

export function BlurredCTA() {
  return (
    <a href="#" className="group relative overflow-hidden bg-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="Random Image from Unsplash"
        src="https://source.unsplash.com/random/800x600"
        className="h-full  w-full object-cover blur-sm transition duration-300 group-hover:blur-0 lg:blur-md"
      />
      <div className="absolute inset-0 flex h-full w-full items-center justify-center">
        <div className="absolute h-full w-full bg-black/60 transition group-hover:bg-black/40" />
        <div className="font-lexend z-50 flex h-full w-auto items-center justify-center gap-x-2 px-4 text-center text-lg font-normal text-white opacity-80 duration-500 group-hover:opacity-100 lg:w-full lg:text-3xl lg:opacity-50">
          <span className="transition hover:opacity-80 group-hover:translate-x-2">Action Text</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hidden h-8 w-8 transition group-hover:translate-x-2 lg:flex"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </div>
    </a>
  )
}
