import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:flex-row bg-red-500 py-5 items-center'>
        <Image src={assets.logo_light} alt='' width={120} />
        <p className='text-1xl text-white'>All right reserved. Copyright @Chi Tech Industrial Limited</p>

        <div className='flex'>
            <Image src={assets.facebook_icon}  alt='' width={40}/>
            <Image src={assets.twitter_icon}  alt='' width={40}/>
            <Image src={assets.googleplus_icon}  alt='' width={40}/>
        </div>
    </div>
  )
}

export default Footer