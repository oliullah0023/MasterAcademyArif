 'use client'
import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";



const Manu = () => {
  const [open, setOpen]= useState(false);
 

  return (
    <div className=''>
      <Image src={open ? '/close.png' : '/open.png'} alt='manu' 
      height={25}
       width={25} 
       onClick={()=> setOpen(!open)}
       className=' font-bold'
      />
      {
        open && (
          <div className=' bg-slate-800 text-white absolute top-[100px] left-0 h-[calc(100vh-6rem)]   w-full'>
            <div className=' flex flex-col  justify-center mt-10 '>
            <Link href={'/'}
            className=' px-5  my-5'>
           <h5 className=' hover:text-red-600 hover:font-semibold uppercase text-white'
           onClick={() => setOpen(!open)}
           >Home</h5>
          </Link>
           {
            navLinks.map((link) =>(
              <div key={link.id}
               className=' flex flex-col gap-5 justify-center items-start group mb-5 px-5 '
              >
             <Link href={link.url}
              className=' flex gap-10 justify-between items-center text-white group'
              
             >
               <h1 className='  text-xl gap-5'
                onClick={() => setOpen(!open)}
               >{link.title}</h1>
               <span className=' group-hover:rotate-180 fill-white transition-all ease-in-out duration-500 font-bold text-white'>
               <IoIosArrowDown />
              </span>
             </Link>
             {
              
              
                <div className=' bg-black text-white hidden group-hover:block'>
                  {
                    link.sublink.map((mySublink)=> (
                      <div key={mySublink.name}>
                        <h5 className=' uppercase border-b border-b-gray-300 hover:bg-red-800 p-2 px-6 transition-all ease-in-out duration-300'
                         onClick={() => setOpen(!open)}
                        >                       <Link href={mySublink.url}>
                           {mySublink.name}
                         </Link>
                         </h5>
  
                      </div>
                    ))
                  }
                </div>
              
            }
             </div>
            ))
           }  
           </div>           
          </div>
        )
      }
    
    </div>
  )
}

export default Manu
