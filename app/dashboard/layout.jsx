import React from 'react'
import SideBar from './_components/SideBar'
import Header from './_components/Header'
const DashboardLayout = ({children}) => {
  return (
    <div>
      <div className='hidden md:flex md:w-60'>
        <SideBar/>
      </div>
      <div className='md:ml-60'>
        <Header/>
        <div>
        {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
