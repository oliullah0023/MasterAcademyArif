import JoinUsLink from '@/components/JoinUsLink'
import { privateJobCircular } from '@/constants'
import React from 'react'

const PrivateJob = () => {
  return (
    <div className=' p-6 md:px-20 lg:px-40'>
    <h1 className=' text-center text-red-900 text-3xl font-bold '>Recent Private Job Circular</h1>

   <div className='  ml-10 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center gap-10  '>
  
    {
      privateJobCircular.map((item) => (
        <div key={item.id}
         className=' border border-green-400 p-3 shadow-md hover:shadow-2xl shadow-slate-500 rounded-sm  group min-w-[350px] max-w-[350] '
        >
          <h1 className=' text-xl font-bold'>{item.title}</h1>
          <p className=' mt-3 '>{item.post}</p>
          <p className=' '>{item.postName}</p>
          <div className=' flex gap-2 items-center'>
          <button className=" border px-2 py-2 rounded-md group-hover:bg-orange-500 hover:font-semibold">{item.apply}</button>
          <a href={item.applyLink} target='_blank'
           className=' group-hover:underline group-hover:text-blue-400'
          >{item.applyLink}
          </a>
          </div>
        </div>
      ))
    }
   
   </div>
  <JoinUsLink />   
  </div>
  )
}

export default PrivateJob
