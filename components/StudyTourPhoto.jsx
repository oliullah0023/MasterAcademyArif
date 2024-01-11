'use client'


import { gallerySlide } from "@/constants";
import Image from "next/image";

const StudyTourPhoto = () => {
  return (
    <div className=" flex overflow-x-scroll  w-screen  p-4 ">
      <div className=" w-max flex items-center justify-center gap-4">
      {
        gallerySlide.map((g) =>(
          <div key={g.id}
           className=" grid  w-[500px]  gap-4 h-[40vh]"
          >
             <Image src={g.img}  alt="galleryImage" width={750} height={450}
              className=" object-cover"
             />
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default StudyTourPhoto
