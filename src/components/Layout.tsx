import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Layout(props) {
  return (
    <div className='h-screen bg-background overflow-hidden'>
      <Header />
      <div className='flex'>
        <div className='w-64 h-full'>
          <Sidebar />
        </div>

        <div className='flex-1 h-full flex'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Layout