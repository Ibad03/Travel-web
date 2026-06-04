import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import img1 from '../assets/GooglePlay.png'
import img2 from '../assets/Play Store.png'
const Footer = () => {
  return (
    <div className='w-full py-7 px-5 bg-amber-300 mx-auto'>


        {/* parent div start  */}
      <div className='flex flex-wrap  justify-center items-center gap-20 mt-15'>


<div className='flex flex-col gap-4'>
    <h1 className='font-bold text-4xl'>Jadoo.</h1>
    <p className='text-gray-500 w-[13rem]'>Book your trip in minute, get full Control for much longer.</p>
</div>




<div className='flex flex-col gap-4'>
    <h1 className='font-bold text-2xl'>Comapny</h1>
    <ul className='text-gray-500'>
        <li>About</li>
        <li>Careers</li>
        <li>Mobile</li>
    </ul>
</div>



<div className='flex flex-col gap-4'>
    <h1 className='font-bold text-2xl'>Contact</h1>
    <ul className='text-gray-500'>
        <li>Help/FAQ</li>
        <li>Press</li>
        <li>Affilates</li>
    </ul>
</div>




<div className='flex flex-col gap-4'>
       <h1 className='font-bold text-2xl'>More</h1>
    <ul className='text-gray-500'>
        <li>Airlinefees</li>
        <li>Airline</li>
        <li>Low fare tips</li>
    </ul>
</div>







<div className='flex flex-col gap-3 items-center'>

    {/* icons  */}
<div className='flex gap-10 items-center '>
    <FaFacebookF className='text-xl'/>
    <FaInstagramSquare className='text-xl' />
    <FaTwitter className='text-xl' />
</div>

{/* heading  */}
<div>
    <h1 className='text-gray-500 text-xl'>Discover our app</h1>
</div>
 
 {/* images  */}

 <div className='flex gap-4'>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
 </div>

</div>













      </div>

       {/* parent div end  */}

<div className='flex items-center justify-center mt-6'>
    <span className='font-bold'>All rights reserved@jadoo.co</span>
</div>

    </div>
  )
}

export default Footer
