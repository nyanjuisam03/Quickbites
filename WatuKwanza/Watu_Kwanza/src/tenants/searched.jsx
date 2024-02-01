// src/components/SearchResults.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Link } from 'react-router-dom';
import Nav from './nav';
import homepage from "./pictures/homepage.jpeg"
import download from "./pictures/download.jpeg"
import random1 from "./pictures/random1.jpeg"
import random2 from "./pictures/random2.jpeg"
import random3 from "./pictures/random3.jpeg"


const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      console.log('Fetching data...');
      const locationQuery = searchParams.get('location') ;
      const listingTypeQuery = searchParams.get('category') ;
      const propertyTypeQuery = searchParams.get('propertyType');
      const maxPriceQuery = searchParams.get('maxPrice') ;

      const propertiesCollection = collection(db, 'Property');
      const q = query(
        propertiesCollection,
        where('Location', '==', locationQuery),
        where('Category', '==', listingTypeQuery),
        where('PropertyType', '==', propertyTypeQuery),
        where('Price', '<=', parseInt(maxPriceQuery) || Number.POSITIVE_INFINITY)
      );

      const data = await getDocs(q);

      console.log('Data:', data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      setResults(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };


  const getRandomImage = () => {
    const randomImages = [homepage , random1 ,random2 ,random3 , download];
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };
  useEffect(() => {
    fetchData();
  }, [location.search]);

  return (
    <div>
      <Nav/>

      <h1 className='mx-20 text-xl text-indigo-700'>Search Results</h1>
      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (

        <div>
        <p className='mx-24 mt-9 text-3xl'>No properties available</p>
        <button  className='bg-indigo-600 px-4 py-2 text-white rounded-md mt-4 w-36 mb-4 mx-24'><Link to={'/tenants'}>Return To Home</Link></button>
       </div>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.id} className='mx-24 mt-10'>
                <img src={getRandomImage()} alt="" className='w-64' />
              <h3 className='font-semibold'>{result.BriefDesc}</h3>
              <p>
                Location: <span className='text-indigo-700'>{result.Location}</span>
              </p>
              <p className='bg-indigo-700 text-white py-2 px-3 rounded-md mx-5 w-24'>
                For <span>{result.Category}</span>{' '}
              </p>
              <p>Property Type: {result.PropertyType}</p>
              <p>
                Price: <span className='text-indigo-700'>{result.Price}</span>
              </p>
              <button className='bg-indigo-600 px-4 py-2 text-white rounded-full mt-4 w-36 mb-4 mx-4'>
                <Link to={'/moreInfo/' + result.id}>View</Link>
              </button>
              {/* Display other property details */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
