import JoinUsLink from '@/components/JoinUsLink'
import { ourSuccessIba } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Success = () => {
  return (
    <div className=' p-6 md:p-20 lg:p-40'>
    <h1 className=' text-center py-5 text-xl md:text-2xl lg:text-3xl font-bold  bg-yellow-600 my-5  max-w-[550]'>Our success Stories </h1>
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 justify-center place-items-center '>
      {
        ourSuccessIba.map((success)=> (
          <div key={success.id}>
            <Image src={success.img} alt='success' height={500} width={500} />
          </div>
        ) )
      }
    </div>
    <JoinUsLink />
  </div>
  )
}

export default Success
