import React from 'react'
import SingleInfo from './SingleInfo'
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactInfo = () => {
  return (
    <div className=' flex flex-col gap-4 text-white'>
        <SingleInfo text= 'annmweru9@gmail.com' Image = {AiOutlineMail} />
        <SingleInfo text= '+254714691909' Image = {FiPhone} />
        <SingleInfo text= 'Ruiru,Nairobi' Image = {HiOutlineLocationMarker} />
    </div>
  )
}

export default ContactInfo