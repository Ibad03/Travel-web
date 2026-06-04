import React from 'react'
import img1 from '../assets/company1.png'
import img2 from '../assets/company2.png'
import img3 from '../assets/company3.png'
import img4 from '../assets/company4.png'
import img5 from '../assets/company5.png'

const Company = () => {
  return (
    <div className='max-w-[90%] mx-auto -mt-10 md:mt-14 lg:-mt-16'>
      
<div className='flex flex-wrap justify-center gap-10  items-center'>
<img src={img1} alt="" />
<img src={img2} alt="" />
<img src={img3} alt="" />
<img src={img4} alt="" />
<img src={img5} alt="" />

</div>

    </div>
  )
}

export default Company
