import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMenuAlt2 } from "react-icons/hi";
const Navbar = () => {

    const [open,setOpen]= useState(false);

    const toggle = () =>{
        setOpen(!open)
    }
      return (
<div>

    <nav className='max-w-[90%] mx-auto p-5 flex justify-between items-center'>
{/* Logo  */}


{
    open ? "" : 
    <div>
    <img src={logo} className='w-[120px]' alt="" />
</div>
}



{/* Navlinks  */}

<ul className='flex gap-5 font-medium text-lg items-center justify-center hidden md:flex'>
    <li>Destinations</li>
    <li>Hotels</li>
    <li>Flights</li>
    <li>Booking</li>
<div className='flex gap-3 '>
    <button className='border-1 px-3 py-1 rounded-md bg-amber-300'>Sign In</button>
    <button className='border-1 px-3 py-1 rounded-md'>Sign Up</button>

</div>

<select name="En" className='hidden lg:flex' >
    <option value="En">EN</option>
</select>

</ul>


     {
        open ? "" : <HiMenuAlt3 onClick={toggle} className='cursor-pointer md:hidden text-3xl  ' /> 
     }
   





    </nav>


{/* Mobile Responsive  */}


<ul  className={`${
    open ? "left-0" : "-left-full"
  } absolute top-0 transition-all duration-900 flex  flex-col gap-10 font-medium text-lg py-10 mt-10 bg-yellow-300 rounded-2xl
   px-10 pt-8 md:hidden`} >
    <div className='flex items-center justify-between'>
    <img src={logo} className='w-[120px]' alt="" />
     <HiMenuAlt2 onClick={toggle} className='cursor-pointer md:hidden text-3xl '  />
</div>
    <li>Destinations</li>
    <li>Hotels</li>
    <li>Flights</li>
    <li>Booking</li>
<div className='flex gap-3 '>
    <button className='border-1 px-3 py-1 rounded-md bg-amber-300'>Sign In</button>
    <button className='border-1 px-3 py-1 rounded-md'>Sign Up</button>

</div>



</ul>


    </div>

    

  
    
  )
}

export default Navbar
