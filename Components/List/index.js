import React from 'react'
import Header from './Header'
import Separator from './Separator'
import Card from '../Card/index'

const List = () => {
  return (
    <>
        <Header />
        <Separator />
        <Card>
          <h4 className="text-black-50 text-xs mt-4 ml-4 mb-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
          </h4>
        </Card>
        <Card>Card Content</Card>
    </>
  )
}

export default List