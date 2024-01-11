import { classRoomPhoto } from '@/constants'
import Image from 'next/image'
import React from 'react'

const ClassRoomPhoto = () => {
  return (
    <div className=" flex flex-col py-9 overflow-x-scroll  w-screen  p-4 ">
      <div className=" p-5 pt-7 md:px-20 lg:px-40">
      <h1 className=" text-2xl md:text-3xl lg:text-4xl text-center  bg-red-800 rounded-md p-2 font-bold text-white max-w-[550px] md:ml-40 ">Our Classroom Memories </h1>
    </div>
    <div className=" w-max flex items-center justify-center gap-4">
    {
      classRoomPhoto.map((g) =>(
        <div key={g.id}
         className=" grid  w-[500px]  gap-4 h-[40vh] border-[3px] border-red-800"
        >
           <Image src={g.img}  alt="classroom" width={750} height={450}
            className=" object-cover"
           />
        </div>
      ))
    }
    </div>
  </div>
  )
}

export default ClassRoomPhoto
