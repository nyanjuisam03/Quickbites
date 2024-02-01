import React from 'react'
import HomeOwner from '../home'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Electric() {
  const Info=()=>{
    toast.info('A link  has been sent to your email to give a more detail about your issue', {
      position: "top-right",
      autoClose: 2000,
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
      <div>
        <ToastContainer/>
        <div className='mt-20 mx-5'>
        <h2>When it comes to electric maintenance within the framework of a Property Management System (PMS),
           <span className='text-indigo-700'>Watu Kwanza</span>   recognizes the critical role of a robust electrical infrastructure in ensuring seamless operations.
            The electric maintenance strategy encompasses regular inspections, preventive measures,
             and swift responses to any issues that may arise. 
             Watu Kwanza PMS employs certified electricians to conduct routine checks on the property's electrical systems, including wiring, panels, and equipment. This proactive approach aims to identify and address potential electrical issues before they escalate, minimizing downtime and ensuring the reliability of the PMS. Additionally, emergency response protocols are in place to swiftly address any unforeseen electrical failures,
           guaranteeing uninterrupted service for both guests and staff.</h2>
      </div>
      <div className='mt-8 flex flex-col space-y-4 mx-4'onClick={Info}  >
        <h2>Which of the following problem is your property facing</h2>
        <div className='bg-indigo-700 text-white shadow-lg rounded-lg px-6 py-4 w-80' onClick={Info}>
          <h2>Electrical Outages and Interruptions</h2>
        </div>
        <div className='bg-indigo-700 text-white shadow-lg rounded-lg px-6 py-4 w-80' onClick={Info}>
          <h2>Power Surges and Voltage Fluctuations</h2>
        </div>
        <div className='bg-indigo-700 text-white shadow-lg rounded-lg px-6 py-4 w-80' onClick={Info}>
          <h2>Faulty Electrical Connections</h2>
        </div>
        <div className='bg-indigo-700 text-white shadow-lg rounded-lg px-6 py-4 w-80' onClick={Info}>
          <h2>Electrical Wiring Issues</h2>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Electric
