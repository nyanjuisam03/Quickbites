import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdHomeWork } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md"
import { LiaToolsSolid } from "react-icons/lia";
import { FaClipboardUser } from "react-icons/fa6";

function HomeOwner() {
  const [activeLink, setActiveLink] = useState('');
  return (
    <div>
      <div className='text-center'>
      <h2 className='text-3xl text-indigo-700 font-bold'>Your Dashboard</h2>
      </div>
    <div className='flex'>
    <div className='flex flex-col space-y-7  '>
    <Link to="/myProperty">
        <div
          className={`flex space-x-2 mt-12 p-11 ${
            activeLink === 'myProperty' ? 'bg-indigo-500 text-white' : 'bg-white'
          } shadow-lg rounded-lg overflow-hidden mx-11`}
          onClick={() => setActiveLink('myProperty')}
        >
          <MdHomeWork className='text-3xl' />
          <span>Your property(s)</span>
        </div>
      </Link>

      <Link to="/addOwner">
        <div
          className={`flex space-x-2 p-11 ${
            activeLink === 'addOwner' ? 'bg-indigo-500 text-white' : 'bg-white'
          } shadow-lg rounded-lg overflow-hidden mx-11`}
          onClick={() => setActiveLink('addOwner')}
        >
          <MdAddHomeWork className='text-3xl' />
          <span>Add a new Property</span>
        </div>
      </Link>

      <Link to="/service">
        <div
          className={`flex space-x-2 p-11 ${
            activeLink === 'service' ? 'bg-indigo-500 text-white' : 'bg-white'
          } shadow-lg rounded-lg overflow-hidden mx-11`}
          onClick={() => setActiveLink('service')}
        >
          <LiaToolsSolid className='text-3xl' />
          <span>Maintenance and Service(s)</span>
        </div>
      </Link>

      <Link to="/interestedTenants">
        <div className='flex space-x-2 bg-white shadow-lg rounded-lg overflow-hidden mx-11 p-11'>
          <FaClipboardUser className='text-3xl' />
          <span>Interested Tenants</span>
        </div>
      </Link>
    </div>
   <div>
 
   </div>
    </div>
    </div>
  );
}

export default HomeOwner;
