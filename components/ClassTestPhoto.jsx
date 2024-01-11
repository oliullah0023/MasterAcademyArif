'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { classTestPhoto } from "@/constants";
import Image from "next/image";

const ClassTestPhoto = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <div className=" py-9 ">
       <div className=" p-5 pt-7 md:px-20 lg:px-40">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl text-center  bg-red-800 rounded-md p-2 font-bold text-white max-w-[550px] md:ml-40 ">Our Class Test Memories </h1>
    </div>
       
       <div className=" ml-8">
        <Slider {...settings}>
          {
            classTestPhoto.map((photo) =>(
              <div key={photo.id}
              className=" border-[4px] border-orange-600 cursor-pointer">
                <Image src={photo.img} alt="Classtest" height={500} width={600}
                 className=" object-contain"
                />
              </div>
            ))
          }
        </Slider>
       </div>
      
    </div>
  )
}

export default ClassTestPhoto
