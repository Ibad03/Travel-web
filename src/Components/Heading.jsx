import React from 'react'

const Heading = (props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 my-10'>
      <span className='sm:text-lg text-md'>{props.sec}</span>
      <h1 className='font-extrabold text-3xl whitespace-nowrap sm:text-3xl md:text-4xl'>{props.heading}</h1>
    </div>
  )
}

export default Heading
