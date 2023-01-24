import React, { useState } from "react"
import { useTransition, animated, config } from "react-spring"
import { Link as LinkScroll } from "react-scroll";
import "@fontsource/jetbrains-mono"
import financeConsultancy from "../../images/finance_consultancy.jpg"

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
    <div className="relative bg-blue-900 overflow-hidden h-full" id="home">
      <div className="max-w-7xl mx-auto h-full">
        <div className="relative z-10 pb-8 bg-blue-900 sm:pb-16 md:pb-20 lg:max-w-2xl h-full lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" style={{fill:"#1E3A8A"}}/>
          </svg>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  {transition((styles, item) => item ?
                    <animated.div style={styles}>
                      <span className="block xl:inline text-white">Empoderando la</span>{' '}<br />
                    </animated.div> : ""
                  )}
                  {transition_2((styles, item) => item ?
                    <animated.div style={styles}>
                      <span className="block text-white xl:inline">Cooperación con Tecnología</span>
                    </animated.div> : ""
                  )}
                </h1>
                {transition_3((styles, item) => item ?
                  <animated.div style={styles}>
                    <p className="mt-3 text-base text-white font-montserrat sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0">
                      Somos la consultora líder en el sector cooperativo peruano con más de 10 años siendo partícipes de la democratización de tecnologías de vanguardia en instituciones microfinancieras.
                    </p>
                  </animated.div> : ""
                )}
                {transition_3((styles, item) => item ?
                  <animated.div style={styles} className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="shadow">
                      <LinkScroll to="soluciones" activeClass="active-white" offset={20} spy={true} smooth={true} duration={500}>
                        <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold font-montserrat rounded-full text-white bg-gradient-to-r from-red-800 via-red-600 to-red-400 md:py-4 md:text-lg md:px-10 hover:from-red-600 hover:via-red-400 hover:to-red-200 hover:text-black hover:font-bold">
                          Conocer más
                        </a>
                      </LinkScroll>
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
          src={financeConsultancy}
          alt=""
        />
      </div>
    </div>
  )
}