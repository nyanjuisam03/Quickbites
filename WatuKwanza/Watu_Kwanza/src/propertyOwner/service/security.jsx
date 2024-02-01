import React from 'react'
import HomeOwner from '../home'
import { BiCctv } from "react-icons/bi";
import { GiKeyCard } from "react-icons/gi";
import { GrUserPolice } from 'react-icons/gr';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';






function Security() {

const Info=()=>{
  toast.info('The step on step on how to hire WKPMS security has been sent to your email', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}

  return (
    <div className='flex'>
      <div><HomeOwner/></div>
      <ToastContainer />
      <div  className='mx-12 mt-10'>
      <h2> <span className='text-indigo-700 font-bold'> Watu Kwanza Property Management System (PMS)</span> is dedicated to prioritizing the safety and security
         of its properties through a comprehensive security installation. The system incorporates 
         advanced Closed-Circuit Television (CCTV) technology strategically placed to monitor critical areas,
          providing real-time surveillance for enhanced security. In addition to technological measures, 
          a rigorous security personnel recruitment process ensures the deployment of well-trained guards in key 
          locations, reinforcing a visible and responsive security presence. This integrated approach to security installation underscores Watu Kwanza PMS's commitment to creating a secure environment for guests and safeguarding property assets, contributing to an overall positive and safe experience for everyone involved</h2>
    <div className='my-6'>Below are the services WKPMS Security provide:</div>
    
    <div className='flex space-x-6'>

      <div className='items-center  bg-white shadow-lg rounded-lg h-56 w-52' onClick={Info}>
      <BiCctv className='text-5xl mx-20 my-8'/>
      <h2 className='mx-9'>CcTv Installation</h2>
      </div>
     <div className=' bg-white shadow-lg rounded-lg h-56 w-52' onClick={Info}>
      <GiKeyCard className='text-5xl mx-20 my-8'/>
      <h2 className='mx-10'>KeyCard Entry</h2>
     </div>
     <div className=' bg-white shadow-lg rounded-lg h-56 w-52' onClick={Info}>
      <GrUserPolice className='text-5xl mx-20 my-8'/>
      <h2 className='mx-12'>24/7 Security</h2>

     </div>
    </div>
    </div>
    </div>
  )
}

export default Security
