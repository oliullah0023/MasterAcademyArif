
'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { detailsTestimonials } from '@/constants'
import Image from 'next/image'


const Testimonials = () => {

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
    <div className=' my-10 p-6 w-screen  md:px-20 xl:px-40'>

      <h1 className=' uppercase font-bold text-2xl text-center md:text-3xl text-red-900 mb-5'>Testimonials</h1>

       
    <div className=' ml-10  '>
    <Slider {...settings}>
      {
        detailsTestimonials.map((item) =>(
          <div className=' border-[8px]  border-red-900  md:h-[800px]  h-[900] gap-4 p-4 
           
          '
           key={item.id}
          >
          <div className=' flex items-center justify-center'>
           <Image src={item.img} alt='' height={100} width={100}
            className=' rounded-full '
             
           />
            
           </div>
           
           <p className='text-gray-700'>
            {item.desc}
              </p>
               <div className=' flex flex-col items-center justify-center mt-5'>
              <h1 className=' font-bold text-xl'>{item.name}</h1>
             
              <p className=' font-semibold text-base'>{item.prog}</p>
              <p className=' font-semibold text-base'>{item.Institute}</p>
              </div>
        </div>
        ))
      }

</Slider>
        
    </div>
    </div>
  )
}

export default Testimonials
