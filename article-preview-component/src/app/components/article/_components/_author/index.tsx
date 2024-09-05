"use client";
import React from 'react'
import Image from 'next/image'
import avatarMichelle from '../../../../../../public/avatar-michelle.jpg'
import ShareButton from './_compenent/_shareButton';
import SharePanel from './_compenent/_sharePanel'
import { activeState } from './_compenent/_sharePanel';


function AuthorAndShare() {
  return (
    <div className='h-[79px] w-full flex justify-start items-center flex-col'>
      <div className='w-full relative flex justify-center items-center flex-col lg:relative'>
        <div  id='authorShareContainer' className='w-10/12 flex justify-between h-[79px] overflow-hidden'>
          <div className='w-9 items-center justify-center flex'>
            <div className='w-full'>
              <Image className='w-full rounded-full' src={avatarMichelle} alt="" />
            </div>
          </div>
          <div className='w-3/5 ml-4 items-center justify-center flex flex-col'>
              <div className='text-left w-full'>
                <p className='font-sans text-[13px] font-bold text-very-dark-grayish-blue'>Michelle Appleton</p>
              </div>
              <div className='text-left w-full'>
                <p className='font-sans text-[13px] font-normal text-grayish-blue'>28 Jun 2020</p>
              </div>
          </div>
          <div className='w-9 flex items-center justify-center'>
            <div id='shareButton' className='rounded-full flex items-center justify-center'>
              <ShareButton onClick={activeState} />
            </div>
          </div>
        </div>
        <SharePanel />
      </div>
    </div>
  )
}

export default AuthorAndShare