import { SidebarItem } from "./SidebarItem"
import { applicationUiNav, generalNav, marketingNav, eCommerceNav } from "@/utils/data"

export function Sidebar({ location }: { location: string }) {
  return (
    <aside className="hidden min-w-full shrink-0 flex-col space-y-4 self-stretch overflow-y-scroll bg-opacity-80 p-5 lg:flex lg:min-w-min">
      <ul className="flex w-full flex-col border-b border-gray-300 pb-4 dark:border-white/10">
        {generalNav
          .filter((item) => item.shown !== false)
          .map((item, itemIdx) => {
            const isActive = location.toLowerCase() === item.name.toLowerCase()
            return (
              <li key={`nav-${itemIdx}`}>
                <SidebarItem
                  name={item.name}
                  href={item.href}
                  isActive={isActive}
                  icon={<item.icon className="h-5 w-5" />}
                />
              </li>
            )
          })}
      </ul>

      <div>
        <p className="mb-2 text-sm font-bold">Application UI ({applicationUiNav.length})</p>
        <ul className="flex w-full flex-col pb-4 pl-0">
          {applicationUiNav
            .filter((item) => item.shown !== false)
            .map((item, itemIdx) => {
              const isActive = location.toLowerCase() === item.name.toLowerCase()
              return (
                <li key={`nav-${itemIdx}`}>
                  <SidebarItem
                    name={item.name}
                    href={item.href}
                    isActive={isActive}
                    icon={<item.icon className="h-5 w-5" />}
                  />
                </li>
              )
            })}
        </ul>
      </div>

      <div>
        <p className="mb-2 text-sm font-bold">Marketing ({marketingNav.length})</p>
        <ul className="flex w-full flex-col pb-4 pl-0">
          {marketingNav
            .filter((item) => item.shown !== false)
            .map((item, itemIdx) => {
              const isActive = location.toLowerCase() === item.name.toLowerCase()
              return (
                <li key={`nav-${itemIdx}`}>
                  <SidebarItem
                    name={item.name}
                    href={item.href}
                    isActive={isActive}
                    icon={<item.icon className="h-5 w-5" />}
                  />
                </li>
              )
            })}
        </ul>
      </div>

      <div>
        <p className="mb-2 text-sm font-bold">Ecommerce ({eCommerceNav.length})</p>
        <ul className="flex w-full flex-col pb-4 pl-0">
          {eCommerceNav
            .filter((item) => item.shown !== false)
            .map((item, itemIdx) => {
              const isActive = location.toLowerCase() === item.name.toLowerCase()
              return (
                <li key={`nav-${itemIdx}`}>
                  <SidebarItem
                    name={item.name}
                    href={item.href}
                    isActive={isActive}
                    icon={<item.icon className="h-5 w-5" />}
                  />
                </li>
              )
            })}
        </ul>
      </div>
    </aside>
  )
}
