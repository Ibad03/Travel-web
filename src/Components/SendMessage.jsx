import React from 'react'
import send from '../assets/send.png'
import { MdEmail } from "react-icons/md";
const SendMessage = () => {
  return (
    <div className='max-w-[90%] mx-auto '>
      


<div className='relative mt-16 py-6'>

<img src={send} className='absolute right-2 -top-15' alt="" />
{/* content  */}

<div className='flex flex-col gap-5 '>
<div className='mt-6'>
<h1 className='font-bold text-xl  sm:text-2xl md:text-3xl text-center'>Subscribe to get information, latest news and other interesting offers about Jadoo</h1>

</div>



<div className='flex items-center justify-center gap-2'>
<MdEmail className='text-xl mt-1' />
<input type="text" placeholder='Your Email' className='p-2 w-40 sm:w-60' />
<button className='font-medium px-3 py-1 rounded-bl-2xl bg-amber-400'>Subscribe</button>
</div>


</div>















</div>

    </div>
  )
}

export default SendMessage
