import React from "react"
import Image from "next/image"
import {
  Bars3Icon,
  EyeDropperIcon,
  FlagIcon,
  HomeIcon,
  MegaphoneIcon,
  RectangleStackIcon,
  SwatchIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline"
import { GithubIcon, ButtonIcon, LoadingIcon, SidebarIcon, SwitchIcon } from "@/components/icons"

export const links = [
  {
    label: "Francisco Gonçalves",
    href: "https://github.com/kiko-g",
    content: <Image src="/profile.svg" alt="author" width={24} height={24} className="rounded-full" />,
    shown: false,
  },
  {
    label: "Github Repository",
    href: "https://github.com/kiko-g/bagr-ui",
    content: <GithubIcon className="h-5 w-5" />,
    shown: true,
  },
]

type BaseNav = {
  name: string
  href: string
  shown?: boolean
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
}

export const generalNav: BaseNav[] = [
  {
    name: "Home",
    href: "/",
    shown: true,
    icon: HomeIcon,
  },
  {
    name: "Config",
    href: "/config",
    shown: true,
    icon: WrenchIcon,
  },
]

type SectionNav = {
  name: string
  href: string
  count: number | null
  description: string
  icon?: any
  shown?: boolean
}

export const applicationUiNav: SectionNav[] = [
  {
    name: "Alerts",
    href: "/application-ui/alerts",
    count: 4,
    description: "Customizable alerts to send information to the user with different icons, colors, and actions.",
    icon: MegaphoneIcon,
    shown: true,
  },
  {
    name: "Badges",
    href: "/application-ui/badges",
    count: 1,
    description: "Small badges for signaling short pieces of information.",
    icon: FlagIcon,
    shown: true,
  },
  {
    name: "Buttons",
    href: "/application-ui/buttons",
    count: 9,
    description: "Button components with different styles, animations and purposes.",
    icon: ButtonIcon,
    shown: true,
  },
  {
    name: "Button Groups",
    href: "/application-ui/button-groups",
    count: 4,
    description: "Sections with multiple buttons with different layouts and functionalities.",
    icon: SwatchIcon,
    shown: true,
  },
  {
    name: "Loading",
    href: "/application-ui/loading",
    count: 2,
    description: "Components for informing the user that data is loading.",
    icon: LoadingIcon,
    shown: true,
  },
  {
    name: "Modals",
    href: "/application-ui/modals",
    count: 1,
    description: "Modal dialogs for displaying information or prompting the user for action.",
    icon: SwatchIcon,
    shown: true,
  },
  {
    name: "Navbars",
    href: "/application-ui/navbars",
    count: 1,
    description: "Customizable and expansible top menu components.",
    icon: Bars3Icon,
    shown: true,
  },
  {
    name: "Selects",
    href: "/application-ui/selects",
    count: 2,
    description: "Accessible and fancy dropdown components for selecting one or multiple options.",
    icon: EyeDropperIcon,
    shown: true,
  },
  {
    name: "Sidebars",
    href: "/application-ui/sidebars",
    count: 2,
    description: "Customizable and expansible side menu components.",
    icon: SidebarIcon,
    shown: true,
  },
  {
    name: "Switches",
    href: "/application-ui/switches",
    count: 2,
    description: "Toggle between two states with our customized switches with different styles and purposes.",
    icon: SwitchIcon,
    shown: true,
  },
]

export const marketingNav: SectionNav[] = [
  {
    name: "CTA",
    href: "/marketing/ctas",
    count: 2,
    description: "Diversely styled sections to appeal the user to click on them.",
    icon: RectangleStackIcon,
    shown: true,
  },
  {
    name: "Hero",
    href: "/marketing/hero",
    count: 1,
    description: "Opening sections to amaze and impress the user.",
    icon: SwatchIcon,
    shown: true,
  },
  {
    name: "KPI",
    href: "/marketing/kpi",
    count: 1,
    description: "Key Performance Indicators to show the user the most important metrics.",
    icon: SwatchIcon,
    shown: true,
  },
]
