import Contact from "../components/contact/contact";
import { useState } from 'react'
import MyModal from "../components/contact/modal";

export default function GetContact() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div id="contactanos" className=" py-32 h-full">
      <Contact openModal={ openModal } />
      <MyModal closeModal={ closeModal } isOpen={ isOpen }/>
    </div>
  )
}