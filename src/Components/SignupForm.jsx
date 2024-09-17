import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import { FaRegUser } from "react-icons/fa6"
import { FiPhone } from "react-icons/fi"
import { GoMail } from "react-icons/go"
import { FiLock } from "react-icons/fi"
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
export default function SignupForm() {
  const showic = useRef()
  const showpassinfo = useRef()
  const [showpass, setShowpass] = useState(true)
  const [showconfirmpass, setShowconfirmpass] = useState(true)
  const formik = useFormik({
    initialValues: {
      firstName: '',
      Phonenumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({

      email: Yup.string().email('Invalid email address').required('Please Enter your Email address'),
      password: Yup.string()
        .required('Password is required!')
        .min(10, 'Must be at least 10 characters ')
        .matches(/[A-Z]/, 'password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'password must contain at least one lowerercase letter')
        .matches(/[0-9]/, 'password must contain at least one number')
        .matches(/[!@#$%^&*()]/, 'password must contain at least one speacial charachters')
        .test('no-persian', 'Persian characters are not allowed', value => {
          const persianRegex = /[\u0600-\u06FF]/;
          return !persianRegex.test(value);
        })
      ,
      firstName: Yup.string()
        .test('no-persian', 'Persian characters are not allowed', value => {
          const persianRegex = /[\u0600-\u06FF]/;
          return !persianRegex.test(value);
        })
        .max(20, 'Must be 20 characters or less')
        .min(2, 'Must be 2 characters or more')
        .required('Required')
        .test('no-empty', 'Field cannot be empty', value => {
          return value && value.trim().length > 0;
        }),
      Phonenumber: Yup.string()
        .matches(/^0/, 'Phone number must start with 0')
        .matches(/^[0-9]{11}$/, 'Phone number must be exactly 11 digits')
        .required('Required')
        .test('no-persian', 'Persian characters are not allowed', value => {
          const persianRegex = /[\u0600-\u06FF]/;
          return !persianRegex.test(value);


        }),


      confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .min(10, 'Must be at least 10 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*()]/, 'Password must contain at least one special character')
        .test('no-persian', 'Persian characters are not allowed', value => {
          const persianRegex = /[\u0600-\u06FF]/;
          return !persianRegex.test(value);
        })

    }),


    onSubmit: values => {

      fetch('https://66c36797d057009ee9c02bc9.mockapi.io/mypanel', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        // Send your data in the request body as JSON
        body: JSON.stringify(values)
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      }).then(task => {
        alert('Your registration was successful');
        window.location.href = '/';
        // do something with the new task
      }).catch(error => {
        // handle error
      })
    },
  });

  // save to database 
  // function regPost() {
  // const newTask = {
  //   firstName: formik.values.firstName,
  //   phoneNumber: formik.values.Phonenumber,
  //   email: formik.values.email,
  //   password: formik.values.password,
  //   confirmPassword: formik.values.confirmPassword
  // };

  // fetch('https://66c36797d057009ee9c02bc9.mockapi.io/adminpanel', {
  //   method: 'POST',
  //   headers: { 'content-type': 'application/json' },
  //   // Send your data in the request body as JSON
  //   body: JSON.stringify(newTask)
  // }).then(res => {
  //   if (res.ok) {
  //     return res.json();
  //   }
  //   // handle error
  // }).then(task => {
  //   alert('ثبت نام شما با موفقیت انجام شد');
  //   window.location.href = '/';
  //   // do something with the new task
  // }).catch(error => {
  //   // handle error
  // })
  // }
  // save to database 
  const show = () => {
    if (showpass) {
      showic.current.children[0].style.display = 'flex'
      showic.current.children[1].style.display = 'none'
    }
    else {
      showic.current.children[0].style.display = 'none'
      showic.current.children[1].style.display = 'flex'
    }
    setShowpass(!showpass)
   
  }
  
  const showpassin= () => {
    if (showconfirmpass) {
      showpassinfo.current.children[0].style.display = 'flex'
      showpassinfo.current.children[1].style.display = 'none'
    }
    else {
      showpassinfo.current.children[0].style.display = 'none'
      showpassinfo.current.children[1].style.display = 'flex'
    }
   
    setShowconfirmpass(!showconfirmpass)
  }
  return (
    <form onSubmit={formik.handleSubmit} className='lg:w-[36%] sm:w-[60%] md:w-[45%] w-[79%] *:w-full z-10 rounded-md bg-white p-14 shadow-slate-500 shadow-md'>
      <h1 className='text-center text-2xl mt-3'>NEW ACCOUNT ?</h1>
      <div className='mt-7 flex flex-wrap items-center border-b-[1px] border-b-[#dfd9d9c1] p-1'>
        <span className='w-[15%] text-[#a4a3a3]'><FaRegUser /></span>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className='w-[85%] bg-inherit outline-none ' placeholder='Username' />
      </div>

      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <div className='mt-5 flex flex-wrap items-center border-b-[1px] border-b-[#dfd9d9c1] p-1'>
        <span className='w-[15%] text-[#a4a3a3]'><FiPhone /></span>
        <input
          id="Phonenumber"
          name="Phonenumber"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Phonenumber}
          className='w-[85%] bg-inherit outline-none ' placeholder='Phone number' /></div>

      {formik.touched.Phonenumber && formik.errors.Phonenumber ? (
        <div>{formik.errors.Phonenumber}</div>
      ) : null}

      <div className='mt-5 flex flex-wrap items-center border-b-[1px] border-b-[#dfd9d9c1] p-1'>
        <span className='w-[15%] text-[#a4a3a3]'><GoMail /></span>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className='w-[85%] bg-inherit outline-none ' placeholder='Mail' /></div>

      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <div className='mt-5 flex flex-wrap items-center border-b-[1px] border-b-[#dfd9d9c1] p-1'>
        <span className='w-[15%] text-[#a4a3a3]'><FiLock /></span>
        <input
          id="password"
          name="password"
          type={showpass ? "password" : "text"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className='w-[75%] bg-inherit outline-none ' placeholder='Password' />
        <div onClick={show} ref={showic} className='w-[10%] *:absolute  relative flex justify-center cursor-pointer items-center'>
          <span className='w-full hidden justify-center items-center'><FaEye className='text-[#a4a3a3]' /></span>
          <span className='flex justify-center items-center w-full'>< FaRegEyeSlash className='text-[#a4a3a3]' /></span>

        </div>
      </div>
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}

      <div className='mt-5 flex flex-wrap items-center border-b-[1px] border-b-[#dfd9d9c1] p-1'>
        <span className='w-[15%] text-[#a4a3a3]'><FiLock /></span>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type={showconfirmpass ? "password" : "text"}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className='w-[75%] bg-inherit outline-none ' placeholder='confirm Password' />
        <div onClick={showpassin} ref={showpassinfo} className='w-[10%] *:absolute  relative flex justify-center cursor-pointer items-center'>
          <span className='w-full hidden justify-center items-center'><FaEye className='text-[#a4a3a3]' /></span>
          <span className='flex justify-center items-center w-full'>< FaRegEyeSlash className='text-[#a4a3a3]' /></span>

        </div>
      </div>
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div>{formik.errors.confirmPassword}</div>
      ) : null}

      <div className=' text-white w-full' ><button type="submit" className='bg-[#1f1462] rounded-sm flex justify-center items-center mt-12 w-full border p-2 font-mono'>REGISTER</button></div>
      <p className='w-full text-center text-[#040947] mt-7 mb-2'>Already have an account? <Link className='m-1 font-bold' href='/'>Sign in</Link></p>

    </form>
  );
};

