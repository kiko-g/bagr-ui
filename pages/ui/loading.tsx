import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { SkeletonCard, Spinner } from "@/components/loading"

export default function Loading() {
  return (
    <ComponentTypePage
      title="Loading"
      components={[
        { name: "Spinner", path: "suspense/Spinner.tsx", component: <Spinner /> },
        { name: "Skeleton Card", path: "suspense/SkeletonCard.tsx", component: <SkeletonCard /> },
      ]}
    />
  )
}
