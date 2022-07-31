export default function Contact() {
    return (
        <section className="py-6 text-black font-mono" id="contactanos">
            <div className="grid max-w-6xl grid-cols-1 mx-auto md:grid-cols-2 md:divide-x shadow-lg sm:rounded-xl sm:overflow-hidden">
                <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white px-6 lg:px-8 py-6 shadow-inner">
                    <h1 className="text-4xl font-bold font-mono text-black my-3">contáctanos.</h1>
                    <p className="pt-2 pb-4">Por favor, llene y envíe el siguiente formulario. Nuestro equipo atenderá gustosamente todas sus consultas dentro de las próximas 24 horas.</p>
                    <div className="space-y-4">
                        {/* <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Grana 132, San Borja, Lima</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>123456789</span>
                        </p> */}
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>informes@dataminds.pe</span>
                        </p>
                    </div>
                </div>
                <form novalidate="" className="flex flex-col space-y-6 px-6 lg:px-8 py-6 ng-untouched ng-pristine ng-valid bg-white">
                    <label className="block">
                        <span className="mb-1">Nombre completo</span>
                        <input type="text" placeholder="Renato Velásquez" className="block w-full rounded-lg shadow-md p-2" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Correo</span>
                        <input type="email" placeholder="renato.velasquez@miempresa.com" className="block w-full rounded-lg shadow-md p-2" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Teléfono</span>
                        <input type="phone" placeholder="999999999" className="block w-full rounded-lg shadow-md p-2" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Mensaje</span>
                        <textarea placeholder="Qué tal! Necesito más información sobre sus soluciones tecnológicas, precios..." rows="3" className="block w-full rounded-lg shadow-md p-2"></textarea>
                    </label>
                    <button type="button" className="self-center px-8 py-3 text-lg rounded-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white hover:bg-blue-600 font-medium">Enviar</button>
                </form>
            </div>
            {/* <div className="py-96">

            </div> */}
        </section>
    )
}