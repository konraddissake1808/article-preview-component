import React from 'react'
import Image from 'next/image'
import avatarMichelle from '../../../../../../public/avatar-michelle.jpg'

function AuthorAndShare() {
  return (
    <div className='h-[79px] w-full flex justify-center items-center'>
        <div className='w-10/12 flex'>
            <div className='w-9'>
              <div className='w-full'>
                <Image className='w-full rounded-full' src={avatarMichelle} alt="" />
              </div>
            </div>
            <div className='w-3/5 ml-4'>
                <div>
                  <p className='font-sans text-[13px] font-bold text-very-dark-grayish-blue'>Michelle Appleton</p>
                </div>
                <div>
                  <p className='font-sans text-[13px] font-normal text-grayish-blue'>28 Jun 2020</p>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default AuthorAndShare