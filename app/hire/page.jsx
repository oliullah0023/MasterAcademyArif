import Image from 'next/image'
import React from 'react'

const Hire = () => {
  return (
    <div className=' p-6 md:px-20 lg:px-40 flex flex-col items-center'>
      <Image src={'/hiring1.png'} alt=''  height={500} width={600}/>
      <h1 className=' font-bold text-2xl my-5'>Send Us Your CV To: <a href="masteradmissionbd@gmail.com">masteradmissionbd@gmail.com</a></h1>
    </div>
  )
}

export default Hire
