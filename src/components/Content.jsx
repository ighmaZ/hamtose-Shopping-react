import React from 'react'
import ImageOne from '../images/img1.jpeg'
import ImageTwo from '../images/img2.jpeg'
const Content = () => {
  return (
      <div>
    <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
   <div className='flex flex-col justify-center items-center'>
       <h2 className='text-2xl mb-2'>New Items</h2>
       <p className='mb-2'>Sunglasses, Bags , Watches and more</p>

   </div>
    </div>
    <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
   <div className='flex flex-col justify-center items-center'>
       <h2 className='text-2xl mb-2'>New Outfits</h2>
       <p className='mb-2'>Men and Women </p>

   </div>
    </div>
    </div>
  
  )
}

export default Content