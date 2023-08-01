import React from "react"

type Props = {
  location: string
}

export function NavbarSimple({ location }: Props) {
  return (
    <nav className="flex items-center justify-between gap-x-2">
      <ul></ul>
      <div></div>
    </nav>
  )
}
