import React from 'react'
import TwitterSVG from '../../../../../../../../public/icon-twitter.svg'

function Twitter() {
  return (
    <div className='w-5 h-5 hover:scale-110 duration-200'>
        <a href="#" className='w-full h-full text-white hover: hover:text-light-grayish-blue active:text-desaturated-dark-blue duration-100'>
            <TwitterSVG></TwitterSVG>
        </a>
    </div>
  )
}

export default Twitter