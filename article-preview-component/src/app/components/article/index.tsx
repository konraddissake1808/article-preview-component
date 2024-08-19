import React from 'react'
import ProductImage from './_components/_image'
import Description from './_components/_description'

function Article() {
  return (
    <div className='w-11/12 h-[500px] bg-white'>
        <ProductImage />
        <Description />
    </div>
  )
}

export default Article