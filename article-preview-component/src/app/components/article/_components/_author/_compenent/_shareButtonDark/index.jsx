import React from 'react'
import ShareSvg from '../../../../../../../../public/icon-share.svg'

function ShareButtonDark({onClick}) {
  return (
    <div>
        <div>
            <button onClick={onClick} className='bg-desaturated-dark-blue hover:bg-light-grayish-blue active:bg-white focus:bg-light-grayish-blue
                text-light-grayish-blue hover:text-grayish-blue active:text-very-dark-grayish-blue focus:text-desaturated-dark-blue w-8 h-8 rounded-full 
                flex items-center justify-center duration-200'>
                <ShareSvg className='mb-[2px]'></ShareSvg>
            </button>
        </div>
    </div>
  )
}

export default ShareButtonDark