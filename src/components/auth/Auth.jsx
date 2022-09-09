import React from 'react'
import { useSwiper } from 'swiper/react';

function Auth({ handleSubmit, handleChange, formValue }) {

  const swiper = useSwiper();

  return (
    <>
      <div className="w-full max-w-xs">
        <form className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4" onSubmit={(e) => handleSubmit(e, swiper)}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name="username" type="text" placeholder="Username" value={formValue.username} onChange={handleChange}/>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="******************" value={formValue.password} onChange={handleChange}/>
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" for="modelId">
              Model ID
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="modelId" name="modelId" type="text" placeholder="PROF_XGB_TIR" value={formValue.modelId} onChange={handleChange}/>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>
              Auth
            </button>
            {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a> */}
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2022 Dataminds. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default Auth