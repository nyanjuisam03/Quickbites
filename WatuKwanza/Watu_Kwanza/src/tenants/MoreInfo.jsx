// src/components/PropertyDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import inner1 from "./pictures/inner1.jpeg"
import inner2 from "./pictures/inner2.jpeg"
import inner3 from "./pictures/inner3.jpeg"
import inner4 from "./pictures/inner4.jpeg"
import inner5 from "./pictures/inner5.jpeg"
import google from "./pictures/google.webp"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const propertyDoc = doc(db, 'Property', id);
      const data = await getDoc(propertyDoc);

      setProperty(data.exists() ? { id, ...data.data() } : null);
    };

    fetchData();
  }, [id]);


  const contact=()=>{
    toast.info('The agent information has been sent to your email account', {
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
    <div>
     
      {property && (
        <div className='flex'>
<ToastContainer/>
         <div className='mx-16'>
         <div className='flex  mb-12'>
         <h2 className='mt-2'>Property Type: <span className='font-bold' > {property.PropertyType}</span></h2>
         <h2 className='bg-indigo-700 text-white py-2 px-3 rounded-md mx-5'>For {property.Category}</h2>
         </div>
         <div className='flex flex-col max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden px-10 py-8'>
         <h2 className='text-xl'>Some of the basic features of this property include:</h2>
         <h2><span className='font-bold'>Number of bedrooms:</span> {property.Feature.Bedroom}</h2>
          <h2><span  className='font-bold'> Number of bathroom:</span> {property.Feature.Bathroom}</h2>
          <h2><span  className='font-bold'> Internet:</span> {property.Feature.Internet}</h2>
          <h2> <span  className='font-bold'> Parking Space:</span> {property.Feature.ParkingSpace}</h2>
          <h2> <span  className='font-bold'> Security of the property:</span> {property.Feature.Security}</h2>
         </div>
         <div className='flex flex-col max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden px-10 py-8  mt-12'>
          <h2>Agent Representing: <span className='font-bold text-indigo-700' >{property.Agent}</span></h2>
          <button onClick={contact} className='bg-indigo-600 px-3 py-2 text-white rounded-md  w-48 mt-5'>Get Agent Phone number</button>
         </div>
         <div  className='flex flex-col max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden px-10 py-8  mt-12'>
          <h2><span className='font-bold text-xl'>Location:</span> <span className='text-indigo-700 text-xl'>{property.Location}</span></h2>
          <h2 className='text-2xl'>More detailed descrption about the Property:</h2>
          <h2>{property.Feature.MoreDescrption}</h2>
         </div>
         </div>

         <div className='mx-32'>
         <div>
  
          <h2 className='text-3xl capitalize font-bold '>{property.BriefDesc}</h2>
          <h2 className='text-xl'>Ksh:<span className='font-bold text-indigo-700'>{property.Price}</span></h2>
         </div>
         <div>
      <Splide 
      
      options={ {
        perPage:1,
        rewind: true,
        width : 500,
        gap : '20px',
        drag:"free",
        
      } }>
        <SplideSlide className='mt-12'>
        <img src={inner1} alt="" className='w-96 h-96' />
        </SplideSlide>
        <SplideSlide className='mt-12'>
        <img src={inner2} alt="" className='w-96 h-96' />
        </SplideSlide>
        <SplideSlide className='mt-12'>
        <img src={inner3} alt="" className='w-96 h-96' />
        </SplideSlide>
        <SplideSlide className='mt-12'>
        <img src={inner4} alt="" className='w-96 h-96' />
        </SplideSlide>
        <SplideSlide className='mt-12'>
        <img src={inner5} alt=""  className='w-96 h-96'/>
        </SplideSlide>
      </Splide>
         </div>
         <div className='flex flex-col max-w-md w-full bg-white shadow-lg rounded-lg  px-12 py-8 mt-12 '>
          <span>Located at:</span>
         <img src={google} alt="" className='w-full h-96' />
         </div>
         </div>
        
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
