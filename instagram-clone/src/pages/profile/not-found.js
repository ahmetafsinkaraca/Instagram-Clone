import React from 'react'
import { Link } from 'react-router-dom'

export default function ProfilNotFound() {
  return (
    <div className='flex flex-col items-center justify-center pt-20 gap-y-8'>
      <h1 className='text-3xl font-bold'>Sorry, this page isn't available.</h1>
      <p className='text-md font-semibold'>The link you followed may be broken, or the page may have been removed. <Link to='/' className='font-bold text-blue-950'>Go back to Instagram.</Link></p>
    </div>
  )
}
