import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase-config';
import { collection, getDocs, where, query, deleteDoc, doc } from 'firebase/firestore';
import HomeOwner from './home';

function MyProperty() {
  const [userProperties, setUserProperties] = useState([]);
  const [userId, setUserId] = useState('');
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(''); // or set it to an appropriate fallback value
      }
    });

    return () => unsubscribe(); // Cleanup the subscription
  }, []);

  useEffect(() => {
    const fetchUserProperties = async () => {
      if (userId) {
        const propertyRef = collection(db, 'Property');
        const userPropertyQuery = query(propertyRef, where('ownerId', '==', userId));
        try {
          const data = await getDocs(userPropertyQuery);
          setUserProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (err) {
          console.error('Error fetching user properties:', err);
        }
      }
    };

    fetchUserProperties();
  }, [userId]);

  const handleDelete = async (propertyId) => {
    try {
      const propertyDocRef = doc(db, 'Property', propertyId);
      await deleteDoc(propertyDocRef);
      console.log('Property deleted successfully');
      // After deleting a property, fetch the updated list of properties
      const data = await getDocs(query(collection(db, 'Property'), where('ownerId', '==', userId)));
      setUserProperties(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  const handleUpdate = (propertyId) => {
    // Implement your update logic here, e.g., open a modal or navigate to an update page
    console.log('Update property with id:', propertyId);
  };

  return (
    <div className='flex'>
      <div><HomeOwner/></div>
      <div className='mt-12'>
        {userProperties.length === 0 ? (
          <p>No properties found.</p>
        ) : (
          userProperties.map((property) => (
            <div key={property.id} className=''>
            
              <p className='mx-3 font-semibold'>{property.CompanyName}</p>
              <p className='text-2xl capitalize'>{property.BriefDesc}</p>
              <p className='text-xl'>Rent/Price Ksh: {property.Price}</p>
              <p className='text-xl'>Location: {property.Location}</p>
              <button className='bg-indigo-600 px-4 py-2 text-white rounded-full mt-4 w-36  mx-3'>
                <Link to={'/moreInfo/' + property.id}>View</Link>
              </button>
              <button
                className='bg-indigo-600 px-4 py-2 text-white rounded-full mt-4 w-36  mx-4'
                onClick={() => handleUpdate(property.id)}
              >
                Update
              </button>
              <button
                className='bg-red-600 px-4 py-2 text-white rounded-full mt-4 w-36  mx-4'
                onClick={() => handleDelete(property.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyProperty;
