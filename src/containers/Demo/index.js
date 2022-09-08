import React, { useState } from "react";
import Auth from '../../components/auth/Auth'
import Stepper from '../../components/stepper/Stepper'
import SwipeButton from './SwipeButton'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css"
import "swiper/css/effect-coverflow"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Paramform from "./ParamForm";
// import '../../styles/swiper.css'

function Demo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const swiper = useSwiper();

  function handleSubmit(stepsLength) {
    stepsLength.preventDefault();
    currentStep === stepsLength
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
    swiper.slideNext()
  }

  return (
    <>
      <div className='flex flex-col h-screen'>
        <div className='mx-auto mt-20'>
          <Stepper currentStep={currentStep} complete={complete} />
        </div>
        <div className='w-auto mt-10'>
          <Swiper
            allowTouchMove={false}
            autoHeight={true}>
            <SwiperSlide>
              <div className="flex">
                <div className="mx-auto">
                  <Auth handleSubmit={handleSubmit} Button={SwipeButton} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="mx-auto">
                  <Paramform />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mx-auto">
                Slide 3
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full">
                Slide 4
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <Auth handleClick={handleClick} currentStep={currentStep} complete={complete} /> */}
        </div>
      </div>
    </>
  )
}

export default Demo