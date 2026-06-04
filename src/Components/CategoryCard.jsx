import React from 'react'

const CategoryCard = (props) => {
  return (
    <div className='flex flex-col items-center w-[16rem] gap-5 shadow-2xl shadow-amber-200 py-7'>

        <img src={props.img} className='w-27 h-27'    alt="" />

        <h2 className='font-bold text-lg'>{props.name}</h2>

        <span className='text-center font-light w-[12rem]'>{props.par}</span>
      
    </div>
  )
}

export default CategoryCard
