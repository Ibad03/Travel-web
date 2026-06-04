import React from 'react'
import Steps from './Steps'
import img1 from '../assets/destination.png'
import img2 from '../assets/payment.png'
import img3 from '../assets/airport.png'
import img4 from '../assets/trip.png'
const Trip = () => {
  return (
    <div className='max-w-[90%] mx-auto'>
      <div className='flex flex-col md:flex-row '>


{/* left  */}

<div className='flex flex-col' >

{/* heading  */}

<div className='flex flex-col mt-13 gap-4 my-10 '>
      <span className='sm:text-lg text-md'>Easy and Fast</span>
      <h1 className='font-extrabold text-3xl sm:text-5xl lg:text-6xl  md:max-w-[28rem]'>
        Book your next trip
in 3 easy steps</h1> 
</div>
{/* steps  */}
<div className='flex flex-col gap-10 '>

<Steps img={img1} heading="Choose Destination"/>

<Steps img={img2} heading="Make Payment"/>
<Steps img={img3} heading="Reach Airport on Selected Date"/> 


</div>


    </div>


{/* right   */}

<div className='flex items-center -mt-13 w-full  justify-center sm:-mt-20 md:mt-35 lg:mt-0 md:flex-1'>
    <img src={img4} className='min-w-[20rem]  ' alt="" />
</div>

    






      </div>

</div>
 
  )
}

export default Trip
