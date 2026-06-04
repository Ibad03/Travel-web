import React from 'react'
import Heading from './Heading'
import SellingCard from './SellingCard'
import italy from '../assets/Rome.png'
import london from '../assets/Europe.png'
import europe from '../assets/London.png'
const Selling = () => {
  return (
    <div className='max-w-[90%] mx-auto'>

        <Heading sec="Top Selling" heading="Top Destinations"/>
      
{/* cards  */}

<div className='flex flex-wrap gap-19 items-center justify-center'>

<SellingCard img={italy} name="Rome,Italy" price="5.42k" time="10 Days Trip"/>
<SellingCard img={london} name="London, UK" price="$4.2k" time="12 Days Trip"/>
<SellingCard img={europe} name="Full Europe" price="$15k" time="28 Days Trip"/>

</div>


    </div>
  )
}

export default Selling
