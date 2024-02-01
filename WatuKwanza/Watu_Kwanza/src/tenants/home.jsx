import React from 'react'
import homesvg from "./pictures/homesvg.svg"
import choicehome from './pictures/choicehome.svg'

function HomeTenants() {
  return (
    <div > 
      <h2 className='text-center underline text-2xl text-indigo-700 font-bold'>Watu Kwanza</h2>
      <div className='flex mx-10 mt-12'>
  
      <div>
    <img src={homesvg} alt="" className='h-[70%] mx-12'/>
      </div>
       <div className='w-[60%]'>
          <h2 className='text-2xl' >"Welcome to Watu Kwanza Property Management System 🏠</h2>
          <p className='mt-4'>
          Step into the world of Watu Kwanza, where property management meets simplicity and efficiency. Managing properties has never been this smooth! With Watu Kwanza, your properties take center stage, prioritizing the 'Watu' or people involved – whether they're tenants, owners, or maintenance teams. Say goodbye to the hassle, and let Watu Kwanza lead the way in revolutionizing your property management journey. Get ready to experience the 'first' in property management solutions, where your needs come first – Watu Kwanza, where properties thrive and people flourish!"
          </p>
      </div> 
        </div>
        <div className='flex mt-8'>
        <div className='w-[40%] mx-16'>
          <h2> <span className='font-bold text-indigo-700'>Watu Kwanza</span>, our innovative Property Management System (PMS), is not just a tool; it's the key to simplifying and enhancing the residential property search experience. With Watu Kwanza, finding your dream home becomes a seamless journey. Our system empowers users with an intuitive interface, providing real-time access to a diverse range of residential listings.</h2>
        </div>
        <div> 
          <img src={choicehome} alt="" className='h-[70%] mx-44'/>
        </div>
        </div>
    </div>
  )
}

export default HomeTenants
