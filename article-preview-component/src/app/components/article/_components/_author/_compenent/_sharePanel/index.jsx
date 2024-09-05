import React from 'react'
import Facebook from '../_facebookLink'
import Twitter from '../_twitterLink'
import Pinterest from '../_pinterestLink'
import ShareButtonDark from '../_shareButtonDark'

export function activeState() {
  if (window.screen.width > 767) {
    document.getElementById('sharePanel')?.classList.toggle('-translate-y-[132px]');
    document.getElementById('sharePanel')?.classList.toggle('lg:opacity-0');
  }
  else {
    document.getElementById('sharePanel')?.classList.toggle('-translate-y-[79px]');
  }
}


function SharePanel() {
  return (
    <div id='sharePanel' className='bg-very-dark-grayish-blue top-[79px] w-full z-10 duration-200 rounded-b-md mt-[10px] absolute 
        lg:w-[258px] lg:rounded-md lg:h-12 lg:-right-0 xl:-right-[60px] lg:opacity-0'>
        <div className='h-[69px] w-full flex justify-center items-center lg:h-12'>
            <div className='w-10/12 flex justify-between'>
              <div className='flex justify-center items-center'>
                <div>
                  <p className='text-grayish-blue text-sm tracking-widest font-sans font-medium'>SHARE</p>
                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div className='mx-2'>
                  <Facebook />
                </div>
                <div className='mx-2'>
                  <Twitter />
                </div>
                <div className='mx-2'>
                  <Pinterest />
                </div>
              </div>
              <div className='w-9 flex items-center justify-center lg:hidden'>
                <div id='shareButton' className='rounded-full flex items-center justify-center'>
                  <ShareButtonDark onClick={activeState} />
                </div>
              </div>
            </div>
        </div>
        <div className='w-full relative'>
            <div id='triangle' className='absolute right-11 xl:inset-x-1/2'></div>
        </div>
    </div>
  )
}

export default SharePanel