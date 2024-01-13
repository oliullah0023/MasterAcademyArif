import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


const Hero = () => {
  return (
    <div className=' overflow-hidden '>
      <div className='  h-auto  '>
      <Image src={'/hero5.png'} alt='classroom' 
        width={1500} height={500}
        className=' object-cover'
      />
      </div>
      <div className=' w-full bg-cover md:h-[130px] h-[120px]'
       style={{backgroundImage:`url(hero3.jpg)`}}
      >
        <div className=' mx-10 ml-40
         md:mx-24 flex flex-col md:ml-80 md:flex-row justify-center items-center gap-2'>
         <div className=' mt-4 '>
          <h1 className=' md:border-none text-white border border-white text-xl md:text-3xl  '>Education</h1>
          <p className=' hidden md:flex text-base text-white mt-2'>Unlocking door to success: Master Academy works untill you succeed</p>
          <div className=' hidden  md:flex py-1 group '>
            <Link href={'enroll'}
             className=' flex gap-2'
            >
            <Image src={'/arrowr1.png'} alt='' width={20} height={20}
             className=' bg-white p-[2px] rounded-full font-bold '
            />
            <p className=' text-white uppercase group-hover:text-green-300 '>Admission Online</p>
            </Link>
          </div>
         </div>
         <span className=' hidden md:block h-24 w-[2px] bg-red-500 mt-4'/>
         <div className=' '>
          <h1 className=' md:border-none text-white text-xl border  border-white md:text-3xl'>Free class or Counselling class</h1>
          <p className=' text-white text-base hidden md:flex mt-2'>Take free class to evaluate </p>
          <div className=' hidden  md:flex py-1  group'>
            <Link href={'enroll'}
             className=' flex gap-2'
            >
            <Image src={'/arrowr1.png'} alt='' width={20} height={20}
             className=' bg-white p-[2px] rounded-full font-bold'
            />
            <p className=' text-white uppercase group-hover:text-green-400 '>Admission Online</p>
            </Link>
          </div>
         </div>
         </div>
      </div>
    </div>
  )
}

export default Hero
