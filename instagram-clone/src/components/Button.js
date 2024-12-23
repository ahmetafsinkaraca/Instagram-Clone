import React from 'react'

export default function Button({children, type, ...props}) {
  return (
      <button
          type={type}
          {...props}
          className="h-[30px] mt-1 w-full flex items-center justify-center gap-x-2 rounded bg-brand font-medium text-white text-sm disabled:opacity-50">
          {children}
      </button>
  )
}
