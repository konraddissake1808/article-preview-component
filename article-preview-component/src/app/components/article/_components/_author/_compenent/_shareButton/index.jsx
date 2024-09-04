import React from 'react'
import ShareSvg from '../../../../../../../../public/icon-share.svg'

function ShareButton({onClick}) {
  return (
    <div>
        <button onClick={onClick} id='shareBtnLight' className='bg-light-grayish-blue hover:bg-grayish-blue active:bg-very-dark-grayish-blue focus:bg-desaturated-dark-blue 
              text-desaturated-dark-blue hover:text-light-grayish-blue active:text-white focus:text-light-grayish-blue w-8 h-8 rounded-full 
              flex items-center justify-center duration-200'>
            <ShareSvg className='mb-[2px]'></ShareSvg>
        </button>
    </div>
  )
}

export default ShareButton