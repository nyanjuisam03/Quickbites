import React, { useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Listing from '../tenants/listing';


function Login() {
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Sign in with Google
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      navigate('/tenants');
    } catch (err) {
      console.log('error', err);
    }
  };

  // Sign in with email and password
  const emailLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result.user);
      navigate('/tenants');
    } catch (err) {
      console.log('error', err);
    }
  };

  // Sign up with email and password
  const emailSignUp = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log(result.user);
      navigate('/tenants');
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <>
      {!user && (
        <div className='mx-16 mt-12'>
            <div className='flex space-x-56'>
             <div className='w-72'>
             <h2 className='text-2xl' >"Welcome to Your Watu Kwanza Property Management  🏠</h2>
          <p className='mt-4'>
            Ready to streamline your property management tasks and unlock a world of convenience? Sign up now and take
            control of your properties like never before. It's your key to efficient, hassle-free property management.
            Let's get started!"
          </p>
             </div>
           
      <div>
        <h2 className='text-2xl'>Sign In/Log In</h2>
         {/* Email Signin/Signup Form */}
             <div className='mt-6 flex flex-col space-y-3'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border p-2 mr-2 w-84'
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='border p-2 mr-2 w-84'
            />
            <div className='space-x-1'>
            <button onClick={emailLogin} className='bg-indigo-700 px-4 py-2 text-white rounded-md w-56'>
             Login in with Email
            </button>
            <button onClick={emailSignUp} className='bg-indigo-700 px-4 py-2 text-white rounded-md w-56'>
              Sign up with Email
            </button>
            </div>
          </div>



          <div className='flex space-x-7 mt-6'>
            <button onClick={googleLogin} className='flex bg-gray-700 px-4 py-2 text-white rounded-md gap-2'>
              <FcGoogle className='text-2xl' />
              Sign in with Google
            </button>
            <button className='flex bg-gray-700 px-4 py-2 text-white rounded-md gap-2 '>
              <AiFillFacebook className='text-2xl text-blue-600' />
              Sign in using Facebook
            </button>
          </div>
          </div>
          </div>
        </div>
      )}

      {user && <div><Listing/></div>}
    </>
  );
}

export default Login;
