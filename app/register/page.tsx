"use client"

import React from 'react';
import { useState } from 'react';
import '../sass/register.scss';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';

import SignUpImg from '../../public/assets/eat-img-LR.png';

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const validationSchema = Yup.object({
    fullName: Yup.string().min(7, 'Full Name must be at least 7 characters').required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem('registrationData', JSON.stringify(values));
      setIsRegistered(true); 
    },
  });

  const closeModal = () => {
    setIsRegistered(false); 
  };

  return (
    <section className='SUP__left overflow-hidden h-[100vh]'>
      <div className='register__block flex box-border w-full h-[100vh]'>
        <div className='flex w-full align-center justify-center'>
          <div className='signUP__block'>
            <h2>Sign Up To eatly</h2>
            <form onSubmit={formik.handleSubmit}>
              <input
                type='text'
                placeholder='Full Name'
                name='fullName'
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.touched.fullName && formik.errors.fullName ? 'error-input' : ''}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className='error'>{formik.errors.fullName}</p>
              )}

              <input
                type='email'
                placeholder='Email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className='error'>{formik.errors.email}</p>
              )}

              <input
                type='password'
                placeholder='Password'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.touched.password && formik.errors.password ? 'error-input' : ''}
              />
              {formik.touched.password && formik.errors.password && (
                <p className='error'>{formik.errors.password}</p>
              )}

              <button type='submit'>SIGN UP</button>
            </form>
            <p>
              Already Have An Account?{' '}
              <span>
                <Link href='/login'>Log In</Link>
              </span>
            </p>
          </div>
        </div>
        <div className='SUP__right flex w-full align-center justify-center bg-[#6C5FBC] '>
          <div className='signUP__block2'>
            <div className='SUP__block2-img'>
              <Image src={SignUpImg} alt='SignUpImg' />
            </div>

            <div className='SUP__block2-title'>
              <h4>Find Foods With Love</h4>
              <p>
                Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian,
                Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.
              </p>
            </div>
          </div>
        </div>
      </div>
      {isRegistered && ( 
        <div className='modal'>
          <div className='modal-content'>
            <h3>Registration Successful!</h3>
            <p>You have successfully registered. Click the button below to go back to the homepage.</p>
            <button onClick={closeModal}><Link href='/'>Go to home page</Link></button>
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(Register);