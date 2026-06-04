import React from 'react'
import Heading from './Heading'
import plus from '../assets/plus.png'
import CategoryCard from './CategoryCard'
import cardImg1 from '../assets/weather.png'
import cardImg2 from '../assets/plane.png'
import cardImg3 from '../assets/mic.png'
import cardImg4 from '../assets/setting.png'

const Category = () => {
  return (
    <div className='max-w-[90%] mx-auto relative'>

<Heading sec="CATEGORY" heading="We Offer Best Services"/>

<img src={plus} className='absolute right-0 top-18 md:top-3 ' alt="" />

{/* cards  */}
        <div className='flex flex-wrap items-center justify-center gap-8'>

<CategoryCard img={cardImg1} name="Calculated Weather" par="Built Wicket longer admire do barton vanity itself do in it."/>

<CategoryCard img={cardImg2} name="Best Flights" par="Engrossed listening. Park gate sell they west hard for the."/>

<CategoryCard img={cardImg3} name="Local Events" par="Barton vanity itself do in it. Preferd to men it engrossed listening."/>

<CategoryCard img={cardImg4} name="Customization" par="We deliver outsourced aviation services for military customers"/>

        </div>
      


    </div>
  )
}

export default Category
