import React from 'react'
import PinterestSVG from '../../../../../../../../public/icon-pinterest.svg'

function Pinterest() {
  return (
    <div className='w-5 h-5 hover:scale-110 duration-200'>
        <a href="#" className='w-full h-full text-white hover: hover:text-light-grayish-blue active:text-desaturated-dark-blue duration-100'>
            <PinterestSVG></PinterestSVG>
        </a>
    </div>
  )
}

export default Pinterest