"use client";
import React from 'react'
import Image from 'next/image'
import avatarMichelle from '../../../../../../public/avatar-michelle.jpg'
import ShareButton from './_compenent/_shareButton';
import ShareButtonDark from './_compenent/_shareButtonDark'
import Facebook from './_compenent/_facebookLink'
import Twitter from './_compenent/_twitterLink'
import Pinterest from './_compenent/_pinterestLink'

function activeState() {
  console.log('69')
  document.getElementById('sharePanel')?.focus();
  document.getElementById('sharePanel')?.classList.toggle('-translate-y-[79px]');
}

//if (document.getElementsByTagName('ShareButton'))

function AuthorAndShare() {
  return (
    <div className='h-[79px] w-full flex justify-start items-center flex-col overflow-hidden'>
      <div className='w-full flex justify-center items-center flex-col'>
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
        <div className='bg-very-dark-grayish-blue w-full z-10 duration-200 rounded-b-md mt-[10px]' id='sharePanel'>
          <div className='h-[69px] w-full flex justify-center items-center'>
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
              <div className='w-9 flex items-center justify-center'>
                <div id='shareButton' className='rounded-full flex items-center justify-center'>
                  <ShareButtonDark onClick={activeState} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorAndShare