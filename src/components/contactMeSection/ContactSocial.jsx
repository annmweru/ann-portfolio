import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className=' flex gap-4'>
      <SingleContactSocial link= 'https://www.linkedin.com/in/annahmweru/' Icon={FaLinkedin} />
      <SingleContactSocial link= 'https://github.com/annmweru' Icon={FaGithub} />
      <SingleContactSocial link= '#' Icon={FaInstagram} />
    </div>
  )
}

export default ContactSocial