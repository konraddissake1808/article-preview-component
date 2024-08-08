import React from 'react'
import Image from 'next/image'
import drawerImage from '../../../../../../public/drawers.jpg'

function ProductImage() {
  return (
    <div className='h-[190px] overflow-hidden rounded-t-md'>
        <Image src={drawerImage} className='bg-cover bg-center' alt=''/>
    </div>
  )
}

export default ProductImage