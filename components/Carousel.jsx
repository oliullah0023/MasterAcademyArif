'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import {BiArrowBack} from 'react-icons/bi'

const Carousel1 = () => {
  return (
    <div>
    <div className='  relative  text-white  my-6 w-full max-w-[1260px] mx-auto overflow-hidden md:my-9 '>
    <Carousel
       autoPlay={true}
       infiniteLoop={true}
       showStatus={false}
       showIndicators={false}
       showThumbs={false}
       interval={5000}
       renderArrowPrev={(clickHandler, hasPrev) => (
        <div
         onClick={clickHandler}
         className=' absolute bottom-40 z-10 bg-black p-2 right-[31px] md:right-[52px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] hover:opacity-70 flex justify-center items-center'
        >
         <BiArrowBack className="text-sm md:text-lg" />
        </div>
       )}

       renderArrowNext={(clickHandler, hasPrev) => (
        <div
         onClick={clickHandler}
         className=' absolute bottom-40 z-10 bg-black p-2 right-0 md:w-[50px] h-[30px] md:h-[50px] hover:opacity-80 flex justify-center items-center'
        >
         <BiArrowBack className=" rotate-180 text-sm md:text-lg" />
        </div>
       )}
    >
         <div className=' '>
         <Image
      src="/carousal1.jpg"
      width={500}
      height={60}
      alt="Picture of the author"
      className=' aspect-[16/10] md:aspect-auto object-contain'
    />
   
    
    </div>
    <div className=' '>
         <Image
      src="/carousal2.jpg"
      width={500}
      height={60}
      alt="Picture of the author"
      className=' aspect-[16/10] md:aspect-auto object-contain'
    />
   
    
    </div>
    <div className=' '>
         <Image
      src="/carousal3.jpg"
      width={500}
      height={60}
      alt="Picture of the author"
      className=' aspect-[16/10] md:aspect-auto object-contain'
    />

    
    </div>
    <div className=' '>
         <Image
      src="/class9.jpg"
      width={500}
      height={60}
      alt="Picture of the author"
      className=' aspect-[16/10] md:aspect-auto object-contain'
    />
   
    </div>

    <div className=' '>
         <Image
      src="/tour1.jpg"
      width={500}
      height={60}
      alt="Picture of the author"
      className=' aspect-[16/10] md:aspect-auto object-contain'
    />
   
    </div>
                      
    </Carousel>

    <div className=" p-5 pt-7 md:px-20 lg:px-40">
      <h1 className=" text-2xl md:text-3xl lg:text-4xl text-center  bg-red-800 rounded-md p-2 font-bold text-white max-w-[550px] md:ml-40 ">Study Tour Memories </h1>
    </div>
    </div>
    </div>
  )
}

export default Carousel1
