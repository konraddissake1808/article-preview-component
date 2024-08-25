"use client";
import React from 'react'
import Image from 'next/image'
import avatarMichelle from '../../../../../../public/avatar-michelle.jpg'
import ShareButton from './_compenent/_shareButton';

window.addEventListener('click', () => {
  const button = document.getElementById('shareButton');
  button
});

function activeState() {
  console.log('69')
}

function AuthorAndShare() {
  return (
    <div className='h-[79px] w-full flex justify-center items-center flex-col'>
      <div className='w-10/12 flex justify-between'>
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
        <div className='w-9 flex items-center justify-center'>
          <div id='shareButton' className='rounded-full flex items-center justify-center'>
            <ShareButton onClick={activeState} />
          </div>
        </div>
      </div>
      <div className='activeState hidden'>
        <div className='h-[79px] w-full flex justify-center items-center'>
          <div className='w-10/12 flex justify-between'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorAndShare