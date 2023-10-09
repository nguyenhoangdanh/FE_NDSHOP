import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import CreateEvents from '../../components/Shop/CreateEvents'

const ShopCreateEvents = () => {
  return (
    <div>
    <DashboardHeader />
    <div className="flex items-center justify-between w-full">
      <div className="w-[330px]">
        <DashboardSideBar active={6} />
      </div>
      <div className='w-full justify-center flex'>
        <CreateEvents />
      </div>
    </div>
  </div>
  )
}

export default ShopCreateEvents
