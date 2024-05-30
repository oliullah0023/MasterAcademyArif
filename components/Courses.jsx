import { courses } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Courses = () => {
  return (
    <div className=' p-4 md:px-20 xl:px-40 mt-10'>
      <div className=' flex items-center justify-center mb-10'>
      <h1 className=' bg-red-900 rounded-md  text-center text-white text-xl font-bold inline-block items-center p-2 px-16 '>Offline & Online Courses</h1>
      </div>
       <div className='grid
             grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 place-items-center '>
        {
          courses.map((course) => (
            <div key={course.id}
             className=' flex flex-col gap-4 border  max-w-[350px]  shadow-md p-6 px-8 hover:shadow-xl items-center justify-center '
            >
                 <h1 className=' font-bold uppercase text-2xl text-green-600 '>{course.title}</h1>
          <p  className=' text-base text-gray-600'>{course.desc}</p>
          <Link href={course.url}>
          <button className=' uppercase bg-red-400 hover:bg-amber-500 rounded-full p-2 w-[150px] '>Learn more</button>
          </Link>
            </div>
          ))
        }
    
        </div>
    </div>
  )
}

export default Courses
