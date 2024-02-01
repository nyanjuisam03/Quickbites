import React from 'react';
import { FaWifi } from 'react-icons/fa';
import { GrUserPolice } from 'react-icons/gr';
import { MdOutlineElectricBolt } from 'react-icons/md';
import { GiVacuumCleaner } from 'react-icons/gi';
import HomeOwner from './home';
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className='flex'>
      <div>
        <HomeOwner />
      </div>
      <div>
        <div className='mx-7 mt-8 grid grid-cols-2 gap-5'>
          <Link to={'/wifi'}>
            <div
              className='flex flex-col items-center w-56 rounded-md shadow-xl bg-gray-100 px-10 py-16 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white'
            >
              <FaWifi className='mt-12 text-2xl' />
              <h2>Wifi Installation</h2>
            </div>
          </Link>

          <Link to={'/security'}>
            <div
              className='flex flex-col items-center w-56 rounded-md shadow-xl bg-gray-100 px-10 py-16 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white'
            >
              <GrUserPolice className='mt-12 text-2xl' />
              <h2 className='mx-28'>Security Installation</h2>
            </div>
          </Link>

          <Link to={'/electric'}>
            <div
              className='flex flex-col items-center w-56 rounded-md shadow-xl bg-gray-100 px-10 py-16 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white'
            >
              <MdOutlineElectricBolt className='mt-12 text-2xl' />
              <h2  className='mx-28'>Electricity Maintenance</h2>
            </div>
          </Link>

          <Link to={'/janitor'}>
            <div
              className='flex flex-col items-center w-56 rounded-md shadow-xl bg-gray-100 px-10 py-16 transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-white'
            >
              <GiVacuumCleaner className='mt-12 text-2xl' />
              <h2>Janitor and Cleaning Service</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Service;
