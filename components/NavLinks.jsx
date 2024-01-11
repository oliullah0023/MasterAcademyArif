import { navLinks } from '@/constants'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const NavLinks = () => {
  return (
    <>
      {
        navLinks.map((link) => (
          <div key={link.id}
           className=' flex flex-row gap-5 group'
          >
            <Link href={link.url}
            >
            <h1 className=' flex-row uppercase text-white justify-between flex gap-1 items-center md:pr-0 pr-5 hover:text-red-600 hover:font-semibold group'
             
            >
             
              {link.title}

            <span className='  md:block text-white group-hover:rotate-180 transition-all ease-in-out duration-500 font-bold'>
              <Image src={'/arrowd.png'} alt='' height={15} width={15} />
              </span>
            </h1>
            </Link> 
            {
              <div
              className=' absolute top-24 hidden group-hover:md:block hover:md:block z-50'
              >
                <div className=' bg-black text-white'>
                  {
                    link.sublink.map((mySublink)=> (
                      <div key={mySublink.name}>
                        <h5 className=' uppercase border-b border-b-gray-300 hover:bg-red-800 p-2 px-6 transition-all ease-in-out duration-300'>                       <Link href={mySublink.url}>
                           {mySublink.name}
                         </Link>
                         </h5>
  
                      </div>
                    ))
                  }
                </div>
              </div>
            }
          </div>
        ))
      }
    </>
  )
}

export default NavLinks
