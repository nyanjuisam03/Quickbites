import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { auth } from '../firebase-config';
import { storage } from "../firebase-config"
import {ref,uploadBytes,listAll,getDownloadURL} from "firebase/storage"
import HomeOwner from './home';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function AddOwner() {

  const [imageUpload, setImageUpload] = useState(null);
  const[imageList,setimageList]=useState([])
  const propertyRef = collection(db, 'Property');

  const imageListRef=ref(storage,"images/")

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageUpload(file);
  };

  const handleUpload = async () => {
    try {
      if (imageUpload) {
        const storageRef = ref(storage, `property/${imageUpload.name}`);
        await uploadBytes(storageRef, imageUpload);
        console.log('Image uploaded successfully');
      } else {
        console.error('No image selected for upload');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }

    toast.info('Image Uploaded', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };






  const createProperty = async () => {
    try {
      const user = auth.currentUser;
  
      if (user) {
        const userId = user.uid;
  
        const companyName = document.getElementById('companyName').value;
        const propertyType = document.getElementById('propertyType').value;
        const propertyAddress = document.getElementById('address').value;
        const category = document.getElementById('category').value;
        const location = document.getElementById('location').value;
        const price = document.getElementById('price').value;
        const briefDesc = document.getElementById('briefdesc').value;
        const agent = document.getElementById('agent').value;
        const contactNumber = document.getElementById('contactnumber').value;
  
        // Check if any required detail is missing
        if (
          !companyName ||
          !propertyType ||
          !propertyAddress ||
          !category ||
          !location ||
          !price ||
          !briefDesc ||
          !agent ||
          !contactNumber
        ) {
          // Display toaster message for missing details
          toast.error('Please enter all details', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          return; // Stop execution if any detail is missing
        }
  
        const newProperty = {
          ownerId: userId,
          CompanyName: companyName,
          PropertyType: propertyType,
          PropertyAddress: propertyAddress,
          Location: location,
          Price: price,
          Category: category,
          BriefDesc: briefDesc,
          Agent: agent,
          ContactNumber: contactNumber,
          Feature: {
            Bedroom: document.getElementById('bedroom').value,
            Bathroom: document.getElementById('bathroom').value,
            Security: document.getElementById('security').value,
            ParkingSpace: document.getElementById('parkingSpace').value,
            Internet: document.getElementById('internet').value,
            MoreDescrption: document.getElementById('moreDesc').value,
          },
        };
  
        await addDoc(propertyRef, newProperty);
        console.log('Property added successfully');
        toast.info('Property added', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        console.error('User not authenticated');
      }
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };




  
  useEffect(() => {
   listAll(imageListRef).then((response)=>{
   response.items.forEach((items)=>{
   getDownloadURL(items).then((url)=>{
    setimageList((prev)=>[...prev,url])
   })
   })
   })
  }, []);

  return (
    <div className='flex'>
      <div>
        <HomeOwner/>
      </div>
      <div>
        <ToastContainer/>
        <h1>Enter the following details about your property</h1>
        <div className='flex'>
        <div className='flex flex-col'>
      <span>Your Company Name</span>
      <input type="text" id="companyName" placeholder="Company Name" className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
      <span>What is the typeof property you are adding</span>
      <input type="text" id="propertyType" placeholder="Property Type"  className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
      <span>Yourproperty Address</span>
      <input type="text" id="address" placeholder="Address"  className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
      <span>Is yor property for sale or for rent</span>
      <input type="text" id="category" placeholder="For rent or for sale"  className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
      <span>Your property Location</span>
      <input type="text" id="location" placeholder="Location"  className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
      <span>Your property rent/price</span>
      <input type="number" id="price" placeholder="Price"  className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
      <span>Abrief description about your property</span>
      <input type="text" id="briefdesc" placeholder="Brief Descrption"  className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
      <span>The full name of the agent represent your property</span>
      <input type="text" id="agent" placeholder="Agent full name"  className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/> 
      <span>Your agent phone number</span>
      <input type="text"id="contactnumber" placeholder="Agent Phone no"  className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
      </div>
      <div className='flex flex-col'>
      
      <span>Feature of the property</span>
      <span>Bedroom</span>
      <input type="text" id="bedroom" placeholder="Bedroom"  className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
      <span>Bathhroom</span>
      <input type="text" id="bathroom" placeholder="Bathroom"   className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
      <span>Security Company</span>
      <input type="text" id="security" placeholder="Security"   className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
      <span>Parking space</span>
      <input type="text" id="parkingSpace" placeholder="Parking Space"  className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
      <span>Internet</span>
      <input type="text" id="internet" placeholder="Internet"  className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
      <span>More descrption about your property</span>
      <input type="text" id="moreDesc" placeholder="More Description"  className=' mx-4 shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
      </div>
     
      </div>
      <div className="border-dotted border border-gray-300 p-20 mt-16">
      <input type="file" name="" id=""  onChange={handleFileChange}/>
       <button onClick={handleUpload} className='bg-indigo-600 px-4 py-2 text-white rounded-md mt-4 w-44'>Upload Image</button>
      </div>
      
      <button className='bg-indigo-600 px-4 py-2 text-white rounded-md mt-12 w-36 mb-4 mx-4' onClick={createProperty}>Add Property</button>

      </div> 
    </div>
  );
}

export default AddOwner;
