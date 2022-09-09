import React, { useState, useEffect } from "react";
import axios from 'axios';
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
  const [token, setToken] = useState(null);
  const [response, setResponse] = useState(null);
  const [formValue, setformValue] = useState({
    username: "",
    password: "",
    modelId: ""
  });

  const [paramForm, setParamForm] = useState({
    param1: 33,
    param2: 3000,
    param3: 12,
    param4: 5,
    param5: 7,
    param6: 90,
    param7: 3000,
    param8: 4.20,
    param9: 14,
    param10: 214.29,
    param11: 100
  });

  const baseURL = "/api/v1/scoring";

  const handleChange = (e) => {
    switch (currentStep) {
      case 1:
        setformValue({
          ...formValue,
          [e.target.name]: e.target.value
        });

        break;
      case 2:
        setParamForm({
          ...paramForm,
          [e.target.name]: e.target.value
        })
        break;
    }
  }

  const handleSubmit = async (e, swiper) => {
    e.preventDefault();

    const stepsLength = 3

    switch (currentStep) {
      case 1:
        await axios
          .post(`${baseURL}/auth`, {
            usuario: formValue.username,
            clave: formValue.password,
            codigo_modelo: formValue.modelId
          })
          .then((response) => {
            setResponse(response.data);
            setToken(response.data.token);
            if (response.data.codigo == "00") {
              currentStep === stepsLength
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);

              swiper.slideNext()
            }
          });
        break;
      case 2:
        await axios
          .post(`${baseURL}/predict`, {
            numericas: [
              {
                num_antig_socio: paramForm.param3,
                num_cant_creditos: paramForm.param4,
                num_cant_incid_mora: paramForm.param5,
                num_cant_meses: paramForm.param9,
                num_edad: paramForm.param1,
                num_ingreso_mensual: paramForm.param2,
                num_max_dias_atraso: paramForm.param6,
                num_monto_cuota: paramForm.param10,
                num_monto_solic: paramForm.param7,
                num_prome_dias_atraso: null,
                num_tem: paramForm.param8
              }
            ],
            categoricas: [
              {
                cat_estado_civil: null,
                cat_flag_excep_riesgos: null,
                cat_nivel_estudio: null,
                cat_prod_prestamo: paramForm.param11,
                cat_profesion: null,
                cat_sexo: null,
                cat_tipo_vivienda: null
              }
            ]
          }, {
            headers: {
              'Authorization': `bearer ${token}`
            }
          })
          .then((response) => {
            if (response.data.codmensaje == "00") {
              currentStep === stepsLength
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);

              swiper.slideNext()
            }
          });
        break;
      case 3:
        break;
    }
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
                  <Auth handleSubmit={handleSubmit} Button={SwipeButton} handleChange={handleChange} formValue={formValue} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex">
                <div className="mx-auto">
                  <Paramform handleSubmit={handleSubmit} handleChange={handleChange} paramForm={paramForm} />
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