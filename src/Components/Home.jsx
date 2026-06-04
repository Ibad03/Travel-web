import React from 'react'
import Navbar from './Navbar'
import decor from '../assets/Decore.png'
import heroimg from '../assets/heroimg.png'
const Home = () => {
  return (
    <div className='bg-cover min-h-screen bg-fixed bg-center' style={
      {
        backgroundImage: `url(${decor})`
      }
    }>

{/* Navbar  */}

      <Navbar/>

{/* Hero  */}

<div className='max-w-[90%] mx-auto md:flex mt-15 sm:mt-20'>

{/* content  */}

<div className='flex-1 flex flex-col gap-y-5'>

<span className='text-red-500 font-bold text-[10px] sm:text-[15px]'>BEST DESTINATIONS AROUND THE WORLD</span>

<h1 className='text-4xl font-extrabold whitespace-nowrap sm:text-6xl -mt-4 lg:text-7xl '>Travel, enjoy <br /> and live a new <br /> and full life</h1>
<p className='font-light text-md max-w-[23rem] sm:text-lg'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

<div className='flex gap-5'>
  <button className=' px-3 py-1 rounded-md cursor-pointer border-amber-300 hover:border-2 bg-amber-300 hover:bg-white'>Find out more</button>


  <button className=' px-3 py-1 rounded-md cursor-pointer border-amber-300 border-2 hover:bg-amber-300'>Play Demo</button>
</div>

</div>


{/* image  */}

<div className='flex-1 flex items-center justify-center'>
  <img src={heroimg} className='w-[24rem]  md:w-[30rem] mt-10 md:mt-0 lg:-mt-14 ' alt="" />
</div>

</div>



    </div>
  )
}

export default Home
