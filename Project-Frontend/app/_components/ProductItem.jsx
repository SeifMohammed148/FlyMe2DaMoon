import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AlignJustify } from 'lucide-react'

function ProductItem({ product }) {
  return (
    <Link href={`/product-details/${product?.id}`} className='rounded-lg hover:border p-1 hover:shadow-md hover:border-teal-950 hover:cursor-pointer'>
      <Image 
        src={product?.attributes?.productimage?.data?.attributes?.url} 
        alt='productImage' 
        width={400} 
        height={350}
        className='rounded-t-lg h-[170px] object-cover'
      />
      <div className='flex justify-between p-3 items-center placeholder-gray-50 rounded-b-lg'>
        <div>
          <h2 className='text-[14px] font-bold line-clamp-1'>{product?.attributes?.producttitle}</h2>
          <h2 className='text-[12px] text-gray-400 flex gap-1'>
            <AlignJustify className='w-4 h-4 text-grey-400' /> {product?.attributes?.category}
          </h2>
        </div>
        <h2>${product?.attributes?.productprice}</h2>
      </div>
    </Link>
  )
}

export default ProductItem
