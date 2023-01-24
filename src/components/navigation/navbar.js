import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link as LinkScroll, animateScroll } from "react-scroll";
import "../../styles/Navbar.css"
// import dataMindsImagotipoBlanco from "../../images/ImagotipoBesterpSinBG.png"
import dataMindsImagotipoBlanco from "../../images/BesterpLogoCircular.png"

import {
    faHome,
    faBars,
    faTimes,
    faPeopleGroup,
    faMicrochip,
    faDiagramProject,
    faPhone,
} from "@fortawesome/free-solid-svg-icons"

// import Avatar from "../components/Avatar"

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    const scrollToTop = () => {
        animateScroll.scrollToTop()
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={`flex items-center px-6 py-2 justify-between sticky top-0 z-50 ${color ? "bg-gradient-to-r from-red-900 via-red-700 to-red-500 shadow-xl" : "bg-blue-900"}`}>
            <div className="flex justify-start lg:w-0 lg:flex-1">
                <a className="flex-1">
                    <img
                        //src={require("../../images/dataMinds_imagotipo_blanco.png")}
                        src={dataMindsImagotipoBlanco}
                        className="h-16 w-auto sm:h-20"
                    />
                </a>
            </div>
            <div className="flex-none hidden md:flex md:justify-center md:h-full text-white font-semibold md:text-md lg:text-lg">
                <LinkScroll to="home" offset={-250} smooth={true} spy={true} className={`h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out ${color ? "hover:text-black" :"hover:text-red-500"}`}>
                    <FontAwesomeIcon icon={faHome} className="mr-3" />Inicio
                </LinkScroll>
                <LinkScroll to="soluciones" offset={-20} spy={true} smooth={true} duration={500} className={`h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out ${color ? "hover:text-black" : "hover:text-red-500"}`}>
                    <FontAwesomeIcon icon={faMicrochip} className="mr-3" /> Soluciones
                </LinkScroll>
                <LinkScroll to="metodologia" spy={true} smooth={true} duration={500} className={`h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out ${color ? "hover:text-black" : "hover:text-red-500"}`}>
                    <FontAwesomeIcon icon={faDiagramProject} className="mr-3" /> Metodología
                </LinkScroll>
                <LinkScroll to="contactanos" offset={20} spy={true} smooth={true} duration={500} className={`h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out ${color ? "hover:text-black" : "hover:text-red-500"}`}>
                    <FontAwesomeIcon icon={faPhone} className="mr-3" /> Contáctanos
                </LinkScroll>
                {/* <LinkScroll to="nosotros" spy={true} smooth={true} duration={500} className={`h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out ${color ? "hover:text-black" : "hover:text-blue-500"}`}>
                    <FontAwesomeIcon icon={faPeopleGroup} className="mr-3" /> Nosotros
                </LinkScroll> */}
            </div>
            <div className="flex-1 items-center justify-end hidden md:flex">
                {/* <Avatar
                    image="https://gustui.s3.amazonaws.com/avatar.png"
                    className="cursor-pointer my-2"
                    /> */}
            </div>
            <FontAwesomeIcon
                icon={mobileOpen ? faTimes : faBars}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-white text-3xl cursor-pointer md:hidden"
            />
            {mobileOpen && (
                <div className="absolute top-full left-0 p-2 w-full flex flex-col py-2 shadow-sm lg:hidden">
                    {/* <div className="absolute top-full right-0 p-2 flex flex-col py-2 shadow-sm lg:hidden"> */}
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="flex-1 flex flex-col items-center text-xl">
                            <LinkScroll to="home" offset={-100} smooth={true} spy={true}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="no-underline px-2 my-2 font-medium hover:text-blue-700"
                            >
                                <FontAwesomeIcon icon={faHome} className="mr-3" /> Home
                            </LinkScroll>
                            <LinkScroll to="soluciones" smooth={true} spy={true}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="no-underline px-2 py-1 my-2 font-medium hover:text-blue-700"
                            >
                                <FontAwesomeIcon icon={faMicrochip} className="mr-3" /> Soluciones
                            </LinkScroll>
                            <LinkScroll to="metodologia" smooth={true} spy={true}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="no-underline px-2 my-2 font-medium hover:text-blue-700"
                            >
                                <FontAwesomeIcon icon={faDiagramProject} className="mr-3" /> Metodología
                            </LinkScroll>
                            <LinkScroll to="contactanos" offset={20} smooth={true} spy={true}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="no-underline px-2 my-2 font-medium hover:text-blue-700"
                            >
                                <FontAwesomeIcon icon={faPhone} className="mr-3" /> Contáctanos
                            </LinkScroll>
                            {/* <LinkScroll to="nosotros" smooth={true} spy={true}
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="no-underline px-2 my-2 font-medium hover:text-blue-700"
                            >
                                <FontAwesomeIcon icon={faPeopleGroup} className="mr-3" /> Nosotros
                            </LinkScroll> */}
                            {/* <Avatar
                            image="https://gustui.s3.amazonaws.com/avatar.png"
                            status="online"
                            className="cursor-pointer my-2"
                            /> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar