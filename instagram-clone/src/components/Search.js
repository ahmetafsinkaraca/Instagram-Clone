import React, { useState } from 'react'
import Icon from 'components/Icon'
import classNames from 'classnames'
import {AiFillCloseCircle} from "react-icons/ai"

export default function Search() {

  const [open, setOpen] = useState(false)

  return (
    <div className='w-[300px] relative '>
      <span className={classNames({
        'w-5 h-5 absolute top-0 left-0 items-center text-[#8e8e8e] pointer-events-none translate-y-1/3' : true,
        'hidden' : open
      })}>
        <Icon name='search'/>
      </span>
      <input onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} placeholder='Search' type='text' className='w-full h-9 rounded bg-[#efefef] outline-none pl-9 focus:pl-3'/>
       <button onClick={() => setOpen(false)} className={classNames({
        'w-6 h-6 hidden absolute top-0 right-0 items-center text-[#8e8e8e] translate-y-1/4' : true,
				"!flex": open
      })}>
          <AiFillCloseCircle />
       </button>
    </div>
  )
}
