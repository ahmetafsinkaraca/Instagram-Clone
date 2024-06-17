import React from 'react'

export default function Separator() {
  return (
    <div className="flex items-center my-2">
    <div className="flex-1 bg-gray-300 h-px" />
    <span className="font-bold text-[15px] text-gray-500 px-4">Or</span>
    <div className="flex-1 bg-gray-300 h-px" />
</div>
  )
}
