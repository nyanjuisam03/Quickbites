import React, { useState, useEffect } from 'react';
import { db,storage } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate,Link } from 'react-router-dom'
import Nav from './nav';
import { IoIosHeartEmpty } from "react-icons/io";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useFavorites } from '../FavouriteContext';
import { ref,getDownloadURL } from 'firebase/storage';
import homepage from "./pictures/homepage.jpeg"
import download from "./pictures/download.jpeg"
import random1 from "./pictures/random1.jpeg"
import random2 from "./pictures/random2.jpeg"
import random3 from "./pictures/random3.jpeg"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Listing() {
  const [property, setProperty] = useState([]);
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Rent');
  const [propertyType, setPropertyType] = useState('Bedsitter');
  const [maxPrice, setMaxPrice] = useState('');
  const propertyRef = collection(db, 'Property')
   
const navigate=useNavigate()
const { favorites, addFavorite } = useFavorites();

const getRandomImage = () => {
  const randomImages = [homepage , random1 ,random2 ,random3 , download];
  const randomIndex = Math.floor(Math.random() * randomImages.length);
  return randomImages[randomIndex];
};


  useEffect(() => {
    const getProperty = async () => {
      try {
        const data = await getDocs(propertyRef);
        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setProperty(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        console.error('Error fetching property data:', err);
      }

    };

    getProperty();

  }, []);

  const handleSearch = () => {
    navigate(`/search-results?location=${location}&category=${category}&propertyType=${propertyType}&maxPrice=${maxPrice}`); // Navigate to a different page
    console.log('Search Criteria:', { location, category, propertyType, maxPrice });
  };

  const addToFavorites = (propertyId) => {
    const selectedProperty = property.find((item) => item.id === propertyId);
    if (selectedProperty) {
      // Check if the property is not already in favorites
      if (!favorites.find((fav) => fav.id === propertyId)) {
        addFavorite(selectedProperty);
       ;
      }
    }

    toast.success('Added to favorites', {
      position: 'top-right',
      autoClose: 2000, // Notification will close after 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    

  };

  return (
    <div>
      <Nav />
      <ToastContainer />
      <div className='flex'>
    <div className='flex flex-col max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden mx-11 mt-28 '>
  <div className="mb-4">
    <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2 mx-4">
      Location
    </label>
    <input
      type="text"
      id="location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      placeholder='Where do you want to live..'
      className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    />
  </div>

  <div className="mb-4">
    <label htmlFor="selectCategory" className="block text-gray-700 text-sm font-bold mb-2 mx-4">
      Category
    </label>
    <select
      id="selectCategory"
      name="selectCategory"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className=" mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="Rent">For Rent</option>
      <option value="Sale">For Sale</option>
    </select>
  </div>

  <div className="mb-4">
    <label htmlFor="selectPropertyType" className="block text-gray-700 text-sm font-bold mb-2 mx-4">
      Property Type
    </label>
    <select
      id="selectPropertyType"
      name="selectPropertyType"
      value={propertyType}
      onChange={(e) => setPropertyType(e.target.value)}
      className="mx-4  shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="Apartment">Apartment</option>
      <option value="Bedsitter">Bedsitter</option>
      <option value="House">Houses</option>
      <option value="Office">Office</option>
    </select>
  </div>

  <div className="mb-4">
    <label htmlFor="maxPrice" className="block text-gray-700 text-sm font-bold mb-2 mx-4">
      Maximum Price
    </label>
    <input
      type="number"
      id="maxPrice"
      name="maxPrice"
      value={maxPrice}
      onChange={(e) => setMaxPrice(e.target.value)}
      className=" mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Max Price"
    />
  </div>

  <button onClick={handleSearch} className='bg-indigo-600 px-4 py-2 text-white rounded-full mt-4 w-36 mb-4 mx-4'>
    Search
  </button>
</div>
<div >

<h2 className='mt-24 text-2xl font-bold'>Available Properties</h2>
  <Splide
  options={ {
    perPage:2,
    rewind: true,
    width : 800,
    gap : '20px',
    drag:"free",
    arrows:false
  } }
  >
    
     {property.map((item) => (
     
      <SplideSlide className='mt-16'>
        
        <div key={item.id} className='mt-3 w-56'>
          <img src={getRandomImage()} alt="" className='w-full' />
       <h2 className='mx-3 font-semibold'>{item.CompanyName}</h2>
       <h2 className='text-2xl capitalize'>{item.BriefDesc}</h2>
       <h2 className='text-xl'>Rent/Price:Ksh {item.Price}</h2>
      <p className='text-xl'>Located at: {item.Location}</p>
      <div className='flex space-x-3'>
      <button className='bg-indigo-600 px-4 py-2 text-white rounded-full mt-4 w-36 mb-4 mx-4' ><Link to={'/moreInfo/'+item.id}>View</Link></button>
      <button onClick={() => addToFavorites(item.id)}   className='border border-pink-800 px-4 py-2 text-pink-800 rounded-full mt-4 w-16 mb-4 mx-2 focus:outline-none active:bg-pink-600 active:text-white'>
  <IoIosHeartEmpty className='mx-1 text-pink-600 text-2xl active:text-white' />
</button>
      </div>
     
        </div>
        </SplideSlide>
      ))}
      </Splide>
      </div>
      </div>
      </div>
    
  )
}

export default Listing
