import React, { useState } from "react"
import { useTransition, animated, config } from "react-spring"
import "@fontsource/jetbrains-mono"

const navigation = [
  { name: 'Soluciones', href: '#' },
  { name: 'Equipo', href: '#' },
  { name: 'Nosotros', href: '#' },
  { name: 'Contáctanos', href: '#' },
]

export default function Hero() {
  const [appearTitle, setAppearTitle] = useState(true)
  const [miliseconds, setMiliseconds] = useState(500)
  const transition = useTransition(appearTitle, {
    // from: { x: -100, y: 800, opacity: 0 },
    // enter: { x: 0, y: 0, opacity: 1 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: {},
    delay: miliseconds,
    config: config.molasses,
  })

  const transition_2 = useTransition(appearTitle, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: {},
    delay: 1200,
    config: config.molasses,
  })

  const transition_3 = useTransition(appearTitle, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: {},
    delay: 2000,
    config: config.molasses,
  })

  return (
    <div className="relative bg-black overflow-hidden h-full" id="home">
      <div className="max-w-7xl mx-auto h-full">
        <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl h-full lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  {transition((styles, item) => item ?
                    <animated.div style={styles}>
                      <span className="block xl:inline font-mono text-white">el Futuro</span>{' '}<br />
                    </animated.div> : ""
                  )}
                  {transition_2((styles, item) => item ?
                    <animated.div style={styles}>
                      <span className="block text-blue-600 xl:inline font-mono">está en tus Datos</span>
                    </animated.div> : ""
                  )}
                </h1>
                {transition_3((styles, item) => item ?
                  <animated.div style={styles}>
                    <p className="mt-3 text-base text-white font-montserrat sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      En <a class="underline decoration-blue-600">Dataminds</a> combinamos ciencia de datos, mejores prácticas y tecnología para la construcción de sistemas de puntuación capaces de predecir el futuro.
                      {/* <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-700 relative inline-block mx-2">
                                                <span class="relative text-white">Dataminds</span>
                                            </span>  */}
                    </p>
                  </animated.div> : ""
                )}
                {transition_3((styles, item) => item ?
                  <animated.div style={styles} className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="shadow">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold font-montserrat rounded-full text-white bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 md:py-4 md:text-lg md:px-10 hover:from-blue-600 hover:via-blue-400 hover:to-blue-200 hover:text-black hover:font-bold"
                      >
                        Comenzar
                      </a>
                    </div>
                  </animated.div> : ""
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full shadow-inner">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  )
}