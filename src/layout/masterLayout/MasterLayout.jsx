import React from 'react'
import { Outlet } from 'react-router-dom'

const MasterLayout = () => {
  return (
    <div className='container-fluid mt-5'>
        <Outlet/>
    </div>
  )
}

export default MasterLayout