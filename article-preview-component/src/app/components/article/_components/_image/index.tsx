import React from 'react'
import Image from 'next/image'
import drawerImage from '../../../../../../public/drawers.jpg'

function ProductImage() {
  return (
    <div className='h-[190px] overflow-hidden lg:h-[267px]'>
        <Image src={drawerImage} className='bg-cover bg-center lg:bg-cover lg:rounded-l-md' alt=''/>
    </div>
  )
}

export default ProductImage