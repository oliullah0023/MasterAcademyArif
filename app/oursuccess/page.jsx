import EnrollButton from '@/components/EnrollButton'
import JoinUsLink from '@/components/JoinUsLink'
import Testimonials from '@/components/Testimonials'
import Video from '@/components/Video'
import VideoLong from '@/components/VideoLong'
import {  ourSuccessBibm, ourSuccessEmba, ourSuccessIba } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Oursuccess = () => {
  return (
    <div className=' p-6 '>
      <div>
        <VideoLong />
        <Video />
        <Testimonials />
      </div>
      <div className=' md:px-20 lg:px-40'>
      <h1 className=' text-center py-5 text-xl md:text-2xl lg:text-3xl font-bold  bg-yellow-600 my-5  max-w-[550]'>Our IBA MBA success Stories </h1>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 justify-center place-items-center '>
        {
          ourSuccessIba.map((success)=> (
            <div key={success.id}>
              <Image src={success.img} alt='success' height={500} width={600} />
            </div>
          ) )
        }
      </div>

      <h1 className=' text-center py-5 text-xl md:text-2xl lg:text-3xl font-bold  bg-yellow-600 my-5  max-w-[550]'>Our BIBM success Stories </h1>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 justify-center place-items-center '>
        {
          ourSuccessBibm.map((success)=> (
            <div key={success.id}>
              <Image src={success.img} alt='success' height={500} width={600} />
            </div>
          ) )
        }
      </div>

      <h1 className=' text-center py-5 text-xl md:text-2xl lg:text-3xl font-bold  bg-yellow-600 my-5  max-w-[550]'>Our EMBA (DU & JU) success Stories </h1>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 justify-center place-items-center '>
        {
          ourSuccessEmba.map((success)=> (
            <div key={success.id}>
              <Image src={success.img} alt='success' height={500} width={600} />
            </div>
          ) )
        }
      </div>
      <div className=''>
    <EnrollButton />
    </div>
   <JoinUsLink />
   </div>
    </div>
  )
}

export default Oursuccess
