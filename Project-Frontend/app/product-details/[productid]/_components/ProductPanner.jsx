import React from 'react'
import Image from 'next/image'
function ProductPanner({product}) {
  return (
    <div>
      <Image src={product?.attributes?.productimage?.data?.attributes?.url} alt='productImage' 
        width={500} height={500}
        className=' h-[170px]rounded-lg object-covered '
    />
    </div>
  )
}

export default ProductPanner