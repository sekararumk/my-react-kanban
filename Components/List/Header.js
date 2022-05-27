import React from 'react'
import CoverImage from './CoverImage'
import Meta from './Meta'

const Header = () => {
  return (
    <>
        <div className='grid grid-cols-4 gap-6'>
          <div className='bg-white rounded-lg shadow-md'>
            <CoverImage />
            <Meta />
          </div>
          <div className='bg-white rounded-lg shadow-md'>
            <CoverImage />
            <Meta />
          </div>
          <div className='bg-white rounded-lg shadow-md'>
            <CoverImage />
            <Meta />
          </div>
          <div className='bg-white rounded-lg shadow-md'>
            <CoverImage />
            <Meta />
          </div>
        </div>
        
        
    </>
  )
}

export default Header