import React from 'react'
import HomeOwner from '../home'

function Wifi() {
  return (
    <div className='flex'>
      <div><HomeOwner/></div>
    <div className='mx-12 mt-10'>
      <h2 className='mx-7 mt-10'> <span className='text-indigo-700 font-bold text-xl'>Watu Kwanza Property Management System (PMS)</span> Watu Kwanza Property Management System (PMS) has strategically collaborated with Safaricom to deliver a cutting-edge and seamless Wi-Fi experience for both guests and staff. This innovative partnership combines Watu Kwanza's expertise in property management solutions with Safaricom's robust telecommunications infrastructure. The result is a fast and secure Wi-Fi service that enhances the overall guest experience and supports the operational efficiency of the property. </h2>
    <p className='mx-24 font-bold text-xl'>Below are the packages available:</p>
    <div className='flex space-x-6 mt-7 mx-24'>
    <div className=' bg-white shadow-lg rounded-lg h-56 w-52'>
      <h2 className='bg-indigo-700 text-white text-center w-full h-10'>Bronze</h2>
    <h2 className='text-center my-4'>10Mbps</h2>
    <h2 className='text-center my-4'>Ksh 2999</h2>
    <h2 className='text-center my-4' >Valid for 30 days</h2>
    </div>

      <div className=' bg-white shadow-lg rounded-lg h-56 w-52'>
        <h2  className='bg-indigo-700 text-white text-center w-full h-10' >Silver</h2>
    <h2 className='text-center my-4' >20Mbps</h2>
    <h2 className='text-center my-4' >Ksh 4100</h2>
    <h2 className='text-center my-4'>Valid for 30 days</h2>
    </div>

      <div className=' bg-white shadow-lg rounded-lg h-56 w-52'>
        <h2 className='bg-indigo-700 text-white text-center w-full h-10'>Gold</h2>
    <h2 className='text-center my-4'>40Mbps</h2>
    <h2 className='text-center my-4'>Ksh 6229</h2>
    <h2 className='text-center my-4'>Valid for 30 days</h2>
    </div>
    
    </div >
    <h2 className='my-20 mx-5 font-bold'>For More information please contact <span className='underline text-indigo-700 font-bold'>072200000</span> or <span className='underline text-indigo-700 font-bold'> 0734522490</span></h2>
    </div>
    </div>
  )
}

export default Wifi
