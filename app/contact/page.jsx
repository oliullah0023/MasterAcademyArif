import Image from 'next/image'
import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'

const ContactPge = () => {
  return (
    <div className=' flex flex-col md:flex-row md:justify-between md:items-center gap-8 px-10 md:px-28 py-20 '>
      <div className=' flex flex-col justify-center items-center text-center border border-amber-800 p-6'>
        <div className=' text-amber-700 text-4xl text-center '>
        <HiLocationMarker  />
        </div>
        <h1 className=' text-4xl text-amber-700 font-bold'>Mirpur</h1>

        <p className=' text-xl text-amber-700'>Munshi Bari</p>
        <p>Kalsi Road, Mirpur-12</p>
        <p>Block#E, Road#7, House#3</p>
        <p>Mirpur, Dhaka</p>
        <div className=' flex gap-2'> 
          <BsFillTelephoneFill />
        <p>01790724256</p>
        </div>
      </div>
      <div className='border border-gray-400 p-4 group hover:shadow-2xl'>
        <p className=' font-semibold'>#ফ্রি লেকচার এবং JOB/ admission update <br />পেতে নিচের লিংকে ক্লিক করে জয়েন করুনঃ<br />
        
       </p>
       <p><a href="https://www.facebook.com/groups/arifsmbaadmission"
         className=' group-hover:underline hover:text-green-600'
        >https://www.facebook.com/groups/arifsmbaadmission</a></p> <br /> 

        <p><a href="https://www.youtube.com/@MASTERACADEMY_arif"
         className=' group-hover:underline hover:text-green-600'
        >https://www.youtube.com/@MASTERACADEMY_arif</a></p>
      </div>
      <div>
        <Image src='/contact.png' alt='' width={600} height={500} />
      </div>
    </div>
  )
}

export default ContactPge
