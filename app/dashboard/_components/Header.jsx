import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='flex p-5 shadow-md justify-end'>
      {/* <Image src={'/logo.jpg'} alt="logo" width={40} height={40} className='ml-4'/> */}
      <UserButton/>
    </div>
  )
}

export default Header
