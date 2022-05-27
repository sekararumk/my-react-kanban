import React from 'react'
import Avatar from './Avatar'
import Header from './Header'
import TagList from './TagList'

const Card = ({ children }) => {
  return (
      <>
      <div className='grid grid-cols-4 gap-6 mt-7'>
          <div className='bg-white rounded-lg shadow-md'>
            <div class="flex flex-row flex-wrap justify-between items-center">
            <Header />
            {children}
            </div>
            <TagList />
            <Avatar />
          </div>
      </div>
      </>
  )
}

export default Card