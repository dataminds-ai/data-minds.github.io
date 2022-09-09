import React from 'react'
import { useSwiper } from 'swiper/react';

function Prediction({ handleSubmit, prediction }) {

  const swiper = useSwiper();

  return (
    <>
      <div className="bg-gradient-to-r w-4/5 sm:w-3/4 lg:w-1/2 mx-auto from-blue-800 via-blue-600 to-blue-400 p-5 rounded-xl">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 text-white">
              <h3 className="text-lg font-medium leading-6">Prediction</h3>
              <p className="mt-1 text-sm py-2">Hooray! Now you know the internal rate of return on the loan. How does it feel to be able to read the future?</p>
              <p className='mt-1 text-sm py-2'>  Contact us at <b>informes@dataminds.pe</b> and remember that <b>the future lies in your data</b>. </p>
            </div>
          </div>
          <div className="bg-white mt-5 shadow-xl rounded-xl md:col-span-1 md:mt-0 p-5">
            <form onSubmit={(e) => handleSubmit(e, swiper)}>
              <div className='flex flex-col'>
                <div className='font-bold text-5xl font-montserrat mx-auto'>
                  <div className=' text-gray-900'>I.R.R.</div>
                </div>
                <div className='font-bold text-6xl font-montserrat mx-auto my-5 text-blue-700'>
                  <div>{Math.round((parseFloat(prediction) + Number.EPSILON) * 100) / 100}</div>
                </div>
                <div className="bg-gray-50 mt-3 text-left">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Go back
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs mt-4">
        &copy;2022 Dataminds. All rights reserved.
      </p>
    </>
  )
}

export default Prediction