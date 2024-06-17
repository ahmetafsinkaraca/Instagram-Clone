import React, { useEffect, useState } from 'react'
import {useField} from "formik";
import classNames from 'classnames';


export default function Input({label, type = 'text', ...props}) {

  const [field, meta, helpers] = useField(props);
    const [show, setShow] = useState(false)
    const[typeInput, setType] = useState(type)

    useEffect(() => {
      if (show) {
        setType('text')
      } else if (type === 'password') {
        setType('password')
      }
    }, [show])

  return (
    <label className='relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400'>
        <input autoComplete="current-password"  type={typeInput} className={classNames({
        'outline-none text-sm w-full h-[38px] bg-transparent px-2 pointer-events-none': true,
        'pt-[10px]' : field.value
        })}{...field} {...props}/> 
        <small className={classNames({
          'absolute transition-all  text-gray-500 -translate-y-1/2 left-[9px] cursor-text' : true,
          'text-[10px] top-2.5' : field.value,
          'text-sm top-1/2 pointer-events-none' : !field.value
        })}>{label}</small>
        {type === 'password' && props?.value && (
          <div onClick={() => setShow(show => !show)} className='flex items-center font-semibold cursor-pointer select-none text-sm pr-2'>
            {show ? 'Hide' : 'Show' }
          </div>
        )}
    </label>

  )
}
