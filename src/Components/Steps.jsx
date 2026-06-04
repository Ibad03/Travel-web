import React from 'react'

const Steps = (props) => {
  return (
    <div className='flex gap-3 max-w-[23rem] items-center'>
      <div>
        <img src={props.img} className='min-w-10' alt="" />
      </div>

      <div>
        <h3 className='text-gray-700 text-xl font-extrabold'> {props.heading} </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
      </div>
    </div>
  )
}

export default Steps
