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

export const generalNav = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
    shown: true,
  },
  {
    name: "Config",
    href: "/config",
    icon: WrenchIcon,
    shown: true,
  },
]

export const applicationUiNav = [
  {
    name: "Alerts",
    href: "/application-ui/alerts",
    icon: MegaphoneIcon,
    shown: true,
  },
  {
    name: "Badges",
    href: "/application-ui/badges",
    icon: FlagIcon,
    shown: true,
  },
  {
    name: "Buttons",
    href: "/application-ui/buttons",
    icon: ButtonIcon,
    shown: true,
  },
  {
    name: "Button Groups",
    href: "/application-ui/button-groups",
    icon: SwatchIcon,
    shown: true,
  },
  {
    name: "Loading",
    href: "/application-ui/loading",
    icon: LoadingIcon,
    shown: true,
  },
  {
    name: "Modals",
    href: "/application-ui/modals",
    icon: SwatchIcon,
    shown: true,
  },
  {
    name: "Navbars",
    href: "/application-ui/navbars",
    icon: Bars3Icon,
    shown: true,
  },
  {
    name: "Selects",
    href: "/application-ui/selects",
    icon: EyeDropperIcon,
    shown: true,
  },
  {
    name: "Sidebars",
    href: "/application-ui/sidebars",
    icon: SidebarIcon,
    shown: true,
  },
  {
    name: "Switches",
    href: "/application-ui/switches",
    icon: SwitchIcon,
    shown: true,
  },
]

export const marketingNav = [
  {
    name: "CTA Sections",
    href: "/marketing/ctas",
    icon: RectangleStackIcon,
    shown: true,
  },
  {
    name: "Hero Sections",
    href: "/marketing/hero",
    icon: SwatchIcon,
    shown: true,
  },
  {
    name: "KPI",
    href: "/marketing/kpi",
    icon: SwatchIcon,
    shown: true,
  },
]
