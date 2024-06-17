import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayaout() {
  return (
    <div className="h-full w-full items-center flex justify-center gap-x-8 overflow-auto flex-wrap ">
      <Outlet/>
    </div>
  )
}
