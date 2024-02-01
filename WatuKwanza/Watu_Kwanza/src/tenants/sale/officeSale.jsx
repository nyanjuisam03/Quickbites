import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate,Link } from 'react-router-dom'
import Nav from '../nav';
import homepage from '../pictures/homepage.jpeg'
import download from "../pictures/download.jpeg"
import random1 from "../pictures/random1.jpeg"
import random2 from "../pictures/random2.jpeg"
import random3 from "../pictures/random3.jpeg"

function OfficeSale() {
  const [properties, setProperties] = useState([]);

  const getRandomImage = () => {
    const randomImages = [homepage , random1 ,random2 ,random3 , download];
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Property')); // Assuming the collection is named 'Agent'
        const propertiesArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProperties(propertiesArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Filter properties for "Sale"
  const saleProperties = properties.filter((property) =>
    property.Category === 'Sale' && property.PropertyType === 'Office'
  );

  return (
    <div>
      <Nav/>
      <h1>Offices for Sale</h1>
      <ul>
      {saleProperties.length > 0 ? (
  saleProperties.map((property) => (
    <li key={property.id} className="mx-24 my-20">
      <img src={getRandomImage()} alt="" className='w-64' />
      <p className='mx-3 font-semibold'>Name: {property.CompanyName}</p>
      <p className='text-2xl capitalize' >{property.BriefDesc}</p>
      <p className='text-xl'>Location: {property.Location}</p>
      <p className='text-xl'>Price: {property.Price}</p>
      <button className='bg-indigo-600 px-4 py-2 text-white rounded-full mt-4 w-36 mb-4 mx-4'>
        <Link to={'/moreInfo/'+property.id}>View</Link>
      </button>
      {/* Add more properties as needed */}
    </li>
  ))
) : (
  <p>No property found</p>
)}

      </ul>
    </div>
  );
}

export default OfficeSale;
