import React from 'react'

const JoinUsLink = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='border border-gray-400 my-8 flex flex-col items-center justify-center p-4 group hover:shadow-2xl max-w-[350px]'>
        <p className=' font-semibold'>#ফ্রি লেকচার এবং JOB/ admission update <br />পেতে নিচের লিংকে ক্লিক করে জয়েন করুনঃ<br />
        
       </p>
       <p><a href="https://www.facebook.com/groups/arifsmbaadmission"
         className=' group-hover:underline hover:text-green-600' target='_blank'
        >https://www.facebook.com/groups/arifsmbaadmission</a></p>
        <p className=' my-5 text-red-500 hover:text-green-300'>Call Us:<a href="+8801790724256">+8801790724256</a></p>
        <p className=' '><span className=' font-bold'> Our Youtube Channel:</span><br /><a href="https://www.youtube.com/@MASTERACADEMY_arif"
         className=' group-hover:underline hover:text-green-600'
        >https://www.youtube.com/@MASTERACADEMY_arif</a></p>

      </div>
      </div>
  )
}

export default JoinUsLink
