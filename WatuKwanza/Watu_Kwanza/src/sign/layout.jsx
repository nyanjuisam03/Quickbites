import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../firebase-config'
import { useNavigate } from 'react-router-dom'

 
function Layout({children}) {
  const [user, loading]=useAuthState(auth) 
  const navigate=useNavigate()
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const logout=()=>{
    auth.signOut()
    navigate("/")
  }

  return (
    <div>
    
        {!user && (
          <div className='flex justify-between'>
          <h2 className='mx-16 mt-4 font-bold'>Watu Kwanza</h2>
        <Link to={"/signIn"}><button className='bg-indigo-700 px-4 py-2 text-white rounded-full mt-3 mx-40 '>Join Now</button></Link>
        </div>
        )}
       {user && (
  <div className='flex items-center justify-between'>
    <h2 className='mx-9 mt-4 font-bold text-xl'><Link to={'/tenants'}>Watu Kwanza</Link></h2>
    <div className='relative'>
      <img
        className='w-11 rounded-full cursor-pointer mx-52 mt-3'
        src={user.photoURL}
        alt=''
        onClick={toggleDropdown}
      />
      <div
        className={`${
          isDropdownOpen ? '' : 'hidden'
        } absolute bg-white border rounded shadow-md mt-3 right-40 z-10`}
      >
        {/* Dropdown Content Goes Here */}
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300" onClick={logout}>
          Logout
        </a>
        <Link to={'/favourites'}>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300">
            Favourites
          </a>
        </Link>
        <Link to={'/propertyOwner'}>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300">
            My Dashboard
          </a>
        </Link>
      </div>
    </div>
  </div>
)}

      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
