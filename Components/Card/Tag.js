import React from 'react'

const Tag = () => {
  return (
    <div className='flex flex-wrap gap-2 ml-4' >
      <p className="font-bold text-xs bg-[#FFF2C2] text-[#EBB800] rounded-sm h-5 px-2">Website</p>
      <p className="font-bold text-xs bg-[#D9FAD9] text-[#80C480] rounded-sm h-5 px-2">UX</p>
      <p className="font-bold text-xs bg-[#FFEDED] text-[#F56C6C] rounded-sm h-5 px-2">UI</p>
      <p className="font-bold text-xs bg-[#EAE6FF] text-[#7B61FF] rounded-sm h-5 px-2">Wireframe</p>
    </div>
  )
}

export default Tag