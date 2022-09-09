import React from 'react'
import { useSwiper } from 'swiper/react';

function Prediction({ handleSubmit, prediction }) {

  const swiper = useSwiper();
  
  return (
    <>
      <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 p-5 rounded-xl">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0 text-white">
              <h3 className="text-lg font-medium leading-6">Personal Information</h3>
              <p className="mt-1 text-sm">Use a permanent address where you can receive mail.</p>
            </div>
          </div>
          <div className="bg-white mt-5 rounded-xl md:col-span-1 md:mt-0 p-5">
            <form onSubmit={(e) => handleSubmit(e, swiper)}>
              <div className='flex flex-col'>
                <div className='font-bold text-5xl font-montserrat mx-auto'>
                  <div className=' text-blue-800'>I.R.R.</div>
                </div>
                <div className='font-bold text-6xl font-montserrat mx-auto my-5'>
                  <div>{ Math.round((parseFloat(prediction) + Number.EPSILON) * 100) / 100 }</div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-left sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Go back
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Prediction