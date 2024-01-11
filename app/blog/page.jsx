import {  blogDetilsPage } from '@/constants'
import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <div className=' p-6 md:px-20 lg:px-40'>
      <h1 className=' text-center text-red-900 text-3xl font-bold '>Our Blogs</h1>

     <div className='  ml-10 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center gap-10 '>
    
      {
        blogDetilsPage.map((item) => (
          <div key={item.id}
           className=' border border-green-500 p-3 shadow-md hover:shadow-2xl rounded-sm  group '
          >
            <h1 className=' text-xl font-bold'>{item.title}</h1>
            <p className=' text-gray-400'>{item.name}</p>
            <p className=' my-3'>{item.desc}</p>
            <Link href={item.url}>
            <button className=" border px-4 py-2 rounded-full group-hover:bg-red-400 hover:font-semibold">Read more</button>
            </Link>
          </div>
        ))
      }
     
     </div>
                
    
       
    </div>
  )
}

export default BlogPage
