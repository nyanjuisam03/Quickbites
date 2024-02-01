// Inside Favorites.js
import React from 'react';
import { useFavorites } from '../FavouriteContext';
import { Link } from 'react-router-dom'
import Nav from './nav';
import homepage from "./pictures/homepage.jpeg"
import download from "./pictures/download.jpeg"
import random1 from "./pictures/random1.jpeg"
import random2 from "./pictures/random2.jpeg"
import random3 from "./pictures/random3.jpeg"

const Favorites = () => {
  const { favorites } = useFavorites();
  const getRandomImage = () => {
    const randomImages = [homepage , random1 ,random2 ,random3 , download];
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };
  return (
    <div>
      <Nav/>
      <h2 className='mx-20 text-xl text-indigo-700' >Favorites</h2>
      {favorites && favorites.length > 0 ? (
        favorites.map((favorite) => (
          <div key={favorite.id} className="mx-20 w-68">
            <img src={getRandomImage()} alt="" className='w-64' />
            <h3 className='mx-3 font-semibold'>{favorite.CompanyName}</h3>
            <h3 className='text-2xl capitalize'>{favorite.BriefDesc}</h3>
            <h3 className='text-xl'> Property Address: {favorite.PropertyAddress}</h3>
            <h3 className='text-xl'>Rent/Price:Ksh <span className='text-indigo-700'> {favorite.Price}</span> </h3>
            <button className='bg-indigo-600 px-4 py-2 text-white rounded-full mt-4 w-36 mb-4 mx-4' ><Link to={'/moreInfo/'+favorite.id}>View</Link></button>
            {/* Display other favorite details as needed */}
          </div>
        ))
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default Favorites;
