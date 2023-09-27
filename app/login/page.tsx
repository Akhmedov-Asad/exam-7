"use client"

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../sass/login.scss';
import Link from 'next/link';
import Image from 'next/image';

import SignUpImg from '../../public/assets/eat-img-LR.png';

const Login = () => {
  const [inputErrors, setInputErrors] = useState({
    email: '',
    password: '',
  });

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className='SIP__left overflow-hidden h-[100vh]'>
      <div className='login__block flex box-border w-full h-[100vh]'>
        <div className='flex w-full align-center justify-center'>
          <div className='signIN__block'>
            <h2>Sign In To eatly</h2>
            <form onSubmit={formik.handleSubmit}>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.touched.email && formik.errors.email ? 'error-input' : ''}
              />
              {formik.touched.email && formik.errors.email && <p className='error'>{formik.errors.email}</p>}

              <input
                type='password'
                placeholder='Password'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={formik.touched.password && formik.errors.password ? 'error-input' : ''}
              />
              {formik.touched.password && formik.errors.password && <p className='error'>{formik.errors.password}</p>}

              <button type='submit'>SIGN IN</button>
            </form>
            <p>
              Already Have An Account?{' '}
              <span>
                <Link href='/register'>Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
        <div className='SIP__right flex w-full align-center justify-center bg-[#6C5FBC] '>
          <div className='signIN__block2'>
            <div className='SIP__block2-img'>
              <Image src={SignUpImg} alt='SignUpImg' />
            </div>

            <div className='SIP__block2-title'>
              <h4>Find Foods With Love</h4>
              <p>
                Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian,
                Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Login);