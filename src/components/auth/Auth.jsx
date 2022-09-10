import React from 'react'
import { useSwiper } from 'swiper/react';

function Auth({ handleSubmit, handleChange, formValue, clicked }) {

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
                <button className={`flex bg-gray-800 ${!clicked?"hover:bg-blue-700":""} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type='submit' disabled={clicked}>
                  <svg aria-hidden="true" className={`${!clicked?"hidden":""} mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className={`${!clicked?"":"hidden"}`}>Auth</span>
                  <span className={`${!clicked?"hidden":""}`}>Processing...</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div >
      <p className="text-center text-gray-500 text-xs my-4">
        &copy;2022 Dataminds. All rights reserved.
      </p>
    </>
  )
}

export default Auth