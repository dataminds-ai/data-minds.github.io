import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uchtwie', 'contact_form_dataminds', form.current, '0ATGHAJc3O27MqxEa')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
     form.current.reset()

    props.openModal()
  };

  return (
    <section className="text-black">
      <div className="grid max-w-6xl grid-cols-1 mx-auto md:grid-cols-2 md:divide-x shadow-lg sm:rounded-xl sm:overflow-hidden">
        <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white px-6 lg:px-8 py-6 shadow-inner font-montserrat">
          <h1 className="text-4xl font-bold font-mono text-black my-3">contáctanos.</h1>
          <p className="pt-2 pb-4">Por favor, llene y envíe el siguiente formulario. Nuestro equipo atenderá gustosamente todas sus consultas dentro de las próximas 24 horas.</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>informes@dataminds.pe</span>
            </p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} novalidate="" className="flex flex-col space-y-6 px-6 lg:px-8 py-6 ng-untouched ng-pristine ng-valid bg-white font-montserrat">
          <label className="block">
            <span className="mb-1">Nombre completo</span>
            <input type="text" placeholder="Renato Velásquez" className="block w-full rounded-lg shadow-md p-2" name="name" />
          </label>
          <label className="block">
            <span className="mb-1">Correo</span>
            <input type="email" placeholder="renato.velasquez@miempresa.com" className="block w-full rounded-lg shadow-md p-2" name="email" />
          </label>
          <label className="block">
            <span className="mb-1">Teléfono</span>
            <input type="phone" placeholder="999999999" className="block w-full rounded-lg shadow-md p-2" name="phone" />
          </label>
          <label className="block">
            <span className="mb-1">Mensaje</span>
            <textarea placeholder="Qué tal! Necesito más información sobre sus soluciones tecnológicas, precios..." rows="6" className="block w-full rounded-lg shadow-md p-2" name="message"></textarea>
          </label>
          <button type="submit" className="self-center px-8 py-3 text-lg rounded-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white font-bold hover:from-blue-600 hover:via-blue-400 hover:to-blue-200 hover:text-black hover:font-bold">Enviar</button>
        </form>
      </div>
      {/* <div className="py-96">

            </div> */}
    </section>
  )
}