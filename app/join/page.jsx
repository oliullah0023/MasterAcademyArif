import JoinUsLink from '@/components/JoinUsLink'
import Image from 'next/image'
import React from 'react'

const JoinPage = () => {
  return (
    <div className=' p-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center md:justify-center'>
      <div className=' '>
        <div><JoinUsLink />
        </div>
      <div>
        <Image src='/contact.png' alt='' width={600} height={500} />
      </div>
      </div>
    </div>
  )
}

export default JoinPage
