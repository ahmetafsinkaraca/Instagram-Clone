import React from 'react'
import Icon from 'components/Icon'

export default function ProfileTagged() {
  return (
    <div className=' flex items-center justify-center flex-col gap-4 py-20 '>
		<dix className=' border-2 flex items-center justify-center border-black w-14 h-14 rounded-full'>
		<Icon name='tag' size={30}/>
		</dix>
	  <p className='font-light text-2xl'>No Photos</p>
    </div>
  )
}
