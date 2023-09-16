import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SkeletonCard, Spinner } from "@/components/loading"

export default function Loading() {
  return (
    <ComponentTypePage
      title="Loading"
      components={[
        { name: "Spinner", path: "loading/Spinner.tsx", component: <Spinner /> },
        { name: "Skeleton Card", path: "loading/SkeletonCard.tsx", component: <SkeletonCard /> },
      ]}
    />
  )
}
