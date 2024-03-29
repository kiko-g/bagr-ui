import Link from "next/link"
import clsx from "clsx"

export function SidebarItem({
  name,
  href,
  isActive,
  icon,
}: {
  name: string
  href: string
  isActive: boolean
  icon: React.ReactNode
}) {
  return (
    <Link
      title={name}
      href={href}
      className={clsx(
        isActive
          ? "border-l-2 border-primary bg-primary/10 text-black hover:opacity-80 dark:border-secondary dark:bg-secondary/10 dark:text-white"
          : "border-l border-gray-300 hover:bg-slate-500/10 dark:border-white/10 dark:hover:bg-slate-600/30",
        "flex cursor-pointer items-center justify-start gap-2 py-1 pl-3 pr-3 text-sm transition ease-in-out lg:pr-10",
      )}
    >
      <span className="hidden lg:block">{name}</span>
    </Link>
  )
}
