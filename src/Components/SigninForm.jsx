import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
export default function SignupForm() {
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: Yup.object({

      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required')
        .min(10, 'Must be at least 10 characters ')
        .matches(/[A-Z]/, 'password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'password must contain at least one lowerercase letter')
        .matches(/[0-9]/, 'password must contain at least one number')
        .matches(/[!@#$%^&*()]/, 'password must contain at least one speacial charachters')

    }),
    onSubmit: values => {
      const url = new URL('https://66c36797d057009ee9c02bc9.mockapi.io/mypanel');
      url.searchParams.append('password', values.password);
      url.searchParams.append('email', values.email);

      fetch(url, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }).then(res => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      }).then(tasks => {
        // mockapi returns only tasks that match `hello` string
        if (tasks == undefined) {
          console.log(tasks);
          alert('User not found :( Invalid email or password !!')
        } else {
          alert('Your Account is Ready !!! Welcome')
          window.location.href = 'Pages/Mainpage/Defult';
        }

      }).catch(error => {

        console.log(error);
      })

    },
  })

  return (
    <form className='flex w-full flex-wrap justify-center' onSubmit={formik.handleSubmit}>
      <div className='w-[80%] bg-[#161678b7] rounded-xl  mt-4'>
        <p className='w-full text-[#bcd5f5] text-sm pt-3 pb-3 px-3 font-semibold'>Email: admin@gmail.com / Pass: Admin5050#</p>
      </div>
      <label htmlFor="email" className='text-white w-[80%] font-semibold mt-3'>Email</label>
      <input
        className='p-2 rounded-xl outline-[#6c7f97] text-white w-[80%] mt-2 bg-inherit border-[2px] border-[#3b3b6684] placeholder-[#3f4068c1]' placeholder='Your email...'
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className='w-[80%] text-[#6c7f97] mt-1'>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password" className='text-white font-semibold w-[80%] mt-4'>Password</label>
      <input
        className='p-2 rounded-xl w-[80%] outline-[#6c7f97] mt-2 bg-inherit  text-white  border-[2px] border-[#404064c1] placeholder-[#38384fc1]' placeholder='Your email...'
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className='w-[80%] text-[#6c7f97] mt-1'>{formik.errors.password}</div>
      ) : null}


      <div className='w-[80%] hover:scale-[1.03] transition-all duration-200 flex justify-center  p-2 mt-0 items-center text-white ' ><button type="submit" className='bg-[#1f1462] rounded-sm flex justify-center items-center mt-6 w-full p-2 font-mono'>Sign in</button></div>
    </form>
  );
};
