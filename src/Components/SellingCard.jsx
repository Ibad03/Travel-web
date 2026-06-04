import React from 'react'
import { IoIosSend } from "react-icons/io";

const SellingCard = (props) => {
  return (
    <div className='max-w-[16rem]  flex flex-col ustify-center '>

        <img src={props.img} className='w-[15rem]' alt="" />

        {/* name $ price  */}
      <div className='flex justify-between w-[15rem] px-2 mt-2  '>
        <h3>{props.name}</h3>
        <span>{props.price}</span>
      </div>

      {/* time  */}
      <div className='flex items-center gap-2 mt-3 px-2 '>
<IoIosSend className='font-extrabold text-xl' />
<span>{props.time}</span>
      </div>
    </div>
  )
}

export default SellingCard
