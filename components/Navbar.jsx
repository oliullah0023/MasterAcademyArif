'use client'
import Image from 'next/image'
import Link from 'next/link'
import Manu from './Manu';
import NavLinks from './NavLinks';



const Navbar = () => {


  return (
    <div className=' h-20  bg-red-800  w-full bg-cover   border-b-[1px] border-b-red-800 '
    style={{backgroundImage:`url(nav1.jpg)`}}
    >
      <div className=' p-6 md:px-20 lg:px-40 flex justify-between gap-5'>
        <Link href={'/'}>
        <Image src={'/logo1.png'} alt='' width={120} height={120} />
        </Link>
        <div className=' hidden md:flex flex-row gap-5'>
         <Link href={'/'}>
           <h5 className=' hover:text-red-600 hover:font-semibold uppercase text-white'>Home</h5>
         </Link>
         <NavLinks />
         </div>

        
        {/* Mobile Navbar */}
        <div className=' md:hidden z-50'>
          
           <Manu />
        </div>
      </div>
     
    </div>
  )
}

export default Navbar
