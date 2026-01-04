import React from "react"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext
  return (
    <Layout>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
    </Layout>
  )
}

export default ProductTemplate