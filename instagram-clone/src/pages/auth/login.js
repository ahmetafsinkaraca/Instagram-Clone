import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillFacebook } from "react-icons/ai";
import Input from "components/Input";
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { login } from 'route/firebase.js';
import { Formik, Form } from 'formik';
import { LoginSchema } from 'validation';
import { Link } from 'react-router-dom';
import Separator from 'components/Separator';
import Button from 'components/Button';
import {useSelector} from "react-redux";
import { Helmet } from 'react-helmet';



export default function Login() {

	const user = useSelector(state => state.auth.user)
	const location = useLocation()
  const ref = useRef()

  useEffect(() => {
    let images = ref.current.querySelectorAll('img'),
      total = images.length,
      current = 0
    const imageSlider = () => {
      images[(current > 0 ? current : total) - 1].classList.add('opacity-0')
      images[current].classList.remove('opacity-0')
      current = current === total - 1 ? 0 : current + 1;
    }
    imageSlider()
    let interval = setInterval(imageSlider, 3000)
    return () => {
      clearInterval(interval)
    }

  }, [ref])

  const images = [
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png",
    "https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png",

  ]

  if (user) {
		return <Navigate to={location.state?.return_url || '/'} replace={true} />
	}


  const handleSubmit = async (values, actions) => {
    await login(values.username, values.password)
    }


  return (
    <div className="h-full w-full items-center flex justify-center gap-x-8 overflow-auto flex-wrap ">

      <Helmet>
        <title>Login • Instagram</title>
      </Helmet>

      <div className="bg-logo-pattern w-[380px] h-[581px] relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div className="absolute w-[250px] h-[538px] top-[27px] right-[18px]" ref={ref}>
          {images && images.map((image, key) => (
            <img key={key} className=" top-0 left-0 absolute opacity-0 transition-opacity ease-linear duration-1000"
              src={image}
              alt='' />
          ))}
        </div>
      </div>

      <div className="w-[350px] grid gap-y-3">
        <div className="border bg-white relative pt-10 pb-6 p-9">
          <a href='#' className="flex justify-center mb-8">
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" sizes={16} alt="" className="h-[51px]" />
          </a>

          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              username: '',
              password: '',
            }}
            onSubmit={handleSubmit}>
            {({ isSubmitting, isValid, dirty, values }) => (
              <Form className="grid gap-y-2">
                <Input name='username' label='Phone number, username or email'/>
                <Input type="password" name='password' label='Password' />
                <Button type='submit' disabled={!isValid || !dirty || isSubmitting}>
                  Log In
                </Button>

                <Separator/>

                <a href="#" className=" flex justify-center items-center text-sm font-semibold text-facebook gap-x-2">
                  <AiFillFacebook size={20} />
                  Login with Facebook
                </a>
                <a href="#" className="text-link text-sm font-semibold flex justify-center">
                  Forgot Password
                </a>
              </Form>
            )}
          </Formik>
        </div>

        <div className="bg-white border  p-4 text-center">
          Dont have any account? <Link to='/auth/register' className=" text-md font-semibold text-brand">Sign-up</Link>
        </div>

        <p className='items-center flex justify-center font-serif text-sm'>Download the app.</p>

        <div className='flex items-center justify-center gap-x-3 py-1'>
          <a href='#' style={{ width: '135px', height: 'auto' }}><img src="https://static.cdninstagram.com/rsrc.php/v3/yp/r/XUCupIzGmzB.png" /></a>
          <a href='#' style={{ width: '110px', height: 'auto' }}><img src="https://static.cdninstagram.com/rsrc.php/v3/yf/r/BFthdeAc5KC.png" /></a>
        </div>
      </div>

    </div>
  )
}
