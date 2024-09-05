"use client";
import React from 'react'
import ProductImage from './_components/_image'
import Description from './_components/_description'
import AuthorAndShare from './_components/_author'



function Article() {
  return (
    <div id='pageContainer' className='flex h-screen flex-col items-center justify-center'>
      <div className='w-[294px] h-[498px] bg-white overflow-hidden lg:overflow-visible rounded-md lg:flex lg:w-[750px] lg:h-[239px]'>
        <div>
          <ProductImage />
        </div>
        <div className='flex justify-center flex-col items-center overflow-hidden lg:overflow-visible'>
          <Description />
          <AuthorAndShare />
        </div>
      </div>
    </div>
  )
}

export default Article