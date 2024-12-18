import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <dev className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
  {productList.map(item=>(
    <div><ProductItem product={item} key={item.id}/></div>
  ))}
    </dev>
  )
}

export default ProductList