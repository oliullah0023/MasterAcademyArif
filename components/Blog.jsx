'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { blogDetils } from '@/constants';
import Link from "next/link";

const Blog = () => {

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
    <div className=' p-6 md:px-20 lg:px-40'>
      <h1 className=' text-center text-red-900 text-3xl font-bold '>Our Blogs</h1>

     <div className='  ml-10 py-6  '>
     <Slider {...settings}>
      {
        blogDetils.map((item) => (
          <div key={item.id}
           className=' border border-gray-400 p-3 shadow-md hover:shadow-2xl rounded-sm  group '
          >
            <h1 className=' text-xl font-bold'>{item.title}</h1>
            <p className=' text-gray-400'>{item.name}</p>
            <p className=' my-3'>{item.desc}</p>
            <Link href={item.url}>
            <button className=" border px-4 py-2 rounded-full group-hover:bg-orange-500 hover:font-semibold">Read more</button>
            </Link>
          </div>
        ))
      }
      </Slider>
     </div>
                
    
       
    </div>
  )
}

export default Blog
