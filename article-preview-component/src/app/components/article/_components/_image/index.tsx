import React from 'react'
import Image from 'next/image'
import drawerImage from '../../../../../../public/drawers.jpg'

function ProductImage() {
  return (
    <div>
        <Image src={drawerImage} alt=''/>
    </div>
  )
}

export default ProductImage