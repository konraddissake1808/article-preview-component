import React from 'react'
import ProductImage from './_components/_image'
import Description from './_components/_description'
import AuthorAndShare from './_components/_author'

function Article() {
  return (
    <div className='w-11/12 h-[498px] bg-white rounded-md'>
        <ProductImage />
        <Description />
        <AuthorAndShare />
    </div>
  )
}

export default Article