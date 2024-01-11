import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ImportantLinks = () => {
  return (
    <div className=' bg-red-500 flex flex-col  justify-center items-center px-10 md:px-28 py-4 '>
      <div className=' flex flex-col md:flex-row md:justify-between  md:gap-52 '>
     <div className=' cursor-pointer'>
      <h1 className=' text-white font-bold text-xl mb-1 mt-3'>Usefull Links</h1>
      
      <p>Publications</p>
      <Link href={'success'}>
      <p>Videos</p>
      </Link>
      <Link href={'blog'}>
      <p>Blogs</p>
      </Link>
      <p>Testimonials</p>
     </div>

     <div>
      <h1 className=' text-white font-bold text-xl mb-1 mt-3'>Contact</h1>
      <Link href='contact'>
      <p>Contact Us</p></Link>
      <Link href='contact' >
      <p>Fees</p></Link>
      <Link href='privacy' >
      <p>Privacy policy</p></Link>
      <Link href='contact' >
      <p>Sitemap</p></Link>
      
     </div>

     <div>
      <h1 className=' text-white font-bold text-xl mb-1 mt-3'>Usefull Links</h1>
      <Link href={'hire'}>
      <p>Hire/Career</p>
      </Link>
      <p>Feedback</p>
      <p>Rules and regulations</p>
      </div>
     </div>

     <div className=' bg-white flex max-w-[550] justify-between px-6 p-2 w-[350px] md:w-[550px]  my-8'>
       <Link href={'https://www.s2ibd.com/'}>
       <Image src={'/s2ibd.png'} alt='' height={25} width={25} />
       </Link>
        
       <Link href={'https://www.s2ibd.com/'}>
       <Image src={'/logo2.png'} alt='' height={20} width={25} />
       </Link>
     </div>
     
    </div>
  )
}

export default ImportantLinks
