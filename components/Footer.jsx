import Link from 'next/link'
import {FaFacebookF} from 'react-icons/fa'
import { IoLogoYoutube } from "react-icons/io";

import ImportantLinks from './ImportantLinks'

const Footer = () => {
  return (

    <footer className=' '>
      <ImportantLinks />
    <div className=' bg-black p-8 flex justify-between items-center px-10 md:px-28'>
      <div className=' text-white'>
        <h5>Copyrights &#169; 2014-2023 All rights reserved by <span className=' text-red-600 font-bold'>Master Academy</span></h5>
      </div>
      <div className=' flex gap-2'>
      <div className=' text-white bg-red-500 rounded-full p-2'>
        <Link href='https://www.facebook.com/masteracademybd?mibextid=ZbWKwL'>
       <FaFacebookF />
       </Link>
       </div>

       <div className=' text-white bg-red-500 rounded-full p-2'>
        <Link href='https://www.youtube.com/@MASTERACADEMY_arif'>
        <IoLogoYoutube />
       </Link>
       </div>

       

       
      </div>
    </div>
    </footer>
  )
}

export default Footer
