import React from 'react'
import HomeOwner from '../home'
function Janitor() {
  return (
    <div className='flex'>
       <div><HomeOwner/></div>
      <div>
      <div className='mt-20 mx-12'>
        <h2>In recognizing the importance of maintaining a pristine and welcoming environment, 
          Watu Kwanza Property Management System (PMS) places a strong emphasis on janitorial services.
           The janitorial team is an integral part of the property management strategy, ensuring that communal spaces, 
           guest rooms, and facilities are kept clean and well-maintained. With a focus on attention to detail and efficiency,
           Watu Kwanza PMS coordinates regular cleaning schedules to uphold high standards of hygiene.</h2>
      </div>
      <div className='mx-8'
      ><h2 className='my-20 mx-5 font-bold'>For More information please contact <span className='underline text-indigo-700 font-bold'>072200000</span> or <span className='underline text-indigo-700 font-bold'> 0734522490</span></h2></div>
      </div>
    </div>
  )
}

export default Janitor
