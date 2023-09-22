import React from "react"
import { ComponentTypePage } from "@/components/ComponentTypePage"
import { ProductListSimple } from "@/components/ecommerce/product-lists"

export default function ProductLists() {
  const base = "ecommerce/product-lists"

  return (
    <ComponentTypePage
      title="Product Lists"
      components={[{ name: "Simple", path: `${base}/ProductListSimple.tsx`, component: <ProductListSimple /> }]}
    />
  )
}
