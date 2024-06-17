import Icon from 'components/Icon'
import React from 'react'

export default function ProfilePosts() {
  return (
    <div className=' flex items-center justify-center flex-col gap-4 py-20 '>
		<dix className=' border-2 flex items-center justify-center border-black w-14 h-14 rounded-full'>
		<Icon name='post' size={30}/>
		</dix>
	  <p className='font-light text-2xl'>No Posts Yet</p>
    </div>
  )
}
