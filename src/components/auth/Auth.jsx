import React from 'react'
import { useSwiper } from 'swiper/react';

function Auth({ handleSubmit, handleChange, formValue }) {

  const swiper = useSwiper();

  return (
    <>
      <div className="bg-gradient-to-r w-4/5 sm:w-3/4 lg:w-2/4 mx-auto from-blue-800 via-blue-600 to-blue-400 p-5 rounded-xl">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="md:relative first:md:col-span-1">
            <div className="px-4 sm:px-0 text-white">
              <h3 className="text-lg font-medium leading-6">Authentication</h3>
              <div className='py-2'>
                <p className="mt-1 text-sm">Please use the following credentials to authenticate and start testing one of our Machine Learning Model as a Service (MLMaaS) solutions: Profit Scoring Model.</p>
              </div>
              <p className="mt-1 text-sm">Username: admin</p>
              <p className="mt-1 text-sm">Password: admin</p>
              <p className="mt-1 text-sm">Model ID: PROF_XGB_TIR</p>
              <div className='md:absolute inset-x-0 bottom-0 py-2'>
                <div className=''>
                  <p className="mt-1 text-sm">Note: This demo is a simulation of the procedure that would be performed through APIs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mt-5 shadow-xl rounded-xl md:col-span-1 md:mt-0 p-5">
            <form onSubmit={(e) => handleSubmit(e, swiper)}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" for="username">
                  Username
                </label>
                <input className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder="Username" value={formValue.username} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" for="password">
                  Password
                </label>
                <input className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******************" value={formValue.password} onChange={handleChange} />
                {/* <p className="text-red<-500 text-xs italic">Please choose a password.</p> */}
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2" for="modelId">
                  Model ID
                </label>
                <input className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="modelId" name="modelId" type="text" placeholder="PROF_XGB_TIR" value={formValue.modelId} onChange={handleChange} />
              </div>
              <div className="flex items-center justify-center">
                <button className="bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
                  Auth
                </button>
                {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs my-4">
        &copy;2022 Dataminds. All rights reserved.
      </p>
    </>
  )
}

export default Auth