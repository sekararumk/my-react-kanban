import React from 'react'
import CoverImage from './CoverImage'
import Meta from './Meta'

const Header = () => {
  return (
    <>
        <div className='grid grid-cols-4 gap-6'>
          <div className='bg-white rounded-lg'>
            <CoverImage />
            <h4 className="font-bold mt-4 ml-4">Not Started</h4>
            <p className="mt-1 ml-4 mb-4">Way to Town of Colors</p>
          </div>
          <div className='bg-white rounded-lg'>
            <CoverImage />
            <h4 className="font-bold mt-4 ml-4">Not Started</h4>
            <p className="mt-1 ml-4 mb-4">Way to Town of Colors</p>
          </div>
          <div className='bg-white rounded-lg'>
            <CoverImage />
            <h4 className="font-bold mt-4 ml-4">Not Started</h4>
            <p className="mt-1 ml-4 mb-4">Way to Town of Colors</p>
          </div>
          <div className='bg-white rounded-lg'>
            <CoverImage />
            <h4 className="font-bold mt-4 ml-4">Not Started</h4>
            <p className="mt-1 ml-4 mb-4">Way to Town of Colors</p>
          </div>
        </div>
        <Meta />
    </>
  )
}

export default Header