import React from 'react'
import image from '../../assets/images/Image1.webp'

const Partners = () => {
  return (
    <div data-aos="zoom-out" className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10'>
        <div className="container">
            <div className='grid grid-cols-5 gap-3 place-items-center opacity-50'>
                <img src={image} alt="brand" className='w-[80px] dark:invert'/>
                <img src={image} alt="brand" className='w-[80px] dark:invert'/>
                <img src={image} alt="brand" className='w-[80px] dark:invert'/>
                <img src={image} alt="brand" className='w-[80px] dark:invert'/>
                <img src={image} alt="brand" className='w-[80px] dark:invert'/>
            </div>
        </div>
    </div>
  )
}

export default Partners