import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar'

export default function InboxLayout() {
  return (
      <div className='border border-gray-3oo bg-white h-[calc(100vh-97px)] flex'>
          <Sidebar />
          <Outlet />
      </div>
      )
}
